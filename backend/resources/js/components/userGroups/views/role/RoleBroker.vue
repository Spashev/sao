<script>
import axios from "axios";

export default {
    name: "RoleBroker",
    data: function() {
        return {
            isLoading: false
        };
    },
    methods: {
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ createEditRole ~~~ */

        async createEditRole({ id = null, role, right }) {
            this.isLoading = true;
            const url = id === null ? "create-role" : "edit-role";
            if (id !== null) role["id"] = id;
            await axios
                .post(`/api/user-groups/${url}`, role)
                .then(async response => {
                    if (right.length) {
                        if (response.data.id !== undefined) {
                            id = response.data.id;
                        }
                        await axios
                            .post("/api/user-groups/edit-right", {
                                role_id: id,
                                payload: JSON.stringify(right)
                            })
                            .catch(error => {
                                const key = Object.keys(
                                    error.response.data.errors
                                )[0];
                                console.error(
                                    error.response.data.errors[key][0]
                                );
                            });
                    }
                    this.$router.push({ path: "/user-groups" });
                })
                .catch(error => {
                    const key = Object.keys(error.response.data.errors)[0];
                    console.error(error.response.data.errors[key][0]);
                })
                .finally(() => (this.isLoading = false));
        }

        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    }
};
</script>

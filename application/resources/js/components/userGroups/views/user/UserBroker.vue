<script>
import axios from "axios";

export default {
    name: "UserBroker",
    data: function() {
        return {
            isLoading: false
        };
    },
    methods: {
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ editUser ~~~ */

        async editUser(userId, roleId) {
            this.isLoading = true;
            return await axios
                .post("/api/user-groups/edit-user", {
                    id: userId,
                    role_id: roleId
                })
                .then(response => Boolean(response.data))
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

<script>
import axios from "axios";

export default {
    name: "TheUserGroupsBroker",
    data: function() {
        return {
            isLoading: false
        };
    },
    methods: {
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getListApp ~~~ */

        async getListApp(id = null) {
            this.isLoading = true;
            const payload = id !== null ? { id: id } : null;
            return await axios
                .get("/api/general/get-application", { payload })
                .then(resolve => resolve.data)
                .catch(error => {
                    const key = Object.keys(error.response.data.errors)[0];
                    console.error(
                        "get-application",
                        error.response.data.errors[key][0]
                    );
                })
                .finally(() => (this.isLoading = false));
        },

        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ getData ~~~ */

        async getData(id, action, args = null) {
            this.isLoading = true;
            const payload = id !== null ? { id: id } : null;
            return axios
                .get(`/api/user-groups/${action}`, { ...payload, ...args })
                .then(resolve => resolve.data)
                .catch(error => {
                    const key = Object.keys(error.response.data.errors)[0];
                    console.error(
                        `${action}:`,
                        error.response.data.errors[key][0]
                    );
                })
                .finally(() => (this.isLoading = false));
        }

        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    }
};
</script>

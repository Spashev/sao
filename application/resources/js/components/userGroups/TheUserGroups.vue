<template>
    <main class="container the-user-groups">
        <header class="row the-user-groups__header">
            <h3 class="col">UserGroups</h3>
            <h5 class="col">Управление группами доступа</h5>
        </header>
        <TabMenu v-if="showTabs" :model="items" />
        <router-view :class="showTabs ? 'the-user-groups__tab-content' : ''" />
    </main>
</template>

<!----------------------------------------------------------------------------------------------------------- script -->

<script>
import "primevue/resources/themes/nova-light/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //shared css
import "primeicons/primeicons.css"; //icons

import TabMenu from "primevue/tabmenu";

export default {
    name: "TheUserGroups",
    components: { TabMenu },
    data: function() {
        return {
            items: [
                {
                    label: "Управление ролями",
                    icon: "pi pi-fw pi-key",
                    to: "/user-groups"
                },
                {
                    label: "Список пользователей",
                    icon: "pi pi-fw pi-users",
                    to: "/user-groups/user"
                }
            ]
        };
    },
    computed: {
        showTabs: function() {
            return this.$route.meta.type === undefined;
        }
    }
};
</script>

<!------------------------------------------------------------------------------------------------------------ style -->

<style lang="scss" src="./TheUserGroups.scss" />

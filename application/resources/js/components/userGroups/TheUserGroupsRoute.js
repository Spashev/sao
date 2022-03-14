const path = "/user-groups";
const title = "TheUserGroups";

export default {
    path: path,
    meta: { title: title },
    component: () =>
        import(
            /* webpackChunkName: "js/userGroups" */ "@/components/userGroups/TheUserGroups.vue"
        ),
    children: [
        {
            // path: `${path}/roles`,
            path: "/",
            meta: { title: title },
            component: () =>
                import(
                    /* webpackChunkName: "js/userGroups" */ "@/components/userGroups/views/role/RoleManagement.vue"
                )
        },
        {
            path: `${path}/user`,
            meta: { title: title },
            component: () =>
                import(
                    /* webpackChunkName: "js/userGroups" */ "@/components/userGroups/views/user/UserManagement.vue"
                )
        },
        {
            path: `${path}/role-create`,
            meta: { title: title, type: "create" },
            component: () =>
                import(
                    /* webpackChunkName: "js/userGroups" */ "@/components/userGroups/views/role/RoleEdit.vue"
                )
        },
        {
            path: `${path}/role-edit/:id`,
            meta: { title: title, type: "edit" },
            component: () =>
                import(
                    /* webpackChunkName: "js/userGroups" */ "@/components/userGroups/views/role/RoleEdit.vue"
                )
        }
    ]
};

const path = "/crud";
const title = "TheCrud";

export default {
    path: path,
    meta: {
        title: title
    },
    component: () => import("@/components/crud/TheCrudMain.vue"),
    children: [
        {
            path: "/",
            meta: {title: title},
            component: () => import("@/components/crud/views/CrudIndex.vue")
        },
        {
            path: `${path}/create`,
            meta: {
                requiresAuth: true,
                title: "Crud create",
                breadcrumbs: true
            },
            component: () => import("@/components/crud/views/CrudCreate.vue")
        },
        {
            path: ":id",
            meta: {
                requiresAuth: true,
                title: "Crud detail",
                breadcrumbs: true
            },
            component: () => import("@/components/crud/views/CrudView.vue")
        }
    ]
};

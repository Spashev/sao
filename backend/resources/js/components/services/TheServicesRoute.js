const path = "/services";
const title = "TheServices";

export default {

    path: `${path}`,
    meta: { title: title },
    breadcrumbs: true,
    component: () =>
        import(
             /* webpackChunkName: "js/userGroups" */ "@/components/services/views/services/index.vue"
        ),
    props: true,
    children: [
        {
            // path: `${path}/roles`,
            path: 'group/:id',
            meta: { title: 'Index Group' },
            breadcrumbs: true,
            component: () =>
                import(
                    /* webpackChunkName: "js/userGroups" */ "@/components/services/views/services/index.vue"
                )
        },


    ]


};


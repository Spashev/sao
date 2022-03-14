const path = "/settlements";
const title = "TheSettlements";

export default {

    path: `${path}`,
    meta: { title: title },
    component: () =>
        import(
             /* webpackChunkName: "js/userGroups" */ "@/components/settlements/views/settlements/index.vue"
        ),
    props: true,
    children: [
        {
            // path: `${path}/roles`,
            path: 'view/:id',
            meta: { title: 'View' },
            component: () =>
                import(
                    /* webpackChunkName: "js/userGroups" */ "@/components/settlements/views/settlements/index.vue"
                )
        },


    ]


};


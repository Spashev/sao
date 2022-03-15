const path = "/service";
const title = "TheService";

export default {

    path: `${path}`,
    meta: { title: title },
    breadcrumbs: true,
    component: () =>
        import(
             "@/components/service/views/ServiceView.vue"
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
                    "@/components/service/views/ServiceView.vue"
                )
        },


    ]


};


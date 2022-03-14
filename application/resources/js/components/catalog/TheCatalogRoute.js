const path = "/catalog";
const title = "TheCatalog";

export default {

    path: `${path}`,
    meta: { title: title },
    breadcrumbs: true,
    component: () => import("@/components/catalog/TheCatalog.vue"),
    props: true,
    children: [
        {
            path: `${path}/hops_topology`,
            meta: { title: 'Index Group' },
            breadcrumbs: true,
            component: () => import("@/components/catalog/views/SiteHopTopologyView.vue")
        },
        {
            path: `${path}/notification`,
            meta: { title: 'Index Group' },
            breadcrumbs: true,
            component: () => import("@/components/catalog/views/MainNotification.vue")
        },
    ]


};


const path = "/fault";
const title = "Fault";

export default {
    path: path,
    meta: {
        title: title
    },
    component: () => import("@/components/fault/faultMain.vue"),
    children: [
        {
            path: "/",
            meta: {title: title},
            component: () => import("@/components/fault/views/index.vue")
        },
        {
            path: `${path}/dash`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/fault/views/fault_dash.vue")
        },
        
       /* {
            path: `${path}/3g`,
            meta: {
                requiresAuth: true,
                title: "TroubleTicket create",
                breadcrumbs: true
            },
            component: () => import("@/components/fault/views/fault3g.vue")
        },*/
        /*{
            path: `${path}/4g`,
            meta: {
                requiresAuth: true,
                title: "TroubleTicket create",
                breadcrumbs: true
            },
            component: () => import("@/components/fault/views/fault4g.vue")
        },*/
     
    ]
};

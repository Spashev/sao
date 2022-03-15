const path = "/dashboard";
const title = "Dashboad";

export default {
    path: path,
    meta: {
        title: title
    },
    component: () => import("@/components/dashboard/dashboardMain.vue"),
    children: [
        {
            path: `${path}/4g/summary`,
            meta: {title: title},
            component: () => import("@/components/dashboard/views/4g/pages/common/summary.vue")
        },
        {
            path: `${path}/4g/data_gb_dl`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/4g/pages/data_gb_dl/data_gb_dl.vue")
        },
        {
            path: `${path}/4g/data_gb_ul`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/4g/pages/data_gb_ul/data_gb_ul.vue")
        },
        {
            path: `${path}/4g/mds`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/4g/pages/mds/mds.vue")
        },
        {
            path: `${path}/4g/thrp_ul`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/4g/pages/thrp_ul/thrp_ul.vue")
        },
        {
            path: `${path}/4g/erab_dr`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/4g/pages/erab_dr/erab_dr.vue")
        },
        {
            path: `${path}/4g/mob_sr`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/4g/pages/mob_sr/mob_sr.vue")
        },



        {
            path: `${path}/3g/summary`,
            meta: {title: title},
            component: () => import("@/components/dashboard/views/3g/pages/common/summary.vue")
        },
        {
            path: `${path}/3g/data_gb_dl`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/3g/pages/data_gb_dl/data_gb_dl.vue")
        },
        {
            path: `${path}/3g/data_gb_ul`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/3g/pages/data_gb_ul/data_gb_ul.vue")
        },
        {
            path: `${path}/3g/mds`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/3g/pages/mds/mds.vue")
        },
        {
            path: `${path}/3g/thrp_ul`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/3g/pages/thrp_ul/thrp_ul.vue")
        },
        {
            path: `${path}/3g/voice_erl`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/3g/pages/voice_erl/voice_erl.vue")
        },
        {
            path: `${path}/3g/mcdr`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/3g/pages/mcdr/mcdr.vue")
        },
        {
            path: `${path}/3g/rrc_cs_sr`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/3g/pages/rrc_cs_sr/rrc_cs_sr.vue")
        },
        {
            path: `${path}/3g/rrc_ps_sr`,
            meta: {
                requiresAuth: true,
                title: "fault Dashboard",
                breadcrumbs: true
            },
            component: () => import("@/components/dashboard/views/3g/pages/rrc_ps_sr/rrc_ps_sr.vue")
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

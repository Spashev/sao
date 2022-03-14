import Vue from "vue";
import VueRouter from "vue-router";

import { default as TheUserGroupsRoute } from "@/components/userGroups/TheUserGroupsRoute.js";
import { default as TheCrudsRoute } from "@/components/crud/TheCrudsRoute.js";
import { default as TheTroubleTicketsRoute } from "@/components/troubleticket/TheTroubleTicketsRoute.js";
import { default as TheServicesRoute } from "@/components/services/TheServicesRoute.js";
import { default as TheServiceRoute } from "@/components/service/TheServiceRoute.js";
import { default as TheSettlementRoute } from "@/components/settlements/TheSettlementRoute.js";
import { default as TheCatalogRoute } from "@/components/catalog/TheCatalogRoute.js";
import { default as TheUserSettingsRoute } from "@/components/userSettings/TheUserSettingsRoute.js";
import { default as TheInformRoute } from "@/components/inform/TheInformRoute.js";
import { default as faultRoute } from "@/components/fault/faultRoute.js";
import { default as dashboardRoute } from "@/components/dashboard/dashBoardRoute.js";
Vue.use(VueRouter);

const routes = [
    {
        path: "*",
        component: () =>
            import(
                /* webpackChunkName: "js/error" */ "@/components/error/TheNotFound.vue"
            )
    },
    {
        path: "/login",
        component: () => import("@/components/auth/TheLogin")
    },
    {
        path: "/test",
        name: "Test",
        meta: {
            requiresAuth: true,
            title: "Test"
        },
        component: () => import("@/components/TheTest.vue")
    },
    {
        path: "/alarms",
        name: "Alarms",
        meta: {
            requiresAuth: true,
            title: "Alarms"
        },
        component: () => import("@/components/alarms/views/index.vue")
    },
    {
        path: "/references",
        name: "References",
        meta: {
            requiresAuth: true,
            title: "References"
        },
        component: () => import("@/components/reference/views/index.vue")
    },
    {
        path: "/",
        name: "Dashboard",
        meta: {
            requiresAuth: true,
            title: "Главная"
        },
        component: () =>
            import(
                /* webpackChunkName: "js/dashboard" */ "@/components/TheDashboard.vue"
            )
    },
    TheUserGroupsRoute,
    TheCrudsRoute,
    TheTroubleTicketsRoute,
    faultRoute,
    dashboardRoute,
    TheServicesRoute,
    TheSettlementRoute,
    TheServiceRoute,
    TheCatalogRoute,
    TheUserSettingsRoute,
    TheInformRoute,
    {
        path: "/scheme",
        component: () => import("@/components/scheme/TheComponentMain"),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: "/",
                meta: {
                    requiresAuth: true,
                    title: "Схема",
                    breadcrumbs: true
                },
                component: () => import("@/components/scheme/TheComponentList")
            },
            {
                path: ":id",
                meta: {
                    requiresAuth: true,
                    title: "Схема деталь",
                    breadcrumbs: true
                },
                component: () => import("@/components/scheme/TheComponentView")
            }
        ]
    },
    {
        // path: `${path}/roles`,
        path: '/services/group/:id/view/:vid',
        meta: { title: 'View' },
        component: () =>
            import(
                /* webpackChunkName: "js/userGroups" */ "@/components/services/views/services/index.vue"
            )
    },
  
];

const router = new VueRouter({
    mode: "history",
    //base: process.env.BASE_URL,
    routes
});

export default router;

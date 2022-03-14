const path = "/troubleticket";
const title = "TheTroubleTicket";

export default {
    path: path,
    meta: {
        title: title
    },
    component: () => import("@/components/troubleticket/TheTroubleTicketMain.vue"),
    children: [
        {
            path: "page/:type/",
            meta: {
                requiresAuth: true,
                title: "Тикеты",
                breadcrumbs: true
            },
            component: () => import("@/components/troubleticket/views/TicketIndex.vue")
        },
        {
            path: `${path}/create`,
            meta: {
                requiresAuth: true,
                title: "Создание тикета",
                breadcrumbs: true
            },
            component: () => import("@/components/troubleticket/views/TicketCreate.vue")
        },
        {
            path: ":id",
            meta: {
                requiresAuth: true,
                title: "Информация по тикету",
                breadcrumbs: true
            },
            component: () => import("@/components/troubleticket/views/TicketView.vue")
        },
        {
            path: "resource/:id/:id_subticket",
            meta: {
                requiresAuth: true,
                title: "Resource ticket detail",
                breadcrumbs: true
            },
            component: () => import("@/components/troubleticket/views/TicketResourceView.vue")
        },
        {
            path: "update/:id",
            meta: {
                requiresAuth: true,
                title: "Trouble ticket update page",
                breadcrumbs: true
            },
            component: () => import("@/components/troubleticket/views/TicketUpdate.vue")
        }
    ]
};

const path = "/inform";
const title = "TheInform";

export default {
    path: path,
    meta: {
        title: title
    },
    component: () => import("@/components/inform/TheInform.vue"),
    children: [
        {
            path: `${path}/troubleticket/:type/:tt_type/:priority/:network_type`,
            meta: {title: title},
            component: () => import("@/components/inform/views/TroubleTicketList.vue")
        }
    ]
};

const path = "/userSettings";
const title = "TheUserSettings";

export default {
    path: path,
    meta: {
        title: title
    },
    component: () => import("@/components/userSettings/views/UserView.vue"),
    children: [
        {
            path: "/",
            meta: {title: title},
            component: () => import("@/components/userSettings/views/UserView.vue")
        }
    ]
};

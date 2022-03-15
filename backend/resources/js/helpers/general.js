import {LOGOUT} from "@/components/auth";
import axios from "axios";
import {SET_BREADCRUMBS} from "./helpersStore";

export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

        const currentUser = store.state.auth.isLogged;

        const DEFAULT_TITLE = 'ESUR';

        const APP_VERSION = 'v.1.0.6.8.5';

        document.title = DEFAULT_TITLE + ' - ' + to.meta.title;

        if (!to.matched.some(record => record.meta.breadcrumbs)) {
            store.dispatch(SET_BREADCRUMBS, []);
        }
        let newState = {};
        store.state.scheme.actions = null;
        store.state.helpers.version = APP_VERSION;

        if (requiresAuth && !currentUser) {
            next('/login');
        } else if (to.path == '/login' && currentUser) {
            next('/');
        } else {
            next();
        }
    });

    axios.interceptors.response.use(null, (error) => {
        console.log('interceptors', error);
        if (error.response.status == 401) {
            // store.commit('logout');
            store.dispatch(LOGOUT);
            router.push('/login');
        }

        return Promise.reject(error);
    });

}

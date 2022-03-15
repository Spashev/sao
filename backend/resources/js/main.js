/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("@/bootstrap");

import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import vuelidate from "vuelidate";
import panZoom from 'vue-panzoom';


import router from "@/router";
import store from "@/store";

import "@/main.scss";
import App from "@/App.vue";

import {initialize} from "./helpers/general";
import Multiselect from "vue-multiselect";
import VueMask from 'v-mask';


Vue.config.productionTip = false;

initialize(store, router);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueMask);
Vue.use(vuelidate);
Vue.use(panZoom);
Vue.component('multiselect', Multiselect);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

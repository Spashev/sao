import Vue from "vue";
import Vuex from "vuex";
import { authStore } from "@/components/auth";
import { schemeStore } from "@/components/scheme";
import { helpersStore } from "@/helpers";
import { userGroupsStore } from "@/components/userGroups";
import { crudStore } from "@/components/crud";
import { troubleticketStore } from "@/components/troubleticket";
import { servicesStore } from "@/components/services";
import { serviceStore } from "@/components/service";
import { settlementStore } from "@/components/settlements";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        helpers: helpersStore,
        auth: authStore,
        scheme: schemeStore,
        userGroups: userGroupsStore,
        crudStore: crudStore,
        troubleticketStore: troubleticketStore,
        servicesStore: servicesStore,
        serviceStore: serviceStore,
        settlementStore: settlementStore, 
    }
});

<template>
    <div class="app">
        <TheLogin v-if="isLogged === false" />
        <template v-else>
            <TheMainHeader />
            <b-container class="app_menu">
                <TheMainMenu />
            </b-container>
            <b-container class="app__body" fluid>
                <TheBreadcrumb/>
                <TheNotification/>
                <router-view class="app__main"/>
                <!-- <TheMainFooter /> -->
            </b-container>
        </template>
    </div>
</template>

<!----------------------------------------------------------------------------------------------------------- script -->

<script>
    import {mapState} from "vuex";
    import {TheMainHeader} from "@/components/layout";
    import {TheBreadcrumb} from "./components/layout";
    import {TheNotification} from "./components/layout";
    import {TheMainMenu} from "./components/layout";

    const TheLogin = () =>
        import(/* webpackChunkName: "js/auth" */ "@/components/auth/TheLogin.vue");

    export default {
        name: "App",
        components: {TheBreadcrumb, TheNotification, TheLogin, TheMainHeader, TheMainMenu},
        computed: mapState({
            isLogged: state => state.auth.isLogged
        })
    };
</script>

<!------------------------------------------------------------------------------------------------------------ style -->

<style lang="scss">
@import "@/config.scss";

.app {
    padding-top: $header-height;

    &__body {
        display: flex;
        flex-direction: column;
        height: inherit;
    }

    &__main {
        margin-bottom: auto;
    }
}
</style>

<template>
    <b-list-group class="menu_list">
        <router-link :to="`/`">
            <b-list-group-item>
                <b-icon icon="easel" class="rounded bg2-secondary p-3" scale="1.5" font-scale="3" variant="white"></b-icon>
            </b-list-group-item>
        </router-link>
        <router-link :to="`/troubleticket/page/3/#`" v-bind:class="[breadcrumbs[1]['link'] == 'troubleticket' ? 'router-link-exact-active' : '']">
            <b-list-group-item v-b-popover.hover.right="{ variant: 'primary',  content: 'Тикеты' }"> 
                <b-icon icon="tags" class="rounded bg2-secondary p-3" scale="1.5" font-scale="3" variant="white"></b-icon>
            </b-list-group-item>
        </router-link>
        <router-link :to="`/fault/dash`"  v-bind:class="[breadcrumbs[1]['link'] == 'fault' ? 'router-link-exact-active' : '']">
            <b-list-group-item v-b-popover.hover.right="{ variant: 'primary',  content: 'Аварии' }"> 
                <b-icon icon="exclamation-triangle-fill" class="rounded bg2-secondary p-3" scale="1.5" font-scale="3" variant="white"></b-icon>
            </b-list-group-item>
        </router-link>
        <router-link :to="`/references`" v-bind:class="[breadcrumbs[1]['link'] == 'references' ? 'router-link-exact-active' : '']">
            <b-list-group-item v-b-popover.hover.right="{ variant: 'primary',  content: 'Справочники' }">
                <b-icon icon="journals" class="rounded bg2-secondary p-3" scale="1.5" font-scale="3" variant="white"></b-icon>
            </b-list-group-item>
        </router-link>
        <router-link :to="`/scheme`" v-bind:class="[breadcrumbs[1]['link'] == 'scheme' ? 'router-link-exact-active' : '']">
            <b-list-group-item v-b-popover.hover.right="{ variant: 'primary',  content: 'Схема' }">
                <b-icon icon="diagram3" class="rounded bg2-secondary p-3" scale="1.5" font-scale="3" variant="white"></b-icon>
            </b-list-group-item>
        </router-link>
        <router-link :to="`/user-groups`" v-bind:class="[breadcrumbs[1]['link'] == 'scheme' ? 'router-link-exact-active' : '']">
            <b-list-group-item v-b-popover.hover.right="{ variant: 'primary',  content: 'Права доступа' }">
                <b-icon icon="people" class="rounded bg2-secondary p-3" scale="1.5" font-scale="3" variant="white"></b-icon>
            </b-list-group-item>
        </router-link>
          <router-link :to="`/dashboard/4g/summary`" v-bind:class="[breadcrumbs[1]['link'] == 'dashboard/4g/summary' ? 'router-link-exact-active' : '']">
            <b-list-group-item v-b-popover.hover.right="{ variant: 'primary',  content: 'Dashboards' }">
                <b-icon icon="graph-up" class="rounded bg2-secondary p-3" scale="1.5" font-scale="3" variant="white"></b-icon>4g
            </b-list-group-item>
        </router-link>
         <router-link :to="`/dashboard/3g/summary`" v-bind:class="[breadcrumbs[1]['link'] == 'dashboard/3g/summary' ? 'router-link-exact-active' : '']">
            <b-list-group-item v-b-popover.hover.right="{ variant: 'primary',  content: 'Dashboards' }">
                <b-icon icon="graph-up" class="rounded bg2-secondary p-3" scale="1.5" font-scale="3" variant="white"></b-icon>3g
            </b-list-group-item>
        </router-link>
    </b-list-group>
    
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "MainMenu",
        computed: {
            ...mapGetters(["breadcrumbs"])
        }
    }
</script>

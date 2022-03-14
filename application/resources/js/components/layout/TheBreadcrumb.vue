<template>
    <div class="no-space" style="background: #daeaff; border-bottom: 1px solid #28669b;">
        <div class="float-left text-right">
            <button class="btn btn-sm float-left" type="button" @click="$router.go(-1)">
                <b-icon icon="arrow-bar-left" class="rounded" scale="1" font-scale="2" variant="primary"></b-icon>
            </button>
        </div>
        <div class="float-left text-left">
            <b-breadcrumb v-if="breadcrumbs[0]" :items="breadcrumbs"></b-breadcrumb>
        </div>
        <div class="float-right text-right px-4 py-2">
            <span style="font-weight:bold; font-size:10px;">{{app_version}}</span>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "TheBreadcrumb",
        computed: {
            ...mapGetters(["breadcrumbs","app_version"])
        }
    }
</script>

<style scoped>

</style>

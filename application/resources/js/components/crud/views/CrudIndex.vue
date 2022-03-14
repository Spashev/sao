<template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">{{ this.getTitle(this.breadcrumbs) }}
                        <router-link :to="`crud/create`">
                            <button class="btn btn-sm btn-outline-primary float-right">Добавить</button>
                        </router-link>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-danger m-2" v-if="errors">
                            {{ errors }}
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th class="table__id">ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                    <th style="width: 100px;"></th>
                                </tr>
                                </thead>
                                <tbody v-if="cruds">
                                <tr v-for="(item, index) in cruds" :key="index">
                                    <td class="table__id">{{ item.id }}</td>
                                    <td>
                                        <router-link :to="`/crud/${item.id}`">{{ item.title }}</router-link>
                                    </td>
                                    <td>{{ item.description }}</td>
                                    <td>{{ item.act_title }}</td>
                                    <td>
                                        <router-link :to="`/crud/${item.id}`">
                                            <b-button variant="outline-secondary" size="sm" class="p-1">
                                                <b-icon icon="eye" aria-hidden="true"></b-icon>
                                            </b-button>
                                        </router-link>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot v-else>
                                <td class="text-center" colspan="4">Данные отсутствуют</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios/index';
    axios.defaults.withCredentials = true;
    import {SET_CRUDS} from "../crudStore";
    import {mapGetters} from "vuex";
    import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
    import VueLoading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "CrudIndex",
        mixins: [TheContentMixin],
        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'Главная',
                        to: {path: '/'}
                    },
                    {
                        text: 'CRUD',
                        active: true
                    }
                ],
                errors: null,
                isLoading: true
            }
        },
        components:{
            Loading: VueLoading
        },
        computed: {
            ...mapGetters(["cruds"])
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
            this.fetchData();
        },
        methods: {
            async fetchData() {
                await this.$store.dispatch(SET_CRUDS);
                this.isLoading = false;
            },
        }
    }
</script>

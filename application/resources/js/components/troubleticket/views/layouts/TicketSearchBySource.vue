<template>
    <div style="background:#efefef; height:100%">
        <div class="row no-space">
            <div class="col-md-12 no-space">
                <div style="background:#b1c4e7; border-bottom:1px solid black; padding:5px;">
                    Результат поиска по ресурсу <span style="font-weight:bold; font-size:14px;">{{source_name}}</span> за последние 14 дней:
                </div>
            </div>
        </div>
        <div class="row no-space" style="height:40%; overflow-y:auto;">
            <div class="col-md-12 no-space">
                <div style="background:#e4ebff; border-bottom:1px solid black; padding:5px;">
                    Тикеты:
                </div>
                <div>
                    <table class="table table-sm table-light">
                        <tr>
                            <th>ID</th>
                            <th>Начало</th>
                            <th>Конец</th>
                            <th>Тип</th>
                            <th>Приоритет</th>
                            <th>Статус</th>
                            <th>Создан</th>
                        </tr>
                        <tr v-for="(item, index) in ticket_list" :key="index">
                            <td>
                                <router-link :to="`/troubleticket/`+item.id"> 
                                    <a href="#">{{ item.id }}</a>
                                </router-link>
                            </td>
                            <td>{{ item.start_date }}</td>
                            <td>{{ item.finish_date }}</td>
                            <td>{{ item.tt_type_name }}</td>
                            <td>{{ item.priority_name }}</td>
                            <td>{{ item.status_name }}</td>
                            <td>{{ item.created_user }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="row no-space" style="height:40%; overflow-y:auto;">
            <div class="col-md-12 no-space">
                <div style="background:#e4ebff; border-bottom:1px solid black; padding:5px;">
                    Аварии:
                </div>
                <div>
                    <table class="table table-sm table-light">
                        <tr>
                            <th>Техн.</th>
                            <th>Начало</th>
                            <th>Конец</th>
                            <th>Тип</th>
                            <th>Авария</th>
                            <th>ID TTs</th>
                        </tr>
                        <tr v-for="(item, index) in alarm_list" :key="index">
                            <td>{{ item.technology }}</td>
                            <td>{{ item.date_raised }}</td>
                            <td>{{ item.date_cleared }}</td>
                            <td>{{ item.subtype_name }}</td>
                            <td>{{ item.fault_name }}</td>
                            <td>{{ item.id_trouble }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {required, minLength, requiredIf} from 'vuelidate/lib/validators'
    import axios from 'axios';
    import VueLoading from 'vue-loading-overlay';
    import VueBootstrap4Table from "vue-bootstrap4-table";
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "TicketSearchBySource",
        components: {Loading: VueLoading},
        props: {
            source_name: {
                type: String
            },
            ticket_list: {
                type: Array
            },
            alarm_list: {
                type: Array 
            }
        },
        computed: {},
        data() {
            return {
                list_loaded: 0
            }
        },
        created: function () {
            testData();
        },
        watch: {
            
        },
        computed: {
        },
        methods: {
            testData() {
                console.log(this.ticket_list);
            },
        }
    }
</script>
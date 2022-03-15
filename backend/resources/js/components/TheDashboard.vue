<template>
    <div>
        <div class="row" style="margin:20px 0 0 0;">
            <div class="col-md-3">
                <div style="background:#dae0e4;">
                    <p class="info-title" style="padding: 5px 10px; margin: 0px;">Активные тикеты</p>
                    <div style="min-height:650px; padding: 5px 10px; margin: 2px; background:#f1f2f3;">
                        <div style="padding: 5px 10px; margin: 0px;">
                            <span style="font-weight:bold; font-size:10px;">Сервис тикеты</span>
                            <hr style="margin:3px 0;" />
                            <div style="padding: 5px 0 5px 10px; margin: 0px;">
                                <span style="font-weight:bold; font-size:10px;">Telco</span>
                                <hr style="margin:3px 0;" />
                                <div style="padding: 5px 0 5px 10px; margin: 0px;">
                                    <span style="font-weight:bold; font-size:10px;">Инциденты</span>
                                    <hr style="margin:3px 0;" />
                                    <div style="padding: 5px 0 5px 5px; margin: 0px; text-align:left">
                                        <div class="badge badge-prior_1" style="color:white; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['Telco'][2][1]">
                                                {{main_info['Telco'][2][1]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['Telco'][2][1]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">emergency</span>
                                        </div>
                                        <div class="badge badge-prior_2" style="color:white; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['Telco'][2][2]">
                                                {{main_info['Telco'][2][2]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['Telco'][2][2]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">critical</span>
                                        </div>
                                        <div class="badge badge-prior_3" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['Telco'][2][3]">
                                                {{main_info['Telco'][2][3]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['Telco'][2][3]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">high</span>
                                        </div>
                                        <div class="badge badge-prior_4" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['Telco'][2][4]">
                                                {{main_info['Telco'][2][4]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['Telco'][2][4]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">medium</span>
                                        </div>
                                    </div>
                                </div>
                                <hr style="margin:3px 0;" />
                                <div style="padding: 5px 0 5px 10px; margin: 0px;">
                                    <span style="font-weight:bold; font-size:10px;">События</span>
                                    <hr style="margin:3px 0;" />
                                    <div style="padding: 5px 0 5px 5px; margin: 0px; text-align:right">
                                        <div class="badge badge-prior_2" style="color:white; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['Telco'][1][2]">
                                                {{main_info['Telco'][1][2]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['Telco'][1][2]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">critical</span>
                                        </div>
                                        <div class="badge badge-prior_3" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['Telco'][1][3]">
                                                {{main_info['Telco'][1][3]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['Telco'][1][3]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">high</span>
                                        </div>
                                        <div class="badge badge-prior_4" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['Telco'][1][4]">
                                                {{main_info['Telco'][1][4]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['Telco'][1][4]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">medium</span>
                                        </div>
                                        <div class="badge badge-prior_5" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['Telco'][1][5]">
                                                {{main_info['Telco'][1][5]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['Telco'][1][5]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">low</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style="margin:3px 0;" />
                            <div style="padding: 5px 0 5px 10px; margin: 0px;">
                                <span style="font-weight:bold; font-size:10px;">IT</span>
                                <hr style="margin:3px 0;" />
                                <div style="padding: 5px 0 5px 10px; margin: 0px;">
                                    <span style="font-weight:bold; font-size:10px;">Инциденты</span>
                                    <hr style="margin:3px 0;" />
                                    <div style="padding: 5px 0 5px 5px; margin: 0px; text-align:left">
                                        <div class="badge badge-prior_1" style="color:white; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['IT'][2][1]">
                                                {{main_info['IT'][2][1]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['IT'][2][1]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">emergency</span>
                                        </div>
                                        <div class="badge badge-prior_2" style="color:white; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['IT'][2][2]">
                                                {{main_info['IT'][2][2]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['IT'][2][2]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">critical</span>
                                        </div>
                                        <div class="badge badge-prior_3" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['IT'][2][3]">
                                                {{main_info['IT'][2][3]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['IT'][2][3]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">high</span>
                                        </div>
                                        <div class="badge badge-prior_4" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['IT'][2][4]">
                                                {{main_info['IT'][2][4]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['IT'][2][4]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">medium</span>
                                        </div>
                                    </div>
                                </div>
                                <hr style="margin:3px 0;" />
                                <div style="padding: 5px 0 5px 10px; margin: 0px;">
                                    <span style="font-weight:bold; font-size:10px;">События</span>
                                    <hr style="margin:3px 0;" />
                                    <div style="padding: 5px 0 5px 5px; margin: 0px; text-align:right">
                                        <div class="badge badge-prior_2" style="color:white; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['IT'][1][2]">
                                                {{main_info['IT'][1][2]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['IT'][1][2]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">critical</span>
                                        </div>
                                        <div class="badge badge-prior_3" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['IT'][1][3]">
                                                {{main_info['IT'][1][3]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['IT'][1][3]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">high</span>
                                        </div>
                                        <div class="badge badge-prior_4" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['IT'][1][4]">
                                                {{main_info['IT'][1][4]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['IT'][1][4]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">medium</span>
                                        </div>
                                        <div class="badge badge-prior_5" style="color:black; min-width:45px;">
                                            <span style="font-size:14px;" v-if="main_info['IT'][1][5]">
                                                {{main_info['IT'][1][5]}}
                                            </span>
                                            <span style="font-size:14px;" v-if="!main_info['IT'][1][5]">
                                                0
                                            </span>
                                            <br/>
                                            <span style="font-size:7px;">low</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style="margin:3px 0;" />
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div style="background:#dae0e4;">
                    <p class="info-title" style="padding: 5px 10px; margin: 0px;">Недоступные сайты</p>
                    <GmapMap
                        :center="{lat:48.005284, lng:66.9045435}"
                        :zoom="5"
                        map-type-id="terrain"
                        style="width: 100%; height: 650px"
                        :options='{
                            zoomControl: zoomCtrl,
                            mapTypeControl: false,
                            scaleControl: false,
                            streetViewControl: false,
                            rotateControl: false,
                            fullscreenControl: false,
                            disableDefaultUI: false,
                            styles: mapStyle
                        }'
                    >
                        <GmapCluster>
                            <GmapMarker v-for="(m, index) in new_markers"
                            :position="m.position"
                            :clickable="true" :draggable="true"
                            @click="center=m.position"
                            :key="index"
                            ></GmapMarker>
                        </GmapCluster>
                    </GmapMap>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .info-block{
        height: 250px;
        padding: 10px;
        color: white;
    }
    .info-title{
        font-weight: bold;
    }
    .info-table{
        text-align: right;
        color: white;
        font-size: 12px;
    }
    .info-table>tr>td{
        border: none;
    }
</style>

<script>
    import Vue from "vue";
    import axios from 'axios/index';
    import TheContentMixin from "../helpers/mixins/TheContentMixin";

    import * as VueGoogleMaps from 'vue2-google-maps'
    import GmapCluster from 'vue2-google-maps/dist/components/cluster'

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyDegTtJtI_yJFGYwLKMRezu0F8VecMlR7I',
            mapId: "355bcfdeeb03764f",
        },
    })

    export default {
        name: "Dashboard",
        mixins: [TheContentMixin],
        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'Главная',
                        link: '/',
                        to: {path: '/'}
                    },
                    {
                        text: 'Dashboard',
                        link: 'dashboard',
                        active: true
                    }
                ],
                map_info: [],
                main_info: {
                    'Telco': {
                        1: {
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0
                        },
                        2: {
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0
                        }
                    },
                    'IT': {
                        1: {
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0
                        },
                        2: {
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0
                        }
                    },
                },
                mapStyle: 
                        [
                            {
                                "elementType": "geometry",
                                "stylers": [
                                {
                                    "color": "#212121"
                                }
                                ]
                            },
                            {
                                "elementType": "labels.icon",
                                "stylers": [
                                {
                                    "visibility": "off"
                                }
                                ]
                            },
                            {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#757575"
                                }
                                ]
                            },
                            {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                {
                                    "color": "#212121"
                                }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry",
                                "stylers": [
                                {
                                    "color": "#757575"
                                }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "labels",
                                "stylers": [
                                {
                                    "visibility": "off"
                                }
                                ]
                            },
                            {
                                "featureType": "administrative.country",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "weight": 1.5
                                }
                                ]
                            },
                            {
                                "featureType": "administrative.country",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                                ]
                            },
                            {
                                "featureType": "administrative.land_parcel",
                                "stylers": [
                                {
                                    "visibility": "off"
                                }
                                ]
                            },
                            {
                                "featureType": "administrative.locality",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels",
                                "stylers": [
                                {
                                    "visibility": "off"
                                }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels.icon",
                                "stylers": [
                                {
                                    "visibility": "off"
                                }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#757575"
                                }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry",
                                "stylers": [
                                {
                                    "color": "#181818"
                                }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "labels",
                                "stylers": [
                                {
                                    "visibility": "off"
                                }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#616161"
                                },
                                {
                                    "visibility": "off"
                                }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                {
                                    "color": "#1b1b1b"
                                },
                                {
                                    "visibility": "off"
                                }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry.fill",
                                "stylers": [
                                {
                                    "color": "#2c2c2c"
                                }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#8a8a8a"
                                }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                {
                                    "color": "#373737"
                                }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [
                                {
                                    "color": "#3c3c3c"
                                }
                                ]
                            },
                            {
                                "featureType": "road.highway.controlled_access",
                                "elementType": "geometry",
                                "stylers": [
                                {
                                    "color": "#4e4e4e"
                                }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#616161"
                                }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#757575"
                                }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                {
                                    "color": "#000000"
                                }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                {
                                    "color": "#3d3d3d"
                                }
                                ]
                            }
                        ],
                zoomCtrl: false,
                markers: [
                    { position: { lat: 43.2261857, lng: 76.9440298 } }, 
                    { position: { lat: 43.2361857, lng: 76.9140298 } }, 
                    { position: { lat: 43.2461857, lng: 76.9240298 } }, 
                    { position: { lat: 43.2561857, lng: 76.9340298 } },
                    { position: { lat: 51.2475669, lng: 71.4943358 } },
                    { position: { lat: 51.1475669, lng: 71.3343358 } },
                    { position: { lat: 51.1175669, lng: 71.3543358 } },
                    { position: { lat: 51.1975669, lng: 71.3143358 } },
                    { position: { lat: 51.2175669, lng: 71.4343358 } },
                ],
                new_markers: [],
            }
        },
        components:{
           GmapCluster
        },
        created: async function () {
        },
        computed: {
        },
        mounted() {
            this.generateBreadcrumb(this.breadcrumbs);
            this.getTicketInfo();
        },
        methods: {
            getTicketInfo(){
                this.isLoading = true; 
                axios.get(`/api/troubleticket/dashboard_info/search`)
                    .then((response) => {
                        this.map_info = response.data.map_info;
                        this.main_info = response.data.main_info;


                        var new_markers2 = [];
                        var data = {};
                        response.data.map_info.map(
                            function(value, key) {
                                //console.log(parseFloat( value.lat ));
                                data = {};
                                data.lat = parseFloat( value.lat );
                                data.lng = parseFloat( value.lng );

                                new_markers2.push({
                                    position: data,
                                    title: 'test title',
                                });
                            }
                        );

                        this.new_markers = new_markers2;
                    });
            },
        }
    }
</script>


<template>
    <div>
        <div class="row" style="margin:20px 0 0 0;">
            <div class="col-md-3">
                <div class="info-block" style="background:#34495e;">
                    <p class="info-title">Активные тикеты</p>
                    <div>
                        Сервис тикеты
                    </div>
                    <hr/>
                    <div>
                        Ресурс тикеты
                    </div>
                    <div>
                        Клиент тикеты
                    </div>
                    <div>
                        Служебные тикеты
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info-block" style="background:#00bcd4;">
                    <p class="info-title">Ближайщие плановые работы</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info-block" style="background:#ba68c8;">
                    <p class="info-title">Доступность сети</p>
                    <table class="table table-sm info-table" style="border:none;">
                        <tr>
                            <td></td>
                            <td style="width:80px">1H</td>
                            <td style="width:80px">24H</td>
                            <td style="width:80px">Week</td>
                        </tr>
                        <tr>
                            <td>Almaty</td>
                            <td>99.5%</td>
                            <td>99.3%</td>
                            <td>99.7%</td>
                        </tr>
                        <tr>
                            <td>Astana</td>
                            <td>99.5%</td>
                            <td>99.3%</td>
                            <td>99.7%</td>
                        </tr>
                        <tr>
                            <td>South</td>
                            <td>99.5%</td>
                            <td>99.3%</td>
                            <td>99.7%</td>
                        </tr>
                        <tr>
                            <td>North</td>
                            <td>99.5%</td>
                            <td>99.3%</td>
                            <td>99.7%</td>
                        </tr>
                        <tr>
                            <td>East</td>
                            <td>99.5%</td>
                            <td>99.3%</td>
                            <td>99.7%</td>
                        </tr>
                        <tr>
                            <td>West</td>
                            <td>99.5%</td>
                            <td>99.3%</td>
                            <td>99.7%</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info-block" style="background:#337ab7;">
                    <p class="info-title">Отклонения траффика от нормы</p>
                    <table class="table table-sm info-table" style="border:none;">
                        <tr>
                            <td></td>
                            <td style="width:100px">Голос</td>
                            <td style="width:100px">Дата</td>
                        </tr>
                        <tr>
                            <td>Almaty</td>
                            <td>+2.5%</td>
                            <td>-1.3%</td>
                        </tr>
                        <tr>
                            <td>Astana</td>
                            <td>+2.5%</td>
                            <td>-1.3%</td>
                        </tr>
                        <tr>
                            <td>South</td>
                            <td>+2.5%</td>
                            <td>-1.3%</td>
                        </tr>
                        <tr>
                            <td>North</td>
                            <td>+2.5%</td>
                            <td>-1.3%</td>
                        </tr>
                        <tr>
                            <td>East</td>
                            <td>+2.5%</td>
                            <td>-1.3%</td>
                        </tr>
                        <tr>
                            <td>West</td>
                            <td>+2.5%</td>
                            <td>-1.3%</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="row" style="margin:20px 0 0 0;">
            <div class="col-md-6">

            </div>
            <div class="col-md-6">
                <div style="background:#dae0e4;">
                    <p class="info-title" style="padding: 5px 10px; margin: 0px;">Недоступные сайты</p>
                    <GmapMap
                        :center="{lat:48.005284, lng:66.9045435}"
                        :zoom="4.6"
                        map-type-id="terrain"
                        style="width: 100%; height: 500px"
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
                            <GmapMarker v-for="(m, index) in markers"
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
        data() {
            return {
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
                ]
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
            
        },
        methods: {
        }
    }
</script>
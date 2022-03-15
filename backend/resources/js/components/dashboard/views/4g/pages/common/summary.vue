<template>
  <div class="container-fluid">
    <Menu />
   
    <div class="row">
        <div class="col-sm-6">
             <router-link class="nav-link active"  :to="'/dashboard/4g/data_gb_dl'">
              <BarChart/>
              </router-link>
        </div>
         <div class="col-sm-6">
           <router-link class="nav-link active"  :to="'/dashboard/4g/data_gb_ul'">
              <BarChart2/>
                 </router-link>
        </div>
            <div class="col-sm-6">
          <router-link class="nav-link active"  :to="'/dashboard/4g/mds'">
              <BarChart4/>
                 </router-link>
        </div>
          <div class="col-sm-6">
          <router-link class="nav-link active"  :to="'/dashboard/4g/thrp_ul'">
              <BarChart6/>
                 </router-link>
        </div>
        <div class="col-sm-6">
          <router-link class="nav-link active"  :to="'/dashboard/4g/erab_dr'">
              <BarChart3/>
                 </router-link>
        </div>
    
        <div class="col-sm-6">
          <router-link class="nav-link active"  :to="'/dashboard/4g/mob_sr'">
              <BarChart5/>
                 </router-link>
        </div>
      
      
  
    
    </div>
  </div>
</template>

<script>
import BarChart from "../data_gb_dl/BarChart.vue";

import BarChart2 from "../data_gb_ul/BarChart.vue";

import BarChart3 from "../erab_dr/BarChart.vue";

import BarChart4 from "../mds/BarChart.vue";

import BarChart5 from "../mob_sr/BarChart.vue";

import BarChart6 from "../thrp_ul/BarChart.vue";



import moment from "moment";

import axios from "axios";
axios.defaults.withCredentials = true;

import TheContentMixin from "../../../../../../helpers/mixins/TheContentMixin";
import Menu from "../menu";
export default {
  mixins: [TheContentMixin],
  name: "App",
  components: {
    BarChart,
    BarChart2,
    BarChart3,
    BarChart4,
    BarChart5,
    BarChart6,

    Menu,
  },
  data: function () {
    return {
      type: "data_gb_dl",
      subtypes: [],
      selectedData: {},
      group: null,
      rows: [],
      settl1: null,
      settl1_data: null,
      top_10_data: null,
      breadcrumbs: [
        {
          text: "Главная",
          to: { path: "/" },
        },
        {
          text: "Dashboards",
          active: true,
        },
      ],
      errors: null,
      isLoading: true,
    };
  },
  methods: {
  
 

  },


  mounted() {
    //this.getAlarms();
    this.generateBreadcrumb(this.breadcrumbs);
  },
};
</script>

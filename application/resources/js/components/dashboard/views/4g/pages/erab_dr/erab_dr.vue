<template>
  <div class="container-fluid">
      <Menu/>
      <h4>E-RAB drop rate (%)</h4>
    <div class="row">
      <div class="col-sm-12"><BarChart @on-receive="defineSettl" /></div>
      <div class="col-sm-12"><LineChart @on-receive="getByDate" :chartdata=settl1_data v-if=settl1_data chart:update  /></div>
      <div class="col-sm-12">
        <table class="table table-striped" v-if=top_10_data>
           <thead>
            <th>DT</th>
            <th>SITE NAME</th>
            <th>CELL FDD</th>
            <th>DATA_GB_DL</th>
            <th>DATA_GB_UL</th>
            <th>ERAB_DR</th>
            <th>MOB_SR</th>
            <th>MDS</th>
            <th>THRP_UL</th>
          </thead>
          <tbody>
            <tr v-for="item in top_10_data" :key="item.index">
              <td>{{ item[0] }}</td>
              <td>{{ item[3] }}</td>
              <td>{{ item[4] }}</td>
              <td>{{ item[5] }}</td>
              <td>{{ item[6] }}</td>
              <td>{{ item[7] }}</td>
              <td>{{ item[8] }}</td>
              <td>{{ item[9] }}</td>
              <td>{{ item[10] }}</td>
            </tr>
          </tbody>
          </table>
      </div>
    </div>

  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import LineChart from "./LineChart.vue";
import Menu from "../menu";
import moment from 'moment';

import axios from "axios";
axios.defaults.withCredentials = true;

import TheContentMixin from "../../../../../../helpers/mixins/TheContentMixin";

export default {
  mixins: [TheContentMixin],
  name: "App",
  components: {
    BarChart,
    LineChart,
    Menu

  },
  data: function () {
    return {
      type:'erab_dr',
      regions: {
      'г.Кокшетау':111010000,
      'г.Актобе':151010000,
      'г.Талдыкорган':191010000,
      'г.Атырау':231000000,
      'г.Уральск':271010000,
      'г.Тараз':311010000,
      'г.Караганда':351010000,
      'г.Костанай':391010000,
      'г.Кызылорда':431010000,
      'г.Актау':471010000,
      'г.Шымкент':511010000,
      'г.Туркестан':512610000,
      'г.Павлодар':551010000,
      'г.Петропавловск':591010000,
      'г.Усть-Каменогорск':631010000,
      'г.Семей':632810000,
      'г.Нур-Султан':711000000,
      'г.Алматы':750000000,
      'г.Астана':711000000,
      },
      subtypes: [],
      selectedData: {},
      group: null,
      rows: [],
      settl1:null,
      settl1_data:null,
      top_10_data:null,
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
    defineSettl(data) {
      this.selectedData = data;
      let val = this.selectedData.value[0];
      this.settl1=this.regions[val];
      this.getBySettl(this.settl1);

    },
    getBySettl(sett) {
      axios.get(`http://192.168.212.2:8009/dashboard/kpi_4g_city/`+this.type+`/`+this.settl1).then((response) => {
        this.settl1_data=response.data.data;
      });
      
    },
    getByDate(data) {
      this.selectedData2 = data;
      let settldate = this.selectedData2.value[0];
      //20/1/2022 -format
      const reformatedDate = moment(settldate).format('DD/MM/YYYY');
       axios.get(`http://192.168.212.2:8009/dashboard/top_10_4g_cells/`+this.type+`/`+this.settl1+'?date='+reformatedDate).then((response) => {
        this.top_10_data=response.data.data;
      });
    }
  },
 watch: {
  settl1_data() {
    this.$settl1_data.line-chart.update()
  }
},

  mounted() {
    //this.getAlarms();
    this.generateBreadcrumb(this.breadcrumbs);
  },
};
</script>

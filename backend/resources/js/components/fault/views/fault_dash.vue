<template>
  <section>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header"></div>
        </div>
      </div>
    </div>
    <table class="table table-bordered table-hover" style="background: #293145">
      <tbody>
        <tr>
          <th
            style="padding-left: 10px; width: 10%"
            class="ng-binding"
            rowspan="2"
          >
            Alarms
          </th>

          <th style="padding: 2.5px" class="text-center" colspan="3">Almaty</th>
          <th style="padding: 2.5px" class="text-center" colspan="3">Astana</th>
          <th style="padding: 2.5px" class="text-center" colspan="3">North</th>
          <th style="padding: 2.5px" class="text-center" colspan="3">South</th>
          <th style="padding: 2.5px" class="text-center" colspan="3">West</th>
          <th style="padding: 2.5px" class="text-center" colspan="3">East</th>
          
        </tr>
        <tr>
          <td>2G</td>
          <td>3G</td>
          <td>4G</td>
          <td>2G</td>
          <td>3G</td>
          <td>4G</td>
          <td>2G</td>
          <td>3G</td>
          <td>4G</td>
          <td>2G</td>
          <td>3G</td>
          <td>4G</td>
          <td>2G</td>
          <td>3G</td>
          <td>4G</td>
          <td>2G.</td>
          <td>3G</td>
          <td>4G</td>
        </tr>
        <tr v-for="(subtype, index_sub) in subtypes" v-bind:key="index_sub">
          <td style="width: auto">
            <span style="font-weight: bold" class="ng-binding">
              {{ subtype["title"] }}
            </span>
          </td>
          <td><router-link :to="{ path: '/fault?id_region='+1+'&id_subtype='+subtype['id']+'&technology='+2} ">{{rows[1][subtype["id"]][2]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+1+'&id_subtype='+subtype['id']+'&technology='+3} ">{{rows[1][subtype["id"]][3]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+1+'&id_subtype='+subtype['id']+'&technology='+4} ">{{rows[1][subtype["id"]][4]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+8+'&id_subtype='+subtype['id']+'&technology='+2} ">{{rows[8][subtype["id"]][2]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+8+'&id_subtype='+subtype['id']+'&technology='+3} ">{{rows[8][subtype["id"]][3]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+8+'&id_subtype='+subtype['id']+'&technology='+4} ">{{rows[8][subtype["id"]][4]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+3+'&id_subtype='+subtype['id']+'&technology='+2} ">{{rows[3][subtype["id"]][2]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+3+'&id_subtype='+subtype['id']+'&technology='+3} ">{{rows[3][subtype["id"]][3]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+3+'&id_subtype='+subtype['id']+'&technology='+4} ">{{rows[3][subtype["id"]][4]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+2+'&id_subtype='+subtype['id']+'&technology='+2} ">{{rows[2][subtype["id"]][2]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+2+'&id_subtype='+subtype['id']+'&technology='+3} ">{{rows[2][subtype["id"]][3]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+2+'&id_subtype='+subtype['id']+'&technology='+4} ">{{rows[2][subtype["id"]][4]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+4+'&id_subtype='+subtype['id']+'&technology='+2} ">{{rows[4][subtype["id"]][2]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+4+'&id_subtype='+subtype['id']+'&technology='+3} ">{{rows[4][subtype["id"]][3]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+4+'&id_subtype='+subtype['id']+'&technology='+4} ">{{rows[4][subtype["id"]][4]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+7+'&id_subtype='+subtype['id']+'&technology='+2} ">{{rows[7][subtype["id"]][2]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+7+'&id_subtype='+subtype['id']+'&technology='+3} ">{{rows[7][subtype["id"]][3]}}</router-link></td>
          <td><router-link :to="{ path: '/fault?id_region='+7+'&id_subtype='+subtype['id']+'&technology='+4} ">{{rows[7][subtype["id"]][4]}}</router-link></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;

import TheContentMixin from "../../../helpers/mixins/TheContentMixin";

export default {
  mixins: [TheContentMixin],
  data: function () {
    return {
      regions: [],
      subtypes: [],
      group: null,
      rows: [],
      breadcrumbs: [
        {
          text: "Главная",
          to: { path: "/" },
        },
        {
          text: "Аварии 3G",
          active: true,
        },
      ],
      errors: null,
      isLoading: true,
    };
  },
  methods: {
    getAlarms() {
      axios.get(`/api/alarms/group`).then((response) => {
        this.rows = response.data.data;
        this.regions = response.data.regions;
        this.subtypes = response.data.subtypes;
      });
    },
  },
  watch: {
    rows: {
      handler: function (rows) {},
    },
  },
  mounted() {
    this.getAlarms();
    this.generateBreadcrumb(this.breadcrumbs);
  },
  components: {},
  computed: {},
};
</script>
<style scoped>
table,table a {
  color: rgb(231, 231, 231);
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #353f58;
}
tbody tr:hover,tbody tr:hover a {
  background: #97e4ae;
  color:#353f58;
}
</style>
<template>
<section>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header"></div>
        </div>
        
      </div>
    </div>
     <table class="table table-bordered table-hover">
				<tbody>
					<tr>
					<th style="width:auto;">
						Alarms
					</th>
					<th v-for="(region, index_reg) in regions" v-bind:key="index_reg" style="width:90px;" class="ng-binding ng-scope">
						{{region['region_name']}}
					</th>
				</tr>
				<tr v-for="(subtype, index_sub) in subtypes" v-bind:key="index_sub">
					<td style="width:auto;">
						<span style="font-weight:bold;" class="ng-binding">
							{{subtype['title']}}
						</span>
					</td>
					<td  v-for="(region, index_reg) in regions" v-bind:key="index_reg" style="width:70px;" class="ng-scope">
						<a href="/monitoring/categoryalarm?cat=98&amp;rg=1&amp;type=1" target="_blank" ng-if="hl[r]['cnt'] != 0||hl[r]['cnt']" style="cursor:pointer; color:blue;" class="ng-binding ng-scope">
							{{rows[region['id']][subtype['id']]}}
						</a>
						
					</td>
				</tr>
				
			</tbody></table>
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
	regions:[
		
	],
	subtypes:[
		
	
	],
    group:null,
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
      axios.get(`/api/alarms/group?tech=4G`).then((response) => {
        this.rows = response.data.data;
		this.regions = response.data.regions;
		this.subtypes = response.data.subtypes;
      });

	  
    },
     
   
  },
   watch: {
    "rows": {
      handler: function (rows) {
     
      },
    },
   
  },
  mounted() {
	this.getAlarms();
    this.generateBreadcrumb(this.breadcrumbs);
	
	
  },
  components: {
   
  },
  computed: {
	
 
  },

};
</script>
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <h1>Аварии</h1>
          <vue-bootstrap4-table
            :rows="rows"
            :columns="columns"
            :config="config"
          >
          </vue-bootstrap4-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import axios from "axios/index";
axios.defaults.withCredentials = true;
export default {
  name: "App",
  data: function () {
    return {
      rows: [],
      columns: [
        {
          label: "id_vendor",
          name: "id_vendor",
          filter: {
            type: "simple",
            placeholder: "id_vendor",
          },
          sort: true,
        },
         {
          label: "id_subtype",
          name: "id_subtype",
          filter: {
            type: "simple",
            placeholder: "id_subtype",
          },
          sort: true,
        },
          {
          label: "id_region",
          name: "id_region",
          filter: {
            type: "simple",
            placeholder: "id_region",
          },
          sort: true,
        },
            {
          label: "id_severity",
          name: "id_severity",
          filter: {
            type: "simple",
            placeholder: "id_severity",
          },
          sort: true,
        },
              {
          label: "id_severity_vendor",
          name: "id_severity_vendor",
          filter: {
            type: "simple",
            placeholder: "id_severity_vendor",
          },
          sort: true,
        },
              {
          label: "fault_code",
          name: "fault_code",
          filter: {
            type: "simple",
            placeholder: "fault_code",
          },
          sort: true,
        },
           {
          label: "Technology",
          name: "technology",
          sort: true,
        },
          {
          label: "Vendor type",
          name: "vendor_type",
          filter: {
            type: "simple",
            placeholder: "Enter country",
          },
        },
          {
          label: "vendor",
          name: "vendor",
          sort: true,
        },
          {
          label: "network",
          name: "network",
          sort: true,
        },
        {
          label: "network_element",
          name: "network_element",
          sort: true,
        },
          {
          label: "source_element",
          name: "source_element",
          sort: true,
        },
          {
          label: "source_type",
          name: "source_type",
          sort: true,
        },
        {
          label: "source_name",
          name: "source_name",
          sort: true,
        },
        
        {
          label: "Fault name",
          name: "fault_name",
          filter: {
            type: "simple",
            placeholder: "Enter first name",
          },
          sort: true,
        },
         {
          label: "fault_text_1",
          name: "fault_text_1",
          sort: true,
        },
         {
          label: "fault_text_2",
          name: "fault_text_2",
          sort: true,
        },
        {
          label: "id_trouble",
          name: "id_trouble",
          sort: true,
        },
          {
          label: "is_active",
          name: "is_active",
          sort: true,
        }, {
          label: "created_at",
          name: "created_at",
          sort: true,
        },
         {
          label: "date_raised",
          name: "date_raised",
          sort: true,
        },
        
     
      
      ],
      config: {
        checkbox_rows: true,
        rows_selectable: true,
      },
    };
  },
  created: function () {
   
  },
  computed: {
 
  },
  mounted() {
    this.getAlarms();
  },
  methods: {
      getAlarms() {
               axios.get(`/api/alarms/index`)
                    .then((response) => {
                        this.rows = response.data.list;
                    });
      }
  },
  components: {
    VueBootstrap4Table,
  },
};
</script>
<style scoped>
table{
  font-size:12px;
}
</style>
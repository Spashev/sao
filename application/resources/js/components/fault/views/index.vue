<template>
  <section class="fault_table_index">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header"></div>
        </div>
      </div>
    </div>

    <vue-bootstrap4-table
      :rows="rows"
      :columns="columns"
      :config="config"
      @on-change-query="onChangeQuery" 
      @on-select-row="onSelectRow"
    >
    </vue-bootstrap4-table>
  </section>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import axios from "axios/index";
import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
axios.defaults.withCredentials = true;
export default {
  name: "App",
  mixins: [TheContentMixin],
  data: function () {
    return {
      rows: [],
      breadcrumbs: [
        {
          text: "Главная",
          to: { path: "/" },
        },
        {
          text: "Аварии",
          active: true,
        },
      ],
      columns: [
        {
          label: "ID",
          name: "id_vendor",
          filter: {
            type: "simple",
            placeholder: "Id",
          },
          sort: true,
        },
        {
          label: "Region",
          name: "id_region",
          filter: {
            type: "simple",
            placeholder: "Region",
          },
          sort: true,
        },
        {
          label: "Severity",
          name: "id_severity",
          filter: {
            type: "simple",
            placeholder: "Severity",
          },
          sort: true,
        },
        {
          label: "Technology",
          name: "technology",
          filter: {
            type: "simple",
            placeholder: "Ven.Type",
          },
          sort: true,
        },
        {
          label: "Date raised",
          name: "date_raised",
          filter: {
            type: "simple",
            placeholder: "Date raised",
          },
          sort: true,
        },
        {
          label: "Source name",
          name: "source_name",
          filter: {
            type: "simple",
            placeholder: "Source name",
          },
          sort: true,
        },
        {
          label: "Source Element",
          name: "source_element",
          filter: {
            type: "simple",
            placeholder: "Source Element",
          },
          sort: true,
        },
        {
          label: "Fault name",
          name: "fault_name",
          filter: {
            type: "simple",
            placeholder: "Fault name",
          },
          sort: true,
        },
        
      ],
      config: {
        card_mode: true,
        selected_rows_info: false,
        pagination: true,
        pagination_info: true,
        num_of_visibile_pagination_buttons: 7,
        per_page: 5,
        checkbox_rows: true,
        highlight_row_hover: true,
        rows_selectable: true,
        multi_column_sort: true,
        highlight_row_hover_color: "silver",
        card_title: "Fault List",
        global_search: {
          placeholder: "earch text",
          visibility: true,
          case_sensitive: false,
        },
        per_page_options: [5, 10, 20, 30],
        show_refresh_button: true,
        show_reset_button: true,
        server_mode: true,
        preservePageOnDataChange: true,
        loaderText: "Updating...",
      },
      queryParams: {
        sort: [],
        filters: [],
        global_search: "",
        per_page: 10,
        page: 10,
      },
      total_rows: 100,
      showLoader: true,
    };
  },
  created: function () {},
  computed: {},
  mounted() {
    console.log(1);
    this.getAlarms();
    this.generateBreadcrumb(this.breadcrumbs);
  },
  methods: {
    getAlarms() {
      axios.get(`/api/alarms/index?id_region=`+this.$route.query.id_region+'&id_subtype='+this.$route.query.id_subtype+'&technology='+this.$route.query.technology).then((response) => {
        this.rows = response.data.list;
      });
    },
    onChangeQuery() {
      console.log(2);
      // this.queryParams = queryParams;
      // this.fetchData();
    },
    onSelectRow(e) {
        if(e.selected_items[0].id > 0)
        {
            this.$router.push({ path: "/troubleticket/create"});
            //console.log(e.selected_items[0].id);
        }
    },
  },
  components: {
    VueBootstrap4Table,
  },
};
</script>
<style >
table {
  font-size: 10px;
}
.fault_table_index table thead {
  background-color: #f0ece6;
  font-size: 10px;
}

.fault_table_index .table-active input {
  font-size: 10px;
}

.fault_table_index .table-active > td {
  background-color: cadetblue !important;
}

.fault_table_index .card .card-header {
  background-color: #5b9def87;

  color: #303030;
  border-bottom: 0px;
}
.fault_table_index .card-body {
  padding: 0px !important;
}

.fault_table_index .table th,
.table td {
  max-width: 200px;
}
</style>
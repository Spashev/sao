<template>
  <section class="settlement">
    <loading :active.sync="isLoading" :can-cancel="false"></loading>
    
    <vue-bootstrap4-table
      :rows="items[0]"
      :columns="columns"
      @on-select-row="onSelectRow"
      :config="config"
      :classes="classes"
    >
    </vue-bootstrap4-table>
  </section>
</template>
<style>
.id_column {
  width: 120px;
}
.card{
    background: none;
}
.source_name_column {
  width: 180px;
}


table {
  font-size: 12px;
}
.settlement table thead {
  background-color: #faebd7;
  font-size: 12px;
}

.settlement .table-active input {
  font-size: 12px;
}

.settlement .table-active > td {
  background-color: cadetblue !important;
}

.settlement .card .card-header {
  background-color: #5b9def87;

  color: #303030;
  border-bottom: 0px;
}
.settlement .card-body {
  padding: 0px !important;
}

</style>
<script>
import axios from "axios/index";
axios.defaults.withCredentials = true;
import { SET_ITEMS } from "../../settlementStore";
import { mapGetters } from "vuex";
import TheContentMixin from "../../../../helpers/mixins/TheContentMixin";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import VueBootstrap4Table from "vue-bootstrap4-table";

export default {
  name: "Settlements",
  mixins: [TheContentMixin],
  data() {
    return {
      breadcrumbs: [
        {
          text: "Главная",
          to: { path: "/" },
        },
        {
          text: "Settlements",
          active: true,
        },
      ],
      errors: null,
      isLoading: true,
      classes: {
        table: {
          "table-striped table-sm": true,
          "table-bordered my-class-two": function (rows) {
            return true;
          },
        },
      },
      columns: [
        {
          label: "id",
          name: "id",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "abbr",
          name: "abbr",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "bdd",
          name: "bdd",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "city_type",
          name: "city_type",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },

        {
          label: "district",
          name: "district",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "id_area",
          name: "id_area",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "id_distr",
          name: "id_distr",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "id_region",
          name: "id_region",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "kato",
          name: "kato",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "name_en",
          name: "name_en",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "name_ru",
          name: "name_ru",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "oblast",
          name: "oblast",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "okrug",
          name: "okrug",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "pop_2009",
          name: "pop_2009",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "raion",
          name: "raion",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
        {
          label: "created_at",
          name: "created_at",
          filter: {
            type: "simple",
            placeholder: "",
          },
          sort: true,
          column_classes: "id_column",
        },
     
      ],
      config: {
        checkbox_rows: true,
        rows_selectable: true,
    
        per_page: 20,
        global_search: {
          placeholder: "Поиск",
          visibility: true,
          case_sensitive: false,
        },
        per_page_options: [5, 10, 20, 30],
        show_refresh_button: false,
        show_reset_button: false,
      },
      checkedId: null,
    };
  },
  components: {
    Loading: VueLoading,
    VueBootstrap4Table,
  },
  created: async function () {
    await this.fetchData();
  },
  computed: {
    ...mapGetters(["items"]),
  },
  mounted() {
    this.generateBreadcrumb(this.breadcrumbs);
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch(SET_ITEMS);
      //console.log('tickets', this.$store.getters.troubletickets);
      this.isLoading = false;
    },
    onSelectRow(e) {
      this.checkedId = e.selected_items[0].id;

      if (this.checkedId > 0) {
        // this.$router.push({ path: "/troubleticket/"+this.checkedId});
      }

      //console.log('tickets', this.checkedId);
      //this.$router.push({path: '/troubleticket'})
    },
  },
};
</script>



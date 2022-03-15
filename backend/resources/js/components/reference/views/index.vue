<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <!-- <form @submit.prevent="submit">
<div class="custom-file"  >
                        <input type="file" class="custom-file-input" id="customFile" @change="onAttachmentChange">
                        <label class="custom-file-label" for="customFile">Выбрать файл</label>
                      </div>
                      <button
                      class="button btn btn-primary btn-sm rounded"
                      type="submit"
                      
                    >
                      Сохранить
                    </button>
                   </form>
-->

          <ol class="list-group list-group-numbered">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">
                  <router-link :to="'/service'"> Сервис каталог</router-link>
                </div>

                {{ format_date(this.services.last.created_at) }}
              </div>
              <span class="badge bg-info text-white fs-2">{{
                this.services.count
              }}</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold"> Базовые станции</div>
              </div>
              <span class="badge bg-info text-white">{{
                this.dictionary.count
              }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">
                  <router-link :to="'/settlements/'"> Города, сёла, посёлки </router-link>
                </div>
                {{ format_date(this.settlements.last.created_at) }}
              </div>
              <span class="badge bg-info text-white">{{this.settlements.count}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">
                        <router-link :to="'/catalog/hops_topology'"> Транспорт: узлы и топология Microwave </router-link>
                    </div>
                    ---
                </div>
                <span class="badge bg-info text-white">
                    -
                </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">
                        <router-link :to="'/catalog/notification'"> Информирование </router-link>
                    </div>
                    ---
                </div>
                <span class="badge bg-info text-white">
                    -
                </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
import { mapGetters } from "vuex";
import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
import VueLoading from "vue-loading-overlay";
import moment from "moment";
export default {
  mixins: [TheContentMixin],
  data: function () {
    return {
      services: {
        count: 0,
        last: null,
      },
      settlements: {
        count: 0,
        last: null,
      },
      dictionary: {
        count: 0,
        last: null,
      },
      form: {
        file: null,
      },

      breadcrumbs: [
        {
          text: "Главная",
          to: { path: "/" },
        },
        {
          text: "Справочники",
          active: true,
        },
      ],
      errors: null,
      isLoading: true,
    };
  },
  methods: {
    fetchData() {
      axios
        .get("/api/reference/")
        .then((response) => {
          this.services.count = response.data.services_count;
          this.services.last = response.data.services_last;

          this.settlements.count = response.data.settlements_count;
          this.settlements.last = response.data.settlements_last;

          this.isLoading = false;
        })
        .catch((error) => {});
    },
    submit() {
      const config = { "content-type": "multipart/form-data" };
      const formData = new FormData();
      formData.append("file", this.form.file);

      axios
        .post("/api/upload", formData, config)
        .then((response) => {
          context.commit(ADD_ITEM, response.data);
        })
        .catch(function () {});

      this.$bvModal.hide("modal-1");
    },

    onAttachmentChange(e) {
      this.form.file = e.target.files[0];
    },
    /*onSelectRow(e) {
      this.checkedNames = e.selected_items;
    },*/
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD.MM.YYYY");
      }
    },
  },
  mounted() {
    this.generateBreadcrumb(this.breadcrumbs);
    this.fetchData();
  },
  components: {
    Loading: VueLoading,
  },
};
</script>
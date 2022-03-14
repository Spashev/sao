<template>
  <div class="list-group">
    <div>
      <input type="button"
        v-b-modal.modal-0
        variant="default"
        class="btn btn-link float-right"
        value="Добавить группу" />
    </div>
    <b-modal
      id="modal-0"
      title="Добавить группу"
      @click="$bvModal.show('bv-modal-example')"
    >
      <form v-on:submit.prevent="onSubmit0">
        <label for="staticEmail" class="col-sm-10 col-form-label"
          >Название группы</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="form_group.group_name"
            :class="{ 'is-invalid': $v.form_group.group_name.$error }"
            @blur="$v.form_group.group_name.$touch()"
          />
          <div
            class="invalid-feedback"
            v-if="!$v.form_group.group_name.required"
          >
            Обязательно для заполнения
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button class="btn btn-primary btn-sm ml-3 mt-2">Сохранить</button>
          </div>
        </div>
      </form>
      <template #modal-footer>
        <div class="w-100"></div>
      </template>
    </b-modal>
    <router-link
      v-for="(item, index) in elements"
      v-bind:key="index"
      class="list-group-item list-group-item-action"
      :class="{ active: activeElement(item.id) }"
      :to="'/services/group/' + item.id"
      >{{ item.group_name
      }}<span
        style="position: relative; right: 10px; float: right"
        class="badge badge-light"
        >{{ item.services.length }}</span
      ></router-link
    >
  </div>
</template>

<script>
import axios from "axios";
import TheContentMixin from "../../../helpers/mixins/TheContentMixin";
import { SET_SERVICES_GROUPS } from "../servicesStore";
import { ADD_GROUPS } from "../servicesStore";
import { required } from "vuelidate/lib/validators";
// @ is an alias to /src
axios.defaults.withCredentials = true;
export default {
  name: "TheServiceBar",
  data: function () {
    return {
        breadcrumbs: [
            {
                text: 'Главная',
                to: {path: '/'}
            },
            {
                text: 'Справочники',
                to: {path: '/reference'}
            },
            {
                text: 'Сервис каталог',
                active: true
            }
        ],
      list: null,
      form_group: {
        group_name: "",
      },
      formErrors: null,
      errors: null,
      isLoading: true,
    };
  },
  methods: {
    async fetchGroup() {
      await this.$store.dispatch(SET_SERVICES_GROUPS);
      this.isLoading = false;
    },
    async onSubmit0() {
      this.formErrors = null;
      this.$v.form_group.$touch();
      if (this.$v.form_group.$pending || this.$v.form_group.$error) return;
      this.isLoading = true;
      await this.$store.dispatch(ADD_GROUPS, this.form_group);
      let self = this;
      this.$bvModal.hide("modal-0");
    },
    activeElement(id) {
      if (this.$route.params.id==id) {
        return true;
      }
      else if(!this.$route.params.id)
      {
         let items = this.$store.getters.SERVICES_GROUPS;
         if (items) {
           if (items[0].id===id)
           {
              return true;
           }
          }
      }
      return false;
    },
  },
  mounted() {
        this.fetchGroup();
  },
  computed: {
    elements() {
      let items = this.$store.getters.SERVICES_GROUPS;
      if (items) {
        return items;
      } else {
      //  return this.fetchGroup();
      }
    },
  },
  validations: {
    form_group: {
      group_name: {
        required,
      },
    },
  },
};
</script>

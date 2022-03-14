<template>
  <div>
     <!--<b-button
      v-b-modal.modal-sicons
      variant="default"
      class="float-right btn-link"
      >Добавить sicons</b-button
    >-->
    <b-modal
      id="modal-sicons"
      title="Привязать условие влияния к сервису"
      @click="$bvModal.show('bv-modal-example')"
    >
      <form v-on:submit.prevent="onSubmit">
        <label for="staticEmail" class="col-sm-10 col-form-label"
          >Выбрать влияющее соединение</label
        >
        <div class="col-sm-10">
          <select
            class="form-control"
            v-model="form.id_service_influence"
            :class="{ 'is-invalid': $v.form.id_service_influence.$error }"
            @blur="$v.form.id_service_influence.$touch()"
          >
            <option
              v-for="(item, index) in groups"
              v-bind:key="index"
              :value="item.id"
            >
              {{ item.influence_condition_name }}
            </option>
          </select>

          <div
            class="invalid-feedback"
            v-if="!$v.form.id_service_influence.required"
          >
            Обязательно для заполнения
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button class="btn btn-primary btn-sm float-left ml-3 mt-2">Сохранить</button>
          </div>
        </div>
      </form>
      <template #modal-footer>
        <div class="w-100">
        
        </div>
      </template>
    </b-modal>
  </div>
</template>


<script>
import axios from "axios";
import {
  ADD_SERVICE_INFLUENCE_CONNS,
  SET_SERVICE_INFLUENCE_CONDITIONS,
  SET_SERVICE_INFLUENCE_CONNS,
   SET_SERVICE_DETAIL,
} from "../../servicesStore";
import { required } from "vuelidate/lib/validators";
// @ is an alias to /src
axios.defaults.withCredentials = true;
export default {
  name: "TheServices",
  data: function () {
    return {
      form: {
        id_service_influence: "",
      },
      formErrors: null,
      errors: null,
      isLoading: true,
    };
  },
  methods: {
    async onSubmit() {
      this.formErrors = null;
      this.$v.form.$touch();

      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.isLoading = true;

      const config = { "content-type": "multipart/form-data" };
      const formData = new FormData();
      var datakeys = Object.keys(this.form);

      for (var i = 0; i < datakeys.length; i++) {
        name = datakeys[i];
        formData.append("form[" + name + "]", this.form[name]);
      }
      formData.append("form[id_service]", this.$route.params.vid);
      // formData.append('id_service_group', this.$route.params.id)
      formData.append("attachment", this.attachment);
      // for( var i = 0; i < 3; i++ ){
      // let file = this.files[i];

      //  }
      await this.$store.dispatch(ADD_SERVICE_INFLUENCE_CONNS, formData, config);
      let self = this;
      this.$bvModal.hide("modal-sicons");
      this.detailService(this.$route.params.vid);
      // this.$router.push('/services/group/1/view/'+this.$route.params.vid)
    },
     detailService(id) {
     this.$store.dispatch(SET_SERVICE_DETAIL, id);
    },

    onAttachmentChange(e) {
      this.attachment = e.target.files[0];
    },
    async fetchList() {
      await this.$store.dispatch(SET_SERVICE_INFLUENCE_CONDITIONS);
      this.isLoading = false;
    },
  },
  mounted() {
    this.fetchList();
  },
  computed: {
    groups() {
      if (this.$store.getters.SERVICE_INFLUENCE_CONDITIONS) {
        return this.$store.getters.SERVICE_INFLUENCE_CONDITIONS;
      }
    },
  },

  validations: {
    form: {
      id_service_influence: {
        required,
      },
    },
  },
};
</script>

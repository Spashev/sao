<template>
  <div>
    <input type="button" v-b-modal.modal-1 class="btn btn-link float-right" value="Добавить сервис" />
    <b-modal
      id="modal-1"
      title="Добавить сервис"
      @click="$bvModal.show('bv-modal-example')"
    >
      <form v-on:submit.prevent="onSubmit">
        <label for="staticEmail" class="col-sm-10 col-form-label"
          >Выбрать группу сервиса</label
        >

        <div class="col-sm-10">
          <select
            class="form-control"
            v-model="form.id_service_group"
            :class="{ 'is-invalid': $v.form.id_service_group.$error }"
            @blur="$v.form.id_service_group.$touch()"
          >
            <option
              v-for="(item, index) in groups"
              v-bind:key="index"
              :value="item.id"
            >
              {{ item.group_name }}
            </option>
          </select>

          <div
            class="invalid-feedback"
            v-if="!$v.form.id_service_group.required"
          >
            Обязательно для заполнения
          </div>
        </div>

        <label for="staticEmail" class="col-sm-10 col-form-label"
          >Имя сервиса</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="form.service_name"
            :class="{ 'is-invalid': $v.form.service_name.$error }"
            @blur="$v.form.service_name.$touch()"
          />
          <div class="invalid-feedback" v-if="!$v.form.service_name.required">
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
        <div class="w-100">
         
        </div>
      </template>
    </b-modal>
  </div>
</template>


<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
// @ is an alias to /src
axios.defaults.withCredentials = true;
export default {
  name: "CreateService",
  data: function () {
    return {
      form: {
        service_name: "",
        id_service_group: "",
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
        formData.append(name, this.form[name]);
      }
      // formData.append('id_service_group', this.$route.params.id)
      formData.append("attachment", this.attachment);
      // for( var i = 0; i < 3; i++ ){
      // let file = this.files[i];

      //  }
      await this.$store.dispatch(ADD_SERVICES, formData, config);
      let self = this;
      this.$bvModal.hide("modal-1");
      this.$router.push("/services/group/" + this.form.id_service_group);
    },

    onAttachmentChange(e) {
      this.attachment = e.target.files[0];
    },
  },
  computed: {
    groups() {
      if (this.$store.getters.SERVICES_GROUPS) {
        return this.$store.getters.SERVICES_GROUPS;
      }
    },
  },

  validations: {
    form: {
      service_name: {
        required,
      },
      id_service_group: {
        required,
      },
    },
  },
};
</script>

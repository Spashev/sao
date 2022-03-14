<template>
  <div>
    <!-- <b-button
      v-b-modal.modal-spgroups
      variant="default"
      class="float-right btn-link"
      >Добавить spgroups</b-button
    >-->
    <b-modal
      id="modal-spgroups"
      title="Создать группу возможных причин"
      @click="$bvModal.show('bv-modal-example')"
    >
      <form v-on:submit.prevent="onSubmit">
        <label for="staticEmail" class="col-sm-10 col-form-label"
          >Название группы</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="form.group_name"
            :class="{ 'is-invalid': $v.form.group_name.$error }"
            @blur="$v.form.group_name.$touch()"
          />
          <div class="invalid-feedback" v-if="!$v.form.group_name.required">
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
import { ADD_SERVICE_PROBLEM_GROUPS } from "../../servicesStore";
import { required } from "vuelidate/lib/validators";
// @ is an alias to /src
axios.defaults.withCredentials = true;
export default {
  name: "TheServices",
  data: function () {
    return {
      form: {
        group_name: "",
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
      // formData.append('id_service_group', this.$route.params.id)
      formData.append("attachment", this.attachment);
      // for( var i = 0; i < 3; i++ ){
      // let file = this.files[i];

      //  }
      await this.$store.dispatch(ADD_SERVICE_PROBLEM_GROUPS, formData, config);
      let self = this;
      this.$bvModal.hide("modal-1");
    
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
      group_name: {
        required,
      },
    },
  },
};
</script>

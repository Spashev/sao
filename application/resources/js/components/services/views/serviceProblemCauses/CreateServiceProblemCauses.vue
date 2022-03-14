<template>
  <div>
     <!--<b-button
      v-b-modal.modal-spcauses
      variant="default"
      class="float-right btn-link"
      >Добавить spcauses</b-button
    >-->
    <b-modal
      id="modal-spcauses"
      title="Создать возможные причины"
      @click="$bvModal.show('bv-modal-example')"
    >
      <form v-on:submit.prevent="onSubmit">
        <label for="staticEmail" class="col-sm-10 col-form-label"
          >Название проблемной группы</label
        >
              <div class="col-sm-10">
          <select
            class="form-control"
            v-model="form.id_problem_group"
            :class="{ 'is-invalid': $v.form.id_problem_group.$error }"
            @blur="$v.form.id_problem_group.$touch()"
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
            v-if="!$v.form.id_problem_group.required"
          >
            Обязательно для заполнения
          </div>
        </div>

        <label for="staticEmail" class="col-sm-10 col-form-label"
          >Случай 1</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="form.cause_1_name"
            :class="{ 'is-invalid': $v.form.cause_1_name.$error }"
            @blur="$v.form.cause_1_name.$touch()"
          />
          <div class="invalid-feedback" v-if="!$v.form.cause_1_name.required">
            Обязательно для заполнения
          </div>
        </div>

        <label for="staticEmail" class="col-sm-10 col-form-label"
          >Случай 2</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="form.cause_2_name"
            :class="{ 'is-invalid': $v.form.cause_2_name.$error }"
            @blur="$v.form.cause_2_name.$touch()"
          />
          <div class="invalid-feedback" v-if="!$v.form.cause_2_name.required">
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
import { ADD_SERVICE_PROBLEM_CAUSES,SET_SERVICE_PROBLEM_GROUPS } from "../../servicesStore";
import { required } from "vuelidate/lib/validators";
// @ is an alias to /src
axios.defaults.withCredentials = true;
export default {
  name: "TheServices",
  data: function () {
    return {
      form: {
        id_problem_group: "",
        cause_1_name: "",
        cause_2_name: "",
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
      await this.$store.dispatch(ADD_SERVICE_PROBLEM_CAUSES, formData, config);
      let self = this;
      this.$bvModal.hide("modal-1");
      this.$router.push("/services/group/" + this.form.id_service_group);
    },

    onAttachmentChange(e) {
      this.attachment = e.target.files[0];
    },
     async fetchList() {
      await this.$store.dispatch(SET_SERVICE_PROBLEM_GROUPS);
      this.isLoading = false;
    },
  },
 
  computed: {
    groups() {
      if (this.$store.getters.SERVICE_PROBLEM_GROUPS) {
        return this.$store.getters.SERVICE_PROBLEM_GROUPS;
      }
      else{
        this.fetchList();
      }
    },
  },

  validations: {
    form: {
      id_problem_group: {
        required,
      },
      cause_1_name: {
        required,
      },
      cause_2_name: {
        required,
      },
    },
  },
};
</script>

<template>
  <div class="row mx-0">
    <div class="col-md-2 p-0 h-100 left-bar-1 overflow-auto test">
      <TheServicesBar />
    </div>
    <div class="col-md-2 p-0 h-100 left-bar-2">
      <div class="list-group">
        <CreateService />
        <router-link
          v-for="(item, index) in serviceList"
          v-bind:key="index"
          :to="'/services/group/' + group + '/view/' + item.id"
          class="list-group-item list-group-item-action"
        >
          <div class="d-flex w-100 justify-content-between">
            {{ item.service_name }}
          </div>
        </router-link>
      </div>
    </div>
    <div class="col-md-8 h-100">
      <div v-if="detail" class="detail_view_group">
        <div class="row">
          <div class="col-sm-10">
            <h5 class="sidebar3-header">{{ detail.service_name }}</h5>
          </div>
          <div class="col-sm-2">
            <b-dropdown
              id="dropdown-right"
              right
              text="Группы и влияние"
              variant="dark"
              class="m-0 mt-0 float-right"
            >
              <b-dropdown-item
                ><span v-b-modal.modal-spgroups
                  >Создать группу возможных причин</span
                ></b-dropdown-item
              >

              <b-dropdown-item
                ><span v-b-modal.modal-spcauses
                  >Создать возможные причины</span
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><span v-b-modal.modal-spconns
                  >Привязать группу возможных причин к сервису</span
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><span v-b-modal.modal-sigroups
                  >Создать группу условия влияния и его триггер</span
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><span v-b-modal.modal-sicond
                  >Создать условие влияния</span
                ></b-dropdown-item
              >

              <b-dropdown-item
                ><span v-b-modal.modal-sicons
                  >Привязать условие влияния к сервису</span
                ></b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-md-12">
            <span
              style="font-weight: bold; font-style: italic; font-size: 0.8rem"
              >Тригеры и условия влияния:</span
            ><br />
            <div class="border-top" style="min-height: 50px">
              <table class="table table-sm table-light" style="font-size:0.9rem">
                <thead>
                  <th>Условие</th>
                  <th>Группа</th>
                  <th>Триггер</th>
                  <th>All KZ</th>
                  <th>Large City</th>
                  <th>Small City</th>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, indexinf) in detail.influence_conns"
                    v-bind:key="indexinf"
                  >
                    <td v-if="item.influence_info">{{ item.influence_info.influence_condition_name }}</td>
                    <td v-if="item.influence_info">
                      {{ item.influence_info.group_info.influence_group_name }}
                    </td>
                    <td v-if="item.influence_info">{{ item.influence_info.group_info.trigger_name }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <span style="font-weight: bold; font-style: italic; font-size: 0.8rem"
          >Возможные причины недоступности:</span
        ><br />
        <div class="border-top" style="min-height: 50px">
          <table class="table table-sm table-light">
               <thead>
                  <th>Пр1</th>
                  <th>пр2</th>
                  <th>гр</th>
                </thead>
            <tr
              v-for="(item, indexprob) in detail.problem_conns"
              v-bind:key="indexprob"
            >
              <td v-if="item.problem_causes">
                {{ item.problem_causes.cause_1_name }}
              </td>
              <td v-if="item.problem_causes">
                {{ item.problem_causes.cause_2_name }}
              </td>
              <td v-if="item.problem_causes">
                {{ item.problem_groups.group_name }}
              </td>
            </tr>
          </table>
        </div>

        <span style="font-weight: bold; font-style: italic; font-size: 0.8rem"
          >Зависимые сервисы:</span
        ><br />
        <div class="border-top" style="min-height: 50px">
          <table class="table table-sm table-light">
            <tr>
              <td></td>
            </tr>
          </table>
        </div>

        <span style="font-weight: bold; font-style: italic; font-size: 0.8rem"
          >Используемые ресурсы сервиса:</span
        ><br />
        <div class="border-top" style="min-height: 50px">
          <table class="table table-sm table-light">
            <tr>
              <td></td>
            </tr>
          </table>
        </div>

        <span style="font-weight: bold; font-style: italic; font-size: 0.8rem"
          >Матрица приоритизации:</span
        ><br />
        <div class="border-top" style="min-height: 50px">
          <table class="table table-sm table-light">
            <tr>
              <td></td>
            </tr>
          </table>
        </div>

        <span style="font-weight: bold; font-style: italic; font-size: 0.8rem"
          >Возможные группы, которые могут участвовать в устранении
          проблемы:</span
        ><br />
        <div class="border-top" style="min-height: 50px">
          <table class="table table-sm table-light">
            <tr>
              <td></td>
            </tr>
          </table>
        </div>

        <div>
          <CreateServiceInfluenceConditions />
          <CreateServiceInfluenceConns />
          <CreateServiceInfluenceGroups />
          <CreateServiceProblemCauses />
          <CreateServiceProblemConns />
          <CreateServiceProblemGroups />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TheContentMixin from "../../../../helpers/mixins/TheContentMixin";
import TheServicesBar from "../TheServicesBar";
import CreateService from "./CreateService";
import CreateServiceInfluenceConditions from "../serviceInfluenceConditions/CreateServiceInfluenceConditions";
import CreateServiceInfluenceConns from "../serviceInfluenceConns/CreateServiceInfluenceConns";
import CreateServiceInfluenceGroups from "../serviceInfluenceGroups/CreateServiceInfluenceGroups";
import CreateServiceProblemCauses from "../serviceProblemCauses/CreateServiceProblemCauses";
import CreateServiceProblemConns from "../serviceProblemConns/CreateServiceProblemConns";
import CreateServiceProblemGroups from "../serviceProblemGroups/CreateServiceProblemGroups";
import {
  SET_SERVICES_ITEMS,
  SET_SERVICE_INFLUENCE_CONNS,
  SET_SERVICE_PROBLEM_CONNS,
  SET_SERVICE_DETAIL,
} from "../../servicesStore";
import { ADD_SERVICES } from "../../servicesStore";
import { required } from "vuelidate/lib/validators";
// @ is an alias to /src
axios.defaults.withCredentials = true;
export default {
  name: "TheServices",
  mixins: [TheContentMixin],
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
      form: {
        service_name: "",
      },
      formErrors: null,
      errors: null,
      isLoading: true,
    
      influenceConns: null,
      problemConns: null,
      serviceList: null,
      serviceGroups:null,
    };
  },
  mounted() {   
    this.generateBreadcrumb(this.breadcrumbs);

    if (this.$store.getters.SERVICES_GROUPS) {
      this.serviceList = this.$store.getters.SERVICES_GROUPS[0].services;
      this.detailService(this.$store.getters.SERVICES_GROUPS[0].services[0].id);
    }
    else{
        setTimeout(() => {
         this.serviceList = this.$store.getters.SERVICES_GROUPS[0].services;
      this.detailService(this.$store.getters.SERVICES_GROUPS[0].services[0].id);
        }, 1500);
    }
  },
  methods: {
    groupService(id) {
      if (this.$store.getters.SERVICES_GROUPS) {
        let item = this.$store.getters.SERVICES_GROUPS.filter(function (item) {
          return item.id == id;
        });
        // console.log(item);
        this.serviceList = item[0].services;
        this.detailService(this.serviceList[0].id);
      }
    },
    detailService(id) {
     this.$store.dispatch(SET_SERVICE_DETAIL, id);
    },
    /*onSelectRow(e) {
      this.checkedNames = e.selected_items;
    },*/
  },
  
  computed: {
    //определяем группу в роуте
    group() {
      if (this.$route.params.id) {
        return this.$route.params.id;
      } else {
        if (this.$store.getters.SERVICES_GROUPS) {
          return this.$store.getters.SERVICES_GROUPS[0].id;
        }
      }
    },
    serviceGroup()
    {
      return this.$store.getters.SERVICES_GROUPS;
    },
    detail()
    {
      return this.$store.getters.SERVICE_DETAIL;
    }
  },
  watch: {
    "$route.params.id": {
      handler: function (params) {
        //console.log(params)
        this.groupService(this.$route.params.id);
      },
    },
    "$route.params.vid": {
      handler: function (params) {
        //console.log(params)
        if (this.$route.params.vid) {
          return this.detailService(this.$route.params.vid);
        }
      },
    },
  },
  components: {
    TheServicesBar,
    CreateService,
    CreateServiceInfluenceConditions,
    CreateServiceInfluenceConns,
    CreateServiceInfluenceGroups,
    CreateServiceProblemCauses,
    CreateServiceProblemConns,
    CreateServiceProblemGroups,
  },
  validations: {
    form: {
      service_name: {
        required,
      },
    },
    form_group: {
      group_name: {
        required,
      },
    },
  },
};
</script>

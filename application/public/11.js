(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/layout/TheAlert.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/layout/TheAlert.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheAlert",
  props: ['alerts'],
  data: function data() {
    return {
      messages: null
    };
  },
  watch: {
    alerts: function alerts(newVal) {
      this.messages = newVal;
    }
  },
  methods: {
    deleteAlert: function deleteAlert(index) {
      this.messages.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentMixin.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentMixin.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheComponentMixin",
  data: function data() {
    return {
      components: null
    };
  },
  created: function created() {// this.components = await axios.get('/api/scheme/components', {
    //     responseType: 'json'
    // });

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({// statuses: state => state.scheme.statuses,
    // actions: state => state.scheme.actions,
    // components: state => state.scheme.components
  }),
  methods: {
    getStatusName: function getStatusName(id) {
      if (id === null || id === undefined) {
        return;
      }

      if (id === 0) {
        return "нет";
      }

      return this.statuses.find(function (status) {
        return status.id === id;
      }).name;
    },
    getActionName: function getActionName(id) {
      if (id === null || id === undefined) {
        return;
      }

      if (id === 0) {
        return "нет";
      }

      return this.actions.find(function (action) {
        return action.id === id;
      }).act_title;
    },
    getUserCategoryName: function getUserCategoryName(id) {
      if (id === null || id === undefined) {
        return;
      }

      if (id === 0) {
        return "нет";
      }

      return this.userCategories.find(function (cat) {
        return cat.id === id;
      }).cat_name;
    },
    getUserGroupName: function getUserGroupName(id) {
      if (id === null || id === undefined) {
        return;
      }

      if (id === 0) {
        return "нет";
      }

      return this.userGroups.find(function (group) {
        return group.id === id;
      }).group_name;
    },
    getUserFieldName: function getUserFieldName(id) {
      if (id === null || id === undefined) {
        return;
      }

      if (id === 0) {
        return "нет";
      }

      return this.userFields.find(function (field) {
        return field.id === id;
      }).field_name;
    },
    getFieldName: function getFieldName(id) {
      if (id === null || id === undefined) {
        return;
      }

      if (id === 0) {
        return "нет";
      }

      return this.fields.find(function (field) {
        return field.id === id;
      }).field_name;
    },
    getComponentName: function getComponentName(id) {
      if (id === null || id === undefined) {
        return;
      }

      if (id === 0) {
        return "нет";
      } // console.log('components', this.components.components);
      //let cc =  this.components.find(components => components.id === id);

    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schemeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schemeStore */ "./resources/js/components/scheme/schemeStore.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_ComponentActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/ComponentActions */ "./resources/js/components/scheme/views/ComponentActions.vue");
/* harmony import */ var _views_ComponentStatuses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ComponentStatuses */ "./resources/js/components/scheme/views/ComponentStatuses.vue");
/* harmony import */ var _views_ComponentUserGroups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/ComponentUserGroups */ "./resources/js/components/scheme/views/ComponentUserGroups.vue");
/* harmony import */ var _views_ComponentUserCategories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/ComponentUserCategories */ "./resources/js/components/scheme/views/ComponentUserCategories.vue");
/* harmony import */ var _views_ComponentUserFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/ComponentUserFields */ "./resources/js/components/scheme/views/ComponentUserFields.vue");
/* harmony import */ var _views_ComponentFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/ComponentFields */ "./resources/js/components/scheme/views/ComponentFields.vue");
/* harmony import */ var _helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/mixins/TheContentMixin */ "./resources/js/helpers/mixins/TheContentMixin.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

















/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheComponentView",
  mixins: [_helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_11__["default"]],
  data: function data() {
    return {
      breadcrumbs: [{
        text: 'Главная',
        to: {
          path: '/'
        }
      }, {
        text: 'Схема',
        to: {
          path: '/scheme'
        }
      }, {
        text: this.$route.params.id,
        active: true
      }],
      selectedTab: 1,
      tabs: [{
        id: 1,
        name: 'Действия',
        isActive: true,
        menu: []
      }, {
        id: 2,
        name: 'Статусы',
        isActive: false,
        menu: [
          /*{name: 'Добавить'}*/
        ]
      }, {
        id: 3,
        name: 'Группы Пользователя',
        isActive: false,
        menu: []
      }, {
        id: 4,
        name: 'Кат. Пользователя',
        isActive: false,
        menu: []
      }, {
        id: 5,
        name: 'Поля Пользователя',
        isActive: false,
        menu: []
      }, {
        id: 6,
        name: 'Филды',
        isActive: false,
        menu: []
      }],
      isLoading: false
    };
  },
  components: {
    ComponentActions: _views_ComponentActions__WEBPACK_IMPORTED_MODULE_5__["default"],
    ComponentStatuses: _views_ComponentStatuses__WEBPACK_IMPORTED_MODULE_6__["default"],
    ComponentUserGroups: _views_ComponentUserGroups__WEBPACK_IMPORTED_MODULE_7__["default"],
    ComponentUserCategories: _views_ComponentUserCategories__WEBPACK_IMPORTED_MODULE_8__["default"],
    ComponentUserFields: _views_ComponentUserFields__WEBPACK_IMPORTED_MODULE_9__["default"],
    ComponentFields: _views_ComponentFields__WEBPACK_IMPORTED_MODULE_10__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getData();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
    component: function component(state) {
      return state.scheme.component;
    },
    actions: function actions(state) {
      return state.scheme.actions;
    },
    statuses: function statuses(state) {
      return state.scheme.statuses;
    },
    userGroups: function userGroups(state) {
      return state.scheme.userGroups;
    },
    userCategories: function userCategories(state) {
      return state.scheme.userCategories;
    },
    userFields: function userFields(state) {
      return state.scheme.userFields;
    },
    fields: function fields(state) {
      return state.scheme.fields;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])([// 'actions'
  ])),
  mounted: function mounted() {
    this.generateBreadcrumb(this.breadcrumbs);
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_ACTIONS"], _this.$route.params.id);

              case 2:
                _context2.next = 4;
                return _this.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_STATUSES"], _this.$route.params.id);

              case 4:
                _context2.next = 6;
                return _this.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_COMPONENT"], _this.$route.params.id);

              case 6:
                _context2.next = 8;
                return _this.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_USER_GROUPS"], _this.$route.params.id);

              case 8:
                _context2.next = 10;
                return _this.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_USER_CATEGORIES"], _this.$route.params.id);

              case 10:
                _context2.next = 12;
                return _this.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_USER_FIELDS"], _this.$route.params.id);

              case 12:
                _context2.next = 14;
                return _this.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_FIELDS"], _this.$route.params.id);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    selectTab: function selectTab(tab) {
      var _this2 = this;

      this.selectedTab = tab.id;

      if (this.selectedTab === 1) {
        this.selectedTab = 0;
        this.$nextTick(function () {
          _this2.selectedTab = tab.id;
        });
      }

      this.tabs.forEach(function (_t) {
        _t.isActive = _t.id === tab.id;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TheComponentMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TheComponentMixin */ "./resources/js/components/scheme/TheComponentMixin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ComponentActionView",
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  mixins: [_TheComponentMixin__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    actions: {
      type: Array
    },
    statuses: {
      type: Array
    },
    userGroups: {
      type: Array
    },
    userCategories: {
      type: Array
    },
    userFields: {
      type: Array
    },
    fields: {
      type: Array
    },
    selectedAction: {
      type: Object
    },
    selectedUserActivities: {
      type: Array
    },
    selectedEmailActivities: {
      type: Array
    },
    selectedFieldList: {
      type: Array
    },
    methodRenderActions: {
      type: Function
    }
  },
  watch: {
    selectedAction: function selectedAction(newVal) {
      this.action = newVal;
    },
    selectedUserActivities: function selectedUserActivities(newVal) {
      this.userActivities = newVal;
    },
    selectedEmailActivities: function selectedEmailActivities(newVal) {
      this.emailActivities = newVal;
    },
    selectedFieldList: function selectedFieldList(newVal) {
      this.fieldLists = newVal;
    }
  },
  computed: {},
  data: function data() {
    return {
      action: this.selectedAction,
      form: {
        name: '',
        description: '',
        status_id: '',
        comp_id: this.$route.params.id,
        par_act_id: '',
        back_act_id: ''
      },
      formActivity: {
        act_type: '',
        act_id: '',
        group_id: '',
        cat_id: '',
        is_user: '',
        inform_by: '',
        is_email: '',
        email: ''
      },
      formFieldList: {
        act_id: '',
        field_id: '',
        user_cat_id: '',
        user_field_id: '',
        is_basic: '',
        field_type: '',
        field_ord: '',
        query_type: '',
        query_select: '',
        query_db: '',
        query_value: '',
        cond_show: '',
        cond_alert: '',
        default_vals: '',
        is_req: ''
      },
      field_types: [{
        id: 1,
        title: 'Select(single)'
      }, {
        id: 12,
        title: 'Select(single with search)'
      }, {
        id: 2,
        title: 'Select(multi)'
      }, {
        id: 3,
        title: 'Input(text)'
      }, {
        id: 13,
        title: 'Input(number)'
      }, {
        id: 4,
        title: 'Textarea'
      }, {
        id: 5,
        title: 'Checkbox'
      }, {
        id: 6,
        title: 'Radio'
      }, {
        id: 7,
        title: 'Span'
      }, {
        id: 8,
        title: 'Date'
      }, {
        id: 9,
        title: 'Time'
      }, {
        id: 10,
        title: 'DateTime'
      }, {
        id: 11,
        title: 'Slider'
      }],
      query_types: [{
        id: 1,
        title: 'Query'
      }, {
        id: 2,
        title: 'Values'
      }, {
        id: 3,
        title: 'Main DB'
      }],
      query_dbs: [{
        id: 1,
        title: 'Oracle'
      }, {
        id: 2,
        title: 'MySQL'
      }, {
        id: 2,
        title: 'Postgres SQL'
      }],
      types: [{
        id: 1,
        title: 'Need inform'
      }, {
        id: 2,
        title: 'Can view'
      }, {
        id: 3,
        title: 'Responsible'
      }],
      informs: [{
        id: 0,
        title: 'No'
      }, {
        id: 1,
        title: 'Email'
      }, {
        id: 2,
        title: 'SMS'
      }, {
        id: 3,
        title: 'Email/SMS'
      }],
      updateMode: false,
      selectedUserActivityID: null,
      selectedFieldListID: null,
      isEmail: false,
      userActivities: null,
      emailActivities: null,
      fieldLists: null,
      formErrors: null,
      errors: null,
      isLoading: false
    };
  },
  // created: async function () {
  //     await this.getActivities(this.selectedAction.id);
  // },
  methods: {
    updateActionModal: function updateActionModal(action) {
      var _this = this;

      this.form.id = action.id;
      this.form.name = action.act_title;
      this.form.description = action.act_desc;
      this.form.status_id = action.status_id;
      this.form.comp_id = action.comp_id;
      this.form.par_act_id = action.par_act_id;
      this.form.back_act_id = action.back_act_id;
      this.$nextTick(function () {
        _this.$bvModal.show('modal-update-action');
      });
    },
    updateAction: function updateAction(bvModalEvt) {
      var _this2 = this;

      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.formErrors = null;
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/actions/update/' + this.selectedAction.id, this.$data.form).then(function (response) {
        if (response.data.success === 1) {
          _this2.action = response.data.action;
          _this2.isLoading = false;

          _this2.$nextTick(function () {
            _this2.$bvModal.hide('modal-update-action');
          });

          _this2.methodRenderActions(response.data.actions);

          _this2.$emit('selectActionChanged', null); // this.$router.go({
          //     path: '/scheme/' + this.action.comp_id,
          //     force: true
          // });

        }
      })["catch"](function (error) {
        if (error.response.data) {// this.formErrors = error.response.data.errors;
          // this.isLoading = false;
          // return;
        }
      });
    },
    deleteAction: function deleteAction() {
      var _this3 = this;

      this.errors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/actions/' + this.selectedAction.id).then(function (response) {
        if (response.data.success === true) {
          var actions = _this3.$store.getters.actions;
          var actionIndex = actions.findIndex(function (action) {
            return action.id === _this3.selectedAction.id;
          });
          actions.splice(actionIndex, 1);
          _this3.isLoading = false;

          _this3.methodRenderActions();

          _this3.$emit('selectActionChanged', null);
        }
      })["catch"](function (error) {
        if (error.response.data.messages) {
          _this3.isLoading = false;
          _this3.errors = error.response.data.messages;
          _this3.alerts = [];
          _this3.notifications = [];

          _this3.alerts.push({
            type: 'danger',
            message: _this3.errors
          });

          _this3.notifications.push({
            type: 'warning',
            message: _this3.errors
          });

          _this3.setNotifications(_this3.notifications);

          return;
        }
      });
    },
    createActivity: function createActivity(bvModalEvt) {
      var _this4 = this;

      bvModalEvt.preventDefault();
      this.$v.formActivity.$touch();
      if (this.$v.formActivity.$pending || this.$v.formActivity.$error) return;
      this.$data.formActivity.act_id = this.action.id;

      if (this.$data.formActivity.is_email) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/email-activities/create', this.$data.formActivity).then(function (response) {
          _this4.emailActivities.push(response.data.emailActivity);

          _this4.$nextTick(function () {
            _this4.$bvModal.hide('modal-create-activity');
          });

          _this4.isLoading = false;
        })["catch"](function (error) {
          if (error.response.data) {
            _this4.formErrors = error.response.data.errors;
            _this4.isLoading = false;
            return;
          }
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/user-activities/create', this.$data.formActivity).then(function (response) {
          _this4.userActivities.push(response.data.userActivity);

          _this4.$nextTick(function () {
            _this4.$bvModal.hide('modal-create-activity');
          });

          _this4.methodRenderActions();

          _this4.isLoading = false;
        })["catch"](function (error) {
          if (error.response.data) {
            _this4.formErrors = error.response.data.errors;
            _this4.isLoading = false;
            return;
          }
        });
      }
    },
    deleteActivity: function deleteActivity() {
      var _this5 = this;

      this.errors = null;
      var url = 'user-activities';

      if (this.isEmail) {
        url = 'email-activities';
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/' + url + '/' + this.selectedUserActivityID).then(function (response) {
        if (response.data.success === 1) {
          if (_this5.isEmail) {
            var emailActivityIndex = _this5.emailActivities.findIndex(function (emailActivity) {
              return emailActivity.id === _this5.selectedUserActivityID;
            });

            _this5.emailActivities.splice(emailActivityIndex, 1);

            _this5.selectedUserActivityID = null;

            _this5.$nextTick(function () {
              _this5.$bvModal.hide('modal-confirm-activity-deletion');
            });

            _this5.isEmail = false;
          } else {
            var userActivityIndex = _this5.userActivities.findIndex(function (userActivity) {
              return userActivity.id === _this5.selectedUserActivityID;
            });

            _this5.userActivities.splice(userActivityIndex, 1);

            _this5.selectedUserActivityID = null;

            _this5.$nextTick(function () {
              _this5.$bvModal.hide('modal-confirm-activity-deletion');
            });

            _this5.methodRenderActions();
          }
        }
      })["catch"](function (error) {
        if (error.response.data.messages) {
          _this5.errors = error.response.data.messages;
          _this5.alerts = [];
          _this5.notifications = [];

          _this5.alerts.push({
            type: 'danger',
            message: _this5.errors
          });

          _this5.notifications.push({
            type: 'warnini',
            message: _this5.errors
          });

          _this5.setNotifications(_this5.notifications);

          return;
        }
      });
    },
    confirmDeleteAction: function confirmDeleteAction(id) {
      var _this6 = this;

      var isEmail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.selectedUserActivityID = id;
      this.isEmail = isEmail;
      this.$nextTick(function () {
        _this6.$bvModal.show('modal-confirm-activity-deletion');
      });
    },
    filteredUserActivities: function filteredUserActivities(type_id) {
      if (this.userActivities) {
        return this.userActivities.filter(function (activity) {
          return activity.act_type === type_id;
        });
      }
    },
    getInformBy: function getInformBy(id) {
      return this.informs.find(function (inform) {
        return inform.id === id;
      }).title;
    },
    disableUpdateMode: function disableUpdateMode() {
      this.updateMode = false;
      this.resetForm();
    },
    showUpdateFieldListModal: function showUpdateFieldListModal(fieldList) {
      var _this7 = this;

      this.updateMode = true;
      this.formFieldList.id = this.selectedFieldListID = fieldList.id;
      this.renderFormData(fieldList);
      this.$nextTick(function () {
        _this7.$bvModal.show('modal-create-field_list');
      });
    },
    submitFieldListForm: function submitFieldListForm(bvModalEvt) {
      this.updateMode ? this.updateFieldList(bvModalEvt) : this.createFieldList(bvModalEvt);
    },
    createFieldList: function createFieldList(bvModalEvt) {
      var _this8 = this;

      bvModalEvt.preventDefault();
      this.$v.formFieldList.$touch();
      if (this.$v.formFieldList.$pending || this.$v.formFieldList.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      this.$data.formFieldList.act_id = this.action.id;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/field-list/create', this.$data.formFieldList).then(function (response) {
        if (response.data.success === true) {
          _this8.fieldLists.push(response.data.fieldList);

          _this8.$nextTick(function () {
            _this8.$bvModal.hide('modal-create-field_list');
          });

          _this8.isLoading = false;

          _this8.resetForm();
        }
      })["catch"](function (error) {
        if (error.response.data) {
          _this8.formErrors = error.response.data.errors;
          _this8.isLoading = false;
          return;
        }
      });
    },
    updateFieldList: function updateFieldList() {
      var _this9 = this;

      this.formErrors = null;
      this.$v.formFieldList.$touch();
      if (this.$v.formFieldList.$pending || this.$v.formFieldList.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/field-list/update/' + this.selectedFieldListID, this.$data.formFieldList).then(function (response) {
        if (response.data.success === true) {
          var fieldListIndex = _this9.fieldLists.findIndex(function (fieldList) {
            return fieldList.id === _this9.selectedFieldListID;
          });

          _this9.fieldLists.splice(fieldListIndex, 1);

          _this9.fieldLists.push(response.data.fieldList);

          _this9.fieldLists.sort(function (n1, n2) {
            return n1.id - n2.id;
          });

          _this9.updateMode = false;

          _this9.$nextTick(function () {
            _this9.$bvModal.hide('modal-create-field_list');
          });

          _this9.resetForm();

          _this9.selectedFieldListID = null;
          _this9.isLoading = false;
        }
      })["catch"](function (error) {
        console.log('error', error);

        if (error.response && error.response.data) {
          _this9.formErrors = error.response.data.errors;
          _this9.updateMode = false;
          _this9.isLoading = false;
          return;
        }
      });
    },
    confirmDeleteFieldList: function confirmDeleteFieldList(id) {
      var _this10 = this;

      this.selectedFieldListID = id;
      this.$nextTick(function () {
        _this10.$bvModal.show('modal-confirm-field_list-deletion');
      });
    },
    deleteFieldList: function deleteFieldList() {
      var _this11 = this;

      this.errors = null;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/field-list/' + this.selectedFieldListID).then(function (response) {
        if (response.data.success === true) {
          var fieldListIndex = _this11.fieldLists.findIndex(function (fieldLists) {
            return fieldLists.id === _this11.selectedFieldListID;
          });

          _this11.fieldLists.splice(fieldListIndex, 1);

          _this11.selectedFieldListID = null;
          _this11.isLoading = false;

          _this11.$nextTick(function () {
            _this11.$bvModal.hide('modal-confirm-field_list-deletion');
          });
        }
      })["catch"](function (error) {
        if (error.response.data.messages) {
          _this11.errors = error.response.data.messages;
          _this11.alerts = [];
          _this11.notifications = [];

          _this11.alerts.push({
            type: 'danger',
            message: _this11.errors
          });

          _this11.notifications.push({
            type: 'warning',
            message: _this11.errors
          });

          _this11.setNotifications(_this11.notifications);

          _this11.isLoading = false;
          return;
        }
      });
    },
    resetForm: function resetForm() {
      var self = this;
      Object.keys(this.$data.formFieldList).forEach(function (key, index) {
        self.$data.formFieldList[key] = '';
      });
      this.$data.formFieldList.act_id = this.selectedAction.id;
    },
    renderFormData: function renderFormData(fieldList) {
      var self = this;
      Object.keys(fieldList).forEach(function (key, index) {
        self.$data.formFieldList[key] = fieldList[key];
      });
    }
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(6)
      },
      status_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    },
    formActivity: {
      act_type: {
        required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function () {
          return !this.formActivity.is_email;
        })
      },
      inform_by: {
        required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function () {
          return !this.formActivity.is_email;
        })
      },
      cat_id: {
        required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function () {
          return !this.formActivity.is_email;
        })
      },
      group_id: {
        required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function () {
          return !this.formActivity.is_email;
        })
      },
      email: {
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(6),
        required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function () {
          return this.formActivity.is_email;
        })
      }
    },
    formFieldList: {
      field_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      user_cat_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      user_field_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      field_ord: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      field_type: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      query_type: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_treant_js_treant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/treant-js/treant.js */ "./resources/js/components/scheme/libs/treant-js/treant.js");
/* harmony import */ var _libs_treant_js_treant_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_treant_js_treant_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_treant_js_treant_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/treant-js/treant.css */ "./resources/js/components/scheme/libs/treant-js/treant.css");
/* harmony import */ var _libs_treant_js_treant_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_treant_js_treant_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_treant_js_raphael__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/treant-js/raphael */ "./resources/js/components/scheme/libs/treant-js/raphael.js");
/* harmony import */ var _libs_treant_js_raphael__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_treant_js_raphael__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_treant_js_jquery_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/treant-js/jquery.easing */ "./resources/js/components/scheme/libs/treant-js/jquery.easing.js");
/* harmony import */ var _libs_treant_js_jquery_easing__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_treant_js_jquery_easing__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ComponentActionView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ComponentActionView */ "./resources/js/components/scheme/views/ComponentActionView.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/mixins/TheContentMixin */ "./resources/js/helpers/mixins/TheContentMixin.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




window.Raphael = _libs_treant_js_raphael__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQueryEasing = _libs_treant_js_jquery_easing__WEBPACK_IMPORTED_MODULE_3___default.a;







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ComponentActions",
  mixins: [_helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_8__["default"]],
  props: ['actions', 'statuses', 'selectedTab', 'userGroups', 'userCategories', 'userFields', 'fields'],
  data: function data() {
    return {
      form: {
        name: '',
        description: '',
        status_id: '',
        comp_id: this.$route.params.id,
        par_act_id: '',
        back_act_id: ''
      },
      selectedAction: null,
      selectedUserActivities: null,
      selectedEmailActivities: null,
      selectedFieldList: null,
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(['getActionById'])),
  watch: {
    selectedTab: function selectedTab(newVal, oldVal) {
      console.log('watch selectedAction', newVal, oldVal);
      this.selectedAction = null;
    }
  },
  components: {
    ComponentActionView: _ComponentActionView__WEBPACK_IMPORTED_MODULE_6__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_9___default.a
  },
  mounted: function mounted() {
    this.renderActions();
  },
  methods: {
    getUserActivities: function getUserActivities(id) {
      return new Promise(function () {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/scheme/user-activities/".concat(id)).then(function (response) {
          return response.data.userActivities;
        });
      });
    },
    getEmailActivities: function getEmailActivities(id) {
      return new Promise(function () {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/scheme/email-activities/".concat(id)).then(function (response) {
          return response.data.emailActivities;
        });
      });
    },
    renderActions: function renderActions() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var vm = this;
      var config,
          chart_config,
          actionsIDs = [];

      if (data) {
        this.$store.state.actions = data;
        this.actions = data;
      }

      if (this.actions) {
        // let data = [];
        this.actions.forEach(function (action) {
          actionsIDs.push(action.id);
        });
        var responsibleGroups = [];
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/scheme/responsible-activities/[".concat(actionsIDs, "]")).then(function (response) {
          responsibleGroups = response.data.responsibleActivities;
          var obj = {};
          config = {
            maxDepth: 3000,
            container: "#tree-block",
            rootOrientation: "WEST",
            animateOnInit: false,
            node: {
              HTMLclass: 'nodeBlock',
              collapsable: false
            },
            animation: {
              nodeAnimation: "easeOutBounce",
              nodeSpeed: 500,
              connectorsAnimation: "bounce",
              connectorsSpeed: 500
            }
          };
          chart_config = [config];

          _this.actions.forEach(function (action) {
            var back = action.back_act_id ? '  (back: ' + action.back_act_id + ')' : '';
            var responsible_name = responsibleGroups.find(function (resp) {
              return resp.act_id === action.par_act_id;
            });
            responsible_name = responsible_name ? responsible_name.group_name : ' - - - - ';
            console.log(responsible_name);

            if (action.par_act_id > 0) {
              obj[action.id] = {
                parent: obj[action.par_act_id],
                text: {
                  id: action.id,
                  name: responsible_name + back,
                  title: action.act_title
                }
              };
              chart_config.push(obj[action.id]); // data.push(obj[action.id]);
              // data.push({
              //     id: action.id,
              //     pid: action.par_act_id,
              //     name: action.act_title,
              //     title: action.act_title + ' (ID: ' + action.id + ') ' + responsible_name + back,
              // });
            } else {
              // data.push({
              //     id: action.id,
              //     name: action.act_title,
              //     title: action.act_title + ' (ID: ' + action.id + ') ' + responsible_name + back,
              // });
              obj[action.id] = {
                text: {
                  id: action.id,
                  name: action.act_title,
                  title: ''
                }
              }; // data.push(obj[action.id]);

              chart_config.push(obj[action.id]);
            }
          });

          new Treant(chart_config, null, $);
          var counter = 0;
          $('body').unbind().on('click', '.Treant .node', function () {
            var id = $(this).find(".node-id").text();
            counter++;
            console.log('treant', id);
            console.log('counter', counter);
            vm.isLoading = true;
            vm.selectedAction = vm.getActionById(parseInt(id));
            var urls = ["/api/scheme/user-activities/".concat(id), "/api/scheme/email-activities/".concat(id), "/api/scheme/field-list/".concat(id)];
            var requests = urls.map(function (url) {
              return axios__WEBPACK_IMPORTED_MODULE_5___default()(url);
            });
            Promise.all(requests).then(function (responses) {
              vm.selectedUserActivities = responses[0].data.userActivities;
              vm.selectedEmailActivities = responses[1].data.emailActivities;
              vm.selectedFieldList = responses[2].data.fieldLists;
              vm.isLoading = false;
            });
            vm.scrollToTop();
            return false;
          });
          _this.isLoading = false;

          _this.setTreeBlockWidth();

          _this.$emit('isLoadingChanged', _this.isLoading);
        });
      }
    },
    setTreeBlockWidth: function setTreeBlockWidth() {
      var treeBlockElement = document.getElementById('tree-block');
      var svgBlock = treeBlockElement.querySelector('svg');
      var svgWidth = svgBlock.getAttribute('width');
      treeBlockElement.setAttribute('style', "width:" + svgWidth + "px");
    },
    createActionSubmit: function createActionSubmit(bvModalEvt) {
      var _this2 = this;

      bvModalEvt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/scheme/actions/create', this.$data.form).then(function (response) {
        _this2.actions.push(response.data.action);

        _this2.renderActions();

        _this2.$nextTick(function () {
          _this2.$bvModal.hide('modal-create-action');
        });

        _this2.resetForm();
      });
    },
    resetForm: function resetForm() {
      var self = this;
      Object.keys(this.$data.form).forEach(function (key, index) {
        self.$data.form[key] = '';
      });
      this.$data.form.comp_id = this.$route.params.id;
    }
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["minLength"])(6)
      },
      status_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentFields.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentFields.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schemeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schemeStore */ "./resources/js/components/scheme/schemeStore.js");
/* harmony import */ var _layout_TheAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/TheAlert */ "./resources/js/components/layout/TheAlert.vue");
/* harmony import */ var _helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/mixins/TheContentMixin */ "./resources/js/helpers/mixins/TheContentMixin.vue");
/* harmony import */ var _TheComponentMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TheComponentMixin */ "./resources/js/components/scheme/TheComponentMixin.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ComponentFields",
  props: ['fields'],
  components: {
    TheAlert: _layout_TheAlert__WEBPACK_IMPORTED_MODULE_2__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  mixins: [_helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_3__["default"], _TheComponentMixin__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      form: {
        field_label: '',
        field_name: '',
        field_ord: '',
        field_type: '',
        query_type: '',
        query_select: '',
        query_db: '',
        query_value2: '',
        cond_show: '',
        cond_alert: '',
        default_vals: '',
        is_req: '',
        parent: '',
        dependent: '',
        style_type: '',
        field_col: '',
        style_class: '',
        is_readonly: '',
        change_func: '',
        max_length: '',
        min_length: '',
        query_value: '',
        comp_id: this.$route.params.id
      },
      field_types: [{
        id: 1,
        title: 'Select(single)'
      }, {
        id: 12,
        title: 'Select(single with search)'
      }, {
        id: 2,
        title: 'Select(multi)'
      }, {
        id: 3,
        title: 'Input(text)'
      }, {
        id: 13,
        title: 'Input(number)'
      }, {
        id: 4,
        title: 'Textarea'
      }, {
        id: 5,
        title: 'Checkbox'
      }, {
        id: 6,
        title: 'Radio'
      }, {
        id: 7,
        title: 'Span'
      }, {
        id: 8,
        title: 'Date'
      }, {
        id: 9,
        title: 'Time'
      }, {
        id: 10,
        title: 'DateTime'
      }, {
        id: 11,
        title: 'Slider'
      }],
      query_types: [{
        id: 1,
        title: 'Query'
      }, {
        id: 2,
        title: 'Values'
      }, {
        id: 3,
        title: 'Main DB'
      }],
      query_dbs: [{
        id: 1,
        title: 'Oracle'
      }, {
        id: 2,
        title: 'MySQL'
      }, {
        id: 2,
        title: 'Postgres SQL'
      }],
      selectedField: null,
      updateMode: false,
      formErrors: null,
      errors: null,
      alerts: null,
      isLoading: false
    };
  },
  methods: {
    disableUpdateMode: function disableUpdateMode() {
      this.updateMode = false;
      this.resetForm();
    },
    showUpdateFieldModal: function showUpdateFieldModal(field) {
      var _this = this;

      this.updateMode = true;
      this.form.id = this.selectedField = field.id;
      this.renderFormData(field);
      this.$nextTick(function () {
        _this.$bvModal.show('modal-create-field');
      });
    },
    submitFieldForm: function submitFieldForm(bvModalEvt) {
      this.updateMode ? this.updateField(bvModalEvt) : this.createField(bvModalEvt);
    },
    createField: function createField(bvModalEvt) {
      var _this2 = this;

      bvModalEvt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/scheme/fields/create', this.$data.form).then(function (response) {
        if (response.data.success === true) {
          var fields = _this2.$store.getters.fields;
          fields.push(response.data.field);

          _this2.$nextTick(function () {
            _this2.$bvModal.hide('modal-create-field');
          });

          _this2.isLoading = false;

          _this2.resetForm();
        }
      })["catch"](function (error) {
        if (error.response.data) {
          _this2.formErrors = error.response.data.errors;
          _this2.isLoading = false;
          return;
        }
      });
    },
    updateField: function updateField() {
      var _this3 = this;

      this.formErrors = null;
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/scheme/fields/update/' + this.selectedField, this.$data.form).then(function (response) {
        if (response.data.success === true) {
          var fieldsIndex = _this3.fields.findIndex(function (fields) {
            return fields.id === _this3.selectedField;
          });

          _this3.fields.splice(fieldsIndex, 1);

          _this3.fields.push(response.data.field);

          _this3.fields.sort(function (n1, n2) {
            return n1.id - n2.id;
          });

          _this3.updateMode = false;

          _this3.$nextTick(function () {
            _this3.$bvModal.hide('modal-create-field');
          });

          _this3.resetForm();

          _this3.selectedField = null;
          _this3.isLoading = false;
        }
      })["catch"](function (error) {
        console.log('error', error);

        if (error.response && error.response.data) {
          _this3.formErrors = error.response.data.errors;
          _this3.updateMode = false;
          _this3.isLoading = false;
          return;
        }
      });
    },
    confirmDelete: function confirmDelete(id) {
      var _this4 = this;

      this.selectedField = id;
      this.$nextTick(function () {
        _this4.$bvModal.show('modal-confirm-field-deletion');
      });
    },
    deleteField: function deleteField() {
      var _this5 = this;

      this.errors = null;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/scheme/fields/' + this.selectedField).then(function (response) {
        if (response.data.success === true) {
          var fieldsIndex = _this5.fields.findIndex(function (fields) {
            return fields.id === _this5.selectedField;
          });

          _this5.fields.splice(fieldsIndex, 1);

          _this5.selectedField = null;
          _this5.isLoading = false;

          _this5.$nextTick(function () {
            _this5.$bvModal.hide('modal-confirm-field-deletion');
          });
        }
      })["catch"](function (error) {
        if (error.response.data.messages) {
          _this5.errors = error.response.data.messages;
          _this5.alerts = [];
          _this5.notifications = [];

          _this5.alerts.push({
            type: 'danger',
            message: _this5.errors
          });

          _this5.notifications.push({
            type: 'warning',
            message: _this5.errors
          });

          _this5.setNotifications(_this5.notifications);

          _this5.isLoading = false;
          return;
        }
      });
    },
    resetForm: function resetForm() {
      var self = this;
      Object.keys(this.$data.form).forEach(function (key, index) {
        self.$data.form[key] = '';
      });
      this.$data.form.comp_id = this.$route.params.id;
    },
    renderFormData: function renderFormData(field) {
      var self = this;
      Object.keys(field).forEach(function (key, index) {
        self.$data.form[key] = field[key];
      });
    }
  },
  validations: {
    form: {
      field_label: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(2)
      },
      field_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(2)
      },
      field_ord: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      field_col: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      field_type: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      query_type: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_TheAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/TheAlert */ "./resources/js/components/layout/TheAlert.vue");
/* harmony import */ var _helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/mixins/TheContentMixin */ "./resources/js/helpers/mixins/TheContentMixin.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ComponentStatuses",
  props: ['statuses'],
  components: {
    TheAlert: _layout_TheAlert__WEBPACK_IMPORTED_MODULE_1__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  mixins: [_helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      form: {
        name: '',
        to_assign: false,
        comp_id: null
      },
      selectedStatus: null,
      updateMode: false,
      formErrors: null,
      errors: null,
      alerts: null,
      isLoading: false
    };
  },
  methods: {
    disableUpdateMode: function disableUpdateMode() {
      this.updateMode = false;
    },
    showUpdateStatusModal: function showUpdateStatusModal(status) {
      var _this = this;

      this.updateMode = true;
      this.form.id = this.selectedStatus = status.id;
      this.form.name = status.name;
      this.$nextTick(function () {
        _this.$bvModal.show('modal-create-status');
      });
    },
    submitStatusForm: function submitStatusForm(bvModalEvt) {
      this.updateMode ? this.updateStatus(bvModalEvt) : this.createStatus(bvModalEvt);
    },
    createStatus: function createStatus(bvModalEvt) {
      var _this2 = this;

      bvModalEvt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;

      if (this.$data.form.to_assign === true) {
        this.$data.form.comp_id = this.$route.params.id;
      } else {
        this.$data.form.comp_id = null;
      }

      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/scheme/statuses/create', this.$data.form).then(function (response) {
        if (response.data.success === true) {
          var statuses = _this2.$store.getters.statuses;
          statuses.push(response.data.status);

          _this2.$nextTick(function () {
            _this2.$bvModal.hide('modal-create-status');
          });

          _this2.isLoading = false;

          _this2.resetForm();
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          _this2.formErrors = error.response.data.errors;
          _this2.isLoading = false;
          return;
        }
      });
    },
    updateStatus: function updateStatus(bvModalEvt) {
      var _this3 = this;

      bvModalEvt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      delete this.$data.form.comp_id;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/scheme/statuses/update/' + this.selectedStatus, this.$data.form).then(function (response) {
        if (response.data.success === true) {
          var statuses = _this3.$store.getters.statuses;
          var statusIndex = statuses.findIndex(function (status) {
            return status.id === _this3.selectedStatus;
          });
          statuses.splice(statusIndex, 1);
          statuses.push(response.data.status);
          statuses.sort(function (n1, n2) {
            return n1.id - n2.id;
          });

          _this3.$nextTick(function () {
            _this3.$bvModal.hide('modal-create-status');
          });

          _this3.resetForm();

          _this3.selectedStatus = null;
          _this3.updateMode = false;
          _this3.isLoading = false;
        }
      })["catch"](function (error) {
        if (error.response && error.response.data) {
          _this3.formErrors = error.response.data.errors;
          _this3.isLoading = false;
          return;
        }
      });
    },
    confirmDelete: function confirmDelete(id) {
      var _this4 = this;

      this.selectedStatus = id;
      this.$nextTick(function () {
        _this4.$bvModal.show('modal-confirm-status-deletion');
      });
    },
    deleteStatus: function deleteStatus() {
      var _this5 = this;

      this.errors = null;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/scheme/statuses/' + this.selectedStatus).then(function (response) {
        if (response.data.success === true) {
          var statuses = _this5.$store.getters.statuses;
          var statusIndex = statuses.findIndex(function (status) {
            return status.id === _this5.selectedStatus;
          });
          statuses.splice(statusIndex, 1);
          _this5.selectedStatus = null;
          _this5.isLoading = false;

          _this5.$nextTick(function () {
            _this5.$bvModal.hide('modal-confirm-status-deletion');
          });
        }
      })["catch"](function (error) {
        if (error.response.data.messages) {
          _this5.errors = error.response.data.messages;
          _this5.alerts = [];
          _this5.notifications = [];

          _this5.alerts.push({
            type: 'danger',
            message: _this5.errors
          });

          _this5.notifications.push({
            type: 'warning',
            message: _this5.errors
          });

          _this5.setNotifications(_this5.notifications);

          _this5.isLoading = false;
          return;
        }
      });
    },
    resetForm: function resetForm() {
      var self = this;
      Object.keys(this.$data.form).forEach(function (key, index) {
        self.$data.form[key] = '';
      });
      this.$data.form.comp_id = this.$route.params.id;
    }
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(6)
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schemeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schemeStore */ "./resources/js/components/scheme/schemeStore.js");
/* harmony import */ var _layout_TheAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/TheAlert */ "./resources/js/components/layout/TheAlert.vue");
/* harmony import */ var _helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/mixins/TheContentMixin */ "./resources/js/helpers/mixins/TheContentMixin.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ComponentUserCategories",
  props: ['userCategories'],
  components: {
    TheAlert: _layout_TheAlert__WEBPACK_IMPORTED_MODULE_3__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  mixins: [_helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      form: {
        name: '',
        comp_id: this.$route.params.id
      },
      selectedUserCategory: null,
      updateMode: false,
      formErrors: null,
      errors: null,
      alerts: null,
      isLoading: false
    };
  },
  methods: {
    showUpdateUserCategoryModal: function showUpdateUserCategoryModal(userCategory) {
      var _this = this;

      this.updateMode = true;
      this.form.id = this.selectedUserCategory = userCategory.id;
      this.form.name = userCategory.cat_name;
      this.$nextTick(function () {
        _this.$bvModal.show('modal-create-user-category');
      });
    },
    submitUserCategoryForm: function submitUserCategoryForm(bvModalEvt) {
      this.updateMode ? this.updateUserCategory(bvModalEvt) : this.createUserCategory(bvModalEvt);
    },
    createUserCategory: function createUserCategory(bvModalEvt) {
      var _this2 = this;

      bvModalEvt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/user-categories/create', this.$data.form).then(function (response) {
        _this2.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_2__["SET_USER_CATEGORIES"], _this2.$route.params.id);

        _this2.$nextTick(function () {
          _this2.$bvModal.hide('modal-create-user-category');
        });

        _this2.isLoading = false;
        _this2.$data.form.name = '';
      });
    },
    updateUserCategory: function updateUserCategory(bvModalEvt) {
      var _this3 = this;

      bvModalEvt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/user-categories/update/' + this.selectedUserCategory, this.$data.form).then(function (response) {
        if (response.data.success === 1) {
          var userCategoriesIndex = _this3.userCategories.findIndex(function (userCategories) {
            return userCategories.id === _this3.selectedUserCategory;
          });

          _this3.userCategories.splice(userCategoriesIndex, 1);

          _this3.userCategories.push(response.data.userCategory);

          _this3.userCategories.sort(function (n1, n2) {
            return n1.id - n2.id;
          });

          _this3.updateMode = false;

          _this3.$nextTick(function () {
            _this3.$bvModal.hide('modal-create-user-category');
          });

          _this3.resetForm();

          _this3.selectedUserCategory = null;
          _this3.isLoading = false;
        }
      })["catch"](function (error) {
        console.log('error', error);

        if (error.response && error.response.data) {
          _this3.formErrors = error.response.data.errors;
          _this3.updateMode = false;
          _this3.isLoading = false;
          return;
        }
      });
    },
    confirmDelete: function confirmDelete(id) {
      var _this4 = this;

      this.selectedUserCategory = id;
      this.$nextTick(function () {
        _this4.$bvModal.show('modal-confirm-user-category-deletion');
      });
    },
    deleteUserCategory: function deleteUserCategory() {
      var _this5 = this;

      this.errors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/scheme/user-categories/' + this.selectedUserCategory).then(function (response) {
        if (response.data.success === 1) {
          var userCategoriesIndex = _this5.userCategories.findIndex(function (userCategories) {
            return userCategories.id === _this5.selectedUserCategory;
          });

          _this5.userCategories.splice(userCategoriesIndex, 1);

          _this5.selectedUserCategory = null;

          _this5.$nextTick(function () {
            _this5.$bvModal.hide('modal-confirm-user-category-deletion');
          });

          _this5.isLoading = false;
        }
      })["catch"](function (error) {
        if (error.response.data.messages) {
          _this5.isLoading = true;
          _this5.errors = error.response.data.messages;
          _this5.alerts = [];
          _this5.notifications = [];

          _this5.alerts.push({
            type: 'danger',
            message: _this5.errors
          });

          _this5.notifications.push({
            type: 'warning',
            message: _this5.errors
          });

          _this5.setNotifications(_this5.notifications);

          _this5.isLoading = false;
          return;
        }
      });
    },
    resetForm: function resetForm() {
      var self = this;
      Object.keys(this.$data.form).forEach(function (key, index) {
        self.$data.form[key] = '';
      });
      this.$data.form.comp_id = this.$route.params.id;
    }
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(6)
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schemeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schemeStore */ "./resources/js/components/scheme/schemeStore.js");
/* harmony import */ var _layout_TheAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/TheAlert */ "./resources/js/components/layout/TheAlert.vue");
/* harmony import */ var _helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/mixins/TheContentMixin */ "./resources/js/helpers/mixins/TheContentMixin.vue");
/* harmony import */ var _TheComponentMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TheComponentMixin */ "./resources/js/components/scheme/TheComponentMixin.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ComponentUserFields",
  props: ['userFields', 'userCategories'],
  components: {
    TheAlert: _layout_TheAlert__WEBPACK_IMPORTED_MODULE_2__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  mixins: [_helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_3__["default"], _TheComponentMixin__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      form: {
        name: '',
        cat_id: '',
        comp_id: this.$route.params.id
      },
      selectedUserField: null,
      updateMode: false,
      formErrors: null,
      errors: null,
      alerts: null,
      isLoading: false
    };
  },
  methods: {
    showUpdateUserFieldModal: function showUpdateUserFieldModal(userField) {
      var _this = this;

      this.updateMode = true;
      this.form.id = this.selectedUserField = userField.id;
      this.form.name = userField.field_name;
      this.form.cat_id = userField.cat_id;
      this.$nextTick(function () {
        _this.$bvModal.show('modal-create-user-field');
      });
    },
    submitUserFieldForm: function submitUserFieldForm(bvModalEvt) {
      this.updateMode ? this.updateUserField(bvModalEvt) : this.createUserField(bvModalEvt);
    },
    createUserField: function createUserField(bvModalEvt) {
      var _this2 = this;

      bvModalEvt.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/scheme/user-fields/create', this.$data.form).then(function (response) {
        _this2.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_USER_FIELDS"], _this2.$route.params.id);

        _this2.$nextTick(function () {
          _this2.$bvModal.hide('modal-create-user-field');
        });

        _this2.isLoading = false;

        _this2.resetForm();
      })["catch"](function (error) {
        if (error.response.data) {
          _this2.formErrors = error.response.data.errors;
          _this2.isLoading = false;
          return;
        }
      });
    },
    updateUserField: function updateUserField() {
      var _this3 = this;

      this.formErrors = null;
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/scheme/user-fields/update/' + this.selectedUserField, this.$data.form).then(function (response) {
        if (response.data.success === 1) {
          // let groups = this.$store.state.groups;
          console.log('userFields', _this3.userFields);

          var userFieldsIndex = _this3.userFields.findIndex(function (userFields) {
            return userFields.id === _this3.selectedUserField;
          });

          _this3.userFields.splice(userFieldsIndex, 1);

          _this3.userFields.push(response.data.userField);

          _this3.userFields.sort(function (n1, n2) {
            return n1.id - n2.id;
          });

          _this3.updateMode = false;

          _this3.$nextTick(function () {
            _this3.$bvModal.hide('modal-create-user-field');
          });

          _this3.resetForm();

          _this3.selectedUserField = null;
          _this3.isLoading = false;
        }
      })["catch"](function (error) {
        console.log('error', error);

        if (error.response && error.response.data) {
          _this3.formErrors = error.response.data.errors;
          _this3.updateMode = false;
          _this3.isLoading = false;
          return;
        }
      });
    },
    confirmDelete: function confirmDelete(id) {
      var _this4 = this;

      this.selectedUserField = id;
      this.$nextTick(function () {
        _this4.$bvModal.show('modal-confirm-user-field-deletion');
      });
    },
    deleteUserField: function deleteUserField() {
      var _this5 = this;

      this.errors = null;
      this.formErrors = null;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/scheme/user-fields/' + this.selectedUserField).then(function (response) {
        if (response.data.success === 1) {
          var userFieldsIndex = _this5.userFields.findIndex(function (userFields) {
            return userFields.id === _this5.selectedUserField;
          });

          _this5.userFields.splice(userFieldsIndex, 1);

          _this5.selectedUserField = null;
          _this5.isLoading = false;

          _this5.$nextTick(function () {
            _this5.$bvModal.hide('modal-confirm-user-field-deletion');
          });
        }
      })["catch"](function (error) {
        if (error.response.data.messages) {
          _this5.errors = error.response.data.messages;
          _this5.alerts = [];
          _this5.notifications = [];

          _this5.alerts.push({
            type: 'danger',
            message: _this5.errors
          });

          _this5.notifications.push({
            type: 'warning',
            message: _this5.errors
          });

          _this5.setNotifications(_this5.notifications);

          _this5.isLoading = false;
          return;
        }
      });
    },
    resetForm: function resetForm() {
      var self = this;
      Object.keys(this.$data.form).forEach(function (key, index) {
        self.$data.form[key] = '';
      });
      this.$data.form.comp_id = this.$route.params.id;
    }
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(6)
      },
      cat_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schemeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schemeStore */ "./resources/js/components/scheme/schemeStore.js");
/* harmony import */ var _layout_TheAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/TheAlert */ "./resources/js/components/layout/TheAlert.vue");
/* harmony import */ var _helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/mixins/TheContentMixin */ "./resources/js/helpers/mixins/TheContentMixin.vue");
/* harmony import */ var vue_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-bootstrap-typeahead */ "./node_modules/vue-bootstrap-typeahead/src/components/VueBootstrapTypeahead.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ComponentUserGroups",
  props: ['userGroups', 'userFields'],
  components: {
    TheAlert: _layout_TheAlert__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueBootstrapTypeahead: vue_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      form: {
        name: '',
        comp_id: this.$route.params.id
      },
      formGroup: {
        user_id: '',
        group_id: '',
        field_id: '',
        is_email: 0,
        is_admin: 0
      },
      users: [],
      userSearch: '',
      selectedUser: null,
      selectedGroup: null,
      updateMode: false,
      formErrors: null,
      errors: null,
      alerts: null,
      isLoading: true,
      groupFieldsUsers: null,
      selectedGroupID: '',
      selectedFieldID: ''
    };
  },
  watch: {
    userSearch: function userSearch(newQuery) {
      var _this = this;

      axios.get("/api/scheme/user/search?query=".concat(newQuery)).then(function (res) {
        _this.users = res.data.items;
      });
    }
  },
  methods: {
    addUser: function addUser() {
      var _this2 = this;

      this.formErrors = null;
      this.$v.formGroup.$touch();
      if (this.$v.formGroup.$pending || this.$v.formGroup.$error) return;

      if (this.userSearch) {
        if (this.selectedUser && this.userSearch === this.selectedUser.email) {
          this.$data.formGroup.user_id = this.selectedUser.id;
        } else {
          this.formErrors = {
            error: ['Вам необходимо выбрать пользователя!']
          };
          return;
        }
      } else {
        this.formErrors = {
          error: ['Вам необходимо выбрать пользователя!']
        };
        return;
      }

      axios.post('/api/scheme/user-groups/add-user', this.$data.formGroup).then(function (response) {
        _this2.groupFieldsUsers = response.data.groupFieldsUsers;
      })["catch"](function (error) {
        if (error.response.data) {
          _this2.formErrors = error.response.data.errors;
          return;
        }
      });
    },
    deleteUser: function deleteUser(group_id, field_id, user_id, is_email) {
      var _this3 = this;

      var form = {
        group_id: group_id,
        field_id: field_id,
        user_id: user_id,
        is_email: is_email
      };
      axios.post('/api/scheme/user-groups/delete-user', form).then(function (response) {
        _this3.$delete(_this3.groupFieldsUsers[group_id][field_id]['user_list'][is_email], user_id);
      })["catch"](function (error) {
        if (error.response.data) {
          _this3.formErrors = error.response.data.errors;
          return;
        }
      });
    },
    showFieldList: function showFieldList(group_id) {
      var _this4 = this;

      this.selectedGroupID = group_id;
      axios.get("/api/scheme/user-groups/fields/".concat(group_id)).then(function (response) {
        _this4.groupFieldsUsers = response.data.groupFieldsUsers;
      });
    },
    showUserList: function showUserList(group_id, field_id) {
      this.selectedFieldID = group_id + '_' + field_id;
    },
    showUpdateGroupModal: function showUpdateGroupModal(group) {
      var _this5 = this;

      this.updateMode = true;
      this.form.id = this.selectedGroup = group.id;
      this.form.name = group.group_name;
      this.$nextTick(function () {
        _this5.$bvModal.show('modal-create-group');
      });
    },
    submitGroupForm: function submitGroupForm(bvModalEvt) {
      this.updateMode ? this.updateGroup(bvModalEvt) : this.createGroup(bvModalEvt);
    },
    createGroup: function createGroup(bvModalEvt) {
      var _this6 = this;

      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.$v.form.$touch(); // if its still pending or an error is returned do not submit

      if (this.$v.form.$pending || this.$v.form.$error) return; // Exit when the form isn't valid
      // Push the name to submitted names

      axios.post('/api/scheme/user-groups/create', this.$data.form).then(function (response) {
        _this6.$store.dispatch(_schemeStore__WEBPACK_IMPORTED_MODULE_1__["SET_USER_GROUPS"], _this6.$route.params.id);

        _this6.$nextTick(function () {
          _this6.$bvModal.hide('modal-create-group');
        });

        _this6.isLoading = true;
        _this6.$data.form.name = '';
      });
    },
    updateGroup: function updateGroup() {
      var _this7 = this;

      this.formErrors = null;
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      this.isLoading = true;
      axios.post('/api/scheme/user-groups/update/' + this.selectedGroup, this.$data.form).then(function (response) {
        if (response.data.success === 1) {
          // let groups = this.$store.state.userGroups;
          console.log('groups', _this7.userGroups);

          var groupIndex = _this7.userGroups.findIndex(function (group) {
            return group.id === _this7.selectedGroup;
          });

          _this7.userGroups.splice(groupIndex, 1);

          _this7.userGroups.push(response.data.userGroup);

          _this7.userGroups.sort(function (n1, n2) {
            return n1.id - n2.id;
          });

          _this7.$nextTick(function () {
            _this7.$bvModal.hide('modal-create-group');
          });

          _this7.resetForm();

          _this7.selectedGroup = null;
          _this7.updateMode = false;
          _this7.isLoading = false;
        }
      })["catch"](function (error) {
        console.log('error', error);

        if (error.response && error.response.data) {
          _this7.formErrors = error.response.data.errors;
          _this7.isLoading = false;
          return;
        }
      });
    },
    confirmDelete: function confirmDelete(id) {
      var _this8 = this;

      this.selectedGroup = id;
      this.$nextTick(function () {
        _this8.$bvModal.show('modal-confirm-group-deletion');
      });
    },
    deleteGroup: function deleteGroup() {
      var _this9 = this;

      this.errors = null;
      axios.post('/api/scheme/user-groups/' + this.selectedGroup).then(function (response) {
        if (response.data.success === 1) {
          // let userGroups = this.$store.getters.userGroups;
          // console.log(userGroups);
          var groupIndex = _this9.userGroups.findIndex(function (group) {
            return group.id === _this9.selectedGroup;
          });

          _this9.userGroups.splice(groupIndex, 1);

          _this9.selectedGroup = null;

          _this9.$nextTick(function () {
            _this9.$bvModal.hide('modal-confirm-group-deletion');
          });
        }
      })["catch"](function (error) {
        if (error.response.data.messages) {
          _this9.errors = error.response.data.messages;
          _this9.alerts = [];
          _this9.notifications = [];

          _this9.alerts.push({
            type: 'danger',
            message: _this9.errors
          });

          _this9.notifications.push({
            type: 'warning',
            message: _this9.errors
          });

          _this9.setNotifications(_this9.notifications);

          return;
        }
      });
    },
    resetForm: function resetForm() {
      var self = this;
      Object.keys(this.$data.form).forEach(function (key, index) {
        self.$data.form[key] = '';
      });
      this.$data.form.comp_id = this.$route.params.id;
    }
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(6)
      }
    },
    formGroup: {
      group_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/helpers/mixins/TheContentMixin.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/helpers/mixins/TheContentMixin.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./resources/js/helpers/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheContentMixin",
  methods: {
    generateBreadcrumb: function generateBreadcrumb(breadcrumbs) {
      this.$store.dispatch(_helpers__WEBPACK_IMPORTED_MODULE_0__["SET_BREADCRUMBS"], breadcrumbs);
    },
    getTitle: function getTitle(breadcrumbs) {
      return breadcrumbs[breadcrumbs.length - 1].text;
    },
    setNotifications: function setNotifications(notifications) {
      this.$store.dispatch(_helpers__WEBPACK_IMPORTED_MODULE_0__["SET_NOTIFICATIONS"], notifications);
    },
    scrollToTop: function scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/scheme/libs/treant-js/treant.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/components/scheme/libs/treant-js/treant.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { margin:0; padding:0; }\n\n.tree-body{\n    overflow: hidden; user-select: none; touch-action: none; height: 700px; background-color: #b9e1c0\n}\n/* optional Container STYLES */\n/*.chart { height: 100%; margin: 5px; width: 100%; }*/\n/* .Treant > .node {  } */ \n.Treant > p { font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; font-weight: bold; font-size: 12px; }\n.node-id { font-weight: bold;}\n.node-name { font-weight: bold; font-size:14px; color:rgb(167, 37, 87);}\n.node-title { font-weight: bold; font-size:14px; color:blue;}\n\n.nodeBlock {\n    padding: 200px;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    background-color: #ffffff;\n    border: 1px solid red;\n    width: 400px;\n    font-size: 12px;\n}\n\n.nodeBlock img {\n    margin-right:  10px;\n}\n/* required LIB STYLES */\n/* .Treant se automatski dodaje na svaki chart conatiner */\n.Treant { position: relative; overflow: hidden; padding: 0 !important; }\n.Treant > .node,\n.Treant > .pseudo { position: absolute; display: block; visibility: hidden; }\n.Treant.Treant-loaded .node,\n.Treant.Treant-loaded .pseudo { visibility: visible; }\n.Treant > .pseudo { width: 0; height: 0; border: none; padding: 0; }\n.Treant .collapse-switch { width: 3px; height: 3px; display: block; border: 1px solid black; position: absolute; top: 1px; right: 1px; cursor: pointer; }\n.Treant .collapsed .collapse-switch { background-color: #868DEE; }\n.Treant > .node img {\tborder: none; float: left; }\n\n\n/* optional Container STYLES */\n.chart { height: 100%; margin: 5px; }\n.Treant > .node { padding: 3px; border: 1px solid #484848; border-radius: 3px; }\n/*.Treant > .node img { width: 100%; height: 100%; }*/\n\n.Treant .collapse-switch { width: 100%; height: 100%; border: none; }\n.Treant .node.collapsed { background-color: #DEF82D; }\n.Treant .node.collapsed .collapse-switch { background: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#orgchart .get-box[data-v-7418fad0] {\n    fill: #00B48C;\n    stroke: #008A17;\n}\n#orgchart .get-oc-c .link[data-v-7418fad0] {\n    stroke: red;\n}\n#orgchart .get-text-0[data-v-7418fad0] {\n    fill: white;\n    font-size: 50px;\n}\n#orgchart .get-text-1[data-v-7418fad0] {\n    fill: white;\n    font-size: 60px;\n    font-weight: bold;\n}\n#orgchart .get-text-2[data-v-7418fad0] {\n    fill: black;\n    font-size: 50px;\n    font-weight: bold;\n}\n#orgchart .get-prev-page[data-v-7418fad0] {\n    display: none;\n}\n#orgchart .field_0[data-v-7418fad0] {\n    color: #000 !important;\n}\n#orgchart[data-v-7418fad0] {\n    width: 100%;\n    height: 700px;\n    background-color: #663399\n}\n.invisible[data-v-7418fad0] {\n    display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/layout/TheAlert.vue?vue&type=template&id=4aba8d55&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/layout/TheAlert.vue?vue&type=template&id=4aba8d55& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "m-1" },
    _vm._l(_vm.messages, function(alert, index) {
      return _c("div", { key: index }, [
        _c(
          "div",
          {
            staticClass: "alert alert-dismissible",
            class: "alert-" + alert.type
          },
          [
            _c(
              "button",
              {
                staticClass: "close",
                attrs: { type: "button", "data-dismiss": "alert" },
                on: {
                  click: function($event) {
                    return _vm.deleteAlert(index)
                  }
                }
              },
              [_vm._v("×")]
            ),
            _vm._v("\n            " + _vm._s(alert.message) + "\n        ")
          ]
        )
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentView.vue?vue&type=template&id=c48534c0&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentView.vue?vue&type=template&id=c48534c0& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loading", {
        attrs: { active: _vm.isLoading, "can-cancel": false },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-10" }, [
          _c("h6", [
            _vm._v("Компонент: "),
            _vm.component
              ? _c("span", [_vm._v(_vm._s(_vm.component.comp_name))])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane",
                class: { "show active": _vm.selectedTab === 1 }
              },
              [
                _vm.actions
                  ? _c("ComponentActions", {
                      attrs: {
                        actions: _vm.actions,
                        statuses: _vm.statuses,
                        userGroups: _vm.userGroups,
                        userCategories: _vm.userCategories,
                        userFields: _vm.userFields,
                        fields: _vm.fields,
                        selectedTab: _vm.selectedTab
                      },
                      on: {
                        isLoadingChanged: function($event) {
                          _vm.isLoading = $event
                        }
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane",
                class: { "show active": _vm.selectedTab === 2 }
              },
              [
                _vm.statuses
                  ? _c("ComponentStatuses", {
                      attrs: { statuses: _vm.statuses },
                      on: {
                        isLoadingChanged: function($event) {
                          _vm.isLoading = $event
                        }
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane",
                class: { "show active": _vm.selectedTab === 3 }
              },
              [
                _vm.userGroups
                  ? _c("ComponentUserGroups", {
                      attrs: {
                        userGroups: _vm.userGroups,
                        userFields: _vm.userFields
                      },
                      on: {
                        isLoadingChanged: function($event) {
                          _vm.isLoading = $event
                        }
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane",
                class: { "show active": _vm.selectedTab === 4 }
              },
              [
                _vm.userCategories
                  ? _c("ComponentUserCategories", {
                      attrs: { userCategories: _vm.userCategories },
                      on: {
                        isLoadingChanged: function($event) {
                          _vm.isLoading = $event
                        }
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane",
                class: { "show active": _vm.selectedTab === 5 }
              },
              [
                _vm.userFields
                  ? _c("ComponentUserFields", {
                      attrs: {
                        userFields: _vm.userFields,
                        userCategories: _vm.userCategories
                      },
                      on: {
                        isLoadingChanged: function($event) {
                          _vm.isLoading = $event
                        }
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane",
                class: { "show active": _vm.selectedTab === 6 }
              },
              [
                _vm.fields
                  ? _c("ComponentFields", {
                      attrs: { fields: _vm.fields },
                      on: {
                        isLoadingChanged: function($event) {
                          _vm.isLoading = $event
                        }
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-2 mb-3" }, [
          _c(
            "ul",
            { staticClass: "nav nav-pills flex-column" },
            _vm._l(_vm.tabs, function(tab, index) {
              return _c("li", { key: index, staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link btn btn-default",
                    class: { active: tab.isActive },
                    attrs: { id: "{ tab.id }", role: "tab" },
                    on: {
                      click: function($event) {
                        return _vm.selectTab(tab)
                      }
                    }
                  },
                  [_vm._v(_vm._s(tab.name))]
                ),
                _vm._v(" "),
                tab.isActive
                  ? _c(
                      "ul",
                      { staticClass: "list-group list-group-flush" },
                      _vm._l(tab.menu, function(menu, index) {
                        return _c(
                          "li",
                          { key: index, staticClass: "list-group-item" },
                          [
                            _vm._v(
                              _vm._s(menu.name) + "\n                        "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ])
            }),
            0
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=template&id=93090910&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=template&id=93090910&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card mb-1" },
    [
      _c("loading", {
        attrs: { active: _vm.isLoading, "can-cancel": false },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _vm.action
        ? _c("div", { staticClass: "card-header" }, [
            _vm._v("Действие: #" + _vm._s(_vm.action.act_title) + "\n        "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "b-modal",
                    rawName: "v-b-modal.modal-confirm-action-deletion",
                    modifiers: { "modal-confirm-action-deletion": true }
                  }
                ],
                staticClass: "btn btn-sm btn-outline-danger float-right"
              },
              [_vm._v("Удалить\n        ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-outline-warning float-right mr-1",
                on: {
                  click: function($event) {
                    return _vm.updateActionModal(_vm.selectedAction)
                  }
                }
              },
              [_vm._v("\n            Изменить\n        ")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm.errors
          ? _c("div", { staticClass: "alert alert-danger m-2" }, [
              _vm._v("\n            " + _vm._s(_vm.errors) + "\n        ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "table-responsive p-1" }, [
              _c("table", { staticClass: "table table-bordered" }, [
                _vm.action
                  ? _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.action.id))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Название")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.action.act_title))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Описание")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.action.act_desc))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Статус")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.getStatusName(_vm.action.status_id))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Родитель")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.getActionName(_vm.action.par_act_id))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Возвратное действие")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.getActionName(_vm.action.back_act_id))
                          )
                        ])
                      ])
                    ])
                  : _c("tfoot", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "3" } },
                        [_vm._v("Данные отсутствуют")]
                      )
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "button",
              {
                directives: [
                  {
                    name: "b-modal",
                    rawName: "v-b-modal.modal-create-activity",
                    modifiers: { "modal-create-activity": true }
                  }
                ],
                staticClass: "btn btn-sm btn-outline-info float-right m-2"
              },
              [_vm._v("Добавить активити\n                ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "b-modal",
                    rawName: "v-b-modal.modal-create-field_list",
                    modifiers: { "modal-create-field_list": true }
                  }
                ],
                staticClass: "btn btn-sm btn-outline-warning float-right m-2",
                on: { click: _vm.disableUpdateMode }
              },
              [_vm._v("Добавить филд лист\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card m-1 p-1" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [_vm._v("Activities")]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.filteredUserActivities(3)
                    ? _c(
                        "tbody",
                        _vm._l(_vm.filteredUserActivities(3), function(
                          item,
                          index
                        ) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.getUserGroupName(item.group_id))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.getUserCategoryName(item.cat_id))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.getInformBy(item.inform_by)))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item.is_user ? "да" : "нет"))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "p-1",
                                    attrs: {
                                      variant: "outline-secondary",
                                      size: "sm"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.confirmDeleteAction(item.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "trash",
                                        "aria-hidden": "true"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        0
                      )
                    : _c("tfoot", [
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            attrs: { colspan: "5" }
                          },
                          [_vm._v("Данные отсутствуют")]
                        )
                      ])
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm.filteredUserActivities(2)
                    ? _c(
                        "tbody",
                        _vm._l(_vm.filteredUserActivities(2), function(
                          item,
                          index
                        ) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.getUserGroupName(item.group_id))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.getUserCategoryName(item.cat_id))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.getInformBy(item.inform_by)))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item.is_user ? "да" : "нет"))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "p-1",
                                    attrs: {
                                      variant: "outline-secondary",
                                      size: "sm"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.confirmDeleteAction(item.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "trash",
                                        "aria-hidden": "true"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        0
                      )
                    : _c("tfoot", [
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            attrs: { colspan: "5" }
                          },
                          [_vm._v("Данные отсутствуют")]
                        )
                      ])
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm.filteredUserActivities(1)
                    ? _c(
                        "tbody",
                        _vm._l(_vm.filteredUserActivities(1), function(
                          item,
                          index
                        ) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.getUserGroupName(item.group_id))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.getUserCategoryName(item.cat_id))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.getInformBy(item.inform_by)))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item.is_user ? "да" : "нет"))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "p-1",
                                    attrs: {
                                      variant: "outline-secondary",
                                      size: "sm"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.confirmDeleteAction(item.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "trash",
                                        "aria-hidden": "true"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        0
                      )
                    : _c("tfoot", [
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            attrs: { colspan: "5" }
                          },
                          [_vm._v("Данные отсутствуют")]
                        )
                      ])
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _vm.emailActivities
                    ? _c(
                        "tbody",
                        _vm._l(_vm.emailActivities, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(item.email))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "p-1",
                                    attrs: {
                                      variant: "outline-secondary",
                                      size: "sm"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.confirmDeleteAction(
                                          item.id,
                                          1
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "trash",
                                        "aria-hidden": "true"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        0
                      )
                    : _c("tfoot", [
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            attrs: { colspan: "2" }
                          },
                          [_vm._v("Данные отсутствуют")]
                        )
                      ])
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "card-title" }, [_vm._v("Fields")]),
                _vm._v(" "),
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _vm.fieldLists
                      ? _c(
                          "tbody",
                          _vm._l(_vm.fieldLists, function(item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", [_vm._v(_vm._s(item.id))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm.getFieldName(item.field_id)))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.is_basic))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.getUserCategoryName(item.user_cat_id)
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.getUserFieldName(item.user_field_id)
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "p-1",
                                      attrs: {
                                        variant: "outline-secondary",
                                        size: "sm"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.showUpdateFieldListModal(
                                            item
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("b-icon", {
                                        attrs: {
                                          icon: "pencil",
                                          "aria-hidden": "true"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "p-1",
                                      attrs: {
                                        variant: "outline-secondary",
                                        size: "sm"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.confirmDeleteFieldList(
                                            item.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("b-icon", {
                                        attrs: {
                                          icon: "trash",
                                          "aria-hidden": "true"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      : _c("tfoot", [
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              attrs: { colspan: "2" }
                            },
                            [_vm._v("Данные отсутствуют")]
                          )
                        ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-update-action",
            title: "Изменить действие",
            "cancel-title": "Отмена",
            "ok-title": "Изменить"
          },
          on: { ok: _vm.updateAction }
        },
        [
          _c(
            "form",
            {
              ref: "form",
              on: {
                submit: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.updateAction($event)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.comp_id,
                    expression: "form.comp_id"
                  }
                ],
                attrs: { type: "hidden" },
                domProps: { value: _vm.form.comp_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "comp_id", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.name,
                      expression: "form.name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.$v.form.name.$error },
                  attrs: { type: "text", id: "name" },
                  domProps: { value: _vm.form.name },
                  on: {
                    blur: function($event) {
                      return _vm.$v.form.name.$touch()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                !_vm.$v.form.name.required
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v("Name field is required")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.form.name.minLength
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n                    Min length of name is " +
                          _vm._s(_vm.$v.form.name.$params.minLength.min) +
                          ". Now it is " +
                          _vm._s(_vm.form.name.length) +
                          ".\n                "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("Описание")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.description,
                      expression: "form.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "description" },
                  domProps: { value: _vm.form.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "description", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("Статус")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.status_id,
                        expression: "form.status_id"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.status_id.$error },
                    on: {
                      blur: function($event) {
                        return _vm.$v.form.status_id.$touch()
                      },
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "status_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Выберите")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.statuses, function(option) {
                      return _c("option", { domProps: { value: option.id } }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(option.name) +
                            "\n                    "
                        )
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("Родительское дейсивие")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.par_act_id,
                        expression: "form.par_act_id"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "par_act_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Выберите")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Новый / Нет родителя")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.actions, function(option) {
                      return _c("option", { domProps: { value: option.id } }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(option.act_title) +
                            "\n                    "
                        )
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("Обратное действие")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.back_act_id,
                        expression: "form.back_act_id"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "back_act_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Выберите")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Новый / Нет родителя")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.actions, function(option) {
                      return _c("option", { domProps: { value: option.id } }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(option.act_title) +
                            "\n                    "
                        )
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _vm.formErrors
                ? _c(
                    "div",
                    { staticClass: "alert alert-danger" },
                    _vm._l(_vm.formErrors, function(fieldsError, fieldName) {
                      return _c("div", { key: fieldName }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(fieldsError.join("\n")) +
                            "\n                "
                        )
                      ])
                    }),
                    0
                  )
                : _vm._e()
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-confirm-deletion",
            title: "",
            "ok-title": "Да",
            "cancel-title": "Нет"
          },
          on: { ok: function($event) {} }
        },
        [_c("h5", [_vm._v("Вы действительно хотите удалить Действие?")])]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-create-activity",
            title: "Добавить активити",
            "ok-title": "Добавить",
            "cancel-title": "Отмена"
          },
          on: { ok: _vm.createActivity }
        },
        [
          _c("form", { ref: "form" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "name" } }, [_vm._v("Тип")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formActivity.act_type,
                      expression: "formActivity.act_type"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.$v.formActivity.act_type.$error },
                  on: {
                    blur: function($event) {
                      return _vm.$v.formActivity.act_type.$touch()
                    },
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.formActivity,
                        "act_type",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.types, function(option) {
                    return _c("option", { domProps: { value: option.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(option.title) +
                          "\n                    "
                      )
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm.formActivity.act_type == 1
              ? _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formActivity.is_email,
                          expression: "formActivity.is_email"
                        }
                      ],
                      attrs: { type: "checkbox", id: "is_email" },
                      domProps: {
                        checked: Array.isArray(_vm.formActivity.is_email)
                          ? _vm._i(_vm.formActivity.is_email, null) > -1
                          : _vm.formActivity.is_email
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.formActivity.is_email,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.formActivity,
                                  "is_email",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.formActivity,
                                  "is_email",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.formActivity, "is_email", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Уведомление на определенную почту Почта")
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.formActivity.is_email
                    ? _c("div", [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Email")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formActivity.email,
                                expression: "formActivity.email"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.$v.formActivity.email.$error
                            },
                            attrs: { type: "text", id: "email" },
                            domProps: { value: _vm.formActivity.email },
                            on: {
                              blur: function($event) {
                                return _vm.$v.formActivity.email.$touch()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.formActivity,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          !_vm.$v.formActivity.email.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "Email field is\n                            required\n                        "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.$v.formActivity.email.minLength
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                            Min length of name is " +
                                    _vm._s(
                                      _vm.$v.formActivity.email.$params
                                        .minLength.min
                                    ) +
                                    ". Now it is " +
                                    _vm._s(_vm.formActivity.email.length) +
                                    ".\n                        "
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.formActivity.is_email
              ? _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Информирование")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formActivity.inform_by,
                            expression: "formActivity.inform_by"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.formActivity.inform_by.$error
                        },
                        on: {
                          blur: function($event) {
                            return _vm.$v.formActivity.inform_by.$touch()
                          },
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formActivity,
                              "inform_by",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { disabled: "", value: "" } }, [
                          _vm._v("Выберите")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.informs, function(option) {
                          return _c(
                            "option",
                            { domProps: { value: option.id } },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(option.title) +
                                  "\n                        "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "description" } }, [
                      _vm._v("Группы Пользователя")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formActivity.group_id,
                            expression: "formActivity.group_id"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.formActivity.group_id.$error
                        },
                        on: {
                          blur: function($event) {
                            return _vm.$v.formActivity.group_id.$touch()
                          },
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formActivity,
                              "group_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { disabled: "", value: "" } }, [
                          _vm._v("Выберите")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.userGroups, function(option) {
                          return _c(
                            "option",
                            { domProps: { value: option.id } },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(option.group_name) +
                                  "\n                        "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "description" } }, [
                      _vm._v("Категория Пользователя")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formActivity.cat_id,
                            expression: "formActivity.cat_id"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.formActivity.cat_id.$error
                        },
                        on: {
                          blur: function($event) {
                            return _vm.$v.formActivity.cat_id.$touch()
                          },
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formActivity,
                              "cat_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { disabled: "", value: "" } }, [
                          _vm._v("Выберите")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.userCategories, function(option) {
                          return _c(
                            "option",
                            { domProps: { value: option.id } },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(option.cat_name) +
                                  "\n                        "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Пользователь")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formActivity.is_user,
                          expression: "formActivity.is_user"
                        }
                      ],
                      attrs: { type: "checkbox", id: "is_user" },
                      domProps: {
                        checked: Array.isArray(_vm.formActivity.is_user)
                          ? _vm._i(_vm.formActivity.is_user, null) > -1
                          : _vm.formActivity.is_user
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.formActivity.is_user,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.formActivity,
                                  "is_user",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.formActivity,
                                  "is_user",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.formActivity, "is_user", $$c)
                          }
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.formErrors
              ? _c(
                  "div",
                  { staticClass: "alert alert-danger" },
                  _vm._l(_vm.formErrors, function(fieldsError, fieldName) {
                    return _c("div", { key: fieldName }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(fieldsError.join("\n")) +
                          "\n                "
                      )
                    ])
                  }),
                  0
                )
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-confirm-activity-deletion",
            title: "",
            "ok-title": "Да",
            "cancel-title": "Нет"
          },
          on: { ok: _vm.deleteActivity }
        },
        [_c("h5", [_vm._v("Вы действительно хотите удалить активити?")])]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-confirm-action-deletion",
            title: "",
            "ok-title": "Да",
            "cancel-title": "Нет"
          },
          on: { ok: _vm.deleteAction }
        },
        [_c("h5", [_vm._v("Вы действительно хотите удалить действие?")])]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-create-field_list",
            title: _vm.updateMode ? "Изменить филд лист" : "Создать филд лист",
            "ok-title": _vm.updateMode ? "Изменить" : "Сохранить",
            "cancel-title": "Отмена"
          },
          on: { ok: _vm.submitFieldListForm }
        },
        [
          _c("form", { ref: "form" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "field_id" } }, [_vm._v("Филд")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formFieldList.field_id,
                      expression: "formFieldList.field_id"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.$v.formFieldList.field_id.$error },
                  attrs: { id: "field_id" },
                  on: {
                    blur: function($event) {
                      return _vm.$v.formFieldList.field_id.$touch()
                    },
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.formFieldList,
                        "field_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.fields, function(option) {
                    return _c("option", { domProps: { value: option.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(option.field_name) +
                          "\n                    "
                      )
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "user_cat_id" } }, [
                _vm._v("Категория пользователя")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formFieldList.user_cat_id,
                      expression: "formFieldList.user_cat_id"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.$v.formFieldList.user_cat_id.$error
                  },
                  attrs: { id: "user_cat_id" },
                  on: {
                    blur: function($event) {
                      return _vm.$v.formFieldList.user_cat_id.$touch()
                    },
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.formFieldList,
                        "user_cat_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.userCategories, function(option) {
                    return _c("option", { domProps: { value: option.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(option.cat_name) +
                          "\n                    "
                      )
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "user_field_id" } }, [
                _vm._v("Поля пользователя")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formFieldList.user_field_id,
                      expression: "formFieldList.user_field_id"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.$v.formFieldList.user_field_id.$error
                  },
                  attrs: { id: "user_field_id" },
                  on: {
                    blur: function($event) {
                      return _vm.$v.formFieldList.user_field_id.$touch()
                    },
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.formFieldList,
                        "user_field_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.userFields, function(option) {
                    return _c("option", { domProps: { value: option.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(option.field_name) +
                          "\n                    "
                      )
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "is_basic" } }, [_vm._v("is_basic")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formFieldList.is_basic,
                    expression: "formFieldList.is_basic"
                  }
                ],
                attrs: { type: "checkbox", id: "is_basic" },
                domProps: {
                  checked: Array.isArray(_vm.formFieldList.is_basic)
                    ? _vm._i(_vm.formFieldList.is_basic, null) > -1
                    : _vm.formFieldList.is_basic
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.formFieldList.is_basic,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(
                            _vm.formFieldList,
                            "is_basic",
                            $$a.concat([$$v])
                          )
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.formFieldList,
                            "is_basic",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.formFieldList, "is_basic", $$c)
                    }
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "field_type" } }, [_vm._v("Тип")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formFieldList.field_type,
                      expression: "formFieldList.field_type"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.$v.formFieldList.field_type.$error
                  },
                  attrs: { id: "field_type" },
                  on: {
                    blur: function($event) {
                      return _vm.$v.formFieldList.field_type.$touch()
                    },
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.formFieldList,
                        "field_type",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.field_types, function(option) {
                    return _c("option", { domProps: { value: option.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(option.title) +
                          "\n                    "
                      )
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "field_ord" } }, [_vm._v("Порядок")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formFieldList.field_ord,
                    expression: "formFieldList.field_ord"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.$v.formFieldList.field_ord.$error },
                attrs: { type: "number", id: "field_ord" },
                domProps: { value: _vm.formFieldList.field_ord },
                on: {
                  blur: function($event) {
                    return _vm.$v.formFieldList.field_ord.$touch()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formFieldList,
                      "field_ord",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              !_vm.$v.formFieldList.field_ord.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "Поле обязательно для\n                    заполнения\n                "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "query_type" } }, [
                _vm._v("Тип запроса")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formFieldList.query_type,
                      expression: "formFieldList.query_type"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.$v.formFieldList.query_type.$error
                  },
                  attrs: { id: "query_type" },
                  on: {
                    blur: function($event) {
                      return _vm.$v.formFieldList.query_type.$touch()
                    },
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.formFieldList,
                        "query_type",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.query_types, function(option) {
                    return _c("option", { domProps: { value: option.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(option.title) +
                          "\n                    "
                      )
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm.formFieldList.query_type === 1
              ? _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "query_type" } }, [
                      _vm._v("Запрос БД")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formFieldList.query_db,
                            expression: "formFieldList.query_db"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "query_db" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.formFieldList,
                              "query_db",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.query_dbs, function(option) {
                        return _c(
                          "option",
                          { domProps: { value: option.id } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(option.title) +
                                "\n                        "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "query_select" } }, [
                      _vm._v("Sql запрос")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formFieldList.query_select,
                          expression: "formFieldList.query_select"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "query_select" },
                      domProps: { value: _vm.formFieldList.query_select },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formFieldList,
                            "query_select",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.formFieldList.query_type === 2
              ? _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "query_value" } }, [
                      _vm._v("Значение")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.formFieldList.query_value,
                          expression: "formFieldList.query_value"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "query_value" },
                      domProps: { value: _vm.formFieldList.query_value },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.formFieldList,
                            "query_value",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "cond_show" } }, [
                _vm._v("Условие для скрытия")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formFieldList.cond_show,
                    expression: "formFieldList.cond_show"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "cond_show" },
                domProps: { value: _vm.formFieldList.cond_show },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formFieldList,
                      "cond_show",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "cond_alert" } }, [
                _vm._v("Условие для алерта")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formFieldList.cond_alert,
                    expression: "formFieldList.cond_alert"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "cond_alert" },
                domProps: { value: _vm.formFieldList.cond_alert },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formFieldList,
                      "cond_alert",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "default_vals" } }, [
                _vm._v("Значение по умолчанию")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formFieldList.default_vals,
                    expression: "formFieldList.default_vals"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "default_vals" },
                domProps: { value: _vm.formFieldList.default_vals },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formFieldList,
                      "default_vals",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "is_req" } }, [
                _vm._v("Обязательное")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formFieldList.is_req,
                    expression: "formFieldList.is_req"
                  }
                ],
                attrs: { type: "checkbox", id: "is_req" },
                domProps: {
                  checked: Array.isArray(_vm.formFieldList.is_req)
                    ? _vm._i(_vm.formFieldList.is_req, null) > -1
                    : _vm.formFieldList.is_req
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.formFieldList.is_req,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(
                            _vm.formFieldList,
                            "is_req",
                            $$a.concat([$$v])
                          )
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.formFieldList,
                            "is_req",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.formFieldList, "is_req", $$c)
                    }
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm.formErrors
              ? _c(
                  "div",
                  { staticClass: "alert alert-danger" },
                  _vm._l(_vm.formErrors, function(fieldsError, fieldName) {
                    return _c("div", { key: fieldName }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(fieldsError.join("\n")) +
                          "\n                "
                      )
                    ])
                  }),
                  0
                )
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-confirm-field_list-deletion",
            title: "",
            "ok-title": "Да",
            "cancel-title": "Нет"
          },
          on: { ok: _vm.deleteFieldList }
        },
        [_c("h5", [_vm._v("Вы действительно хотите удалить филд лист?")])]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Responsible Group")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Field Cat")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Inform by")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Is user")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Can view Group")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Field Cat")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Inform by")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Is user")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Need Inform Group")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Field Cat")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Inform by")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Is user")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "90%" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "5%" } }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "25%" } }, [_vm._v("Field name")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Is Basic?")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "25%" } }, [_vm._v("User Category")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "25%" } }, [_vm._v("User Field")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=template&id=7418fad0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=template&id=7418fad0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loading", {
        attrs: { active: _vm.isLoading, "can-cancel": false },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { class: { invisible: !_vm.selectedAction } },
        [
          _c("ComponentActionView", {
            attrs: {
              actions: _vm.actions,
              statuses: _vm.statuses,
              userGroups: _vm.userGroups,
              userCategories: _vm.userCategories,
              userFields: _vm.userFields,
              fields: _vm.fields,
              selectedAction: _vm.selectedAction,
              selectedUserActivities: _vm.selectedUserActivities,
              selectedEmailActivities: _vm.selectedEmailActivities,
              selectedFieldList: _vm.selectedFieldList,
              methodRenderActions: _vm.renderActions
            },
            on: {
              selectActionChanged: function($event) {
                _vm.selectedAction = $event
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm._v("Действия:\n            "),
          _c(
            "button",
            {
              directives: [
                {
                  name: "b-modal",
                  rawName: "v-b-modal.modal-create-action",
                  modifiers: { "modal-create-action": true }
                }
              ],
              staticClass: "btn btn-sm btn-outline-primary float-right"
            },
            [_vm._v("Добавить\n            ")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "panZoom",
              {
                attrs: {
                  options: { minZoom: 0.1, maxZoom: 5 },
                  selector: "#tree-block"
                }
              },
              [
                _c("div", { staticClass: "tree-body" }, [
                  _c("div", { attrs: { id: "tree-block" } })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-create-action",
            title: "Добавить действие",
            "cancel-title": "Отмена",
            "ok-title": "Сохранить"
          },
          on: { ok: _vm.createActionSubmit }
        },
        [
          _c("form", { ref: "form" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.comp_id,
                  expression: "form.comp_id"
                }
              ],
              attrs: { type: "hidden" },
              domProps: { value: _vm.form.comp_id },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "comp_id", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.name,
                    expression: "form.name"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.$v.form.name.$error },
                attrs: { type: "text", id: "name" },
                domProps: { value: _vm.form.name },
                on: {
                  blur: function($event) {
                    return _vm.$v.form.name.$touch()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !_vm.$v.form.name.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v("Обязательно для заполнения.")
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.$v.form.name.minLength
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                    Минимальная длина " +
                        _vm._s(_vm.$v.form.name.$params.minLength.min) +
                        " символов. Сейчас " +
                        _vm._s(_vm.form.name.length) +
                        ".\n                "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "description" } }, [
                _vm._v("Описание")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.description,
                    expression: "form.description"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "description" },
                domProps: { value: _vm.form.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "description", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "description" } }, [
                _vm._v("Статус")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.status_id,
                      expression: "form.status_id"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.$v.form.status_id.$error },
                  on: {
                    blur: function($event) {
                      return _vm.$v.form.status_id.$touch()
                    },
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "status_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.statuses, function(option) {
                    return _c(
                      "option",
                      { key: option.id, domProps: { value: option.id } },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(option.name) +
                            "\n                    "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "description" } }, [
                _vm._v("Родительское дейсивие")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.par_act_id,
                      expression: "form.par_act_id"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "par_act_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Новый / Нет родителя")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.actions, function(option) {
                    return _c(
                      "option",
                      { key: option.id, domProps: { value: option.id } },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(option.act_title) +
                            "  (" +
                            _vm._s(option.id) +
                            ")\n                    "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "description" } }, [
                _vm._v("Обратное действие")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.back_act_id,
                      expression: "form.back_act_id"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "back_act_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Новый / Нет родителя")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.actions, function(option) {
                    return _c(
                      "option",
                      { key: option.id, domProps: { value: option.id } },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(option.act_title) +
                            " (" +
                            _vm._s(option.id) +
                            ")\n                    "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentFields.vue?vue&type=template&id=c0337894&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentFields.vue?vue&type=template&id=c0337894&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loading", {
        attrs: { active: _vm.isLoading, "can-cancel": false },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Поля Пользователя:\n            "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "b-modal",
                    rawName: "v-b-modal.modal-create-field",
                    modifiers: { "modal-create-field": true }
                  }
                ],
                staticClass: "btn btn-sm btn-outline-primary float-right",
                on: { click: _vm.disableUpdateMode }
              },
              [_vm._v("Добавить\n            ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm.fields
                  ? _c(
                      "tbody",
                      _vm._l(_vm.fields, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "table__id" }, [
                            _vm._v(_vm._s(item.id))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.field_name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.field_label))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "p-1",
                                  attrs: {
                                    variant: "outline-secondary",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.showUpdateFieldModal(item)
                                    }
                                  }
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "pencil",
                                      "aria-hidden": "true"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "p-1",
                                  attrs: {
                                    variant: "outline-secondary",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.confirmDelete(item.id)
                                    }
                                  }
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "trash",
                                      "aria-hidden": "true"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  : _c("tfoot", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "3" } },
                        [_vm._v("Данные отсутствуют")]
                      )
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modal",
              attrs: {
                id: "modal-create-field",
                title: _vm.updateMode ? "Изменить филд" : "Создать филд",
                "ok-title": _vm.updateMode ? "Изменить" : "Сохранить",
                "cancel-title": "Отмена"
              },
              on: { ok: _vm.submitFieldForm }
            },
            [
              _c("form", { ref: "form" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "field_label" } }, [
                    _vm._v("Метка")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.field_label,
                        expression: "form.field_label"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.field_label.$error },
                    attrs: { type: "text", id: "field_label" },
                    domProps: { value: _vm.form.field_label },
                    on: {
                      blur: function($event) {
                        return _vm.$v.form.field_label.$touch()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "field_label", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.field_label.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "Поле обязательно для\n                        заполнения\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.form.field_label.minLength
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        Минимальная длина " +
                            _vm._s(
                              _vm.$v.form.field_label.$params.minLength.min
                            ) +
                            " символов. Сейчас " +
                            _vm._s(_vm.form.field_label.length) +
                            ".\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "field_name" } }, [
                    _vm._v("Название")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.field_name,
                        expression: "form.field_name"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.field_name.$error },
                    attrs: { type: "text", id: "field_name" },
                    domProps: { value: _vm.form.field_name },
                    on: {
                      blur: function($event) {
                        return _vm.$v.form.field_name.$touch()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "field_name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.field_name.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "Поле обязательно для\n                        заполнения\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.form.field_name.minLength
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        Минимальная длина " +
                            _vm._s(
                              _vm.$v.form.field_name.$params.minLength.min
                            ) +
                            " символов. Сейчас " +
                            _vm._s(_vm.form.field_name.length) +
                            ".\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "field_type" } }, [
                    _vm._v("Тип")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.field_type,
                          expression: "form.field_type"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.field_type.$error },
                      attrs: { id: "field_type" },
                      on: {
                        blur: function($event) {
                          return _vm.$v.form.field_type.$touch()
                        },
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "field_type",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { disabled: "", value: "" } }, [
                        _vm._v("Выберите")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.field_types, function(option) {
                        return _c(
                          "option",
                          { domProps: { value: option.id } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(option.title) +
                                "\n                        "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "field_ord" } }, [
                    _vm._v("Порядок")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.field_ord,
                        expression: "form.field_ord"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.field_ord.$error },
                    attrs: { type: "number", id: "field_ord" },
                    domProps: { value: _vm.form.field_ord },
                    on: {
                      blur: function($event) {
                        return _vm.$v.form.field_ord.$touch()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "field_ord", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.field_ord.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "Поле обязательно для\n                        заполнения\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "field_col" } }, [
                    _vm._v("Позиция в колонке")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.field_col,
                        expression: "form.field_col"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.field_col.$error },
                    attrs: { type: "number", id: "field_col" },
                    domProps: { value: _vm.form.field_col },
                    on: {
                      blur: function($event) {
                        return _vm.$v.form.field_col.$touch()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "field_col", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.field_col.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "Поле обязательно для\n                        заполнения\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "query_type" } }, [
                    _vm._v("Тип запроса")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.query_type,
                          expression: "form.query_type"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.query_type.$error },
                      attrs: { id: "query_type" },
                      on: {
                        blur: function($event) {
                          return _vm.$v.form.query_type.$touch()
                        },
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "query_type",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { disabled: "", value: "" } }, [
                        _vm._v("Выберите")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.query_types, function(option) {
                        return _c(
                          "option",
                          { domProps: { value: option.id } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(option.title) +
                                "\n                        "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _vm.form.query_type === 1
                  ? _c("div", [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "query_type" } }, [
                          _vm._v("Запрос БД")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.query_db,
                                expression: "form.query_db"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "query_db" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "query_db",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.query_dbs, function(option) {
                            return _c(
                              "option",
                              { domProps: { value: option.id } },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(option.title) +
                                    "\n                            "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "query_select" } }, [
                          _vm._v("Sql запрос")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.query_select,
                              expression: "form.query_select"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "query_select" },
                          domProps: { value: _vm.form.query_select },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "query_select",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("hr")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.query_type === 2
                  ? _c("div", [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "query_value" } }, [
                          _vm._v("Значение")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.query_value,
                              expression: "form.query_value"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "query_value" },
                          domProps: { value: _vm.form.query_value },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "query_value",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("hr")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "cond_show" } }, [
                    _vm._v("Условие для скрытия")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.cond_show,
                        expression: "form.cond_show"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "cond_show" },
                    domProps: { value: _vm.form.cond_show },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "cond_show", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "cond_alert" } }, [
                    _vm._v("Условие для алерта")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.cond_alert,
                        expression: "form.cond_alert"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "cond_alert" },
                    domProps: { value: _vm.form.cond_alert },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "cond_alert", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "default_vals" } }, [
                    _vm._v("Значение по умолчанию")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.default_vals,
                        expression: "form.default_vals"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "default_vals" },
                    domProps: { value: _vm.form.default_vals },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "default_vals", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "is_req" } }, [
                    _vm._v("Обязательное")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.is_req,
                        expression: "form.is_req"
                      }
                    ],
                    attrs: { type: "checkbox", id: "is_req" },
                    domProps: {
                      checked: Array.isArray(_vm.form.is_req)
                        ? _vm._i(_vm.form.is_req, null) > -1
                        : _vm.form.is_req
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.form.is_req,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(_vm.form, "is_req", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.form,
                                "is_req",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.form, "is_req", $$c)
                        }
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "is_readonly" } }, [
                    _vm._v("Только для чтения")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.is_readonly,
                        expression: "form.is_readonly"
                      }
                    ],
                    attrs: { type: "checkbox", id: "is_readonly" },
                    domProps: {
                      checked: Array.isArray(_vm.form.is_readonly)
                        ? _vm._i(_vm.form.is_readonly, null) > -1
                        : _vm.form.is_readonly
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.form.is_readonly,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.form,
                                "is_readonly",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.form,
                                "is_readonly",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.form, "is_readonly", $$c)
                        }
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.formErrors
                  ? _c(
                      "div",
                      { staticClass: "alert alert-danger" },
                      _vm._l(_vm.formErrors, function(fieldsError, fieldName) {
                        return _c("div", { key: fieldName }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(fieldsError.join("\n")) +
                              "\n                    "
                          )
                        ])
                      }),
                      0
                    )
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modal",
              attrs: {
                id: "modal-confirm-field-deletion",
                title: "",
                "ok-title": "Да",
                "cancel-title": "Нет"
              },
              on: { ok: _vm.deleteField }
            },
            [_c("h5", [_vm._v("Вы действительно хотите удалить филд?")])]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "table__id" }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Наименование")]),
        _vm._v(" "),
        _c("th", [_vm._v("Тип")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=template&id=1dbf3c5d&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=template&id=1dbf3c5d&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loading", {
        attrs: { active: _vm.isLoading, "can-cancel": false },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Статусы:\n            "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "b-modal",
                    rawName: "v-b-modal.modal-create-status",
                    modifiers: { "modal-create-status": true }
                  }
                ],
                staticClass: "btn btn-sm btn-outline-primary float-right",
                on: {
                  click: function($event) {
                    return _vm.disableUpdateMode()
                  }
                }
              },
              [_vm._v("Добавить\n            ")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("TheAlert", {
                attrs: { alerts: _vm.alerts },
                on: {
                  alertsChanged: function($event) {
                    _vm.alerts = $event
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.statuses
                    ? _c(
                        "tbody",
                        _vm._l(_vm.statuses, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", { staticClass: "table__id" }, [
                              _vm._v(_vm._s(item.id))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.comp_id))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "p-1",
                                    attrs: {
                                      variant: "outline-secondary",
                                      size: "sm"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.showUpdateStatusModal(item)
                                      }
                                    }
                                  },
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "pencil",
                                        "aria-hidden": "true"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "p-1",
                                    attrs: {
                                      variant: "outline-secondary",
                                      size: "sm"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.confirmDelete(item.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "trash",
                                        "aria-hidden": "true"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        0
                      )
                    : _c("tfoot", [
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            attrs: { colspan: "3" }
                          },
                          [_vm._v("Данные отсутствуют")]
                        )
                      ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modal",
              attrs: {
                id: "modal-create-status",
                title: _vm.updateMode ? "Изменить статус" : "Создать статус",
                "ok-title": _vm.updateMode ? "Изменить" : "Сохранить",
                "cancel-title": "Отмена"
              },
              on: { ok: _vm.submitStatusForm }
            },
            [
              _c("form", { ref: "form" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.name.$error },
                    attrs: { type: "text", id: "name" },
                    domProps: { value: _vm.form.name },
                    on: {
                      blur: function($event) {
                        return _vm.$v.form.name.$touch()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.name.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "Поле Название обязательно для\n                        заполнения\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.form.name.minLength
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        Минимальная длина " +
                            _vm._s(_vm.$v.form.name.$params.minLength.min) +
                            " символов. Сейчас " +
                            _vm._s(_vm.form.name.length) +
                            ".\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                !_vm.updateMode
                  ? _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.to_assign,
                            expression: "form.to_assign"
                          }
                        ],
                        attrs: { type: "checkbox", id: "to_assign" },
                        domProps: {
                          checked: Array.isArray(_vm.form.to_assign)
                            ? _vm._i(_vm.form.to_assign, null) > -1
                            : _vm.form.to_assign
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.to_assign,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "to_assign",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "to_assign",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "to_assign", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "to_assign" } }, [
                        _vm._v("Присвоить к текущему компоненту")
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.formErrors
                  ? _c(
                      "div",
                      { staticClass: "alert alert-danger" },
                      _vm._l(_vm.formErrors, function(fieldsError, fieldName) {
                        return _c("div", { key: fieldName }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(fieldsError.join("\n")) +
                              "\n                    "
                          )
                        ])
                      }),
                      0
                    )
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modal",
              attrs: {
                id: "modal-confirm-status-deletion",
                title: "",
                "ok-title": "Да",
                "cancel-title": "Нет"
              },
              on: { ok: _vm.deleteStatus }
            },
            [_c("h5", [_vm._v("Вы действительно хотите удалить Статус?")])]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "table__id" }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Наименование")]),
        _vm._v(" "),
        _c("th", [_vm._v("Компонент")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=template&id=46b6b578&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=template&id=46b6b578&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loading", {
        attrs: { active: _vm.isLoading, "can-cancel": false },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Категории Пользователя:\n            "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "b-modal",
                    rawName: "v-b-modal.modal-create-user-category",
                    modifiers: { "modal-create-user-category": true }
                  }
                ],
                staticClass: "btn btn-sm btn-outline-primary float-right"
              },
              [_vm._v("Добавить\n            ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm.userCategories
                  ? _c(
                      "tbody",
                      _vm._l(_vm.userCategories, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "table__id" }, [
                            _vm._v(_vm._s(item.id))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.cat_name))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "p-1",
                                  attrs: {
                                    variant: "outline-secondary",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.showUpdateUserCategoryModal(
                                        item
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "pencil",
                                      "aria-hidden": "true"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "p-1",
                                  attrs: {
                                    variant: "outline-secondary",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.confirmDelete(item.id)
                                    }
                                  }
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "trash",
                                      "aria-hidden": "true"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  : _c("tfoot", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "3" } },
                        [_vm._v("Данные отсутствуют")]
                      )
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modal",
              attrs: {
                id: "modal-create-user-category",
                title: _vm.updateMode
                  ? "Изменить категорию"
                  : "Создать категорию",
                "ok-title": _vm.updateMode ? "Изменить" : "Сохранить",
                "cancel-title": "Отмена"
              },
              on: { ok: _vm.submitUserCategoryForm }
            },
            [
              _c("form", { ref: "form" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.name.$error },
                    attrs: { type: "text", id: "name" },
                    domProps: { value: _vm.form.name },
                    on: {
                      blur: function($event) {
                        return _vm.$v.form.name.$touch()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.name.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "Поле Название обязательно для\n                        заполнения\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.form.name.minLength
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        Минимальная длина " +
                            _vm._s(_vm.$v.form.name.$params.minLength.min) +
                            " символов. Сейчас " +
                            _vm._s(_vm.form.name.length) +
                            ".\n                    "
                        )
                      ])
                    : _vm._e()
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modal",
              attrs: {
                id: "modal-confirm-user-category-deletion",
                title: "",
                "ok-title": "Да",
                "cancel-title": "Нет"
              },
              on: { ok: _vm.deleteUserCategory }
            },
            [_c("h5", [_vm._v("Вы действительно хотите удалить категорию?")])]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "table__id" }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Наименование")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=template&id=8b01e13e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=template&id=8b01e13e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loading", {
        attrs: { active: _vm.isLoading, "can-cancel": false },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Поля Пользователя:\n            "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "b-modal",
                    rawName: "v-b-modal.modal-create-user-field",
                    modifiers: { "modal-create-user-field": true }
                  }
                ],
                staticClass: "btn btn-sm btn-outline-primary float-right"
              },
              [_vm._v("Добавить\n            ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm.userFields
                  ? _c(
                      "tbody",
                      _vm._l(_vm.userFields, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "table__id" }, [
                            _vm._v(_vm._s(item.id))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.field_name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.getUserCategoryName(item.cat_id)))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "p-1",
                                  attrs: {
                                    variant: "outline-secondary",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.showUpdateUserFieldModal(item)
                                    }
                                  }
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "pencil",
                                      "aria-hidden": "true"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "p-1",
                                  attrs: {
                                    variant: "outline-secondary",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.confirmDelete(item.id)
                                    }
                                  }
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "trash",
                                      "aria-hidden": "true"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  : _c("tfoot", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "3" } },
                        [_vm._v("Данные отсутствуют")]
                      )
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modal",
              attrs: {
                id: "modal-create-user-field",
                title: _vm.updateMode ? "Изменить поле" : "Создать поле",
                "ok-title": _vm.updateMode ? "Изменить" : "Сохранить",
                "cancel-title": "Отмена"
              },
              on: { ok: _vm.submitUserFieldForm }
            },
            [
              _c("form", { ref: "form" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.name.$error },
                    attrs: { type: "text", id: "name" },
                    domProps: { value: _vm.form.name },
                    on: {
                      blur: function($event) {
                        return _vm.$v.form.name.$touch()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.name.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "Поле Название обязательно для\n                        заполнения\n                    "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.form.name.minLength
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        Минимальная длина " +
                            _vm._s(_vm.$v.form.name.$params.minLength.min) +
                            " символов. Сейчас " +
                            _vm._s(_vm.form.name.length) +
                            ".\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "description" } }, [
                    _vm._v("Категория Пользователя")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.cat_id,
                          expression: "form.cat_id"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.cat_id.$error },
                      on: {
                        blur: function($event) {
                          return _vm.$v.form.cat_id.$touch()
                        },
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "cat_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { disabled: "", value: "" } }, [
                        _vm._v("Выберите")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.userCategories, function(option) {
                        return _c(
                          "option",
                          { domProps: { value: option.id } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(option.cat_name) +
                                "\n                        "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _vm.formErrors
                  ? _c(
                      "div",
                      { staticClass: "alert alert-danger" },
                      _vm._l(_vm.formErrors, function(fieldsError, fieldName) {
                        return _c("div", { key: fieldName }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(fieldsError.join("\n")) +
                              "\n                    "
                          )
                        ])
                      }),
                      0
                    )
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modal",
              attrs: {
                id: "modal-confirm-user-field-deletion",
                title: "",
                "ok-title": "Да",
                "cancel-title": "Нет"
              },
              on: { ok: _vm.deleteUserField }
            },
            [_c("h5", [_vm._v("Вы действительно хотите удалить поле?")])]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "table__id" }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Наименование")]),
        _vm._v(" "),
        _c("th", [_vm._v("Категория Пользователя")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=template&id=36e33608&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=template&id=36e33608&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card" },
    [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("Группы Пользователя:\n        "),
        _c(
          "button",
          {
            directives: [
              {
                name: "b-modal",
                rawName: "v-b-modal.modal-create-group",
                modifiers: { "modal-create-group": true }
              }
            ],
            staticClass: "btn btn-sm btn-outline-primary float-right"
          },
          [_vm._v("Добавить\n        ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "table-responsive m-1 " }, [
              _vm.userGroups
                ? _c(
                    "table",
                    {
                      staticClass:
                        "table table-bordered table-hover table-condensed"
                    },
                    _vm._l(_vm.userGroups, function(group, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "ml-1",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.showFieldList(group["id"])
                                }
                              }
                            },
                            [_c("b", [_vm._v(_vm._s(group.group_name))])]
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _vm.selectedGroupID == group.id &&
                          _vm.groupFieldsUsers
                            ? _c(
                                "table",
                                {
                                  staticClass:
                                    "table table-bordered table-rendered"
                                },
                                _vm._l(
                                  _vm.groupFieldsUsers[_vm.selectedGroupID],
                                  function(field, index2) {
                                    return _vm.selectedGroupID &&
                                      _vm.groupFieldsUsers
                                      ? _c("div", { key: index2 }, [
                                          _c(
                                            "div",
                                            { staticClass: "container" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "row border-bottom"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-8" },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: { href: "#" },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.showUserList(
                                                                group.id,
                                                                field.id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(field.name)
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-2" },
                                                    [
                                                      _c("b-icon", {
                                                        attrs: {
                                                          icon: "people-fill",
                                                          "aria-hidden": "true"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      !field["user_list"][0]
                                                        ? _c(
                                                            "span",
                                                            [
                                                              _c("b-badge", [
                                                                _vm._v("0")
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      field["user_list"][0]
                                                        ? _c(
                                                            "span",
                                                            [
                                                              _c("b-badge", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    Object.keys(
                                                                      field[
                                                                        "user_list"
                                                                      ][0]
                                                                    ).length
                                                                  )
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-2" },
                                                    [
                                                      _c("b-icon", {
                                                        attrs: {
                                                          icon: "envelope",
                                                          "aria-hidden": "true"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      !field["user_list"][1]
                                                        ? _c(
                                                            "span",
                                                            [
                                                              _c("b-badge", [
                                                                _vm._v("0")
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      field["user_list"][1]
                                                        ? _c(
                                                            "span",
                                                            [
                                                              _c("b-badge", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    Object.keys(
                                                                      field[
                                                                        "user_list"
                                                                      ][1]
                                                                    ).length
                                                                  )
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.selectedFieldID ==
                                                group["id"] + "_" + field.id &&
                                              _vm.groupFieldsUsers
                                                ? _c(
                                                    "div",
                                                    { staticClass: "m-1" },
                                                    [
                                                      _c(
                                                        "table",
                                                        {
                                                          staticClass:
                                                            "table table-bordered table-hover table-rendered"
                                                        },
                                                        [
                                                          _vm._l(
                                                            field[
                                                              "user_list"
                                                            ][0],
                                                            function(user) {
                                                              return _c("tr", [
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      user.email
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      user.mobile
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      user.is_email
                                                                        ? "Email"
                                                                        : "-"
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      user.is_admin
                                                                        ? "Admin"
                                                                        : "-"
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    attrs: {
                                                                      width:
                                                                        "50px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        attrs: {
                                                                          href:
                                                                            "#"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.deleteUser(
                                                                              group.id,
                                                                              field.id,
                                                                              user.id,
                                                                              user.is_email
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "b-badge",
                                                                          [
                                                                            _vm._v(
                                                                              "Удалить"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _vm._l(
                                                            field[
                                                              "user_list"
                                                            ][1],
                                                            function(user) {
                                                              return _c("tr", [
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      user.email
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      user.mobile
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      user.is_email
                                                                        ? "Email"
                                                                        : "-"
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      user.is_admin
                                                                        ? "Admin"
                                                                        : "-"
                                                                    )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    attrs: {
                                                                      width:
                                                                        "50px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        attrs: {
                                                                          href:
                                                                            "#"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.deleteUser(
                                                                              group.id,
                                                                              field.id,
                                                                              user.id,
                                                                              user.is_email
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "b-badge",
                                                                          [
                                                                            _vm._v(
                                                                              "Удалить"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            }
                                                          )
                                                        ],
                                                        2
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ])
                                      : _vm._e()
                                  }
                                ),
                                0
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticStyle: { width: "110px" } },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "p-1",
                                attrs: {
                                  variant: "outline-secondary",
                                  size: "sm"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.showUpdateGroupModal(group)
                                  }
                                }
                              },
                              [
                                _c("b-icon", {
                                  attrs: {
                                    icon: "pencil",
                                    "aria-hidden": "true"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "p-1",
                                attrs: {
                                  variant: "outline-secondary",
                                  size: "sm"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.confirmDelete(group.id)
                                  }
                                }
                              },
                              [
                                _c("b-icon", {
                                  attrs: {
                                    icon: "trash",
                                    "aria-hidden": "true"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "card m-1 p-2" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h6", { staticClass: "card-title text-center" }, [
                  _vm._v("Добавить пользователя")
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    ref: "form",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.addUser()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formGroup.group_id,
                              expression: "formGroup.group_id"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.formGroup.group_id.$error
                          },
                          on: {
                            blur: function($event) {
                              return _vm.$v.formGroup.group_id.$touch()
                            },
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.formGroup,
                                "group_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Выберите группу")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.userGroups, function(option) {
                            return _c(
                              "option",
                              { domProps: { value: option.id } },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(option.group_name) +
                                    "\n                                    "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formGroup.field_id,
                              expression: "formGroup.field_id"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.formGroup,
                                "field_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Basic")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.userFields, function(option) {
                            return _c(
                              "option",
                              { domProps: { value: option.id } },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(option.field_name) +
                                    "\n                                    "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formGroup.is_email,
                            expression: "formGroup.is_email"
                          }
                        ],
                        attrs: { type: "checkbox", id: "is_email" },
                        domProps: {
                          checked: Array.isArray(_vm.formGroup.is_email)
                            ? _vm._i(_vm.formGroup.is_email, null) > -1
                            : _vm.formGroup.is_email
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.formGroup.is_email,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.formGroup,
                                    "is_email",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.formGroup,
                                    "is_email",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.formGroup, "is_email", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "name" } }, [_vm._v("Почта")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formGroup.is_admin,
                            expression: "formGroup.is_admin"
                          }
                        ],
                        attrs: { type: "checkbox", id: "is_admin" },
                        domProps: {
                          checked: Array.isArray(_vm.formGroup.is_admin)
                            ? _vm._i(_vm.formGroup.is_admin, null) > -1
                            : _vm.formGroup.is_admin
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.formGroup.is_admin,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.formGroup,
                                    "is_admin",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.formGroup,
                                    "is_admin",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.formGroup, "is_admin", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "name" } }, [_vm._v("Админ")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("vue-bootstrap-typeahead", {
                          attrs: {
                            data: _vm.users,
                            size: "sm",
                            serializer: function(s) {
                              return s.email
                            },
                            placeholder: "введите email..."
                          },
                          on: {
                            hit: function($event) {
                              _vm.selectedUser = $event
                            }
                          },
                          model: {
                            value: _vm.userSearch,
                            callback: function($$v) {
                              _vm.userSearch = $$v
                            },
                            expression: "userSearch"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.formErrors
                      ? _c(
                          "div",
                          { staticClass: "alert alert-danger" },
                          _vm._l(_vm.formErrors, function(
                            fieldsError,
                            fieldName
                          ) {
                            return _c("div", { key: fieldName }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(fieldsError.join("\n")) +
                                  "\n                                "
                              )
                            ])
                          }),
                          0
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn btn-sm btn-primary float-right" },
                      [_vm._v("Добавить")]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-create-group",
            title: _vm.updateMode ? "Изменить группу" : "Создать группу",
            "ok-title": _vm.updateMode ? "Изменить" : "Сохранить",
            "cancel-title": "Отмена"
          },
          on: { ok: _vm.submitGroupForm }
        },
        [
          _c("form", { ref: "form" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.comp_id,
                    expression: "form.comp_id"
                  }
                ],
                attrs: { type: "hidden" },
                domProps: { value: _vm.form.comp_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "comp_id", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.name,
                    expression: "form.name"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.$v.form.name.$error },
                attrs: { type: "text", id: "name" },
                domProps: { value: _vm.form.name },
                on: {
                  blur: function($event) {
                    return _vm.$v.form.name.$touch()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              !_vm.$v.form.name.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "Поле Название обязательно для\n                    заполнения\n                "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.$v.form.name.minLength
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                    Минимальная длина " +
                        _vm._s(_vm.$v.form.name.$params.minLength.min) +
                        " символов. Сейчас " +
                        _vm._s(_vm.form.name.length) +
                        ".\n                "
                    )
                  ])
                : _vm._e()
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-confirm-group-deletion",
            title: "",
            "ok-title": "Да",
            "cancel-title": "Нет"
          },
          on: { ok: _vm.deleteGroup }
        },
        [_c("h5", [_vm._v("Вы действительно хотите удалить Группу?")])]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layout/TheAlert.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layout/TheAlert.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheAlert_vue_vue_type_template_id_4aba8d55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheAlert.vue?vue&type=template&id=4aba8d55& */ "./resources/js/components/layout/TheAlert.vue?vue&type=template&id=4aba8d55&");
/* harmony import */ var _TheAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheAlert.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/TheAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheAlert_vue_vue_type_template_id_4aba8d55___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheAlert_vue_vue_type_template_id_4aba8d55___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/TheAlert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/TheAlert.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layout/TheAlert.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./TheAlert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/layout/TheAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/TheAlert.vue?vue&type=template&id=4aba8d55&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layout/TheAlert.vue?vue&type=template&id=4aba8d55& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheAlert_vue_vue_type_template_id_4aba8d55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./TheAlert.vue?vue&type=template&id=4aba8d55& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/layout/TheAlert.vue?vue&type=template&id=4aba8d55&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheAlert_vue_vue_type_template_id_4aba8d55___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheAlert_vue_vue_type_template_id_4aba8d55___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/scheme/TheComponentMixin.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/scheme/TheComponentMixin.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheComponentMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheComponentMixin.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/TheComponentMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _TheComponentMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/TheComponentMixin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/TheComponentMixin.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/scheme/TheComponentMixin.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheComponentMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./TheComponentMixin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheComponentMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/TheComponentView.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/scheme/TheComponentView.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheComponentView_vue_vue_type_template_id_c48534c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheComponentView.vue?vue&type=template&id=c48534c0& */ "./resources/js/components/scheme/TheComponentView.vue?vue&type=template&id=c48534c0&");
/* harmony import */ var _TheComponentView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheComponentView.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/TheComponentView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheComponentView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheComponentView_vue_vue_type_template_id_c48534c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheComponentView_vue_vue_type_template_id_c48534c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/TheComponentView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/TheComponentView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/scheme/TheComponentView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheComponentView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./TheComponentView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheComponentView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/TheComponentView.vue?vue&type=template&id=c48534c0&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/scheme/TheComponentView.vue?vue&type=template&id=c48534c0& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheComponentView_vue_vue_type_template_id_c48534c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./TheComponentView.vue?vue&type=template&id=c48534c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/TheComponentView.vue?vue&type=template&id=c48534c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheComponentView_vue_vue_type_template_id_c48534c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheComponentView_vue_vue_type_template_id_c48534c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/scheme/libs/treant-js/jquery.easing.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/scheme/libs/treant-js/jquery.easing.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
      return factory($);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // Preserve the original jQuery "swing" easing as "jswing"
  $.easing.jswing = $.easing.swing;
  var pow = Math.pow,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      PI = Math.PI,
      c1 = 1.70158,
      c2 = c1 * 1.525,
      c3 = c1 + 1,
      c4 = 2 * PI / 3,
      c5 = 2 * PI / 4.5; // x is the fraction of animation progress, in the range 0..1

  function bounceOut(x) {
    var n1 = 7.5625,
        d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }

  $.extend($.easing, {
    def: 'easeOutQuad',
    swing: function swing(x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function easeInQuad(x) {
      return x * x;
    },
    easeOutQuad: function easeOutQuad(x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function easeInOutQuad(x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function easeInCubic(x) {
      return x * x * x;
    },
    easeOutCubic: function easeOutCubic(x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function easeInOutCubic(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function easeInQuart(x) {
      return x * x * x * x;
    },
    easeOutQuart: function easeOutQuart(x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function easeInOutQuart(x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function easeInQuint(x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function easeOutQuint(x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function easeInOutQuint(x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function easeInSine(x) {
      return 1 - cos(x * PI / 2);
    },
    easeOutSine: function easeOutSine(x) {
      return sin(x * PI / 2);
    },
    easeInOutSine: function easeInOutSine(x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function easeInExpo(x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function easeInOutExpo(x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function easeInCirc(x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function easeOutCirc(x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function easeInOutCirc(x) {
      return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function easeInElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function easeOutElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function easeInOutElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeInBack: function easeInBack(x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function easeOutBack(x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function easeInOutBack(x) {
      return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function easeInBounce(x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function easeInOutBounce(x) {
      return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    }
  });
});

/***/ }),

/***/ "./resources/js/components/scheme/libs/treant-js/raphael.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/scheme/libs/treant-js/raphael.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.2.0 - JavaScript Vector Library                                                             │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com)                                       │ \\
// │ Copyright © 2008-2016 Sencha Labs (http://sencha.com)                                                 │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (https://github.com/DmitryBaranovskiy/raphael/blob/master/license.txt) license.│ \\
// └───────────────────────────────────────────────────────────────────────────────────────────────────────┘ \\
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (R) {
        return R;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (eve) {
        /*\
         * Raphael
         [ method ]
         **
         * Creates a canvas object on which to draw.
         * You must do this first, as all future calls to drawing methods
         * from this instance will be bound to this canvas.
         > Parameters
         **
         - container (HTMLElement|string) DOM element or its ID which is going to be a parent for drawing surface
         - width (number)
         - height (number)
         - callback (function) #optional callback function which is going to be executed in the context of newly created paper
         * or
         - x (number)
         - y (number)
         - width (number)
         - height (number)
         - callback (function) #optional callback function which is going to be executed in the context of newly created paper
         * or
         - all (array) (first 3 or 4 elements in the array are equal to [containerID, width, height] or [x, y, width, height]. The rest are element descriptions in format {type: type, <attributes>}). See @Paper.add.
         - callback (function) #optional callback function which is going to be executed in the context of newly created paper
         * or
         - onReadyCallback (function) function that is going to be called on DOM ready event. You can also subscribe to this event via Eve’s “DOMLoad” event. In this case method returns `undefined`.
         = (object) @Paper
         > Usage
         | // Each of the following examples create a canvas
         | // that is 320px wide by 200px high.
         | // Canvas is created at the viewport’s 10,50 coordinate.
         | var paper = Raphael(10, 50, 320, 200);
         | // Canvas is created at the top left corner of the #notepad element
         | // (or its top right corner in dir="rtl" elements)
         | var paper = Raphael(document.getElementById("notepad"), 320, 200);
         | // Same as above
         | var paper = Raphael("notepad", 320, 200);
         | // Image dump
         | var set = Raphael(["notepad", 320, 200, {
         |     type: "rect",
         |     x: 10,
         |     y: 10,
         |     width: 25,
         |     height: 25,
         |     stroke: "#f00"
         | }, {
         |     type: "text",
         |     x: 30,
         |     y: 40,
         |     text: "Dump"
         | }]);
        \*/
        function R(first) {
          if (R.is(first, "function")) {
            return loaded ? first() : eve.on("raphael.DOMload", first);
          } else if (R.is(first, array)) {
            return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
          } else {
            var args = Array.prototype.slice.call(arguments, 0);

            if (R.is(args[args.length - 1], "function")) {
              var f = args.pop();
              return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function () {
                f.call(R._engine.create[apply](R, args));
              });
            } else {
              return R._engine.create[apply](R, arguments);
            }
          }
        }

        R.version = "2.2.0";
        R.eve = eve;

        var loaded,
            separator = /[, ]+/,
            elements = {
          circle: 1,
          rect: 1,
          path: 1,
          ellipse: 1,
          text: 1,
          image: 1
        },
            formatrg = /\{(\d+)\}/g,
            proto = "prototype",
            has = "hasOwnProperty",
            g = {
          doc: document,
          win: window
        },
            oldRaphael = {
          was: Object.prototype[has].call(g.win, "Raphael"),
          is: g.win.Raphael
        },
            Paper = function Paper() {
          /*\
           * Paper.ca
           [ property (object) ]
           **
           * Shortcut for @Paper.customAttributes
          \*/

          /*\
           * Paper.customAttributes
           [ property (object) ]
           **
           * If you have a set of attributes that you would like to represent
           * as a function of some number you can do it easily with custom attributes:
           > Usage
           | paper.customAttributes.hue = function (num) {
           |     num = num % 1;
           |     return {fill: "hsb(" + num + ", 0.75, 1)"};
           | };
           | // Custom attribute “hue” will change fill
           | // to be given hue with fixed saturation and brightness.
           | // Now you can use it like this:
           | var c = paper.circle(10, 10, 10).attr({hue: .45});
           | // or even like this:
           | c.animate({hue: 1}, 1e3);
           |
           | // You could also create custom attribute
           | // with multiple parameters:
           | paper.customAttributes.hsb = function (h, s, b) {
           |     return {fill: "hsb(" + [h, s, b].join(",") + ")"};
           | };
           | c.attr({hsb: "0.5 .8 1"});
           | c.animate({hsb: [1, 0, 0.5]}, 1e3);
          \*/
          this.ca = this.customAttributes = {};
        },
            paperproto,
            appendChild = "appendChild",
            apply = "apply",
            concat = "concat",
            supportsTouch = 'ontouchstart' in g.win || g.win.DocumentTouch && g.doc instanceof DocumentTouch,
            //taken from Modernizr touch test
        E = "",
            S = " ",
            Str = String,
            split = "split",
            events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[split](S),
            touchMap = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend"
        },
            lowerCase = Str.prototype.toLowerCase,
            math = Math,
            mmax = math.max,
            mmin = math.min,
            abs = math.abs,
            pow = math.pow,
            PI = math.PI,
            nu = "number",
            string = "string",
            array = "array",
            toString = "toString",
            fillString = "fill",
            objectToString = Object.prototype.toString,
            paper = {},
            push = "push",
            ISURL = R._ISURL = /^url\(['"]?(.+?)['"]?\)$/i,
            colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
            isnan = {
          "NaN": 1,
          "Infinity": 1,
          "-Infinity": 1
        },
            bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
            round = math.round,
            setAttribute = "setAttribute",
            toFloat = parseFloat,
            toInt = parseInt,
            upperCase = Str.prototype.toUpperCase,
            availableAttrs = R._availableAttrs = {
          "arrow-end": "none",
          "arrow-start": "none",
          blur: 0,
          "clip-rect": "0 0 1e9 1e9",
          cursor: "default",
          cx: 0,
          cy: 0,
          fill: "#fff",
          "fill-opacity": 1,
          font: '10px "Arial"',
          "font-family": '"Arial"',
          "font-size": "10",
          "font-style": "normal",
          "font-weight": 400,
          gradient: 0,
          height: 0,
          href: "http://raphaeljs.com/",
          "letter-spacing": 0,
          opacity: 1,
          path: "M0,0",
          r: 0,
          rx: 0,
          ry: 0,
          src: "",
          stroke: "#000",
          "stroke-dasharray": "",
          "stroke-linecap": "butt",
          "stroke-linejoin": "butt",
          "stroke-miterlimit": 0,
          "stroke-opacity": 1,
          "stroke-width": 1,
          target: "_blank",
          "text-anchor": "middle",
          title: "Raphael",
          transform: "",
          width: 0,
          x: 0,
          y: 0,
          "class": ""
        },
            availableAnimAttrs = R._availableAnimAttrs = {
          blur: nu,
          "clip-rect": "csv",
          cx: nu,
          cy: nu,
          fill: "colour",
          "fill-opacity": nu,
          "font-size": nu,
          height: nu,
          opacity: nu,
          path: "path",
          r: nu,
          rx: nu,
          ry: nu,
          stroke: "colour",
          "stroke-opacity": nu,
          "stroke-width": nu,
          transform: "transform",
          width: nu,
          x: nu,
          y: nu
        },
            whitespace = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
            commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
            hsrg = {
          hs: 1,
          rg: 1
        },
            p2s = /,?([achlmqrstvxz]),?/gi,
            pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
            tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
            pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
            radial_gradient = R._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
            eldata = {},
            sortByKey = function sortByKey(a, b) {
          return a.key - b.key;
        },
            sortByNumber = function sortByNumber(a, b) {
          return toFloat(a) - toFloat(b);
        },
            fun = function fun() {},
            pipe = function pipe(x) {
          return x;
        },
            rectPath = R._rectPath = function (x, y, w, h, r) {
          if (r) {
            return [["M", x + r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
          }

          return [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        },
            ellipsePath = function ellipsePath(x, y, rx, ry) {
          if (ry == null) {
            ry = rx;
          }

          return [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
        },
            getPath = R._getPath = {
          path: function path(el) {
            return el.attr("path");
          },
          circle: function circle(el) {
            var a = el.attrs;
            return ellipsePath(a.cx, a.cy, a.r);
          },
          ellipse: function ellipse(el) {
            var a = el.attrs;
            return ellipsePath(a.cx, a.cy, a.rx, a.ry);
          },
          rect: function rect(el) {
            var a = el.attrs;
            return rectPath(a.x, a.y, a.width, a.height, a.r);
          },
          image: function image(el) {
            var a = el.attrs;
            return rectPath(a.x, a.y, a.width, a.height);
          },
          text: function text(el) {
            var bbox = el._getBBox();

            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
          },
          set: function set(el) {
            var bbox = el._getBBox();

            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
          }
        },

        /*\
         * Raphael.mapPath
         [ method ]
         **
         * Transform the path string with given matrix.
         > Parameters
         - path (string) path string
         - matrix (object) see @Matrix
         = (string) transformed path string
        \*/
        mapPath = R.mapPath = function (path, matrix) {
          if (!matrix) {
            return path;
          }

          var x, y, i, j, ii, jj, pathi;
          path = path2curve(path);

          for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];

            for (j = 1, jj = pathi.length; j < jj; j += 2) {
              x = matrix.x(pathi[j], pathi[j + 1]);
              y = matrix.y(pathi[j], pathi[j + 1]);
              pathi[j] = x;
              pathi[j + 1] = y;
            }
          }

          return path;
        };

        R._g = g;
        /*\
         * Raphael.type
         [ property (string) ]
         **
         * Can be “SVG”, “VML” or empty, depending on browser support.
        \*/

        R.type = g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";

        if (R.type == "VML") {
          var d = g.doc.createElement("div"),
              b;
          d.innerHTML = '<v:shape adj="1"/>';
          b = d.firstChild;
          b.style.behavior = "url(#default#VML)";

          if (!(b && _typeof(b.adj) == "object")) {
            return R.type = E;
          }

          d = null;
        }
        /*\
         * Raphael.svg
         [ property (boolean) ]
         **
         * `true` if browser supports SVG.
        \*/

        /*\
         * Raphael.vml
         [ property (boolean) ]
         **
         * `true` if browser supports VML.
        \*/


        R.svg = !(R.vml = R.type == "VML");
        R._Paper = Paper;
        /*\
         * Raphael.fn
         [ property (object) ]
         **
         * You can add your own method to the canvas. For example if you want to draw a pie chart,
         * you can create your own pie chart function and ship it as a Raphaël plugin. To do this
         * you need to extend the `Raphael.fn` object. You should modify the `fn` object before a
         * Raphaël instance is created, otherwise it will take no effect. Please note that the
         * ability for namespaced plugins was removed in Raphael 2.0. It is up to the plugin to
         * ensure any namespacing ensures proper context.
         > Usage
         | Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
         |     return this.path( ... );
         | };
         | // or create namespace
         | Raphael.fn.mystuff = {
         |     arrow: function () {…},
         |     star: function () {…},
         |     // etc…
         | };
         | var paper = Raphael(10, 10, 630, 480);
         | // then use it
         | paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
         | paper.mystuff.arrow();
         | paper.mystuff.star();
        \*/

        R.fn = paperproto = Paper.prototype = R.prototype;
        R._id = 0;
        /*\
         * Raphael.is
         [ method ]
         **
         * Handful of replacements for `typeof` operator.
         > Parameters
         - o (…) any object or primitive
         - type (string) name of the type, i.e. “string”, “function”, “number”, etc.
         = (boolean) is given value is of given type
        \*/

        R.is = function (o, type) {
          type = lowerCase.call(type);

          if (type == "finite") {
            return !isnan[has](+o);
          }

          if (type == "array") {
            return o instanceof Array;
          }

          return type == "null" && o === null || type == _typeof(o) && o !== null || type == "object" && o === Object(o) || type == "array" && Array.isArray && Array.isArray(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
        };

        function clone(obj) {
          if (typeof obj == "function" || Object(obj) !== obj) {
            return obj;
          }

          var res = new obj.constructor();

          for (var key in obj) {
            if (obj[has](key)) {
              res[key] = clone(obj[key]);
            }
          }

          return res;
        }
        /*\
         * Raphael.angle
         [ method ]
         **
         * Returns angle between two or three points
         > Parameters
         - x1 (number) x coord of first point
         - y1 (number) y coord of first point
         - x2 (number) x coord of second point
         - y2 (number) y coord of second point
         - x3 (number) #optional x coord of third point
         - y3 (number) #optional y coord of third point
         = (number) angle in degrees.
        \*/


        R.angle = function (x1, y1, x2, y2, x3, y3) {
          if (x3 == null) {
            var x = x1 - x2,
                y = y1 - y2;

            if (!x && !y) {
              return 0;
            }

            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
          } else {
            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
          }
        };
        /*\
         * Raphael.rad
         [ method ]
         **
         * Transform angle to radians
         > Parameters
         - deg (number) angle in degrees
         = (number) angle in radians.
        \*/


        R.rad = function (deg) {
          return deg % 360 * PI / 180;
        };
        /*\
         * Raphael.deg
         [ method ]
         **
         * Transform angle to degrees
         > Parameters
         - rad (number) angle in radians
         = (number) angle in degrees.
        \*/


        R.deg = function (rad) {
          return Math.round(rad * 180 / PI % 360 * 1000) / 1000;
        };
        /*\
         * Raphael.snapTo
         [ method ]
         **
         * Snaps given value to given grid.
         > Parameters
         - values (array|number) given array of values or step of the grid
         - value (number) value to adjust
         - tolerance (number) #optional tolerance for snapping. Default is `10`.
         = (number) adjusted value.
        \*/


        R.snapTo = function (values, value, tolerance) {
          tolerance = R.is(tolerance, "finite") ? tolerance : 10;

          if (R.is(values, array)) {
            var i = values.length;

            while (i--) {
              if (abs(values[i] - value) <= tolerance) {
                return values[i];
              }
            }
          } else {
            values = +values;
            var rem = value % values;

            if (rem < tolerance) {
              return value - rem;
            }

            if (rem > values - tolerance) {
              return value - rem + values;
            }
          }

          return value;
        };
        /*\
         * Raphael.createUUID
         [ method ]
         **
         * Returns RFC4122, version 4 ID
        \*/


        var createUUID = R.createUUID = function (uuidRegEx, uuidReplacer) {
          return function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
          };
        }(/[xy]/g, function (c) {
          var r = math.random() * 16 | 0,
              v = c == "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
        /*\
         * Raphael.setWindow
         [ method ]
         **
         * Used when you need to draw in `&lt;iframe>`. Switched window to the iframe one.
         > Parameters
         - newwin (window) new window object
        \*/


        R.setWindow = function (newwin) {
          eve("raphael.setWindow", R, g.win, newwin);
          g.win = newwin;
          g.doc = g.win.document;

          if (R._engine.initWin) {
            R._engine.initWin(g.win);
          }
        };

        var _toHex = function toHex(color) {
          if (R.vml) {
            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
            var trim = /^\s+|\s+$/g;
            var bod;

            try {
              var docum = new ActiveXObject("htmlfile");
              docum.write("<body>");
              docum.close();
              bod = docum.body;
            } catch (e) {
              bod = createPopup().document.body;
            }

            var range = bod.createTextRange();
            _toHex = cacher(function (color) {
              try {
                bod.style.color = Str(color).replace(trim, E);
                var value = range.queryCommandValue("ForeColor");
                value = (value & 255) << 16 | value & 65280 | (value & 16711680) >>> 16;
                return "#" + ("000000" + value.toString(16)).slice(-6);
              } catch (e) {
                return "none";
              }
            });
          } else {
            var i = g.doc.createElement("i");
            i.title = "Rapha\xebl Colour Picker";
            i.style.display = "none";
            g.doc.body.appendChild(i);
            _toHex = cacher(function (color) {
              i.style.color = color;
              return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
            });
          }

          return _toHex(color);
        },
            hsbtoString = function hsbtoString() {
          return "hsb(" + [this.h, this.s, this.b] + ")";
        },
            hsltoString = function hsltoString() {
          return "hsl(" + [this.h, this.s, this.l] + ")";
        },
            rgbtoString = function rgbtoString() {
          return this.hex;
        },
            prepareRGB = function prepareRGB(r, g, b) {
          if (g == null && R.is(r, "object") && "r" in r && "g" in r && "b" in r) {
            b = r.b;
            g = r.g;
            r = r.r;
          }

          if (g == null && R.is(r, string)) {
            var clr = R.getRGB(r);
            r = clr.r;
            g = clr.g;
            b = clr.b;
          }

          if (r > 1 || g > 1 || b > 1) {
            r /= 255;
            g /= 255;
            b /= 255;
          }

          return [r, g, b];
        },
            packageRGB = function packageRGB(r, g, b, o) {
          r *= 255;
          g *= 255;
          b *= 255;
          var rgb = {
            r: r,
            g: g,
            b: b,
            hex: R.rgb(r, g, b),
            toString: rgbtoString
          };
          R.is(o, "finite") && (rgb.opacity = o);
          return rgb;
        };
        /*\
         * Raphael.color
         [ method ]
         **
         * Parses the color string and returns object with all values for the given color.
         > Parameters
         - clr (string) color string in one of the supported formats (see @Raphael.getRGB)
         = (object) Combined RGB & HSB object in format:
         o {
         o     r (number) red,
         o     g (number) green,
         o     b (number) blue,
         o     hex (string) color in HTML/CSS format: #••••••,
         o     error (boolean) `true` if string can’t be parsed,
         o     h (number) hue,
         o     s (number) saturation,
         o     v (number) value (brightness),
         o     l (number) lightness
         o }
        \*/


        R.color = function (clr) {
          var rgb;

          if (R.is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
            rgb = R.hsb2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.hex = rgb.hex;
          } else if (R.is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
            rgb = R.hsl2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.hex = rgb.hex;
          } else {
            if (R.is(clr, "string")) {
              clr = R.getRGB(clr);
            }

            if (R.is(clr, "object") && "r" in clr && "g" in clr && "b" in clr) {
              rgb = R.rgb2hsl(clr);
              clr.h = rgb.h;
              clr.s = rgb.s;
              clr.l = rgb.l;
              rgb = R.rgb2hsb(clr);
              clr.v = rgb.b;
            } else {
              clr = {
                hex: "none"
              };
              clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            }
          }

          clr.toString = rgbtoString;
          return clr;
        };
        /*\
         * Raphael.hsb2rgb
         [ method ]
         **
         * Converts HSB values to RGB object.
         > Parameters
         - h (number) hue
         - s (number) saturation
         - v (number) value or brightness
         = (object) RGB object in format:
         o {
         o     r (number) red,
         o     g (number) green,
         o     b (number) blue,
         o     hex (string) color in HTML/CSS format: #••••••
         o }
        \*/


        R.hsb2rgb = function (h, s, v, o) {
          if (this.is(h, "object") && "h" in h && "s" in h && "b" in h) {
            v = h.b;
            s = h.s;
            o = h.o;
            h = h.h;
          }

          h *= 360;
          var R, G, B, X, C;
          h = h % 360 / 60;
          C = v * s;
          X = C * (1 - abs(h % 2 - 1));
          R = G = B = v - C;
          h = ~~h;
          R += [C, X, 0, 0, X, C][h];
          G += [X, C, C, X, 0, 0][h];
          B += [0, 0, X, C, C, X][h];
          return packageRGB(R, G, B, o);
        };
        /*\
         * Raphael.hsl2rgb
         [ method ]
         **
         * Converts HSL values to RGB object.
         > Parameters
         - h (number) hue
         - s (number) saturation
         - l (number) luminosity
         = (object) RGB object in format:
         o {
         o     r (number) red,
         o     g (number) green,
         o     b (number) blue,
         o     hex (string) color in HTML/CSS format: #••••••
         o }
        \*/


        R.hsl2rgb = function (h, s, l, o) {
          if (this.is(h, "object") && "h" in h && "s" in h && "l" in h) {
            l = h.l;
            s = h.s;
            h = h.h;
          }

          if (h > 1 || s > 1 || l > 1) {
            h /= 360;
            s /= 100;
            l /= 100;
          }

          h *= 360;
          var R, G, B, X, C;
          h = h % 360 / 60;
          C = 2 * s * (l < .5 ? l : 1 - l);
          X = C * (1 - abs(h % 2 - 1));
          R = G = B = l - C / 2;
          h = ~~h;
          R += [C, X, 0, 0, X, C][h];
          G += [X, C, C, X, 0, 0][h];
          B += [0, 0, X, C, C, X][h];
          return packageRGB(R, G, B, o);
        };
        /*\
         * Raphael.rgb2hsb
         [ method ]
         **
         * Converts RGB values to HSB object.
         > Parameters
         - r (number) red
         - g (number) green
         - b (number) blue
         = (object) HSB object in format:
         o {
         o     h (number) hue
         o     s (number) saturation
         o     b (number) brightness
         o }
        \*/


        R.rgb2hsb = function (r, g, b) {
          b = prepareRGB(r, g, b);
          r = b[0];
          g = b[1];
          b = b[2];
          var H, S, V, C;
          V = mmax(r, g, b);
          C = V - mmin(r, g, b);
          H = C == 0 ? null : V == r ? (g - b) / C : V == g ? (b - r) / C + 2 : (r - g) / C + 4;
          H = (H + 360) % 6 * 60 / 360;
          S = C == 0 ? 0 : C / V;
          return {
            h: H,
            s: S,
            b: V,
            toString: hsbtoString
          };
        };
        /*\
         * Raphael.rgb2hsl
         [ method ]
         **
         * Converts RGB values to HSL object.
         > Parameters
         - r (number) red
         - g (number) green
         - b (number) blue
         = (object) HSL object in format:
         o {
         o     h (number) hue
         o     s (number) saturation
         o     l (number) luminosity
         o }
        \*/


        R.rgb2hsl = function (r, g, b) {
          b = prepareRGB(r, g, b);
          r = b[0];
          g = b[1];
          b = b[2];
          var H, S, L, M, m, C;
          M = mmax(r, g, b);
          m = mmin(r, g, b);
          C = M - m;
          H = C == 0 ? null : M == r ? (g - b) / C : M == g ? (b - r) / C + 2 : (r - g) / C + 4;
          H = (H + 360) % 6 * 60 / 360;
          L = (M + m) / 2;
          S = C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
          return {
            h: H,
            s: S,
            l: L,
            toString: hsltoString
          };
        };

        R._path2string = function () {
          return this.join(",").replace(p2s, "$1");
        };

        function repush(array, item) {
          for (var i = 0, ii = array.length; i < ii; i++) {
            if (array[i] === item) {
              return array.push(array.splice(i, 1)[0]);
            }
          }
        }

        function cacher(f, scope, postprocessor) {
          function newf() {
            var arg = Array.prototype.slice.call(arguments, 0),
                args = arg.join("\u2400"),
                cache = newf.cache = newf.cache || {},
                count = newf.count = newf.count || [];

            if (cache[has](args)) {
              repush(count, args);
              return postprocessor ? postprocessor(cache[args]) : cache[args];
            }

            count.length >= 1e3 && delete cache[count.shift()];
            count.push(args);
            cache[args] = f[apply](scope, arg);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
          }

          return newf;
        }

        var preload = R._preload = function (src, f) {
          var img = g.doc.createElement("img");
          img.style.cssText = "position:absolute;left:-9999em;top:-9999em";

          img.onload = function () {
            f.call(this);
            this.onload = null;
            g.doc.body.removeChild(this);
          };

          img.onerror = function () {
            g.doc.body.removeChild(this);
          };

          g.doc.body.appendChild(img);
          img.src = src;
        };

        function clrToString() {
          return this.hex;
        }
        /*\
         * Raphael.getRGB
         [ method ]
         **
         * Parses colour string as RGB object
         > Parameters
         - colour (string) colour string in one of formats:
         # <ul>
         #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
         #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
         #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
         #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
         #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
         #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
         #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
         #     <li>hsl(•••, •••, •••) — same as hsb</li>
         #     <li>hsl(•••%, •••%, •••%) — same as hsb</li>
         # </ul>
         = (object) RGB object in format:
         o {
         o     r (number) red,
         o     g (number) green,
         o     b (number) blue
         o     hex (string) color in HTML/CSS format: #••••••,
         o     error (boolean) true if string can’t be parsed
         o }
        \*/


        R.getRGB = cacher(function (colour) {
          if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
            return {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              error: 1,
              toString: clrToString
            };
          }

          if (colour == "none") {
            return {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              toString: clrToString
            };
          }

          !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = _toHex(colour));
          var res,
              red,
              green,
              blue,
              opacity,
              t,
              values,
              rgb = colour.match(colourRegExp);

          if (rgb) {
            if (rgb[2]) {
              blue = toInt(rgb[2].substring(5), 16);
              green = toInt(rgb[2].substring(3, 5), 16);
              red = toInt(rgb[2].substring(1, 3), 16);
            }

            if (rgb[3]) {
              blue = toInt((t = rgb[3].charAt(3)) + t, 16);
              green = toInt((t = rgb[3].charAt(2)) + t, 16);
              red = toInt((t = rgb[3].charAt(1)) + t, 16);
            }

            if (rgb[4]) {
              values = rgb[4][split](commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red *= 2.55);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green *= 2.55);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue *= 2.55);
              rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            }

            if (rgb[5]) {
              values = rgb[5][split](commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red *= 2.55);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green *= 2.55);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue *= 2.55);
              (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
              rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
              return R.hsb2rgb(red, green, blue, opacity);
            }

            if (rgb[6]) {
              values = rgb[6][split](commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red *= 2.55);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green *= 2.55);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue *= 2.55);
              (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
              rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
              return R.hsl2rgb(red, green, blue, opacity);
            }

            rgb = {
              r: red,
              g: green,
              b: blue,
              toString: clrToString
            };
            rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
            R.is(opacity, "finite") && (rgb.opacity = opacity);
            return rgb;
          }

          return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: clrToString
          };
        }, R);
        /*\
         * Raphael.hsb
         [ method ]
         **
         * Converts HSB values to hex representation of the colour.
         > Parameters
         - h (number) hue
         - s (number) saturation
         - b (number) value or brightness
         = (string) hex representation of the colour.
        \*/

        R.hsb = cacher(function (h, s, b) {
          return R.hsb2rgb(h, s, b).hex;
        });
        /*\
         * Raphael.hsl
         [ method ]
         **
         * Converts HSL values to hex representation of the colour.
         > Parameters
         - h (number) hue
         - s (number) saturation
         - l (number) luminosity
         = (string) hex representation of the colour.
        \*/

        R.hsl = cacher(function (h, s, l) {
          return R.hsl2rgb(h, s, l).hex;
        });
        /*\
         * Raphael.rgb
         [ method ]
         **
         * Converts RGB values to hex representation of the colour.
         > Parameters
         - r (number) red
         - g (number) green
         - b (number) blue
         = (string) hex representation of the colour.
        \*/

        R.rgb = cacher(function (r, g, b) {
          function round(x) {
            return x + 0.5 | 0;
          }

          return "#" + (16777216 | round(b) | round(g) << 8 | round(r) << 16).toString(16).slice(1);
        });
        /*\
         * Raphael.getColor
         [ method ]
         **
         * On each call returns next colour in the spectrum. To reset it back to red call @Raphael.getColor.reset
         > Parameters
         - value (number) #optional brightness, default is `0.75`
         = (string) hex representation of the colour.
        \*/

        R.getColor = function (value) {
          var start = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: value || .75
          },
              rgb = this.hsb2rgb(start.h, start.s, start.b);
          start.h += .075;

          if (start.h > 1) {
            start.h = 0;
            start.s -= .2;
            start.s <= 0 && (this.getColor.start = {
              h: 0,
              s: 1,
              b: start.b
            });
          }

          return rgb.hex;
        };
        /*\
         * Raphael.getColor.reset
         [ method ]
         **
         * Resets spectrum position for @Raphael.getColor back to red.
        \*/


        R.getColor.reset = function () {
          delete this.start;
        }; // http://schepers.cc/getting-to-the-point


        function catmullRom2bezier(crp, z) {
          var d = [];

          for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +crp[i - 2],
              y: +crp[i - 1]
            }, {
              x: +crp[i],
              y: +crp[i + 1]
            }, {
              x: +crp[i + 2],
              y: +crp[i + 3]
            }, {
              x: +crp[i + 4],
              y: +crp[i + 5]
            }];

            if (z) {
              if (!i) {
                p[0] = {
                  x: +crp[iLen - 2],
                  y: +crp[iLen - 1]
                };
              } else if (iLen - 4 == i) {
                p[3] = {
                  x: +crp[0],
                  y: +crp[1]
                };
              } else if (iLen - 2 == i) {
                p[2] = {
                  x: +crp[0],
                  y: +crp[1]
                };
                p[3] = {
                  x: +crp[2],
                  y: +crp[3]
                };
              }
            } else {
              if (iLen - 4 == i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +crp[i],
                  y: +crp[i + 1]
                };
              }
            }

            d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
          }

          return d;
        }
        /*\
         * Raphael.parsePathString
         [ method ]
         **
         * Utility method
         **
         * Parses given path string into an array of arrays of path segments.
         > Parameters
         - pathString (string|array) path string or array of segments (in the last case it will be returned straight away)
         = (array) array of segments.
        \*/


        R.parsePathString = function (pathString) {
          if (!pathString) {
            return null;
          }

          var pth = paths(pathString);

          if (pth.arr) {
            return pathClone(pth.arr);
          }

          var paramCounts = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
          },
              data = [];

          if (R.is(pathString, array) && R.is(pathString[0], array)) {
            // rough assumption
            data = pathClone(pathString);
          }

          if (!data.length) {
            Str(pathString).replace(pathCommand, function (a, b, c) {
              var params = [],
                  name = b.toLowerCase();
              c.replace(pathValues, function (a, b) {
                b && params.push(+b);
              });

              if (name == "m" && params.length > 2) {
                data.push([b][concat](params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
              }

              if (name == "r") {
                data.push([b][concat](params));
              } else while (params.length >= paramCounts[name]) {
                data.push([b][concat](params.splice(0, paramCounts[name])));

                if (!paramCounts[name]) {
                  break;
                }
              }
            });
          }

          data.toString = R._path2string;
          pth.arr = pathClone(data);
          return data;
        };
        /*\
         * Raphael.parseTransformString
         [ method ]
         **
         * Utility method
         **
         * Parses given path string into an array of transformations.
         > Parameters
         - TString (string|array) transform string or array of transformations (in the last case it will be returned straight away)
         = (array) array of transformations.
        \*/


        R.parseTransformString = cacher(function (TString) {
          if (!TString) {
            return null;
          }

          var paramCounts = {
            r: 3,
            s: 4,
            t: 2,
            m: 6
          },
              data = [];

          if (R.is(TString, array) && R.is(TString[0], array)) {
            // rough assumption
            data = pathClone(TString);
          }

          if (!data.length) {
            Str(TString).replace(tCommand, function (a, b, c) {
              var params = [],
                  name = lowerCase.call(b);
              c.replace(pathValues, function (a, b) {
                b && params.push(+b);
              });
              data.push([b][concat](params));
            });
          }

          data.toString = R._path2string;
          return data;
        }); // PATHS

        var paths = function paths(ps) {
          var p = paths.ps = paths.ps || {};

          if (p[ps]) {
            p[ps].sleep = 100;
          } else {
            p[ps] = {
              sleep: 100
            };
          }

          setTimeout(function () {
            for (var key in p) {
              if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
              }
            }
          });
          return p[ps];
        };
        /*\
         * Raphael.findDotsAtSegment
         [ method ]
         **
         * Utility method
         **
         * Find dot coordinates on the given cubic bezier curve at the given t.
         > Parameters
         - p1x (number) x of the first point of the curve
         - p1y (number) y of the first point of the curve
         - c1x (number) x of the first anchor of the curve
         - c1y (number) y of the first anchor of the curve
         - c2x (number) x of the second anchor of the curve
         - c2y (number) y of the second anchor of the curve
         - p2x (number) x of the second point of the curve
         - p2y (number) y of the second point of the curve
         - t (number) position on the curve (0..1)
         = (object) point information in format:
         o {
         o     x: (number) x coordinate of the point
         o     y: (number) y coordinate of the point
         o     m: {
         o         x: (number) x coordinate of the left anchor
         o         y: (number) y coordinate of the left anchor
         o     }
         o     n: {
         o         x: (number) x coordinate of the right anchor
         o         y: (number) y coordinate of the right anchor
         o     }
         o     start: {
         o         x: (number) x coordinate of the start of the curve
         o         y: (number) y coordinate of the start of the curve
         o     }
         o     end: {
         o         x: (number) x coordinate of the end of the curve
         o         y: (number) y coordinate of the end of the curve
         o     }
         o     alpha: (number) angle of the curve derivative at the point
         o }
        \*/


        R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
          var t1 = 1 - t,
              t13 = pow(t1, 3),
              t12 = pow(t1, 2),
              t2 = t * t,
              t3 = t2 * t,
              x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
              y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
              mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
              my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
              nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
              ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
              ax = t1 * p1x + t * c1x,
              ay = t1 * p1y + t * c1y,
              cx = t1 * c2x + t * p2x,
              cy = t1 * c2y + t * p2y,
              alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
          (mx > nx || my < ny) && (alpha += 180);
          return {
            x: x,
            y: y,
            m: {
              x: mx,
              y: my
            },
            n: {
              x: nx,
              y: ny
            },
            start: {
              x: ax,
              y: ay
            },
            end: {
              x: cx,
              y: cy
            },
            alpha: alpha
          };
        };
        /*\
         * Raphael.bezierBBox
         [ method ]
         **
         * Utility method
         **
         * Return bounding box of a given cubic bezier curve
         > Parameters
         - p1x (number) x of the first point of the curve
         - p1y (number) y of the first point of the curve
         - c1x (number) x of the first anchor of the curve
         - c1y (number) y of the first anchor of the curve
         - c2x (number) x of the second anchor of the curve
         - c2y (number) y of the second anchor of the curve
         - p2x (number) x of the second point of the curve
         - p2y (number) y of the second point of the curve
         * or
         - bez (array) array of six points for bezier curve
         = (object) point information in format:
         o {
         o     min: {
         o         x: (number) x coordinate of the left point
         o         y: (number) y coordinate of the top point
         o     }
         o     max: {
         o         x: (number) x coordinate of the right point
         o         y: (number) y coordinate of the bottom point
         o     }
         o }
        \*/


        R.bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
          if (!R.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
          }

          var bbox = curveDim.apply(null, p1x);
          return {
            x: bbox.min.x,
            y: bbox.min.y,
            x2: bbox.max.x,
            y2: bbox.max.y,
            width: bbox.max.x - bbox.min.x,
            height: bbox.max.y - bbox.min.y
          };
        };
        /*\
         * Raphael.isPointInsideBBox
         [ method ]
         **
         * Utility method
         **
         * Returns `true` if given point is inside bounding boxes.
         > Parameters
         - bbox (string) bounding box
         - x (string) x coordinate of the point
         - y (string) y coordinate of the point
         = (boolean) `true` if point inside
        \*/


        R.isPointInsideBBox = function (bbox, x, y) {
          return x >= bbox.x && x <= bbox.x2 && y >= bbox.y && y <= bbox.y2;
        };
        /*\
         * Raphael.isBBoxIntersect
         [ method ]
         **
         * Utility method
         **
         * Returns `true` if two bounding boxes intersect
         > Parameters
         - bbox1 (string) first bounding box
         - bbox2 (string) second bounding box
         = (boolean) `true` if they intersect
        \*/


        R.isBBoxIntersect = function (bbox1, bbox2) {
          var i = R.isPointInsideBBox;
          return i(bbox2, bbox1.x, bbox1.y) || i(bbox2, bbox1.x2, bbox1.y) || i(bbox2, bbox1.x, bbox1.y2) || i(bbox2, bbox1.x2, bbox1.y2) || i(bbox1, bbox2.x, bbox2.y) || i(bbox1, bbox2.x2, bbox2.y) || i(bbox1, bbox2.x, bbox2.y2) || i(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
        };

        function base3(t, p1, p2, p3, p4) {
          var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
              t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
          return t * t2 - 3 * p1 + 3 * p2;
        }

        function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
          if (z == null) {
            z = 1;
          }

          z = z > 1 ? 1 : z < 0 ? 0 : z;
          var z2 = z / 2,
              n = 12,
              Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
              Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
              sum = 0;

          for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
          }

          return z2 * sum;
        }

        function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
          if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
          }

          var t = 1,
              step = t / 2,
              t2 = t - step,
              l,
              e = .01;
          l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);

          while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
          }

          return t2;
        }

        function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
          if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
            return;
          }

          var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
              ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
              denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

          if (!denominator) {
            return;
          }

          var px = nx / denominator,
              py = ny / denominator,
              px2 = +px.toFixed(2),
              py2 = +py.toFixed(2);

          if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
            return;
          }

          return {
            x: px,
            y: py
          };
        }

        function inter(bez1, bez2) {
          return interHelper(bez1, bez2);
        }

        function interCount(bez1, bez2) {
          return interHelper(bez1, bez2, 1);
        }

        function interHelper(bez1, bez2, justCount) {
          var bbox1 = R.bezierBBox(bez1),
              bbox2 = R.bezierBBox(bez2);

          if (!R.isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
          }

          var l1 = bezlen.apply(0, bez1),
              l2 = bezlen.apply(0, bez2),
              n1 = mmax(~~(l1 / 5), 1),
              n2 = mmax(~~(l2 / 5), 1),
              dots1 = [],
              dots2 = [],
              xy = {},
              res = justCount ? 0 : [];

          for (var i = 0; i < n1 + 1; i++) {
            var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));
            dots1.push({
              x: p.x,
              y: p.y,
              t: i / n1
            });
          }

          for (i = 0; i < n2 + 1; i++) {
            p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));
            dots2.push({
              x: p.x,
              y: p.y,
              t: i / n2
            });
          }

          for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
              var di = dots1[i],
                  di1 = dots1[i + 1],
                  dj = dots2[j],
                  dj1 = dots2[j + 1],
                  ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                  cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                  is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);

              if (is) {
                if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                  continue;
                }

                xy[is.x.toFixed(4)] = is.y.toFixed(4);
                var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                    t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);

                if (t1 >= 0 && t1 <= 1.001 && t2 >= 0 && t2 <= 1.001) {
                  if (justCount) {
                    res++;
                  } else {
                    res.push({
                      x: is.x,
                      y: is.y,
                      t1: mmin(t1, 1),
                      t2: mmin(t2, 1)
                    });
                  }
                }
              }
            }
          }

          return res;
        }
        /*\
         * Raphael.pathIntersection
         [ method ]
         **
         * Utility method
         **
         * Finds intersections of two paths
         > Parameters
         - path1 (string) path string
         - path2 (string) path string
         = (array) dots of intersection
         o [
         o     {
         o         x: (number) x coordinate of the point
         o         y: (number) y coordinate of the point
         o         t1: (number) t value for segment of path1
         o         t2: (number) t value for segment of path2
         o         segment1: (number) order number for segment of path1
         o         segment2: (number) order number for segment of path2
         o         bez1: (array) eight coordinates representing beziér curve for the segment of path1
         o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
         o     }
         o ]
        \*/


        R.pathIntersection = function (path1, path2) {
          return interPathHelper(path1, path2);
        };

        R.pathIntersectionNumber = function (path1, path2) {
          return interPathHelper(path1, path2, 1);
        };

        function interPathHelper(path1, path2, justCount) {
          path1 = R._path2curve(path1);
          path2 = R._path2curve(path2);
          var x1,
              y1,
              x2,
              y2,
              x1m,
              y1m,
              x2m,
              y2m,
              bez1,
              bez2,
              res = justCount ? 0 : [];

          for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];

            if (pi[0] == "M") {
              x1 = x1m = pi[1];
              y1 = y1m = pi[2];
            } else {
              if (pi[0] == "C") {
                bez1 = [x1, y1].concat(pi.slice(1));
                x1 = bez1[6];
                y1 = bez1[7];
              } else {
                bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                x1 = x1m;
                y1 = y1m;
              }

              for (var j = 0, jj = path2.length; j < jj; j++) {
                var pj = path2[j];

                if (pj[0] == "M") {
                  x2 = x2m = pj[1];
                  y2 = y2m = pj[2];
                } else {
                  if (pj[0] == "C") {
                    bez2 = [x2, y2].concat(pj.slice(1));
                    x2 = bez2[6];
                    y2 = bez2[7];
                  } else {
                    bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                    x2 = x2m;
                    y2 = y2m;
                  }

                  var intr = interHelper(bez1, bez2, justCount);

                  if (justCount) {
                    res += intr;
                  } else {
                    for (var k = 0, kk = intr.length; k < kk; k++) {
                      intr[k].segment1 = i;
                      intr[k].segment2 = j;
                      intr[k].bez1 = bez1;
                      intr[k].bez2 = bez2;
                    }

                    res = res.concat(intr);
                  }
                }
              }
            }
          }

          return res;
        }
        /*\
         * Raphael.isPointInsidePath
         [ method ]
         **
         * Utility method
         **
         * Returns `true` if given point is inside a given closed path.
         > Parameters
         - path (string) path string
         - x (number) x of the point
         - y (number) y of the point
         = (boolean) true, if point is inside the path
        \*/


        R.isPointInsidePath = function (path, x, y) {
          var bbox = R.pathBBox(path);
          return R.isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
        };

        R._removedFactory = function (methodname) {
          return function () {
            eve("raphael.log", null, "Rapha\xEBl: you are calling to method \u201C" + methodname + "\u201D of removed object", methodname);
          };
        };
        /*\
         * Raphael.pathBBox
         [ method ]
         **
         * Utility method
         **
         * Return bounding box of a given path
         > Parameters
         - path (string) path string
         = (object) bounding box
         o {
         o     x: (number) x coordinate of the left top point of the box
         o     y: (number) y coordinate of the left top point of the box
         o     x2: (number) x coordinate of the right bottom point of the box
         o     y2: (number) y coordinate of the right bottom point of the box
         o     width: (number) width of the box
         o     height: (number) height of the box
         o     cx: (number) x coordinate of the center of the box
         o     cy: (number) y coordinate of the center of the box
         o }
        \*/


        var pathDimensions = R.pathBBox = function (path) {
          var pth = paths(path);

          if (pth.bbox) {
            return clone(pth.bbox);
          }

          if (!path) {
            return {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              x2: 0,
              y2: 0
            };
          }

          path = path2curve(path);
          var x = 0,
              y = 0,
              X = [],
              Y = [],
              p;

          for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];

            if (p[0] == "M") {
              x = p[1];
              y = p[2];
              X.push(x);
              Y.push(y);
            } else {
              var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
              X = X[concat](dim.min.x, dim.max.x);
              Y = Y[concat](dim.min.y, dim.max.y);
              x = p[5];
              y = p[6];
            }
          }

          var xmin = mmin[apply](0, X),
              ymin = mmin[apply](0, Y),
              xmax = mmax[apply](0, X),
              ymax = mmax[apply](0, Y),
              width = xmax - xmin,
              height = ymax - ymin,
              bb = {
            x: xmin,
            y: ymin,
            x2: xmax,
            y2: ymax,
            width: width,
            height: height,
            cx: xmin + width / 2,
            cy: ymin + height / 2
          };
          pth.bbox = clone(bb);
          return bb;
        },
            pathClone = function pathClone(pathArray) {
          var res = clone(pathArray);
          res.toString = R._path2string;
          return res;
        },
            pathToRelative = R._pathToRelative = function (pathArray) {
          var pth = paths(pathArray);

          if (pth.rel) {
            return pathClone(pth.rel);
          }

          if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) {
            // rough assumption
            pathArray = R.parsePathString(pathArray);
          }

          var res = [],
              x = 0,
              y = 0,
              mx = 0,
              my = 0,
              start = 0;

          if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
          }

          for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];

            if (pa[0] != lowerCase.call(pa[0])) {
              r[0] = lowerCase.call(pa[0]);

              switch (r[0]) {
                case "a":
                  r[1] = pa[1];
                  r[2] = pa[2];
                  r[3] = pa[3];
                  r[4] = pa[4];
                  r[5] = pa[5];
                  r[6] = +(pa[6] - x).toFixed(3);
                  r[7] = +(pa[7] - y).toFixed(3);
                  break;

                case "v":
                  r[1] = +(pa[1] - y).toFixed(3);
                  break;

                case "m":
                  mx = pa[1];
                  my = pa[2];

                default:
                  for (var j = 1, jj = pa.length; j < jj; j++) {
                    r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                  }

              }
            } else {
              r = res[i] = [];

              if (pa[0] == "m") {
                mx = pa[1] + x;
                my = pa[2] + y;
              }

              for (var k = 0, kk = pa.length; k < kk; k++) {
                res[i][k] = pa[k];
              }
            }

            var len = res[i].length;

            switch (res[i][0]) {
              case "z":
                x = mx;
                y = my;
                break;

              case "h":
                x += +res[i][len - 1];
                break;

              case "v":
                y += +res[i][len - 1];
                break;

              default:
                x += +res[i][len - 2];
                y += +res[i][len - 1];
            }
          }

          res.toString = R._path2string;
          pth.rel = pathClone(res);
          return res;
        },
            pathToAbsolute = R._pathToAbsolute = function (pathArray) {
          var pth = paths(pathArray);

          if (pth.abs) {
            return pathClone(pth.abs);
          }

          if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) {
            // rough assumption
            pathArray = R.parsePathString(pathArray);
          }

          if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
          }

          var res = [],
              x = 0,
              y = 0,
              mx = 0,
              my = 0,
              start = 0;

          if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
          }

          var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";

          for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];

            if (pa[0] != upperCase.call(pa[0])) {
              r[0] = upperCase.call(pa[0]);

              switch (r[0]) {
                case "A":
                  r[1] = pa[1];
                  r[2] = pa[2];
                  r[3] = pa[3];
                  r[4] = pa[4];
                  r[5] = pa[5];
                  r[6] = +(pa[6] + x);
                  r[7] = +(pa[7] + y);
                  break;

                case "V":
                  r[1] = +pa[1] + y;
                  break;

                case "H":
                  r[1] = +pa[1] + x;
                  break;

                case "R":
                  var dots = [x, y][concat](pa.slice(1));

                  for (var j = 2, jj = dots.length; j < jj; j++) {
                    dots[j] = +dots[j] + x;
                    dots[++j] = +dots[j] + y;
                  }

                  res.pop();
                  res = res[concat](catmullRom2bezier(dots, crz));
                  break;

                case "M":
                  mx = +pa[1] + x;
                  my = +pa[2] + y;

                default:
                  for (j = 1, jj = pa.length; j < jj; j++) {
                    r[j] = +pa[j] + (j % 2 ? x : y);
                  }

              }
            } else if (pa[0] == "R") {
              dots = [x, y][concat](pa.slice(1));
              res.pop();
              res = res[concat](catmullRom2bezier(dots, crz));
              r = ["R"][concat](pa.slice(-2));
            } else {
              for (var k = 0, kk = pa.length; k < kk; k++) {
                r[k] = pa[k];
              }
            }

            switch (r[0]) {
              case "Z":
                x = mx;
                y = my;
                break;

              case "H":
                x = r[1];
                break;

              case "V":
                y = r[1];
                break;

              case "M":
                mx = r[r.length - 2];
                my = r[r.length - 1];

              default:
                x = r[r.length - 2];
                y = r[r.length - 1];
            }
          }

          res.toString = R._path2string;
          pth.abs = pathClone(res);
          return res;
        },
            l2c = function l2c(x1, y1, x2, y2) {
          return [x1, y1, x2, y2, x2, y2];
        },
            q2c = function q2c(x1, y1, ax, ay, x2, y2) {
          var _13 = 1 / 3,
              _23 = 2 / 3;

          return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
        },
            a2c = function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
          // for more information of where this math came from visit:
          // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
          var _120 = PI * 120 / 180,
              rad = PI / 180 * (+angle || 0),
              res = [],
              xy,
              rotate = cacher(function (x, y, rad) {
            var X = x * math.cos(rad) - y * math.sin(rad),
                Y = x * math.sin(rad) + y * math.cos(rad);
            return {
              x: X,
              y: Y
            };
          });

          if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = x * x / (rx * rx) + y * y / (ry * ry);

            if (h > 1) {
              h = math.sqrt(h);
              rx = h * rx;
              ry = h * ry;
            }

            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));
            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);

            if (sweep_flag && f1 > f2) {
              f1 = f1 - PI * 2;
            }

            if (!sweep_flag && f2 > f1) {
              f2 = f2 - PI * 2;
            }
          } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
          }

          var df = f2 - f1;

          if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
          }

          df = f2 - f1;
          var c1 = math.cos(f1),
              s1 = math.sin(f1),
              c2 = math.cos(f2),
              s2 = math.sin(f2),
              t = math.tan(df / 4),
              hx = 4 / 3 * rx * t,
              hy = 4 / 3 * ry * t,
              m1 = [x1, y1],
              m2 = [x1 + hx * s1, y1 - hy * c1],
              m3 = [x2 + hx * s2, y2 - hy * c2],
              m4 = [x2, y2];
          m2[0] = 2 * m1[0] - m2[0];
          m2[1] = 2 * m1[1] - m2[1];

          if (recursive) {
            return [m2, m3, m4][concat](res);
          } else {
            res = [m2, m3, m4][concat](res).join()[split](",");
            var newres = [];

            for (var i = 0, ii = res.length; i < ii; i++) {
              newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }

            return newres;
          }
        },
            findDotAtSegment = function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
          var t1 = 1 - t;
          return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
          };
        },
            curveDim = cacher(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
          var a = c2x - 2 * c1x + p1x - (p2x - 2 * c2x + c1x),
              b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
              c = p1x - c1x,
              t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
              t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
              y = [p1y, p2y],
              x = [p1x, p2x],
              dot;
          abs(t1) > "1e12" && (t1 = .5);
          abs(t2) > "1e12" && (t2 = .5);

          if (t1 > 0 && t1 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
            x.push(dot.x);
            y.push(dot.y);
          }

          if (t2 > 0 && t2 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
            x.push(dot.x);
            y.push(dot.y);
          }

          a = c2y - 2 * c1y + p1y - (p2y - 2 * c2y + c1y);
          b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
          c = p1y - c1y;
          t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
          t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
          abs(t1) > "1e12" && (t1 = .5);
          abs(t2) > "1e12" && (t2 = .5);

          if (t1 > 0 && t1 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
            x.push(dot.x);
            y.push(dot.y);
          }

          if (t2 > 0 && t2 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
            x.push(dot.x);
            y.push(dot.y);
          }

          return {
            min: {
              x: mmin[apply](0, x),
              y: mmin[apply](0, y)
            },
            max: {
              x: mmax[apply](0, x),
              y: mmax[apply](0, y)
            }
          };
        }),
            path2curve = R._path2curve = cacher(function (path, path2) {
          var pth = !path2 && paths(path);

          if (!path2 && pth.curve) {
            return pathClone(pth.curve);
          }

          var p = pathToAbsolute(path),
              p2 = path2 && pathToAbsolute(path2),
              attrs = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
          },
              attrs2 = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
          },
              processPath = function processPath(path, d, pcom) {
            var nx,
                ny,
                tq = {
              T: 1,
              Q: 1
            };

            if (!path) {
              return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
            }

            !(path[0] in tq) && (d.qx = d.qy = null);

            switch (path[0]) {
              case "M":
                d.X = path[1];
                d.Y = path[2];
                break;

              case "A":
                path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
                break;

              case "S":
                if (pcom == "C" || pcom == "S") {
                  // In "S" case we have to take into account, if the previous command is C/S.
                  nx = d.x * 2 - d.bx; // And reflect the previous

                  ny = d.y * 2 - d.by; // command's control point relative to the current point.
                } else {
                  // or some else or nothing
                  nx = d.x;
                  ny = d.y;
                }

                path = ["C", nx, ny][concat](path.slice(1));
                break;

              case "T":
                if (pcom == "Q" || pcom == "T") {
                  // In "T" case we have to take into account, if the previous command is Q/T.
                  d.qx = d.x * 2 - d.qx; // And make a reflection similar

                  d.qy = d.y * 2 - d.qy; // to case "S".
                } else {
                  // or something else or nothing
                  d.qx = d.x;
                  d.qy = d.y;
                }

                path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                break;

              case "Q":
                d.qx = path[1];
                d.qy = path[2];
                path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                break;

              case "L":
                path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
                break;

              case "H":
                path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
                break;

              case "V":
                path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
                break;

              case "Z":
                path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
                break;
            }

            return path;
          },
              fixArc = function fixArc(pp, i) {
            if (pp[i].length > 7) {
              pp[i].shift();
              var pi = pp[i];

              while (pi.length) {
                pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved

                p2 && (pcoms2[i] = "A"); // the same as above

                pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
              }

              pp.splice(i, 1);
              ii = mmax(p.length, p2 && p2.length || 0);
            }
          },
              fixM = function fixM(path1, path2, a1, a2, i) {
            if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
              path2.splice(i, 0, ["M", a2.x, a2.y]);
              a1.bx = 0;
              a1.by = 0;
              a1.x = path1[i][1];
              a1.y = path1[i][2];
              ii = mmax(p.length, p2 && p2.length || 0);
            }
          },
              pcoms1 = [],
              // path commands of original path p
          pcoms2 = [],
              // path commands of original path p2
          pfirst = "",
              // temporary holder for original path command
          pcom = ""; // holder for previous path command of original path


          for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
              {
                pcoms1[i] = pfirst; // Save current path command

                i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
              }

            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) {
              // the same procedures is done to p2
              p2[i] && (pfirst = p2[i][0]);

              if (pfirst != "C") {
                pcoms2[i] = pfirst;
                i && (pcom = pcoms2[i - 1]);
              }

              p2[i] = processPath(p2[i], attrs2, pcom);
              if (pcoms2[i] != "A" && pfirst == "C") pcoms2[i] = "C";
              fixArc(p2, i);
            }

            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
          }

          if (!p2) {
            pth.curve = pathClone(p);
          }

          return p2 ? [p, p2] : p;
        }, null, pathClone),
            parseDots = R._parseDots = cacher(function (gradient) {
          var dots = [];

          for (var i = 0, ii = gradient.length; i < ii; i++) {
            var dot = {},
                par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
            dot.color = R.getRGB(par[1]);

            if (dot.color.error) {
              return null;
            }

            dot.opacity = dot.color.opacity;
            dot.color = dot.color.hex;
            par[2] && (dot.offset = par[2] + "%");
            dots.push(dot);
          }

          for (i = 1, ii = dots.length - 1; i < ii; i++) {
            if (!dots[i].offset) {
              var start = toFloat(dots[i - 1].offset || 0),
                  end = 0;

              for (var j = i + 1; j < ii; j++) {
                if (dots[j].offset) {
                  end = dots[j].offset;
                  break;
                }
              }

              if (!end) {
                end = 100;
                j = ii;
              }

              end = toFloat(end);
              var d = (end - start) / (j - i + 1);

              for (; i < j; i++) {
                start += d;
                dots[i].offset = start + "%";
              }
            }
          }

          return dots;
        }),
            tear = R._tear = function (el, paper) {
          el == paper.top && (paper.top = el.prev);
          el == paper.bottom && (paper.bottom = el.next);
          el.next && (el.next.prev = el.prev);
          el.prev && (el.prev.next = el.next);
        },
            tofront = R._tofront = function (el, paper) {
          if (paper.top === el) {
            return;
          }

          tear(el, paper);
          el.next = null;
          el.prev = paper.top;
          paper.top.next = el;
          paper.top = el;
        },
            toback = R._toback = function (el, paper) {
          if (paper.bottom === el) {
            return;
          }

          tear(el, paper);
          el.next = paper.bottom;
          el.prev = null;
          paper.bottom.prev = el;
          paper.bottom = el;
        },
            insertafter = R._insertafter = function (el, el2, paper) {
          tear(el, paper);
          el2 == paper.top && (paper.top = el);
          el2.next && (el2.next.prev = el);
          el.next = el2.next;
          el.prev = el2;
          el2.next = el;
        },
            insertbefore = R._insertbefore = function (el, el2, paper) {
          tear(el, paper);
          el2 == paper.bottom && (paper.bottom = el);
          el2.prev && (el2.prev.next = el);
          el.prev = el2.prev;
          el2.prev = el;
          el.next = el2;
        },

        /*\
         * Raphael.toMatrix
         [ method ]
         **
         * Utility method
         **
         * Returns matrix of transformations applied to a given path
         > Parameters
         - path (string) path string
         - transform (string|array) transformation string
         = (object) @Matrix
        \*/
        toMatrix = R.toMatrix = function (path, transform) {
          var bb = pathDimensions(path),
              el = {
            _: {
              transform: E
            },
            getBBox: function getBBox() {
              return bb;
            }
          };
          extractTransform(el, transform);
          return el.matrix;
        },

        /*\
         * Raphael.transformPath
         [ method ]
         **
         * Utility method
         **
         * Returns path transformed by a given transformation
         > Parameters
         - path (string) path string
         - transform (string|array) transformation string
         = (string) path
        \*/
        transformPath = R.transformPath = function (path, transform) {
          return mapPath(path, toMatrix(path, transform));
        },
            extractTransform = R._extractTransform = function (el, tstr) {
          if (tstr == null) {
            return el._.transform;
          }

          tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
          var tdata = R.parseTransformString(tstr),
              deg = 0,
              dx = 0,
              dy = 0,
              sx = 1,
              sy = 1,
              _ = el._,
              m = new Matrix();
          _.transform = tdata || [];

          if (tdata) {
            for (var i = 0, ii = tdata.length; i < ii; i++) {
              var t = tdata[i],
                  tlen = t.length,
                  command = Str(t[0]).toLowerCase(),
                  absolute = t[0] != command,
                  inver = absolute ? m.invert() : 0,
                  x1,
                  y1,
                  x2,
                  y2,
                  bb;

              if (command == "t" && tlen == 3) {
                if (absolute) {
                  x1 = inver.x(0, 0);
                  y1 = inver.y(0, 0);
                  x2 = inver.x(t[1], t[2]);
                  y2 = inver.y(t[1], t[2]);
                  m.translate(x2 - x1, y2 - y1);
                } else {
                  m.translate(t[1], t[2]);
                }
              } else if (command == "r") {
                if (tlen == 2) {
                  bb = bb || el.getBBox(1);
                  m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                  deg += t[1];
                } else if (tlen == 4) {
                  if (absolute) {
                    x2 = inver.x(t[2], t[3]);
                    y2 = inver.y(t[2], t[3]);
                    m.rotate(t[1], x2, y2);
                  } else {
                    m.rotate(t[1], t[2], t[3]);
                  }

                  deg += t[1];
                }
              } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                  bb = bb || el.getBBox(1);
                  m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                  sx *= t[1];
                  sy *= t[tlen - 1];
                } else if (tlen == 5) {
                  if (absolute) {
                    x2 = inver.x(t[3], t[4]);
                    y2 = inver.y(t[3], t[4]);
                    m.scale(t[1], t[2], x2, y2);
                  } else {
                    m.scale(t[1], t[2], t[3], t[4]);
                  }

                  sx *= t[1];
                  sy *= t[2];
                }
              } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
              }

              _.dirtyT = 1;
              el.matrix = m;
            }
          }
          /*\
           * Element.matrix
           [ property (object) ]
           **
           * Keeps @Matrix object, which represents element transformation
          \*/


          el.matrix = m;
          _.sx = sx;
          _.sy = sy;
          _.deg = deg;
          _.dx = dx = m.e;
          _.dy = dy = m.f;

          if (sx == 1 && sy == 1 && !deg && _.bbox) {
            _.bbox.x += +dx;
            _.bbox.y += +dy;
          } else {
            _.dirtyT = 1;
          }
        },
            getEmpty = function getEmpty(item) {
          var l = item[0];

          switch (l.toLowerCase()) {
            case "t":
              return [l, 0, 0];

            case "m":
              return [l, 1, 0, 0, 1, 0, 0];

            case "r":
              if (item.length == 4) {
                return [l, 0, item[2], item[3]];
              } else {
                return [l, 0];
              }

            case "s":
              if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
              } else if (item.length == 3) {
                return [l, 1, 1];
              } else {
                return [l, 1];
              }

          }
        },
            equaliseTransform = R._equaliseTransform = function (t1, t2) {
          t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
          t1 = R.parseTransformString(t1) || [];
          t2 = R.parseTransformString(t2) || [];
          var maxlength = mmax(t1.length, t2.length),
              from = [],
              to = [],
              i = 0,
              j,
              jj,
              tt1,
              tt2;

          for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);

            if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
              return;
            }

            from[i] = [];
            to[i] = [];

            for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
              j in tt1 && (from[i][j] = tt1[j]);
              j in tt2 && (to[i][j] = tt2[j]);
            }
          }

          return {
            from: from,
            to: to
          };
        };

        R._getContainer = function (x, y, w, h) {
          var container;
          container = h == null && !R.is(x, "object") ? g.doc.getElementById(x) : x;

          if (container == null) {
            return;
          }

          if (container.tagName) {
            if (y == null) {
              return {
                container: container,
                width: container.style.pixelWidth || container.offsetWidth,
                height: container.style.pixelHeight || container.offsetHeight
              };
            } else {
              return {
                container: container,
                width: y,
                height: w
              };
            }
          }

          return {
            container: 1,
            x: x,
            y: y,
            width: w,
            height: h
          };
        };
        /*\
         * Raphael.pathToRelative
         [ method ]
         **
         * Utility method
         **
         * Converts path to relative form
         > Parameters
         - pathString (string|array) path string or array of segments
         = (array) array of segments.
        \*/


        R.pathToRelative = pathToRelative;
        R._engine = {};
        /*\
         * Raphael.path2curve
         [ method ]
         **
         * Utility method
         **
         * Converts path to a new path where all segments are cubic bezier curves.
         > Parameters
         - pathString (string|array) path string or array of segments
         = (array) array of segments.
        \*/

        R.path2curve = path2curve;
        /*\
         * Raphael.matrix
         [ method ]
         **
         * Utility method
         **
         * Returns matrix based on given parameters.
         > Parameters
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         = (object) @Matrix
        \*/

        R.matrix = function (a, b, c, d, e, f) {
          return new Matrix(a, b, c, d, e, f);
        };

        function Matrix(a, b, c, d, e, f) {
          if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
          } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
          }
        }

        (function (matrixproto) {
          /*\
           * Matrix.add
           [ method ]
           **
           * Adds given matrix to existing one.
           > Parameters
           - a (number)
           - b (number)
           - c (number)
           - d (number)
           - e (number)
           - f (number)
           or
           - matrix (object) @Matrix
          \*/
          matrixproto.add = function (a, b, c, d, e, f) {
            var out = [[], [], []],
                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
                x,
                y,
                z,
                res;

            if (a && a instanceof Matrix) {
              matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
            }

            for (x = 0; x < 3; x++) {
              for (y = 0; y < 3; y++) {
                res = 0;

                for (z = 0; z < 3; z++) {
                  res += m[x][z] * matrix[z][y];
                }

                out[x][y] = res;
              }
            }

            this.a = out[0][0];
            this.b = out[1][0];
            this.c = out[0][1];
            this.d = out[1][1];
            this.e = out[0][2];
            this.f = out[1][2];
          };
          /*\
           * Matrix.invert
           [ method ]
           **
           * Returns inverted version of the matrix
           = (object) @Matrix
          \*/


          matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
          };
          /*\
           * Matrix.clone
           [ method ]
           **
           * Returns copy of the matrix
           = (object) @Matrix
          \*/


          matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
          };
          /*\
           * Matrix.translate
           [ method ]
           **
           * Translate the matrix
           > Parameters
           - x (number)
           - y (number)
          \*/


          matrixproto.translate = function (x, y) {
            this.add(1, 0, 0, 1, x, y);
          };
          /*\
           * Matrix.scale
           [ method ]
           **
           * Scales the matrix
           > Parameters
           - x (number)
           - y (number) #optional
           - cx (number) #optional
           - cy (number) #optional
          \*/


          matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
            this.add(x, 0, 0, y, 0, 0);
            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
          };
          /*\
           * Matrix.rotate
           [ method ]
           **
           * Rotates the matrix
           > Parameters
           - a (number)
           - x (number)
           - y (number)
          \*/


          matrixproto.rotate = function (a, x, y) {
            a = R.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            this.add(1, 0, 0, 1, -x, -y);
          };
          /*\
           * Matrix.x
           [ method ]
           **
           * Return x coordinate for given point after transformation described by the matrix. See also @Matrix.y
           > Parameters
           - x (number)
           - y (number)
           = (number) x
          \*/


          matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
          };
          /*\
           * Matrix.y
           [ method ]
           **
           * Return y coordinate for given point after transformation described by the matrix. See also @Matrix.x
           > Parameters
           - x (number)
           - y (number)
           = (number) y
          \*/


          matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
          };

          matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
          };

          matrixproto.toString = function () {
            return R.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
          };

          matrixproto.toFilter = function () {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
          };

          matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
          };

          function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
          }

          function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
          }
          /*\
           * Matrix.split
           [ method ]
           **
           * Splits matrix into primitive transformations
           = (object) in format:
           o dx (number) translation by x
           o dy (number) translation by y
           o scalex (number) scale by x
           o scaley (number) scale by y
           o shear (number) shear
           o rotate (number) rotation in deg
           o isSimple (boolean) could it be represented via simple transformations
          \*/


          matrixproto.split = function () {
            var out = {}; // translation

            out.dx = this.e;
            out.dy = this.f; // scale and shear

            var row = [[this.a, this.c], [this.b, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);
            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];
            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley; // rotation

            var sin = -row[0][1],
                cos = row[1][1];

            if (cos < 0) {
              out.rotate = R.deg(math.acos(cos));

              if (sin < 0) {
                out.rotate = 360 - out.rotate;
              }
            } else {
              out.rotate = R.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
          };
          /*\
           * Matrix.toTransformString
           [ method ]
           **
           * Return transform string that represents given matrix
           = (string) transform string
          \*/


          matrixproto.toTransformString = function (shorter) {
            var s = shorter || this[split]();

            if (s.isSimple) {
              s.scalex = +s.scalex.toFixed(4);
              s.scaley = +s.scaley.toFixed(4);
              s.rotate = +s.rotate.toFixed(4);
              return (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) + (s.rotate ? "r" + [s.rotate, 0, 0] : E);
            } else {
              return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
          };
        })(Matrix.prototype);

        var preventDefault = function preventDefault() {
          this.returnValue = false;
        },
            preventTouch = function preventTouch() {
          return this.originalEvent.preventDefault();
        },
            stopPropagation = function stopPropagation() {
          this.cancelBubble = true;
        },
            stopTouch = function stopTouch() {
          return this.originalEvent.stopPropagation();
        },
            getEventPosition = function getEventPosition(e) {
          var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
              scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
          return {
            x: e.clientX + scrollX,
            y: e.clientY + scrollY
          };
        },
            addEvent = function () {
          if (g.doc.addEventListener) {
            return function (obj, type, fn, element) {
              var f = function f(e) {
                var pos = getEventPosition(e);
                return fn.call(element, e, pos.x, pos.y);
              };

              obj.addEventListener(type, f, false);

              if (supportsTouch && touchMap[type]) {
                var _f = function _f(e) {
                  var pos = getEventPosition(e),
                      olde = e;

                  for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                    if (e.targetTouches[i].target == obj) {
                      e = e.targetTouches[i];
                      e.originalEvent = olde;
                      e.preventDefault = preventTouch;
                      e.stopPropagation = stopTouch;
                      break;
                    }
                  }

                  return fn.call(element, e, pos.x, pos.y);
                };

                obj.addEventListener(touchMap[type], _f, false);
              }

              return function () {
                obj.removeEventListener(type, f, false);
                if (supportsTouch && touchMap[type]) obj.removeEventListener(touchMap[type], _f, false);
                return true;
              };
            };
          } else if (g.doc.attachEvent) {
            return function (obj, type, fn, element) {
              var f = function f(e) {
                e = e || g.win.event;
                var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                    scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                    x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                e.preventDefault = e.preventDefault || preventDefault;
                e.stopPropagation = e.stopPropagation || stopPropagation;
                return fn.call(element, e, x, y);
              };

              obj.attachEvent("on" + type, f);

              var detacher = function detacher() {
                obj.detachEvent("on" + type, f);
                return true;
              };

              return detacher;
            };
          }
        }(),
            drag = [],
            dragMove = function dragMove(e) {
          var x = e.clientX,
              y = e.clientY,
              scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
              scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
              dragi,
              j = drag.length;

          while (j--) {
            dragi = drag[j];

            if (supportsTouch && e.touches) {
              var i = e.touches.length,
                  touch;

              while (i--) {
                touch = e.touches[i];

                if (touch.identifier == dragi.el._drag.id) {
                  x = touch.clientX;
                  y = touch.clientY;
                  (e.originalEvent ? e.originalEvent : e).preventDefault();
                  break;
                }
              }
            } else {
              e.preventDefault();
            }

            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            g.win.opera && parent.removeChild(node);
            node.style.display = "none";
            o = dragi.el.paper.getElementByPoint(x, y);
            node.style.display = display;
            g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
          }
        },
            dragUp = function dragUp(e) {
          R.unmousemove(dragMove).unmouseup(dragUp);
          var i = drag.length,
              dragi;

          while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
          }

          drag = [];
        },

        /*\
         * Raphael.el
         [ property (object) ]
         **
         * You can add your own method to elements. This is useful when you want to hack default functionality or
         * want to wrap some common transformation or attributes in one method. In difference to canvas methods,
         * you can redefine element method at any time. Expending element methods wouldn’t affect set.
         > Usage
         | Raphael.el.red = function () {
         |     this.attr({fill: "#f00"});
         | };
         | // then use it
         | paper.circle(100, 100, 20).red();
        \*/
        elproto = R.el = {};
        /*\
         * Element.click
         [ method ]
         **
         * Adds event handler for click for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.unclick
         [ method ]
         **
         * Removes event handler for click for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.dblclick
         [ method ]
         **
         * Adds event handler for double click for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.undblclick
         [ method ]
         **
         * Removes event handler for double click for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.mousedown
         [ method ]
         **
         * Adds event handler for mousedown for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.unmousedown
         [ method ]
         **
         * Removes event handler for mousedown for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.mousemove
         [ method ]
         **
         * Adds event handler for mousemove for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.unmousemove
         [ method ]
         **
         * Removes event handler for mousemove for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.mouseout
         [ method ]
         **
         * Adds event handler for mouseout for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.unmouseout
         [ method ]
         **
         * Removes event handler for mouseout for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.mouseover
         [ method ]
         **
         * Adds event handler for mouseover for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.unmouseover
         [ method ]
         **
         * Removes event handler for mouseover for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.mouseup
         [ method ]
         **
         * Adds event handler for mouseup for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.unmouseup
         [ method ]
         **
         * Removes event handler for mouseup for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.touchstart
         [ method ]
         **
         * Adds event handler for touchstart for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.untouchstart
         [ method ]
         **
         * Removes event handler for touchstart for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.touchmove
         [ method ]
         **
         * Adds event handler for touchmove for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.untouchmove
         [ method ]
         **
         * Removes event handler for touchmove for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.touchend
         [ method ]
         **
         * Adds event handler for touchend for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.untouchend
         [ method ]
         **
         * Removes event handler for touchend for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.touchcancel
         [ method ]
         **
         * Adds event handler for touchcancel for the element.
         > Parameters
         - handler (function) handler for the event
         = (object) @Element
        \*/

        /*\
         * Element.untouchcancel
         [ method ]
         **
         * Removes event handler for touchcancel for the element.
         > Parameters
         - handler (function) #optional handler for the event
         = (object) @Element
        \*/


        for (var i = events.length; i--;) {
          (function (eventName) {
            R[eventName] = elproto[eventName] = function (fn, scope) {
              if (R.is(fn, "function")) {
                this.events = this.events || [];
                this.events.push({
                  name: eventName,
                  f: fn,
                  unbind: addEvent(this.shape || this.node || g.doc, eventName, fn, scope || this)
                });
              }

              return this;
            };

            R["un" + eventName] = elproto["un" + eventName] = function (fn) {
              var events = this.events || [],
                  l = events.length;

              while (l--) {
                if (events[l].name == eventName && (R.is(fn, "undefined") || events[l].f == fn)) {
                  events[l].unbind();
                  events.splice(l, 1);
                  !events.length && delete this.events;
                }
              }

              return this;
            };
          })(events[i]);
        }
        /*\
         * Element.data
         [ method ]
         **
         * Adds or retrieves given value associated with given key.
         **
         * See also @Element.removeData
         > Parameters
         - key (string) key to store data
         - value (any) #optional value to store
         = (object) @Element
         * or, if value is not specified:
         = (any) value
         * or, if key and value are not specified:
         = (object) Key/value pairs for all the data associated with the element.
         > Usage
         | for (var i = 0, i < 5, i++) {
         |     paper.circle(10 + 15 * i, 10, 10)
         |          .attr({fill: "#000"})
         |          .data("i", i)
         |          .click(function () {
         |             alert(this.data("i"));
         |          });
         | }
        \*/


        elproto.data = function (key, value) {
          var data = eldata[this.id] = eldata[this.id] || {};

          if (arguments.length == 0) {
            return data;
          }

          if (arguments.length == 1) {
            if (R.is(key, "object")) {
              for (var i in key) {
                if (key[has](i)) {
                  this.data(i, key[i]);
                }
              }

              return this;
            }

            eve("raphael.data.get." + this.id, this, data[key], key);
            return data[key];
          }

          data[key] = value;
          eve("raphael.data.set." + this.id, this, value, key);
          return this;
        };
        /*\
         * Element.removeData
         [ method ]
         **
         * Removes value associated with an element by given key.
         * If key is not provided, removes all the data of the element.
         > Parameters
         - key (string) #optional key
         = (object) @Element
        \*/


        elproto.removeData = function (key) {
          if (key == null) {
            eldata[this.id] = {};
          } else {
            eldata[this.id] && delete eldata[this.id][key];
          }

          return this;
        };
        /*\
        * Element.getData
        [ method ]
        **
        * Retrieves the element data
        = (object) data
        \*/


        elproto.getData = function () {
          return clone(eldata[this.id] || {});
        };
        /*\
         * Element.hover
         [ method ]
         **
         * Adds event handlers for hover for the element.
         > Parameters
         - f_in (function) handler for hover in
         - f_out (function) handler for hover out
         - icontext (object) #optional context for hover in handler
         - ocontext (object) #optional context for hover out handler
         = (object) @Element
        \*/


        elproto.hover = function (f_in, f_out, scope_in, scope_out) {
          return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
        };
        /*\
         * Element.unhover
         [ method ]
         **
         * Removes event handlers for hover for the element.
         > Parameters
         - f_in (function) handler for hover in
         - f_out (function) handler for hover out
         = (object) @Element
        \*/


        elproto.unhover = function (f_in, f_out) {
          return this.unmouseover(f_in).unmouseout(f_out);
        };

        var draggable = [];
        /*\
         * Element.drag
         [ method ]
         **
         * Adds event handlers for drag of the element.
         > Parameters
         - onmove (function) handler for moving
         - onstart (function) handler for drag start
         - onend (function) handler for drag end
         - mcontext (object) #optional context for moving handler
         - scontext (object) #optional context for drag start handler
         - econtext (object) #optional context for drag end handler
         * Additionally following `drag` events will be triggered: `drag.start.<id>` on start,
         * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element will be dragged over another element
         * `drag.over.<id>` will be fired as well.
         *
         * Start event and start handler will be called in specified context or in context of the element with following parameters:
         o x (number) x position of the mouse
         o y (number) y position of the mouse
         o event (object) DOM event object
         * Move event and move handler will be called in specified context or in context of the element with following parameters:
         o dx (number) shift by x from the start point
         o dy (number) shift by y from the start point
         o x (number) x position of the mouse
         o y (number) y position of the mouse
         o event (object) DOM event object
         * End event and end handler will be called in specified context or in context of the element with following parameters:
         o event (object) DOM event object
         = (object) @Element
        \*/

        elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
          function start(e) {
            (e.originalEvent || e).preventDefault();
            var x = e.clientX,
                y = e.clientY,
                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
            this._drag.id = e.identifier;

            if (supportsTouch && e.touches) {
              var i = e.touches.length,
                  touch;

              while (i--) {
                touch = e.touches[i];
                this._drag.id = touch.identifier;

                if (touch.identifier == this._drag.id) {
                  x = touch.clientX;
                  y = touch.clientY;
                  break;
                }
              }
            }

            this._drag.x = x + scrollX;
            this._drag.y = y + scrollY;
            !drag.length && R.mousemove(dragMove).mouseup(dragUp);
            drag.push({
              el: this,
              move_scope: move_scope,
              start_scope: start_scope,
              end_scope: end_scope
            });
            onstart && eve.on("raphael.drag.start." + this.id, onstart);
            onmove && eve.on("raphael.drag.move." + this.id, onmove);
            onend && eve.on("raphael.drag.end." + this.id, onend);
            eve("raphael.drag.start." + this.id, start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
          }

          this._drag = {};
          draggable.push({
            el: this,
            start: start
          });
          this.mousedown(start);
          return this;
        };
        /*\
         * Element.onDragOver
         [ method ]
         **
         * Shortcut for assigning event handler for `drag.over.<id>` event, where id is id of the element (see @Element.id).
         > Parameters
         - f (function) handler for event, first argument would be the element you are dragging over
        \*/


        elproto.onDragOver = function (f) {
          f ? eve.on("raphael.drag.over." + this.id, f) : eve.unbind("raphael.drag.over." + this.id);
        };
        /*\
         * Element.undrag
         [ method ]
         **
         * Removes all drag event handlers from given element.
        \*/


        elproto.undrag = function () {
          var i = draggable.length;

          while (i--) {
            if (draggable[i].el == this) {
              this.unmousedown(draggable[i].start);
              draggable.splice(i, 1);
              eve.unbind("raphael.drag.*." + this.id);
            }
          }

          !draggable.length && R.unmousemove(dragMove).unmouseup(dragUp);
          drag = [];
        };
        /*\
         * Paper.circle
         [ method ]
         **
         * Draws a circle.
         **
         > Parameters
         **
         - x (number) x coordinate of the centre
         - y (number) y coordinate of the centre
         - r (number) radius
         = (object) Raphaël element object with type “circle”
         **
         > Usage
         | var c = paper.circle(50, 50, 40);
        \*/


        paperproto.circle = function (x, y, r) {
          var out = R._engine.circle(this, x || 0, y || 0, r || 0);

          this.__set__ && this.__set__.push(out);
          return out;
        };
        /*\
         * Paper.rect
         [ method ]
         *
         * Draws a rectangle.
         **
         > Parameters
         **
         - x (number) x coordinate of the top left corner
         - y (number) y coordinate of the top left corner
         - width (number) width
         - height (number) height
         - r (number) #optional radius for rounded corners, default is 0
         = (object) Raphaël element object with type “rect”
         **
         > Usage
         | // regular rectangle
         | var c = paper.rect(10, 10, 50, 50);
         | // rectangle with rounded corners
         | var c = paper.rect(40, 40, 50, 50, 10);
        \*/


        paperproto.rect = function (x, y, w, h, r) {
          var out = R._engine.rect(this, x || 0, y || 0, w || 0, h || 0, r || 0);

          this.__set__ && this.__set__.push(out);
          return out;
        };
        /*\
         * Paper.ellipse
         [ method ]
         **
         * Draws an ellipse.
         **
         > Parameters
         **
         - x (number) x coordinate of the centre
         - y (number) y coordinate of the centre
         - rx (number) horizontal radius
         - ry (number) vertical radius
         = (object) Raphaël element object with type “ellipse”
         **
         > Usage
         | var c = paper.ellipse(50, 50, 40, 20);
        \*/


        paperproto.ellipse = function (x, y, rx, ry) {
          var out = R._engine.ellipse(this, x || 0, y || 0, rx || 0, ry || 0);

          this.__set__ && this.__set__.push(out);
          return out;
        };
        /*\
         * Paper.path
         [ method ]
         **
         * Creates a path element by given path data string.
         > Parameters
         - pathString (string) #optional path string in SVG format.
         * Path string consists of one-letter commands, followed by comma seprarated arguments in numercal form. Example:
         | "M10,20L30,40"
         * Here we can see two commands: “M”, with arguments `(10, 20)` and “L” with arguments `(30, 40)`. Upper case letter mean command is absolute, lower case—relative.
         *
         # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a>.</p>
         # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
         # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
         # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
         # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
         # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
         # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
         # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
         # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
         # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
         # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
         # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
         # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
         * * “Catmull-Rom curveto” is a not standard SVG command and added in 2.0 to make life easier.
         * Note: there is a special case when path consist of just three commands: “M10,10R…z”. In this case path will smoothly connects to its beginning.
         > Usage
         | var c = paper.path("M10 10L90 90");
         | // draw a diagonal line:
         | // move to 10,10, line to 90,90
         * For example of path strings, check out these icons: http://raphaeljs.com/icons/
        \*/


        paperproto.path = function (pathString) {
          pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);

          var out = R._engine.path(R.format[apply](R, arguments), this);

          this.__set__ && this.__set__.push(out);
          return out;
        };
        /*\
         * Paper.image
         [ method ]
         **
         * Embeds an image into the surface.
         **
         > Parameters
         **
         - src (string) URI of the source image
         - x (number) x coordinate position
         - y (number) y coordinate position
         - width (number) width of the image
         - height (number) height of the image
         = (object) Raphaël element object with type “image”
         **
         > Usage
         | var c = paper.image("apple.png", 10, 10, 80, 80);
        \*/


        paperproto.image = function (src, x, y, w, h) {
          var out = R._engine.image(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);

          this.__set__ && this.__set__.push(out);
          return out;
        };
        /*\
         * Paper.text
         [ method ]
         **
         * Draws a text string. If you need line breaks, put “\n” in the string.
         **
         > Parameters
         **
         - x (number) x coordinate position
         - y (number) y coordinate position
         - text (string) The text string to draw
         = (object) Raphaël element object with type “text”
         **
         > Usage
         | var t = paper.text(50, 50, "Raphaël\nkicks\nbutt!");
        \*/


        paperproto.text = function (x, y, text) {
          var out = R._engine.text(this, x || 0, y || 0, Str(text));

          this.__set__ && this.__set__.push(out);
          return out;
        };
        /*\
         * Paper.set
         [ method ]
         **
         * Creates array-like object to keep and operate several elements at once.
         * Warning: it doesn’t create any elements for itself in the page, it just groups existing elements.
         * Sets act as pseudo elements — all methods available to an element can be used on a set.
         = (object) array-like object that represents set of elements
         **
         > Usage
         | var st = paper.set();
         | st.push(
         |     paper.circle(10, 10, 5),
         |     paper.circle(30, 10, 5)
         | );
         | st.attr({fill: "red"}); // changes the fill of both circles
        \*/


        paperproto.set = function (itemsArray) {
          !R.is(itemsArray, "array") && (itemsArray = Array.prototype.splice.call(arguments, 0, arguments.length));
          var out = new Set(itemsArray);
          this.__set__ && this.__set__.push(out);
          out["paper"] = this;
          out["type"] = "set";
          return out;
        };
        /*\
         * Paper.setStart
         [ method ]
         **
         * Creates @Paper.set. All elements that will be created after calling this method and before calling
         * @Paper.setFinish will be added to the set.
         **
         > Usage
         | paper.setStart();
         | paper.circle(10, 10, 5),
         | paper.circle(30, 10, 5)
         | var st = paper.setFinish();
         | st.attr({fill: "red"}); // changes the fill of both circles
        \*/


        paperproto.setStart = function (set) {
          this.__set__ = set || this.set();
        };
        /*\
         * Paper.setFinish
         [ method ]
         **
         * See @Paper.setStart. This method finishes catching and returns resulting set.
         **
         = (object) set
        \*/


        paperproto.setFinish = function (set) {
          var out = this.__set__;
          delete this.__set__;
          return out;
        };
        /*\
         * Paper.getSize
         [ method ]
         **
         * Obtains current paper actual size.
         **
         = (object)
         \*/


        paperproto.getSize = function () {
          var container = this.canvas.parentNode;
          return {
            width: container.offsetWidth,
            height: container.offsetHeight
          };
        };
        /*\
         * Paper.setSize
         [ method ]
         **
         * If you need to change dimensions of the canvas call this method
         **
         > Parameters
         **
         - width (number) new width of the canvas
         - height (number) new height of the canvas
        \*/


        paperproto.setSize = function (width, height) {
          return R._engine.setSize.call(this, width, height);
        };
        /*\
         * Paper.setViewBox
         [ method ]
         **
         * Sets the view box of the paper. Practically it gives you ability to zoom and pan whole paper surface by
         * specifying new boundaries.
         **
         > Parameters
         **
         - x (number) new x position, default is `0`
         - y (number) new y position, default is `0`
         - w (number) new width of the canvas
         - h (number) new height of the canvas
         - fit (boolean) `true` if you want graphics to fit into new boundary box
        \*/


        paperproto.setViewBox = function (x, y, w, h, fit) {
          return R._engine.setViewBox.call(this, x, y, w, h, fit);
        };
        /*\
         * Paper.top
         [ property ]
         **
         * Points to the topmost element on the paper
        \*/

        /*\
         * Paper.bottom
         [ property ]
         **
         * Points to the bottom element on the paper
        \*/


        paperproto.top = paperproto.bottom = null;
        /*\
         * Paper.raphael
         [ property ]
         **
         * Points to the @Raphael object/function
        \*/

        paperproto.raphael = R;

        var getOffset = function getOffset(elem) {
          var box = elem.getBoundingClientRect(),
              doc = elem.ownerDocument,
              body = doc.body,
              docElem = doc.documentElement,
              clientTop = docElem.clientTop || body.clientTop || 0,
              clientLeft = docElem.clientLeft || body.clientLeft || 0,
              top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
              left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
          return {
            y: top,
            x: left
          };
        };
        /*\
         * Paper.getElementByPoint
         [ method ]
         **
         * Returns you topmost element under given point.
         **
         = (object) Raphaël element object
         > Parameters
         **
         - x (number) x coordinate from the top left corner of the window
         - y (number) y coordinate from the top left corner of the window
         > Usage
         | paper.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
        \*/


        paperproto.getElementByPoint = function (x, y) {
          var paper = this,
              svg = paper.canvas,
              target = g.doc.elementFromPoint(x, y);

          if (g.win.opera && target.tagName == "svg") {
            var so = getOffset(svg),
                sr = svg.createSVGRect();
            sr.x = x - so.x;
            sr.y = y - so.y;
            sr.width = sr.height = 1;
            var hits = svg.getIntersectionList(sr, null);

            if (hits.length) {
              target = hits[hits.length - 1];
            }
          }

          if (!target) {
            return null;
          }

          while (target.parentNode && target != svg.parentNode && !target.raphael) {
            target = target.parentNode;
          }

          target == paper.canvas.parentNode && (target = svg);
          target = target && target.raphael ? paper.getById(target.raphaelid) : null;
          return target;
        };
        /*\
         * Paper.getElementsByBBox
         [ method ]
         **
         * Returns set of elements that have an intersecting bounding box
         **
         > Parameters
         **
         - bbox (object) bbox to check with
         = (object) @Set
         \*/


        paperproto.getElementsByBBox = function (bbox) {
          var set = this.set();
          this.forEach(function (el) {
            if (R.isBBoxIntersect(el.getBBox(), bbox)) {
              set.push(el);
            }
          });
          return set;
        };
        /*\
         * Paper.getById
         [ method ]
         **
         * Returns you element by its internal ID.
         **
         > Parameters
         **
         - id (number) id
         = (object) Raphaël element object
        \*/


        paperproto.getById = function (id) {
          var bot = this.bottom;

          while (bot) {
            if (bot.id == id) {
              return bot;
            }

            bot = bot.next;
          }

          return null;
        };
        /*\
         * Paper.forEach
         [ method ]
         **
         * Executes given function for each element on the paper
         *
         * If callback function returns `false` it will stop loop running.
         **
         > Parameters
         **
         - callback (function) function to run
         - thisArg (object) context object for the callback
         = (object) Paper object
         > Usage
         | paper.forEach(function (el) {
         |     el.attr({ stroke: "blue" });
         | });
        \*/


        paperproto.forEach = function (callback, thisArg) {
          var bot = this.bottom;

          while (bot) {
            if (callback.call(thisArg, bot) === false) {
              return this;
            }

            bot = bot.next;
          }

          return this;
        };
        /*\
         * Paper.getElementsByPoint
         [ method ]
         **
         * Returns set of elements that have common point inside
         **
         > Parameters
         **
         - x (number) x coordinate of the point
         - y (number) y coordinate of the point
         = (object) @Set
        \*/


        paperproto.getElementsByPoint = function (x, y) {
          var set = this.set();
          this.forEach(function (el) {
            if (el.isPointInside(x, y)) {
              set.push(el);
            }
          });
          return set;
        };

        function x_y() {
          return this.x + S + this.y;
        }

        function x_y_w_h() {
          return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
        }
        /*\
         * Element.isPointInside
         [ method ]
         **
         * Determine if given point is inside this element’s shape
         **
         > Parameters
         **
         - x (number) x coordinate of the point
         - y (number) y coordinate of the point
         = (boolean) `true` if point inside the shape
        \*/


        elproto.isPointInside = function (x, y) {
          var rp = this.realPath = getPath[this.type](this);

          if (this.attr('transform') && this.attr('transform').length) {
            rp = R.transformPath(rp, this.attr('transform'));
          }

          return R.isPointInsidePath(rp, x, y);
        };
        /*\
         * Element.getBBox
         [ method ]
         **
         * Return bounding box for a given element
         **
         > Parameters
         **
         - isWithoutTransform (boolean) flag, `true` if you want to have bounding box before transformations. Default is `false`.
         = (object) Bounding box object:
         o {
         o     x: (number) top left corner x
         o     y: (number) top left corner y
         o     x2: (number) bottom right corner x
         o     y2: (number) bottom right corner y
         o     width: (number) width
         o     height: (number) height
         o }
        \*/


        elproto.getBBox = function (isWithoutTransform) {
          if (this.removed) {
            return {};
          }

          var _ = this._;

          if (isWithoutTransform) {
            if (_.dirty || !_.bboxwt) {
              this.realPath = getPath[this.type](this);
              _.bboxwt = pathDimensions(this.realPath);
              _.bboxwt.toString = x_y_w_h;
              _.dirty = 0;
            }

            return _.bboxwt;
          }

          if (_.dirty || _.dirtyT || !_.bbox) {
            if (_.dirty || !this.realPath) {
              _.bboxwt = 0;
              this.realPath = getPath[this.type](this);
            }

            _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));
            _.bbox.toString = x_y_w_h;
            _.dirty = _.dirtyT = 0;
          }

          return _.bbox;
        };
        /*\
         * Element.clone
         [ method ]
         **
         = (object) clone of a given element
         **
        \*/


        elproto.clone = function () {
          if (this.removed) {
            return null;
          }

          var out = this.paper[this.type]().attr(this.attr());
          this.__set__ && this.__set__.push(out);
          return out;
        };
        /*\
         * Element.glow
         [ method ]
         **
         * Return set of elements that create glow-like effect around given element. See @Paper.set.
         *
         * Note: Glow is not connected to the element. If you change element attributes it won’t adjust itself.
         **
         > Parameters
         **
         - glow (object) #optional parameters object with all properties optional:
         o {
         o     width (number) size of the glow, default is `10`
         o     fill (boolean) will it be filled, default is `false`
         o     opacity (number) opacity, default is `0.5`
         o     offsetx (number) horizontal offset, default is `0`
         o     offsety (number) vertical offset, default is `0`
         o     color (string) glow colour, default is `black`
         o }
         = (object) @Paper.set of elements that represents glow
        \*/


        elproto.glow = function (glow) {
          if (this.type == "text") {
            return null;
          }

          glow = glow || {};
          var s = {
            width: (glow.width || 10) + (+this.attr("stroke-width") || 1),
            fill: glow.fill || false,
            opacity: glow.opacity == null ? .5 : glow.opacity,
            offsetx: glow.offsetx || 0,
            offsety: glow.offsety || 0,
            color: glow.color || "#000"
          },
              c = s.width / 2,
              r = this.paper,
              out = r.set(),
              path = this.realPath || getPath[this.type](this);
          path = this.matrix ? mapPath(path, this.matrix) : path;

          for (var i = 1; i < c + 1; i++) {
            out.push(r.path(path).attr({
              stroke: s.color,
              fill: s.fill ? s.color : "none",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-width": +(s.width / c * i).toFixed(3),
              opacity: +(s.opacity / c).toFixed(3)
            }));
          }

          return out.insertBefore(this).translate(s.offsetx, s.offsety);
        };

        var curveslengths = {},
            getPointAtSegmentLength = function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
          if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
          } else {
            return R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTatLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
          }
        },
            getLengthFactory = function getLengthFactory(istotal, subpath) {
          return function (path, length, onlystart) {
            path = path2curve(path);
            var x,
                y,
                p,
                l,
                sp = "",
                subpaths = {},
                point,
                len = 0;

            for (var i = 0, ii = path.length; i < ii; i++) {
              p = path[i];

              if (p[0] == "M") {
                x = +p[1];
                y = +p[2];
              } else {
                l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);

                if (len + l > length) {
                  if (subpath && !subpaths.start) {
                    point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                    sp += ["C" + point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];

                    if (onlystart) {
                      return sp;
                    }

                    subpaths.start = sp;
                    sp = ["M" + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();
                    len += l;
                    x = +p[5];
                    y = +p[6];
                    continue;
                  }

                  if (!istotal && !subpath) {
                    point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                    return {
                      x: point.x,
                      y: point.y,
                      alpha: point.alpha
                    };
                  }
                }

                len += l;
                x = +p[5];
                y = +p[6];
              }

              sp += p.shift() + p;
            }

            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            point.alpha && (point = {
              x: point.x,
              y: point.y,
              alpha: point.alpha
            });
            return point;
          };
        };

        var getTotalLength = getLengthFactory(1),
            getPointAtLength = getLengthFactory(),
            getSubpathsAtLength = getLengthFactory(0, 1);
        /*\
         * Raphael.getTotalLength
         [ method ]
         **
         * Returns length of the given path in pixels.
         **
         > Parameters
         **
         - path (string) SVG path string.
         **
         = (number) length.
        \*/

        R.getTotalLength = getTotalLength;
        /*\
         * Raphael.getPointAtLength
         [ method ]
         **
         * Return coordinates of the point located at the given length on the given path.
         **
         > Parameters
         **
         - path (string) SVG path string
         - length (number)
         **
         = (object) representation of the point:
         o {
         o     x: (number) x coordinate
         o     y: (number) y coordinate
         o     alpha: (number) angle of derivative
         o }
        \*/

        R.getPointAtLength = getPointAtLength;
        /*\
         * Raphael.getSubpath
         [ method ]
         **
         * Return subpath of a given path from given length to given length.
         **
         > Parameters
         **
         - path (string) SVG path string
         - from (number) position of the start of the segment
         - to (number) position of the end of the segment
         **
         = (string) pathstring for the segment
        \*/

        R.getSubpath = function (path, from, to) {
          if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
          }

          var a = getSubpathsAtLength(path, to, 1);
          return from ? getSubpathsAtLength(a, from).end : a;
        };
        /*\
         * Element.getTotalLength
         [ method ]
         **
         * Returns length of the path in pixels. Only works for element of “path” type.
         = (number) length.
        \*/


        elproto.getTotalLength = function () {
          var path = this.getPath();

          if (!path) {
            return;
          }

          if (this.node.getTotalLength) {
            return this.node.getTotalLength();
          }

          return getTotalLength(path);
        };
        /*\
         * Element.getPointAtLength
         [ method ]
         **
         * Return coordinates of the point located at the given length on the given path. Only works for element of “path” type.
         **
         > Parameters
         **
         - length (number)
         **
         = (object) representation of the point:
         o {
         o     x: (number) x coordinate
         o     y: (number) y coordinate
         o     alpha: (number) angle of derivative
         o }
        \*/


        elproto.getPointAtLength = function (length) {
          var path = this.getPath();

          if (!path) {
            return;
          }

          return getPointAtLength(path, length);
        };
        /*\
         * Element.getPath
         [ method ]
         **
         * Returns path of the element. Only works for elements of “path” type and simple elements like circle.
         = (object) path
         **
        \*/


        elproto.getPath = function () {
          var path,
              getPath = R._getPath[this.type];

          if (this.type == "text" || this.type == "set") {
            return;
          }

          if (getPath) {
            path = getPath(this);
          }

          return path;
        };
        /*\
         * Element.getSubpath
         [ method ]
         **
         * Return subpath of a given element from given length to given length. Only works for element of “path” type.
         **
         > Parameters
         **
         - from (number) position of the start of the segment
         - to (number) position of the end of the segment
         **
         = (string) pathstring for the segment
        \*/


        elproto.getSubpath = function (from, to) {
          var path = this.getPath();

          if (!path) {
            return;
          }

          return R.getSubpath(path, from, to);
        };
        /*\
         * Raphael.easing_formulas
         [ property ]
         **
         * Object that contains easing formulas for animation. You could extend it with your own. By default it has following list of easing:
         # <ul>
         #     <li>“linear”</li>
         #     <li>“&lt;” or “easeIn” or “ease-in”</li>
         #     <li>“>” or “easeOut” or “ease-out”</li>
         #     <li>“&lt;>” or “easeInOut” or “ease-in-out”</li>
         #     <li>“backIn” or “back-in”</li>
         #     <li>“backOut” or “back-out”</li>
         #     <li>“elastic”</li>
         #     <li>“bounce”</li>
         # </ul>
         # <p>See also <a href="http://raphaeljs.com/easing.html">Easing demo</a>.</p>
        \*/


        var ef = R.easing_formulas = {
          linear: function linear(n) {
            return n;
          },
          "<": function _(n) {
            return pow(n, 1.7);
          },
          ">": function _(n) {
            return pow(n, .48);
          },
          "<>": function _(n) {
            var q = .48 - n / 1.04,
                Q = math.sqrt(.1734 + q * q),
                x = Q - q,
                X = pow(abs(x), 1 / 3) * (x < 0 ? -1 : 1),
                y = -Q - q,
                Y = pow(abs(y), 1 / 3) * (y < 0 ? -1 : 1),
                t = X + Y + .5;
            return (1 - t) * 3 * t * t + t * t * t;
          },
          backIn: function backIn(n) {
            var s = 1.70158;
            return n * n * ((s + 1) * n - s);
          },
          backOut: function backOut(n) {
            n = n - 1;
            var s = 1.70158;
            return n * n * ((s + 1) * n + s) + 1;
          },
          elastic: function elastic(n) {
            if (n == !!n) {
              return n;
            }

            return pow(2, -10 * n) * math.sin((n - .075) * (2 * PI) / .3) + 1;
          },
          bounce: function bounce(n) {
            var s = 7.5625,
                p = 2.75,
                l;

            if (n < 1 / p) {
              l = s * n * n;
            } else {
              if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
              } else {
                if (n < 2.5 / p) {
                  n -= 2.25 / p;
                  l = s * n * n + .9375;
                } else {
                  n -= 2.625 / p;
                  l = s * n * n + .984375;
                }
              }
            }

            return l;
          }
        };
        ef.easeIn = ef["ease-in"] = ef["<"];
        ef.easeOut = ef["ease-out"] = ef[">"];
        ef.easeInOut = ef["ease-in-out"] = ef["<>"];
        ef["back-in"] = ef.backIn;
        ef["back-out"] = ef.backOut;

        var animationElements = [],
            requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
          setTimeout(callback, 16);
        },
            animation = function animation() {
          var Now = +new Date(),
              l = 0;

          for (; l < animationElements.length; l++) {
            var e = animationElements[l];

            if (e.el.removed || e.paused) {
              continue;
            }

            var time = Now - e.start,
                ms = e.ms,
                easing = e.easing,
                from = e.from,
                diff = e.diff,
                to = e.to,
                t = e.t,
                that = e.el,
                set = {},
                now,
                init = {},
                key;

            if (e.initstatus) {
              time = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * ms;
              e.status = e.initstatus;
              delete e.initstatus;
              e.stop && animationElements.splice(l--, 1);
            } else {
              e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;
            }

            if (time < 0) {
              continue;
            }

            if (time < ms) {
              var pos = easing(time / ms);

              for (var attr in from) {
                if (from[has](attr)) {
                  switch (availableAnimAttrs[attr]) {
                    case nu:
                      now = +from[attr] + pos * ms * diff[attr];
                      break;

                    case "colour":
                      now = "rgb(" + [upto255(round(from[attr].r + pos * ms * diff[attr].r)), upto255(round(from[attr].g + pos * ms * diff[attr].g)), upto255(round(from[attr].b + pos * ms * diff[attr].b))].join(",") + ")";
                      break;

                    case "path":
                      now = [];

                      for (var i = 0, ii = from[attr].length; i < ii; i++) {
                        now[i] = [from[attr][i][0]];

                        for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
                          now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];
                        }

                        now[i] = now[i].join(S);
                      }

                      now = now.join(S);
                      break;

                    case "transform":
                      if (diff[attr].real) {
                        now = [];

                        for (i = 0, ii = from[attr].length; i < ii; i++) {
                          now[i] = [from[attr][i][0]];

                          for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                            now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];
                          }
                        }
                      } else {
                        var get = function get(i) {
                          return +from[attr][i] + pos * ms * diff[attr][i];
                        }; // now = [["r", get(2), 0, 0], ["t", get(3), get(4)], ["s", get(0), get(1), 0, 0]];


                        now = [["m", get(0), get(1), get(2), get(3), get(4), get(5)]];
                      }

                      break;

                    case "csv":
                      if (attr == "clip-rect") {
                        now = [];
                        i = 4;

                        while (i--) {
                          now[i] = +from[attr][i] + pos * ms * diff[attr][i];
                        }
                      }

                      break;

                    default:
                      var from2 = [][concat](from[attr]);
                      now = [];
                      i = that.paper.customAttributes[attr].length;

                      while (i--) {
                        now[i] = +from2[i] + pos * ms * diff[attr][i];
                      }

                      break;
                  }

                  set[attr] = now;
                }
              }

              that.attr(set);

              (function (id, that, anim) {
                setTimeout(function () {
                  eve("raphael.anim.frame." + id, that, anim);
                });
              })(that.id, that, e.anim);
            } else {
              (function (f, el, a) {
                setTimeout(function () {
                  eve("raphael.anim.frame." + el.id, el, a);
                  eve("raphael.anim.finish." + el.id, el, a);
                  R.is(f, "function") && f.call(el);
                });
              })(e.callback, that, e.anim);

              that.attr(to);
              animationElements.splice(l--, 1);

              if (e.repeat > 1 && !e.next) {
                for (key in to) {
                  if (to[has](key)) {
                    init[key] = e.totalOrigin[key];
                  }
                }

                e.el.attr(init);
                runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);
              }

              if (e.next && !e.stop) {
                runAnimation(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
              }
            }
          }

          animationElements.length && requestAnimFrame(animation);
        },
            upto255 = function upto255(color) {
          return color > 255 ? 255 : color < 0 ? 0 : color;
        };
        /*\
         * Element.animateWith
         [ method ]
         **
         * Acts similar to @Element.animate, but ensure that given animation runs in sync with another given element.
         **
         > Parameters
         **
         - el (object) element to sync with
         - anim (object) animation to sync with
         - params (object) #optional final attributes for the element, see also @Element.attr
         - ms (number) #optional number of milliseconds for animation to run
         - easing (string) #optional easing type. Accept on of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
         - callback (function) #optional callback function. Will be called at the end of animation.
         * or
         - element (object) element to sync with
         - anim (object) animation to sync with
         - animation (object) #optional animation object, see @Raphael.animation
         **
         = (object) original element
        \*/


        elproto.animateWith = function (el, anim, params, ms, easing, callback) {
          var element = this;

          if (element.removed) {
            callback && callback.call(element);
            return element;
          }

          var a = params instanceof Animation ? params : R.animation(params, ms, easing, callback),
              x,
              y;
          runAnimation(a, element, a.percents[0], null, element.attr());

          for (var i = 0, ii = animationElements.length; i < ii; i++) {
            if (animationElements[i].anim == anim && animationElements[i].el == el) {
              animationElements[ii - 1].start = animationElements[i].start;
              break;
            }
          }

          return element; //
          //
          // var a = params ? R.animation(params, ms, easing, callback) : anim,
          //     status = element.status(anim);
          // return this.animate(a).status(a, status * anim.ms / a.ms);
        };

        function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
          var cx = 3 * p1x,
              bx = 3 * (p2x - p1x) - cx,
              ax = 1 - cx - bx,
              cy = 3 * p1y,
              by = 3 * (p2y - p1y) - cy,
              ay = 1 - cy - by;

          function sampleCurveX(t) {
            return ((ax * t + bx) * t + cx) * t;
          }

          function solve(x, epsilon) {
            var t = solveCurveX(x, epsilon);
            return ((ay * t + by) * t + cy) * t;
          }

          function solveCurveX(x, epsilon) {
            var t0, t1, t2, x2, d2, i;

            for (t2 = x, i = 0; i < 8; i++) {
              x2 = sampleCurveX(t2) - x;

              if (abs(x2) < epsilon) {
                return t2;
              }

              d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;

              if (abs(d2) < 1e-6) {
                break;
              }

              t2 = t2 - x2 / d2;
            }

            t0 = 0;
            t1 = 1;
            t2 = x;

            if (t2 < t0) {
              return t0;
            }

            if (t2 > t1) {
              return t1;
            }

            while (t0 < t1) {
              x2 = sampleCurveX(t2);

              if (abs(x2 - x) < epsilon) {
                return t2;
              }

              if (x > x2) {
                t0 = t2;
              } else {
                t1 = t2;
              }

              t2 = (t1 - t0) / 2 + t0;
            }

            return t2;
          }

          return solve(t, 1 / (200 * duration));
        }

        elproto.onAnimation = function (f) {
          f ? eve.on("raphael.anim.frame." + this.id, f) : eve.unbind("raphael.anim.frame." + this.id);
          return this;
        };

        function Animation(anim, ms) {
          var percents = [],
              newAnim = {};
          this.ms = ms;
          this.times = 1;

          if (anim) {
            for (var attr in anim) {
              if (anim[has](attr)) {
                newAnim[toFloat(attr)] = anim[attr];
                percents.push(toFloat(attr));
              }
            }

            percents.sort(sortByNumber);
          }

          this.anim = newAnim;
          this.top = percents[percents.length - 1];
          this.percents = percents;
        }
        /*\
         * Animation.delay
         [ method ]
         **
         * Creates a copy of existing animation object with given delay.
         **
         > Parameters
         **
         - delay (number) number of ms to pass between animation start and actual animation
         **
         = (object) new altered Animation object
         | var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
         | circle1.animate(anim); // run the given animation immediately
         | circle2.animate(anim.delay(500)); // run the given animation after 500 ms
        \*/


        Animation.prototype.delay = function (delay) {
          var a = new Animation(this.anim, this.ms);
          a.times = this.times;
          a.del = +delay || 0;
          return a;
        };
        /*\
         * Animation.repeat
         [ method ]
         **
         * Creates a copy of existing animation object with given repetition.
         **
         > Parameters
         **
         - repeat (number) number iterations of animation. For infinite animation pass `Infinity`
         **
         = (object) new altered Animation object
        \*/


        Animation.prototype.repeat = function (times) {
          var a = new Animation(this.anim, this.ms);
          a.del = this.del;
          a.times = math.floor(mmax(times, 0)) || 1;
          return a;
        };

        function runAnimation(anim, element, percent, status, totalOrigin, times) {
          percent = toFloat(percent);
          var params,
              isInAnim,
              isInAnimSet,
              percents = [],
              next,
              prev,
              timestamp,
              ms = anim.ms,
              from = {},
              to = {},
              diff = {};

          if (status) {
            for (i = 0, ii = animationElements.length; i < ii; i++) {
              var e = animationElements[i];

              if (e.el.id == element.id && e.anim == anim) {
                if (e.percent != percent) {
                  animationElements.splice(i, 1);
                  isInAnimSet = 1;
                } else {
                  isInAnim = e;
                }

                element.attr(e.totalOrigin);
                break;
              }
            }
          } else {
            status = +to; // NaN
          }

          for (var i = 0, ii = anim.percents.length; i < ii; i++) {
            if (anim.percents[i] == percent || anim.percents[i] > status * anim.top) {
              percent = anim.percents[i];
              prev = anim.percents[i - 1] || 0;
              ms = ms / anim.top * (percent - prev);
              next = anim.percents[i + 1];
              params = anim.anim[percent];
              break;
            } else if (status) {
              element.attr(anim.anim[anim.percents[i]]);
            }
          }

          if (!params) {
            return;
          }

          if (!isInAnim) {
            for (var attr in params) {
              if (params[has](attr)) {
                if (availableAnimAttrs[has](attr) || element.paper.customAttributes[has](attr)) {
                  from[attr] = element.attr(attr);
                  from[attr] == null && (from[attr] = availableAttrs[attr]);
                  to[attr] = params[attr];

                  switch (availableAnimAttrs[attr]) {
                    case nu:
                      diff[attr] = (to[attr] - from[attr]) / ms;
                      break;

                    case "colour":
                      from[attr] = R.getRGB(from[attr]);
                      var toColour = R.getRGB(to[attr]);
                      diff[attr] = {
                        r: (toColour.r - from[attr].r) / ms,
                        g: (toColour.g - from[attr].g) / ms,
                        b: (toColour.b - from[attr].b) / ms
                      };
                      break;

                    case "path":
                      var pathes = path2curve(from[attr], to[attr]),
                          toPath = pathes[1];
                      from[attr] = pathes[0];
                      diff[attr] = [];

                      for (i = 0, ii = from[attr].length; i < ii; i++) {
                        diff[attr][i] = [0];

                        for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
                          diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
                        }
                      }

                      break;

                    case "transform":
                      var _ = element._,
                          eq = equaliseTransform(_[attr], to[attr]);

                      if (eq) {
                        from[attr] = eq.from;
                        to[attr] = eq.to;
                        diff[attr] = [];
                        diff[attr].real = true;

                        for (i = 0, ii = from[attr].length; i < ii; i++) {
                          diff[attr][i] = [from[attr][i][0]];

                          for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                            diff[attr][i][j] = (to[attr][i][j] - from[attr][i][j]) / ms;
                          }
                        }
                      } else {
                        var m = element.matrix || new Matrix(),
                            to2 = {
                          _: {
                            transform: _.transform
                          },
                          getBBox: function getBBox() {
                            return element.getBBox(1);
                          }
                        };
                        from[attr] = [m.a, m.b, m.c, m.d, m.e, m.f];
                        extractTransform(to2, to[attr]);
                        to[attr] = to2._.transform;
                        diff[attr] = [(to2.matrix.a - m.a) / ms, (to2.matrix.b - m.b) / ms, (to2.matrix.c - m.c) / ms, (to2.matrix.d - m.d) / ms, (to2.matrix.e - m.e) / ms, (to2.matrix.f - m.f) / ms]; // from[attr] = [_.sx, _.sy, _.deg, _.dx, _.dy];
                        // var to2 = {_:{}, getBBox: function () { return element.getBBox(); }};
                        // extractTransform(to2, to[attr]);
                        // diff[attr] = [
                        //     (to2._.sx - _.sx) / ms,
                        //     (to2._.sy - _.sy) / ms,
                        //     (to2._.deg - _.deg) / ms,
                        //     (to2._.dx - _.dx) / ms,
                        //     (to2._.dy - _.dy) / ms
                        // ];
                      }

                      break;

                    case "csv":
                      var values = Str(params[attr])[split](separator),
                          from2 = Str(from[attr])[split](separator);

                      if (attr == "clip-rect") {
                        from[attr] = from2;
                        diff[attr] = [];
                        i = from2.length;

                        while (i--) {
                          diff[attr][i] = (values[i] - from[attr][i]) / ms;
                        }
                      }

                      to[attr] = values;
                      break;

                    default:
                      values = [][concat](params[attr]);
                      from2 = [][concat](from[attr]);
                      diff[attr] = [];
                      i = element.paper.customAttributes[attr].length;

                      while (i--) {
                        diff[attr][i] = ((values[i] || 0) - (from2[i] || 0)) / ms;
                      }

                      break;
                  }
                }
              }
            }

            var easing = params.easing,
                easyeasy = R.easing_formulas[easing];

            if (!easyeasy) {
              easyeasy = Str(easing).match(bezierrg);

              if (easyeasy && easyeasy.length == 5) {
                var curve = easyeasy;

                easyeasy = function easyeasy(t) {
                  return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
                };
              } else {
                easyeasy = pipe;
              }
            }

            timestamp = params.start || anim.start || +new Date();
            e = {
              anim: anim,
              percent: percent,
              timestamp: timestamp,
              start: timestamp + (anim.del || 0),
              status: 0,
              initstatus: status || 0,
              stop: false,
              ms: ms,
              easing: easyeasy,
              from: from,
              diff: diff,
              to: to,
              el: element,
              callback: params.callback,
              prev: prev,
              next: next,
              repeat: times || anim.times,
              origin: element.attr(),
              totalOrigin: totalOrigin
            };
            animationElements.push(e);

            if (status && !isInAnim && !isInAnimSet) {
              e.stop = true;
              e.start = new Date() - ms * status;

              if (animationElements.length == 1) {
                return animation();
              }
            }

            if (isInAnimSet) {
              e.start = new Date() - e.ms * status;
            }

            animationElements.length == 1 && requestAnimFrame(animation);
          } else {
            isInAnim.initstatus = status;
            isInAnim.start = new Date() - isInAnim.ms * status;
          }

          eve("raphael.anim.start." + element.id, element, anim);
        }
        /*\
         * Raphael.animation
         [ method ]
         **
         * Creates an animation object that can be passed to the @Element.animate or @Element.animateWith methods.
         * See also @Animation.delay and @Animation.repeat methods.
         **
         > Parameters
         **
         - params (object) final attributes for the element, see also @Element.attr
         - ms (number) number of milliseconds for animation to run
         - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
         - callback (function) #optional callback function. Will be called at the end of animation.
         **
         = (object) @Animation
        \*/


        R.animation = function (params, ms, easing, callback) {
          if (params instanceof Animation) {
            return params;
          }

          if (R.is(easing, "function") || !easing) {
            callback = callback || easing || null;
            easing = null;
          }

          params = Object(params);
          ms = +ms || 0;
          var p = {},
              json,
              attr;

          for (attr in params) {
            if (params[has](attr) && toFloat(attr) != attr && toFloat(attr) + "%" != attr) {
              json = true;
              p[attr] = params[attr];
            }
          }

          if (!json) {
            // if percent-like syntax is used and end-of-all animation callback used
            if (callback) {
              // find the last one
              var lastKey = 0;

              for (var i in params) {
                var percent = toInt(i);

                if (params[has](i) && percent > lastKey) {
                  lastKey = percent;
                }
              }

              lastKey += '%'; // if already defined callback in the last keyframe, skip

              !params[lastKey].callback && (params[lastKey].callback = callback);
            }

            return new Animation(params, ms);
          } else {
            easing && (p.easing = easing);
            callback && (p.callback = callback);
            return new Animation({
              100: p
            }, ms);
          }
        };
        /*\
         * Element.animate
         [ method ]
         **
         * Creates and starts animation for given element.
         **
         > Parameters
         **
         - params (object) final attributes for the element, see also @Element.attr
         - ms (number) number of milliseconds for animation to run
         - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
         - callback (function) #optional callback function. Will be called at the end of animation.
         * or
         - animation (object) animation object, see @Raphael.animation
         **
         = (object) original element
        \*/


        elproto.animate = function (params, ms, easing, callback) {
          var element = this;

          if (element.removed) {
            callback && callback.call(element);
            return element;
          }

          var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);
          runAnimation(anim, element, anim.percents[0], null, element.attr());
          return element;
        };
        /*\
         * Element.setTime
         [ method ]
         **
         * Sets the status of animation of the element in milliseconds. Similar to @Element.status method.
         **
         > Parameters
         **
         - anim (object) animation object
         - value (number) number of milliseconds from the beginning of the animation
         **
         = (object) original element if `value` is specified
         * Note, that during animation following events are triggered:
         *
         * On each animation frame event `anim.frame.<id>`, on start `anim.start.<id>` and on end `anim.finish.<id>`.
        \*/


        elproto.setTime = function (anim, value) {
          if (anim && value != null) {
            this.status(anim, mmin(value, anim.ms) / anim.ms);
          }

          return this;
        };
        /*\
         * Element.status
         [ method ]
         **
         * Gets or sets the status of animation of the element.
         **
         > Parameters
         **
         - anim (object) #optional animation object
         - value (number) #optional 0 – 1. If specified, method works like a setter and sets the status of a given animation to the value. This will cause animation to jump to the given position.
         **
         = (number) status
         * or
         = (array) status if `anim` is not specified. Array of objects in format:
         o {
         o     anim: (object) animation object
         o     status: (number) status
         o }
         * or
         = (object) original element if `value` is specified
        \*/


        elproto.status = function (anim, value) {
          var out = [],
              i = 0,
              len,
              e;

          if (value != null) {
            runAnimation(anim, this, -1, mmin(value, 1));
            return this;
          } else {
            len = animationElements.length;

            for (; i < len; i++) {
              e = animationElements[i];

              if (e.el.id == this.id && (!anim || e.anim == anim)) {
                if (anim) {
                  return e.status;
                }

                out.push({
                  anim: e.anim,
                  status: e.status
                });
              }
            }

            if (anim) {
              return 0;
            }

            return out;
          }
        };
        /*\
         * Element.pause
         [ method ]
         **
         * Stops animation of the element with ability to resume it later on.
         **
         > Parameters
         **
         - anim (object) #optional animation object
         **
         = (object) original element
        \*/


        elproto.pause = function (anim) {
          for (var i = 0; i < animationElements.length; i++) {
            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
              if (eve("raphael.anim.pause." + this.id, this, animationElements[i].anim) !== false) {
                animationElements[i].paused = true;
              }
            }
          }

          return this;
        };
        /*\
         * Element.resume
         [ method ]
         **
         * Resumes animation if it was paused with @Element.pause method.
         **
         > Parameters
         **
         - anim (object) #optional animation object
         **
         = (object) original element
        \*/


        elproto.resume = function (anim) {
          for (var i = 0; i < animationElements.length; i++) {
            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
              var e = animationElements[i];

              if (eve("raphael.anim.resume." + this.id, this, e.anim) !== false) {
                delete e.paused;
                this.status(e.anim, e.status);
              }
            }
          }

          return this;
        };
        /*\
         * Element.stop
         [ method ]
         **
         * Stops animation of the element.
         **
         > Parameters
         **
         - anim (object) #optional animation object
         **
         = (object) original element
        \*/


        elproto.stop = function (anim) {
          for (var i = 0; i < animationElements.length; i++) {
            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
              if (eve("raphael.anim.stop." + this.id, this, animationElements[i].anim) !== false) {
                animationElements.splice(i--, 1);
              }
            }
          }

          return this;
        };

        function stopAnimation(paper) {
          for (var i = 0; i < animationElements.length; i++) {
            if (animationElements[i].el.paper == paper) {
              animationElements.splice(i--, 1);
            }
          }
        }

        eve.on("raphael.remove", stopAnimation);
        eve.on("raphael.clear", stopAnimation);

        elproto.toString = function () {
          return "Rapha\xEBl\u2019s object";
        }; // Set


        var Set = function Set(items) {
          this.items = [];
          this.length = 0;
          this.type = "set";

          if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
              if (items[i] && (items[i].constructor == elproto.constructor || items[i].constructor == Set)) {
                this[this.items.length] = this.items[this.items.length] = items[i];
                this.length++;
              }
            }
          }
        },
            setproto = Set.prototype;
        /*\
         * Set.push
         [ method ]
         **
         * Adds each argument to the current set.
         = (object) original element
        \*/


        setproto.push = function () {
          var item, len;

          for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];

            if (item && (item.constructor == elproto.constructor || item.constructor == Set)) {
              len = this.items.length;
              this[len] = this.items[len] = item;
              this.length++;
            }
          }

          return this;
        };
        /*\
         * Set.pop
         [ method ]
         **
         * Removes last element and returns it.
         = (object) element
        \*/


        setproto.pop = function () {
          this.length && delete this[this.length--];
          return this.items.pop();
        };
        /*\
         * Set.forEach
         [ method ]
         **
         * Executes given function for each element in the set.
         *
         * If function returns `false` it will stop loop running.
         **
         > Parameters
         **
         - callback (function) function to run
         - thisArg (object) context object for the callback
         = (object) Set object
        \*/


        setproto.forEach = function (callback, thisArg) {
          for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
              return this;
            }
          }

          return this;
        };

        for (var method in elproto) {
          if (elproto[has](method)) {
            setproto[method] = function (methodname) {
              return function () {
                var arg = arguments;
                return this.forEach(function (el) {
                  el[methodname][apply](el, arg);
                });
              };
            }(method);
          }
        }

        setproto.attr = function (name, value) {
          if (name && R.is(name, array) && R.is(name[0], "object")) {
            for (var j = 0, jj = name.length; j < jj; j++) {
              this.items[j].attr(name[j]);
            }
          } else {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              this.items[i].attr(name, value);
            }
          }

          return this;
        };
        /*\
         * Set.clear
         [ method ]
         **
         * Removes all elements from the set
        \*/


        setproto.clear = function () {
          while (this.length) {
            this.pop();
          }
        };
        /*\
         * Set.splice
         [ method ]
         **
         * Removes given element from the set
         **
         > Parameters
         **
         - index (number) position of the deletion
         - count (number) number of element to remove
         - insertion… (object) #optional elements to insert
         = (object) set elements that were deleted
        \*/


        setproto.splice = function (index, count, insertion) {
          index = index < 0 ? mmax(this.length + index, 0) : index;
          count = mmax(0, mmin(this.length - index, count));
          var tail = [],
              todel = [],
              args = [],
              i;

          for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
          }

          for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
          }

          for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
          }

          var arglen = args.length;

          for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
          }

          i = this.items.length = this.length -= count - arglen;

          while (this[i]) {
            delete this[i++];
          }

          return new Set(todel);
        };
        /*\
         * Set.exclude
         [ method ]
         **
         * Removes given element from the set
         **
         > Parameters
         **
         - element (object) element to remove
         = (boolean) `true` if object was found & removed from the set
        \*/


        setproto.exclude = function (el) {
          for (var i = 0, ii = this.length; i < ii; i++) {
            if (this[i] == el) {
              this.splice(i, 1);
              return true;
            }
          }
        };

        setproto.animate = function (params, ms, easing, callback) {
          (R.is(easing, "function") || !easing) && (callback = easing || null);
          var len = this.items.length,
              i = len,
              item,
              set = this,
              collector;

          if (!len) {
            return this;
          }

          callback && (collector = function collector() {
            ! --len && callback.call(set);
          });
          easing = R.is(easing, string) ? easing : collector;
          var anim = R.animation(params, ms, easing, collector);
          item = this.items[--i].animate(anim);

          while (i--) {
            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);
            this.items[i] && !this.items[i].removed || len--;
          }

          return this;
        };

        setproto.insertAfter = function (el) {
          var i = this.items.length;

          while (i--) {
            this.items[i].insertAfter(el);
          }

          return this;
        };

        setproto.getBBox = function () {
          var x = [],
              y = [],
              x2 = [],
              y2 = [];

          for (var i = this.items.length; i--;) {
            if (!this.items[i].removed) {
              var box = this.items[i].getBBox();
              x.push(box.x);
              y.push(box.y);
              x2.push(box.x + box.width);
              y2.push(box.y + box.height);
            }
          }

          x = mmin[apply](0, x);
          y = mmin[apply](0, y);
          x2 = mmax[apply](0, x2);
          y2 = mmax[apply](0, y2);
          return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y
          };
        };

        setproto.clone = function (s) {
          s = this.paper.set();

          for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
          }

          return s;
        };

        setproto.toString = function () {
          return "Rapha\xEBl\u2018s set";
        };

        setproto.glow = function (glowConfig) {
          var ret = this.paper.set();
          this.forEach(function (shape, index) {
            var g = shape.glow(glowConfig);

            if (g != null) {
              g.forEach(function (shape2, index2) {
                ret.push(shape2);
              });
            }
          });
          return ret;
        };
        /*\
         * Set.isPointInside
         [ method ]
         **
         * Determine if given point is inside this set’s elements
         **
         > Parameters
         **
         - x (number) x coordinate of the point
         - y (number) y coordinate of the point
         = (boolean) `true` if point is inside any of the set's elements
         \*/


        setproto.isPointInside = function (x, y) {
          var isPointInside = false;
          this.forEach(function (el) {
            if (el.isPointInside(x, y)) {
              isPointInside = true;
              return false; // stop loop
            }
          });
          return isPointInside;
        };
        /*\
         * Raphael.registerFont
         [ method ]
         **
         * Adds given font to the registered set of fonts for Raphaël. Should be used as an internal call from within Cufón’s font file.
         * Returns original parameter, so it could be used with chaining.
         # <a href="http://wiki.github.com/sorccu/cufon/about">More about Cufón and how to convert your font form TTF, OTF, etc to JavaScript file.</a>
         **
         > Parameters
         **
         - font (object) the font to register
         = (object) the font you passed in
         > Usage
         | Cufon.registerFont(Raphael.registerFont({…}));
        \*/


        R.registerFont = function (font) {
          if (!font.face) {
            return font;
          }

          this.fonts = this.fonts || {};
          var fontcopy = {
            w: font.w,
            face: {},
            glyphs: {}
          },
              family = font.face["font-family"];

          for (var prop in font.face) {
            if (font.face[has](prop)) {
              fontcopy.face[prop] = font.face[prop];
            }
          }

          if (this.fonts[family]) {
            this.fonts[family].push(fontcopy);
          } else {
            this.fonts[family] = [fontcopy];
          }

          if (!font.svg) {
            fontcopy.face["units-per-em"] = toInt(font.face["units-per-em"], 10);

            for (var glyph in font.glyphs) {
              if (font.glyphs[has](glyph)) {
                var path = font.glyphs[glyph];
                fontcopy.glyphs[glyph] = {
                  w: path.w,
                  k: {},
                  d: path.d && "M" + path.d.replace(/[mlcxtrv]/g, function (command) {
                    return {
                      l: "L",
                      c: "C",
                      x: "z",
                      t: "m",
                      r: "l",
                      v: "c"
                    }[command] || "M";
                  }) + "z"
                };

                if (path.k) {
                  for (var k in path.k) {
                    if (path[has](k)) {
                      fontcopy.glyphs[glyph].k[k] = path.k[k];
                    }
                  }
                }
              }
            }
          }

          return font;
        };
        /*\
         * Paper.getFont
         [ method ]
         **
         * Finds font object in the registered fonts by given parameters. You could specify only one word from the font name, like “Myriad” for “Myriad Pro”.
         **
         > Parameters
         **
         - family (string) font family name or any word from it
         - weight (string) #optional font weight
         - style (string) #optional font style
         - stretch (string) #optional font stretch
         = (object) the font object
         > Usage
         | paper.print(100, 100, "Test string", paper.getFont("Times", 800), 30);
        \*/


        paperproto.getFont = function (family, weight, style, stretch) {
          stretch = stretch || "normal";
          style = style || "normal";
          weight = +weight || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
          }[weight] || 400;

          if (!R.fonts) {
            return;
          }

          var font = R.fonts[family];

          if (!font) {
            var name = new RegExp("(^|\\s)" + family.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");

            for (var fontName in R.fonts) {
              if (R.fonts[has](fontName)) {
                if (name.test(fontName)) {
                  font = R.fonts[fontName];
                  break;
                }
              }
            }
          }

          var thefont;

          if (font) {
            for (var i = 0, ii = font.length; i < ii; i++) {
              thefont = font[i];

              if (thefont.face["font-weight"] == weight && (thefont.face["font-style"] == style || !thefont.face["font-style"]) && thefont.face["font-stretch"] == stretch) {
                break;
              }
            }
          }

          return thefont;
        };
        /*\
         * Paper.print
         [ method ]
         **
         * Creates path that represent given text written using given font at given position with given size.
         * Result of the method is path element that contains whole text as a separate path.
         **
         > Parameters
         **
         - x (number) x position of the text
         - y (number) y position of the text
         - string (string) text to print
         - font (object) font object, see @Paper.getFont
         - size (number) #optional size of the font, default is `16`
         - origin (string) #optional could be `"baseline"` or `"middle"`, default is `"middle"`
         - letter_spacing (number) #optional number in range `-1..1`, default is `0`
         - line_spacing (number) #optional number in range `1..3`, default is `1`
         = (object) resulting path element, which consist of all letters
         > Usage
         | var txt = r.print(10, 50, "print", r.getFont("Museo"), 30).attr({fill: "#fff"});
        \*/


        paperproto.print = function (x, y, string, font, size, origin, letter_spacing, line_spacing) {
          origin = origin || "middle"; // baseline|middle

          letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);
          line_spacing = mmax(mmin(line_spacing || 1, 3), 1);
          var letters = Str(string)[split](E),
              shift = 0,
              notfirst = 0,
              path = E,
              scale;
          R.is(font, "string") && (font = this.getFont(font));

          if (font) {
            scale = (size || 16) / font.face["units-per-em"];
            var bb = font.face.bbox[split](separator),
                top = +bb[0],
                lineHeight = bb[3] - bb[1],
                shifty = 0,
                height = +bb[1] + (origin == "baseline" ? lineHeight + +font.face.descent : lineHeight / 2);

            for (var i = 0, ii = letters.length; i < ii; i++) {
              if (letters[i] == "\n") {
                shift = 0;
                curr = 0;
                notfirst = 0;
                shifty += lineHeight * line_spacing;
              } else {
                var prev = notfirst && font.glyphs[letters[i - 1]] || {},
                    curr = font.glyphs[letters[i]];
                shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + font.w * letter_spacing : 0;
                notfirst = 1;
              }

              if (curr && curr.d) {
                path += R.transformPath(curr.d, ["t", shift * scale, shifty * scale, "s", scale, scale, top, height, "t", (x - top) / scale, (y - height) / scale]);
              }
            }
          }

          return this.path(path).attr({
            fill: "#000",
            stroke: "none"
          });
        };
        /*\
         * Paper.add
         [ method ]
         **
         * Imports elements in JSON array in format `{type: type, <attributes>}`
         **
         > Parameters
         **
         - json (array)
         = (object) resulting set of imported elements
         > Usage
         | paper.add([
         |     {
         |         type: "circle",
         |         cx: 10,
         |         cy: 10,
         |         r: 5
         |     },
         |     {
         |         type: "rect",
         |         x: 10,
         |         y: 10,
         |         width: 10,
         |         height: 10,
         |         fill: "#fc0"
         |     }
         | ]);
        \*/


        paperproto.add = function (json) {
          if (R.is(json, "array")) {
            var res = this.set(),
                i = 0,
                ii = json.length,
                j;

            for (; i < ii; i++) {
              j = json[i] || {};
              elements[has](j.type) && res.push(this[j.type]().attr(j));
            }
          }

          return res;
        };
        /*\
         * Raphael.format
         [ method ]
         **
         * Simple format function. Replaces construction of type “`{<number>}`” to the corresponding argument.
         **
         > Parameters
         **
         - token (string) string to format
         - … (string) rest of arguments will be treated as parameters for replacement
         = (string) formated string
         > Usage
         | var x = 10,
         |     y = 20,
         |     width = 40,
         |     height = 50;
         | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
         | paper.path(Raphael.format("M{0},{1}h{2}v{3}h{4}z", x, y, width, height, -width));
        \*/


        R.format = function (token, params) {
          var args = R.is(params, array) ? [0][concat](params) : arguments;
          token && R.is(token, string) && args.length - 1 && (token = token.replace(formatrg, function (str, i) {
            return args[++i] == null ? E : args[i];
          }));
          return token || E;
        };
        /*\
         * Raphael.fullfill
         [ method ]
         **
         * A little bit more advanced format function than @Raphael.format. Replaces construction of type “`{<name>}`” to the corresponding argument.
         **
         > Parameters
         **
         - token (string) string to format
         - json (object) object which properties will be used as a replacement
         = (string) formated string
         > Usage
         | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
         | paper.path(Raphael.fullfill("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
         |     x: 10,
         |     y: 20,
         |     dim: {
         |         width: 40,
         |         height: 50,
         |         "negative width": -40
         |     }
         | }));
        \*/


        R.fullfill = function () {
          var tokenRegex = /\{([^\}]+)\}/g,
              objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
              // matches .xxxxx or ["xxxxx"] to run over object properties
          replacer = function replacer(all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
              name = name || quotedName;

              if (res) {
                if (name in res) {
                  res = res[name];
                }

                typeof res == "function" && isFunc && (res = res());
              }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
          };

          return function (str, obj) {
            return String(str).replace(tokenRegex, function (all, key) {
              return replacer(all, key, obj);
            });
          };
        }();
        /*\
         * Raphael.ninja
         [ method ]
         **
         * If you want to leave no trace of Raphaël (Well, Raphaël creates only one global variable `Raphael`, but anyway.) You can use `ninja` method.
         * Beware, that in this case plugins could stop working, because they are depending on global variable existence.
         **
         = (object) Raphael object
         > Usage
         | (function (local_raphael) {
         |     var paper = local_raphael(10, 10, 320, 200);
         |     …
         | })(Raphael.ninja());
        \*/


        R.ninja = function () {
          if (oldRaphael.was) {
            g.win.Raphael = oldRaphael.is;
          } else {
            // IE8 raises an error when deleting window property
            window.Raphael = undefined;

            try {
              delete window.Raphael;
            } catch (e) {}
          }

          return R;
        };
        /*\
         * Raphael.st
         [ property (object) ]
         **
         * You can add your own method to elements and sets. It is wise to add a set method for each element method
         * you added, so you will be able to call the same method on sets too.
         **
         * See also @Raphael.el.
         > Usage
         | Raphael.el.red = function () {
         |     this.attr({fill: "#f00"});
         | };
         | Raphael.st.red = function () {
         |     this.forEach(function (el) {
         |         el.red();
         |     });
         | };
         | // then use it
         | paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();
        \*/


        R.st = setproto;
        eve.on("raphael.DOMload", function () {
          loaded = true;
        }); // Firefox <3.6 fix: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html

        (function (doc, loaded, _f2) {
          if (doc.readyState == null && doc.addEventListener) {
            doc.addEventListener(loaded, _f2 = function f() {
              doc.removeEventListener(loaded, _f2, false);
              doc.readyState = "complete";
            }, false);
            doc.readyState = "loading";
          }

          function isLoaded() {
            /in/.test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");
          }

          isLoaded();
        })(document, "DOMContentLoaded");

        return R;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
      // 
      // Licensed under the Apache License, Version 2.0 (the "License");
      // you may not use this file except in compliance with the License.
      // You may obtain a copy of the License at
      // 
      // http://www.apache.org/licenses/LICENSE-2.0
      // 
      // Unless required by applicable law or agreed to in writing, software
      // distributed under the License is distributed on an "AS IS" BASIS,
      // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      // See the License for the specific language governing permissions and
      // limitations under the License.
      // ┌────────────────────────────────────────────────────────────┐ \\
      // │ Eve 0.5.0 - JavaScript Events Library                      │ \\
      // ├────────────────────────────────────────────────────────────┤ \\
      // │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
      // └────────────────────────────────────────────────────────────┘ \\


      (function (glob) {
        var version = "0.5.0",
            has = "hasOwnProperty",
            separator = /[\.\/]/,
            comaseparator = /\s*,\s*/,
            wildcard = "*",
            fun = function fun() {},
            numsort = function numsort(a, b) {
          return a - b;
        },
            current_event,
            stop,
            events = {
          n: {}
        },
            firstDefined = function firstDefined() {
          for (var i = 0, ii = this.length; i < ii; i++) {
            if (typeof this[i] != "undefined") {
              return this[i];
            }
          }
        },
            lastDefined = function lastDefined() {
          var i = this.length;

          while (--i) {
            if (typeof this[i] != "undefined") {
              return this[i];
            }
          }
        },
            objtos = Object.prototype.toString,
            Str = String,
            isArray = Array.isArray || function (ar) {
          return ar instanceof Array || objtos.call(ar) == "[object Array]";
        };
        /*\
         * eve
         [ method ]
          * Fires event with given `name`, given scope and other parameters.
          > Arguments
          - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
         - scope (object) context for the event handlers
         - varargs (...) the rest of arguments will be sent to event handlers
          = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
        \*/


        eve = function (_eve) {
          function eve(_x, _x2) {
            return _eve.apply(this, arguments);
          }

          eve.toString = function () {
            return _eve.toString();
          };

          return eve;
        }(function (name, scope) {
          var e = events,
              oldstop = stop,
              args = Array.prototype.slice.call(arguments, 2),
              listeners = eve.listeners(name),
              z = 0,
              f = false,
              l,
              indexed = [],
              queue = {},
              out = [],
              ce = current_event,
              errors = [];
          out.firstDefined = firstDefined;
          out.lastDefined = lastDefined;
          current_event = name;
          stop = 0;

          for (var i = 0, ii = listeners.length; i < ii; i++) {
            if ("zIndex" in listeners[i]) {
              indexed.push(listeners[i].zIndex);

              if (listeners[i].zIndex < 0) {
                queue[listeners[i].zIndex] = listeners[i];
              }
            }
          }

          indexed.sort(numsort);

          while (indexed[z] < 0) {
            l = queue[indexed[z++]];
            out.push(l.apply(scope, args));

            if (stop) {
              stop = oldstop;
              return out;
            }
          }

          for (i = 0; i < ii; i++) {
            l = listeners[i];

            if ("zIndex" in l) {
              if (l.zIndex == indexed[z]) {
                out.push(l.apply(scope, args));

                if (stop) {
                  break;
                }

                do {
                  z++;
                  l = queue[indexed[z]];
                  l && out.push(l.apply(scope, args));

                  if (stop) {
                    break;
                  }
                } while (l);
              } else {
                queue[l.zIndex] = l;
              }
            } else {
              out.push(l.apply(scope, args));

              if (stop) {
                break;
              }
            }
          }

          stop = oldstop;
          current_event = ce;
          return out;
        }); // Undocumented. Debug only.


        eve._events = events;
        /*\
         * eve.listeners
         [ method ]
          * Internal method which gives you array of all event handlers that will be triggered by the given `name`.
          > Arguments
          - name (string) name of the event, dot (`.`) or slash (`/`) separated
          = (array) array of event handlers
        \*/

        eve.listeners = function (name) {
          var names = isArray(name) ? name : name.split(separator),
              e = events,
              item,
              items,
              k,
              i,
              ii,
              j,
              jj,
              nes,
              es = [e],
              out = [];

          for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];

            for (j = 0, jj = es.length; j < jj; j++) {
              e = es[j].n;
              items = [e[names[i]], e[wildcard]];
              k = 2;

              while (k--) {
                item = items[k];

                if (item) {
                  nes.push(item);
                  out = out.concat(item.f || []);
                }
              }
            }

            es = nes;
          }

          return out;
        };
        /*\
         * eve.separator
         [ method ]
          * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
         * here. Be aware that if you pass a string longer than one character it will be treated as
         * a list of characters.
          - separator (string) new separator. Empty string resets to default: `.` or `/`.
        \*/


        eve.separator = function (sep) {
          if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
          } else {
            separator = /[\.\/]/;
          }
        };
        /*\
         * eve.on
         [ method ]
         **
         * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
         | eve.on("*.under.*", f);
         | eve("mouse.under.floor"); // triggers f
         * Use @eve to trigger the listener.
         **
         - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
         - f (function) event handler function
         **
         - name (array) if you don’t want to use separators, you can use array of strings
         - f (function) event handler function
         **
         = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
         > Example:
         | eve.on("mouse", eatIt)(2);
         | eve.on("mouse", scream);
         | eve.on("mouse", catchIt)(1);
         * This will ensure that `catchIt` function will be called before `eatIt`.
         *
         * If you want to put your handler before non-indexed handlers, specify a negative value.
         * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
        \*/


        eve.on = function (name, f) {
          if (typeof f != "function") {
            return function () {};
          }

          var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);

          for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
              var names = isArray(name) ? name : Str(name).split(separator),
                  e = events,
                  exist;

              for (var i = 0, ii = names.length; i < ii; i++) {
                e = e.n;
                e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {
                  n: {}
                });
              }

              e.f = e.f || [];

              for (i = 0, ii = e.f.length; i < ii; i++) {
                if (e.f[i] == f) {
                  exist = true;
                  break;
                }
              }

              !exist && e.f.push(f);
            })(names[i]);
          }

          return function (zIndex) {
            if (+zIndex == +zIndex) {
              f.zIndex = +zIndex;
            }
          };
        };
        /*\
         * eve.f
         [ method ]
         **
         * Returns function that will fire given event with optional arguments.
         * Arguments that will be passed to the result function will be also
         * concated to the list of final arguments.
         | el.onclick = eve.f("click", 1, 2);
         | eve.on("click", function (a, b, c) {
         |     console.log(a, b, c); // 1, 2, [event object]
         | });
         > Arguments
         - event (string) event name
         - varargs (…) and any other arguments
         = (function) possible event handler function
        \*/


        eve.f = function (event) {
          var attrs = [].slice.call(arguments, 1);
          return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
          };
        };
        /*\
         * eve.stop
         [ method ]
         **
         * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
        \*/


        eve.stop = function () {
          stop = 1;
        };
        /*\
         * eve.nt
         [ method ]
         **
         * Could be used inside event handler to figure out actual name of the event.
         **
         > Arguments
         **
         - subname (string) #optional subname of the event
         **
         = (string) name of the event, if `subname` is not specified
         * or
         = (boolean) `true`, if current event’s name contains `subname`
        \*/


        eve.nt = function (subname) {
          var cur = isArray(current_event) ? current_event.join(".") : current_event;

          if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
          }

          return cur;
        };
        /*\
         * eve.nts
         [ method ]
         **
         * Could be used inside event handler to figure out actual name of the event.
         **
         **
         = (array) names of the event
        \*/


        eve.nts = function () {
          return isArray(current_event) ? current_event : current_event.split(separator);
        };
        /*\
         * eve.off
         [ method ]
         **
         * Removes given function from the list of event listeners assigned to given name.
         * If no arguments specified all the events will be cleared.
         **
         > Arguments
         **
         - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
         - f (function) event handler function
        \*/

        /*\
         * eve.unbind
         [ method ]
         **
         * See @eve.off
        \*/


        eve.off = eve.unbind = function (name, f) {
          if (!name) {
            eve._events = events = {
              n: {}
            };
            return;
          }

          var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);

          if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
              eve.off(names[i], f);
            }

            return;
          }

          names = isArray(name) ? name : Str(name).split(separator);
          var e,
              key,
              splice,
              i,
              ii,
              j,
              jj,
              cur = [events];

          for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
              splice = [j, 1];
              e = cur[j].n;

              if (names[i] != wildcard) {
                if (e[names[i]]) {
                  splice.push(e[names[i]]);
                }
              } else {
                for (key in e) {
                  if (e[has](key)) {
                    splice.push(e[key]);
                  }
                }
              }

              cur.splice.apply(cur, splice);
            }
          }

          for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];

            while (e.n) {
              if (f) {
                if (e.f) {
                  for (j = 0, jj = e.f.length; j < jj; j++) {
                    if (e.f[j] == f) {
                      e.f.splice(j, 1);
                      break;
                    }
                  }

                  !e.f.length && delete e.f;
                }

                for (key in e.n) {
                  if (e.n[has](key) && e.n[key].f) {
                    var funcs = e.n[key].f;

                    for (j = 0, jj = funcs.length; j < jj; j++) {
                      if (funcs[j] == f) {
                        funcs.splice(j, 1);
                        break;
                      }
                    }

                    !funcs.length && delete e.n[key].f;
                  }
                }
              } else {
                delete e.f;

                for (key in e.n) {
                  if (e.n[has](key) && e.n[key].f) {
                    delete e.n[key].f;
                  }
                }
              }

              e = e.n;
            }
          }
        };
        /*\
         * eve.once
         [ method ]
         **
         * Binds given event handler with a given name to only run once then unbind itself.
         | eve.once("login", f);
         | eve("login"); // triggers f
         | eve("login"); // no listeners
         * Use @eve to trigger the listener.
         **
         > Arguments
         **
         - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
         - f (function) event handler function
         **
         = (function) same return function as @eve.on
        \*/


        eve.once = function (name, f) {
          var f2 = function f2() {
            eve.off(name, f2);
            return f.apply(this, arguments);
          };

          return eve.on(name, f2);
        };
        /*\
         * eve.version
         [ property (string) ]
         **
         * Current version of the library.
        \*/


        eve.version = version;

        eve.toString = function () {
          return "You are running Eve " + version;
        };

        typeof module != "undefined" && module.exports ? module.exports = eve : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return eve;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(this);
      /***/

    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (R) {
        if (R && !R.svg) {
          return;
        }

        var has = "hasOwnProperty",
            Str = String,
            toFloat = parseFloat,
            toInt = parseInt,
            math = Math,
            mmax = math.max,
            abs = math.abs,
            pow = math.pow,
            separator = /[, ]+/,
            eve = R.eve,
            E = "",
            S = " ";
        var xlink = "http://www.w3.org/1999/xlink",
            markers = {
          block: "M5,0 0,2.5 5,5z",
          classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
          diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
          open: "M6,1 1,3.5 6,6",
          oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
        },
            markerCounter = {};

        R.toString = function () {
          return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version;
        };

        var $ = function $(el, attr) {
          if (attr) {
            if (typeof el == "string") {
              el = $(el);
            }

            for (var key in attr) {
              if (attr[has](key)) {
                if (key.substring(0, 6) == "xlink:") {
                  el.setAttributeNS(xlink, key.substring(6), Str(attr[key]));
                } else {
                  el.setAttribute(key, Str(attr[key]));
                }
              }
            }
          } else {
            el = R._g.doc.createElementNS("http://www.w3.org/2000/svg", el);
            el.style && (el.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
          }

          return el;
        },
            addGradientFill = function addGradientFill(element, gradient) {
          var type = "linear",
              id = element.id + gradient,
              fx = .5,
              fy = .5,
              o = element.node,
              SVG = element.paper,
              s = o.style,
              el = R._g.doc.getElementById(id);

          if (!el) {
            gradient = Str(gradient).replace(R._radial_gradient, function (all, _fx, _fy) {
              type = "radial";

              if (_fx && _fy) {
                fx = toFloat(_fx);
                fy = toFloat(_fy);
                var dir = (fy > .5) * 2 - 1;
                pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * dir + .5) && fy != .5 && (fy = fy.toFixed(5) - 1e-5 * dir);
              }

              return E;
            });
            gradient = gradient.split(/\s*\-\s*/);

            if (type == "linear") {
              var angle = gradient.shift();
              angle = -toFloat(angle);

              if (isNaN(angle)) {
                return null;
              }

              var vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))],
                  max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
              vector[2] *= max;
              vector[3] *= max;

              if (vector[2] < 0) {
                vector[0] = -vector[2];
                vector[2] = 0;
              }

              if (vector[3] < 0) {
                vector[1] = -vector[3];
                vector[3] = 0;
              }
            }

            var dots = R._parseDots(gradient);

            if (!dots) {
              return null;
            }

            id = id.replace(/[\(\)\s,\xb0#]/g, "_");

            if (element.gradient && id != element.gradient.id) {
              SVG.defs.removeChild(element.gradient);
              delete element.gradient;
            }

            if (!element.gradient) {
              el = $(type + "Gradient", {
                id: id
              });
              element.gradient = el;
              $(el, type == "radial" ? {
                fx: fx,
                fy: fy
              } : {
                x1: vector[0],
                y1: vector[1],
                x2: vector[2],
                y2: vector[3],
                gradientTransform: element.matrix.invert()
              });
              SVG.defs.appendChild(el);

              for (var i = 0, ii = dots.length; i < ii; i++) {
                el.appendChild($("stop", {
                  offset: dots[i].offset ? dots[i].offset : i ? "100%" : "0%",
                  "stop-color": dots[i].color || "#fff",
                  "stop-opacity": isFinite(dots[i].opacity) ? dots[i].opacity : 1
                }));
              }
            }
          }

          $(o, {
            fill: fillurl(id),
            opacity: 1,
            "fill-opacity": 1
          });
          s.fill = E;
          s.opacity = 1;
          s.fillOpacity = 1;
          return 1;
        },
            isIE9or10 = function isIE9or10() {
          var mode = document.documentMode;
          return mode && (mode === 9 || mode === 10);
        },
            fillurl = function fillurl(id) {
          if (isIE9or10()) {
            return "url('#" + id + "')";
          }

          var location = document.location;
          var locationString = location.protocol + '//' + location.host + location.pathname + location.search;
          return "url('" + locationString + "#" + id + "')";
        },
            updatePosition = function updatePosition(o) {
          var bbox = o.getBBox(1);
          $(o.pattern, {
            patternTransform: o.matrix.invert() + " translate(" + bbox.x + "," + bbox.y + ")"
          });
        },
            addArrow = function addArrow(o, value, isEnd) {
          if (o.type == "path") {
            var values = Str(value).toLowerCase().split("-"),
                p = o.paper,
                se = isEnd ? "end" : "start",
                node = o.node,
                attrs = o.attrs,
                stroke = attrs["stroke-width"],
                i = values.length,
                type = "classic",
                from,
                to,
                dx,
                refX,
                attr,
                w = 3,
                h = 3,
                t = 5;

            while (i--) {
              switch (values[i]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  type = values[i];
                  break;

                case "wide":
                  h = 5;
                  break;

                case "narrow":
                  h = 2;
                  break;

                case "long":
                  w = 5;
                  break;

                case "short":
                  w = 2;
                  break;
              }
            }

            if (type == "open") {
              w += 2;
              h += 2;
              t += 2;
              dx = 1;
              refX = isEnd ? 4 : 1;
              attr = {
                fill: "none",
                stroke: attrs.stroke
              };
            } else {
              refX = dx = w / 2;
              attr = {
                fill: attrs.stroke,
                stroke: "none"
              };
            }

            if (o._.arrows) {
              if (isEnd) {
                o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
                o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
              } else {
                o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
                o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
              }
            } else {
              o._.arrows = {};
            }

            if (type != "none") {
              var pathId = "raphael-marker-" + type,
                  markerId = "raphael-marker-" + se + type + w + h + "-obj" + o.id;

              if (!R._g.doc.getElementById(pathId)) {
                p.defs.appendChild($($("path"), {
                  "stroke-linecap": "round",
                  d: markers[type],
                  id: pathId
                }));
                markerCounter[pathId] = 1;
              } else {
                markerCounter[pathId]++;
              }

              var marker = R._g.doc.getElementById(markerId),
                  use;

              if (!marker) {
                marker = $($("marker"), {
                  id: markerId,
                  markerHeight: h,
                  markerWidth: w,
                  orient: "auto",
                  refX: refX,
                  refY: h / 2
                });
                use = $($("use"), {
                  "xlink:href": "#" + pathId,
                  transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",
                  "stroke-width": (1 / ((w / t + h / t) / 2)).toFixed(4)
                });
                marker.appendChild(use);
                p.defs.appendChild(marker);
                markerCounter[markerId] = 1;
              } else {
                markerCounter[markerId]++;
                use = marker.getElementsByTagName("use")[0];
              }

              $(use, attr);
              var delta = dx * (type != "diamond" && type != "oval");

              if (isEnd) {
                from = o._.arrows.startdx * stroke || 0;
                to = R.getTotalLength(attrs.path) - delta * stroke;
              } else {
                from = delta * stroke;
                to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
              }

              attr = {};
              attr["marker-" + se] = "url(#" + markerId + ")";

              if (to || from) {
                attr.d = R.getSubpath(attrs.path, from, to);
              }

              $(node, attr);
              o._.arrows[se + "Path"] = pathId;
              o._.arrows[se + "Marker"] = markerId;
              o._.arrows[se + "dx"] = delta;
              o._.arrows[se + "Type"] = type;
              o._.arrows[se + "String"] = value;
            } else {
              if (isEnd) {
                from = o._.arrows.startdx * stroke || 0;
                to = R.getTotalLength(attrs.path) - from;
              } else {
                from = 0;
                to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
              }

              o._.arrows[se + "Path"] && $(node, {
                d: R.getSubpath(attrs.path, from, to)
              });
              delete o._.arrows[se + "Path"];
              delete o._.arrows[se + "Marker"];
              delete o._.arrows[se + "dx"];
              delete o._.arrows[se + "Type"];
              delete o._.arrows[se + "String"];
            }

            for (attr in markerCounter) {
              if (markerCounter[has](attr) && !markerCounter[attr]) {
                var item = R._g.doc.getElementById(attr);

                item && item.parentNode.removeChild(item);
              }
            }
          }
        },
            dasharray = {
          "-": [3, 1],
          ".": [1, 1],
          "-.": [3, 1, 1, 1],
          "-..": [3, 1, 1, 1, 1, 1],
          ". ": [1, 3],
          "- ": [4, 3],
          "--": [8, 3],
          "- .": [4, 3, 1, 3],
          "--.": [8, 3, 1, 3],
          "--..": [8, 3, 1, 3, 1, 3]
        },
            addDashes = function addDashes(o, value, params) {
          value = dasharray[Str(value).toLowerCase()];

          if (value) {
            var width = o.attrs["stroke-width"] || "1",
                butt = {
              round: width,
              square: width,
              butt: 0
            }[o.attrs["stroke-linecap"] || params["stroke-linecap"]] || 0,
                dashes = [],
                i = value.length;

            while (i--) {
              dashes[i] = value[i] * width + (i % 2 ? 1 : -1) * butt;
            }

            $(o.node, {
              "stroke-dasharray": dashes.join(",")
            });
          } else {
            $(o.node, {
              "stroke-dasharray": "none"
            });
          }
        },
            setFillAndStroke = function setFillAndStroke(o, params) {
          var node = o.node,
              attrs = o.attrs,
              vis = node.style.visibility;
          node.style.visibility = "hidden";

          for (var att in params) {
            if (params[has](att)) {
              if (!R._availableAttrs[has](att)) {
                continue;
              }

              var value = params[att];
              attrs[att] = value;

              switch (att) {
                case "blur":
                  o.blur(value);
                  break;

                case "title":
                  var title = node.getElementsByTagName("title"); // Use the existing <title>.

                  if (title.length && (title = title[0])) {
                    title.firstChild.nodeValue = value;
                  } else {
                    title = $("title");

                    var val = R._g.doc.createTextNode(value);

                    title.appendChild(val);
                    node.appendChild(title);
                  }

                  break;

                case "href":
                case "target":
                  var pn = node.parentNode;

                  if (pn.tagName.toLowerCase() != "a") {
                    var hl = $("a");
                    pn.insertBefore(hl, node);
                    hl.appendChild(node);
                    pn = hl;
                  }

                  if (att == "target") {
                    pn.setAttributeNS(xlink, "show", value == "blank" ? "new" : value);
                  } else {
                    pn.setAttributeNS(xlink, att, value);
                  }

                  break;

                case "cursor":
                  node.style.cursor = value;
                  break;

                case "transform":
                  o.transform(value);
                  break;

                case "arrow-start":
                  addArrow(o, value);
                  break;

                case "arrow-end":
                  addArrow(o, value, 1);
                  break;

                case "clip-rect":
                  var rect = Str(value).split(separator);

                  if (rect.length == 4) {
                    o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
                    var el = $("clipPath"),
                        rc = $("rect");
                    el.id = R.createUUID();
                    $(rc, {
                      x: rect[0],
                      y: rect[1],
                      width: rect[2],
                      height: rect[3]
                    });
                    el.appendChild(rc);
                    o.paper.defs.appendChild(el);
                    $(node, {
                      "clip-path": "url(#" + el.id + ")"
                    });
                    o.clip = rc;
                  }

                  if (!value) {
                    var path = node.getAttribute("clip-path");

                    if (path) {
                      var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));

                      clip && clip.parentNode.removeChild(clip);
                      $(node, {
                        "clip-path": E
                      });
                      delete o.clip;
                    }
                  }

                  break;

                case "path":
                  if (o.type == "path") {
                    $(node, {
                      d: value ? attrs.path = R._pathToAbsolute(value) : "M0,0"
                    });
                    o._.dirty = 1;

                    if (o._.arrows) {
                      "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                      "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                    }
                  }

                  break;

                case "width":
                  node.setAttribute(att, value);
                  o._.dirty = 1;

                  if (attrs.fx) {
                    att = "x";
                    value = attrs.x;
                  } else {
                    break;
                  }

                case "x":
                  if (attrs.fx) {
                    value = -attrs.x - (attrs.width || 0);
                  }

                case "rx":
                  if (att == "rx" && o.type == "rect") {
                    break;
                  }

                case "cx":
                  node.setAttribute(att, value);
                  o.pattern && updatePosition(o);
                  o._.dirty = 1;
                  break;

                case "height":
                  node.setAttribute(att, value);
                  o._.dirty = 1;

                  if (attrs.fy) {
                    att = "y";
                    value = attrs.y;
                  } else {
                    break;
                  }

                case "y":
                  if (attrs.fy) {
                    value = -attrs.y - (attrs.height || 0);
                  }

                case "ry":
                  if (att == "ry" && o.type == "rect") {
                    break;
                  }

                case "cy":
                  node.setAttribute(att, value);
                  o.pattern && updatePosition(o);
                  o._.dirty = 1;
                  break;

                case "r":
                  if (o.type == "rect") {
                    $(node, {
                      rx: value,
                      ry: value
                    });
                  } else {
                    node.setAttribute(att, value);
                  }

                  o._.dirty = 1;
                  break;

                case "src":
                  if (o.type == "image") {
                    node.setAttributeNS(xlink, "href", value);
                  }

                  break;

                case "stroke-width":
                  if (o._.sx != 1 || o._.sy != 1) {
                    value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;
                  }

                  node.setAttribute(att, value);

                  if (attrs["stroke-dasharray"]) {
                    addDashes(o, attrs["stroke-dasharray"], params);
                  }

                  if (o._.arrows) {
                    "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                    "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                  }

                  break;

                case "stroke-dasharray":
                  addDashes(o, value, params);
                  break;

                case "fill":
                  var isURL = Str(value).match(R._ISURL);

                  if (isURL) {
                    el = $("pattern");
                    var ig = $("image");
                    el.id = R.createUUID();
                    $(el, {
                      x: 0,
                      y: 0,
                      patternUnits: "userSpaceOnUse",
                      height: 1,
                      width: 1
                    });
                    $(ig, {
                      x: 0,
                      y: 0,
                      "xlink:href": isURL[1]
                    });
                    el.appendChild(ig);

                    (function (el) {
                      R._preload(isURL[1], function () {
                        var w = this.offsetWidth,
                            h = this.offsetHeight;
                        $(el, {
                          width: w,
                          height: h
                        });
                        $(ig, {
                          width: w,
                          height: h
                        });
                      });
                    })(el);

                    o.paper.defs.appendChild(el);
                    $(node, {
                      fill: "url(#" + el.id + ")"
                    });
                    o.pattern = el;
                    o.pattern && updatePosition(o);
                    break;
                  }

                  var clr = R.getRGB(value);

                  if (!clr.error) {
                    delete params.gradient;
                    delete attrs.gradient;
                    !R.is(attrs.opacity, "undefined") && R.is(params.opacity, "undefined") && $(node, {
                      opacity: attrs.opacity
                    });
                    !R.is(attrs["fill-opacity"], "undefined") && R.is(params["fill-opacity"], "undefined") && $(node, {
                      "fill-opacity": attrs["fill-opacity"]
                    });
                  } else if ((o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value)) {
                    if ("opacity" in attrs || "fill-opacity" in attrs) {
                      var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));

                      if (gradient) {
                        var stops = gradient.getElementsByTagName("stop");
                        $(stops[stops.length - 1], {
                          "stop-opacity": ("opacity" in attrs ? attrs.opacity : 1) * ("fill-opacity" in attrs ? attrs["fill-opacity"] : 1)
                        });
                      }
                    }

                    attrs.gradient = value;
                    attrs.fill = "none";
                    break;
                  }

                  clr[has]("opacity") && $(node, {
                    "fill-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity
                  });

                case "stroke":
                  clr = R.getRGB(value);
                  node.setAttribute(att, clr.hex);
                  att == "stroke" && clr[has]("opacity") && $(node, {
                    "stroke-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity
                  });

                  if (att == "stroke" && o._.arrows) {
                    "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                    "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                  }

                  break;

                case "gradient":
                  (o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value);
                  break;

                case "opacity":
                  if (attrs.gradient && !attrs[has]("stroke-opacity")) {
                    $(node, {
                      "stroke-opacity": value > 1 ? value / 100 : value
                    });
                  }

                // fall

                case "fill-opacity":
                  if (attrs.gradient) {
                    gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));

                    if (gradient) {
                      stops = gradient.getElementsByTagName("stop");
                      $(stops[stops.length - 1], {
                        "stop-opacity": value
                      });
                    }

                    break;
                  }

                default:
                  att == "font-size" && (value = toInt(value, 10) + "px");
                  var cssrule = att.replace(/(\-.)/g, function (w) {
                    return w.substring(1).toUpperCase();
                  });
                  node.style[cssrule] = value;
                  o._.dirty = 1;
                  node.setAttribute(att, value);
                  break;
              }
            }
          }

          tuneText(o, params);
          node.style.visibility = vis;
        },
            leading = 1.2,
            tuneText = function tuneText(el, params) {
          if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y"))) {
            return;
          }

          var a = el.attrs,
              node = el.node,
              fontSize = node.firstChild ? toInt(R._g.doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;

          if (params[has]("text")) {
            a.text = params.text;

            while (node.firstChild) {
              node.removeChild(node.firstChild);
            }

            var texts = Str(params.text).split("\n"),
                tspans = [],
                tspan;

            for (var i = 0, ii = texts.length; i < ii; i++) {
              tspan = $("tspan");
              i && $(tspan, {
                dy: fontSize * leading,
                x: a.x
              });
              tspan.appendChild(R._g.doc.createTextNode(texts[i]));
              node.appendChild(tspan);
              tspans[i] = tspan;
            }
          } else {
            tspans = node.getElementsByTagName("tspan");

            for (i = 0, ii = tspans.length; i < ii; i++) {
              if (i) {
                $(tspans[i], {
                  dy: fontSize * leading,
                  x: a.x
                });
              } else {
                $(tspans[0], {
                  dy: 0
                });
              }
            }
          }

          $(node, {
            x: a.x,
            y: a.y
          });
          el._.dirty = 1;

          var bb = el._getBBox(),
              dif = a.y - (bb.y + bb.height / 2);

          dif && R.is(dif, "finite") && $(tspans[0], {
            dy: dif
          });
        },
            getRealNode = function getRealNode(node) {
          if (node.parentNode && node.parentNode.tagName.toLowerCase() === "a") {
            return node.parentNode;
          } else {
            return node;
          }
        },
            Element = function Element(node, svg) {
          var X = 0,
              Y = 0;
          /*\
           * Element.node
           [ property (object) ]
           **
           * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
           **
           * Note: Don’t mess with it.
           > Usage
           | // draw a circle at coordinate 10,10 with radius of 10
           | var c = paper.circle(10, 10, 10);
           | c.node.onclick = function () {
           |     c.attr("fill", "red");
           | };
          \*/

          this[0] = this.node = node;
          /*\
           * Element.raphael
           [ property (object) ]
           **
           * Internal reference to @Raphael object. In case it is not available.
           > Usage
           | Raphael.el.red = function () {
           |     var hsb = this.paper.raphael.rgb2hsb(this.attr("fill"));
           |     hsb.h = 1;
           |     this.attr({fill: this.paper.raphael.hsb2rgb(hsb).hex});
           | }
          \*/

          node.raphael = true;
          /*\
           * Element.id
           [ property (number) ]
           **
           * Unique id of the element. Especially useful when you want to listen to events of the element,
           * because all events are fired in format `<module>.<action>.<id>`. Also useful for @Paper.getById method.
          \*/

          this.id = guid();
          node.raphaelid = this.id;
          /**
          * Method that returns a 5 letter/digit id, enough for 36^5 = 60466176 elements
          * @returns {string} id
          */

          function guid() {
            return ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5);
          }

          this.matrix = R.matrix();
          this.realPath = null;
          /*\
           * Element.paper
           [ property (object) ]
           **
           * Internal reference to “paper” where object drawn. Mainly for use in plugins and element extensions.
           > Usage
           | Raphael.el.cross = function () {
           |     this.attr({fill: "red"});
           |     this.paper.path("M10,10L50,50M50,10L10,50")
           |         .attr({stroke: "red"});
           | }
          \*/

          this.paper = svg;
          this.attrs = this.attrs || {};
          this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
          };
          !svg.bottom && (svg.bottom = this);
          /*\
           * Element.prev
           [ property (object) ]
           **
           * Reference to the previous element in the hierarchy.
          \*/

          this.prev = svg.top;
          svg.top && (svg.top.next = this);
          svg.top = this;
          /*\
           * Element.next
           [ property (object) ]
           **
           * Reference to the next element in the hierarchy.
          \*/

          this.next = null;
        },
            elproto = R.el;

        Element.prototype = elproto;
        elproto.constructor = Element;

        R._engine.path = function (pathString, SVG) {
          var el = $("path");
          SVG.canvas && SVG.canvas.appendChild(el);
          var p = new Element(el, SVG);
          p.type = "path";
          setFillAndStroke(p, {
            fill: "none",
            stroke: "#000",
            path: pathString
          });
          return p;
        };
        /*\
         * Element.rotate
         [ method ]
         **
         * Deprecated! Use @Element.transform instead.
         * Adds rotation by given angle around given point to the list of
         * transformations of the element.
         > Parameters
         - deg (number) angle in degrees
         - cx (number) #optional x coordinate of the centre of rotation
         - cy (number) #optional y coordinate of the centre of rotation
         * If cx & cy aren’t specified centre of the shape is used as a point of rotation.
         = (object) @Element
        \*/


        elproto.rotate = function (deg, cx, cy) {
          if (this.removed) {
            return this;
          }

          deg = Str(deg).split(separator);

          if (deg.length - 1) {
            cx = toFloat(deg[1]);
            cy = toFloat(deg[2]);
          }

          deg = toFloat(deg[0]);
          cy == null && (cx = cy);

          if (cx == null || cy == null) {
            var bbox = this.getBBox(1);
            cx = bbox.x + bbox.width / 2;
            cy = bbox.y + bbox.height / 2;
          }

          this.transform(this._.transform.concat([["r", deg, cx, cy]]));
          return this;
        };
        /*\
         * Element.scale
         [ method ]
         **
         * Deprecated! Use @Element.transform instead.
         * Adds scale by given amount relative to given point to the list of
         * transformations of the element.
         > Parameters
         - sx (number) horisontal scale amount
         - sy (number) vertical scale amount
         - cx (number) #optional x coordinate of the centre of scale
         - cy (number) #optional y coordinate of the centre of scale
         * If cx & cy aren’t specified centre of the shape is used instead.
         = (object) @Element
        \*/


        elproto.scale = function (sx, sy, cx, cy) {
          if (this.removed) {
            return this;
          }

          sx = Str(sx).split(separator);

          if (sx.length - 1) {
            sy = toFloat(sx[1]);
            cx = toFloat(sx[2]);
            cy = toFloat(sx[3]);
          }

          sx = toFloat(sx[0]);
          sy == null && (sy = sx);
          cy == null && (cx = cy);

          if (cx == null || cy == null) {
            var bbox = this.getBBox(1);
          }

          cx = cx == null ? bbox.x + bbox.width / 2 : cx;
          cy = cy == null ? bbox.y + bbox.height / 2 : cy;
          this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
          return this;
        };
        /*\
         * Element.translate
         [ method ]
         **
         * Deprecated! Use @Element.transform instead.
         * Adds translation by given amount to the list of transformations of the element.
         > Parameters
         - dx (number) horisontal shift
         - dy (number) vertical shift
         = (object) @Element
        \*/


        elproto.translate = function (dx, dy) {
          if (this.removed) {
            return this;
          }

          dx = Str(dx).split(separator);

          if (dx.length - 1) {
            dy = toFloat(dx[1]);
          }

          dx = toFloat(dx[0]) || 0;
          dy = +dy || 0;
          this.transform(this._.transform.concat([["t", dx, dy]]));
          return this;
        };
        /*\
         * Element.transform
         [ method ]
         **
         * Adds transformation to the element which is separate to other attributes,
         * i.e. translation doesn’t change `x` or `y` of the rectange. The format
         * of transformation string is similar to the path string syntax:
         | "t100,100r30,100,100s2,2,100,100r45s1.5"
         * Each letter is a command. There are four commands: `t` is for translate, `r` is for rotate, `s` is for
         * scale and `m` is for matrix.
         *
         * There are also alternative “absolute” translation, rotation and scale: `T`, `R` and `S`. They will not take previous transformation into account. For example, `...T100,0` will always move element 100 px horisontally, while `...t100,0` could move it vertically if there is `r90` before. Just compare results of `r90t100,0` and `r90T100,0`.
         *
         * So, the example line above could be read like “translate by 100, 100; rotate 30° around 100, 100; scale twice around 100, 100;
         * rotate 45° around centre; scale 1.5 times relative to centre”. As you can see rotate and scale commands have origin
         * coordinates as optional parameters, the default is the centre point of the element.
         * Matrix accepts six parameters.
         > Usage
         | var el = paper.rect(10, 20, 300, 200);
         | // translate 100, 100, rotate 45°, translate -100, 0
         | el.transform("t100,100r45t-100,0");
         | // if you want you can append or prepend transformations
         | el.transform("...t50,50");
         | el.transform("s2...");
         | // or even wrap
         | el.transform("t50,50...t-50-50");
         | // to reset transformation call method with empty string
         | el.transform("");
         | // to get current value call it without parameters
         | console.log(el.transform());
         > Parameters
         - tstr (string) #optional transformation string
         * If tstr isn’t specified
         = (string) current transformation string
         * else
         = (object) @Element
        \*/


        elproto.transform = function (tstr) {
          var _ = this._;

          if (tstr == null) {
            return _.transform;
          }

          R._extractTransform(this, tstr);

          this.clip && $(this.clip, {
            transform: this.matrix.invert()
          });
          this.pattern && updatePosition(this);
          this.node && $(this.node, {
            transform: this.matrix
          });

          if (_.sx != 1 || _.sy != 1) {
            var sw = this.attrs[has]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
              "stroke-width": sw
            });
          }

          return this;
        };
        /*\
         * Element.hide
         [ method ]
         **
         * Makes element invisible. See @Element.show.
         = (object) @Element
        \*/


        elproto.hide = function () {
          if (!this.removed) this.node.style.display = "none";
          return this;
        };
        /*\
         * Element.show
         [ method ]
         **
         * Makes element visible. See @Element.hide.
         = (object) @Element
        \*/


        elproto.show = function () {
          if (!this.removed) this.node.style.display = "";
          return this;
        };
        /*\
         * Element.remove
         [ method ]
         **
         * Removes element from the paper.
        \*/


        elproto.remove = function () {
          var node = getRealNode(this.node);

          if (this.removed || !node.parentNode) {
            return;
          }

          var paper = this.paper;
          paper.__set__ && paper.__set__.exclude(this);
          eve.unbind("raphael.*.*." + this.id);

          if (this.gradient) {
            paper.defs.removeChild(this.gradient);
          }

          R._tear(this, paper);

          node.parentNode.removeChild(node); // Remove custom data for element

          this.removeData();

          for (var i in this) {
            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
          }

          this.removed = true;
        };

        elproto._getBBox = function () {
          if (this.node.style.display == "none") {
            this.show();
            var hide = true;
          }

          var canvasHidden = false,
              containerStyle;

          if (this.paper.canvas.parentElement) {
            containerStyle = this.paper.canvas.parentElement.style;
          } //IE10+ can't find parentElement
          else if (this.paper.canvas.parentNode) {
              containerStyle = this.paper.canvas.parentNode.style;
            }

          if (containerStyle && containerStyle.display == "none") {
            canvasHidden = true;
            containerStyle.display = "";
          }

          var bbox = {};

          try {
            bbox = this.node.getBBox();
          } catch (e) {
            // Firefox 3.0.x, 25.0.1 (probably more versions affected) play badly here - possible fix
            bbox = {
              x: this.node.clientLeft,
              y: this.node.clientTop,
              width: this.node.clientWidth,
              height: this.node.clientHeight
            };
          } finally {
            bbox = bbox || {};

            if (canvasHidden) {
              containerStyle.display = "none";
            }
          }

          hide && this.hide();
          return bbox;
        };
        /*\
         * Element.attr
         [ method ]
         **
         * Sets the attributes of the element.
         > Parameters
         - attrName (string) attribute’s name
         - value (string) value
         * or
         - params (object) object of name/value pairs
         * or
         - attrName (string) attribute’s name
         * or
         - attrNames (array) in this case method returns array of current values for given attribute names
         = (object) @Element if attrsName & value or params are passed in.
         = (...) value of the attribute if only attrsName is passed in.
         = (array) array of values of the attribute if attrsNames is passed in.
         = (object) object of attributes if nothing is passed in.
         > Possible parameters
         # <p>Please refer to the <a href="http://www.w3.org/TR/SVG/" title="The W3C Recommendation for the SVG language describes these properties in detail.">SVG specification</a> for an explanation of these parameters.</p>
         o arrow-end (string) arrowhead on the end of the path. The format for string is `<type>[-<width>[-<length>]]`. Possible types: `classic`, `block`, `open`, `oval`, `diamond`, `none`, width: `wide`, `narrow`, `medium`, length: `long`, `short`, `midium`.
         o clip-rect (string) comma or space separated values: x, y, width and height
         o cursor (string) CSS type of the cursor
         o cx (number) the x-axis coordinate of the center of the circle, or ellipse
         o cy (number) the y-axis coordinate of the center of the circle, or ellipse
         o fill (string) colour, gradient or image
         o fill-opacity (number)
         o font (string)
         o font-family (string)
         o font-size (number) font size in pixels
         o font-weight (string)
         o height (number)
         o href (string) URL, if specified element behaves as hyperlink
         o opacity (number)
         o path (string) SVG path string format
         o r (number) radius of the circle, ellipse or rounded corner on the rect
         o rx (number) horisontal radius of the ellipse
         o ry (number) vertical radius of the ellipse
         o src (string) image URL, only works for @Element.image element
         o stroke (string) stroke colour
         o stroke-dasharray (string) [“”, “none”, “`-`”, “`.`”, “`-.`”, “`-..`”, “`. `”, “`- `”, “`--`”, “`- .`”, “`--.`”, “`--..`”]
         o stroke-linecap (string) [“`butt`”, “`square`”, “`round`”]
         o stroke-linejoin (string) [“`bevel`”, “`round`”, “`miter`”]
         o stroke-miterlimit (number)
         o stroke-opacity (number)
         o stroke-width (number) stroke width in pixels, default is '1'
         o target (string) used with href
         o text (string) contents of the text element. Use `\n` for multiline text
         o text-anchor (string) [“`start`”, “`middle`”, “`end`”], default is “`middle`”
         o title (string) will create tooltip with a given text
         o transform (string) see @Element.transform
         o width (number)
         o x (number)
         o y (number)
         > Gradients
         * Linear gradient format: “`‹angle›-‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`90-#fff-#000`” – 90°
         * gradient from white to black or “`0-#fff-#f00:20-#000`” – 0° gradient from white via red (at 20%) to black.
         *
         * radial gradient: “`r[(‹fx›, ‹fy›)]‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`r#fff-#000`” –
         * gradient from white to black or “`r(0.25, 0.75)#fff-#000`” – gradient from white to black with focus point
         * at 0.25, 0.75. Focus point coordinates are in 0..1 range. Radial gradients can only be applied to circles and ellipses.
         > Path String
         # <p>Please refer to <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path’s data attribute’s format are described in the SVG specification.">SVG documentation regarding path string</a>. Raphaël fully supports it.</p>
         > Colour Parsing
         # <ul>
         #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
         #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
         #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
         #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
         #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
         #     <li>rgba(•••, •••, •••, •••) — red, green and blue channels’ values: (“<code>rgba(200,&nbsp;100,&nbsp;0, .5)</code>”)</li>
         #     <li>rgba(•••%, •••%, •••%, •••%) — same as above, but in %: (“<code>rgba(100%,&nbsp;175%,&nbsp;0%, 50%)</code>”)</li>
         #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
         #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
         #     <li>hsba(•••, •••, •••, •••) — same as above, but with opacity</li>
         #     <li>hsl(•••, •••, •••) — almost the same as hsb, see <a href="http://en.wikipedia.org/wiki/HSL_and_HSV" title="HSL and HSV - Wikipedia, the free encyclopedia">Wikipedia page</a></li>
         #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
         #     <li>hsla(•••, •••, •••, •••) — same as above, but with opacity</li>
         #     <li>Optionally for hsb and hsl you could specify hue as a degree: “<code>hsl(240deg,&nbsp;1,&nbsp;.5)</code>” or, if you want to go fancy, “<code>hsl(240°,&nbsp;1,&nbsp;.5)</code>”</li>
         # </ul>
        \*/


        elproto.attr = function (name, value) {
          if (this.removed) {
            return this;
          }

          if (name == null) {
            var res = {};

            for (var a in this.attrs) {
              if (this.attrs[has](a)) {
                res[a] = this.attrs[a];
              }
            }

            res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
            res.transform = this._.transform;
            return res;
          }

          if (value == null && R.is(name, "string")) {
            if (name == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
              return this.attrs.gradient;
            }

            if (name == "transform") {
              return this._.transform;
            }

            var names = name.split(separator),
                out = {};

            for (var i = 0, ii = names.length; i < ii; i++) {
              name = names[i];

              if (name in this.attrs) {
                out[name] = this.attrs[name];
              } else if (R.is(this.paper.customAttributes[name], "function")) {
                out[name] = this.paper.customAttributes[name].def;
              } else {
                out[name] = R._availableAttrs[name];
              }
            }

            return ii - 1 ? out : out[names[0]];
          }

          if (value == null && R.is(name, "array")) {
            out = {};

            for (i = 0, ii = name.length; i < ii; i++) {
              out[name[i]] = this.attr(name[i]);
            }

            return out;
          }

          if (value != null) {
            var params = {};
            params[name] = value;
          } else if (name != null && R.is(name, "object")) {
            params = name;
          }

          for (var key in params) {
            eve("raphael.attr." + key + "." + this.id, this, params[key]);
          }

          for (key in this.paper.customAttributes) {
            if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
              var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
              this.attrs[key] = params[key];

              for (var subkey in par) {
                if (par[has](subkey)) {
                  params[subkey] = par[subkey];
                }
              }
            }
          }

          setFillAndStroke(this, params);
          return this;
        };
        /*\
         * Element.toFront
         [ method ]
         **
         * Moves the element so it is the closest to the viewer’s eyes, on top of other elements.
         = (object) @Element
        \*/


        elproto.toFront = function () {
          if (this.removed) {
            return this;
          }

          var node = getRealNode(this.node);
          node.parentNode.appendChild(node);
          var svg = this.paper;
          svg.top != this && R._tofront(this, svg);
          return this;
        };
        /*\
         * Element.toBack
         [ method ]
         **
         * Moves the element so it is the furthest from the viewer’s eyes, behind other elements.
         = (object) @Element
        \*/


        elproto.toBack = function () {
          if (this.removed) {
            return this;
          }

          var node = getRealNode(this.node);
          var parentNode = node.parentNode;
          parentNode.insertBefore(node, parentNode.firstChild);

          R._toback(this, this.paper);

          var svg = this.paper;
          return this;
        };
        /*\
         * Element.insertAfter
         [ method ]
         **
         * Inserts current object after the given one.
         = (object) @Element
        \*/


        elproto.insertAfter = function (element) {
          if (this.removed || !element) {
            return this;
          }

          var node = getRealNode(this.node);
          var afterNode = getRealNode(element.node || element[element.length - 1].node);

          if (afterNode.nextSibling) {
            afterNode.parentNode.insertBefore(node, afterNode.nextSibling);
          } else {
            afterNode.parentNode.appendChild(node);
          }

          R._insertafter(this, element, this.paper);

          return this;
        };
        /*\
         * Element.insertBefore
         [ method ]
         **
         * Inserts current object before the given one.
         = (object) @Element
        \*/


        elproto.insertBefore = function (element) {
          if (this.removed || !element) {
            return this;
          }

          var node = getRealNode(this.node);
          var beforeNode = getRealNode(element.node || element[0].node);
          beforeNode.parentNode.insertBefore(node, beforeNode);

          R._insertbefore(this, element, this.paper);

          return this;
        };

        elproto.blur = function (size) {
          // Experimental. No Safari support. Use it on your own risk.
          var t = this;

          if (+size !== 0) {
            var fltr = $("filter"),
                blur = $("feGaussianBlur");
            t.attrs.blur = size;
            fltr.id = R.createUUID();
            $(blur, {
              stdDeviation: +size || 1.5
            });
            fltr.appendChild(blur);
            t.paper.defs.appendChild(fltr);
            t._blur = fltr;
            $(t.node, {
              filter: "url(#" + fltr.id + ")"
            });
          } else {
            if (t._blur) {
              t._blur.parentNode.removeChild(t._blur);

              delete t._blur;
              delete t.attrs.blur;
            }

            t.node.removeAttribute("filter");
          }

          return t;
        };

        R._engine.circle = function (svg, x, y, r) {
          var el = $("circle");
          svg.canvas && svg.canvas.appendChild(el);
          var res = new Element(el, svg);
          res.attrs = {
            cx: x,
            cy: y,
            r: r,
            fill: "none",
            stroke: "#000"
          };
          res.type = "circle";
          $(el, res.attrs);
          return res;
        };

        R._engine.rect = function (svg, x, y, w, h, r) {
          var el = $("rect");
          svg.canvas && svg.canvas.appendChild(el);
          var res = new Element(el, svg);
          res.attrs = {
            x: x,
            y: y,
            width: w,
            height: h,
            rx: r || 0,
            ry: r || 0,
            fill: "none",
            stroke: "#000"
          };
          res.type = "rect";
          $(el, res.attrs);
          return res;
        };

        R._engine.ellipse = function (svg, x, y, rx, ry) {
          var el = $("ellipse");
          svg.canvas && svg.canvas.appendChild(el);
          var res = new Element(el, svg);
          res.attrs = {
            cx: x,
            cy: y,
            rx: rx,
            ry: ry,
            fill: "none",
            stroke: "#000"
          };
          res.type = "ellipse";
          $(el, res.attrs);
          return res;
        };

        R._engine.image = function (svg, src, x, y, w, h) {
          var el = $("image");
          $(el, {
            x: x,
            y: y,
            width: w,
            height: h,
            preserveAspectRatio: "none"
          });
          el.setAttributeNS(xlink, "href", src);
          svg.canvas && svg.canvas.appendChild(el);
          var res = new Element(el, svg);
          res.attrs = {
            x: x,
            y: y,
            width: w,
            height: h,
            src: src
          };
          res.type = "image";
          return res;
        };

        R._engine.text = function (svg, x, y, text) {
          var el = $("text");
          svg.canvas && svg.canvas.appendChild(el);
          var res = new Element(el, svg);
          res.attrs = {
            x: x,
            y: y,
            "text-anchor": "middle",
            text: text,
            "font-family": R._availableAttrs["font-family"],
            "font-size": R._availableAttrs["font-size"],
            stroke: "none",
            fill: "#000"
          };
          res.type = "text";
          setFillAndStroke(res, res.attrs);
          return res;
        };

        R._engine.setSize = function (width, height) {
          this.width = width || this.width;
          this.height = height || this.height;
          this.canvas.setAttribute("width", this.width);
          this.canvas.setAttribute("height", this.height);

          if (this._viewBox) {
            this.setViewBox.apply(this, this._viewBox);
          }

          return this;
        };

        R._engine.create = function () {
          var con = R._getContainer.apply(0, arguments),
              container = con && con.container,
              x = con.x,
              y = con.y,
              width = con.width,
              height = con.height;

          if (!container) {
            throw new Error("SVG container not found.");
          }

          var cnvs = $("svg"),
              css = "overflow:hidden;",
              isFloating;
          x = x || 0;
          y = y || 0;
          width = width || 512;
          height = height || 342;
          $(cnvs, {
            height: height,
            version: 1.1,
            width: width,
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
          });

          if (container == 1) {
            cnvs.style.cssText = css + "position:absolute;left:" + x + "px;top:" + y + "px";

            R._g.doc.body.appendChild(cnvs);

            isFloating = 1;
          } else {
            cnvs.style.cssText = css + "position:relative";

            if (container.firstChild) {
              container.insertBefore(cnvs, container.firstChild);
            } else {
              container.appendChild(cnvs);
            }
          }

          container = new R._Paper();
          container.width = width;
          container.height = height;
          container.canvas = cnvs;
          container.clear();
          container._left = container._top = 0;
          isFloating && (container.renderfix = function () {});
          container.renderfix();
          return container;
        };

        R._engine.setViewBox = function (x, y, w, h, fit) {
          eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
          var paperSize = this.getSize(),
              size = mmax(w / paperSize.width, h / paperSize.height),
              top = this.top,
              aspectRatio = fit ? "xMidYMid meet" : "xMinYMin",
              vb,
              sw;

          if (x == null) {
            if (this._vbSize) {
              size = 1;
            }

            delete this._vbSize;
            vb = "0 0 " + this.width + S + this.height;
          } else {
            this._vbSize = size;
            vb = x + S + y + S + w + S + h;
          }

          $(this.canvas, {
            viewBox: vb,
            preserveAspectRatio: aspectRatio
          });

          while (size && top) {
            sw = "stroke-width" in top.attrs ? top.attrs["stroke-width"] : 1;
            top.attr({
              "stroke-width": sw
            });
            top._.dirty = 1;
            top._.dirtyT = 1;
            top = top.prev;
          }

          this._viewBox = [x, y, w, h, !!fit];
          return this;
        };
        /*\
         * Paper.renderfix
         [ method ]
         **
         * Fixes the issue of Firefox and IE9 regarding subpixel rendering. If paper is dependent
         * on other elements after reflow it could shift half pixel which cause for lines to lost their crispness.
         * This method fixes the issue.
         **
           Special thanks to Mariusz Nowak (http://www.medikoo.com/) for this method.
        \*/


        R.prototype.renderfix = function () {
          var cnvs = this.canvas,
              s = cnvs.style,
              pos;

          try {
            pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();
          } catch (e) {
            pos = cnvs.createSVGMatrix();
          }

          var left = -pos.e % 1,
              top = -pos.f % 1;

          if (left || top) {
            if (left) {
              this._left = (this._left + left) % 1;
              s.left = this._left + "px";
            }

            if (top) {
              this._top = (this._top + top) % 1;
              s.top = this._top + "px";
            }
          }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Clears the paper, i.e. removes all the elements.
        \*/


        R.prototype.clear = function () {
          R.eve("raphael.clear", this);
          var c = this.canvas;

          while (c.firstChild) {
            c.removeChild(c.firstChild);
          }

          this.bottom = this.top = null;
          (this.desc = $("desc")).appendChild(R._g.doc.createTextNode("Created with Rapha\xebl " + R.version));
          c.appendChild(this.desc);
          c.appendChild(this.defs = $("defs"));
        };
        /*\
         * Paper.remove
         [ method ]
         **
         * Removes the paper from the DOM.
        \*/


        R.prototype.remove = function () {
          eve("raphael.remove", this);
          this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);

          for (var i in this) {
            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
          }
        };

        var setproto = R.st;

        for (var method in elproto) {
          if (elproto[has](method) && !setproto[has](method)) {
            setproto[method] = function (methodname) {
              return function () {
                var arg = arguments;
                return this.forEach(function (el) {
                  el[methodname].apply(el, arg);
                });
              };
            }(method);
          }
        }
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (R) {
        if (R && !R.vml) {
          return;
        }

        var has = "hasOwnProperty",
            Str = String,
            toFloat = parseFloat,
            math = Math,
            round = math.round,
            mmax = math.max,
            mmin = math.min,
            abs = math.abs,
            fillString = "fill",
            separator = /[, ]+/,
            eve = R.eve,
            ms = " progid:DXImageTransform.Microsoft",
            S = " ",
            E = "",
            map = {
          M: "m",
          L: "l",
          C: "c",
          Z: "x",
          m: "t",
          l: "r",
          c: "v",
          z: "x"
        },
            bites = /([clmz]),?([^clmz]*)/gi,
            blurregexp = / progid:\S+Blur\([^\)]+\)/g,
            val = /-?[^,\s-]+/g,
            cssDot = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
            zoom = 21600,
            pathTypes = {
          path: 1,
          rect: 1,
          image: 1
        },
            ovalTypes = {
          circle: 1,
          ellipse: 1
        },
            path2vml = function path2vml(path) {
          var total = /[ahqstv]/ig,
              command = R._pathToAbsolute;
          Str(path).match(total) && (command = R._path2curve);
          total = /[clmz]/g;

          if (command == R._pathToAbsolute && !Str(path).match(total)) {
            var res = Str(path).replace(bites, function (all, command, args) {
              var vals = [],
                  isMove = command.toLowerCase() == "m",
                  res = map[command];
              args.replace(val, function (value) {
                if (isMove && vals.length == 2) {
                  res += vals + map[command == "m" ? "l" : "L"];
                  vals = [];
                }

                vals.push(round(value * zoom));
              });
              return res + vals;
            });
            return res;
          }

          var pa = command(path),
              p,
              r;
          res = [];

          for (var i = 0, ii = pa.length; i < ii; i++) {
            p = pa[i];
            r = pa[i][0].toLowerCase();
            r == "z" && (r = "x");

            for (var j = 1, jj = p.length; j < jj; j++) {
              r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
            }

            res.push(r);
          }

          return res.join(S);
        },
            compensation = function compensation(deg, dx, dy) {
          var m = R.matrix();
          m.rotate(-deg, .5, .5);
          return {
            dx: m.x(dx, dy),
            dy: m.y(dx, dy)
          };
        },
            setCoords = function setCoords(p, sx, sy, dx, dy, deg) {
          var _ = p._,
              m = p.matrix,
              fillpos = _.fillpos,
              o = p.node,
              s = o.style,
              y = 1,
              flip = "",
              dxdy,
              kx = zoom / sx,
              ky = zoom / sy;
          s.visibility = "hidden";

          if (!sx || !sy) {
            return;
          }

          o.coordsize = abs(kx) + S + abs(ky);
          s.rotation = deg * (sx * sy < 0 ? -1 : 1);

          if (deg) {
            var c = compensation(deg, dx, dy);
            dx = c.dx;
            dy = c.dy;
          }

          sx < 0 && (flip += "x");
          sy < 0 && (flip += " y") && (y = -1);
          s.flip = flip;
          o.coordorigin = dx * -kx + S + dy * -ky;

          if (fillpos || _.fillsize) {
            var fill = o.getElementsByTagName(fillString);
            fill = fill && fill[0];
            o.removeChild(fill);

            if (fillpos) {
              c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
              fill.position = c.dx * y + S + c.dy * y;
            }

            if (_.fillsize) {
              fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
            }

            o.appendChild(fill);
          }

          s.visibility = "visible";
        };

        R.toString = function () {
          return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xEBl " + this.version;
        };

        var addArrow = function addArrow(o, value, isEnd) {
          var values = Str(value).toLowerCase().split("-"),
              se = isEnd ? "end" : "start",
              i = values.length,
              type = "classic",
              w = "medium",
              h = "medium";

          while (i--) {
            switch (values[i]) {
              case "block":
              case "classic":
              case "oval":
              case "diamond":
              case "open":
              case "none":
                type = values[i];
                break;

              case "wide":
              case "narrow":
                h = values[i];
                break;

              case "long":
              case "short":
                w = values[i];
                break;
            }
          }

          var stroke = o.node.getElementsByTagName("stroke")[0];
          stroke[se + "arrow"] = type;
          stroke[se + "arrowlength"] = w;
          stroke[se + "arrowwidth"] = h;
        },
            setFillAndStroke = function setFillAndStroke(o, params) {
          // o.paper.canvas.style.display = "none";
          o.attrs = o.attrs || {};
          var node = o.node,
              a = o.attrs,
              s = node.style,
              xy,
              newpath = pathTypes[o.type] && (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.cx != a.cx || params.cy != a.cy || params.rx != a.rx || params.ry != a.ry || params.r != a.r),
              isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry),
              res = o;

          for (var par in params) {
            if (params[has](par)) {
              a[par] = params[par];
            }
          }

          if (newpath) {
            a.path = R._getPath[o.type](o);
            o._.dirty = 1;
          }

          params.href && (node.href = params.href);
          params.title && (node.title = params.title);
          params.target && (node.target = params.target);
          params.cursor && (s.cursor = params.cursor);
          "blur" in params && o.blur(params.blur);

          if (params.path && o.type == "path" || newpath) {
            node.path = path2vml(~Str(a.path).toLowerCase().indexOf("r") ? R._pathToAbsolute(a.path) : a.path);
            o._.dirty = 1;

            if (o.type == "image") {
              o._.fillpos = [a.x, a.y];
              o._.fillsize = [a.width, a.height];
              setCoords(o, 1, 1, 0, 0, 0);
            }
          }

          "transform" in params && o.transform(params.transform);

          if (isOval) {
            var cx = +a.cx,
                cy = +a.cy,
                rx = +a.rx || +a.r || 0,
                ry = +a.ry || +a.r || 0;
            node.path = R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", round((cx - rx) * zoom), round((cy - ry) * zoom), round((cx + rx) * zoom), round((cy + ry) * zoom), round(cx * zoom));
            o._.dirty = 1;
          }

          if ("clip-rect" in params) {
            var rect = Str(params["clip-rect"]).split(separator);

            if (rect.length == 4) {
              rect[2] = +rect[2] + +rect[0];
              rect[3] = +rect[3] + +rect[1];

              var div = node.clipRect || R._g.doc.createElement("div"),
                  dstyle = div.style;

              dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);

              if (!node.clipRect) {
                dstyle.position = "absolute";
                dstyle.top = 0;
                dstyle.left = 0;
                dstyle.width = o.paper.width + "px";
                dstyle.height = o.paper.height + "px";
                node.parentNode.insertBefore(div, node);
                div.appendChild(node);
                node.clipRect = div;
              }
            }

            if (!params["clip-rect"]) {
              node.clipRect && (node.clipRect.style.clip = "auto");
            }
          }

          if (o.textpath) {
            var textpathStyle = o.textpath.style;
            params.font && (textpathStyle.font = params.font);
            params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');
            params["font-size"] && (textpathStyle.fontSize = params["font-size"]);
            params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);
            params["font-style"] && (textpathStyle.fontStyle = params["font-style"]);
          }

          if ("arrow-start" in params) {
            addArrow(res, params["arrow-start"]);
          }

          if ("arrow-end" in params) {
            addArrow(res, params["arrow-end"], 1);
          }

          if (params.opacity != null || params.fill != null || params.src != null || params.stroke != null || params["stroke-width"] != null || params["stroke-opacity"] != null || params["fill-opacity"] != null || params["stroke-dasharray"] != null || params["stroke-miterlimit"] != null || params["stroke-linejoin"] != null || params["stroke-linecap"] != null) {
            var fill = node.getElementsByTagName(fillString),
                newfill = false;
            fill = fill && fill[0];
            !fill && (newfill = fill = createNode(fillString));

            if (o.type == "image" && params.src) {
              fill.src = params.src;
            }

            params.fill && (fill.on = true);

            if (fill.on == null || params.fill == "none" || params.fill === null) {
              fill.on = false;
            }

            if (fill.on && params.fill) {
              var isURL = Str(params.fill).match(R._ISURL);

              if (isURL) {
                fill.parentNode == node && node.removeChild(fill);
                fill.rotate = true;
                fill.src = isURL[1];
                fill.type = "tile";
                var bbox = o.getBBox(1);
                fill.position = bbox.x + S + bbox.y;
                o._.fillpos = [bbox.x, bbox.y];

                R._preload(isURL[1], function () {
                  o._.fillsize = [this.offsetWidth, this.offsetHeight];
                });
              } else {
                fill.color = R.getRGB(params.fill).hex;
                fill.src = E;
                fill.type = "solid";

                if (R.getRGB(params.fill).error && (res.type in {
                  circle: 1,
                  ellipse: 1
                } || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
                  a.fill = "none";
                  a.gradient = params.fill;
                  fill.rotate = false;
                }
              }
            }

            if ("fill-opacity" in params || "opacity" in params) {
              var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
              opacity = mmin(mmax(opacity, 0), 1);
              fill.opacity = opacity;

              if (fill.src) {
                fill.color = "none";
              }
            }

            node.appendChild(fill);
            var stroke = node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0],
                newstroke = false;
            !stroke && (newstroke = stroke = createNode("stroke"));

            if (params.stroke && params.stroke != "none" || params["stroke-width"] || params["stroke-opacity"] != null || params["stroke-dasharray"] || params["stroke-miterlimit"] || params["stroke-linejoin"] || params["stroke-linecap"]) {
              stroke.on = true;
            }

            (params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
            var strokeColor = R.getRGB(params.stroke);
            stroke.on && params.stroke && (stroke.color = strokeColor.hex);
            opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.o + 1 || 2) - 1);
            var width = (toFloat(params["stroke-width"]) || 1) * .75;
            opacity = mmin(mmax(opacity, 0), 1);
            params["stroke-width"] == null && (width = a["stroke-width"]);
            params["stroke-width"] && (stroke.weight = width);
            width && width < 1 && (opacity *= width) && (stroke.weight = 1);
            stroke.opacity = opacity;
            params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"] || "miter");
            stroke.miterlimit = params["stroke-miterlimit"] || 8;
            params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");

            if ("stroke-dasharray" in params) {
              var dasharray = {
                "-": "shortdash",
                ".": "shortdot",
                "-.": "shortdashdot",
                "-..": "shortdashdotdot",
                ". ": "dot",
                "- ": "dash",
                "--": "longdash",
                "- .": "dashdot",
                "--.": "longdashdot",
                "--..": "longdashdotdot"
              };
              stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : E;
            }

            newstroke && node.appendChild(stroke);
          }

          if (res.type == "text") {
            res.paper.canvas.style.display = E;
            var span = res.paper.span,
                m = 100,
                fontSize = a.font && a.font.match(/\d+(?:\.\d*)?(?=px)/);
            s = span.style;
            a.font && (s.font = a.font);
            a["font-family"] && (s.fontFamily = a["font-family"]);
            a["font-weight"] && (s.fontWeight = a["font-weight"]);
            a["font-style"] && (s.fontStyle = a["font-style"]);
            fontSize = toFloat(a["font-size"] || fontSize && fontSize[0]) || 10;
            s.fontSize = fontSize * m + "px";
            res.textpath.string && (span.innerHTML = Str(res.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var brect = span.getBoundingClientRect();
            res.W = a.w = (brect.right - brect.left) / m;
            res.H = a.h = (brect.bottom - brect.top) / m; // res.paper.canvas.style.display = "none";

            res.X = a.x;
            res.Y = a.y + res.H / 2;
            ("x" in params || "y" in params) && (res.path.v = R.format("m{0},{1}l{2},{1}", round(a.x * zoom), round(a.y * zoom), round(a.x * zoom) + 1));
            var dirtyattrs = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];

            for (var d = 0, dd = dirtyattrs.length; d < dd; d++) {
              if (dirtyattrs[d] in params) {
                res._.dirty = 1;
                break;
              }
            } // text-anchor emulation


            switch (a["text-anchor"]) {
              case "start":
                res.textpath.style["v-text-align"] = "left";
                res.bbx = res.W / 2;
                break;

              case "end":
                res.textpath.style["v-text-align"] = "right";
                res.bbx = -res.W / 2;
                break;

              default:
                res.textpath.style["v-text-align"] = "center";
                res.bbx = 0;
                break;
            }

            res.textpath.style["v-text-kern"] = true;
          } // res.paper.canvas.style.display = E;

        },
            addGradientFill = function addGradientFill(o, gradient, fill) {
          o.attrs = o.attrs || {};
          var attrs = o.attrs,
              pow = Math.pow,
              opacity,
              oindex,
              type = "linear",
              fxfy = ".5 .5";
          o.attrs.gradient = gradient;
          gradient = Str(gradient).replace(R._radial_gradient, function (all, fx, fy) {
            type = "radial";

            if (fx && fy) {
              fx = toFloat(fx);
              fy = toFloat(fy);
              pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
              fxfy = fx + S + fy;
            }

            return E;
          });
          gradient = gradient.split(/\s*\-\s*/);

          if (type == "linear") {
            var angle = gradient.shift();
            angle = -toFloat(angle);

            if (isNaN(angle)) {
              return null;
            }
          }

          var dots = R._parseDots(gradient);

          if (!dots) {
            return null;
          }

          o = o.shape || o.node;

          if (dots.length) {
            o.removeChild(fill);
            fill.on = true;
            fill.method = "none";
            fill.color = dots[0].color;
            fill.color2 = dots[dots.length - 1].color;
            var clrs = [];

            for (var i = 0, ii = dots.length; i < ii; i++) {
              dots[i].offset && clrs.push(dots[i].offset + S + dots[i].color);
            }

            fill.colors = clrs.length ? clrs.join() : "0% " + fill.color;

            if (type == "radial") {
              fill.type = "gradientTitle";
              fill.focus = "100%";
              fill.focussize = "0 0";
              fill.focusposition = fxfy;
              fill.angle = 0;
            } else {
              // fill.rotate= true;
              fill.type = "gradient";
              fill.angle = (270 - angle) % 360;
            }

            o.appendChild(fill);
          }

          return 1;
        },
            Element = function Element(node, vml) {
          this[0] = this.node = node;
          node.raphael = true;
          this.id = R._oid++;
          node.raphaelid = this.id;
          this.X = 0;
          this.Y = 0;
          this.attrs = {};
          this.paper = vml;
          this.matrix = R.matrix();
          this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
          };
          !vml.bottom && (vml.bottom = this);
          this.prev = vml.top;
          vml.top && (vml.top.next = this);
          vml.top = this;
          this.next = null;
        };

        var elproto = R.el;
        Element.prototype = elproto;
        elproto.constructor = Element;

        elproto.transform = function (tstr) {
          if (tstr == null) {
            return this._.transform;
          }

          var vbs = this.paper._viewBoxShift,
              vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,
              oldt;

          if (vbs) {
            oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, this._.transform || E);
          }

          R._extractTransform(this, vbt + tstr);

          var matrix = this.matrix.clone(),
              skew = this.skew,
              o = this.node,
              split,
              isGrad = ~Str(this.attrs.fill).indexOf("-"),
              isPatt = !Str(this.attrs.fill).indexOf("url(");
          matrix.translate(1, 1);

          if (isPatt || isGrad || this.type == "image") {
            skew.matrix = "1 0 0 1";
            skew.offset = "0 0";
            split = matrix.split();

            if (isGrad && split.noRotation || !split.isSimple) {
              o.style.filter = matrix.toFilter();
              var bb = this.getBBox(),
                  bbt = this.getBBox(1),
                  dx = bb.x - bbt.x,
                  dy = bb.y - bbt.y;
              o.coordorigin = dx * -zoom + S + dy * -zoom;
              setCoords(this, 1, 1, dx, dy, 0);
            } else {
              o.style.filter = E;
              setCoords(this, split.scalex, split.scaley, split.dx, split.dy, split.rotate);
            }
          } else {
            o.style.filter = E;
            skew.matrix = Str(matrix);
            skew.offset = matrix.offset();
          }

          if (oldt !== null) {
            // empty string value is true as well
            this._.transform = oldt;

            R._extractTransform(this, oldt);
          }

          return this;
        };

        elproto.rotate = function (deg, cx, cy) {
          if (this.removed) {
            return this;
          }

          if (deg == null) {
            return;
          }

          deg = Str(deg).split(separator);

          if (deg.length - 1) {
            cx = toFloat(deg[1]);
            cy = toFloat(deg[2]);
          }

          deg = toFloat(deg[0]);
          cy == null && (cx = cy);

          if (cx == null || cy == null) {
            var bbox = this.getBBox(1);
            cx = bbox.x + bbox.width / 2;
            cy = bbox.y + bbox.height / 2;
          }

          this._.dirtyT = 1;
          this.transform(this._.transform.concat([["r", deg, cx, cy]]));
          return this;
        };

        elproto.translate = function (dx, dy) {
          if (this.removed) {
            return this;
          }

          dx = Str(dx).split(separator);

          if (dx.length - 1) {
            dy = toFloat(dx[1]);
          }

          dx = toFloat(dx[0]) || 0;
          dy = +dy || 0;

          if (this._.bbox) {
            this._.bbox.x += dx;
            this._.bbox.y += dy;
          }

          this.transform(this._.transform.concat([["t", dx, dy]]));
          return this;
        };

        elproto.scale = function (sx, sy, cx, cy) {
          if (this.removed) {
            return this;
          }

          sx = Str(sx).split(separator);

          if (sx.length - 1) {
            sy = toFloat(sx[1]);
            cx = toFloat(sx[2]);
            cy = toFloat(sx[3]);
            isNaN(cx) && (cx = null);
            isNaN(cy) && (cy = null);
          }

          sx = toFloat(sx[0]);
          sy == null && (sy = sx);
          cy == null && (cx = cy);

          if (cx == null || cy == null) {
            var bbox = this.getBBox(1);
          }

          cx = cx == null ? bbox.x + bbox.width / 2 : cx;
          cy = cy == null ? bbox.y + bbox.height / 2 : cy;
          this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
          this._.dirtyT = 1;
          return this;
        };

        elproto.hide = function () {
          !this.removed && (this.node.style.display = "none");
          return this;
        };

        elproto.show = function () {
          !this.removed && (this.node.style.display = E);
          return this;
        }; // Needed to fix the vml setViewBox issues


        elproto.auxGetBBox = R.el.getBBox;

        elproto.getBBox = function () {
          var b = this.auxGetBBox();

          if (this.paper && this.paper._viewBoxShift) {
            var c = {};
            var z = 1 / this.paper._viewBoxShift.scale;
            c.x = b.x - this.paper._viewBoxShift.dx;
            c.x *= z;
            c.y = b.y - this.paper._viewBoxShift.dy;
            c.y *= z;
            c.width = b.width * z;
            c.height = b.height * z;
            c.x2 = c.x + c.width;
            c.y2 = c.y + c.height;
            return c;
          }

          return b;
        };

        elproto._getBBox = function () {
          if (this.removed) {
            return {};
          }

          return {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
          };
        };

        elproto.remove = function () {
          if (this.removed || !this.node.parentNode) {
            return;
          }

          this.paper.__set__ && this.paper.__set__.exclude(this);
          R.eve.unbind("raphael.*.*." + this.id);

          R._tear(this, this.paper);

          this.node.parentNode.removeChild(this.node);
          this.shape && this.shape.parentNode.removeChild(this.shape);

          for (var i in this) {
            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
          }

          this.removed = true;
        };

        elproto.attr = function (name, value) {
          if (this.removed) {
            return this;
          }

          if (name == null) {
            var res = {};

            for (var a in this.attrs) {
              if (this.attrs[has](a)) {
                res[a] = this.attrs[a];
              }
            }

            res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
            res.transform = this._.transform;
            return res;
          }

          if (value == null && R.is(name, "string")) {
            if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
              return this.attrs.gradient;
            }

            var names = name.split(separator),
                out = {};

            for (var i = 0, ii = names.length; i < ii; i++) {
              name = names[i];

              if (name in this.attrs) {
                out[name] = this.attrs[name];
              } else if (R.is(this.paper.customAttributes[name], "function")) {
                out[name] = this.paper.customAttributes[name].def;
              } else {
                out[name] = R._availableAttrs[name];
              }
            }

            return ii - 1 ? out : out[names[0]];
          }

          if (this.attrs && value == null && R.is(name, "array")) {
            out = {};

            for (i = 0, ii = name.length; i < ii; i++) {
              out[name[i]] = this.attr(name[i]);
            }

            return out;
          }

          var params;

          if (value != null) {
            params = {};
            params[name] = value;
          }

          value == null && R.is(name, "object") && (params = name);

          for (var key in params) {
            eve("raphael.attr." + key + "." + this.id, this, params[key]);
          }

          if (params) {
            for (key in this.paper.customAttributes) {
              if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
                var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
                this.attrs[key] = params[key];

                for (var subkey in par) {
                  if (par[has](subkey)) {
                    params[subkey] = par[subkey];
                  }
                }
              }
            } // this.paper.canvas.style.display = "none";


            if (params.text && this.type == "text") {
              this.textpath.string = params.text;
            }

            setFillAndStroke(this, params); // this.paper.canvas.style.display = E;
          }

          return this;
        };

        elproto.toFront = function () {
          !this.removed && this.node.parentNode.appendChild(this.node);
          this.paper && this.paper.top != this && R._tofront(this, this.paper);
          return this;
        };

        elproto.toBack = function () {
          if (this.removed) {
            return this;
          }

          if (this.node.parentNode.firstChild != this.node) {
            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);

            R._toback(this, this.paper);
          }

          return this;
        };

        elproto.insertAfter = function (element) {
          if (this.removed) {
            return this;
          }

          if (element.constructor == R.st.constructor) {
            element = element[element.length - 1];
          }

          if (element.node.nextSibling) {
            element.node.parentNode.insertBefore(this.node, element.node.nextSibling);
          } else {
            element.node.parentNode.appendChild(this.node);
          }

          R._insertafter(this, element, this.paper);

          return this;
        };

        elproto.insertBefore = function (element) {
          if (this.removed) {
            return this;
          }

          if (element.constructor == R.st.constructor) {
            element = element[0];
          }

          element.node.parentNode.insertBefore(this.node, element.node);

          R._insertbefore(this, element, this.paper);

          return this;
        };

        elproto.blur = function (size) {
          var s = this.node.runtimeStyle,
              f = s.filter;
          f = f.replace(blurregexp, E);

          if (+size !== 0) {
            this.attrs.blur = size;
            s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
            s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
          } else {
            s.filter = f;
            s.margin = 0;
            delete this.attrs.blur;
          }

          return this;
        };

        R._engine.path = function (pathString, vml) {
          var el = createNode("shape");
          el.style.cssText = cssDot;
          el.coordsize = zoom + S + zoom;
          el.coordorigin = vml.coordorigin;
          var p = new Element(el, vml),
              attr = {
            fill: "none",
            stroke: "#000"
          };
          pathString && (attr.path = pathString);
          p.type = "path";
          p.path = [];
          p.Path = E;
          setFillAndStroke(p, attr);
          vml.canvas && vml.canvas.appendChild(el);
          var skew = createNode("skew");
          skew.on = true;
          el.appendChild(skew);
          p.skew = skew;
          p.transform(E);
          return p;
        };

        R._engine.rect = function (vml, x, y, w, h, r) {
          var path = R._rectPath(x, y, w, h, r),
              res = vml.path(path),
              a = res.attrs;

          res.X = a.x = x;
          res.Y = a.y = y;
          res.W = a.width = w;
          res.H = a.height = h;
          a.r = r;
          a.path = path;
          res.type = "rect";
          return res;
        };

        R._engine.ellipse = function (vml, x, y, rx, ry) {
          var res = vml.path(),
              a = res.attrs;
          res.X = x - rx;
          res.Y = y - ry;
          res.W = rx * 2;
          res.H = ry * 2;
          res.type = "ellipse";
          setFillAndStroke(res, {
            cx: x,
            cy: y,
            rx: rx,
            ry: ry
          });
          return res;
        };

        R._engine.circle = function (vml, x, y, r) {
          var res = vml.path(),
              a = res.attrs;
          res.X = x - r;
          res.Y = y - r;
          res.W = res.H = r * 2;
          res.type = "circle";
          setFillAndStroke(res, {
            cx: x,
            cy: y,
            r: r
          });
          return res;
        };

        R._engine.image = function (vml, src, x, y, w, h) {
          var path = R._rectPath(x, y, w, h),
              res = vml.path(path).attr({
            stroke: "none"
          }),
              a = res.attrs,
              node = res.node,
              fill = node.getElementsByTagName(fillString)[0];

          a.src = src;
          res.X = a.x = x;
          res.Y = a.y = y;
          res.W = a.width = w;
          res.H = a.height = h;
          a.path = path;
          res.type = "image";
          fill.parentNode == node && node.removeChild(fill);
          fill.rotate = true;
          fill.src = src;
          fill.type = "tile";
          res._.fillpos = [x, y];
          res._.fillsize = [w, h];
          node.appendChild(fill);
          setCoords(res, 1, 1, 0, 0, 0);
          return res;
        };

        R._engine.text = function (vml, x, y, text) {
          var el = createNode("shape"),
              path = createNode("path"),
              o = createNode("textpath");
          x = x || 0;
          y = y || 0;
          text = text || "";
          path.v = R.format("m{0},{1}l{2},{1}", round(x * zoom), round(y * zoom), round(x * zoom) + 1);
          path.textpathok = true;
          o.string = Str(text);
          o.on = true;
          el.style.cssText = cssDot;
          el.coordsize = zoom + S + zoom;
          el.coordorigin = "0 0";
          var p = new Element(el, vml),
              attr = {
            fill: "#000",
            stroke: "none",
            font: R._availableAttrs.font,
            text: text
          };
          p.shape = el;
          p.path = path;
          p.textpath = o;
          p.type = "text";
          p.attrs.text = Str(text);
          p.attrs.x = x;
          p.attrs.y = y;
          p.attrs.w = 1;
          p.attrs.h = 1;
          setFillAndStroke(p, attr);
          el.appendChild(o);
          el.appendChild(path);
          vml.canvas.appendChild(el);
          var skew = createNode("skew");
          skew.on = true;
          el.appendChild(skew);
          p.skew = skew;
          p.transform(E);
          return p;
        };

        R._engine.setSize = function (width, height) {
          var cs = this.canvas.style;
          this.width = width;
          this.height = height;
          width == +width && (width += "px");
          height == +height && (height += "px");
          cs.width = width;
          cs.height = height;
          cs.clip = "rect(0 " + width + " " + height + " 0)";

          if (this._viewBox) {
            R._engine.setViewBox.apply(this, this._viewBox);
          }

          return this;
        };

        R._engine.setViewBox = function (x, y, w, h, fit) {
          R.eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
          var paperSize = this.getSize(),
              width = paperSize.width,
              height = paperSize.height,
              H,
              W;

          if (fit) {
            H = height / h;
            W = width / w;

            if (w * H < width) {
              x -= (width - w * H) / 2 / H;
            }

            if (h * W < height) {
              y -= (height - h * W) / 2 / W;
            }
          }

          this._viewBox = [x, y, w, h, !!fit];
          this._viewBoxShift = {
            dx: -x,
            dy: -y,
            scale: paperSize
          };
          this.forEach(function (el) {
            el.transform("...");
          });
          return this;
        };

        var createNode;

        R._engine.initWin = function (win) {
          var doc = win.document;

          if (doc.styleSheets.length < 31) {
            doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
          } else {
            // no more room, add to the existing one
            // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
            doc.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
          }

          try {
            !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");

            createNode = function createNode(tagName) {
              return doc.createElement('<rvml:' + tagName + ' class="rvml">');
            };
          } catch (e) {
            createNode = function createNode(tagName) {
              return doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
            };
          }
        };

        R._engine.initWin(R._g.win);

        R._engine.create = function () {
          var con = R._getContainer.apply(0, arguments),
              container = con.container,
              height = con.height,
              s,
              width = con.width,
              x = con.x,
              y = con.y;

          if (!container) {
            throw new Error("VML container not found.");
          }

          var res = new R._Paper(),
              c = res.canvas = R._g.doc.createElement("div"),
              cs = c.style;

          x = x || 0;
          y = y || 0;
          width = width || 512;
          height = height || 342;
          res.width = width;
          res.height = height;
          width == +width && (width += "px");
          height == +height && (height += "px");
          res.coordsize = zoom * 1e3 + S + zoom * 1e3;
          res.coordorigin = "0 0";
          res.span = R._g.doc.createElement("span");
          res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
          c.appendChild(res.span);
          cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);

          if (container == 1) {
            R._g.doc.body.appendChild(c);

            cs.left = x + "px";
            cs.top = y + "px";
            cs.position = "absolute";
          } else {
            if (container.firstChild) {
              container.insertBefore(c, container.firstChild);
            } else {
              container.appendChild(c);
            }
          }

          res.renderfix = function () {};

          return res;
        };

        R.prototype.clear = function () {
          R.eve("raphael.clear", this);
          this.canvas.innerHTML = E;
          this.span = R._g.doc.createElement("span");
          this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
          this.canvas.appendChild(this.span);
          this.bottom = this.top = null;
        };

        R.prototype.remove = function () {
          R.eve("raphael.remove", this);
          this.canvas.parentNode.removeChild(this.canvas);

          for (var i in this) {
            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
          }

          return true;
        };

        var setproto = R.st;

        for (var method in elproto) {
          if (elproto[has](method) && !setproto[has](method)) {
            setproto[method] = function (methodname) {
              return function () {
                var arg = arguments;
                return this.forEach(function (el) {
                  el[methodname].apply(el, arg);
                });
              };
            }(method);
          }
        }
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    }
    /******/
    ])
  );
});

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/js/components/scheme/libs/treant-js/treant.css":
/*!******************************************************************!*\
  !*** ./resources/js/components/scheme/libs/treant-js/treant.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/postcss-loader/src??ref--5-2!./treant.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/scheme/libs/treant-js/treant.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/scheme/libs/treant-js/treant.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/scheme/libs/treant-js/treant.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Treant-js
 *
 * (c) 2013 Fran Peručić
 * Treant-js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://fperucic.github.io/treant-js
 *
 * Treant is an open-source JavaScipt library for visualization of tree diagrams.
 * It implements the node positioning algorithm of John Q. Walker II "Positioning nodes for General Trees".
 *
 * References:
 * Emilio Cortegoso Lobato: ECOTree.js v1.0 (October 26th, 2006)
 *
 * Contributors:
 * Fran Peručić, https://github.com/fperucic
 * Dave Goodchild, https://github.com/dlgoodchild
 */
;

(function () {
  // Polyfill for IE to use startsWith
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      return this.substr(position || 0, searchString.length) === searchString;
    };
  }

  var $ = null;
  var UTIL = {
    /**
     * Directly updates, recursively/deeply, the first object with all properties in the second object
     * @param {object} applyTo
     * @param {object} applyFrom
     * @return {object}
     */
    inheritAttrs: function inheritAttrs(applyTo, applyFrom) {
      for (var attr in applyFrom) {
        if (applyFrom.hasOwnProperty(attr)) {
          if (applyTo[attr] instanceof Object && applyFrom[attr] instanceof Object && typeof applyFrom[attr] !== 'function') {
            this.inheritAttrs(applyTo[attr], applyFrom[attr]);
          } else {
            applyTo[attr] = applyFrom[attr];
          }
        }
      }

      return applyTo;
    },

    /**
     * Returns a new object by merging the two supplied objects
     * @param {object} obj1
     * @param {object} obj2
     * @returns {object}
     */
    createMerge: function createMerge(obj1, obj2) {
      var newObj = {};

      if (obj1) {
        this.inheritAttrs(newObj, this.cloneObj(obj1));
      }

      if (obj2) {
        this.inheritAttrs(newObj, obj2);
      }

      return newObj;
    },

    /**
     * Takes any number of arguments
     * @returns {*}
     */
    extend: function extend() {
      if ($) {
        Array.prototype.unshift.apply(arguments, [true, {}]);
        return $.extend.apply($, arguments);
      } else {
        return UTIL.createMerge.apply(this, arguments);
      }
    },

    /**
     * @param {object} obj
     * @returns {*}
     */
    cloneObj: function cloneObj(obj) {
      if (Object(obj) !== obj) {
        return obj;
      }

      var res = new obj.constructor();

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = this.cloneObj(obj[key]);
        }
      }

      return res;
    },

    /**
     * @param {Element} el
     * @param {string} eventType
     * @param {function} handler
     */
    addEvent: function addEvent(el, eventType, handler) {
      if ($) {
        $(el).on(eventType + '.treant', handler);
      } else if (el.addEventListener) {
        // DOM Level 2 browsers
        el.addEventListener(eventType, handler, false);
      } else if (el.attachEvent) {
        // IE <= 8
        el.attachEvent('on' + eventType, handler);
      } else {
        // ancient browsers
        el['on' + eventType] = handler;
      }
    },

    /**
     * @param {string} selector
     * @param {boolean} raw
     * @param {Element} parentEl
     * @returns {Element|jQuery}
     */
    findEl: function findEl(selector, raw, parentEl) {
      parentEl = parentEl || document;

      if ($) {
        var $element = $(selector, parentEl);
        return raw ? $element.get(0) : $element;
      } else {
        // todo: getElementsByName()
        // todo: getElementsByTagName()
        // todo: getElementsByTagNameNS()
        if (selector.charAt(0) === '#') {
          return parentEl.getElementById(selector.substring(1));
        } else if (selector.charAt(0) === '.') {
          var oElements = parentEl.getElementsByClassName(selector.substring(1));
          return oElements.length ? oElements[0] : null;
        }

        throw new Error('Unknown container element');
      }
    },
    getOuterHeight: function getOuterHeight(element) {
      var nRoundingCompensation = 1;

      if (typeof element.getBoundingClientRect === 'function') {
        return element.getBoundingClientRect().height;
      } else if ($) {
        return Math.ceil($(element).outerHeight()) + nRoundingCompensation;
      } else {
        return Math.ceil(element.clientHeight + UTIL.getStyle(element, 'border-top-width', true) + UTIL.getStyle(element, 'border-bottom-width', true) + UTIL.getStyle(element, 'padding-top', true) + UTIL.getStyle(element, 'padding-bottom', true) + nRoundingCompensation);
      }
    },
    getOuterWidth: function getOuterWidth(element) {
      var nRoundingCompensation = 1;

      if (typeof element.getBoundingClientRect === 'function') {
        return element.getBoundingClientRect().width;
      } else if ($) {
        return Math.ceil($(element).outerWidth()) + nRoundingCompensation;
      } else {
        return Math.ceil(element.clientWidth + UTIL.getStyle(element, 'border-left-width', true) + UTIL.getStyle(element, 'border-right-width', true) + UTIL.getStyle(element, 'padding-left', true) + UTIL.getStyle(element, 'padding-right', true) + nRoundingCompensation);
      }
    },
    getStyle: function getStyle(element, strCssRule, asInt) {
      var strValue = "";

      if (document.defaultView && document.defaultView.getComputedStyle) {
        strValue = document.defaultView.getComputedStyle(element, '').getPropertyValue(strCssRule);
      } else if (element.currentStyle) {
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1) {
          return p1.toUpperCase();
        });
        strValue = element.currentStyle[strCssRule];
      } //Number(elem.style.width.replace(/[^\d\.\-]/g, ''));


      return asInt ? parseFloat(strValue) : strValue;
    },
    addClass: function addClass(element, cssClass) {
      if ($) {
        $(element).addClass(cssClass);
      } else {
        if (!UTIL.hasClass(element, cssClass)) {
          if (element.classList) {
            element.classList.add(cssClass);
          } else {
            element.className += " " + cssClass;
          }
        }
      }
    },
    hasClass: function hasClass(element, my_class) {
      return (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + my_class + " ") > -1;
    },
    toggleClass: function toggleClass(element, cls, apply) {
      if ($) {
        $(element).toggleClass(cls, apply);
      } else {
        if (apply) {
          //element.className += " "+cls;
          element.classList.add(cls);
        } else {
          element.classList.remove(cls);
        }
      }
    },
    setDimensions: function setDimensions(element, width, height) {
      if ($) {
        $(element).width(width).height(height);
      } else {
        element.style.width = width + 'px';
        element.style.height = height + 'px';
      }
    },
    isjQueryAvailable: function isjQueryAvailable() {
      return typeof $ !== 'undefined' && $;
    }
  };
  /**
   * ImageLoader is used for determining if all the images from the Tree are loaded.
   * Node size (width, height) can be correctly determined only when all inner images are loaded
   */

  var ImageLoader = function ImageLoader() {
    this.reset();
  };

  ImageLoader.prototype = {
    /**
     * @returns {ImageLoader}
     */
    reset: function reset() {
      this.loading = [];
      return this;
    },

    /**
     * @param {TreeNode} node
     * @returns {ImageLoader}
     */
    processNode: function processNode(node) {
      var aImages = node.nodeDOM.getElementsByTagName('img');
      var i = aImages.length;

      while (i--) {
        this.create(node, aImages[i]);
      }

      return this;
    },

    /**
     * @returns {ImageLoader}
     */
    removeAll: function removeAll(img_src) {
      var i = this.loading.length;

      while (i--) {
        if (this.loading[i] === img_src) {
          this.loading.splice(i, 1);
        }
      }

      return this;
    },

    /**
     * @param {TreeNode} node
     * @param {Element} image
     * @returns {*}
     */
    create: function create(node, image) {
      var self = this,
          source = image.src;

      function imgTrigger() {
        self.removeAll(source);
        node.width = node.nodeDOM.offsetWidth;
        node.height = node.nodeDOM.offsetHeight;
      }

      if (image.src.indexOf('data:') !== 0) {
        this.loading.push(source);

        if (image.complete) {
          return imgTrigger();
        }

        UTIL.addEvent(image, 'load', imgTrigger);
        UTIL.addEvent(image, 'error', imgTrigger); // handle broken url-s
        // load event is not fired for cached images, force the load event

        image.src += (image.src.indexOf('?') > 0 ? '&' : '?') + new Date().getTime();
      } else {
        imgTrigger();
      }
    },

    /**
     * @returns {boolean}
     */
    isNotLoading: function isNotLoading() {
      return this.loading.length === 0;
    }
  };
  /**
   * Class: TreeStore
   * TreeStore is used for holding initialized Tree objects
   *  Its purpose is to avoid global variables and enable multiple Trees on the page.
   */

  var TreeStore = {
    store: [],

    /**
     * @param {object} jsonConfig
     * @returns {Tree}
     */
    createTree: function createTree(jsonConfig) {
      var nNewTreeId = this.store.length;
      this.store.push(new Tree(jsonConfig, nNewTreeId));
      return this.get(nNewTreeId);
    },

    /**
     * @param {number} treeId
     * @returns {Tree}
     */
    get: function get(treeId) {
      return this.store[treeId];
    },

    /**
     * @param {number} treeId
     * @returns {TreeStore}
     */
    destroy: function destroy(treeId) {
      var tree = this.get(treeId);

      if (tree) {
        tree._R.remove();

        var draw_area = tree.drawArea;

        while (draw_area.firstChild) {
          draw_area.removeChild(draw_area.firstChild);
        }

        var classes = draw_area.className.split(' '),
            classes_to_stay = [];

        for (var i = 0; i < classes.length; i++) {
          var cls = classes[i];

          if (cls !== 'Treant' && cls !== 'Treant-loaded') {
            classes_to_stay.push(cls);
          }
        }

        draw_area.style.overflowY = '';
        draw_area.style.overflowX = '';
        draw_area.className = classes_to_stay.join(' ');
        this.store[treeId] = null;
      }

      return this;
    }
  };
  /**
   * Tree constructor.
   * @param {object} jsonConfig
   * @param {number} treeId
   * @constructor
   */

  var Tree = function Tree(jsonConfig, treeId) {
    /**
     * @param {object} jsonConfig
     * @param {number} treeId
     * @returns {Tree}
     */
    this.reset = function (jsonConfig, treeId) {
      this.initJsonConfig = jsonConfig;
      this.initTreeId = treeId;
      this.id = treeId;
      this.CONFIG = UTIL.extend(Tree.CONFIG, jsonConfig.chart);
      this.drawArea = UTIL.findEl(this.CONFIG.container, true);

      if (!this.drawArea) {
        throw new Error('Failed to find element by selector "' + this.CONFIG.container + '"');
      }

      UTIL.addClass(this.drawArea, 'Treant'); // kill of any child elements that may be there

      this.drawArea.innerHTML = '';
      this.imageLoader = new ImageLoader();
      this.nodeDB = new NodeDB(jsonConfig.nodeStructure, this); // key store for storing reference to node connectors,
      // key = nodeId where the connector ends

      this.connectionStore = {};
      this.loaded = false;
      this._R = new Raphael(this.drawArea, 100, 100);
      return this;
    };
    /**
     * @returns {Tree}
     */


    this.reload = function () {
      this.reset(this.initJsonConfig, this.initTreeId).redraw();
      return this;
    };

    this.reset(jsonConfig, treeId);
  };

  Tree.prototype = {
    /**
     * @returns {NodeDB}
     */
    getNodeDb: function getNodeDb() {
      return this.nodeDB;
    },

    /**
     * @param {TreeNode} parentTreeNode
     * @param {object} nodeDefinition
     * @returns {TreeNode}
     */
    addNode: function addNode(parentTreeNode, nodeDefinition) {
      var dbEntry = this.nodeDB.get(parentTreeNode.id);
      this.CONFIG.callback.onBeforeAddNode.apply(this, [parentTreeNode, nodeDefinition]);
      var oNewNode = this.nodeDB.createNode(nodeDefinition, parentTreeNode.id, this);
      oNewNode.createGeometry(this);
      oNewNode.parent().createSwitchGeometry(this);
      this.positionTree();
      this.CONFIG.callback.onAfterAddNode.apply(this, [oNewNode, parentTreeNode, nodeDefinition]);
      return oNewNode;
    },

    /**
     * @returns {Tree}
     */
    redraw: function redraw() {
      this.positionTree();
      return this;
    },

    /**
     * @param {function} callback
     * @returns {Tree}
     */
    positionTree: function positionTree(callback) {
      var self = this;

      if (this.imageLoader.isNotLoading()) {
        var root = this.root(),
            orient = this.CONFIG.rootOrientation;
        this.resetLevelData();
        this.firstWalk(root, 0);
        this.secondWalk(root, 0, 0, 0);
        this.positionNodes();

        if (this.CONFIG.animateOnInit) {
          setTimeout(function () {
            root.toggleCollapse();
          }, this.CONFIG.animateOnInitDelay);
        }

        if (!this.loaded) {
          UTIL.addClass(this.drawArea, 'Treant-loaded'); // nodes are hidden until .loaded class is added

          if (Object.prototype.toString.call(callback) === "[object Function]") {
            callback(self);
          }

          self.CONFIG.callback.onTreeLoaded.apply(self, [root]);
          this.loaded = true;
        }
      } else {
        setTimeout(function () {
          self.positionTree(callback);
        }, 10);
      }

      return this;
    },

    /**
     * In a first post-order walk, every node of the tree is assigned a preliminary
     * x-coordinate (held in field node->prelim).
     * In addition, internal nodes are given modifiers, which will be used to move their
     * children to the right (held in field node->modifier).
     * @param {TreeNode} node
     * @param {number} level
     * @returns {Tree}
     */
    firstWalk: function firstWalk(node, level) {
      node.prelim = null;
      node.modifier = null;
      this.setNeighbors(node, level);
      this.calcLevelDim(node, level);
      var leftSibling = node.leftSibling();

      if (node.childrenCount() === 0 || level == this.CONFIG.maxDepth) {
        // set preliminary x-coordinate
        if (leftSibling) {
          node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;
        } else {
          node.prelim = 0;
        }
      } else {
        //node is not a leaf,  firstWalk for each child
        for (var i = 0, n = node.childrenCount(); i < n; i++) {
          this.firstWalk(node.childAt(i), level + 1);
        }

        var midPoint = node.childrenCenter() - node.size() / 2;

        if (leftSibling) {
          node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;
          node.modifier = node.prelim - midPoint;
          this.apportion(node, level);
        } else {
          node.prelim = midPoint;
        } // handle stacked children positioning


        if (node.stackParent) {
          // handle the parent of stacked children
          node.modifier += this.nodeDB.get(node.stackChildren[0]).size() / 2 + node.connStyle.stackIndent;
        } else if (node.stackParentId) {
          // handle stacked children
          node.prelim = 0;
        }
      }

      return this;
    },

    /*
     * Clean up the positioning of small sibling subtrees.
     * Subtrees of a node are formed independently and
     * placed as close together as possible. By requiring
     * that the subtrees be rigid at the time they are put
     * together, we avoid the undesirable effects that can
     * accrue from positioning nodes rather than subtrees.
     */
    apportion: function apportion(node, level) {
      var firstChild = node.firstChild(),
          firstChildLeftNeighbor = firstChild.leftNeighbor(),
          compareDepth = 1,
          depthToStop = this.CONFIG.maxDepth - level;

      while (firstChild && firstChildLeftNeighbor && compareDepth <= depthToStop) {
        // calculate the position of the firstChild, according to the position of firstChildLeftNeighbor
        var modifierSumRight = 0,
            modifierSumLeft = 0,
            leftAncestor = firstChildLeftNeighbor,
            rightAncestor = firstChild;

        for (var i = 0; i < compareDepth; i++) {
          leftAncestor = leftAncestor.parent();
          rightAncestor = rightAncestor.parent();
          modifierSumLeft += leftAncestor.modifier;
          modifierSumRight += rightAncestor.modifier; // all the stacked children are oriented towards right so use right variables

          if (rightAncestor.stackParent !== undefined) {
            modifierSumRight += rightAncestor.size() / 2;
          }
        } // find the gap between two trees and apply it to subTrees
        // and mathing smaller gaps to smaller subtrees


        var totalGap = firstChildLeftNeighbor.prelim + modifierSumLeft + firstChildLeftNeighbor.size() + this.CONFIG.subTeeSeparation - (firstChild.prelim + modifierSumRight);

        if (totalGap > 0) {
          var subtreeAux = node,
              numSubtrees = 0; // count all the subtrees in the LeftSibling

          while (subtreeAux && subtreeAux.id !== leftAncestor.id) {
            subtreeAux = subtreeAux.leftSibling();
            numSubtrees++;
          }

          if (subtreeAux) {
            var subtreeMoveAux = node,
                singleGap = totalGap / numSubtrees;

            while (subtreeMoveAux.id !== leftAncestor.id) {
              subtreeMoveAux.prelim += totalGap;
              subtreeMoveAux.modifier += totalGap;
              totalGap -= singleGap;
              subtreeMoveAux = subtreeMoveAux.leftSibling();
            }
          }
        }

        compareDepth++;
        firstChild = firstChild.childrenCount() === 0 ? node.leftMost(0, compareDepth) : firstChild = firstChild.firstChild();

        if (firstChild) {
          firstChildLeftNeighbor = firstChild.leftNeighbor();
        }
      }
    },

    /*
     * During a second pre-order walk, each node is given a
     * final x-coordinate by summing its preliminary
     * x-coordinate and the modifiers of all the node's
     * ancestors.  The y-coordinate depends on the height of
     * the tree.  (The roles of x and y are reversed for
     * RootOrientations of EAST or WEST.)
     */
    secondWalk: function secondWalk(node, level, X, Y) {
      if (level <= this.CONFIG.maxDepth) {
        var xTmp = node.prelim + X,
            yTmp = Y,
            align = this.CONFIG.nodeAlign,
            orient = this.CONFIG.rootOrientation,
            levelHeight,
            nodesizeTmp;

        if (orient === 'NORTH' || orient === 'SOUTH') {
          levelHeight = this.levelMaxDim[level].height;
          nodesizeTmp = node.height;

          if (node.pseudo) {
            node.height = levelHeight;
          } // assign a new size to pseudo nodes

        } else if (orient === 'WEST' || orient === 'EAST') {
          levelHeight = this.levelMaxDim[level].width;
          nodesizeTmp = node.width;

          if (node.pseudo) {
            node.width = levelHeight;
          } // assign a new size to pseudo nodes

        }

        node.X = xTmp;

        if (node.pseudo) {
          // pseudo nodes need to be properly aligned, otherwise position is not correct in some examples
          if (orient === 'NORTH' || orient === 'WEST') {
            node.Y = yTmp; // align "BOTTOM"
          } else if (orient === 'SOUTH' || orient === 'EAST') {
            node.Y = yTmp + (levelHeight - nodesizeTmp); // align "TOP"
          }
        } else {
          node.Y = align === 'CENTER' ? yTmp + (levelHeight - nodesizeTmp) / 2 : align === 'TOP' ? yTmp + (levelHeight - nodesizeTmp) : yTmp;
        }

        if (orient === 'WEST' || orient === 'EAST') {
          var swapTmp = node.X;
          node.X = node.Y;
          node.Y = swapTmp;
        }

        if (orient === 'SOUTH') {
          node.Y = -node.Y - nodesizeTmp;
        } else if (orient === 'EAST') {
          node.X = -node.X - nodesizeTmp;
        }

        if (node.childrenCount() !== 0) {
          if (node.id === 0 && this.CONFIG.hideRootNode) {
            // ako je root node Hiden onda nemoj njegovu dijecu pomaknut po Y osi za Level separation, neka ona budu na vrhu
            this.secondWalk(node.firstChild(), level + 1, X + node.modifier, Y);
          } else {
            this.secondWalk(node.firstChild(), level + 1, X + node.modifier, Y + levelHeight + this.CONFIG.levelSeparation);
          }
        }

        if (node.rightSibling()) {
          this.secondWalk(node.rightSibling(), level, X, Y);
        }
      }
    },

    /**
     * position all the nodes, center the tree in center of its container
     * 0,0 coordinate is in the upper left corner
     * @returns {Tree}
     */
    positionNodes: function positionNodes() {
      var self = this,
          treeSize = {
        x: self.nodeDB.getMinMaxCoord('X', null, null),
        y: self.nodeDB.getMinMaxCoord('Y', null, null)
      },
          treeWidth = treeSize.x.max - treeSize.x.min,
          treeHeight = treeSize.y.max - treeSize.y.min,
          treeCenter = {
        x: treeSize.x.max - treeWidth / 2,
        y: treeSize.y.max - treeHeight / 2
      };
      this.handleOverflow(treeWidth, treeHeight);
      var containerCenter = {
        x: self.drawArea.clientWidth / 2,
        y: self.drawArea.clientHeight / 2
      },
          deltaX = containerCenter.x - treeCenter.x,
          deltaY = containerCenter.y - treeCenter.y,
          // all nodes must have positive X or Y coordinates, handle this with offsets
      negOffsetX = treeSize.x.min + deltaX <= 0 ? Math.abs(treeSize.x.min) : 0,
          negOffsetY = treeSize.y.min + deltaY <= 0 ? Math.abs(treeSize.y.min) : 0,
          i,
          len,
          node; // position all the nodes

      for (i = 0, len = this.nodeDB.db.length; i < len; i++) {
        node = this.nodeDB.get(i);
        self.CONFIG.callback.onBeforePositionNode.apply(self, [node, i, containerCenter, treeCenter]);

        if (node.id === 0 && this.CONFIG.hideRootNode) {
          self.CONFIG.callback.onAfterPositionNode.apply(self, [node, i, containerCenter, treeCenter]);
          continue;
        } // if the tree is smaller than the draw area, then center the tree within drawing area


        node.X += negOffsetX + (treeWidth < this.drawArea.clientWidth ? deltaX : this.CONFIG.padding);
        node.Y += negOffsetY + (treeHeight < this.drawArea.clientHeight ? deltaY : this.CONFIG.padding);
        var collapsedParent = node.collapsedParent(),
            hidePoint = null;

        if (collapsedParent) {
          // position the node behind the connector point of the parent, so future animations can be visible
          hidePoint = collapsedParent.connectorPoint(true);
          node.hide(hidePoint);
        } else if (node.positioned) {
          // node is already positioned,
          node.show();
        } else {
          // inicijalno stvaranje nodeova, postavi lokaciju
          node.nodeDOM.style.left = node.X + 'px';
          node.nodeDOM.style.top = node.Y + 'px';
          node.positioned = true;
        }

        if (node.id !== 0 && !(node.parent().id === 0 && this.CONFIG.hideRootNode)) {
          this.setConnectionToParent(node, hidePoint); // skip the root node
        } else if (!this.CONFIG.hideRootNode && node.drawLineThrough) {
          // drawlinethrough is performed for for the root node also
          node.drawLineThroughMe();
        }

        self.CONFIG.callback.onAfterPositionNode.apply(self, [node, i, containerCenter, treeCenter]);
      }

      return this;
    },

    /**
     * Create Raphael instance, (optionally set scroll bars if necessary)
     * @param {number} treeWidth
     * @param {number} treeHeight
     * @returns {Tree}
     */
    handleOverflow: function handleOverflow(treeWidth, treeHeight) {
      var viewWidth = treeWidth < this.drawArea.clientWidth ? this.drawArea.clientWidth : treeWidth + this.CONFIG.padding * 2,
          viewHeight = treeHeight < this.drawArea.clientHeight ? this.drawArea.clientHeight : treeHeight + this.CONFIG.padding * 2;

      this._R.setSize(viewWidth, viewHeight);

      if (this.CONFIG.scrollbar === 'resize') {
        UTIL.setDimensions(this.drawArea, viewWidth, viewHeight);
      } else if (!UTIL.isjQueryAvailable() || this.CONFIG.scrollbar === 'native') {
        if (this.drawArea.clientWidth < treeWidth) {
          // is overflow-x necessary
          this.drawArea.style.overflowX = "auto";
        }

        if (this.drawArea.clientHeight < treeHeight) {
          // is overflow-y necessary
          this.drawArea.style.overflowY = "auto";
        }
      } // Fancy scrollbar relies heavily on jQuery, so guarding with if ( $ )
      else if (this.CONFIG.scrollbar === 'fancy') {
          var jq_drawArea = $(this.drawArea);

          if (jq_drawArea.hasClass('ps-container')) {
            // znaci da je 'fancy' vec inicijaliziran, treba updateat
            jq_drawArea.find('.Treant').css({
              width: viewWidth,
              height: viewHeight
            });
            jq_drawArea.perfectScrollbar('update');
          } else {
            var mainContainer = jq_drawArea.wrapInner('<div class="Treant"/>'),
                child = mainContainer.find('.Treant');
            child.css({
              width: viewWidth,
              height: viewHeight
            });
            mainContainer.perfectScrollbar();
          }
        } // else this.CONFIG.scrollbar == 'None'


      return this;
    },

    /**
     * @param {TreeNode} treeNode
     * @param {boolean} hidePoint
     * @returns {Tree}
     */
    setConnectionToParent: function setConnectionToParent(treeNode, hidePoint) {
      var stacked = treeNode.stackParentId,
          connLine,
          parent = stacked ? this.nodeDB.get(stacked) : treeNode.parent(),
          pathString = hidePoint ? this.getPointPathString(hidePoint) : this.getPathString(parent, treeNode, stacked);

      if (this.connectionStore[treeNode.id]) {
        // connector already exists, update the connector geometry
        connLine = this.connectionStore[treeNode.id];
        this.animatePath(connLine, pathString);
      } else {
        connLine = this._R.path(pathString);
        this.connectionStore[treeNode.id] = connLine; // don't show connector arrows por pseudo nodes

        if (treeNode.pseudo) {
          delete parent.connStyle.style['arrow-end'];
        }

        if (parent.pseudo) {
          delete parent.connStyle.style['arrow-start'];
        }

        connLine.attr(parent.connStyle.style);

        if (treeNode.drawLineThrough || treeNode.pseudo) {
          treeNode.drawLineThroughMe(hidePoint);
        }
      }

      treeNode.connector = connLine;
      return this;
    },

    /**
     * Create the path which is represented as a point, used for hiding the connection
     * A path with a leading "_" indicates the path will be hidden
     * See: http://dmitrybaranovskiy.github.io/raphael/reference.html#Paper.path
     * @param {object} hidePoint
     * @returns {string}
     */
    getPointPathString: function getPointPathString(hidePoint) {
      return ["_M", hidePoint.x, ",", hidePoint.y, 'L', hidePoint.x, ",", hidePoint.y, hidePoint.x, ",", hidePoint.y].join(' ');
    },

    /**
     * This method relied on receiving a valid Raphael Paper.path.
     * See: http://dmitrybaranovskiy.github.io/raphael/reference.html#Paper.path
     * A pathString is typically in the format of "M10,20L30,40"
     * @param path
     * @param {string} pathString
     * @returns {Tree}
     */
    animatePath: function animatePath(path, pathString) {
      if (path.hidden && pathString.charAt(0) !== "_") {
        // path will be shown, so show it
        path.show();
        path.hidden = false;
      } // See: http://dmitrybaranovskiy.github.io/raphael/reference.html#Element.animate


      path.animate({
        path: pathString.charAt(0) === "_" ? pathString.substring(1) : pathString // remove the "_" prefix if it exists

      }, this.CONFIG.animation.connectorsSpeed, this.CONFIG.animation.connectorsAnimation, function () {
        if (pathString.charAt(0) === "_") {
          // animation is hiding the path, hide it at the and of animation
          path.hide();
          path.hidden = true;
        }
      });
      return this;
    },

    /**
     *
     * @param {TreeNode} from_node
     * @param {TreeNode} to_node
     * @param {boolean} stacked
     * @returns {string}
     */
    getPathString: function getPathString(from_node, to_node, stacked) {
      var startPoint = from_node.connectorPoint(true),
          endPoint = to_node.connectorPoint(false),
          orientation = this.CONFIG.rootOrientation,
          connType = from_node.connStyle.type,
          P1 = {},
          P2 = {};

      if (orientation === 'NORTH' || orientation === 'SOUTH') {
        P1.y = P2.y = (startPoint.y + endPoint.y) / 2;
        P1.x = startPoint.x;
        P2.x = endPoint.x;
      } else if (orientation === 'EAST' || orientation === 'WEST') {
        P1.x = P2.x = (startPoint.x + endPoint.x) / 2;
        P1.y = startPoint.y;
        P2.y = endPoint.y;
      } // sp, p1, pm, p2, ep == "x,y"


      var sp = startPoint.x + ',' + startPoint.y,
          p1 = P1.x + ',' + P1.y,
          p2 = P2.x + ',' + P2.y,
          ep = endPoint.x + ',' + endPoint.y,
          pm = (P1.x + P2.x) / 2 + ',' + (P1.y + P2.y) / 2,
          pathString,
          stackPoint;

      if (stacked) {
        // STACKED CHILDREN
        stackPoint = orientation === 'EAST' || orientation === 'WEST' ? endPoint.x + ',' + startPoint.y : startPoint.x + ',' + endPoint.y;

        if (connType === "step" || connType === "straight") {
          pathString = ["M", sp, 'L', stackPoint, 'L', ep];
        } else if (connType === "curve" || connType === "bCurve") {
          var helpPoint,
              // used for nicer curve lines
          indent = from_node.connStyle.stackIndent;

          if (orientation === 'NORTH') {
            helpPoint = endPoint.x - indent + ',' + (endPoint.y - indent);
          } else if (orientation === 'SOUTH') {
            helpPoint = endPoint.x - indent + ',' + (endPoint.y + indent);
          } else if (orientation === 'EAST') {
            helpPoint = endPoint.x + indent + ',' + startPoint.y;
          } else if (orientation === 'WEST') {
            helpPoint = endPoint.x - indent + ',' + startPoint.y;
          }

          pathString = ["M", sp, 'L', helpPoint, 'S', stackPoint, ep];
        }
      } else {
        // NORMAL CHILDREN
        if (connType === "step") {
          pathString = ["M", sp, 'L', p1, 'L', p2, 'L', ep];
        } else if (connType === "curve") {
          pathString = ["M", sp, 'C', p1, p2, ep];
        } else if (connType === "bCurve") {
          pathString = ["M", sp, 'Q', p1, pm, 'T', ep];
        } else if (connType === "straight") {
          pathString = ["M", sp, 'L', sp, ep];
        }
      }

      return pathString.join(" ");
    },

    /**
     * Algorithm works from left to right, so previous processed node will be left neighbour of the next node
     * @param {TreeNode} node
     * @param {number} level
     * @returns {Tree}
     */
    setNeighbors: function setNeighbors(node, level) {
      node.leftNeighborId = this.lastNodeOnLevel[level];

      if (node.leftNeighborId) {
        node.leftNeighbor().rightNeighborId = node.id;
      }

      this.lastNodeOnLevel[level] = node.id;
      return this;
    },

    /**
     * Used for calculation of height and width of a level (level dimensions)
     * @param {TreeNode} node
     * @param {number} level
     * @returns {Tree}
     */
    calcLevelDim: function calcLevelDim(node, level) {
      // root node is on level 0
      this.levelMaxDim[level] = {
        width: Math.max(this.levelMaxDim[level] ? this.levelMaxDim[level].width : 0, node.width),
        height: Math.max(this.levelMaxDim[level] ? this.levelMaxDim[level].height : 0, node.height)
      };
      return this;
    },

    /**
     * @returns {Tree}
     */
    resetLevelData: function resetLevelData() {
      this.lastNodeOnLevel = [];
      this.levelMaxDim = [];
      return this;
    },

    /**
     * @returns {TreeNode}
     */
    root: function root() {
      return this.nodeDB.get(0);
    }
  };
  /**
   * NodeDB is used for storing the nodes. Each tree has its own NodeDB.
   * @param {object} nodeStructure
   * @param {Tree} tree
   * @constructor
   */

  var NodeDB = function NodeDB(nodeStructure, tree) {
    this.reset(nodeStructure, tree);
  };

  NodeDB.prototype = {
    /**
     * @param {object} nodeStructure
     * @param {Tree} tree
     * @returns {NodeDB}
     */
    reset: function reset(nodeStructure, tree) {
      this.db = [];
      var self = this;
      /**
       * @param {object} node
       * @param {number} parentId
       */

      function iterateChildren(node, parentId) {
        var newNode = self.createNode(node, parentId, tree, null);

        if (node.children) {
          // pseudo node is used for descending children to the next level
          if (node.childrenDropLevel && node.childrenDropLevel > 0) {
            while (node.childrenDropLevel--) {
              // pseudo node needs to inherit the connection style from its parent for continuous connectors
              var connStyle = UTIL.cloneObj(newNode.connStyle);
              newNode = self.createNode('pseudo', newNode.id, tree, null);
              newNode.connStyle = connStyle;
              newNode.children = [];
            }
          }

          var stack = node.stackChildren && !self.hasGrandChildren(node) ? newNode.id : null; // children are positioned on separate levels, one beneath the other

          if (stack !== null) {
            newNode.stackChildren = [];
          }

          for (var i = 0, len = node.children.length; i < len; i++) {
            if (stack !== null) {
              newNode = self.createNode(node.children[i], newNode.id, tree, stack);

              if (i + 1 < len) {
                // last node cant have children
                newNode.children = [];
              }
            } else {
              iterateChildren(node.children[i], newNode.id);
            }
          }
        }
      }

      if (tree.CONFIG.animateOnInit) {
        nodeStructure.collapsed = true;
      }

      iterateChildren(nodeStructure, -1); // root node

      this.createGeometries(tree);
      return this;
    },

    /**
     * @param {Tree} tree
     * @returns {NodeDB}
     */
    createGeometries: function createGeometries(tree) {
      var i = this.db.length;

      while (i--) {
        this.get(i).createGeometry(tree);
      }

      return this;
    },

    /**
     * @param {number} nodeId
     * @returns {TreeNode}
     */
    get: function get(nodeId) {
      return this.db[nodeId]; // get TreeNode by ID
    },

    /**
     * @param {function} callback
     * @returns {NodeDB}
     */
    walk: function walk(callback) {
      var i = this.db.length;

      while (i--) {
        callback.apply(this, [this.get(i)]);
      }

      return this;
    },

    /**
     *
     * @param {object} nodeStructure
     * @param {number} parentId
     * @param {Tree} tree
     * @param {number} stackParentId
     * @returns {TreeNode}
     */
    createNode: function createNode(nodeStructure, parentId, tree, stackParentId) {
      var node = new TreeNode(nodeStructure, this.db.length, parentId, tree, stackParentId);
      this.db.push(node); // skip root node (0)

      if (parentId >= 0) {
        var parent = this.get(parentId); // todo: refactor into separate private method

        if (nodeStructure.position) {
          if (nodeStructure.position === 'left') {
            parent.children.push(node.id);
          } else if (nodeStructure.position === 'right') {
            parent.children.splice(0, 0, node.id);
          } else if (nodeStructure.position === 'center') {
            parent.children.splice(Math.floor(parent.children.length / 2), 0, node.id);
          } else {
            // edge case when there's only 1 child
            var position = parseInt(nodeStructure.position);

            if (parent.children.length === 1 && position > 0) {
              parent.children.splice(0, 0, node.id);
            } else {
              parent.children.splice(Math.max(position, parent.children.length - 1), 0, node.id);
            }
          }
        } else {
          parent.children.push(node.id);
        }
      }

      if (stackParentId) {
        this.get(stackParentId).stackParent = true;
        this.get(stackParentId).stackChildren.push(node.id);
      }

      return node;
    },
    getMinMaxCoord: function getMinMaxCoord(dim, parent, MinMax) {
      // used for getting the dimensions of the tree, dim = 'X' || 'Y'
      // looks for min and max (X and Y) within the set of nodes
      parent = parent || this.get(0);
      MinMax = MinMax || {
        // start with root node dimensions
        min: parent[dim],
        max: parent[dim] + (dim === 'X' ? parent.width : parent.height)
      };
      var i = parent.childrenCount();

      while (i--) {
        var node = parent.childAt(i),
            maxTest = node[dim] + (dim === 'X' ? node.width : node.height),
            minTest = node[dim];

        if (maxTest > MinMax.max) {
          MinMax.max = maxTest;
        }

        if (minTest < MinMax.min) {
          MinMax.min = minTest;
        }

        this.getMinMaxCoord(dim, node, MinMax);
      }

      return MinMax;
    },

    /**
     * @param {object} nodeStructure
     * @returns {boolean}
     */
    hasGrandChildren: function hasGrandChildren(nodeStructure) {
      var i = nodeStructure.children.length;

      while (i--) {
        if (nodeStructure.children[i].children) {
          return true;
        }
      }

      return false;
    }
  };
  /**
   * TreeNode constructor.
   * @param {object} nodeStructure
   * @param {number} id
   * @param {number} parentId
   * @param {Tree} tree
   * @param {number} stackParentId
   * @constructor
   */

  var TreeNode = function TreeNode(nodeStructure, id, parentId, tree, stackParentId) {
    this.reset(nodeStructure, id, parentId, tree, stackParentId);
  };

  TreeNode.prototype = {
    /**
     * @param {object} nodeStructure
     * @param {number} id
     * @param {number} parentId
     * @param {Tree} tree
     * @param {number} stackParentId
     * @returns {TreeNode}
     */
    reset: function reset(nodeStructure, id, parentId, tree, stackParentId) {
      this.id = id;
      this.parentId = parentId;
      this.treeId = tree.id;
      this.prelim = 0;
      this.modifier = 0;
      this.leftNeighborId = null;
      this.stackParentId = stackParentId; // pseudo node is a node with width=height=0, it is invisible, but necessary for the correct positioning of the tree

      this.pseudo = nodeStructure === 'pseudo' || nodeStructure['pseudo']; // todo: surely if nodeStructure is a scalar then the rest will error:

      this.meta = nodeStructure.meta || {};
      this.image = nodeStructure.image || null;
      this.link = UTIL.createMerge(tree.CONFIG.node.link, nodeStructure.link);
      this.connStyle = UTIL.createMerge(tree.CONFIG.connectors, nodeStructure.connectors);
      this.connector = null;
      this.drawLineThrough = nodeStructure.drawLineThrough === false ? false : nodeStructure.drawLineThrough || tree.CONFIG.node.drawLineThrough;
      this.collapsable = nodeStructure.collapsable === false ? false : nodeStructure.collapsable || tree.CONFIG.node.collapsable;
      this.collapsed = nodeStructure.collapsed;
      this.text = nodeStructure.text; // '.node' DIV

      this.nodeInnerHTML = nodeStructure.innerHTML;
      this.nodeHTMLclass = (tree.CONFIG.node.HTMLclass ? tree.CONFIG.node.HTMLclass : '') + ( // globally defined class for the nodex
      nodeStructure.HTMLclass ? ' ' + nodeStructure.HTMLclass : ''); // + specific node class

      this.nodeHTMLid = nodeStructure.HTMLid;
      this.children = [];
      return this;
    },

    /**
     * @returns {Tree}
     */
    getTree: function getTree() {
      return TreeStore.get(this.treeId);
    },

    /**
     * @returns {object}
     */
    getTreeConfig: function getTreeConfig() {
      return this.getTree().CONFIG;
    },

    /**
     * @returns {NodeDB}
     */
    getTreeNodeDb: function getTreeNodeDb() {
      return this.getTree().getNodeDb();
    },

    /**
     * @param {number} nodeId
     * @returns {TreeNode}
     */
    lookupNode: function lookupNode(nodeId) {
      return this.getTreeNodeDb().get(nodeId);
    },

    /**
     * @returns {Tree}
     */
    Tree: function Tree() {
      return TreeStore.get(this.treeId);
    },

    /**
     * @param {number} nodeId
     * @returns {TreeNode}
     */
    dbGet: function dbGet(nodeId) {
      return this.getTreeNodeDb().get(nodeId);
    },

    /**
     * Returns the width of the node
     * @returns {float}
     */
    size: function size() {
      var orientation = this.getTreeConfig().rootOrientation;

      if (this.pseudo) {
        // prevents separating the subtrees
        return -this.getTreeConfig().subTeeSeparation;
      }

      if (orientation === 'NORTH' || orientation === 'SOUTH') {
        return this.width;
      } else if (orientation === 'WEST' || orientation === 'EAST') {
        return this.height;
      }
    },

    /**
     * @returns {number}
     */
    childrenCount: function childrenCount() {
      return this.collapsed || !this.children ? 0 : this.children.length;
    },

    /**
     * @param {number} index
     * @returns {TreeNode}
     */
    childAt: function childAt(index) {
      return this.dbGet(this.children[index]);
    },

    /**
     * @returns {TreeNode}
     */
    firstChild: function firstChild() {
      return this.childAt(0);
    },

    /**
     * @returns {TreeNode}
     */
    lastChild: function lastChild() {
      return this.childAt(this.children.length - 1);
    },

    /**
     * @returns {TreeNode}
     */
    parent: function parent() {
      return this.lookupNode(this.parentId);
    },

    /**
     * @returns {TreeNode}
     */
    leftNeighbor: function leftNeighbor() {
      if (this.leftNeighborId) {
        return this.lookupNode(this.leftNeighborId);
      }
    },

    /**
     * @returns {TreeNode}
     */
    rightNeighbor: function rightNeighbor() {
      if (this.rightNeighborId) {
        return this.lookupNode(this.rightNeighborId);
      }
    },

    /**
     * @returns {TreeNode}
     */
    leftSibling: function leftSibling() {
      var leftNeighbor = this.leftNeighbor();

      if (leftNeighbor && leftNeighbor.parentId === this.parentId) {
        return leftNeighbor;
      }
    },

    /**
     * @returns {TreeNode}
     */
    rightSibling: function rightSibling() {
      var rightNeighbor = this.rightNeighbor();

      if (rightNeighbor && rightNeighbor.parentId === this.parentId) {
        return rightNeighbor;
      }
    },

    /**
     * @returns {number}
     */
    childrenCenter: function childrenCenter() {
      var first = this.firstChild(),
          last = this.lastChild();
      return first.prelim + (last.prelim - first.prelim + last.size()) / 2;
    },

    /**
     * Find out if one of the node ancestors is collapsed
     * @returns {*}
     */
    collapsedParent: function collapsedParent() {
      var parent = this.parent();

      if (!parent) {
        return false;
      }

      if (parent.collapsed) {
        return parent;
      }

      return parent.collapsedParent();
    },

    /**
     * Returns the leftmost child at specific level, (initial level = 0)
     * @param level
     * @param depth
     * @returns {*}
     */
    leftMost: function leftMost(level, depth) {
      if (level >= depth) {
        return this;
      }

      if (this.childrenCount() === 0) {
        return;
      }

      for (var i = 0, n = this.childrenCount(); i < n; i++) {
        var leftmostDescendant = this.childAt(i).leftMost(level + 1, depth);

        if (leftmostDescendant) {
          return leftmostDescendant;
        }
      }
    },
    // returns start or the end point of the connector line, origin is upper-left
    connectorPoint: function connectorPoint(startPoint) {
      var orient = this.Tree().CONFIG.rootOrientation,
          point = {};

      if (this.stackParentId) {
        // return different end point if node is a stacked child
        if (orient === 'NORTH' || orient === 'SOUTH') {
          orient = 'WEST';
        } else if (orient === 'EAST' || orient === 'WEST') {
          orient = 'NORTH';
        }
      } // if pseudo, a virtual center is used


      if (orient === 'NORTH') {
        point.x = this.pseudo ? this.X - this.Tree().CONFIG.subTeeSeparation / 2 : this.X + this.width / 2;
        point.y = startPoint ? this.Y + this.height : this.Y;
      } else if (orient === 'SOUTH') {
        point.x = this.pseudo ? this.X - this.Tree().CONFIG.subTeeSeparation / 2 : this.X + this.width / 2;
        point.y = startPoint ? this.Y : this.Y + this.height;
      } else if (orient === 'EAST') {
        point.x = startPoint ? this.X : this.X + this.width;
        point.y = this.pseudo ? this.Y - this.Tree().CONFIG.subTeeSeparation / 2 : this.Y + this.height / 2;
      } else if (orient === 'WEST') {
        point.x = startPoint ? this.X + this.width : this.X;
        point.y = this.pseudo ? this.Y - this.Tree().CONFIG.subTeeSeparation / 2 : this.Y + this.height / 2;
      }

      return point;
    },

    /**
     * @returns {string}
     */
    pathStringThrough: function pathStringThrough() {
      // get the geometry of a path going through the node
      var startPoint = this.connectorPoint(true),
          endPoint = this.connectorPoint(false);
      return ["M", startPoint.x + "," + startPoint.y, 'L', endPoint.x + "," + endPoint.y].join(" ");
    },

    /**
     * @param {object} hidePoint
     */
    drawLineThroughMe: function drawLineThroughMe(hidePoint) {
      // hidepoint se proslijedjuje ako je node sakriven zbog collapsed
      var pathString = hidePoint ? this.Tree().getPointPathString(hidePoint) : this.pathStringThrough();
      this.lineThroughMe = this.lineThroughMe || this.Tree()._R.path(pathString);
      var line_style = UTIL.cloneObj(this.connStyle.style);
      delete line_style['arrow-start'];
      delete line_style['arrow-end'];
      this.lineThroughMe.attr(line_style);

      if (hidePoint) {
        this.lineThroughMe.hide();
        this.lineThroughMe.hidden = true;
      }
    },
    addSwitchEvent: function addSwitchEvent(nodeSwitch) {
      var self = this;
      UTIL.addEvent(nodeSwitch, 'click', function (e) {
        e.preventDefault();

        if (self.getTreeConfig().callback.onBeforeClickCollapseSwitch.apply(self, [nodeSwitch, e]) === false) {
          return false;
        }

        self.toggleCollapse();
        self.getTreeConfig().callback.onAfterClickCollapseSwitch.apply(self, [nodeSwitch, e]);
      });
    },

    /**
     * @returns {TreeNode}
     */
    collapse: function collapse() {
      if (!this.collapsed) {
        this.toggleCollapse();
      }

      return this;
    },

    /**
     * @returns {TreeNode}
     */
    expand: function expand() {
      if (this.collapsed) {
        this.toggleCollapse();
      }

      return this;
    },

    /**
     * @returns {TreeNode}
     */
    toggleCollapse: function toggleCollapse() {
      var oTree = this.getTree();

      if (!oTree.inAnimation) {
        oTree.inAnimation = true;
        this.collapsed = !this.collapsed; // toggle the collapse at each click

        UTIL.toggleClass(this.nodeDOM, 'collapsed', this.collapsed);
        oTree.positionTree();
        var self = this;
        setTimeout(function () {
          // set the flag after the animation
          oTree.inAnimation = false;
          oTree.CONFIG.callback.onToggleCollapseFinished.apply(oTree, [self, self.collapsed]);
        }, oTree.CONFIG.animation.nodeSpeed > oTree.CONFIG.animation.connectorsSpeed ? oTree.CONFIG.animation.nodeSpeed : oTree.CONFIG.animation.connectorsSpeed);
      }

      return this;
    },
    hide: function hide(collapse_to_point) {
      collapse_to_point = collapse_to_point || false;
      var bCurrentState = this.hidden;
      this.hidden = true;
      this.nodeDOM.style.overflow = 'hidden';
      var tree = this.getTree(),
          config = this.getTreeConfig(),
          oNewState = {
        opacity: 0
      };

      if (collapse_to_point) {
        oNewState.left = collapse_to_point.x;
        oNewState.top = collapse_to_point.y;
      } // if parent was hidden in initial configuration, position the node behind the parent without animations


      if (!this.positioned || bCurrentState) {
        this.nodeDOM.style.visibility = 'hidden';

        if ($) {
          $(this.nodeDOM).css(oNewState);
        } else {
          this.nodeDOM.style.left = oNewState.left + 'px';
          this.nodeDOM.style.top = oNewState.top + 'px';
        }

        this.positioned = true;
      } else {
        // todo: fix flashy bug when a node is manually hidden and tree.redraw is called.
        if ($) {
          $(this.nodeDOM).animate(oNewState, config.animation.nodeSpeed, config.animation.nodeAnimation, function () {
            this.style.visibility = 'hidden';
          });
        } else {
          this.nodeDOM.style.transition = 'all ' + config.animation.nodeSpeed + 'ms ease';
          this.nodeDOM.style.transitionProperty = 'opacity, left, top';
          this.nodeDOM.style.opacity = oNewState.opacity;
          this.nodeDOM.style.left = oNewState.left + 'px';
          this.nodeDOM.style.top = oNewState.top + 'px';
          this.nodeDOM.style.visibility = 'hidden';
        }
      } // animate the line through node if the line exists


      if (this.lineThroughMe) {
        var new_path = tree.getPointPathString(collapse_to_point);

        if (bCurrentState) {
          // update without animations
          this.lineThroughMe.attr({
            path: new_path
          });
        } else {
          // update with animations
          tree.animatePath(this.lineThroughMe, tree.getPointPathString(collapse_to_point));
        }
      }

      return this;
    },

    /**
     * @returns {TreeNode}
     */
    hideConnector: function hideConnector() {
      var oTree = this.Tree();
      var oPath = oTree.connectionStore[this.id];

      if (oPath) {
        oPath.animate({
          'opacity': 0
        }, oTree.CONFIG.animation.connectorsSpeed, oTree.CONFIG.animation.connectorsAnimation);
      }

      return this;
    },
    show: function show() {
      var bCurrentState = this.hidden;
      this.hidden = false;
      this.nodeDOM.style.visibility = 'visible';
      var oTree = this.Tree();
      var oNewState = {
        left: this.X,
        top: this.Y,
        opacity: 1
      },
          config = this.getTreeConfig(); // if the node was hidden, update opacity and position

      if ($) {
        $(this.nodeDOM).animate(oNewState, config.animation.nodeSpeed, config.animation.nodeAnimation, function () {
          // $.animate applies "overflow:hidden" to the node, remove it to avoid visual problems
          this.style.overflow = "";
        });
      } else {
        this.nodeDOM.style.transition = 'all ' + config.animation.nodeSpeed + 'ms ease';
        this.nodeDOM.style.transitionProperty = 'opacity, left, top';
        this.nodeDOM.style.left = oNewState.left + 'px';
        this.nodeDOM.style.top = oNewState.top + 'px';
        this.nodeDOM.style.opacity = oNewState.opacity;
        this.nodeDOM.style.overflow = '';
      }

      if (this.lineThroughMe) {
        this.getTree().animatePath(this.lineThroughMe, this.pathStringThrough());
      }

      return this;
    },

    /**
     * @returns {TreeNode}
     */
    showConnector: function showConnector() {
      var oTree = this.Tree();
      var oPath = oTree.connectionStore[this.id];

      if (oPath) {
        oPath.animate({
          'opacity': 1
        }, oTree.CONFIG.animation.connectorsSpeed, oTree.CONFIG.animation.connectorsAnimation);
      }

      return this;
    }
  };
  /**
   * Build a node from the 'text' and 'img' property and return with it.
   *
   * The node will contain all the fields that present under the 'text' property
   * Each field will refer to a css class with name defined as node-{$property_name}
   *
   * Example:
   * The definition:
   *
   *   text: {
   *     desc: "some description",
   *     paragraph: "some text"
   *   }
   *
   * will generate the following elements:
   *
   *   <p class="node-desc">some description</p>
   *   <p class="node-paragraph">some text</p>
   *
   * @Returns the configured node
   */

  TreeNode.prototype.buildNodeFromText = function (node) {
    // IMAGE
    if (this.image) {
      image = document.createElement('img');
      image.src = this.image;
      node.appendChild(image);
    } // TEXT


    if (this.text) {
      for (var key in this.text) {
        // adding DATA Attributes to the node
        if (key.startsWith("data-")) {
          node.setAttribute(key, this.text[key]);
        } else {
          var textElement = document.createElement(this.text[key].href ? 'a' : 'p'); // make an <a> element if required

          if (this.text[key].href) {
            textElement.href = this.text[key].href;

            if (this.text[key].target) {
              textElement.target = this.text[key].target;
            }
          }

          textElement.className = "node-" + key;
          textElement.appendChild(document.createTextNode(this.text[key].val ? this.text[key].val : this.text[key] instanceof Object ? "'val' param missing!" : this.text[key]));
          node.appendChild(textElement);
        }
      }
    }

    return node;
  };
  /**
   * Build a node from  'nodeInnerHTML' property that defines an existing HTML element, referenced by it's id, e.g: #someElement
   * Change the text in the passed node to 'Wrong ID selector' if the referenced element does ot exist,
   * return with a cloned and configured node otherwise
   *
   * @Returns node the configured node
   */


  TreeNode.prototype.buildNodeFromHtml = function (node) {
    // get some element by ID and clone its structure into a node
    if (this.nodeInnerHTML.charAt(0) === "#") {
      var elem = document.getElementById(this.nodeInnerHTML.substring(1));

      if (elem) {
        node = elem.cloneNode(true);
        node.id += "-clone";
        node.className += " node";
      } else {
        node.innerHTML = "<b> Wrong ID selector </b>";
      }
    } else {
      // insert your custom HTML into a node
      node.innerHTML = this.nodeInnerHTML;
    }

    return node;
  };
  /**
   * @param {Tree} tree
   */


  TreeNode.prototype.createGeometry = function (tree) {
    if (this.id === 0 && tree.CONFIG.hideRootNode) {
      this.width = 0;
      this.height = 0;
      return;
    }

    var drawArea = tree.drawArea,
        image,
        /////////// CREATE NODE //////////////
    node = document.createElement(this.link.href ? 'a' : 'div');
    node.className = !this.pseudo ? TreeNode.CONFIG.nodeHTMLclass : 'pseudo';

    if (this.nodeHTMLclass && !this.pseudo) {
      node.className += ' ' + this.nodeHTMLclass;
    }

    if (this.nodeHTMLid) {
      node.id = this.nodeHTMLid;
    }

    if (this.link.href) {
      node.href = this.link.href;
      node.target = this.link.target;
    }

    if ($) {
      $(node).data('treenode', this);
    } else {
      node.data = {
        'treenode': this
      };
    } /////////// BUILD NODE CONTENT //////////////


    if (!this.pseudo) {
      node = this.nodeInnerHTML ? this.buildNodeFromHtml(node) : this.buildNodeFromText(node); // handle collapse switch

      if (this.collapsed || this.collapsable && this.childrenCount() && !this.stackParentId) {
        this.createSwitchGeometry(tree, node);
      }
    }

    tree.CONFIG.callback.onCreateNode.apply(tree, [this, node]); /////////// APPEND all //////////////

    drawArea.appendChild(node);
    this.width = node.offsetWidth;
    this.height = node.offsetHeight;
    this.nodeDOM = node;
    tree.imageLoader.processNode(this);
  };
  /**
   * @param {Tree} tree
   * @param {Element} nodeEl
   */


  TreeNode.prototype.createSwitchGeometry = function (tree, nodeEl) {
    nodeEl = nodeEl || this.nodeDOM; // safe guard and check to see if it has a collapse switch

    var nodeSwitchEl = UTIL.findEl('.collapse-switch', true, nodeEl);

    if (!nodeSwitchEl) {
      nodeSwitchEl = document.createElement('a');
      nodeSwitchEl.className = "collapse-switch";
      nodeEl.appendChild(nodeSwitchEl);
      this.addSwitchEvent(nodeSwitchEl);

      if (this.collapsed) {
        nodeEl.className += " collapsed";
      }

      tree.CONFIG.callback.onCreateNodeCollapseSwitch.apply(tree, [this, nodeEl, nodeSwitchEl]);
    }

    return nodeSwitchEl;
  }; // ###########################################
  //      Expose global + default CONFIG params
  // ###########################################


  Tree.CONFIG = {
    maxDepth: 100,
    rootOrientation: 'NORTH',
    // NORTH || EAST || WEST || SOUTH
    nodeAlign: 'CENTER',
    // CENTER || TOP || BOTTOM
    levelSeparation: 30,
    siblingSeparation: 30,
    subTeeSeparation: 30,
    hideRootNode: false,
    animateOnInit: false,
    animateOnInitDelay: 500,
    padding: 15,
    // the difference is seen only when the scrollbar is shown
    scrollbar: 'native',
    // "native" || "fancy" || "None" (PS: "fancy" requires jquery and perfect-scrollbar)
    connectors: {
      type: 'step',
      // 'curve' || 'step' || 'straight' || 'bCurve'
      style: {
        stroke: 'black'
      },
      stackIndent: 15
    },
    node: {
      // each node inherits this, it can all be overridden in node config
      // HTMLclass: 'node',
      // drawLineThrough: false,
      // collapsable: false,
      link: {
        target: '_self'
      }
    },
    animation: {
      // each node inherits this, it can all be overridden in node config
      nodeSpeed: 450,
      nodeAnimation: 'linear',
      connectorsSpeed: 450,
      connectorsAnimation: 'linear'
    },
    callback: {
      onCreateNode: function onCreateNode(treeNode, treeNodeDom) {},
      // this = Tree
      onCreateNodeCollapseSwitch: function onCreateNodeCollapseSwitch(treeNode, treeNodeDom, switchDom) {},
      // this = Tree
      onAfterAddNode: function onAfterAddNode(newTreeNode, parentTreeNode, nodeStructure) {},
      // this = Tree
      onBeforeAddNode: function onBeforeAddNode(parentTreeNode, nodeStructure) {},
      // this = Tree
      onAfterPositionNode: function onAfterPositionNode(treeNode, nodeDbIndex, containerCenter, treeCenter) {},
      // this = Tree
      onBeforePositionNode: function onBeforePositionNode(treeNode, nodeDbIndex, containerCenter, treeCenter) {},
      // this = Tree
      onToggleCollapseFinished: function onToggleCollapseFinished(treeNode, bIsCollapsed) {},
      // this = Tree
      onAfterClickCollapseSwitch: function onAfterClickCollapseSwitch(nodeSwitch, event) {},
      // this = TreeNode
      onBeforeClickCollapseSwitch: function onBeforeClickCollapseSwitch(nodeSwitch, event) {},
      // this = TreeNode
      onTreeLoaded: function onTreeLoaded(rootTreeNode) {
        var $oNodes = $('.Treant .node');
        $oNodes.on('click', function (oEvent) {
          var $oNode = $(this);
          console.log('treenode', $oNode.data('treenode'));
        });
      } // this = Tree

    }
  };
  TreeNode.CONFIG = {
    nodeHTMLclass: 'node'
  }; // #############################################
  // Makes a JSON chart config out of Array config
  // #############################################

  var JSONconfig = {
    make: function make(configArray) {
      var i = configArray.length,
          node;
      this.jsonStructure = {
        chart: null,
        nodeStructure: null
      }; //fist loop: find config, find root;

      while (i--) {
        node = configArray[i];

        if (node.hasOwnProperty('container')) {
          this.jsonStructure.chart = node;
          continue;
        }

        if (!node.hasOwnProperty('parent') && !node.hasOwnProperty('container')) {
          this.jsonStructure.nodeStructure = node;
          node._json_id = 0;
        }
      }

      this.findChildren(configArray);
      return this.jsonStructure;
    },
    findChildren: function findChildren(nodes) {
      var parents = [0]; // start with a a root node

      while (parents.length) {
        var parentId = parents.pop(),
            parent = this.findNode(this.jsonStructure.nodeStructure, parentId),
            i = 0,
            len = nodes.length,
            children = [];

        for (; i < len; i++) {
          var node = nodes[i];

          if (node.parent && node.parent._json_id === parentId) {
            // skip config and root nodes
            node._json_id = this.getID();
            delete node.parent;
            children.push(node);
            parents.push(node._json_id);
          }
        }

        if (children.length) {
          parent.children = children;
        }
      }
    },
    findNode: function findNode(node, nodeId) {
      var childrenLen, found;

      if (node._json_id === nodeId) {
        return node;
      } else if (node.children) {
        childrenLen = node.children.length;

        while (childrenLen--) {
          found = this.findNode(node.children[childrenLen], nodeId);

          if (found) {
            return found;
          }
        }
      }
    },
    getID: function () {
      var i = 1;
      return function () {
        return i++;
      };
    }()
  };
  /**
   * Chart constructor.
   */

  var Treant = function Treant(jsonConfig, callback, jQuery) {
    if (jsonConfig instanceof Array) {
      jsonConfig = JSONconfig.make(jsonConfig);
    } // optional


    if (jQuery) {
      $ = jQuery;
    }

    this.tree = TreeStore.createTree(jsonConfig);
    this.tree.positionTree(callback);
  };

  Treant.prototype.destroy = function () {
    TreeStore.destroy(this.tree.id);
  };
  /* expose constructor globally */


  window.Treant = Treant;
})();

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentActionView.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentActionView.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentActionView_vue_vue_type_template_id_93090910_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentActionView.vue?vue&type=template&id=93090910&scoped=true& */ "./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=template&id=93090910&scoped=true&");
/* harmony import */ var _ComponentActionView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentActionView.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponentActionView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentActionView_vue_vue_type_template_id_93090910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentActionView_vue_vue_type_template_id_93090910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "93090910",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/views/ComponentActionView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActionView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentActionView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActionView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=template&id=93090910&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=template&id=93090910&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActionView_vue_vue_type_template_id_93090910_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentActionView.vue?vue&type=template&id=93090910&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActionView.vue?vue&type=template&id=93090910&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActionView_vue_vue_type_template_id_93090910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActionView_vue_vue_type_template_id_93090910_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentActions.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentActions.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentActions_vue_vue_type_template_id_7418fad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentActions.vue?vue&type=template&id=7418fad0&scoped=true& */ "./resources/js/components/scheme/views/ComponentActions.vue?vue&type=template&id=7418fad0&scoped=true&");
/* harmony import */ var _ComponentActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentActions.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/views/ComponentActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComponentActions_vue_vue_type_style_index_0_id_7418fad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css& */ "./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComponentActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentActions_vue_vue_type_template_id_7418fad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentActions_vue_vue_type_template_id_7418fad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7418fad0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/views/ComponentActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentActions.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentActions.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_style_index_0_id_7418fad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=style&index=0&id=7418fad0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_style_index_0_id_7418fad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_style_index_0_id_7418fad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_style_index_0_id_7418fad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_style_index_0_id_7418fad0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentActions.vue?vue&type=template&id=7418fad0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentActions.vue?vue&type=template&id=7418fad0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_template_id_7418fad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentActions.vue?vue&type=template&id=7418fad0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentActions.vue?vue&type=template&id=7418fad0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_template_id_7418fad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentActions_vue_vue_type_template_id_7418fad0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentFields.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentFields.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentFields_vue_vue_type_template_id_c0337894_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentFields.vue?vue&type=template&id=c0337894&scoped=true& */ "./resources/js/components/scheme/views/ComponentFields.vue?vue&type=template&id=c0337894&scoped=true&");
/* harmony import */ var _ComponentFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentFields.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/views/ComponentFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponentFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentFields_vue_vue_type_template_id_c0337894_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentFields_vue_vue_type_template_id_c0337894_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c0337894",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/views/ComponentFields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentFields.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentFields.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentFields.vue?vue&type=template&id=c0337894&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentFields.vue?vue&type=template&id=c0337894&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentFields_vue_vue_type_template_id_c0337894_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentFields.vue?vue&type=template&id=c0337894&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentFields.vue?vue&type=template&id=c0337894&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentFields_vue_vue_type_template_id_c0337894_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentFields_vue_vue_type_template_id_c0337894_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentStatuses.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentStatuses.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentStatuses_vue_vue_type_template_id_1dbf3c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentStatuses.vue?vue&type=template&id=1dbf3c5d&scoped=true& */ "./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=template&id=1dbf3c5d&scoped=true&");
/* harmony import */ var _ComponentStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentStatuses.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponentStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentStatuses_vue_vue_type_template_id_1dbf3c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentStatuses_vue_vue_type_template_id_1dbf3c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1dbf3c5d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/views/ComponentStatuses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentStatuses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=template&id=1dbf3c5d&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=template&id=1dbf3c5d&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentStatuses_vue_vue_type_template_id_1dbf3c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentStatuses.vue?vue&type=template&id=1dbf3c5d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentStatuses.vue?vue&type=template&id=1dbf3c5d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentStatuses_vue_vue_type_template_id_1dbf3c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentStatuses_vue_vue_type_template_id_1dbf3c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserCategories.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserCategories.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentUserCategories_vue_vue_type_template_id_46b6b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentUserCategories.vue?vue&type=template&id=46b6b578&scoped=true& */ "./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=template&id=46b6b578&scoped=true&");
/* harmony import */ var _ComponentUserCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentUserCategories.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponentUserCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentUserCategories_vue_vue_type_template_id_46b6b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentUserCategories_vue_vue_type_template_id_46b6b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46b6b578",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/views/ComponentUserCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentUserCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=template&id=46b6b578&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=template&id=46b6b578&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserCategories_vue_vue_type_template_id_46b6b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentUserCategories.vue?vue&type=template&id=46b6b578&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserCategories.vue?vue&type=template&id=46b6b578&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserCategories_vue_vue_type_template_id_46b6b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserCategories_vue_vue_type_template_id_46b6b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserFields.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserFields.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentUserFields_vue_vue_type_template_id_8b01e13e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentUserFields.vue?vue&type=template&id=8b01e13e&scoped=true& */ "./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=template&id=8b01e13e&scoped=true&");
/* harmony import */ var _ComponentUserFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentUserFields.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponentUserFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentUserFields_vue_vue_type_template_id_8b01e13e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentUserFields_vue_vue_type_template_id_8b01e13e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8b01e13e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/views/ComponentUserFields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentUserFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=template&id=8b01e13e&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=template&id=8b01e13e&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserFields_vue_vue_type_template_id_8b01e13e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentUserFields.vue?vue&type=template&id=8b01e13e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserFields.vue?vue&type=template&id=8b01e13e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserFields_vue_vue_type_template_id_8b01e13e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserFields_vue_vue_type_template_id_8b01e13e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserGroups.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserGroups.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentUserGroups_vue_vue_type_template_id_36e33608_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentUserGroups.vue?vue&type=template&id=36e33608&scoped=true& */ "./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=template&id=36e33608&scoped=true&");
/* harmony import */ var _ComponentUserGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentUserGroups.vue?vue&type=script&lang=js& */ "./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponentUserGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentUserGroups_vue_vue_type_template_id_36e33608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentUserGroups_vue_vue_type_template_id_36e33608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36e33608",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/scheme/views/ComponentUserGroups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentUserGroups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=template&id=36e33608&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=template&id=36e33608&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserGroups_vue_vue_type_template_id_36e33608_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./ComponentUserGroups.vue?vue&type=template&id=36e33608&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/scheme/views/ComponentUserGroups.vue?vue&type=template&id=36e33608&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserGroups_vue_vue_type_template_id_36e33608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_ComponentUserGroups_vue_vue_type_template_id_36e33608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/mixins/TheContentMixin.vue":
/*!*********************************************************!*\
  !*** ./resources/js/helpers/mixins/TheContentMixin.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheContentMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheContentMixin.vue?vue&type=script&lang=js& */ "./resources/js/helpers/mixins/TheContentMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _TheContentMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/helpers/mixins/TheContentMixin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/helpers/mixins/TheContentMixin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/helpers/mixins/TheContentMixin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheContentMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./TheContentMixin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/helpers/mixins/TheContentMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_TheContentMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/userSettings/views/UserView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/userSettings/views/UserView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/mixins/TheContentMixin */ "./resources/js/helpers/mixins/TheContentMixin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "TheUserSettings",
  mixins: [_helpers_mixins_TheContentMixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      breadcrumbs: [{
        text: 'Главная',
        to: {
          path: '/'
        }
      }, {
        text: 'Настройки пользователя',
        active: true
      }],
      form: {
        field_list: [],
        group_id: [],
        comp_id: 1
      },
      notification: {
        priority: 0,
        region: [0],
        tt_type: 0,
        serv_cat: 0
      },
      group_list: [],
      field_list: [],
      tab: 1,
      checkedNames: [],
      checkedRegions: [],
      formErrors: null,
      errors: null,
      isLoading: true
    };
  },
  mounted: function mounted() {
    this.generateBreadcrumb(this.breadcrumbs);
    this.getGroupList();
    this.getMainList();
    this.getUserNotificationList();
  },
  watch: {},
  components: {},
  methods: {
    getGroupList: function getGroupList() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user_settings/group_list").then(function (response) {
        _this.group_list = response.data.group_list;
        _this.field_list = response.data.field_list;
      });
    },
    getMainList: function getMainList() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user_settings/main_list").then(function (response) {
        _this2.form.group_id = response.data.group;
        _this2.form.field_list = response.data.regions;
      });
    },
    clearFieldList: function clearFieldList() {
      this.form.field_list[2] = [];
    },
    saveUserRegion: function saveUserRegion(comp_id) {
      var _this3 = this;

      this.$data.form.comp_id = comp_id;

      if (comp_id == 2) {
        if (this.form.field_list[2].length == 0) this.form.field_list[2].push(null);
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/user_settings/set_user_region', this.$data.form).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        if (error.response.data) {
          _this3.formErrors = error.response.data.errors;
          return;
        }
      });
    },
    getUserNotificationList: function getUserNotificationList() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user_settings/get_user_notification").then(function (response) {
        _this4.notification.priority = response.data.priority;
        _this4.notification.region = response.data.region;
        _this4.notification.tt_type = response.data.tt_type;
        _this4.notification.serv_cat = response.data.serv_cat;
      });
    },
    saveUserNotification: function saveUserNotification() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/user_settings/set_user_notification', this.$data.notification).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        if (error.response.data) {
          _this5.formErrors = error.response.data.errors;
          return;
        }
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/userSettings/views/UserView.vue?vue&type=template&id=7b2ec6d7&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/userSettings/views/UserView.vue?vue&type=template&id=7b2ec6d7& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { height: "99%" } }, [
    _c("div", { staticClass: "card", staticStyle: { height: "100%" } }, [
      _c(
        "div",
        { staticClass: "row no-space", staticStyle: { height: "100%" } },
        [
          _c("div", { staticClass: "col-md-2 no-space left-menu" }, [
            _c("div", [
              _c("hr"),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass: "list-group",
                  staticStyle: { "max-height": "85%", overflow: "auto" }
                },
                [
                  _c(
                    "li",
                    {
                      staticClass:
                        "list-group-item d-flex justify-content-between align-items-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: { click: function($event) {} }
                        },
                        [_vm._v(" Общие настройки")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass:
                        "list-group-item d-flex justify-content-between align-items-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              _vm.tab = 1
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.tab == 1,
                                  expression: "tab == 1"
                                }
                              ],
                              staticStyle: { color: "blue" }
                            },
                            [_vm._v(" > ")]
                          ),
                          _vm._v(
                            "\n                                Сервис тикеты\n                            "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass:
                        "list-group-item d-flex justify-content-between align-items-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              _vm.tab = 3
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.tab == 3,
                                  expression: "tab == 3"
                                }
                              ],
                              staticStyle: { color: "blue" }
                            },
                            [_vm._v(" > ")]
                          ),
                          _vm._v(
                            "\n                                Ресурс тикеты\n                            "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass:
                        "list-group-item d-flex justify-content-between align-items-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: { click: function($event) {} }
                        },
                        [_vm._v(" Аварии")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass:
                        "list-group-item d-flex justify-content-between align-items-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              _vm.tab = 2
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.tab == 2,
                                  expression: "tab == 2"
                                }
                              ],
                              staticStyle: { color: "blue" }
                            },
                            [_vm._v(" > ")]
                          ),
                          _vm._v(
                            "\n                                Нотификации email/sms\n                            "
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-10 no-space",
              staticStyle: { height: "100%" }
            },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tab == 1,
                      expression: "tab == 1"
                    }
                  ],
                  staticStyle: { padding: "20px" }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "form-group col-md-3" },
                      [
                        _vm._v(
                          "\n                            Группа:\n                            "
                        ),
                        _c("hr"),
                        _vm._v(" "),
                        _vm._l(_vm.group_list, function(g, index) {
                          return _c("div", { key: index }, [
                            g.comp_id == 1
                              ? _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      border: "1px solid silver",
                                      padding: "5px 10px"
                                    }
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.group_id[1],
                                          expression: "form.group_id[1]"
                                        }
                                      ],
                                      attrs: { type: "radio", id: g.id },
                                      domProps: {
                                        value: g.id,
                                        checked: _vm._q(
                                          _vm.form.group_id[1],
                                          g.id
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.form.group_id,
                                            1,
                                            g.id
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: g.id } }, [
                                      _vm._v(_vm._s(g.group_name))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ])
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-md-3" },
                      [
                        _vm._v(
                          "\n                            Регион:\n                            "
                        ),
                        _c("hr"),
                        _vm._v(" "),
                        _vm._l(_vm.field_list, function(f, index) {
                          return _c("div", { key: index }, [
                            f.comp_id == 1
                              ? _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      border: "1px solid silver",
                                      padding: "5px 10px"
                                    }
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.field_list[1],
                                          expression: "form.field_list[1]"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: f.id },
                                      domProps: {
                                        value: f.id,
                                        checked: Array.isArray(
                                          _vm.form.field_list[1]
                                        )
                                          ? _vm._i(
                                              _vm.form.field_list[1],
                                              f.id
                                            ) > -1
                                          : _vm.form.field_list[1]
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.form.field_list[1],
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = f.id,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.form.field_list,
                                                  1,
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.form.field_list,
                                                  1,
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.form.field_list,
                                              1,
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: f.id } }, [
                                      _vm._v(_vm._s(f.field_name))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-left" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        staticStyle: { width: "150px" },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.saveUserRegion(1)
                          }
                        }
                      },
                      [_vm._v("Обновить")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tab == 3,
                      expression: "tab == 3"
                    }
                  ],
                  staticStyle: { padding: "20px" }
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "form-group col-md-3" },
                      [
                        _vm._v(
                          "\n                            Группа:\n                            "
                        ),
                        _c("hr"),
                        _vm._v(" "),
                        _vm._l(_vm.group_list, function(g, index) {
                          return _c("div", { key: index }, [
                            g.comp_id == 2
                              ? _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      border: "1px solid silver",
                                      padding: "5px 10px"
                                    }
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.group_id[2],
                                          expression: "form.group_id[2]"
                                        }
                                      ],
                                      attrs: { type: "radio", id: g.id },
                                      domProps: {
                                        value: g.id,
                                        checked: _vm._q(
                                          _vm.form.group_id[2],
                                          g.id
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.clearFieldList()
                                        },
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.form.group_id,
                                            2,
                                            g.id
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: g.id } }, [
                                      _vm._v(_vm._s(g.group_name))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ])
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-md-3" },
                      [
                        _vm._v(
                          "\n                            Регион:\n                            "
                        ),
                        _c("hr"),
                        _vm._v(" "),
                        _vm._l(_vm.field_list, function(f, index) {
                          return _c("div", { key: index }, [
                            f.comp_id == 2 && _vm.form.group_id[2] == 3
                              ? _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      border: "1px solid silver",
                                      padding: "5px 10px"
                                    }
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.field_list[2],
                                          expression: "form.field_list[2]"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: f.id },
                                      domProps: {
                                        value: f.id,
                                        checked: Array.isArray(
                                          _vm.form.field_list[2]
                                        )
                                          ? _vm._i(
                                              _vm.form.field_list[2],
                                              f.id
                                            ) > -1
                                          : _vm.form.field_list[2]
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.form.field_list[2],
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = f.id,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.form.field_list,
                                                  2,
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.form.field_list,
                                                  2,
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.form.field_list,
                                              2,
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: f.id } }, [
                                      _vm._v(_vm._s(f.field_name))
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-left" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        staticStyle: { width: "150px" },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.saveUserRegion(2)
                          }
                        }
                      },
                      [_vm._v("Обновить")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tab == 2,
                      expression: "tab == 2"
                    }
                  ],
                  staticStyle: { padding: "20px" }
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-md-3" }, [
                      _vm._v(
                        "\n                            Приоритеты:\n                            "
                      ),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.priority,
                                expression: "notification.priority"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "prior_all",
                              value: "0"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.priority, "0")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "priority",
                                  "0"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "prior_all" } }, [
                            _vm._v("По всем")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.priority,
                                expression: "notification.priority"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "prior_emergency",
                              value: "1"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.priority, "1")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "priority",
                                  "1"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "prior_emergency" } }, [
                            _vm._v("Только Emergency")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.priority,
                                expression: "notification.priority"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "prior_critical",
                              value: "2"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.priority, "2")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "priority",
                                  "2"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "prior_critical" } }, [
                            _vm._v("Critical и выше")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.priority,
                                expression: "notification.priority"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "prior_high",
                              value: "3"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.priority, "3")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "priority",
                                  "3"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "prior_high" } }, [
                            _vm._v("High и выше")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.priority,
                                expression: "notification.priority"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "prior_medium",
                              value: "4"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.priority, "4")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "priority",
                                  "4"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "prior_medium" } }, [
                            _vm._v("Medium и выше")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-3" }, [
                      _vm._v(
                        "\n                            Регион:\n                            "
                      ),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.region,
                                expression: "notification.region"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "region_all",
                              value: "0"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.notification.region)
                                ? _vm._i(_vm.notification.region, "0") > -1
                                : _vm.notification.region
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.notification.region,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "0",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.notification, "region", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "region_all" } }, [
                            _vm._v("По всем регионам")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.region,
                                expression: "notification.region"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "region_almaty",
                              value: "1"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.notification.region)
                                ? _vm._i(_vm.notification.region, "1") > -1
                                : _vm.notification.region
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.notification.region,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "1",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.notification, "region", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "region_almaty" } }, [
                            _vm._v("Алматы")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.region,
                                expression: "notification.region"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "region_astana",
                              value: "8"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.notification.region)
                                ? _vm._i(_vm.notification.region, "8") > -1
                                : _vm.notification.region
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.notification.region,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "8",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.notification, "region", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "region_astana" } }, [
                            _vm._v("Нур-Султан")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.region,
                                expression: "notification.region"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "region_north",
                              value: "3"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.notification.region)
                                ? _vm._i(_vm.notification.region, "3") > -1
                                : _vm.notification.region
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.notification.region,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "3",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.notification, "region", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "region_north" } }, [
                            _vm._v("Северный")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.region,
                                expression: "notification.region"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "region_south",
                              value: "2"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.notification.region)
                                ? _vm._i(_vm.notification.region, "2") > -1
                                : _vm.notification.region
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.notification.region,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "2",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.notification, "region", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "region_south" } }, [
                            _vm._v("Южный")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.region,
                                expression: "notification.region"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "region_east",
                              value: "7"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.notification.region)
                                ? _vm._i(_vm.notification.region, "7") > -1
                                : _vm.notification.region
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.notification.region,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "7",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.notification, "region", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "region_east" } }, [
                            _vm._v("Восточный")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.region,
                                expression: "notification.region"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              id: "region_west",
                              value: "4"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.notification.region)
                                ? _vm._i(_vm.notification.region, "4") > -1
                                : _vm.notification.region
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.notification.region,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "4",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.notification,
                                        "region",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.notification, "region", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "region_west" } }, [
                            _vm._v("Западный")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-3" }, [
                      _vm._v(
                        "\n                            Тип тикета:\n                            "
                      ),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.tt_type,
                                expression: "notification.tt_type"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "tt_type_all",
                              value: "0"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.tt_type, "0")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "tt_type",
                                  "0"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "tt_type_all" } }, [
                            _vm._v("По всем")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.tt_type,
                                expression: "notification.tt_type"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "tt_type_event",
                              value: "1"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.tt_type, "1")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "tt_type",
                                  "1"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "tt_type_event" } }, [
                            _vm._v("Только События")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.tt_type,
                                expression: "notification.tt_type"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "tt_type_incident",
                              value: "2"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.tt_type, "2")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "tt_type",
                                  "2"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "tt_type_incident" } }, [
                            _vm._v("Только Инциденты")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-3" }, [
                      _vm._v(
                        "\n                            Категория сервиса/сайта:\n                            "
                      ),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.serv_cat,
                                expression: "notification.serv_cat"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "serv_cat_all",
                              value: "0"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.serv_cat, "0")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "serv_cat",
                                  "0"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "serv_cat_all" } }, [
                            _vm._v("По всем")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "1px solid silver",
                            padding: "5px 10px"
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.notification.serv_cat,
                                expression: "notification.serv_cat"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "serv_cat_2",
                              value: "1"
                            },
                            domProps: {
                              checked: _vm._q(_vm.notification.serv_cat, "1")
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(
                                  _vm.notification,
                                  "serv_cat",
                                  "1"
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "serv_cat_2" } }, [
                            _vm._v("1'ой и 2'ой категории")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("* 1 и 2 категория - MegaHigh сайты")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-left" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        staticStyle: { width: "150px" },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.saveUserNotification()
                          }
                        }
                      },
                      [_vm._v("Обновить")]
                    )
                  ])
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-12" }, [
      _vm._v(
        "\n                        Ответсвенная группа по Сервис Тикетам:\n                        "
      ),
      _c("hr")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-12" }, [
      _vm._v(
        "\n                        Ответсвенная группа по Ресурс Тикетам:\n                        "
      ),
      _c("hr")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-12" }, [
      _vm._v(
        "\n                        Информирование по sms/email:\n                        "
      ),
      _c("hr")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/userSettings/views/UserView.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/userSettings/views/UserView.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserView_vue_vue_type_template_id_7b2ec6d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserView.vue?vue&type=template&id=7b2ec6d7& */ "./resources/js/components/userSettings/views/UserView.vue?vue&type=template&id=7b2ec6d7&");
/* harmony import */ var _UserView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserView.vue?vue&type=script&lang=js& */ "./resources/js/components/userSettings/views/UserView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserView_vue_vue_type_template_id_7b2ec6d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserView_vue_vue_type_template_id_7b2ec6d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/userSettings/views/UserView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/userSettings/views/UserView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/userSettings/views/UserView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_UserView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./UserView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/userSettings/views/UserView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_UserView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/userSettings/views/UserView.vue?vue&type=template&id=7b2ec6d7&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/userSettings/views/UserView.vue?vue&type=template&id=7b2ec6d7& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_UserView_vue_vue_type_template_id_7b2ec6d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./UserView.vue?vue&type=template&id=7b2ec6d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./resources/js/components/userSettings/views/UserView.vue?vue&type=template&id=7b2ec6d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_UserView_vue_vue_type_template_id_7b2ec6d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_UserView_vue_vue_type_template_id_7b2ec6d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
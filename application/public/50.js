(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"KnK+":function(t,e,r){"use strict";var i=r("txcL"),o={name:"TheContentMixin",methods:{generateBreadcrumb:function(t){this.$store.dispatch(i.a,t)},getTitle:function(t){return t[t.length-1].text},setNotifications:function(t){this.$store.dispatch(i.b,t)},scrollToTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}},s=r("KHd+"),a=Object(s.a)(o,void 0,void 0,!1,null,null,null);e.a=a.exports},l6UO:function(t,e,r){"use strict";r.r(e);var i=r("ta7f"),o=r("kGIl"),s=r.n(o),a=r("Snq/"),n=r.n(a),l=(r("bfyA"),r("5A0h"),r("EvnB")),c={name:"TicketCreate",mixins:[r("KnK+").a],data:function(){return{title:"Create Ticket",breadcrumbs:[{text:"Главная",to:{path:"/"}},{text:"TroubleTicket",to:{path:"/troubleticket"}},{text:"Создание Сервис тикета",active:!0}],priority_manual:0,selected_alarms:{},form:{priority:6,tt_type:null,service_type:[],network_type:null,region:null,source_name:null,interruption:null,affection:null,influence:null,probable_cause:null,start_date:"25.08.2021",start_time:null,description:null,alarm_source_id:0,id_source_settlement:null,down_site_2g:0,down_site_3g:0,down_site_4g:0},serviceSearch:"",settlementSearch:"",formErrors:null,isLoading:!1,service_options:[],subnetwork_options:[],settlement_options:[],problem_causes_options:[],influence_options:[{value:1,text:"Нет"},{value:2,text:"Kcell"},{value:3,text:"Activ"},{value:4,text:"Kcell & Activ"}],affection_options:[{value:1,text:"Без влияния"},{value:2,text:"Полное"},{value:3,text:"Частичное"}],tt_type_options:[{value:1,text:"Событие"},{value:2,text:"Инцидент"},{value:3,text:"Проблема"}],search_alarm:"",alarm_down_list:{},alarm_selected:[],alarm_service_id:null,alarm_source_id:null,alarm_source_name:"",alarm_list:[],alarm_columns:[{label:"id",name:"id",filter:{type:"simple",placeholder:""},column_classes:"id_column",sort:!0},{label:"source_name",name:"source_name",filter:{type:"simple",placeholder:""},sort:!0},{label:"fault_name",name:"fault_name",filter:{type:"simple",placeholder:""},sort:!0},{label:"date_raised",name:"date_raised",filter:{type:"simple",placeholder:""},sort:!0},{label:"Source",name:"id",slot_name:"act_source",column_classes:"id_column",sort:!1}],table_config:{checkbox_rows:!0,rows_selectable:!1,card_title:"teet",per_page:20,global_search:{placeholder:"Поиск",visibility:!0,case_sensitive:!1},per_page_options:[10,20,50,100],show_refresh_button:!1,show_reset_button:!1,card_mode:!1},table_classes:{table:{"table-striped table-sm":!0,"table-bordered alarm_table":function(t){return!0}}}}},computed:{AlarmList:function(){return this.$store.getters.ALARM_LIST_CREATE_FORM}},components:{Loading:s.a,vSelect:n.a,VueBootstrap4Table:l.a},watch:{settlementSearch:function(t){var e=this;t.length>2&&(t=t.toLowerCase(),axios.get("/api/catalog/settlement/search?query=".concat(t)).then((function(t){e.settlement_options=t.data.list})))},"form.region":function(t,e){this.checkPriority()}},mounted:function(){this.generateBreadcrumb(this.breadcrumbs),this.setTodayDate(),this.getSubnetworks(),this.getServiceOptions(),this.getServiceProblems(),this.parseAlarmList()},methods:{setTodayDate:function(){var t=new Date,e=t.getDate(),r=t.getMonth()+1,i=t.getFullYear();e<10&&(e="0".concat(e)),r<10&&(r="0".concat(r)),t="".concat(e,".").concat(r,".").concat(i),this.form.start_date=t},checkPriority:function(){var t,e,r=3;if(this.form.region)for(t=0;t<this.form.region.length;t++)this.form.region[t].city_type<r&&(r=this.form.region[t].city_type);if(this.form.service_type)for(e=0;e<this.form.service_type.length;e++)this.form.service_type[e].id_city_type=r,this.form.service_type[e].id_service&&this.form.service_type[e].id_influence&&this.form.service_type[e].id_city_type&&this.getServicePriority(this.form.service_type[e].id_service,this.form.service_type[e].id_influence,this.form.service_type[e].id_city_type)},updatePriority:function(){var t,e=6;for(t=0;t<this.form.service_type.length;t++)this.form.service_type[t].id_priority<e&&(e=this.form.service_type[t].id_priority);this.form.priority=e},dateChanged:function(){var t=(this.form.start_date+" "+this.form.start_time).replace(/(..)\.(..)\.(....) (..):(..)/,"$3-$2-$1 $4:$5"),e=new Date(t);console.log("date1: ",e.getTime());var r=new Date;console.log("date2: ",r.getTime());var i,o=new Date;if(o=r.getTime()-2592e6,(e>r||e<o)&&(alert("Дата указана некорректно, проверьте пожалуйста"),this.form.start_date="",this.form.start_time=""),this.form.service_type)for(i=0;i<this.form.service_type.length;i++)this.form.service_type[i].start_date=this.form.start_date,this.form.service_type[i].start_time=this.form.start_time},getSubnetworks:function(){var t=this;axios.get("/api/catalog/subnetworks_list").then((function(e){t.subnetwork_options=e.data.list}))},getServiceOptions:function(){var t=this;axios.get("/api/catalog/service_options?query=").then((function(e){t.service_options=e.data.list}))},getServiceProblems:function(){var t=this;axios.get("/api/catalog/problem_cause_list").then((function(e){t.problem_causes_options=e.data.list}))},getServicePriority:function(t,e,r){var i=this;axios.get("/api/catalog/service_priority/search?id_service=".concat(t,"&id_influence=").concat(e,"&id_city_type=").concat(r)).then((function(e){var r,o=6;for(e.data.priority&&(o=e.data.priority.id_priority),r=0;r<i.form.service_type.length;r++)i.form.service_type[r].id_service==t&&(i.form.service_type[r].id_priority=o);i.updatePriority()}))},parseAlarmList:function(){var t=this;if(this.AlarmList.length>0){var e,r,i,o,s={},a={};s.alarm_list=this.AlarmList,console.log("tickets 00","tete"),axios.post("/api/troubleticket/ticket_get_create_data",s).then((function(s){for(a=s.data.list,t.form.tt_type=a.tt_type,t.form.affection=a.affection,t.form.influence=a.influence,t.form.source_name=a.source_name,t.form.description=a.description,t.form.region=a.region,t.form.service_type=a.service_type,r=a.start_date.substring(0,10),o=r.split("-"),r=o[2]+"."+o[1]+"."+o[0],i=a.start_date.substring(11,16),t.form.start_date=r,t.form.start_time=i,t.form.down_site_2g=a.down_site_2g,t.form.down_site_3g=a.down_site_3g,t.form.down_site_4g=a.down_site_4g,e=0;e<t.form.service_type.length;e++)t.form.service_type[e].start_date=r,t.form.service_type[e].start_time=i;console.log("tickets 11",s.data.list)})).catch((function(e){e.response.data&&(t.formErrors=e.response.data.errors)}))}},create:function(){var t=this;this.$v.form.$touch(),this.$v.form.$pending||this.$v.form.$error||(this.isLoading=!0,axios.post("/api/troubleticket/create",this.$data.form).then((function(e){1===e.data.success&&(console.log("tickets",e.data.ticket),t.isLoading=!1,t.$router.push({path:"/troubleticket/"+e.data.ticket.id}))})).catch((function(e){if(e.response.data)return t.formErrors=e.response.data.errors,void(t.isLoading=!1)})))},onSelectRow:function(t){var e;for(this.form.service_type[this.alarm_service_id].alarms=[],e=0;e<t.selected_items.length;e++)this.form.service_type[this.alarm_service_id].alarms.push(t.selected_items[e]);console.log("alarms",this.form.service_type[this.alarm_service_id].alarms),console.log("alarms",this.alarm_selected)},onSelectSource:function(t){this.alarm_source_id=t,this.alarm_source_name=this.alarm_list.filter((function(e){return e.id==t?e:""}))[0].source_name,this.form.source_name=this.alarm_source_name}},validations:{form:{service_type:{required:i.required},network_type:{required:i.required},region:{required:i.required},source_name:{required:i.required},probable_cause:{required:i.required},description:{required:i.required,minLength:Object(i.minLength)(3),maxLength:Object(i.maxLength)(4e3)},tt_type:{required:i.required},affection:{required:i.required},influence:{required:i.required},priority:{between:Object(i.between)(1,5)},start_date:{required:i.required},start_time:{required:i.required}}}},m=r("KHd+"),u=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.create()}}},[r("div",{staticClass:"row no-space"},[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Тип сервиса")]),t._v(" "),r("v-select",{class:{"is-invalid":t.$v.form.service_type.$error},attrs:{options:t.service_options,multiple:""},on:{blur:function(e){return t.$v.form.service_type.$touch()}},model:{value:t.form.service_type,callback:function(e){t.$set(t.form,"service_type",e)},expression:"form.service_type"}}),t._v(" "),t.$v.form.service_type.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Обязательно для заполнения\n                            ")])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Подсеть")]),t._v(" "),r("v-select",{class:{"is-invalid":t.$v.form.network_type.$error},attrs:{options:t.subnetwork_options},on:{blur:function(e){return t.$v.form.network_type.$touch()}},model:{value:t.form.network_type,callback:function(e){t.$set(t.form,"network_type",e)},expression:"form.network_type"}}),t._v(" "),t.$v.form.network_type.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Обязательно для заполнения\n                            ")])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Город")]),t._v(" "),r("v-select",{class:{"is-invalid":t.$v.form.region.$error},attrs:{options:t.settlement_options,multiple:""},on:{blur:function(e){return t.$v.form.region.$touch()},search:function(e){return t.settlementSearch=e}},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}}),t._v(" "),t.$v.form.region.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Обязательно для заполнения\n                            ")])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Возможная причина проблемы")]),t._v(" "),r("v-select",{class:{"is-invalid":t.$v.form.probable_cause.$error},attrs:{options:t.problem_causes_options},on:{blur:function(e){return t.$v.form.probable_cause.$touch()}},model:{value:t.form.probable_cause,callback:function(e){t.$set(t.form,"probable_cause",e)},expression:"form.probable_cause"}}),t._v(" "),t.$v.form.probable_cause.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Обязательно для заполнения\n                            ")])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"source_name"}},[t._v("Возможный источник проблемы")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.source_name,expression:"form.source_name"}],staticClass:"form-control",class:{"is-invalid":t.$v.form.source_name.$error},attrs:{type:"text",id:"source_name"},domProps:{value:t.form.source_name},on:{blur:function(e){return t.$v.form.source_name.$touch()},input:function(e){e.target.composing||t.$set(t.form,"source_name",e.target.value)}}}),t._v(" "),t.$v.form.source_name.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Обязательно для заполнения\n                            ")])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Описание")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control",class:{"is-invalid":t.$v.form.description.$error},staticStyle:{height:"auto"},attrs:{id:"description",rows:"4"},domProps:{value:t.form.description},on:{blur:function(e){return t.$v.form.description.$touch()},input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}}),t._v(" "),t.$v.form.description.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Обязательно для заполнения\n                            ")]),t._v(" "),t.$v.form.description.minLength?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Минимальная длина "+t._s(t.$v.form.description.$params.minLength.min)+" символов. Сейчас\n                                "+t._s(t.form.description.length)+".\n                            ")]),t._v(" "),t.$v.form.description.maxLength?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                Максимальная длина "+t._s(t.$v.form.description.$params.maxLength.max)+" символов. Сейчас\n                                "+t._s(t.form.description.length)+".\n                            ")])])]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tt_type"}},[t._v("Тип тикеты")]),t._v(" "),r("b-form-group",[r("b-form-radio-group",{attrs:{id:"radio-group-3",options:t.tt_type_options,name:"tt_type"},model:{value:t.form.tt_type,callback:function(e){t.$set(t.form,"tt_type",e)},expression:"form.tt_type"}})],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tt_type,expression:"form.tt_type"}],staticClass:"form-control",class:{"is-invalid":t.$v.form.tt_type.$error},staticStyle:{display:"none"},attrs:{type:"text",id:"affection"},domProps:{value:t.form.tt_type},on:{blur:function(e){return t.$v.form.tt_type.$touch()},input:function(e){e.target.composing||t.$set(t.form,"tt_type",e.target.value)}}}),t._v(" "),t.$v.form.tt_type.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                        Обязательно для заполнения\n                                    ")])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"affection"}},[t._v("Влияние на сервис")]),t._v(" "),r("b-form-group",[r("b-form-radio-group",{attrs:{id:"radio-group-2",options:t.affection_options,name:"affection"},model:{value:t.form.affection,callback:function(e){t.$set(t.form,"affection",e)},expression:"form.affection"}})],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.affection,expression:"form.affection"}],staticClass:"form-control",class:{"is-invalid":t.$v.form.affection.$error},staticStyle:{display:"none"},attrs:{type:"text",id:"affection"},domProps:{value:t.form.affection},on:{blur:function(e){return t.$v.form.affection.$touch()},input:function(e){e.target.composing||t.$set(t.form,"affection",e.target.value)}}}),t._v(" "),t.$v.form.affection.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                        Обязательно для заполнения\n                                    ")])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"influence"}},[t._v("Бренд")]),t._v(" "),r("b-form-group",[r("b-form-radio-group",{attrs:{id:"radio-group-1",options:t.influence_options,name:"influence"},model:{value:t.form.influence,callback:function(e){t.$set(t.form,"influence",e)},expression:"form.influence"}})],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.influence,expression:"form.influence"}],staticClass:"form-control",class:{"is-invalid":t.$v.form.influence.$error},staticStyle:{display:"none"},attrs:{type:"text",id:"influence"},domProps:{value:t.form.influence},on:{blur:function(e){return t.$v.form.influence.$touch()},input:function(e){e.target.composing||t.$set(t.form,"influence",e.target.value)}}}),t._v(" "),t.$v.form.influence.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                        Обязательно для заполнения\n                                    ")])],1)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"priority"}},[t._v("\n                                        Приоритет \n                                        "),r("button",{staticClass:"btn btn-sm float-right",attrs:{type:"button"},on:{click:function(e){t.priority_manual=1}}},[r("b-icon",{staticClass:"rounded",attrs:{icon:"pencil-square",scale:"1","font-scale":"1",variant:"primary"}})],1)]),t._v(" "),1==t.form.priority?r("input",{staticClass:"form-control",attrs:{type:"text",id:"priority",value:"Emergency",disabled:""}}):t._e(),t._v(" "),2==t.form.priority?r("input",{staticClass:"form-control",attrs:{type:"text",id:"priority",value:"Critical",disabled:""}}):t._e(),t._v(" "),3==t.form.priority?r("input",{staticClass:"form-control",attrs:{type:"text",id:"priority",value:"High",disabled:""}}):t._e(),t._v(" "),4==t.form.priority?r("input",{staticClass:"form-control",attrs:{type:"text",id:"priority",value:"Medium",disabled:""}}):t._e(),t._v(" "),5==t.form.priority?r("input",{staticClass:"form-control",attrs:{type:"text",id:"priority",value:"Low",disabled:""}}):t._e(),t._v(" "),6==t.form.priority?r("input",{staticClass:"form-control",attrs:{type:"text",id:"priority",value:"Неопределен",disabled:""}}):t._e(),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.priority,expression:"form.priority"},{name:"show",rawName:"v-show",value:1==t.priority_manual,expression:"priority_manual == 1"}],staticClass:"form-control",class:{"is-invalid":t.$v.form.priority.$error},staticStyle:{"margin-top":"3px"},attrs:{id:"priority2"},on:{blur:function(e){return t.$v.form.influence.$touch()},change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"priority",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"1"}},[t._v("Emergency")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("Critical")]),t._v(" "),r("option",{attrs:{value:"3"}},[t._v("High")]),t._v(" "),r("option",{attrs:{value:"4"}},[t._v("Medium")]),t._v(" "),r("option",{attrs:{value:"5"}},[t._v("Low")])]),t._v(" "),t.$v.form.priority.between?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                        Указано некорректное значение\n                                    ")])]),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"start_date"}},[t._v("Дата начала")]),t._v(" "),r("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"##.##.####",expression:"'##.##.####'"}],class:{"is-invalid":t.$v.form.start_date.$error},attrs:{type:"text",id:"start_date",placeholder:"dd.mm.yyyy"},on:{blur:function(e){return t.$v.form.start_date.$touch()}},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}}),t._v(" "),t.$v.form.start_date.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                            Обязательно для заполнения\n                                        ")])],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"start_time"}},[t._v("Время начала")]),t._v(" "),r("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"##:##",expression:"'##:##'"}],class:{"is-invalid":t.$v.form.start_time.$error},attrs:{type:"text",id:"start_time",placeholder:"HH:mm"},on:{blur:function(e){return t.$v.form.start_time.$touch()},change:function(e){return t.dateChanged()}},model:{value:t.form.start_time,callback:function(e){t.$set(t.form,"start_time",e)},expression:"form.start_time"}}),t._v(" "),t.$v.form.start_time.required?t._e():r("div",{staticClass:"invalid-feedback"},[t._v("\n                                            Обязательно для заполнения\n                                        ")])],1)])])]),t._v(" "),r("div",{staticClass:"border",staticStyle:{"min-height":"250px",background:"#005cb2"}},[t._m(0),t._v(" "),r("hr",{staticStyle:{margin:"5px 0","border-color":"white"}}),t._v(" "),r("div",{staticClass:"border",staticStyle:{"min-height":"200px",background:"#c6e0fc",margin:"3px"}},[r("table",{staticClass:"table table-sm table-light",staticStyle:{background:"#c6e0fc"}},t._l(t.form.service_type,(function(e,i){return r("tr",{key:i},[r("td",{staticClass:"border-bottom"},[r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-8"},[r("span",{staticStyle:{"font-weight":"bold","padding-left":"15px"}},[t._v("\n                                                        "+t._s(e.label)+"\n                                                    ")])]),t._v(" "),r("div",{staticClass:"form-group col-md-4 text-right",staticStyle:{border:"0.5px solid white"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:2==e.service_type,expression:"item.service_type == 2"}],staticStyle:{"padding-right":"15px","font-size":"10px"}},[t._v(" \n                                                        Аварии: "),r("span",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[t._v(t._s(t.form.service_type[i].alarms.length))])]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:2==e.service_type,expression:"item.service_type == 2"}],staticStyle:{"padding-right":"15px","font-size":"10px"}},[t._v(" \n                                                        Вне сервиса: "),r("span",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[t._v(t._s(t.form.service_type[i].down_services.length))])])])]),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-7"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.service_type[i].id_influence,expression:"form.service_type[index].id_influence"}],staticClass:"form-control",attrs:{id:"query_type"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.service_type[i],"id_influence",e.target.multiple?r:r[0])},function(e){return t.checkPriority()}]}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Выберите")]),t._v(" "),t._l(e.influence_options,(function(e){return r("option",{domProps:{value:e.id_influence}},[t._v("\n                                                            "+t._s(e.label)+"\n                                                        ")])}))],2)]),t._v(" "),r("div",{staticClass:"form-group col-md-3"},[r("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"##.##.####",expression:"'##.##.####'"}],attrs:{type:"text",id:"start_date",placeholder:"dd.mm.yyyy"},model:{value:t.form.service_type[i].start_date,callback:function(e){t.$set(t.form.service_type[i],"start_date",e)},expression:"form.service_type[index].start_date"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-2"},[r("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"##:##",expression:"'##:##'"}],attrs:{type:"text",id:"start_time",placeholder:"HH:mm"},model:{value:t.form.service_type[i].start_time,callback:function(e){t.$set(t.form.service_type[i],"start_time",e)},expression:"form.service_type[index].start_time"}})],1)])])])})),0)])]),t._v(" "),t.formErrors?r("div",{staticClass:"alert alert-danger"},t._l(t.formErrors,(function(e,i){return r("div",{key:i},[t._v("\n                                "+t._s(e.join("\n"))+"\n                            ")])})),0):t._e()])]),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"card-footer"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-sm btn-outline-warning",staticStyle:{margin:"3px 3px 0 0"},attrs:{type:"button"}},[this._v("\n                                    Добавить аварии\n                                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row no-space"},[e("div",{staticClass:"col-md-12"},[e("button",{staticClass:"btn btn-md btn-outline-primary",staticStyle:{margin:"10px 0"},attrs:{type:"submit"}},[this._v("Сохранить")])])])}],!1,null,null,null);e.default=u.exports}}]);
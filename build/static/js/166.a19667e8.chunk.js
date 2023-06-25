(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[166],{1628:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20);var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2022);var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__);var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(443);var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(445);var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(89);var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(72);var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__);var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(88);var Api__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(159);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(10);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _createForOfIteratorHelper(t,e){var _=typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!_){if(Array.isArray(t)||(_=_unsupportedIterableToArray(t))||e&&t&&typeof t.length==="number"){if(_)t=_;var a=0;var r=function e(){};return{s:r,n:function e(){if(a>=t.length)return{done:true};return{done:false,value:t[a++]}},e:function e(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n=true,i=false,o;return{s:function e(){_=_.call(t)},n:function e(){var t=_.next();n=t.done;return t},e:function e(t){i=true;o=t},f:function e(){try{if(!n&&_.return!=null)_.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(e,t){if(!e)return;if(typeof e==="string")return _arrayLikeToArray(e,t);var _=Object.prototype.toString.call(e).slice(8,-1);if(_==="Object"&&e.constructor)_=e.constructor.name;if(_==="Map"||_==="Set")return Array.from(e);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return _arrayLikeToArray(e,t)}function _arrayLikeToArray(e,t){if(t==null||t>e.length)t=e.length;for(var _=0,a=new Array(t);_<t;_++)a[_]=e[_];return a}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var a=t[_];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var a=_.call(e,t||"default");if(_typeof(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(r){var n=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(r),_;if(n){var a=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,a)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};function TabContainer(e){var t=e.children,_=e.dir;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["a"],{component:"div",dir:_,style:{padding:8*3}},t)}var Notifications=function(_Component){_inherits(Notifications,_Component);var _super=_createSuper(Notifications);function Notifications(){var _;_classCallCheck(this,Notifications);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++){t[a]=arguments[a]}_=_super.call.apply(_super,[this].concat(t));_.state={value:0,messages:null,notificationTypes:null,notifications:null};_.handleChange=function(e,t){_.setState({value:t})};_.handleChangeIndex=function(e){_.setState({value:e})};return _}_createClass(Notifications,[{key:"componentDidMount",value:function e(){this.getMessages();this.getNotificationTypes();this.getNotifications()}},{key:"getMessages",value:function e(){var t=this;Api__WEBPACK_IMPORTED_MODULE_8__["a"].get("messages.js").then(function(e){t.setState({messages:e.data})}).catch(function(e){console.log(e)})}},{key:"getNotificationTypes",value:function e(){var t=this;Api__WEBPACK_IMPORTED_MODULE_8__["a"].get("notificationTypes.js").then(function(e){t.setState({notificationTypes:e.data})}).catch(function(e){console.log(e)})}},{key:"getNotifications",value:function e(){var t=this;Api__WEBPACK_IMPORTED_MODULE_8__["a"].get("notifications.js").then(function(e){t.setState({notifications:e.data})}).catch(function(e){console.log(e)})}},{key:"getNotificationName",value:function e(t){var _=this.state.notificationTypes;if(_){var a=_createForOfIteratorHelper(_),r;try{for(a.s();!(r=a.n()).done;){var n=r.value;if(t===n.id){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"text-".concat(n.class," mr-5")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-".concat(n.icon)})," ",n.Name)}}}catch(e){a.e(e)}finally{a.f()}}}},{key:"render",value:function e(){var _=this;var t=this.props.theme;var a=this.state,r=a.messages,n=a.notifications;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["a"],{position:"static",color:"default"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["a"],{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["a"],{label:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["a"],{id:"widgets.recentNotifications"})}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["a"],{label:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["a"],{id:"widgets.messages"})}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__["Scrollbars"],{className:"rct-scroll",autoHeight:true,autoHeightMin:100,autoHeightMax:375,autoHide:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default.a,{axis:t.direction==="rtl"?"x-reverse":"x",index:this.state.value,onChangeIndex:this.handleChangeIndex},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"card mb-0 notification-box"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer,{dir:t.direction},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"list-inline mb-0"},n&&n.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"d-flex justify-content-between",key:t},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"align-items-start"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"mb-5 message-head"},_.getNotificationName(e.notificationId),e.date),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:"mb-5"},e.userName),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"mb-0 text-muted"},e.notification)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"align-items-end notify-user"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:e.userAvatar,alt:"notify user",className:"rounded-circle",width:"50",height:"50"})))})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"card mb-0 notification-box"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer,{dir:t.direction},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"list-inline mb-0"},r&&r.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"d-flex justify-content-between",key:t},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"align-items-start"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"mb-5 message-head"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"text-primary mr-5"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-comment-alt-text"})," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["a"],{id:"widgets.messages"}))," ",e.date),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:"mb-5"},e.from.userName),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"mb-0 text-muted"},e.message)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"align-items-end notify-user"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:e.from.userAvatar,alt:"notify user",className:"rounded-circle",width:"50",height:"50"})))})))))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return Notifications}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);var _default=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["a"])(null,{withTheme:true})(Notifications);__webpack_exports__["default"]=_default;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(TabContainer,"TabContainer","D:\\reactify-thunk\\src\\components\\Widgets\\Notifications.js");e.register(Notifications,"Notifications","D:\\reactify-thunk\\src\\components\\Widgets\\Notifications.js");e.register(_default,"default","D:\\reactify-thunk\\src\\components\\Widgets\\Notifications.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(5)(module))}}]);
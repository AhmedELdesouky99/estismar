(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[218],{1570:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return UserComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66);var react_helmet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(31);var Api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(159);var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10);var Components_RctCard__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(23);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var r=_.call(e,t||"default");if(_typeof(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(a){var n=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(a),_;if(n){var r=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,r)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var UserComponent=function(_Component){_inherits(UserComponent,_Component);var _super=_createSuper(UserComponent);function UserComponent(){var e;_classCallCheck(this,UserComponent);for(var t=arguments.length,_=new Array(t),r=0;r<t;r++){_[r]=arguments[r]}e=_super.call.apply(_super,[this].concat(_));e.state={users:null};return e}_createClass(UserComponent,[{key:"componentDidMount",value:function e(){this.getUsers()}},{key:"getUsers",value:function e(){var t=this;Api__WEBPACK_IMPORTED_MODULE_3__["a"].get("usersList.js").then(function(e){t.setState({users:e.data})}).catch(function(e){})}},{key:"render",value:function e(){var t=this.state.users;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"user-list-wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"Reactify | Users List"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:"Reactify Widgets"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_4__["a"],{title:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_5__["a"],{id:"sidebar.userList"}),match:this.props.match}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},t&&t.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_6__["a"],{customClasses:"p-10",colClasses:"col-sm-6 col-lg-4 col-xl-3",key:t},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:e.coverPhoto,className:"img-fluid",alt:"user listing",width:"100%",height:"140"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"card-block-content"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex justify-content-between mb-20"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex align-items-start"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"media"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"media-left mx-10"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:e.userAvatar,alt:"user profile",className:"rounded-circle img-fluid",width:"90",height:"90"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"media-body py-10"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"mb-0"},e.userName),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"text-muted fs-12"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"ti-world mr-5"}),e.location)))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex align-items-end card-action pt-15"},e.socialLinks.length>0&&e.socialLinks!==null&&e.socialLinks.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{key:t,href:e.url,className:"mr-0"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"ti-".concat(e.icon)}))}))),e.isAvailable?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex justify-content-between"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",color:"primary",className:"text-white btn-xs"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-comment-outline mr-10"}),"Send Message"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{className:"text-success btn-xs"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-check-circle mr-10"})," Available for Hire")):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex justify-content-center"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{className:"text-secondary btn-xs"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-circle mr-10"})," Not Available for Hiring"))))})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return UserComponent}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(UserComponent,"UserComponent","D:\\reactify-thunk\\src\\routes\\users\\user-list\\index.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(5)(module))}}]);
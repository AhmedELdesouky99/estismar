(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{1699:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return TopAuthors});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var react_slick__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1818);var react_slick__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var a=t[_];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var a=_.call(e,t||"default");if(_typeof(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(r){var n=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(r),_;if(n){var a=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,a)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var topAuthors=[{id:1,name:"Natasha Knight",avatarSrc:__webpack_require__(1862),phone:"+01 2345 67890",email:"natasha@example.com",address:"E-51 Phase-1 Mohali",articles:200,followers:1400,likes:580},{id:2,name:"Lisa Roy",avatarSrc:__webpack_require__(1819),phone:"+01 2345 67890",email:"lisa@example.com",address:"London United Kingdom",articles:50,followers:400,likes:200},{id:3,name:"Andre Hicks",avatarSrc:__webpack_require__(1820),phone:"+01 2345 67890",email:"hicksandre@example.com",address:"778 Nicole Station Suite 903",articles:75,followers:1700,likes:2e3},{id:4,name:"Jhon Smith",avatarSrc:__webpack_require__(1861),phone:"+01 2345 67890",email:"jhon@example.com",address:"E-51 Phase-1 Mohali",articles:175,followers:1200,likes:1800}];var TopAuthors=function(_Component){_inherits(TopAuthors,_Component);var _super=_createSuper(TopAuthors);function TopAuthors(){_classCallCheck(this,TopAuthors);return _super.apply(this,arguments)}_createClass(TopAuthors,[{key:"render",value:function e(){var t={dots:false,infinite:true,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:true};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"top-author-wrap rct-block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"bg-primary text-white pt-4 rounded-top"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{className:"mb-0 text-center"},"Top Authors")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a,t,topAuthors&&topAuthors.map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:e.id,className:"author-detail-wrap d-flex justify-content-between flex-column"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"author-avatar bg-primary overlay-wrap mb-5"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"avatar-img"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:e.avatarSrc,width:"80",height:"80",className:"img-fluid mx-auto rounded-circle",alt:"avtar"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"p-3 authors-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,e.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"list-unstyled author-contact-info mb-2"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"mr-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-phone-msg"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"tel:123456",className:"font-xs text-muted"},e.phone)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"mr-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-email"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"mailto:joan_parisian@gmail.com",className:"font-xs text-muted"},e.email)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"mr-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-pin"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"font-xs text-muted"},e.address))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"d-flex social-info list-unstyled"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"facebook",href:"#",onClick:function e(t){return t.preventDefault()}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-facebook-box"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"twitter",href:"#",onClick:function e(t){return t.preventDefault()}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-twitter-box"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"linkedin",href:"#",onClick:function e(t){return t.preventDefault()}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-linkedin-box"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"instagram",href:"#",onClick:function e(t){return t.preventDefault()}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-instagram"}))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"d-flex list-unstyled footer-content text-center w-100 border-top mb-0"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:"mb-0"},e.articles),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"font-xs text-muted"},"Articles")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:"mb-0"},e.followers),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"font-xs text-muted"},"Followers")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",{className:"mb-0"},e.likes),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"font-xs text-muted"},"Likes"))))})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return TopAuthors}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(topAuthors,"topAuthors","D:\\reactify-thunk\\src\\components\\Widgets\\TopAuthors.js");e.register(TopAuthors,"TopAuthors","D:\\reactify-thunk\\src\\components\\Widgets\\TopAuthors.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(5)(module))},1819:function(e,t,_){e.exports=_.p+"static/media/user-2.d846d93f.jpg"},1820:function(e,t,_){e.exports=_.p+"static/media/user-3.cc6fd242.jpg"},1861:function(e,t,_){e.exports=_.p+"static/media/user-4.80c5cabd.jpg"},1862:function(e,t,_){e.exports=_.p+"static/media/user-1.1469f20b.jpg"}}]);
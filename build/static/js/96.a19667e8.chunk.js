(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[96],{2184:function(r,e,a){!function(e,t){true?r.exports=t(a(0)):undefined}(this,function(r){return function(r){function a(e){if(n[e])return n[e].exports;var t=n[e]={exports:{},id:e,loaded:!1};return r[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var n={};return a.m=r,a.c=n,a.p="",a(0)}([function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},f=function(){function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}}(),o=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return a(o).default}});var p=r(11),c=a(p),v=r(9),d=a(v),h=r(5),m=a(h),g=r(2),y=function(e){function o(){var e;i(this,o);for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var n=s(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(r)));return n.setRef=n.setRef.bind(n),n.onBlur=n.onBlur.bind(n),n.onChange=n.onChange.bind(n),n}return u(o,e),f(o,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,m.default)(l({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(t){var e=this.props,r=e.value,a=e.pipe,n=e.mask,o=e.guide,i=e.placeholderChar,s=e.showMask,u={guide:o,placeholderChar:i,showMask:s},l="function"==typeof a&&"function"==typeof t.pipe?a.toString()!==t.pipe.toString():(0,g.isNil)(a)&&!(0,g.isNil)(t.pipe)||!(0,g.isNil)(a)&&(0,g.isNil)(t.pipe),f=n.toString()!==t.mask.toString(),p=Object.keys(u).some(function(e){return u[e]!==t[e]})||f||l,c=r!==this.inputElement.value;(c||p)&&this.initTextMask()}},{key:"render",value:function e(){var t=this.props,e=t.render,r=n(t,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,e(this.setRef,l({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),o}(c.default.PureComponent);t.default=y,y.propTypes={mask:d.default.oneOfType([d.default.array,d.default.func,d.default.bool,d.default.shape({mask:d.default.oneOfType([d.default.array,d.default.func]),pipe:d.default.func})]).isRequired,guide:d.default.bool,value:d.default.oneOfType([d.default.string,d.default.number]),pipe:d.default.func,placeholderChar:d.default.string,keepCharPositions:d.default.bool,showMask:d.default.bool},y.defaultProps={render:function(e,t){return c.default.createElement("input",l({ref:e},t))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!n(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function n(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function s(e){return"undefined"==typeof e||null===e}function u(e){for(var t=[],r=void 0;r=e.indexOf(p),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=a,t.isArray=n,t.isString=o,t.isNumber=i,t.isNil=s,t.processCaretTraps=u;var l=r(1),f=[],p="[]"},function(e,t,r){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,K.isArray)(t)){if(("undefined"==typeof t?"undefined":U(t))!==W.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,K.processCaretTraps)(t).maskWithoutCaretTraps}var a=r.guide,n=void 0===a||a,o=r.previousConformedValue,i=void 0===o?J:o,s=r.placeholderChar,u=void 0===s?W.placeholderChar:s,l=r.placeholder,f=void 0===l?(0,K.convertMaskToPlaceholder)(t,u):l,R=r.currentCaretPosition,p=r.keepCharPositions,c=n===!1&&void 0!==i,v=e.length,d=i.length,h=f.length,D=t.length,m=v-d,g=m>0,y=R+(g?-m:0),b=y+Math.abs(m);if(p===!0&&!g){for(var S=J,x=y;x<b;x++)f[x]===u&&(S+=u);e=e.slice(0,y)+S+e.slice(y,v)}for(var w=e.split(J).map(function(e,t){return{char:e,isNew:t>=y&&t<b}}),P=v-1;P>=0;P--){var C=w[P].char;if(C!==u){var _=P>=y&&d===D;C===f[_?P-m:P]&&w.splice(P,1)}}var O=J,k=!1;e:for(var T=0;T<h;T++){var N=f[T];if(N===u){if(w.length>0)for(;w.length>0;){var I=w.shift(),E=I.char,B=I.isNew;if(E===u&&c!==!0){O+=u;continue e}if(t[T].test(E)){if(p===!0&&B!==!1&&i!==J&&n!==!1&&g){for(var L=w.length,M=null,j=0;j<L;j++){var V=w[j];if(V.char!==u&&V.isNew===!1)break;if(V.char===u){M=j;break}}null!==M?(O+=E,w.splice(M,1)):T--}else O+=E;continue e}k=!0}c===!1&&(O+=f.substr(T,h));break}O+=N}if(c&&g===!1){for(var F=null,A=0;A<O.length;A++)f[A]===u&&(F=A);O=null!==F?O.substr(0,F+1):J}return{conformedValue:O,meta:{someCharsRejected:k}}}Object.defineProperty(t,"__esModule",{value:!0});var U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=a;var K=r(2),W=r(1),q=[],J=""},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?Z:t,a=e.previousPlaceholder,n=void 0===a?Z:a,o=e.currentCaretPosition,i=void 0===o?0:o,s=e.conformedValue,u=e.rawValue,l=e.placeholderChar,f=e.placeholder,p=e.indexesOfPipedChars,c=void 0===p?G:p,v=e.caretTrapIndexes,d=void 0===v?G:v;if(0===i||!u.length)return 0;var h=u.length,m=r.length,g=f.length,y=s.length,b=h-m,S=b>0,x=0===m,w=b>1&&!S&&!x;if(w)return i;var P=S&&(r===s||s===f),C=0,O=void 0,k=void 0;if(P)C=i-b;else{var T=s.toLowerCase(),D=u.toLowerCase(),_=D.substr(0,i).split(Z),N=_.filter(function(e){return T.indexOf(e)!==-1});k=N[N.length-1];var E=n.substr(0,N.length).split(Z).filter(function(e){return e!==l}).length,I=f.substr(0,N.length).split(Z).filter(function(e){return e!==l}).length,B=I!==E,L=void 0!==n[N.length-1]&&void 0!==f[N.length-2]&&n[N.length-1]!==l&&n[N.length-1]!==f[N.length-1]&&n[N.length-1]===f[N.length-2];!S&&(B||L)&&E>0&&f.indexOf(k)>-1&&void 0!==u[i]&&(O=!0,k=u[i]);for(var U=c.map(function(e){return T[e]}),K=U.filter(function(e){return e===k}).length,W=N.filter(function(e){return e===k}).length,q=f.substr(0,f.indexOf(l)).split(Z).filter(function(e,t){return e===k&&u[t]!==e}).length,J=q+W+K+(O?1:0),M=0,j=0;j<y;j++){var $=T[j];if(C=j+1,$===k&&M++,M>=J)break}}if(S){for(var V=C,F=C;F<=g;F++)if(f[F]===l&&(V=F),f[F]===l||d.indexOf(F)!==-1||F===g)return V}else if(O){for(var A=C-1;A>=0;A--)if(s[A]===k||d.indexOf(A)!==-1||0===A)return A}else for(var R=C;R>=0;R--)if(f[R-1]===l||d.indexOf(R)!==-1||0===R)return R}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var G=[],Z=""},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(V){var F={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:F,update:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V,r=t.inputElement,a=t.mask,n=t.guide,o=t.pipe,i=t.placeholderChar,s=void 0===i?U.placeholderChar:i,u=t.keepCharPositions,l=void 0!==u&&u,f=t.showMask,p=void 0!==f&&f;if("undefined"==typeof e&&(e=r.value),e!==F.previousConformedValue){("undefined"==typeof a?"undefined":_(a))===W&&void 0!==a.pipe&&void 0!==a.mask&&(o=a.pipe,a=a.mask);var c=void 0,v=void 0;if(a instanceof Array&&(c=(0,L.convertMaskToPlaceholder)(a,s)),a!==!1){var d=R(e),h=r.selectionEnd,m=F.previousConformedValue,g=F.previousPlaceholder,y=void 0;if(("undefined"==typeof a?"undefined":_(a))===U.strFunction){if(v=a(d,{currentCaretPosition:h,previousConformedValue:m,placeholderChar:s}),v===!1)return;var b=(0,L.processCaretTraps)(v),S=b.maskWithoutCaretTraps,x=b.indexes;v=S,y=x,c=(0,L.convertMaskToPlaceholder)(v,s)}else v=a;var w={previousConformedValue:m,guide:n,placeholderChar:s,pipe:o,placeholder:c,currentCaretPosition:h,keepCharPositions:l},P=(0,B.default)(d,v,w),C=P.conformedValue,O=("undefined"==typeof o?"undefined":_(o))===U.strFunction,k={};O&&(k=o(C,D({rawValue:d},w)),k===!1?k={value:m,rejected:!0}:(0,L.isString)(k)&&(k={value:k}));var T=O?k.value:C,N=(0,I.default)({previousConformedValue:m,previousPlaceholder:g,conformedValue:T,placeholder:c,rawValue:d,currentCaretPosition:h,placeholderChar:s,indexesOfPipedChars:k.indexesOfPipedChars,caretTrapIndexes:y}),E=T===c&&0===N,M=p?c:K,j=E?M:T;F.previousConformedValue=j,F.previousPlaceholder=c,r.value!==j&&(r.value=j,A(r,N))}}}}}function A(e,t){document.activeElement===e&&(u?l(function(){return e.setSelectionRange(t,t,s)},0):e.setSelectionRange(t,t,s))}function R(e){if((0,L.isString)(e))return e;if((0,L.isNumber)(e))return String(e);if(void 0===e||null===e)return K;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var o=r(4),I=a(o),i=r(3),B=a(i),L=r(2),U=r(1),K="",s="none",W="object",u="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),l="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,r){"use strict";function a(e,t,r,a,n,o,i,s){if(p(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,a,n,o,i,s],f=0;u=new Error(t.replace(/%s/g,function(){return l[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var p=function(e){};e.exports=a},function(e,t,r){"use strict";var a=r(6),i=r(7),s=r(10);e.exports=function(){function e(e,t,r,a,n,o){o!==s&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=a,r.PropTypes=r,r}},function(e,t,r){"use strict";"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports=r(8)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,t){e.exports=r}])})},3226:function(e,t,r){"use strict";var g=r(2);var y=r(9);var b=r(0);var a=r.n(b);var S=r(13);var x=r(88);var n=r(20);var w=r(250);var o={root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}};var i=b["forwardRef"](function e(t,r){var a=t.children,n=t.classes,o=t.className,i=t.component,s=i===void 0?"div":i,u=t.disablePointerEvents,l=u===void 0?false:u,f=t.disableTypography,p=f===void 0?false:f,c=t.position,v=t.variant,d=Object(y["a"])(t,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]);var h=Object(w["b"])()||{};var m=v;if(v&&h.variant){if(false){}}if(h&&!m){m=h.variant}return b["createElement"](w["a"].Provider,{value:null},b["createElement"](s,Object(g["a"])({className:Object(S["default"])(n.root,o,c==="end"?n.positionEnd:n.positionStart,l&&n.disablePointerEvents,h.hiddenLabel&&n.hiddenLabel,m==="filled"&&n.filled,h.margin==="dense"&&n.marginDense),ref:r},d),typeof a==="string"&&!p?b["createElement"](x["a"],{color:"textSecondary"},a):a))});false?undefined:void 0;t["a"]=Object(n["a"])(o,{name:"MuiInputAdornment"})(i)},3228:function(e,t,r){"use strict";var a=r(0);var L=r.n(a);function n(){}function o(){return true}function h(e){return!!(e||"").match(/\d/)}function v(e){return e===null||e===undefined}function l(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function i(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function g(e,t,r){var a=i(r);var n=e.search(/[1-9]/);n=n===-1?e.length:n;return e.substring(0,n)+e.substring(n,e.length).replace(a,"$1"+t)}function R(e,t){if(t===void 0)t=true;var r=e[0]==="-";var a=r&&t;e=e.replace("-","");var n=e.split(".");var o=n[0];var i=n[1]||"";return{beforeDecimal:o,afterDecimal:i,hasNagation:r,addNegation:a}}function f(e){if(!e){return e}var t=e[0]==="-";if(t){e=e.substring(1,e.length)}var r=e.split(".");var a=r[0].replace(/^0+/,"")||"0";var n=r[1]||"";return""+(t?"-":"")+a+(n?"."+n:"")}function y(e,t,r){var a="";var n=r?"0":"";for(var o=0;o<=t-1;o++){a+=e[o]||n}return a}function s(e,t){return Array(t+1).join(e)}function c(e){e+="";var t=e[0]==="-"?"-":"";if(t){e=e.substring(1)}var r=e.split(/[eE]/g);var a=r[0];var n=r[1];n=Number(n);if(!n){return t+a}a=a.replace(".","");var o=1+n;var i=a.length;if(o<0){a="0."+s("0",Math.abs(o))+a}else if(o>=i){a=a+s("0",o-i)}else{a=(a.substring(0,o)||"0")+"."+a.substring(o)}return t+a}function d(e,t,r){if(["","-"].indexOf(e)!==-1){return e}var a=e.indexOf(".")!==-1&&t;var n=R(e);var o=n.beforeDecimal;var i=n.afterDecimal;var s=n.hasNagation;var u=parseFloat("0."+(i||"0"));var l=i.length<=t?"0."+i:u.toFixed(t);var f=l.split(".");var p=o.split("").reverse().reduce(function(e,t,r){if(e.length>r){return(Number(e[0])+Number(t)).toString()+e.substring(1,e.length)}return t+e},f[0]);var c=y(f[1]||"",Math.min(t,i.length),r);var v=s?"-":"";var d=a?".":"";return""+v+p+d+c}function u(e,t){e.value=e.value;if(e!==null){if(e.createTextRange){var r=e.createTextRange();r.move("character",t);r.select();return true}if(e.selectionStart||e.selectionStart===0){e.focus();e.setSelectionRange(t,t);return true}e.focus();return false}}function D(e,t){var r=0,a=0;var n=e.length;var o=t.length;while(e[r]===t[r]&&r<n){r++}while(e[n-1-a]===t[o-1-a]&&o-a>r&&n-a>r){a++}return{start:r,end:n-a}}function m(e,t,r){return Math.min(Math.max(e,t),r)}function b(e){return Math.max(e.selectionStart,e.selectionEnd)}function U(e){return e||typeof navigator!=="undefined"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function K(e,t){var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)===-1)r[a]=e[a];return r}var p={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:false,prefix:"",suffix:"",allowNegative:true,allowEmptyFormatting:false,allowLeadingZeros:false,isNumericString:false,type:"text",onValueChange:n,onChange:n,onKeyDown:n,onMouseUp:n,onFocus:n,onBlur:n,isAllowed:o};var S=function(a){function e(e){a.call(this,e);var t=e.defaultValue;this.validateProps();var r=this.formatValueProp(t);this.state={value:r,numAsString:this.removeFormatting(r),mounted:false};this.selectionBeforeInput={selectionStart:0,selectionEnd:0};this.onChange=this.onChange.bind(this);this.onKeyDown=this.onKeyDown.bind(this);this.onMouseUp=this.onMouseUp.bind(this);this.onFocus=this.onFocus.bind(this);this.onBlur=this.onBlur.bind(this)}if(a)e.__proto__=a;e.prototype=Object.create(a&&a.prototype);e.prototype.constructor=e;e.prototype.componentDidMount=function e(){this.setState({mounted:true})};e.prototype.componentDidUpdate=function e(t){this.updateValueIfRequired(t)};e.prototype.componentWillUnmount=function e(){clearTimeout(this.focusTimeout);clearTimeout(this.caretPositionTimeout)};e.prototype.updateValueIfRequired=function e(t){var r=this;var a=r.props;var n=r.state;var o=r.focusedElm;var i=n.value;var s=n.numAsString;if(s===void 0)s="";if(t!==a){this.validateProps();var u=this.formatNumString(s);var l=v(a.value)?u:this.formatValueProp();var f=this.removeFormatting(l);var p=parseFloat(f);var c=parseFloat(s);if((!isNaN(p)||!isNaN(c))&&p!==c||u!==i||o===null&&l!==i){this.updateValue({formattedValue:l,numAsString:f,input:o,source:"prop",event:null})}}};e.prototype.getFloatString=function e(t){if(t===void 0)t="";var r=this.props;var a=r.decimalScale;var n=this.getSeparators();var o=n.decimalSeparator;var i=this.getNumberRegex(true);var s=t[0]==="-";if(s){t=t.replace("-","")}if(o&&a===0){t=t.split(o)[0]}t=(t.match(i)||[]).join("").replace(o,".");var u=t.indexOf(".");if(u!==-1){t=t.substring(0,u)+"."+t.substring(u+1,t.length).replace(new RegExp(l(o),"g"),"")}if(s){t="-"+t}return t};e.prototype.getNumberRegex=function e(t,r){var a=this.props;var n=a.format;var o=a.decimalScale;var i=a.customNumerals;var s=this.getSeparators();var u=s.decimalSeparator;return new RegExp("[0-9"+(i?i.join(""):"")+"]"+(u&&o!==0&&!r&&!n?"|"+l(u):""),t?"g":undefined)};e.prototype.getSeparators=function e(){var t=this.props;var r=t.decimalSeparator;var a=this.props;var n=a.thousandSeparator;var o=a.allowedDecimalSeparators;if(n===true){n=","}if(!o){o=[r,"."]}return{decimalSeparator:r,thousandSeparator:n,allowedDecimalSeparators:o}};e.prototype.getMaskAtIndex=function e(t){var r=this.props;var a=r.mask;if(a===void 0)a=" ";if(typeof a==="string"){return a}return a[t]||" "};e.prototype.getValueObject=function e(t,r){var a=parseFloat(r);return{formattedValue:t,value:r,floatValue:isNaN(a)?undefined:a}};e.prototype.validateProps=function e(){var t=this.props;var r=t.mask;var a=this.getSeparators();var n=a.decimalSeparator;var o=a.thousandSeparator;if(n===o){throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: "+o+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: '+n+" (default value for decimalSeparator is .)\n       ")}if(r){var i=r==="string"?r:r.toString();if(i.match(/\d/g)){throw new Error("\n          Mask "+r+" should not contain numeric character;\n        ")}}};e.prototype.setPatchedCaretPosition=function e(t,r,a){u(t,r);this.caretPositionTimeout=setTimeout(function(){if(t.value===a){u(t,r)}},0)};e.prototype.correctCaretPosition=function e(t,r,a){var n=this.props;var o=n.prefix;var i=n.suffix;var s=n.format;if(t===""){return 0}r=m(r,0,t.length);if(!s){var u=t[0]==="-";return m(r,o.length+(u?1:0),t.length-i.length)}if(typeof s==="function"){return r}if(s[r]==="#"&&h(t[r])){return r}if(s[r-1]==="#"&&h(t[r-1])){return r}var l=s.indexOf("#");var f=s.lastIndexOf("#");r=m(r,l,f+1);var p=s.substring(r,s.length).indexOf("#");var c=r;var v=r+(p===-1?0:p);while(c>l&&(s[c]!=="#"||!h(t[c]))){c-=1}var d=!h(t[v])||a==="left"&&r!==l||r-c<v-r;if(d){return h(t[c])?c+1:c}return v};e.prototype.getCaretPosition=function e(t,r,a){var n=this.props;var o=n.format;var i=this.state.value;var s=this.getNumberRegex(true);var u=(t.match(s)||[]).join("");var l=(r.match(s)||[]).join("");var f,p;f=0;for(p=0;p<a;p++){var c=t[p]||"";var v=r[f]||"";if(!c.match(s)&&c!==v){continue}if(c==="0"&&v.match(s)&&v!=="0"&&u.length!==l.length){continue}while(c!==r[f]&&f<r.length){f++}f++}if(typeof o==="string"&&!i){f=r.length}f=this.correctCaretPosition(r,f);return f};e.prototype.removePrefixAndSuffix=function e(t){var r=this.props;var a=r.format;var n=r.prefix;var o=r.suffix;if(!a&&t){var i=t[0]==="-";if(i){t=t.substring(1,t.length)}t=n&&t.indexOf(n)===0?t.substring(n.length,t.length):t;var s=t.lastIndexOf(o);t=o&&s!==-1&&s===t.length-o.length?t.substring(0,s):t;if(i){t="-"+t}}return t};e.prototype.removePatternFormatting=function e(t){var r=this.props;var a=r.format;var n=a.split("#").filter(function(e){return e!==""});var o=0;var i="";for(var s=0,u=n.length;s<=u;s++){var l=n[s]||"";var f=s===u?t.length:t.indexOf(l,o);if(f===-1){i=t;break}else{i+=t.substring(o,f);o=f+l.length}}return(i.match(this.getNumberRegex(true))||[]).join("")};e.prototype.removeFormatting=function e(t){var r=this.props;var a=r.format;var e=r.removeFormatting;if(!t){return t}if(!a){t=this.removePrefixAndSuffix(t);t=this.getFloatString(t)}else if(typeof a==="string"){t=this.removePatternFormatting(t)}else if(typeof e==="function"){t=e(t)}else{t=(t.match(this.getNumberRegex(true))||[]).join("")}return t};e.prototype.formatWithPattern=function e(t){var r=this.props;var a=r.format;var n=0;var o=a.split("");for(var i=0,s=a.length;i<s;i++){if(a[i]==="#"){o[i]=t[n]||this.getMaskAtIndex(n);n+=1}}return o.join("")};e.prototype.formatAsNumber=function e(t){var r=this.props;var a=r.decimalScale;var n=r.fixedDecimalScale;var o=r.prefix;var i=r.suffix;var s=r.allowNegative;var u=r.thousandsGroupStyle;var l=this.getSeparators();var f=l.thousandSeparator;var p=l.decimalSeparator;var c=t.indexOf(".")!==-1||a&&n;var v=R(t,s);var d=v.beforeDecimal;var h=v.afterDecimal;var m=v.addNegation;if(a!==undefined){h=y(h,a,n)}if(f){d=g(d,f,u)}if(o){d=o+d}if(i){h=h+i}if(m){d="-"+d}t=d+(c&&p||"")+h;return t};e.prototype.formatNumString=function e(t){if(t===void 0)t="";var r=this.props;var a=r.format;var n=r.allowEmptyFormatting;var o=r.customNumerals;var i=t;if(o&&o.length===10){var s=new RegExp("["+o.join("")+"]","g");i=t.replace(s,function(e){return o.indexOf(e).toString()})}if(t===""&&!n){i=""}else if(t==="-"&&!a){i="-"}else if(typeof a==="string"){i=this.formatWithPattern(i)}else if(typeof a==="function"){i=a(i)}else{i=this.formatAsNumber(i)}return i};e.prototype.formatValueProp=function e(t){var r=this.props;var a=r.format;var n=r.decimalScale;var o=r.fixedDecimalScale;var i=r.allowEmptyFormatting;var s=this.props;var u=s.value;var l=s.isNumericString;u=v(u)?t:u;var f=!u&&u!==0;if(f&&i){u=""}if(f&&!i){return""}if(typeof u==="number"){u=c(u);l=true}if(u==="Infinity"&&l){u=""}if(l&&!a&&typeof n==="number"){u=d(u,n,o)}var p=l?this.formatNumString(u):this.formatInput(u);return p};e.prototype.formatNegation=function e(t){if(t===void 0)t="";var r=this.props;var a=r.allowNegative;var n=new RegExp("(-)");var o=new RegExp("(-)(.)*(-)");var i=n.test(t);var s=o.test(t);t=t.replace(/-/g,"");if(i&&!s&&a){t="-"+t}return t};e.prototype.formatInput=function e(t){if(t===void 0)t="";var r=this.props;var a=r.format;if(!a){t=this.removePrefixAndSuffix(t);t=this.formatNegation(t)}t=this.removeFormatting(t);return this.formatNumString(t)};e.prototype.isCharacterAFormat=function e(t,r){var a=this.props;var n=a.format;var o=a.prefix;var i=a.suffix;var s=a.decimalScale;var u=a.fixedDecimalScale;var l=this.getSeparators();var f=l.decimalSeparator;if(typeof n==="string"&&n[t]!=="#"){return true}if(!n&&(t<o.length||t>=r.length-i.length||s&&u&&r[t]===f)){return true}return false};e.prototype.correctInputValue=function e(t,r,a){var n=this;var o=this.props;var i=o.format;var s=o.allowNegative;var u=o.prefix;var l=o.suffix;var f=o.decimalScale;var p=this.getSeparators();var c=p.allowedDecimalSeparators;var v=p.decimalSeparator;var d=this.state.numAsString||"";var h=this.selectionBeforeInput;var m=h.selectionStart;var g=h.selectionEnd;var y=D(r,a);var b=y.start;var S=y.end;if(!i&&b===S&&c.indexOf(a[m])!==-1){var x=f===0?"":v;return a.substr(0,m)+x+a.substr(m+1,a.length)}var w=!!i?0:u.length;var P=r.length-(!!i?0:l.length);if(a.length>r.length||!a.length||b===S||m===0&&g===r.length||b===0&&S===r.length||m===w&&g===P){return a}var C=r.substr(b,S-b);var O=!![].concat(C).find(function(e,t){return n.isCharacterAFormat(t+b,r)});if(O){var k=r.substr(b);var T={};var N=[];[].concat(k).forEach(function(e,t){if(n.isCharacterAFormat(t+b,r)){T[t]=e}else if(t>C.length-1){N.push(e)}});Object.keys(T).forEach(function(e){if(N.length>e){N.splice(e,0,T[e])}else{N.push(T[e])}});a=r.substr(0,b)+N.join("")}if(!i){var E=this.removeFormatting(a);var M=R(E,s);var j=M.beforeDecimal;var V=M.afterDecimal;var F=M.addNegation;var A=t<a.indexOf(v)+1;if(E.length<d.length&&A&&j===""&&!parseFloat(V)){return F?"-":""}}return a};e.prototype.updateValue=function e(t){var r=t.formattedValue;var a=t.input;var n=t.setCaretPosition;if(n===void 0)n=true;var o=t.source;var i=t.event;var s=t.numAsString;var u=t.caretPos;var l=this.props;var f=l.onValueChange;var p=this.state;var c=p.value;if(a){if(u===undefined&&n){var v=t.inputValue||a.value;var d=b(a);a.value=r;u=this.getCaretPosition(v,r,d)}a.value=r;if(n){this.setPatchedCaretPosition(a,u,r)}}if(s===undefined){s=this.removeFormatting(r)}if(r!==c){this.setState({value:r,numAsString:s});f(this.getValueObject(r,s),{event:i,source:o})}};e.prototype.onChange=function e(t){var r=t.target;var a=r.value;var n=this;var o=n.state;var i=n.props;var s=i.isAllowed;var u=o.value||"";var l=b(r);a=this.correctInputValue(l,u,a);var f=this.formatInput(a)||"";var p=this.removeFormatting(f);var c=this.getValueObject(f,p);var v=s(c);if(!v){f=u}this.updateValue({formattedValue:f,numAsString:p,inputValue:a,input:r,event:t,source:"event"});if(v){i.onChange(t)}};e.prototype.onBlur=function e(t){var r=this;var a=r.props;var n=r.state;var o=a.format;var e=a.onBlur;var i=a.allowLeadingZeros;var s=n.numAsString;var u=n.value;this.focusedElm=null;clearTimeout(this.focusTimeout);clearTimeout(this.caretPositionTimeout);if(!o){if(isNaN(parseFloat(s))){s=""}if(!i){s=f(s)}var l=this.formatNumString(s);if(l!==u){this.updateValue({formattedValue:l,numAsString:s,input:t.target,setCaretPosition:false,event:t,source:"event"});e(t);return}}e(t)};e.prototype.onKeyDown=function e(t){var r=t.target;var a=t.key;var n=r.selectionStart;var o=r.selectionEnd;var i=r.value;if(i===void 0)i="";var s;var u=this.props;var l=u.decimalScale;var f=u.fixedDecimalScale;var p=u.prefix;var c=u.suffix;var v=u.format;var e=u.onKeyDown;var d=l!==undefined&&f;var h=this.getNumberRegex(false,d);var m=new RegExp("-");var g=typeof v==="string";this.selectionBeforeInput={selectionStart:n,selectionEnd:o};if(a==="ArrowLeft"||a==="Backspace"){s=n-1}else if(a==="ArrowRight"){s=n+1}else if(a==="Delete"){s=n}if(s===undefined||n!==o){e(t);return}var y=s;var b=g?v.indexOf("#"):p.length;var S=g?v.lastIndexOf("#")+1:i.length-c.length;if(a==="ArrowLeft"||a==="ArrowRight"){var x=a==="ArrowLeft"?"left":"right";y=this.correctCaretPosition(i,s,x)}else if(a==="Delete"&&!h.test(i[s])&&!m.test(i[s])){while(!h.test(i[y])&&y<S){y++}}else if(a==="Backspace"&&!h.test(i[s])){if(n<=b+1&&i[0]==="-"&&typeof v==="undefined"){var w=i.substring(1);this.updateValue({formattedValue:w,caretPos:y,input:r,event:t,source:"event"})}else if(!m.test(i[s])){while(!h.test(i[y-1])&&y>b){y--}y=this.correctCaretPosition(i,y,"left")}}if(y!==s||s<b||s>S){t.preventDefault();this.setPatchedCaretPosition(r,y,i)}if(t.isUnitTestRun){this.setPatchedCaretPosition(r,y,i)}e(t)};e.prototype.onMouseUp=function e(t){var r=t.target;var a=r.selectionStart;var n=r.selectionEnd;var o=r.value;if(o===void 0)o="";if(a===n){var i=this.correctCaretPosition(o,a);if(i!==a){this.setPatchedCaretPosition(r,i,o)}}this.props.onMouseUp(t)};e.prototype.onFocus=function e(o){var i=this;o.persist();this.focusedElm=o.target;this.focusTimeout=setTimeout(function(){var e=o.target;var t=e.selectionStart;var r=e.selectionEnd;var a=e.value;if(a===void 0)a="";var n=i.correctCaretPosition(a,t);if(n!==t&&!(t===0&&r===a.length)){i.setPatchedCaretPosition(e,n,a)}i.props.onFocus(o)},0)};e.prototype.render=function e(){var t=this.props;var r=t.type;var a=t.displayType;var n=t.customInput;var o=t.renderText;var i=t.getInputRef;var s=t.format;var u=t.thousandSeparator;var l=t.decimalSeparator;var f=t.allowedDecimalSeparators;var p=t.thousandsGroupStyle;var c=t.decimalScale;var v=t.fixedDecimalScale;var d=t.prefix;var h=t.suffix;var m=t.removeFormatting;var g=t.mask;var y=t.defaultValue;var b=t.isNumericString;var S=t.allowNegative;var x=t.allowEmptyFormatting;var w=t.allowLeadingZeros;var P=t.onValueChange;var C=t.isAllowed;var O=t.customNumerals;var k=t.onChange;var R=t.onKeyDown;var D=t.onMouseUp;var _=t.onFocus;var I=t.onBlur;var B=t.value;var T=K(t,["type","displayType","customInput","renderText","getInputRef","format","thousandSeparator","decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","decimalScale","fixedDecimalScale","prefix","suffix","removeFormatting","mask","defaultValue","isNumericString","allowNegative","allowEmptyFormatting","allowLeadingZeros","onValueChange","isAllowed","customNumerals","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value"]);var N=T;var E=this.state;var M=E.value;var j=E.mounted;var V=j&&U(s)?"numeric":undefined;var F=Object.assign({inputMode:V},N,{type:r,value:M,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if(a==="text"){return o?o(M,N)||null:L.a.createElement("span",Object.assign({},N,{ref:i}),M)}else if(n){var A=n;return L.a.createElement(A,Object.assign({},F,{ref:i}))}return L.a.createElement("input",Object.assign({},F,{ref:i}))};return e}(L.a.Component);S.defaultProps=p;t["a"]=S}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{238:function(e,t,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("5ff9312c",content,!0,{sourceMap:!1})},242:function(e,t,n){"use strict";var r=n(8),o=n(5),l=n(87),f=n(14),c=n(10),d=n(37),v=n(171),m=n(61),h=n(4),w=n(48),N=n(62).f,_=n(28).f,x=n(13).f,I=n(243).trim,A="Number",E=o.Number,y=E.prototype,C=d(w(y))==A,S=function(e){var t,n,r,o,l,f,c,code,d=m(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=I(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(f=(l=d.slice(2)).length,c=0;c<f;c++)if((code=l.charCodeAt(c))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(l(A,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var F,M=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof M&&(C?h((function(){y.valueOf.call(n)})):d(n)!=A)?v(new E(S(t)),n,M):S(t)},T=r?N(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;T.length>R;R++)c(E,F=T[R])&&!c(M,F)&&x(M,F,_(E,F));M.prototype=y,y.constructor=M,f(o,A,M)}},243:function(e,t,n){var r=n(17),o="["+n(244)+"]",l=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(l,"")),2&e&&(n=n.replace(f,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},244:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},245:function(e,t,n){"use strict";var r=n(2),o=n(64).find,l=n(116),f="find",c=!0;f in[]&&Array(1).find((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(f)},246:function(e,t,n){"use strict";n(238)},247:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,".w-input__box[data-v-6d69a3a8]{border:.4rem solid #333;border-radius:.3rem;width:10rem;height:10rem}.w-input__input[data-v-6d69a3a8]{width:100%;height:100%;padding:0 1rem;border:none;box-sizing:border-box;font-size:8rem;text-align:center;font-family:BalsamiqSans-Regular,sans-serif;outline:none}",""]),r.locals={},e.exports=r},250:function(e,t,n){"use strict";n.r(t);n(242),n(245);var r={props:{answer:{type:Number,default:null},disabled:{type:Boolean,default:!1},index:{type:Number,default:0},totalAnswer:{type:Array,default:function(){return[]}}},data:function(){return{value:null}},watch:{answer:{handler:function(){this.value=this.answer},immediate:!0},value:{handler:function(){var e=this,t=e.totalAnswer.find((function(t){return t===e.value}));/[0-9]/.test(e.value)&&!t||(e.value=null),e.$emit("changeAnswer",{answer:e.value,index:e.index})},immediate:!1}},methods:{}},o=(n(246),n(46)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-input-wrapper"},[n("div",{staticClass:"w-input-container"},[n("div",{staticClass:"w-input__box"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"w-input__input",attrs:{type:"text",maxlength:"1",disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])])}),[],!1,null,"6d69a3a8",null);t.default=component.exports}}]);
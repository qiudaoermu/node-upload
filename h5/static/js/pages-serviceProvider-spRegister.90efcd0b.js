(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-serviceProvider-spRegister"],{"293a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{referrerName:"",referrerTel:"",referrerRatio:"",referrerMemberTel:"",index:2,array:["一级","二级","三级"]}},onReady:function(){var e=document.documentElement.clientHeight,t="100% "+e+"px",a=.2*e+"px";document.getElementById("imgArea").style.backgroundSize=t,document.getElementById("formArea").style.top=a,this.referrerTel=uni.getStorageSync("phone")||""},methods:{bindPickerChange:function(e){this.index=e.detail.value},handleReturn:function(){uni.switchTab({url:"/pages/serviceProvider/index"})},submitService:function(){var e=this;if(this.referrerName)if(this.referrerTel){var t=/^[1]([3-9])[0-9]{9}$/;if(t.test(this.referrerTel))if(!this.referrerMemberTel||t.test(this.referrerMemberTel)){var a={referrerName:this.referrerName,referrerTel:this.referrerTel,referrerMemberTel:this.referrerMemberTel,referrerRatio:this.referrerRatio,referrerLevel:this.index+1};this.$http("common.serviceManReg",a).then((function(t){200===t.code?e.registerOld(a):e.$api.msg(t.msg)})).catch((function(e){}))}else this.$api.msg("请输入正确的推荐人手机号码");else this.$api.msg("请输入正确的服务商手机号码")}else this.$api.msg("请输入服务商手机号码");else this.$api.msg("请输入服务商姓名")},registerOld:function(e){var t=this;this.$http("servicer.serviceManRegOld",e).then((function(e){200===e.code?(t.$api.msg("提交成功"),setTimeout((function(){uni.switchTab({url:"/pages/serviceProvider/index"})}),1e3)):t.$api.msg(e.message)})).catch((function(e){}))}}};t.default=r},"4db4":function(e,t,a){"use strict";a.r(t);var r=a("293a"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},"70b6":function(e,t,a){var r=a("24fb"),i=a("1de5"),n=a("f895");t=r(!1);var o=i(n);t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.u-line-1[data-v-493fae8c]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.u-line-2[data-v-493fae8c]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-493fae8c]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-493fae8c]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-493fae8c]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-493fae8c]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-493fae8c]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-493fae8c]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-493fae8c]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-493fae8c]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-493fae8c]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-493fae8c]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-493fae8c]::after{border:none}.u-hover-class[data-v-493fae8c]{opacity:.7}.u-flex[data-v-493fae8c],\n.u-flex-row[data-v-493fae8c],\n.u-flex-x[data-v-493fae8c]{display:flex;flex-direction:row}.u-flex-y[data-v-493fae8c],\n.u-flex-column[data-v-493fae8c]{display:flex;flex-direction:"column"}.u-flex-x-center[data-v-493fae8c]{display:flex;flex-direction:row;justify-content:center}.u-flex-xy-center[data-v-493fae8c]{display:flex;flex-direction:row;justify-content:center;align-items:center}.u-flex-y-center[data-v-493fae8c]{display:flex;flex-direction:row;align-items:center}.u-flex-x-left[data-v-493fae8c]{display:flex;flex-direction:row}.u-flex-x-reverse[data-v-493fae8c],\n.u-flex-row-reverse[data-v-493fae8c]{flex-direction:row-reverse}.u-flex-y-reverse[data-v-493fae8c],\n.u-flex-column-reverse[data-v-493fae8c]{flex-direction:column-reverse}.u-flex.u-flex-reverse[data-v-493fae8c],\n.u-flex-row.u-flex-reverse[data-v-493fae8c],\n.u-flex-x.u-flex-reverse[data-v-493fae8c]{flex-direction:row-reverse}.u-flex-column.u-flex-reverse[data-v-493fae8c],\n.u-flex-y.u-flex-reverse[data-v-493fae8c]{flex-direction:column-reverse}.u-flex-fill[data-v-493fae8c]{flex:1 1 auto}.u-margin-top-auto[data-v-493fae8c],\n.u-m-t-auto[data-v-493fae8c]{margin-top:auto!important}.u-margin-right-auto[data-v-493fae8c],\n.u-m-r-auto[data-v-493fae8c]{margin-right:auto!important}.u-margin-bottom-auto[data-v-493fae8c],\n.u-m-b-auto[data-v-493fae8c]{margin-bottom:auto!important}.u-margin-left-auto[data-v-493fae8c],\n.u-m-l-auto[data-v-493fae8c]{margin-left:auto!important}.u-margin-center-auto[data-v-493fae8c],\n.u-m-c-auto[data-v-493fae8c]{margin-left:auto!important;margin-right:auto!important}.u-margin-middle-auto[data-v-493fae8c],\n.u-m-m-auto[data-v-493fae8c]{margin-top:auto!important;margin-bottom:auto!important}.u-flex-wrap[data-v-493fae8c]{flex-wrap:wrap}.u-flex-wrap-reverse[data-v-493fae8c]{flex-wrap:wrap-reverse}.u-flex-start[data-v-493fae8c]{justify-content:flex-start}.u-flex-center[data-v-493fae8c]{justify-content:center}.u-flex-end[data-v-493fae8c]{justify-content:flex-end}.u-flex-between[data-v-493fae8c]{justify-content:space-between}.u-flex-around[data-v-493fae8c]{justify-content:space-around}.u-flex-items-start[data-v-493fae8c]{align-items:flex-start}.u-flex-items-center[data-v-493fae8c]{align-items:center}.u-flex-items-end[data-v-493fae8c]{align-items:flex-end}.u-flex-items-baseline[data-v-493fae8c]{align-items:baseline}.u-flex-items-stretch[data-v-493fae8c]{align-items:stretch}.u-flex-self-start[data-v-493fae8c]{align-self:flex-start}.u-flex-self-center[data-v-493fae8c]{align-self:center}.u-flex-self-end[data-v-493fae8c]{align-self:flex-end}.u-flex-self-baseline[data-v-493fae8c]{align-self:baseline}.u-flex-self-stretch[data-v-493fae8c]{align-self:stretch}.u-flex-content-start[data-v-493fae8c]{align-content:flex-start}.u-flex-content-center[data-v-493fae8c]{align-content:center}.u-flex-content-end[data-v-493fae8c]{align-content:flex-end}.u-flex-content-between[data-v-493fae8c]{align-content:space-between}.u-flex-content-around[data-v-493fae8c]{align-content:space-around}.u-flex-middle[data-v-493fae8c]{justify-content:center;align-items:center;align-self:center;align-content:center}.u-flex-grow[data-v-493fae8c]{flex-grow:1}.u-flex-shrink[data-v-493fae8c]{flex-shrink:1}.provider-main-container[data-v-493fae8c]{min-height:100%;overflow:auto}.provider-main-container .provider-img-area[data-v-493fae8c]{margin:0;height:100vh;background-image:url('+o+");background-repeat:no-repeat;background-attachment:fixed;background-size:100% 100vh}.provider-main-container .provider-img-area .provider-form-area[data-v-493fae8c]{position:relative;top:20vh;color:#fff;padding:10px 40px 0}.provider-main-container .provider-img-area .provider-form-area .provider-form-area-item[data-v-493fae8c]{display:flex;align-items:center;font-size:14px;line-height:33px;border-bottom:1px solid #fff}.provider-main-container .provider-img-area .provider-form-area .provider-form-area-item .input-placeholder[data-v-493fae8c]{\n  /* WebKit browsers */font-size:14px}.provider-main-container .provider-img-area .provider-form-area .provider-form-area-item .item-text[data-v-493fae8c]{width:42%;flex-shrink:0}.provider-main-container .provider-img-area .provider-form-area .provider-form-area-item .red-color[data-v-493fae8c]{color:#f16060}.provider-main-container .btn-area[data-v-493fae8c]{position:fixed;bottom:12px;width:100%;display:flex;justify-content:center}.provider-main-container .btn-area .btn-submit[data-v-493fae8c]{width:30%;background-color:#fff;box-shadow:0 2px 4px 1px rgba(125,141,179,.7);border-radius:20px;height:25px;line-height:25px;border:0;text-align:center}.provider-main-container .btn-area .btn-return[data-v-493fae8c]{margin-right:5px}[data-v-493fae8c] uni-picker{width:58%}[data-v-493fae8c] .uni-input-input{font-size:14px}",""]),e.exports=t},"9f94":function(e,t,a){"use strict";var r=a("d080"),i=a.n(r);i.a},b42b:function(e,t,a){"use strict";a.r(t);var r=a("c9ec"),i=a("4db4");for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("9f94");var o,l=a("f0c5"),f=Object(l["a"])(i["default"],r["b"],r["c"],!1,null,"493fae8c",null,!1,r["a"],o);t["default"]=f.exports},c9ec:function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"provider-main-container"},[a("v-uni-view",{staticClass:"provider-img-area",attrs:{id:"imgArea"}},[a("v-uni-view",{staticClass:"provider-form-area",attrs:{id:"formArea"}},[a("v-uni-view",{staticClass:"provider-form-area-item"},[a("v-uni-text",{staticClass:"item-text"},[e._v("姓名"),a("v-uni-text",{staticClass:"red-color"},[e._v("*")])],1),a("v-uni-input",{staticClass:"item-input",attrs:{type:"text",focus:!0,placeholder:"请输入服务商姓名"},model:{value:e.referrerName,callback:function(t){e.referrerName=t},expression:"referrerName"}})],1),a("v-uni-view",{staticClass:"provider-form-area-item"},[a("v-uni-text",{staticClass:"item-text"},[e._v("手机号码"),a("v-uni-text",{staticClass:"red-color"},[e._v("*")])],1),a("v-uni-input",{attrs:{type:"number",placeholder:"请输入服务商手机号码"},model:{value:e.referrerTel,callback:function(t){e.referrerTel=t},expression:"referrerTel"}})],1),a("v-uni-view",{staticClass:"provider-form-area-item"},[a("v-uni-text",{staticClass:"item-text"},[e._v("推荐人")]),a("v-uni-input",{attrs:{type:"text",placeholder:"请输入推荐人姓名"},model:{value:e.referrerRatio,callback:function(t){e.referrerRatio=t},expression:"referrerRatio"}})],1),a("v-uni-view",{staticClass:"provider-form-area-item"},[a("v-uni-text",{staticClass:"item-text"},[e._v("推荐人手机号码")]),a("v-uni-input",{attrs:{type:"number",placeholder:"请输入推荐人手机号码"},model:{value:e.referrerMemberTel,callback:function(t){e.referrerMemberTel=t},expression:"referrerMemberTel"}})],1),a("v-uni-view",{staticClass:"provider-form-area-item"},[a("v-uni-text",{staticClass:"item-text"},[e._v("服务商等级")]),a("v-uni-picker",{attrs:{value:e.index,range:e.array},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.array[e.index]))])],1)],1)],1),a("v-uni-view",{staticClass:"btn-area"},[a("v-uni-view",{staticClass:"btn-submit btn-return",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleReturn.apply(void 0,arguments)}}},[e._v("返回")]),a("v-uni-view",{staticClass:"btn-submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitService.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},n=[]},d080:function(e,t,a){var r=a("70b6");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("4f06").default;i("43b2e975",r,!0,{sourceMap:!1,shadowMode:!1})},f895:function(e,t,a){e.exports=a.p+"static/img/agent-new.b26a0092.jpg"}}]);
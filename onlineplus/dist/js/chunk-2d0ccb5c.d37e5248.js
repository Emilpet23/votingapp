(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ccb5c"],{"4ea6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Winners"),r("PostWinner")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.error?r("div",[e._v(" "+e._s(e.error)+" ")]):r("form",{attrs:{id:"form"},on:{submit:e.handleSubmit}},[r("label",{attrs:{for:"name"}},[e._v("Måned")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedData.month,expression:"modifiedData.month"}],attrs:{id:"name",type:"text",name:"name"},domProps:{value:e.modifiedData.month},on:{input:function(t){t.target.composing||e.$set(e.modifiedData,"month",t.target.value)}}}),r("label",{attrs:{for:"description"}},[e._v("Vinder")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedData.Vinder,expression:"modifiedData.Vinder"}],attrs:{id:"description",type:"text",name:"description"},domProps:{value:e.modifiedData.Vinder},on:{input:function(t){t.target.composing||e.$set(e.modifiedData,"Vinder",t.target.value)}}}),r("label",{attrs:{for:"date"}},[e._v("Noter")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedData.Noter,expression:"modifiedData.Noter"}],attrs:{id:"date",type:"text",name:"date"},domProps:{value:e.modifiedData.Noter},on:{input:function(t){t.target.composing||e.$set(e.modifiedData,"Noter",t.target.value)}}}),r("input",{attrs:{type:"submit",value:"Submit"}})])])},o=[],s=(r("96cf"),r("1da1")),d=r("bc3a"),u=r.n(d),c={name:"App",data:function(){return{modifiedData:{month:"",Vinder:"",Noter:""},error:null}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("http://localhost:8947/winner-overviews");case 3:r=t.sent,e.allCategories=r.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{handleSubmit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.a.post("http://localhost:8947/winner-overviews",this.modifiedData);case 4:r=e.sent,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.error=e.t0;case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()}},l=c,m=r("2877"),v=Object(m["a"])(l,i,o,!1,null,null,null),p=v.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"winners"}},[r("h1",[e._v("Tidligere vindere")]),e.error?r("div",[e._v(" "+e._s(e.error)+" ")]):r("table",{staticClass:"table"},[e._m(0),r("tbody",e._l(e.winners,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.month))]),r("td",[e._v(e._s(t.Vinder))]),r("td",[e._v(e._s(t.Noter))])])})),0)])])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Måned")]),r("th",[e._v("Vinder")]),r("th",[e._v("Noter")])])])}],w={name:"winners",data:function(){return{winners:[],error:null}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("http://localhost:8947/winner-overviews");case 3:r=t.sent,e.winners=r.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},_=w,b=Object(m["a"])(_,f,h,!1,null,null,null),g=b.exports,x={components:{Winners:g,PostWinner:p}},D=x,N=Object(m["a"])(D,n,a,!1,null,"fb5810a0",null);t["default"]=N.exports}}]);
//# sourceMappingURL=chunk-2d0ccb5c.d37e5248.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["websocket"],{"02f3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("This is an websocket page")]),n("form",{staticClass:"input-form",attrs:{action:"#"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input",attrs:{required:"",type:"text",placeholder:"Введите текст комментария"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{staticClass:"submit-btn",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.addNewComment(e)}}},[t._v(" Добавить комментарий ")])]),n("ul",{staticClass:"comment-list"},t._l(t.comments,(function(e){return n("li",{key:e.id,staticClass:"comment-item"},[n("span",[t._v(t._s(e.text))]),n("button",{staticClass:"remove-btn",on:{click:function(n){return t.removeCurrentComment(e.id)}}},[t._v("Удалить")])])})),0)])},o=[],s=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),c=n("2f62"),i=n("2ef0");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={data:function(){return{ws:null,wsResponse:null,text:""}},computed:u({},Object(c["c"])({comment:function(t){return t.websocket.comment},comments:function(t){return t.websocket.comments}})),created:function(){this.ws=new WebSocket("ws://echo.websocket.org"),this.ws.onerror=function(t){return alert(t.message)}},methods:u({},Object(c["b"])(["removeComment","addComment"]),{removeCurrentComment:function(t){var e=this;this.ws.send(t),this.ws.onmessage=function(n){n.data===t&&(e.removeComment(t),e.text="")}},addNewComment:function(){var t=this,e=Object(i["uniqueId"])();this.ws.send(e),this.ws.onmessage=function(n){n.data===e&&(t.addComment({id:e,text:t.text}),t.text="")}}})},b=m,l=(n("5569"),n("2877")),f=Object(l["a"])(b,r,o,!1,null,"757ebb90",null);e["default"]=f.exports},5569:function(t,e,n){"use strict";var r=n("9524"),o=n.n(r);o.a},9524:function(t,e,n){}}]);
//# sourceMappingURL=websocket.d2381729.js.map
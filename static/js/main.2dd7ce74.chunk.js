(this["webpackJsonpreact-codebar-reader"]=this["webpackJsonpreact-codebar-reader"]||[]).push([[0],{20:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(7),i=a(29),u=a(31),m=a(34),s=(a(25),a(30)),d=a(32),E=a(33),f=a(17),h=a(6),w=a.n(h),v=(a(26),function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),u=Object(o.a)(l,2),m=u[0],h=u[1],v=function(e){c(e.codeResult.code),h(e.codeResult.format)};return Object(n.useEffect)((function(){return w.a.init({inputStream:{type:"LiveStream",constraints:{width:425,height:400,facing:"environment"}},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:2,decoder:{readers:["code_128_reader","'ean_reader'"],debug:{drawBoundingBox:!1,showFrequency:!1,drawScanline:!1,showPattern:!1},multiple:!1},locate:!0},(function(e){if(e)return console.log(e);w.a.start()})),w.a.onDetected(v),function(){w.a.offDetected(v),w.a.stop()}}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{id:"videodata"},r.a.createElement(s.a,null,r.a.createElement("div",{id:"interactive",className:"viewport"},r.a.createElement("video",{className:"videoCamera",autoPlay:"true",preload:"auto",src:"",muted:"true"}),r.a.createElement("canvas",{className:"drawingBuffer"}))),r.a.createElement(s.a,null,r.a.createElement(d.a,{bg:"secondary",style:{width:"18rem"}},r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,"Product")),r.a.createElement(E.a,{className:"list-group-flush"},r.a.createElement(f.a,null,"Code: ",a),r.a.createElement(f.a,null,"Format: ",m))))))});var p=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{id:"title"},r.a.createElement("h1",null,"CODE-BAR READER")),r.a.createElement(i.a,{className:"justify-content-center m-4"},r.a.createElement("h5",null,"Enabled formats: code_128_reader and ean_reader")),r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement(m.a,{id:"btn-start",onClick:function(){return c(!a)}},a?"Stop":"Scann Now"))),r.a.createElement(u.a,{id:"scannerRow"},r.a.createElement(i.a,null,a?r.a.createElement(v,null):null)))};a(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.2dd7ce74.chunk.js.map
(this["webpackJsonpsite-xml-read"]=this["webpackJsonpsite-xml-read"]||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(11),r=n.n(c),i=n(2),o=n(0),s=function(){return Object(o.jsx)("div",{children:"Login"})},l=function(){return Object(o.jsx)("div",{children:"Logout"})},d=function(){return Object(o.jsx)("div",{children:"Register"})},b=n(5),j=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"navbar-brand",children:Object(o.jsx)(b.b,{className:"link-light ",style:{outline:"none"},to:"/",children:"XML Reader"})}),Object(o.jsx)("div",{className:"d-flex justify-content-end",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link active btn btn-link",to:"login",children:"Login"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link active btn btn-link",to:"register",children:"Register"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link active btn btn-link",to:"logout",children:"Logout"})})]})})]})})},u=n(12),m=n(8),x=n.n(m),v=n(10),h=n(4),p={color:"#fff",padding:"50px",backgroundColor:"rgba(255,255,255,0.4)",borderColor:"rgba(255,255,255,0.9)",borderStyle:"dashed",borderWidth:"thick",fontSize:"3.5rem",textAlign:"center",fontWeight:"bold"},O={color:"#000",padding:"50px",backgroundColor:"rgba(255,255,255,0.2)",borderColor:"rgba(24,24,24,0.3)",borderStyle:"dashed",borderWidth:"thick",fontSize:"3.5rem",textAlign:"center",fontWeight:"bold"},g=function(e,t){var n="",a=t.Descripcion.replace(/(\n)/g," ");return n+="[".concat(e,"]"),n+="\n",n+="BienesTransp=".concat(t.BienesTransp),n+="\n",n+="Descripcion=".concat(a),n+="\n",n+="Cantidad=".concat(t.Cantidad),n+="\n",n+="ClaveUnidad=".concat(t.ClaveUnidad),n+="\n",n+="Unidad=".concat(t.Unidad),n+="\n",n+="CveMaterialPeligroso=".concat(t.CveMaterialPeligroso),n+="\n",n+="Embalaje=".concat(t.Embalaje),n+="\n",n+="DescripEmbalaje=".concat(t.DescripEmbalaje),n+="\n",n+="PesoEnKg=".concat(t.PesoEnKg),n+="\n",n+="ValorMercancia=".concat(t.ValorMercancia),n+="\n",n+="Moneda=".concat(t.Moneda),n+="\n",n+="FraccionArancelaria=".concat(t.FraccionArancelaria),n+="\n",n+="UUIDComercioExt=".concat(t.UUIDComercioExt),n+="\n",(n+="Pedimentos=".concat(t.Pedimentos))+"\n"},f=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(h.a)(r,2),s=i[0],l=i[1],d=Object(a.useState)("FileGenerated.ini"),b=Object(h.a)(d,2),j=b[0],m=b[1];Object(a.useEffect)((function(){var e;m((e="nameFile",localStorage.getItem(e)))}),[j]);var f=function(){var e=Object(v.a)(x.a.mark((function e(){var t,n,a,r,i,o,d;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",n=0;n<s.length;n++)t+=g(n,s[n]);a=(new Date).getTime(),r=new Blob([t],{type:"text/plain;charset=utf-8;"}),i=j,console.log(i.split(".")[0]),navigator.msSaveBlob?(navigator.msSaveBlob(r,"".concat(j.split(".")[0],"_").concat(a,".").concat(j.split(".")[1])),l([])):void 0!==(o=document.createElement("a")).download&&(d=URL.createObjectURL(r),o.setAttribute("href",d),o.setAttribute("download","".concat(j.split(".")[0],"_").concat(a,".").concat(j.split(".")[1])),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o),l([]),c(!1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e){Array.from(e).filter((function(e){return"text/xml"===e.type})).forEach(function(){var e=Object(v.a)(x.a.mark((function e(t){var n,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:n=e.sent,a=n,c=new DOMParser,c.parseFromString(a,"application/xml").activeElement.children[2].childNodes.forEach((function(e){if("cfdi:Concepto"===e.nodeName){var t={BienesTransp:e.attributes.ClaveProdServ.nodeValue,Descripcion:e.attributes.Descripcion.nodeValue,Cantidad:e.attributes.Cantidad.nodeValue,ClaveUnidad:e.attributes.ClaveUnidad.nodeValue,Unidad:e.attributes.Unidad.nodeValue,CveMaterialPeligroso:"",Embalaje:"",DescripEmbalaje:"",PesoEnKg:"",ValorMercancia:"",Moneda:"",FraccionArancelaria:"",UUIDComercioExt:"",Pedimentos:""};l((function(e){return[].concat(Object(u.a)(e),[t])}))}}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card text-white bg-secondary mb-3",children:[Object(o.jsx)("div",{className:"card-header",children:"\xc1rea de Archivos"}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("div",{style:n?p:O,onDragEnter:function(){c(!0),l([])},onDragLeave:function(){c(!1)},onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault(),C(e.dataTransfer.files)},onClick:function(e){e.preventDefault(),document.getElementById("imgupload").click()},children:"Coloca aqu\xed tu archivo"})})]}),Object(o.jsxs)("div",{className:"w100",children:[Object(o.jsx)("label",{htmlFor:"nameFile",children:"Nombre para archivo generado"}),Object(o.jsx)("input",{type:"text",id:"nameFile",className:"form-control mb-3",placeholder:"Default: "+j.split(".")[0],onInput:function(e){var t=e.target.value;t=t.replace(/ /g,"_"),m("".concat(t,".ini")),localStorage.setItem("nameFile",JSON.stringify("".concat(t,".ini")))}}),Object(o.jsx)("input",{type:"file",id:"imgupload",style:{display:"none"},onClick:function(){return l([])},onChange:function(e){return C(e.target.files)},multiple:!0}),Object(o.jsx)("div",{className:"d-grid gap-2",children:Object(o.jsx)("button",{className:"btn btn-info btn",onClick:function(){return f()},disabled:!s.length>0,children:"Generar Archivo"})})]}),s.length>0&&Object(o.jsxs)("div",{className:"card text-white bg-primary mb-3 mt-3",children:[Object(o.jsx)("div",{className:"card-header",children:"Vista previa"}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("div",{className:"card-text bg-light text-secondary",children:Object(o.jsx)("ul",{children:s.map((function(e,t){return Object(o.jsxs)("li",{style:{listStyleType:"none"},children:["[",t,"]",Object(o.jsx)("br",{}),"BienesTransp=",e.BienesTransp,Object(o.jsx)("br",{}),"Descripcion=",e.Descripcion,Object(o.jsx)("br",{}),"Cantidad=",e.Cantidad,Object(o.jsx)("br",{}),"ClaveUnidad=",e.ClaveUnidad,Object(o.jsx)("br",{}),"Unidad=",e.Unidad,Object(o.jsx)("br",{}),"CveMaterialPeligroso=",e.CveMaterialPeligroso,Object(o.jsx)("br",{}),"Embalaje=",e.Embalaje,Object(o.jsx)("br",{}),"DescripEmbalaje=",e.DescripEmbalaje,Object(o.jsx)("br",{}),"PesoEnKg=",e.PesoEnKg,Object(o.jsx)("br",{}),"ValorMercancia=",e.ValorMercancia,Object(o.jsx)("br",{}),"Moneda=",e.Moneda,Object(o.jsx)("br",{}),"FraccionArancelaria=",e.FraccionArancelaria,Object(o.jsx)("br",{}),"UUIDComercioExt=",e.UUIDComercioExt,Object(o.jsx)("br",{}),"Pedimentos=",e.Pedimentos,Object(o.jsx)("br",{})]},t)}))})})})]})]})},C=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",element:Object(o.jsx)(f,{})}),Object(o.jsx)(i.a,{path:"login",element:Object(o.jsx)(s,{})}),Object(o.jsx)(i.a,{path:"register",element:Object(o.jsx)(d,{})}),Object(o.jsx)(i.a,{path:"logout",element:Object(o.jsx)(l,{})})]})})]})};var y=function(){return Object(o.jsx)(b.a,{children:Object(o.jsx)(C,{})})};r.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e8387060.chunk.js.map
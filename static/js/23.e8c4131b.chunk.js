(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{989:function(e,t,a){"use strict";a.r(t);var n=a(629),r=a(1),l=a.n(r),o=a(614),c=a(615),m=[{id:"#812391",descricao:"Como adicionar um membro no meu sindicato?",criado:"18/08/2020",ultimaresposta:"20/08/2020",status:"Concluido",respostas:[{id:0,type:0,feitoem:"20/08/2020",feitopor:"Colaborador T\xe9cnico",text:"Coment\xe1rio em formato rich text com imagem e html",image:"localhost:3000/9.jpg"}]},{id:"#123911",descricao:"Como editar o nome de um membro de sindicato?",criado:"21/08/2020",ultimaresposta:"-",status:"Aberto"}],i=a(768),u=function(e){switch(e){case"Conclu\xeddo":return"success";case"Em Andamento":return"secondary";case"Aberto":return"warning";default:return"primary"}},s=["descricao","criado","ultimaresposta","status"];t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],E=t[1],d=Object(r.useState)(!1),p=Object(n.a)(d,2),f=p[0],h=p[1],b=Object(r.useState)(null),C=Object(n.a)(b,2),y=C[0],v=C[1];new i({accessToken:"lED5TkhB3uFikImI7MgEmwtt"});return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.U,null,l.a.createElement(o.n,null,l.a.createElement(o.i,null,l.a.createElement(o.m,{style:{flexDirection:"row",display:"flex",justifyContent:"space-between"}},l.a.createElement("div",null,l.a.createElement("h3",null,"Suporte"),l.a.createElement("span",null,"Tem uma d\xfavida? Conta pra gente e acompanha aqui o resultado.")),l.a.createElement("div",null,l.a.createElement(o.f,{block:!0,color:"primary",onClick:function(){return E(!a)}},"ABRIR CHAMADO")),l.a.createElement("div",null,l.a.createElement(o.z,{row:!0},l.a.createElement(o.I,null,l.a.createElement(o.K,null,l.a.createElement(o.f,{type:"button",color:"primary"},l.a.createElement(c.a,{name:"cil-magnifying-glass"})," Procurar")),l.a.createElement(o.G,{id:"input1-group2",name:"input1-group2",placeholder:"Nome de suporte"})))),l.a.createElement("div",null,l.a.createElement(o.I,null,l.a.createElement(o.s,{className:"input-group-prepend"},l.a.createElement(o.v,{caret:!0,color:"primary"},"Filtrar"),l.a.createElement(o.u,null,l.a.createElement(o.t,null,"Conclu\xeddo"),l.a.createElement(o.t,null,"Aberto"),l.a.createElement(o.t,null,"Em andamento")))))),l.a.createElement(o.j,null,l.a.createElement(o.r,{items:m,fields:s,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,clickableRows:!0,onRowClick:function(e){h(!f),v(e)},scopedSlots:{status:function(e){return l.a.createElement("td",null,l.a.createElement(o.b,{color:u(e.status)},e.status))}}})))),l.a.createElement(o.O,{show:f,onClose:function(){return h(!f)},size:"lg"},l.a.createElement(o.R,{closeButton:!0},l.a.createElement(o.S,null,"Chamado n\xba ",y&&y.id," [",y&&y.status,"]")),l.a.createElement(o.P,null,l.a.createElement("p",null,y&&y.descricao,l.a.createElement("br",null),l.a.createElement("p",{style:{fontSize:9}},"Criando em ",y&&y.criado)),y&&y.respostas&&y.respostas.map((function(e){return l.a.createElement(o.a,{key:e.id,color:0==e.type?"secondary":"success"},null!=e.respostaPai&&l.a.createElement("p",null,"EM RESPOSTA",l.a.createElement("br",null)),l.a.createElement("div",null,e.text),l.a.createElement("div",{style:{display:"flex",marginTop:10,flexDirection:"row",justifyContent:"space-between"}},l.a.createElement("p",{style:{fontWeight:"bold"}},e.feitopor),l.a.createElement("p",null,e.feitoem)))})),y&&"Aberto"==y.status&&l.a.createElement("div",null,l.a.createElement(o.z,{row:!0},l.a.createElement(o.n,{md:"3"},l.a.createElement(o.M,{htmlFor:"textarea-input"},"Novo Coment\xe1rio")),l.a.createElement(o.n,{xs:"12",md:"9"},l.a.createElement(o.fb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Mensagem de coment\xe1rio..."}),l.a.createElement(o.f,{color:"primary",onClick:function(){return h(!f)}},"Adicionar Coment\xe1rio"))))),l.a.createElement(o.Q,null,l.a.createElement(o.f,{color:"secondary",onClick:function(){return h(!f)}},"Fechar"))),l.a.createElement(o.O,{show:a,onClose:function(){return E(!a)},size:"lg"},l.a.createElement(o.R,{closeButton:!0},l.a.createElement(o.S,null,"Abrir Novo Chamado")),l.a.createElement(o.P,null,l.a.createElement(o.y,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},l.a.createElement(o.z,{row:!0},l.a.createElement(o.n,{md:"3"},l.a.createElement(o.M,null,"Chamado em nome de")),l.a.createElement(o.n,{xs:"12",md:"9"},l.a.createElement("p",{className:"form-control-static"},"Meu Nome"))),l.a.createElement(o.z,{row:!0},l.a.createElement(o.n,{md:"3"},l.a.createElement(o.M,{htmlFor:"textarea-input"},"D\xfavida")),l.a.createElement(o.n,{xs:"12",md:"9"},l.a.createElement(o.fb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Mensagem da d\xfavida..."}))),l.a.createElement(o.z,{row:!0},l.a.createElement(o.n,{md:"3"},l.a.createElement(o.M,{htmlFor:"select"},"Secretaria")),l.a.createElement(o.n,{xs:"12",md:"9"},l.a.createElement(o.V,{custom:!0,name:"select",id:"select"},l.a.createElement("option",{value:"0"},"Selecione secretaria para responder"),l.a.createElement("option",{value:"1"},"Jur\xeddica"),l.a.createElement("option",{value:"2"},"SECOM"),l.a.createElement("option",{value:"3"},"SETI")))),l.a.createElement(o.z,{row:!0},l.a.createElement(o.M,{col:!0,md:"3",htmlFor:"file-input"},"Arquivo (se houver)"),l.a.createElement(o.n,{xs:"12",md:"9"},l.a.createElement(o.H,{id:"file-input",name:"file-input"}))))),l.a.createElement(o.Q,null,l.a.createElement(o.f,{color:"primary",onClick:function(){alert("Chamado enviado! Aguarde resposta."),E(!a)}},"Enviar"),l.a.createElement(o.f,{color:"secondary",onClick:function(){return E(!a)}},"Fechar")))))}}}]);
//# sourceMappingURL=23.e8c4131b.chunk.js.map
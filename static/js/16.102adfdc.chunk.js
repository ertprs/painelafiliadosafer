(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{1040:function(e,t){},1041:function(e,t){},1042:function(e,t){},1043:function(e,t){},1044:function(e,t){},1088:function(e,t,a){"use strict";a.r(t);var n=a(617),r=a(1),l=a.n(r),o=a(615),c=a(616),i=[{id:"1298037144",numero:"#1298037144",via:"Primeira",mesreferente:"Agosto",recebido:"01/08/2020",vencimento:"31/08/2020",status:"Em Aberto"},{id:"1012123717",numero:"#1012123717",via:"Primeira",mesreferente:"Julho",recebido:"01/07/2020",vencimento:"31/07/2020",status:"Atrasado"},{id:"1901231283",numero:"#1901231283",via:"Primeira",mesreferente:"Junho",recebido:"01/06/2020",vencimento:"30/06/2020",status:"Pago"}],u=a(1010),s=a.n(u),m=function(e){switch(e){case"Pago":return"success";case"Em Aberto":return"secondary";case"Pendente":return"warning";case"Atrasado":return"danger";default:return"primary"}},d=["numero","mesreferente","recebido","vencimento","via","status"];t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],u=t[1],E=Object(r.useState)(null),f=Object(n.a)(E,2),p=f[0],b=f[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.W,null,l.a.createElement(o.o,null,l.a.createElement(o.i,null,l.a.createElement(o.m,{style:{flexDirection:"row",display:"flex",justifyContent:"space-between"}},l.a.createElement("div",null,l.a.createElement("h3",null,"Mensalidades"),l.a.createElement("span",null,"Confira aqui os status de suas mensalidades de afilia\xe7\xe3o a CONAFER")),l.a.createElement("div",null,l.a.createElement(o.A,{row:!0},l.a.createElement(o.K,null,l.a.createElement(o.M,null,l.a.createElement(o.f,{type:"button",color:"primary"},l.a.createElement(c.a,{name:"cil-magnifying-glass"})," Procurar")),l.a.createElement(o.H,{id:"input1-group2",name:"input1-group2",placeholder:"M\xeas referente"})))),l.a.createElement("div",null,l.a.createElement(o.K,null,l.a.createElement(o.t,{className:"input-group-prepend"},l.a.createElement(o.w,{caret:!0,color:"primary"},"Filtrar"),l.a.createElement(o.v,null,l.a.createElement(o.u,null,"Em Aberto"),l.a.createElement(o.u,null,"Atrasado"),l.a.createElement(o.u,null,"Pago")))))),l.a.createElement(o.j,null,l.a.createElement(o.s,{items:i,fields:d,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,clickableRows:!0,onRowClick:function(e){u(!a),b(e)},scopedSlots:{status:function(e){return l.a.createElement("td",null,l.a.createElement(o.b,{color:m(e.status)},e.status))}}})))),l.a.createElement(o.Q,{show:a,onClose:function(){return u(!a)},size:"lg"},l.a.createElement(o.T,{closeButton:!0},l.a.createElement(o.U,null,"Mensalidade m\xeas de ",p&&p.mesreferente," [",p&&p.status,"]")),l.a.createElement(o.R,null,l.a.createElement(s.a,{document:{url:"http://localhost:3000/boleto-facil-exemplo.pdf"}})),l.a.createElement(o.S,null,p&&"Pago"==p.status&&l.a.createElement(o.f,{color:"primary",onClick:function(){alert("Download recibo pagamento m\xeas "+p.mesreferente+".pdf?"),u(!a)}},"Download RECIBO"),l.a.createElement(o.f,{color:"secondary",onClick:function(){return alert("Baixar arquivo de boleto mensalidade do m\xeas''"+p.mesreferente+".pdf'?")}},"Download BOLETO")))))}}}]);
//# sourceMappingURL=16.102adfdc.chunk.js.map
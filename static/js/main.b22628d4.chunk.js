(this["webpackJsonpteble-app"]=this["webpackJsonpteble-app"]||[]).push([[0],{23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(9),i=a.n(c),r=a(7),l=a.n(r),o=a(10),d=a(15),j=a(11),b=a(12),u=a(16),h=a(14),m=(a(22),a(23),a(0)),x=function(){return Object(m.jsx)("div",{className:"loader-wrap",children:Object(m.jsxs)("div",{className:"lds-grid",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})})},O=function(e){return Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsxs)("th",{onClick:e.onSort.bind(null,"id"),children:["ID ","id"===e.sortField?Object(m.jsxs)("small",{children:[e.sort," "]}):null]}),Object(m.jsxs)("th",{onClick:e.onSort.bind(null,"name"),children:["Name ","name"===e.sortField?Object(m.jsxs)("small",{children:[e.sort," "]}):null]}),Object(m.jsxs)("th",{onClick:e.onSort.bind(null,"username"),children:["Username ","username"===e.sortField?Object(m.jsxs)("small",{children:[e.sort," "]}):null]}),Object(m.jsxs)("th",{onClick:e.onSort.bind(null,"email"),children:["Email ","email"===e.sortField?Object(m.jsxs)("small",{children:[e.sort," "]}):null]}),Object(m.jsxs)("th",{onClick:e.onSort.bind(null,"phone"),children:["Phone ","phone"===e.sortField?Object(m.jsxs)("small",{children:[e.sort," "]}):null]})]})}),Object(m.jsx)("tbody",{children:e.data.map((function(t){return Object(m.jsxs)("tr",{onClick:e.onRowSelect.bind(null,t),children:[Object(m.jsx)("td",{children:t.id}),Object(m.jsx)("td",{children:t.name}),Object(m.jsx)("td",{children:t.username}),Object(m.jsx)("td",{children:t.email}),Object(m.jsx)("td",{children:t.phone})]},t.id+t.phone)}))})]})},p=a(5),v=a.n(p),g=function(e){var t=e.person;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["User: ",Object(m.jsxs)("b",{children:[t.name,"  ",t.username]})]}),Object(m.jsxs)("p",{children:["Description: ",Object(m.jsx)("br",{}),Object(m.jsx)("textarea",{defaultValue:t.description})]}),Object(m.jsxs)("p",{children:["Address: ",Object(m.jsx)("b",{children:t.address.streetAddress})]}),Object(m.jsxs)("p",{children:["City: ",Object(m.jsx)("b",{children:t.address.city})]}),Object(m.jsxs)("p",{children:["State: ",Object(m.jsx)("b",{children:t.address.state})]}),Object(m.jsxs)("p",{children:["Zip code: ",Object(m.jsx)("b",{children:t.address.zip})]})]})},f=function(e){return Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"center",padding:"50px 0px"},children:[Object(m.jsx)("button",{onClick:function(){return e.onSelect("https://jsonplaceholder.typicode.com/users")},className:"btn btn-light",children:"Small Data"}),Object(m.jsx)("button",{disabled:!0,onClick:function(){return e.onSelect("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"btn btn-light",children:"Big Data"})]})},N=a(13),S=a.n(N),C=a(2),w=function(e){var t=Object(s.useState)(""),a=Object(C.a)(t,2),n=a[0],c=a[1];return Object(m.jsxs)("div",{className:"input-group mb-3 mt-3",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return e.onSearch(n)},children:"Search"})}),Object(m.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(e){c(e.target.value)}})]})},y=function(e){var t=Object(s.useState)(!1),a=Object(C.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(""),r=Object(C.a)(i,2),l=r[0],o=r[1],d=Object(s.useState)(""),j=Object(C.a)(d,2),b=j[0],u=j[1],h=Object(s.useState)(""),x=Object(C.a)(h,2),O=x[0],p=x[1],v=Object(s.useState)(""),g=Object(C.a)(v,2),f=g[0],N=g[1],S=Object(s.useState)(""),w=Object(C.a)(S,2),y=w[0],k=w[1];return Object(m.jsx)("div",{children:n?Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.getData({id:l,name:b,username:O,email:f,phone:y}),o(""),u(""),p(""),N(""),k("")},className:"needs-validation form mb-3 mt-3",noValidate:!0,children:Object(m.jsxs)("div",{className:"form-row",children:[Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("input",{value:l,onChange:function(e){o(e.target.value)},type:"text",className:"form-control",id:"validationTooltip01",placeholder:"Id",required:!0}),Object(m.jsx)("div",{className:"valid-tooltip"})]}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("input",{value:b,onChange:function(e){u(e.target.value)},type:"text",className:"form-control",id:"validationTooltip02",placeholder:"name",required:!0}),Object(m.jsx)("div",{className:"valid-tooltip"})]}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("input",{value:O,onChange:function(e){p(e.target.value)},type:"text",className:"form-control",id:"validationTooltip03",placeholder:"username",required:!0}),Object(m.jsx)("div",{className:"valid-tooltip"})]}),Object(m.jsx)("div",{className:"col-md-4 mb-3",children:Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("input",{value:f,onChange:function(e){N(e.target.value)},type:"text",className:"form-control",id:"validationTooltipUsername",placeholder:"Email","aria-describedby":"validationTooltipUsernamePrepend",required:!0}),Object(m.jsx)("div",{className:"invalid-tooltip"})]})}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("input",{value:y,onChange:function(e){k(e.target.value)},type:"text",className:"form-control",id:"validationTooltip04",placeholder:"Phone",required:!0}),Object(m.jsx)("div",{className:"valid-tooltip"})]}),Object(m.jsx)("div",{className:"col-md-4 mb-3",children:Object(m.jsx)("button",{className:"btn btn-light",type:"submit",children:"Submit form"})})]})}):Object(m.jsx)("button",{onClick:function(){c(!0)},className:"btn btn-light mb-3 mt-3",children:"Add user"})})},k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isModeSelected:!1,isLoading:!1,data:[],sort:"asc",sortField:"id",row:null,currentPage:0,search:"",newRow:{}},e.onSort=function(t){var a=Object(d.a)(e.state.data),s="asc"===e.state.sort?"desc":"asc",n=v.a.orderBy(a,t,s);e.setState({data:n,sort:s,sortField:t})},e.onRowSelect=function(t){e.setState({row:t})},e.onSelect=function(t){e.setState({isModeSelected:!0,isLoading:!0}),e.fetchData(t)},e.pageChangeHandler=function(t){var a=t.selected;e.setState({currentPage:a})},e.searchHandler=function(t){e.setState({search:t,currentPage:0})},e.getData=function(t){var a={id:t.id,name:t.name,username:t.username,email:t.email,phone:t.phone};e.setState({newRow:a}),e.state.data.unshift(a)},e}return Object(b.a)(a,[{key:"fetchData",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,this.setState({isLoading:!1,data:v.a.orderBy(s,this.state.sortField,this.state.sort)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFilteredData",value:function(){var e=this.state,t=e.data,a=e.search;return a?t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())||e.username.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())})):t}},{key:"render",value:function(){if(!this.state.isModeSelected)return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(f,{onSelect:this.onSelect})});var e=this.getFilteredData(),t=Math.ceil(e.length/50),a=v.a.chunk(e,50)[this.state.currentPage];return Object(m.jsxs)("div",{className:"container",children:[this.state.isLoading?Object(m.jsx)(x,{}):Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)(y,{getData:this.getData}),Object(m.jsx)(w,{onSearch:this.searchHandler}),Object(m.jsx)(O,{data:a,onSort:this.onSort,sort:this.state.sort,sortField:this.state.sortField,onRowSelect:this.onRowSelect})]}),this.state.data.length>50?Object(m.jsx)(S.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.pageChangeHandler,containerClassName:"pagination",activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",forcePage:this.state.currentPage}):null,this.state.row?Object(m.jsx)(g,{person:this.state.row}):null]})}}]),a}(s.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),L()}},[[26,1,2]]]);
//# sourceMappingURL=main.b22628d4.chunk.js.map
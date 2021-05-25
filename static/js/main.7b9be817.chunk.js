(this.webpackJsonpswaploancalculator=this.webpackJsonpswaploancalculator||[]).push([[0],{29:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(13),l=t.n(s),r=(t(29),t(30),t(9)),i=t(0);var o=function(){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){n(window.scrollY>50)}))}),[]),Object(i.jsx)("nav",{id:"navbar",className:t?"navbar fixed-top navbar-expand-lg navbar-header navbar-mobile swap-calculator-navbar header-scrolled":"navbar fixed-top navbar-expand-lg navbar-header navbar-mobile swap-calculator-navbar",children:Object(i.jsxs)("div",{className:"navbar-container container",children:[Object(i.jsx)("div",{className:"navbar-brand",children:Object(i.jsx)("a",{className:"navbar-brand-logo swap-calculator-brand-logo",href:"#top",children:Object(i.jsx)("img",{src:"/swap-loan-calculator/images/logo.png"})})}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("i",{className:"fas fa-bars"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse justify-content-around",id:"navbarNav",children:Object(i.jsx)("ul",{className:"navbar-nav",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link learn-more-btn",href:"#contact",children:"Contact"})})})})]})})},d=t(21),j=t.n(d);var b=function(){return Object(i.jsx)("section",{id:"top",className:"header",children:Object(i.jsxs)("div",{className:"container header-container",children:[Object(i.jsxs)("div",{className:"col-lg-5 offset-lg-1 col-sm-12 header-title-section",children:[Object(i.jsx)("p",{className:"header-subtitle",children:"Loan EMI Calculator"}),Object(i.jsx)("h1",{className:"header-title",children:Object(i.jsx)(j.a,{strings:["Worried about EMI Calculations","Unable to Calculate EMI's","Want to cross check Hidden Charges"],typeSpeed:30,backDelay:3e3,loop:!0})}),Object(i.jsx)("p",{className:"header-title-text",children:"Swap Calculator is here to help you out with all your perils, whether it is Home Loan, Car Loan or personal loan, we'll calculate each and every calculation with 99.9% accuracy."}),Object(i.jsx)("div",{className:"learn-more-btn-section",children:Object(i.jsx)("a",{className:"nav-link learn-more-btn btn-invert",href:"#services",children:"Let's Calculate"})})]}),Object(i.jsx)("div",{className:"d-none d-lg-block col-lg-6  header-img-section",children:Object(i.jsx)("img",{src:"/swap-loan-calculator/images/banner.svg",className:"img-fluid",alt:"banner"})})]})})},u=t(11),h=t(18),m=t.n(h),p=t(22),x=t(15),O=Object(x.b)({name:"loan",initialState:{loading:!1,hasErrors:!1,loan:{interest:0,principle:0,emi:0,total:0}},reducers:{calculateLoanRequest:function(e){e.loading=!0},calculateLoanSuccess:function(e,a){var t=a.payload;e.loan=t,e.loading=!1,e.hasErrors=!1},calculateLoanFailure:function(e){e.loading=!1,e.hasErrors=!0}}}),v=O.actions,g=v.calculateLoanRequest,N=v.calculateLoanSuccess,f=v.calculateLoanFailure,y=function(e){return e.loan},w=O.reducer;function C(e,a,t,c){return function(){var n=Object(p.a)(m.a.mark((function n(s){var l,r,i,o;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s(g()),l=0,r=0,i=0,o=0,(e=Number(e))>0&&a>0&&t>0&&("reducing-balance"==c?(a/=1200,l=Number(e*a*Math.pow(1+a,t)/(Math.pow(1+a,t)-1)),l+=414e-6):l=Number(e+e*(a/100)*t/12)/t,i=(o=l*t)-e,r=e);try{s(N({interest:i,principle:r,emi:l,total:o}))}catch(d){s(f())}case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}var k=t(23),L=t.n(k);var E=function(){var e=Object(u.c)(y),a=e.loan,t=(e.loading,e.hasErrors,Object(c.useState)([0,100])),n=Object(r.a)(t,2),s=n[0],l=n[1];return Object(c.useEffect)((function(){var e=a.principle>0&&a.total>0&&a.interest>0?a.principle/a.total*100:100,t=a.principle>0&&a.total>0&&a.interest>0?a.interest/a.total*100:0,c=[Math.round(t),Math.round(e)];l(c)}),[a]),Object(i.jsx)("div",{className:"app",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"mixed-chart",children:Object(i.jsx)(L.a,{options:{legend:{position:"bottom"},plotOptions:{pie:{donut:{labels:{show:!0}}}},labels:["Interest","Principle"]},series:s,type:"donut",width:"100%"})})})})};var F=function(){var e=Object(c.useState)(0),a=Object(r.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(0),l=Object(r.a)(s,2),o=l[0],d=l[1],j=Object(c.useState)(0),b=Object(r.a)(j,2),h=b[0],m=b[1],p=Object(c.useState)("flat-rate"),x=Object(r.a)(p,2),O=x[0],v=x[1],g=Object(u.b)(),N=Object(u.c)(y),f=N.loan,w=(N.loading,N.hasErrors,function(e){n(e.target.value),g(C(o,h,e.target.value,O))}),k=function(e){d(e.target.value),g(C(e.target.value,h,t,O))},L=function(e){m(e.target.value),g(C(o,e.target.value,t,O))},F=function(e){v(e),g(C(o,h,t,e))};return Object(i.jsx)("section",{id:"calculator",className:"calculator-section",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("ul",{className:"nav nav-pills",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"flat-rate"==O?"nav-link active":"nav-link",onClick:function(){return F("flat-rate")},children:"Flat Rate Calculator"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"reducing-balance"==O?"nav-link active":"nav-link",onClick:function(){return F("reducing-balance")},children:"Reducing Balance Calculator"})})]})}),Object(i.jsx)("div",{className:"row",children:"flat-rate"==O?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"col-lg-12",children:[Object(i.jsx)("h2",{className:"section-heading",children:"Flate Rate Loan Calculator"}),Object(i.jsx)("p",{className:"section-para",children:"Flat Rate of Interest basically means that interest is charged on full amount of the loan throughout the entire loan tenor. Thus the Flat Rate does not take account of the fact that periodic repayments, which include both interest and principal, gradually reduce the outstanding loan amount."})]})}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"col-lg-12",children:[Object(i.jsx)("h2",{className:"section-heading",children:"Reducing Balance Loan Calculator"}),Object(i.jsx)("p",{className:"section-para",children:"In Reducing Balance Interest Rate method, interest is calculated every month on the outstanding loan balance as reduced by the principal repayment every month. EMI payment every month contains interest payable for the outstanding loan amount for the month plus principal repayment. On every EMI payment, outstanding loan amount reduces by the amount of principal repayment."})]})})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-4",children:Object(i.jsxs)("form",{className:"form-calculator",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{for:"amount",children:"Loan Amount:"}),Object(i.jsxs)("div",{className:"input-group mb-4",children:[Object(i.jsx)("div",{className:"input-group-prepend",children:Object(i.jsx)("div",{className:"input-group-text",children:"$"})}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"amount",value:o,onChange:k})]}),Object(i.jsx)("div",{id:"slider",className:"emi-input",children:Object(i.jsx)("input",{type:"range",min:"0",max:"700000",value:o,onChange:k})})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{for:"amount",children:"Interest Rate :"}),Object(i.jsxs)("div",{className:"input-group mb-4",children:[Object(i.jsx)("div",{className:"input-group-prepend",children:Object(i.jsx)("div",{className:"input-group-text",children:"%"})}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"interest",value:h,onChange:L})]}),Object(i.jsx)("div",{id:"slider-interest",className:"emi-input",children:Object(i.jsx)("input",{type:"range",min:"0",max:"40",value:h,onChange:L})})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{for:"amount",children:"Loan Tenure :"}),Object(i.jsxs)("div",{className:"input-group mb-4",children:[Object(i.jsx)("div",{className:"input-group-prepend",children:Object(i.jsx)("div",{className:"input-group-text",children:"Months"})}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"tenure",value:t,onChange:w})]}),Object(i.jsx)("div",{id:"slider-tenure",className:"emi-input",children:Object(i.jsx)("input",{type:"range",min:"0",max:"100",value:t,onChange:w})})]})]})}),Object(i.jsx)("div",{className:"col-lg-4",children:Object(i.jsxs)("div",{className:"emi-details",children:[Object(i.jsx)("div",{className:"emi-details-head",children:Object(i.jsx)("h3",{children:"Your EMI Details"})}),Object(i.jsxs)("div",{className:"emi-details-box",children:[Object(i.jsx)("p",{children:"Loan EMI"}),Object(i.jsxs)("h5",{children:["$",f.emi.toFixed(2)]})]}),Object(i.jsxs)("div",{className:"emi-details-box",children:[Object(i.jsx)("p",{children:"Total Interest Payable"}),Object(i.jsxs)("h5",{children:["$",f.interest.toFixed(2)]})]}),Object(i.jsxs)("div",{className:"emi-details-box no-bottom-border",children:[Object(i.jsx)("p",{children:"Total Payment"}),Object(i.jsxs)("h5",{children:["$",f.total.toFixed(2)]})]})]})}),Object(i.jsx)("div",{className:"col-lg-4",children:Object(i.jsx)("div",{className:"pie-chart",children:Object(i.jsx)(E,{})})})]})]})})};var I=function(){return Object(i.jsx)("section",{className:"footer",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-lg-12",children:Object(i.jsxs)("div",{className:"footer-copyright",children:["Tailored by ",Object(i.jsx)("a",{href:"https://dakshim.github.io",target:"_blank",children:"Dakshim Chhabra"})," and ",Object(i.jsx)("a",{href:"#",target:"_blank",children:"Rajesh Kumar"}),", under guidance of ",Object(i.jsx)("a",{href:"#",children:"Om Verma"})]})})})})})};var M=function(){return Object(i.jsxs)("main",{className:"swap-loan-calculator",children:[Object(i.jsx)(o,{}),Object(i.jsx)(b,{}),Object(i.jsx)(F,{}),Object(i.jsx)(I,{})]})},S=t(24),R=t(3);var T=function(){return Object(i.jsx)(S.a,{basename:"/swap-loan-calculator",children:Object(i.jsx)(R.c,{children:Object(i.jsx)(R.a,{exact:!0,path:"/",children:Object(i.jsx)(M,{})})})})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,l=a.getTTFB;t(e),c(e),n(e),s(e),l(e)}))},P=t(8),D=Object(P.b)({loan:w}),$=Object(x.a)({reducer:D});l.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u.a,{store:$,children:Object(i.jsx)(T,{})})}),document.getElementById("root")),B()}},[[39,1,2]]]);
//# sourceMappingURL=main.7b9be817.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,n){},109:function(e,t,n){},118:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a,r,c,s,o,i,l,d=n(1),j=n.n(d),b=n(33),u=n.n(b),m=(n(107),n(4)),h=n(19),O=n(15),p=n(9),x=n(25),v=n.n(x),g=n(39),f=n(57),w=n(12),k=(n(109),n(144)),y=n(137),N=n(90),S=n(138),C=n(132),I=n(36),E=n(145),$=Object(E.a)(a||(a=Object(I.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),F=Object(E.a)(r||(r=Object(I.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),_=Object(E.a)(c||(c=Object(I.a)(["\n  mutation addEvent($title:String!, $name:String, $phoneNum:String, $date:String) {\n    addEvent(title: $title, name: $name, phoneNum: $phoneNum, date: $date) {\n      title\n      name\n      phoneNum\n      date\n\n      # cards {\n      #     _id\n      #     cardRecipient\n      #     cardText\n      #     cardSender\n      #     createdAt\n      # }\n    }\n  }\n"]))),D=Object(E.a)(s||(s=Object(I.a)(["\n  mutation removeEvent($eventId: ID!) {\n    removeEvent(eventId: $eventId) {\n      _id\n      title\n      name\n      phoneNum\n      date\n\n      # cards {\n      #   _id\n      #   cardRecipient\n      #   cardText\n      #   cardSender\n      #   createdAt\n      # }\n    }\n  }\n"]))),T=Object(E.a)(o||(o=Object(I.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      password\n      events {\n        _id\n        title\n        name\n        phoneNum\n        date\n      }\n      # cards {\n      #     _id\n      #     cardRecipient\n      #     cardText\n      #     cardSender\n      #     createdAt\n      # }\n    }\n  }\n"]))),L=Object(E.a)(i||(i=Object(I.a)(["\n  query getEvents {\n    events {\n      _id\n      title\n      name\n      phoneNum\n      date\n    }\n  }\n"]))),Y=(Object(E.a)(l||(l=Object(I.a)(["\nquery getEvent($eventId: ID!) {\n  event(eventId: $eventId) {\n      _id\n      title\n      name\n      phoneNum\n      date\n  }\n}"]))),n(68)),q=n(91),G=n(80),P=n(46),X=n(47),R=n(77),z=new(function(){function e(){Object(P.a)(this,e)}return Object(X.a)(e,[{key:"getProfile",value:function(){return Object(R.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(R.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),A=n(2),B=function(){var e=Object(d.useState)({title:"",name:"",phoneNum:"",date:""}),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(d.useState)(),c=Object(w.a)(r,2),s=(c[0],c[1],Object(C.a)(_,{update:function(e,t){var n=t.data.addEvent;try{var a=e.readQuery({query:L}).events;e.writeQuery({query:L,data:{events:[n].concat(Object(f.a)(a))}})}catch(c){console.error(c)}var r=e.readQuery({query:T}).me;e.writeQuery({query:T,data:{me:Object(m.a)(Object(m.a)({},r),{},{events:[].concat(Object(f.a)(r.events),[n])})}})}})),o=Object(w.a)(s,2),i=o[0],l=o[1],b=(l.error,l.data,function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log("=======",n),e.next=5,i({variables:{title:n.title,name:n.name,phoneNum:n.phoneNum,date:n.date}});case 5:a=e.sent,a.data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),u=function(e){var t=e.target,r=t.name,c=t.value;a(Object(m.a)(Object(m.a)({},n),{},Object(p.a)({},r,c)))},O=j.a.useState(!1),x=Object(w.a)(O,2),I=x[0],E=x[1],$=function(){return Object(A.jsx)("div",{id:"submit",children:"Your event has been saved!"})};return Object(A.jsx)("div",{className:"home-page",children:Object(A.jsx)("div",{className:"home-page-wrapper",children:z.loggedIn()?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h3",{className:"dtr",children:"Add an Event"}),Object(A.jsx)("div",{className:"form",children:Object(A.jsxs)(k.a,{className:"formWrapper",onSubmit:b,children:[Object(A.jsxs)(k.a.Group,{as:y.a,className:"mb-3",controlId:"formHorizontalTo",children:[Object(A.jsxs)(k.a.Label,{column:!0,lg:6,children:["Title ",Object(A.jsx)(G.a,{})]}),Object(A.jsx)(N.a,{sm:10,children:Object(A.jsx)(k.a.Control,{type:"input",name:"title",onChange:u,placeholder:"Event"})})]}),Object(A.jsxs)(k.a.Group,{as:y.a,className:"mb-3",controlId:"formHorizontalTo",children:[Object(A.jsxs)(k.a.Label,{column:!0,lg:6,children:["To ",Object(A.jsx)(G.b,{})]}),Object(A.jsx)(N.a,{sm:10,children:Object(A.jsx)(k.a.Control,{type:"input",name:"name",onChange:u,placeholder:"Name"})})]}),Object(A.jsxs)(k.a.Group,{as:y.a,className:"mb-3",controlId:"formHorizontalFrom",children:[Object(A.jsxs)(k.a.Label,{column:!0,lg:6,children:["Phone Number ",Object(A.jsx)(Y.b,{})]}),Object(A.jsx)(N.a,{sm:10,children:Object(A.jsx)(k.a.Control,{type:"input",name:"phoneNum",onChange:u,placeholder:"XXX-XXX-XXXX"})})]}),Object(A.jsxs)(k.a.Group,{as:y.a,className:"mb-3",controlId:"formHorizontalFrom",children:[Object(A.jsxs)(k.a.Label,{column:!0,lg:6,children:["Date ",Object(A.jsx)(q.a,{})]}),Object(A.jsx)(N.a,{sm:10,children:Object(A.jsx)(k.a.Control,{type:"input",name:"date",onChange:u,placeholder:"mm/dd/yyyy"})})]}),Object(A.jsx)(k.a.Group,{as:y.a,className:"mb-3",children:Object(A.jsx)(N.a,{sm:{span:10,offset:2},children:Object(A.jsxs)(S.a,{type:"submit",onClick:function(){return E(!0)},children:[" ","Submit"]})})}),Object(A.jsx)("h4",{children:I?Object(A.jsx)($,{}):null})]})})]}):Object(A.jsxs)("h2",{className:"welcome",children:["Welcome to DAYS TO REMEMBER. Please ",Object(A.jsx)(h.b,{to:"/login",children:"login"})," or"," ",Object(A.jsx)(h.b,{to:"/signup",children:"signup"})," to add an event."]})})})},M=n(98),H=n(128),Q=n(146),U=n(141),W=n(97),J=n(142),V=n(139),K=n(143),Z=(n(118),n(94)),ee=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(J.a,{className:"nav",fixed:"top",children:[Object(A.jsx)(V.a,{children:Object(A.jsxs)(J.a.Brand,{className:"cake",as:h.b,to:"/",children:[Object(A.jsxs)("div",{className:"logo",children:["  DR ",Object(A.jsx)(Z.a,{})]})," "]})}),z.loggedIn()?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(K.a.Item,{children:Object(A.jsx)(K.a.Link,{className:"btn btn-lg btn-info m-2",to:"/events",children:Object(A.jsx)(h.b,{to:"/events",children:"Events"})})}),Object(A.jsx)(K.a.Item,{children:Object(A.jsx)(K.a.Link,{className:"btn btn-lg btn-info m-2",onClick:z.logout,children:"Logout"})})]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(h.b,{className:"btn btn-lg btn-info m-2",to:"/login",children:"Login"}),Object(A.jsx)(h.b,{className:"btn btn-lg btn-light m-2",to:"/signup",children:"Signup"})]})]})})},te=(n(88),function(){var e=Object(d.useState)({username:"",email:"",password:""}),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(O.f)(),c=Object(C.a)(F),s=Object(w.a)(c,1)[0],o=function(e){var t=e.target,r=t.name,c=t.value;a(Object(m.a)(Object(m.a)({},n),{},Object(p.a)({},r,c)))},i=function(){var e=Object(g.a)(v.a.mark((function e(t){var c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,s({variables:n});case 6:if(c=e.sent,o=c.data,console.log(o),o){e.next=11;break}throw new Error("something went wrong!");case 11:z.login(o.addUser.token),r.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error(e.t0);case 18:a({username:"",email:"",password:""});case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)("div",{className:"form-wrapper",children:Object(A.jsx)("div",{className:"form-left",children:Object(A.jsxs)(k.a,{onSubmit:i,children:[Object(A.jsx)("h1",{children:"Signup"}),Object(A.jsxs)(k.a.Group,{children:[Object(A.jsx)(k.a.Label,{htmlFor:"username",children:"Username"}),Object(A.jsx)(k.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:o,value:n.username,required:!0}),Object(A.jsx)(k.a.Control.Feedback,{type:"invalid"})]}),Object(A.jsxs)(k.a.Group,{children:[Object(A.jsx)(k.a.Label,{htmlFor:"email",children:"Email"}),Object(A.jsx)(k.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:o,value:n.email,required:!0}),Object(A.jsx)(k.a.Control.Feedback,{type:"invalid"})]}),Object(A.jsxs)(k.a.Group,{children:[Object(A.jsx)(k.a.Label,{htmlFor:"password",children:"Password"}),Object(A.jsx)(k.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:o,value:n.password,required:!0}),Object(A.jsx)(k.a.Control.Feedback,{type:"invalid"})]}),Object(A.jsx)(S.a,{type:"submit",children:"Submit"})]})})})}),ne=n(96),ae=n.n(ne),re=(n(122),n(125),n(140)),ce=function(){var e=Object(re.a)(T),t=(e.loading,e.data),n=(null===t||void 0===t?void 0:t.me.events)||[],a=Object(C.a)(D),r=Object(w.a)(a,1)[0];console.log("removing userData",n);var c=j.a.useState(!1),s=Object(w.a)(c,2),o=s[0],i=s[1],l=function(){return Object(A.jsx)("div",{id:"delete",children:"Your event has been deleted! Pleas refresh the page =)"})},d=function(){var e=Object(g.a)(v.a.mark((function e(t){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Delete button clicked",t),console.log("userData",n),e.next=5,r({variables:{eventId:t}});case 5:a=e.sent,c=a.data,console.log("data",c,"updated userdata",n),i(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return n.length?Object(A.jsxs)("div",{className:"events-page",children:[Object(A.jsx)("h1",{className:"event-page-discr",children:"Your Events"}),n&&n.map((function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"event-border",children:[Object(A.jsxs)("div",{className:"event-title",children:[e.title," ",Object(A.jsx)(Y.a,{})]},e._id),Object(A.jsxs)("div",{className:"event-name",children:["of ",e.name]},e._id),Object(A.jsxs)("div",{className:"event-date",children:[Object(A.jsx)(ae.a,{format:"MM/DD/YYYY",unix:!0,children:e.date/1e3}),Object(A.jsx)("div",{children:Object(A.jsx)(S.a,{onClick:function(){return d(e._id)},className:"event-delete-btn",type:"submit",children:"delete"})})]},e._id)]}),Object(A.jsx)("h4",{children:o?Object(A.jsx)(l,{}):null})]})}))]}):Object(A.jsx)("h3",{className:"no-events",children:"No Events Yet"})},se=function(){var e=Object(d.useState)({email:"",password:""}),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(C.a)($),c=Object(w.a)(r,1)[0],s=Object(O.f)(),o=function(e){var t=e.target,r=t.name,c=t.value;a(Object(m.a)(Object(m.a)({},n),{},Object(p.a)({},r,c)))},i=function(){var e=Object(g.a)(v.a.mark((function e(t){var r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,c({variables:n});case 6:if(r=e.sent,o=r.data,console.log(o),o){e.next=11;break}throw new Error("something went wrong!");case 11:z.login(o.login.token),s.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error(e.t0);case 18:a({email:"",password:""});case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)("div",{className:"form-wrapper",children:Object(A.jsx)("div",{className:"form-right",children:Object(A.jsxs)(k.a,{onSubmit:i,children:[Object(A.jsx)("h1",{children:"Login"}),Object(A.jsxs)(k.a.Group,{children:[Object(A.jsx)(k.a.Label,{htmlFor:"username",children:"Email"}),Object(A.jsx)(k.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:o,value:n.email,required:!0}),Object(A.jsx)(k.a.Control.Feedback,{type:"invalid"})]}),Object(A.jsxs)(k.a.Group,{children:[Object(A.jsx)(k.a.Label,{htmlFor:"password",children:"Password"}),Object(A.jsx)(k.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:o,value:n.password,required:!0}),Object(A.jsx)(k.a.Control.Feedback,{type:"invalid"})]}),Object(A.jsx)(S.a,{type:"submit",children:"Submit"})]})})})},oe=Object(M.a)({uri:"/graphql"}),ie=Object(W.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(m.a)(Object(m.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),le=new H.a({link:ie.concat(oe),cache:new Q.a});var de=function(){return Object(A.jsx)(U.a,{client:le,children:Object(A.jsx)(h.a,{children:Object(A.jsxs)("div",{children:[Object(A.jsx)(ee,{}),Object(A.jsxs)(O.c,{children:[Object(A.jsx)(O.a,{exact:!0,path:"/signup",component:te}),Object(A.jsx)(O.a,{exact:!0,path:"/login",component:se}),Object(A.jsx)(O.a,{exact:!0,path:"/",component:B}),Object(A.jsx)(O.a,{exact:!0,path:"/events",component:ce}),Object(A.jsx)(O.a,{render:function(){return Object(A.jsx)("h1",{className:"display-2",children:"Wrong page!"})}})]})]})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};u.a.render(Object(A.jsx)(j.a.StrictMode,{children:Object(A.jsx)(de,{})}),document.getElementById("root")),je()},88:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.5a029761.chunk.js.map
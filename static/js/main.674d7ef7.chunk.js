(this["webpackJsonphealth-hub"]=this["webpackJsonphealth-hub"]||[]).push([[0],{176:function(e,a,t){},177:function(e,a,t){},178:function(e,a,t){},18:function(e,a,t){e.exports=t.p+"static/media/logo.f59f35a6.png"},180:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){},183:function(e,a,t){},185:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(68),r=t.n(o),s=t(1),l=(t(78),t(7)),i=t(19),m=t(12),d=t.n(m),u=t(18),g=t.n(u),h=t(3),_=t.n(h),p=function(e){var a=e.parentLink;return c.a.createElement("div",{id:_.a.sideNavv},c.a.createElement("a",{href:"https://sehatone.com/",className:d()(_.a.sideLink,_.a.headerLogo,_.a.pointer)},c.a.createElement("img",{src:g.a,alt:"magehost logo",className:_.a.headerLogoImg})),c.a.createElement(s.c,{exact:!0,className:_.a.sideLink,name:"hohme",to:a,alt:"Home",activeClassName:_.a.activeSideNavClass},c.a.createElement("i",{className:d()("fas","fa-home",_.a.sideNavIcon)}),c.a.createElement("span",{className:_.a.sideText},"Home")),c.a.createElement(s.c,{className:_.a.sideLink,name:"home",to:a+"/analysis",activeClassName:_.a.activeSideNavClass},c.a.createElement("i",{className:d()("fas","fa-globe",_.a.sideNavIcon)}),c.a.createElement("span",{className:_.a.sideText},"Analysis")),c.a.createElement(s.c,{exact:!0,className:_.a.sideLink,name:"home",to:a+"/reports",activeClassName:_.a.activeSideNavClass},c.a.createElement("i",{className:d()("fas","fa-book",_.a.sideNavIcon)}),c.a.createElement("span",{className:_.a.sideText},"Reports")),c.a.createElement(s.c,{exact:!0,className:_.a.sideLink,name:"home",to:a+"/raise",activeClassName:_.a.activeSideNavClass},c.a.createElement("i",{className:d()("fas","fa-exclamation",_.a.sideNavIcon)}),c.a.createElement("span",{className:_.a.sideText},"Raise a Concern")),c.a.createElement(s.c,{exact:!0,className:_.a.sideLink,name:"home",to:a+"/analysis",activeClassName:_.a.activeSideNavClass},c.a.createElement("i",{className:d()("fas","fa-user-md",_.a.sideNavIcon)}),c.a.createElement("span",{className:_.a.sideText},"Talk to Doctor")),c.a.createElement(s.c,{exact:!0,className:_.a.sideLink,name:"home",to:"/contact",activeClassName:_.a.activeSideNavClass},c.a.createElement("i",{className:d()("fas","fa-id-badge",_.a.sideNavIcon)}),c.a.createElement("span",{className:_.a.sideText},"Contact HealthHub")))},v=t(9),E=t.n(v),b=t(71),f=t.n(b),N=function(e){var a=e.isLoggedIn,t=e.logMeOut,n=e.avatar;return c.a.createElement("div",{className:"".concat(E.a.navLinks," ").concat(E.a.accountDrop)},c.a.createElement("span",null,c.a.createElement("img",{alt:"account",src:n||f.a,className:E.a.accountPic})),c.a.createElement("ul",{className:E.a.dropdown},c.a.createElement(s.b,{to:"/dash/profile",className:""},c.a.createElement("li",null,"Edit Profile")),c.a.createElement(s.b,{to:"/dash/reset/pass",className:""},c.a.createElement("li",null,"Reset Password")),a?c.a.createElement(s.b,{to:"/login",onClick:function(){return t()},className:""},c.a.createElement("li",null,"Logout")):c.a.createElement(s.b,{to:"/login",className:""},c.a.createElement("li",null,"Login"))))},w=function(e){return c.a.createElement("div",{className:d()(E.a.mainNavDiv,"center","mr4")},c.a.createElement("div",{className:E.a.navLeft},c.a.createElement("div",null,c.a.createElement("i",{className:d()("fas","fa-search",E.a.searchIconBar)}),c.a.createElement("input",{placeholder:"  Search...",className:"pl4 w5",type:"text",id:E.a.searchNav}))),c.a.createElement("div",{className:E.a.navRight},c.a.createElement(s.c,{className:d()(E.a.navLinks,E.a.dashBtn),name:"home",to:"/dashboard",activeClassName:E.a.activeNavClass},"Dashboard"),c.a.createElement("div",{className:d()(E.a.navLinks,E.a.notifBell),name:"home"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-bell"}))),c.a.createElement(N,e)))},C=t(22);C.b.global.defaultFontSize=16;var O=function(e){var a=e.data,t=e.labels,n=e.label,o=e.width,r=e.height,s=e.color;return c.a.createElement("div",{style:{width:o,paddingTop:"35px"}},c.a.createElement(C.a,{height:r,data:{labels:t,datasets:[{label:n,data:a,backgroundColor:"rgba(".concat(s,", 0.1)"),borderColor:"rgba(".concat(s,", 0.8)")}]}}))},y=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"],a=function(e,a){return Math.floor(Math.random()*(a-e)+e)},t=165,n=e.map((function(e){return t+=a(0,3)})),o=50,r=e.map((function(e){return o+=a(0,2)})),s=e.map((function(e,a){return 1e4*r[a]/(n[a]*n[a])}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{label:"BMI",labels:e,data:s,width:"80%",height:85,color:"128, 94, 219"}),c.a.createElement(O,{label:"Weight",labels:e,data:r,width:"45%",height:120,color:"217, 82, 170"}),c.a.createElement(O,{label:"Height",labels:e,data:n,width:"45%",height:120,color:"242, 138, 78"}))},j=t(14),I=t(8),U=t(4),S=t.n(U);function A(){return(A=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function x(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var L=c.a.createElement("path",{fill:"white",d:"m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"}),k=function(e){var a=e.svgRef,t=e.title,n=x(e,["svgRef","title"]);return c.a.createElement("svg",A({id:"Capa_1",height:40,viewBox:"0 0 479.058 479.058",width:40,ref:a},n),t?c.a.createElement("title",null,t):null,L)},D=c.a.forwardRef((function(e,a){return c.a.createElement(k,A({svgRef:a},e))})),M=(t.p,function(e){return/^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/.test(e)}),T=t(37),B=(t(175),function(){var e=window.matchMedia("(max-width: 500px)").matches;return T.a.mixin({toast:!0,position:e?"top-end":"bottom-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",T.a.stopTimer),e.addEventListener("mouseleave",T.a.resumeTimer)}})}),V=function(){var e=Object(n.useState)({name:"",email:"",subject:"",message:""}),a=Object(l.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)({data:null,loading:!1,error:null}),s=Object(l.a)(r,2),i=s[0],m=s[1],d=i.data,u=i.loading,g=i.error,h=function(e){var a=e.target,n=a.value,c=a.name;o(Object(I.a)({},t,Object(j.a)({},c,n)))};return Object(n.useEffect)((function(){d&&(B().fire({icon:"success",title:d.contactUs.message}),o({name:"",email:"",subject:"",message:""}))}),[d]),Object(n.useEffect)((function(){g&&g.graphQLErrors.length>0&&B().fire({icon:"error",title:g.graphQLErrors[0].message})}),[g]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:S.a.contact_parent_container},c.a.createElement("div",{className:S.a.contact_container},c.a.createElement("div",{className:S.a.contact_left,style:{marginLeft:"120px",fontWeight:"bold"}},"If you think a child/student needs help, kindly enter his details and we'll do everything in our power to help him. Thanks for caring!"),c.a.createElement("div",{className:S.a.contact_divider}),c.a.createElement("div",{className:S.a.contact_right},c.a.createElement("form",{className:S.a.form},c.a.createElement("h3",{className:S.a.contact_heading},"Reach Us :"),c.a.createElement("input",{type:"text",className:void 0===t.name?"".concat(S.a.single_line_input," ").concat(S.a.inValid):"".concat(S.a.single_line_input),placeholder:"Name",name:"name",value:t.name,onChange:h,required:!0}),c.a.createElement("input",{type:"email",className:t.email?M(t.email)?"".concat(S.a.single_line_input):"".concat(S.a.single_line_input," ").concat(S.a.inValid):void 0===t.email?"".concat(S.a.single_line_input," ").concat(S.a.inValid):"".concat(S.a.single_line_input),placeholder:"E-mail Address",name:"email",value:t.email,onChange:h,required:!0}),c.a.createElement("input",{type:"text",className:S.a.single_line_input,placeholder:"Subject",name:"subject",value:t.subject,onChange:h}),c.a.createElement("textarea",{className:void 0===t.message?"".concat(S.a.multiple_line_input," ").concat(S.a.inValid):"".concat(S.a.multiple_line_input),placeholder:"Message",name:"message",value:t.message,onChange:h,required:!0}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault();var a=B();t.email&&t.name&&t.message?M(t.email)?(m(Object(I.a)({},i,{loading:!0})),setTimeout((function(){m(Object(I.a)({},i,{loading:!1,data:{contactUs:{message:"We got your message"}}}))}),1200)):a.fire({icon:"error",title:"Please enter valid email"}):(o({name:t.name?t.name:void 0,email:t.email?t.email:void 0,subject:t.subject?t.subject:void 0,message:t.message?t.message:void 0}),a.fire({icon:"error",title:"Name, email or message cannot be empty"}))},className:S.a.form_submit,disabled:u},u?"O":"SUBMIT"))))))},W=t(34),P=t.n(W),R=function(e){var a=e.isLoggedIn,t=e.logMeOut;return c.a.createElement("div",{className:P.a.dashboardContainer},c.a.createElement(p,{parentLink:"/dashboard"}),c.a.createElement("div",{className:P.a["main-right"]},c.a.createElement(w,{isLoggedIn:a,logMeOut:t}),c.a.createElement("div",{className:P.a.containerWrapper},c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:["/dashboard","/dashboard/analysis"]},c.a.createElement(y,null)),c.a.createElement(i.b,{exact:!0,path:"/dashboard/raise"},c.a.createElement(V,null))))))};C.b.global.defaultFontSize=16;var H=function(e){var a=e.data,t=e.labels,n=e.label,o=e.width,r=e.height,s=e.color;return c.a.createElement("div",{style:{width:o,paddingTop:"35px"}},c.a.createElement(C.a,{height:r,data:{labels:t,datasets:[{label:n,data:a,backgroundColor:"rgba(".concat(s,", 0.1)"),borderColor:"rgba(".concat(s,", 0.8)")}]}}))},z=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"],a=function(e,a){return Math.floor(Math.random()*(a-e)+e)},t=165,n=e.map((function(e){return t+=a(0,3)})),o=50,r=e.map((function(e){return o+=a(0,2)})),s=e.map((function(e,a){return 1e4*r[a]/(n[a]*n[a])}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(H,{label:"Average BMI",labels:e,data:s,width:"80%",height:85,color:"128, 94, 219"}),c.a.createElement(H,{label:"Average Weight",labels:e,data:r,width:"45%",height:120,color:"217, 82, 170"}),c.a.createElement(H,{label:"Average Height",labels:e,data:n,width:"45%",height:120,color:"242, 138, 78"}))},J=t(35),F=t.n(J),Q=function(e){var a=e.isLoggedIn,t=e.logMeOut;return c.a.createElement("div",{className:F.a.dashboardContainer},c.a.createElement(p,{parentLink:"/doctorDashboard"}),c.a.createElement("div",{className:F.a["main-right"]},c.a.createElement(w,{isLoggedIn:a,logMeOut:t}),c.a.createElement("div",{className:F.a.containerWrapper},c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:["/doctorDashboard","/doctorDashboard/analysis"]},c.a.createElement(z,null)),c.a.createElement(i.b,{exact:!0,path:"/doctorDashboard/raise"},c.a.createElement(V,null)),c.a.createElement(i.b,{exact:!0,path:"/doctorDashboard/reports"})))))},K=t(36),q=t.n(K),Y=function(e){var a=e.isLoggedIn,t=e.logMeOut;return c.a.createElement("div",{className:q.a.dashboardContainer},c.a.createElement(p,{parentLink:"/orgDashboard"}),c.a.createElement("div",{className:q.a["main-right"]},c.a.createElement(w,{isLoggedIn:a,logMeOut:t}),c.a.createElement("div",{className:q.a.containerWrapper},c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:["/orgDashboard","/orgDashboard/analysis"]},c.a.createElement(z,null)),c.a.createElement(i.b,{exact:!0,path:"/orgDashboard/raise"},c.a.createElement(V,null))))))},Z=(t(176),function(e){var a=e.updateLoginState,t=Object(n.useState)({email:"",password:""}),o=Object(l.a)(t,2),r=o[0],m=o[1],d=Object(n.useState)({data:null,error:null,loading:!1}),u=Object(l.a)(d,2),g=u[0],h=u[1],_=g.data,p=g.error,v=g.loading,E=Object(n.useState)(""),b=Object(l.a)(E,2),f=b[0],N=b[1],w=function(e){var a=e.target.value,t=e.target.name;m(Object(I.a)({},r,Object(j.a)({},t,a)))};return _?(window.localStorage.setItem("token",_.login),console.log("login successful: token: ",_.login),a(!0),r.email.includes("doctor")?c.a.createElement(i.a,{to:"/doctorDashboard"}):r.email.includes("org")?c.a.createElement(i.a,{to:"/orgDashboard"}):c.a.createElement(i.a,{to:"/dashboard"})):(p&&(p.graphQLErrors.length>0&&"UNAUTHENTICATED"===p.graphQLErrors[0].extensions.code?N("Invalid email or password."):N("Something went wrong.")),c.a.createElement("div",{className:"loginCard"},c.a.createElement("h3",null,"Welcome back!"),c.a.createElement("p",null,"Login to access your dashboard"),c.a.createElement("form",{className:"loginForm",onSubmit:function(e){e.preventDefault();var a={email:r.email,password:r.password};console.log("login payload:",a),h(Object(I.a)({},g,{loading:!0})),setTimeout((function(){h(Object(I.a)({},g,{data:{login:"somerandomstring-cool-jwt"},loading:!1}))}),800)}},""!==f&&c.a.createElement("div",{className:"errorMsg"},f),c.a.createElement("input",{className:"loginInput",type:"text",name:"email",placeholder:"E-mail",onChange:w,required:!0}),c.a.createElement("input",{className:"loginInput",type:"password",name:"password",placeholder:"Password",onChange:w,required:!0}),c.a.createElement("input",{type:"submit",name:"login",value:"LOG IN",disabled:v})),c.a.createElement(s.b,{to:"/reset"},"Forgot your password?")))}),G=(t(177),function(){var e=Object(n.useState)({name:"",email:"",password:""}),a=Object(l.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)({data:null,error:null,loading:!1}),i=Object(l.a)(r,2),m=i[0],d=i[1],u=m.data,g=m.error,h=m.loading,_=Object(n.useState)(""),p=Object(l.a)(_,2),v=p[0],E=p[1],b=function(e){var a=e.target.value,n=e.target.name;o(Object(I.a)({},t,Object(j.a)({},n,a)))};return u?(console.log("signup successful: data: ",u.signup),c.a.createElement("div",{className:"registerCard"},c.a.createElement("h3",null,"Signup Successful!"),c.a.createElement("p",null,"You can now login using your email ",c.a.createElement("strong",null,u.signup.email)))):(g&&(g.graphQLErrors.length>0&&"BAD_USER_INPUT"===g.graphQLErrors[0].extensions.code?E(g.graphQLErrors[0].message):E("Something went wrong.")),c.a.createElement("div",{className:"registerCard"},c.a.createElement("h3",null,"Create your account!"),c.a.createElement("p",null,"Sign up to manage your website"),c.a.createElement("form",{className:"registerForm",onSubmit:function(e){e.preventDefault();var a={name:t.name,email:t.email,password:t.password};d(Object(I.a)({},m,{loading:!0})),setTimeout((function(){d(Object(I.a)({},m,{data:{signup:Object(I.a)({},a)},loading:!1}))}),800),console.log("payload:",a)}},""!==v&&c.a.createElement("div",{className:"errorMsg"},v),c.a.createElement("input",{className:"registerInput",type:"text",name:"name",placeholder:"Name",onChange:b,required:!0}),c.a.createElement("input",{className:"registerInput",type:"text",name:"email",placeholder:"E-mail",onChange:b,required:!0}),c.a.createElement("input",{className:"registerInput",type:"password",name:"password",placeholder:"Password",onChange:b,required:!0}),c.a.createElement("input",{type:"submit",name:"signup",value:"SIGN UP",disabled:h})),c.a.createElement(s.b,{to:"/login"},"Already have an account?")))}),X=(t(178),function(e){var a=e.updateLoginState;return window.localStorage.getItem("token")?(window.localStorage.clear(),c.a.createElement(i.a,{to:"/dashboard"})):c.a.createElement("section",{className:"loginSection"},c.a.createElement("div",{className:"login-left"},c.a.createElement("h2",null,"Keep track of your Health.")),c.a.createElement("div",{className:"triangle-right"}),c.a.createElement("div",{className:"login-right"},c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0,render:function(){return c.a.createElement(Z,{updateLoginState:a})}}),c.a.createElement(i.b,{path:"/register",exact:!0,render:function(){return c.a.createElement(G,null)}}))))}),$=t(27),ee=t.n($),ae=function(){return c.a.createElement("nav",{className:ee.a.topNav},c.a.createElement("div",{className:ee.a["nav-left"]},c.a.createElement("img",{src:g.a,className:ee.a.logo,alt:"logo"}),c.a.createElement(s.b,{to:"/dashboard"},"HealthHub"),c.a.createElement(s.b,{to:"/solutions"},"Solutions"),c.a.createElement(s.b,{to:"/pricing"},"Pricing"),c.a.createElement(s.b,{to:"/help"},"Help")),c.a.createElement("div",{className:ee.a["nav-right"]},c.a.createElement(s.b,{to:"/"},"Login"),c.a.createElement(s.b,{to:"/register"},"Register")))},te=t(10),ne=(t(179),t(180),function(e){var a=Object(n.useState)(1),t=Object(l.a)(a,2),o=t[0],r=t[1];Object(n.useEffect)((function(){Object(te.addResponseMessage)("How are you feeling?")}),[]);var s=["Wohooo! You made it to the next question!","YOU ARE SO SMART!!","Success! Success! Success!","I repeat, mission successful!","I knew you'd do it.. Congratulations!","Was the question lame?.. or was it your brain? Celebrations!","You are awesome! Cheers!!","Enemy Down! Wonderful performance!"],i=function(a){var t=!1;fetch("/api/chatbot",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({message:a})}).then((function(e){return 200!==e.status&&(t=!0),e.json()})).then((function(a){if(t)throw a;a.successHint?Object(te.addResponseMessage)(a.message):a.success&&(e.updateUserGameInfo(a),Object(te.addResponseMessage)(s[Math.floor(Math.random()*s.length)]),a.end&&(Object(te.addResponseMessage)("That's the end, my friend!  \n            *Plays See You Again*"),Object(te.toggleInputDisabled)()))})).catch((function(e){a.includes("high fever")&&a.includes("chills")?Object(te.addResponseMessage)("You may have Maleria or a Viral Infection. However, I recommend you take a Paracetamol and relax. If fever repeats, please visit a doctor!"):a.includes("fever")&&a.includes("headache")?Object(te.addResponseMessage)("A fever and a Headache may exhibit a variety of diseases. You can take a paracetamol. Visit a doctor on consistency"):a.includes("poor appe")&&a.includes("stomach")&&a.includes("fever")?Object(te.addResponseMessage)("It seems like typhoid. Please consult a doctor. Get well soon Amigo!"):a.includes("fever")?Object(te.addResponseMessage)("Take a paracetamol and relax. Consult a doctor on repeatation"):a.includes("chest pain")&&a.includes("left")?Object(te.addResponseMessage)("Call an ambulance immediately! You may have a heart attack! I am sending out notifications with your location to nearby Cardiologists."):a.includes("cough")&&a.includes("cold")?Object(te.addResponseMessage)("So you have caught cold. You should be fine in a week. You may take 'Sinarest', 'Cheston Cold', 'Benadryl' and the likes 2 times a day for temporary relaxation. If consistent, visit a doctor."):Object(te.addResponseMessage)("I'm still learning and I don't have the answer to that yet. However, I've made a note and will learn it soon enough.")}))};return c.a.createElement("div",{onClick:function(){r(0)}},c.a.createElement(te.Widget,{handleNewUserMessage:function(e){e.toLowerCase().includes("help?")?setTimeout((function(){Object(te.addResponseMessage)("Just enter your symptoms with severity and let me try")}),1e3):e.toLowerCase().includes("hey")||e.toLowerCase().includes("hello")|e.toLowerCase().includes(" hi ")?setTimeout((function(){Object(te.addResponseMessage)("Hey man!")}),1e3):setTimeout((function(){return i(e)}),1200)},title:"DocBot",subtitle:"",profileAvatar:g.a,badge:o}))}),ce=(t(181),t(2)),oe=t.n(ce),re=[{name:"Vishesh Khandelwal",tel:"+91-7509998118",mail:"visesh@healthhub.org"},{name:"Prem Kumar",tel:"+91-7004727387",mail:"prem@healthhub.org"},{name:"Ojaswa Sharma",tel:"+91-9131102279",mail:"ojaswa@healthhub.org"},{name:"Rohit Kunji",tel:"+91-7470358637",mail:"rohit@healthhub.org"}],se=function(){var e=Object(n.useState)({name:"",email:"",subject:"",message:""}),a=Object(l.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)({data:null,loading:!1,error:null}),i=Object(l.a)(r,2),m=i[0],d=i[1],u=m.data,h=m.loading,_=m.error,p=function(e){var a=e.target,n=a.value,c=a.name;o(Object(I.a)({},t,Object(j.a)({},c,n)))};return Object(n.useEffect)((function(){u&&(B().fire({icon:"success",title:u.contactUs.message}),o({name:"",email:"",subject:"",message:""}))}),[u]),Object(n.useEffect)((function(){_&&_.graphQLErrors.length>0&&B().fire({icon:"error",title:_.graphQLErrors[0].message})}),[_]),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{src:g.a,className:oe.a.contact_aurora_logo,alt:"logo"})),c.a.createElement("div",{className:oe.a.contact_parent_container},c.a.createElement("div",{className:oe.a.contact_container},c.a.createElement("div",{className:oe.a.contact_left},c.a.createElement("div",{className:oe.a.contact_us},c.a.createElement("h3",{className:oe.a.contact_heading},"Contact Us :"),c.a.createElement("div",{className:oe.a.contact_card},re.map((function(e){return c.a.createElement("div",{className:oe.a.cordi},c.a.createElement("h4",{className:oe.a.cordi_heading},e.name),c.a.createElement("a",{href:"tel:".concat(e.tel)},"Call"),c.a.createElement("a",{href:"mailto:".concat(e.mail)},c.a.createElement(D,{width:"30px",height:"30px"})))})))),c.a.createElement("div",{className:oe.a.find_us},c.a.createElement("h3",{className:oe.a.contact_heading},"Find Us :"),c.a.createElement("div",{className:oe.a.map_container},c.a.createElement("div",{className:oe.a.map_outer},c.a.createElement("div",{className:oe.a.gmap_canvas},c.a.createElement("iframe",{width:"100%",height:"100%",id:"gmap_canvas",src:"https://maps.google.com/maps?q=IIIIM%20Gwalior&t=&z=17&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0",title:"g_map"})))))),c.a.createElement("div",{className:oe.a.contact_divider}),c.a.createElement("div",{className:oe.a.contact_right},c.a.createElement("form",{className:oe.a.form},c.a.createElement("h3",{className:oe.a.contact_heading},"Reach Us :"),c.a.createElement("input",{type:"text",className:void 0===t.name?"".concat(oe.a.single_line_input," ").concat(oe.a.inValid):"".concat(oe.a.single_line_input),placeholder:"Name",name:"name",value:t.name,onChange:p,required:!0}),c.a.createElement("input",{type:"email",className:t.email?M(t.email)?"".concat(oe.a.single_line_input):"".concat(oe.a.single_line_input," ").concat(oe.a.inValid):void 0===t.email?"".concat(oe.a.single_line_input," ").concat(oe.a.inValid):"".concat(oe.a.single_line_input),placeholder:"E-mail Address",name:"email",value:t.email,onChange:p,required:!0}),c.a.createElement("input",{type:"text",className:oe.a.single_line_input,placeholder:"Subject",name:"subject",value:t.subject,onChange:p}),c.a.createElement("textarea",{className:void 0===t.message?"".concat(oe.a.multiple_line_input," ").concat(oe.a.inValid):"".concat(oe.a.multiple_line_input),placeholder:"Message",name:"message",value:t.message,onChange:p,required:!0}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault();var a=B();t.email&&t.name&&t.message?M(t.email)?(d(Object(I.a)({},m,{loading:!0})),setTimeout((function(){d(Object(I.a)({},m,{loading:!1,data:{contactUs:{message:"We got your message"}}}))}),1200)):a.fire({icon:"error",title:"Please enter valid email"}):(o({name:t.name?t.name:void 0,email:t.email?t.email:void 0,subject:t.subject?t.subject:void 0,message:t.message?t.message:void 0}),a.fire({icon:"error",title:"Name, email or message cannot be empty"}))},className:oe.a.form_submit,disabled:h},h?"O":"SUBMIT"))))))};var le=function(){var e=Object(n.useState)(!0),a=Object(l.a)(e,2),t=a[0],o=a[1],r=function(){o(!1),localStorage.setItem("token","")};return c.a.createElement("div",{className:"App"},c.a.createElement(i.b,{path:["/login","/register","/"],exact:!0,render:function(){return c.a.createElement(ae,{isLoggedIn:t,logMeOut:r})}}),c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:["/","/register"]},c.a.createElement(X,{updateLoginState:o})),c.a.createElement(i.b,{exact:!0,path:"/login"},c.a.createElement(i.a,{to:"/"})),c.a.createElement(i.b,{path:"/dashboard"},c.a.createElement(R,{isLoggedIn:t,logMeOut:r,updateLoginState:o}),c.a.createElement(ne,null)),c.a.createElement(i.b,{path:"/doctorDashboard"},c.a.createElement(Q,{isLoggedIn:t,logMeOut:r,updateLoginState:o}),c.a.createElement(ne,null)),c.a.createElement(i.b,{path:"/orgDashboard"},c.a.createElement(Y,{isLoggedIn:t,logMeOut:r,updateLoginState:o}),c.a.createElement(ne,null)),c.a.createElement(i.b,{path:"/contact"},c.a.createElement(se,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(182),t(183),t(184);r.a.render(c.a.createElement(s.a,null,c.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},2:function(e,a,t){e.exports={contact_parent_container:"contactUs_contact_parent_container__2idGk",contact_aurora_logo:"contactUs_contact_aurora_logo__2y4kq",contact_container:"contactUs_contact_container__3ejh8",contact_left:"contactUs_contact_left__3aBD5",contact_divider:"contactUs_contact_divider__3CNxM",contact_right:"contactUs_contact_right__2rAjV",contact_us:"contactUs_contact_us__2hDSf",find_us:"contactUs_find_us__1yWPY",contact_heading:"contactUs_contact_heading__1g0OE",contact_card:"contactUs_contact_card__1fmBO",cordi:"contactUs_cordi__3W13y",cordi_heading:"contactUs_cordi_heading__1w1QT",map_container:"contactUs_map_container__19bUj",form:"contactUs_form__k9Dxd",single_line_input:"contactUs_single_line_input__3EhFX",multiple_line_input:"contactUs_multiple_line_input__3fQSP",form_submit:"contactUs_form_submit__n5I_A",map_outer:"contactUs_map_outer__15uHV",gmap_canvas:"contactUs_gmap_canvas__12Afq",contact_ChealCaowa:"contactUs_contact_ChealCaowa__3N2yD",inValid:"contactUs_inValid__PVBks"}},27:function(e,a,t){e.exports={topNav:"TopNav_topNav__Epac9",logo:"TopNav_logo__PguXs","nav-left":"TopNav_nav-left__A9zoY","nav-right":"TopNav_nav-right__1AM0K"}},3:function(e,a,t){e.exports={sideNavv:"SideBar_sideNavv__2IPgD",sideLink:"SideBar_sideLink__2jrQn",headerLogo:"SideBar_headerLogo__i22Q6",headerLogoImg:"SideBar_headerLogoImg__6nMnS",sideNavIcon:"SideBar_sideNavIcon__38RyB",activeSideNavClass:"SideBar_activeSideNavClass__5zJys",sideText:"SideBar_sideText__2NIY5"}},34:function(e,a,t){e.exports={dashboardContainer:"UserDash_dashboardContainer__2vbMa","main-right":"UserDash_main-right__3AJve",containerWrapper:"UserDash_containerWrapper__1-uIG"}},35:function(e,a,t){e.exports={dashboardContainer:"UserDash_dashboardContainer__3sP4T","main-right":"UserDash_main-right__1tM3N",containerWrapper:"UserDash_containerWrapper__kpaDf"}},36:function(e,a,t){e.exports={dashboardContainer:"UserDash_dashboardContainer__208A-","main-right":"UserDash_main-right__p4OXb",containerWrapper:"UserDash_containerWrapper__3x3Y5"}},4:function(e,a,t){e.exports={contact_parent_container:"contactUs_contact_parent_container__23ADx",contact_aurora_logo:"contactUs_contact_aurora_logo__T6b7C",contact_container:"contactUs_contact_container__1beVP",contact_left:"contactUs_contact_left__29tjT",contact_divider:"contactUs_contact_divider__2wJVB",contact_right:"contactUs_contact_right__2CNfU",contact_us:"contactUs_contact_us__214u2",find_us:"contactUs_find_us__27k_p",contact_heading:"contactUs_contact_heading__34gDY",contact_card:"contactUs_contact_card__2Swu5",cordi:"contactUs_cordi__1dUqi",cordi_heading:"contactUs_cordi_heading__2wyk_",map_container:"contactUs_map_container__1NTJH",form:"contactUs_form__10Wax",single_line_input:"contactUs_single_line_input__iO5Qu",multiple_line_input:"contactUs_multiple_line_input__1koKp",form_submit:"contactUs_form_submit__w1IqE",map_outer:"contactUs_map_outer__1-e-8",gmap_canvas:"contactUs_gmap_canvas__2siLF",contact_ChealCaowa:"contactUs_contact_ChealCaowa__3hm3G",inValid:"contactUs_inValid__2JeaY"}},71:function(e,a){e.exports="data:image/png;base64,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"},73:function(e,a,t){e.exports=t(185)},78:function(e,a,t){},9:function(e,a,t){e.exports={mainNavDiv:"DashTopNav_mainNavDiv__GmZbY",navLeft:"DashTopNav_navLeft__1Vt33",navRight:"DashTopNav_navRight__2W2Yt",accountDrop:"DashTopNav_accountDrop__1O8Nu",navLinks:"DashTopNav_navLinks__2ESg4",activeNavClass:"DashTopNav_activeNavClass__1wxy3",searchNav:"DashTopNav_searchNav__qPMj_",searchIconBar:"DashTopNav_searchIconBar__2oxvM",notifBell:"DashTopNav_notifBell__76bAz",dropdown:"DashTopNav_dropdown__28w8O",dashBtn:"DashTopNav_dashBtn__1B2RC",addButton:"DashTopNav_addButton__3qzds"}}},[[73,1,2]]]);
//# sourceMappingURL=main.674d7ef7.chunk.js.map
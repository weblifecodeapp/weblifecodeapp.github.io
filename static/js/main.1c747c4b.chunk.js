(this.webpackJsonparkane=this.webpackJsonparkane||[]).push([[0],{138:function(e,n,t){},147:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),i=t(8),s=t(20),p=(t(136),t(26)),u=t(3),l={id:0,isAuth:!1,firstName:null,lastName:null,vkData:{},birthDayInput:"",birthMonthInput:"",birthYearInput:"",birthDay:0,birthMonth:0,birthYear:0,arkanes:[0,0,0,0,0,0,0,0,0,0,0,0],innerArkanes:[0,0,0,0,0],soulAge:0,innerChild:0,longKarma:"",genderArkanes:{u:0,m:0,f:0,n:0},energyArkanes:{m:0,f:0,k:0},digitsCount:new Array(23).fill(0),maleIsFlipped:!1,femaleIsFlipped:!1},d="USER_UPDATE_B_YEAR",h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:d,payload:x(e,4),focusNextFunc:n}},f="USER_UPDATE_B_MONTH",b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:f,payload:x(e),focusNextFunc:n}},j="USER_UPDATE_B_DAY",m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:j,payload:x(e),focusNextFunc:n}},O="USER_UPDATE_STATE_PARAMS",g=function(e){return{type:O,payload:e}},x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).replace(/\D/gi,"").substr(0,n)},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e||"function"!==typeof e)return!1;setTimeout((function(){e()}),0)},y={title:"Arkane",locationSearch:"",locationHash:"",searchParams:{},hashParams:{},appID:7839536,apiToken:null,apiTokenByPermission:{},currentWidth:0,currentHeight:0,appIsLoading:!1,isMobileView:!1},I="APP_SET_IS_LOADING",k="APP_UPDATE_STATE_PARAMS",_=function(e){return{type:k,payload:e}},A={routeName:""},w="ROUTER_SET_ROUTE_NAME",N=function(e){return{type:w,payload:e}},R="ROUTER_UPDATE_PARAMS",D=Object(s.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I:return Object(u.a)(Object(u.a)({},e),{},{appIsLoading:!0===n.payload});case k:return Object(u.a)(Object(u.a)({},e),n.payload)}return e},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case w:return Object(u.a)(Object(u.a)({},e),{},{routeName:n.payload});case R:return Object(u.a)(Object(u.a)({},e),n.payload)}return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O:return Object(u.a)(Object(u.a)({},e),n.payload);case j:return(n.payload.length>1||parseInt(n.payload,10)>3&&parseInt(n.payload,10)<=9)&&v(n.focusNextFunc),Object(u.a)(Object(u.a)({},e),{},{birthDayInput:n.payload});case f:return(n.payload.length>1||parseInt(n.payload,10)>1&&parseInt(n.payload,10)<=9)&&v(n.focusNextFunc),Object(u.a)(Object(u.a)({},e),{},{birthMonthInput:n.payload});case d:return Object(u.a)(Object(u.a)({},e),{},{birthYearInput:n.payload})}return e}}),C=[p.a],M=Object(s.c)(D,s.a.apply(void 0,C)),E="ROUTE_DATE_PICKER",T="ROUTE_RESULT",P="ROUTE_ARKANE_DECODE";M.dispatch(_({locationHash:window.location.hash||"",locationSearch:window.location.search||""})),M.dispatch(N(E));t(138);var S=t(9),U=t(11),Y=t(10),F=t(19),K=(t(145),t(1)),B=function(e){Object(U.a)(t,e);var n=Object(Y.a)(t);function t(){var e;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).componentDidMount=function(){},e.componentDidUpdate=function(){},e.render=function(){return Object(K.jsxs)(F.b,{id:e.props.id,children:[Object(K.jsx)(F.c,{children:e.props.title}),Object(K.jsx)(F.a,{children:"Preloader..."})]})},e}return t}(a.a.Component),V=(Object(i.b)((function(e,n){return{id:n.id,title:e.vkui.appTitle}}))(B),function e(n){return 0==n?22:n<=22?n:e(n-22)}),W=function(e){Object(U.a)(t,e);var n=Object(Y.a)(t);function t(e){var r;return Object(S.a)(this,t),(r=n.call(this,e)).componentDidMount=function(){r.focusDayInput()},r.componentDidUpdate=function(){},r.focusDayInput=function(){r.dayInputRef&&r.dayInputRef.focus&&r.dayInputRef.focus()},r.focusMonthInput=function(){r.monthInputRef&&r.monthInputRef.focus&&r.monthInputRef.focus()},r.focusYearInput=function(){r.yearInputRef&&r.yearInputRef.focus&&r.yearInputRef.focus()},r.setDayInputRef=function(e){r.dayInputRef=e},r.setMonthInputRef=function(e){r.monthInputRef=e},r.setYearInputRef=function(e){r.yearInputRef=e},r.render=function(){return Object(K.jsxs)("form",{className:"sum",children:[Object(K.jsxs)("h1",{children:["\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0432\u043e\u0439 ",Object(K.jsx)("b",{children:"\u043a\u043e\u0434 \u0436\u0438\u0437\u043d\u0438"})]}),Object(K.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(K.jsxs)("div",{className:"inputs",children:[Object(K.jsx)("input",{type:"text",placeholder:"\u0434\u0434",value:r.props.birthDayInput,onChange:function(e){r.props.onChangeBirthDay(e,r.focusMonthInput)},ref:r.setDayInputRef}),Object(K.jsx)("input",{type:"text",placeholder:"\u043c\u043c",value:r.props.birthMonthInput,onChange:function(e){r.props.onChangeBirthMonth(e,r.focusYearInput)},ref:r.setMonthInputRef}),Object(K.jsx)("input",{type:"text",placeholder:"\u0433\u0433\u0433\u0433",value:r.props.birthYearInput,onChange:r.props.onChangeBirthYear,ref:r.setYearInputRef})]}),Object(K.jsx)("button",{className:"button",type:"button",onClick:r.props.onCalculate,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})},r.dayInputRef=null,r.monthInputRef=null,r.yearInputRef=null,r}return t}(a.a.Component),H=Object(i.b)((function(e,n){return{routeName:e.router.routeName,birthDayInput:e.user.birthDayInput,birthMonthInput:e.user.birthMonthInput,birthYearInput:e.user.birthYearInput}}),(function(e){return{onChangeBirthDay:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e(m(n.target.value,t))},onChangeBirthMonth:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e(b(n.target.value,t))},onChangeBirthYear:function(n){e(h(n.target.value))},onCalculate:function(){e((function(e,n){var t=n(),r=parseInt(t.user.birthDayInput,10)||0,a=parseInt(t.user.birthMonthInput,10)||0,o=parseInt(t.user.birthYearInput,10)||0,c=[0,V(r),V(a)];c[3]=V(String(o).split("").reduce((function(e,n){return e+parseInt(n,10)}),0)),c[4]=V(c[1]+c[2]),c[5]=V(c[2]+c[3]),c[6]=V(c[4]+c[5]),c[7]=V(c[1]+c[4]),c[8]=V(c[2]+c[4]),c[9]=V(c[2]+c[5]),c[10]=1,c[11]=1,c[12]=1,c[13]=1,c[14]=1,c[15]=1;var i=Math.max(c[1],c[2],c[3],c[4],c[5],c[6],c[7]);console.log("soulAge",i);var s=c[8],p=[c[4]],u=[c[1],c[2],c[3],c[5],c[6]],l=[];u.forEach((function(e){l.includes(e)&&!p.includes(e)&&p.push(e),l.push(e)}));var d=p.join(", ");console.log("longKarma",d);var h=[V(c[9]+c[10]+c[11]),V(c[1]+c[2]+c[4]),V(c[2]+c[3]+c[5]),V(c[2]+c[4]+c[5]),V(c[4]+c[5]+c[6])],f=["u","m","f","f","m","m","n","m","f","n","n","m","n","f","n","m","n","f","f","m","n","n","n"],b={u:0,m:0,f:0,n:0},j=new Array(23).fill(0),m=[c[4],c[1],c[2],c[3],c[5],c[6]];m.forEach((function(e){b[f[e]]++,j[e]++}));var O=[0,1,0,0,2,2,0,1,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0],x=[0,0,2,2,0,0,0,0,1,0,0,0,0,1,0,0,0,1,2,0,0,0,0],v=[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0],y={m:0,f:0,k:0};m.forEach((function(e){y.m+=O[e],y.f+=x[e],y.k+=v[e]}));var I=[c[4]];j.forEach((function(e,n){e>1&&I.push(n)}));var k=[1,4,5,7,11,15,19],_=[2,3,8,13,17,18],A=!1,w=!1;I.forEach((function(e){k.includes(e)&&(A=!0),_.includes(e)&&(w=!0)})),e(g({birthDay:r,birthMonth:a,birthYear:o,arkanes:c,innerArkanes:h,soulAge:i,innerChild:s,longKarma:d,genderArkanes:b,energyArkanes:y,digitsCount:j,maleIsFlipped:A,femaleIsFlipped:w})),e(N(T))}))}}}))(W),z=t(17),L=t.n(z),J=function(){return function(e,n){var t=n();e(g({birthDayInput:"",birthMonthInput:"",birthYearInput:""})),e(N(E)),t.app.searchParams&&t.app.searchParams.vk_platform&&"desktop_web"===t.app.searchParams.vk_platform&&(L.a.send("VKWebAppResizeWindow",{width:700,height:700}).then((function(e){})).catch((function(e){console.log("VKWebAppResizeWindow error",e)})),L.a.send("VKWebAppScroll",{top:0,speed:500}))}},G=t.p+"static/media/bg.2be777a1.svg",q=function(e){Object(U.a)(t,e);var n=Object(Y.a)(t);function t(){var e;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).componentDidMount=function(){},e.componentDidUpdate=function(){},e.colorize=function(n,t){return e.props.digitsCount[t]>2?e.format(n+" green-text",t):e.props.digitsCount[t]>1?e.format(n+" red-text",t):e.format(n,t)},e.format=function(e,n){return e},e.render=function(){var n="".concat(e.props.arkanes[1],"_").concat(e.props.arkanes[2],"_").concat(e.props.arkanes[3],"_").concat(e.props.arkanes[4],"_").concat(e.props.arkanes[5],"_").concat(e.props.arkanes[6],"_").concat(e.props.arkanes[7],"_").concat(e.props.arkanes[8],"_").concat(e.props.arkanes[9]),t="".concat(e.props.soulAge,"_").concat(e.props.innerChild,"_").concat(e.props.energyArkanes.k),r="".concat(e.props.energyArkanes.m).concat(e.props.maleIsFlipped?"m":"","_").concat(e.props.energyArkanes.f).concat(e.props.femaleIsFlipped?"m":""),a=String(e.props.longKarma).replace(", ","x").replace(", ","x").replace(", ","x").replace(",","x").replace(",","x").replace(",","x"),o="https://t.me/num_navigator_bot?start=wlcres_".concat(n,"p").concat(t,"e").concat(r,"k").concat(a);return Object(K.jsxs)("div",{className:"result",style:{display:"flex"},children:[Object(K.jsxs)("div",{className:"container data",children:[Object(K.jsxs)("div",{className:"figure",style:{backgroundImage:"url(".concat(G,")")},children:[Object(K.jsx)("span",{className:e.format("point point-1",e.props.arkanes[1]),children:Object(K.jsx)("div",{children:e.props.arkanes[1]})}),Object(K.jsx)("span",{className:e.format("point point-2",e.props.arkanes[2]),children:Object(K.jsx)("div",{children:e.props.arkanes[2]})}),Object(K.jsx)("span",{className:e.format("point point-3",e.props.arkanes[3]),children:Object(K.jsx)("div",{children:e.props.arkanes[3]})}),Object(K.jsx)("span",{className:e.format("point point-4",e.props.arkanes[4]),children:Object(K.jsx)("div",{children:e.props.arkanes[4]})}),Object(K.jsx)("span",{className:e.format("point point-5",e.props.arkanes[5]),children:Object(K.jsx)("div",{children:e.props.arkanes[5]})}),Object(K.jsx)("span",{className:e.format("point point-6",e.props.arkanes[6]),children:Object(K.jsx)("div",{children:e.props.arkanes[6]})}),Object(K.jsx)("span",{className:e.format("point point-7",e.props.arkanes[7]),children:Object(K.jsx)("div",{children:e.props.arkanes[7]})}),Object(K.jsx)("span",{className:e.format("point point-8",e.props.arkanes[8]),children:Object(K.jsx)("div",{children:e.props.arkanes[8]})}),Object(K.jsx)("span",{className:e.format("point point-9",e.props.arkanes[9]),children:Object(K.jsx)("div",{children:e.props.arkanes[9]})})]}),Object(K.jsxs)("div",{className:"information",children:[Object(K.jsxs)("p",{children:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u0443\u0448\u0438:",Object(K.jsx)("span",{className:"information_value information_age-soul red-text",children:e.props.soulAge})]}),Object(K.jsxs)("p",{children:["\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0440\u0435\u0431\u0435\u043d\u043e\u043a:",Object(K.jsx)("span",{className:"information_value information_male-arc red-text",children:e.props.innerChild})]}),Object(K.jsxs)("p",{children:["\u0414\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u0430\u044f \u043a\u0430\u0440\u043c\u0430:",Object(K.jsx)("span",{className:"information_value information_female-arc red-text",children:e.props.longKarma})]}),Object(K.jsxs)("p",{children:["\u041a\u0430\u0440\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0430\u0440\u043a\u0430\u043d\u044b:",Object(K.jsx)("span",{className:"information_value information_carm-arc red-text",children:e.props.energyArkanes.k})]}),Object(K.jsxs)("p",{children:["\u041c/\u0416 \u044d\u043d\u0435\u0440\u0433\u0438\u0438:",Object(K.jsxs)("span",{className:"information_value information_energy red-text",children:[e.props.energyArkanes.m,e.props.maleIsFlipped?"-":"","/",e.props.energyArkanes.f,e.props.femaleIsFlipped?"-":""]})]})]})]}),Object(K.jsx)("p",{children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435?"}),Object(K.jsx)("a",{href:o,className:"button button--red ",target:"_blank",rel:"noopener noreferrer",children:"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430"}),Object(K.jsx)("div",{className:"container buttons",children:Object(K.jsx)("button",{className:"button",onClick:e.props.onReset,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})})]})},e}return t}(a.a.Component),Q=function(e){return e<10?"0"+String(e):String(e)},X=Object(i.b)((function(e,n){return{routeName:e.router.routeName,birthDayInput:Q(e.user.birthDay),birthMonthInput:Q(e.user.birthMonth),birthYearInput:(t=e.user.birthYear,t<10?"000"+String(t):t<100?"00"+String(t):t<1e3?"0"+String(t):String(t)),arkanes:e.user.arkanes,innerArkanes:e.user.innerArkanes,soulAge:e.user.soulAge,innerChild:e.user.innerChild,longKarma:e.user.longKarma,genderArkanes:e.user.genderArkanes,energyArkanes:e.user.energyArkanes,digitsCount:e.user.digitsCount,maleIsFlipped:e.user.maleIsFlipped,femaleIsFlipped:e.user.femaleIsFlipped};var t}),(function(e){return{onReset:function(){e(J())},onShare:function(){},onDecode:function(){e((function(e,n){var t=n();e(N(P)),t.app.searchParams&&t.app.searchParams.vk_platform&&"desktop_web"===t.app.searchParams.vk_platform&&L.a.send("VKWebAppResizeWindow",{width:700,height:930}).then((function(e){})).catch((function(e){console.log("VKWebAppResizeWindow error",e)}))}))}}}))(q),Z=function(e){Object(U.a)(t,e);var n=Object(Y.a)(t);function t(){var e;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).componentDidMount=function(){},e.componentDidUpdate=function(){},e.renderContent=function(){},e.render=function(){return Object(K.jsxs)("div",{className:"decoding container column center",children:[Object(K.jsx)("h2",{className:"h2margin",children:"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0439"}),Object(K.jsxs)("div",{className:"decoding__info container column",children:[Object(K.jsx)("p",{children:Object(K.jsx)("b",{children:"\u0412 \u0432\u0430\u0448\u0435\u043c \u041a\u043e\u0434\u0435 \u0416\u0438\u0437\u043d\u0438:"})}),Object(K.jsx)("p",{children:"\u043f.1 - \u043d\u0430\u0448\u0435 \u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043d\u0430\u0448 \u0430\u0440\u0445\u0435\u0442\u0438\u043f \u0438 \u043d\u0430\u0448\u0430 \u0441\u0438\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f."}),Object(K.jsx)("p",{children:"\u043f.2 - \u0423\u0440\u043e\u043a \u0436\u0438\u0437\u043d\u0438, \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u0439 \u0443\u0440\u043e\u043a \u043f\u0440\u043e\u0448\u043b\u043e\u0433\u043e \u0432\u043e\u043f\u043b\u043e\u0449\u0435\u043d\u0438\u044f \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430."}),Object(K.jsx)("p",{children:"\u043f.3 - \u042d\u043d\u0435\u0440\u0433\u0438\u044f \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0430\u0442\u043e\u0440. \u041d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0431\u044b\u0432\u0430\u0435\u0442 \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e + \u0438\u043b\u0438 -. \u0412\u0441\u0435\u0433\u0434\u0430 \u0437\u0430\u0434\u0430\u0451\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u0434\u0430\u0451\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0436\u0438\u0437\u043d\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u0432 \u0440\u0443\u043a\u0438."}),Object(K.jsx)("p",{children:"\u043f.4 - \u0441\u0430\u043c\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u0430\u044f \u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043d\u0430\u0448\u0435\u0433\u043e \u041a\u043e\u0434\u0430 \u0416\u0438\u0437\u043d\u0438. \u042d\u0442\u043e \u043a\u0430\u0440\u043c\u0430 \u043f\u0440\u043e\u0448\u043b\u043e\u0433\u043e, \u043d\u0430\u0448\u0430 \u0422\u0415\u041d\u042c. \u042d\u0442\u043e \u0442\u0440\u0430\u0432\u043c\u0430 \u0434\u0435\u0442\u0441\u0442\u0432\u0430 \u0438 \u0433\u043e\u043b\u043e\u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0438 \u043a\u0440\u0438\u0442\u0438\u043a\u0438, \u044d\u0442\u043e \u043d\u0430\u0448\u0438 \u0441\u0442\u0440\u0430\u0445\u0438 \u0438 \u043d\u0430\u0448\u0438 \xab\u0433\u0440\u0430\u0431\u043b\u0438\xbb."}),Object(K.jsx)("p",{children:"\u043f.5 - \u043d\u0430\u0448\u0430 \u043c\u0430\u0441\u043a\u0430 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435\u0435 \u043f\u043b\u0430\u0442\u044c\u0435/\u043a\u043e\u0441\u0442\u044e\u043c \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043c\u044b \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c, \u0436\u0438\u0442\u044c \u0438\u043b\u0438 \u0438\u0433\u0440\u0430\u0442\u044c."}),Object(K.jsx)("p",{children:"\u043f.6 - \u043d\u0430\u0448 \u0442\u0430\u043b\u0430\u043d\u0442, \u0442\u0435\u043c\u0430 \u0436\u0438\u0437\u043d\u0438 \u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0436\u0438\u0437\u043d\u0438."}),Object(K.jsx)("p",{children:"\u043f.7 - \u043c\u0438\u0441\u0441\u0438\u044f/\u043b\u0436\u0435\u043c\u0438\u0441\u0441\u0438\u044f, \u0442\u043e, \u0447\u0442\u043e \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u044d\u0442\u043e\u0439 \u0436\u0438\u0437\u043d\u0438."}),Object(K.jsx)("p",{children:"\u043f.8 - \u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c, \u043f\u043e\u043c\u043e\u0449\u044c \u0412\u044b\u0441\u0448\u0435\u0433\u043e \u042f, \u0411\u043e\u0433\u0430, \u0430\u043d\u0433\u0435\u043b\u043e\u0432."}),Object(K.jsx)("p",{children:"\u043f.9 - \u043a\u0435\u043c \u0431\u044b\u043b \u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u0439 \u0436\u0438\u0437\u043d\u0438."}),Object(K.jsx)("p",{children:"\u043f.10 - \u0447\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043b."}),Object(K.jsx)("p",{children:"\u043f.11 - \u043a\u0430\u0440\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430, \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f."}),Object(K.jsx)("p",{children:"\u043f.12 - \u0437\u043e\u043d\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430. \u042d\u0442\u043e \u0442\u043e, \u043a \u0447\u0435\u043c\u0443 \u0441\u0442\u0440\u0435\u043c\u0438\u043c\u0441\u044f, \u0442\u043e, \u0447\u0435\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u043c \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0442\u044c."})]}),Object(K.jsxs)("div",{className:"decoding__action container column center",children:[Object(K.jsx)("h3",{children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435?"}),Object(K.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.171 512.171",fill:"red",width:"150px",children:Object(K.jsx)("g",{children:Object(K.jsx)("path",{d:"M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z",stroke:"black",strokeWidth:"5"})})}),Object(K.jsx)("a",{href:"https://nymerologyschool.ru/lifecodemethod",className:"button button--red ",target:"_blank",rel:"noopener noreferrer",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"}),Object(K.jsx)("div",{})]}),Object(K.jsx)("div",{style:{paddingTop:"25px"},children:Object(K.jsx)("button",{className:"decoding_new",onClick:e.props.onReset,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})})]})},e}return t}(a.a.Component),$=Object(i.b)((function(e,n){return{routeName:e.router.routeName,birthDayInput:e.user.birthDayInput,birthMonthInput:e.user.birthMonthInput,birthYearInput:e.user.birthYearInput}}),(function(e){return{onDownload:function(){},onReset:function(){e(J())}}}))(Z),ee=function(e){Object(U.a)(t,e);var n=Object(Y.a)(t);function t(){var e;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).componentDidMount=function(){},e.componentDidUpdate=function(){},e.renderContent=function(){switch(e.props.routeName){case E:return Object(K.jsx)(H,{});case T:return Object(K.jsx)(X,{});case P:return Object(K.jsx)($,{})}return Object(K.jsx)(H,{})},e.render=function(){var n="desktop";return e.props.isMobileView&&(n="mobile"),Object(K.jsx)("main",{className:n,children:e.renderContent()})},e}return t}(a.a.Component),ne=Object(i.b)((function(e,n){return{routeName:e.router.routeName,isMobileView:e.app.isMobileView}}))(ee),te=function(e){Object(U.a)(t,e);var n=Object(Y.a)(t);function t(){var e;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).componentDidMount=function(){e.props.onComponentDidMount()},e.render=function(){return Object(K.jsx)(ne,{id:"mainPanel"})},e}return t}(a.a.Component),re=Object(i.b)((function(e){return{appTitle:e.app.title}}),(function(e){return{setRootPopout:function(e){},onComponentDidMount:function(){e((function(e,n){console.log(window.screen.width),console.log(window.screen.height);var t=window.navigator&&window.navigator.userAgent||"default";(window.screen.width/window.screen.height<.9||window.screen.width<777||t.indexOf("iPhone")>-1||t.indexOf("Android")>-1||t.indexOf("mobile")>-1)&&e(_({isMobileView:!0}))}))},onMainViewTransition:function(e){}}}))(te);c.a.render(Object(K.jsx)(i.a,{store:M,children:Object(K.jsx)(re,{})}),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.1c747c4b.chunk.js.map
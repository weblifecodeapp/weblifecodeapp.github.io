(this.webpackJsonparkane=this.webpackJsonparkane||[]).push([[0],{138:function(n,e,t){},147:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),s=t(8),i=t(20),p=(t(136),t(26)),u=t(3),l={id:0,isAuth:!1,firstName:null,lastName:null,vkData:{},birthDayInput:"",birthMonthInput:"",birthYearInput:"",birthDay:0,birthMonth:0,birthYear:0,arkanes:[0,0,0,0,0,0,0,0,0,0,0,0],innerArkanes:[0,0,0,0,0],soulAge:0,innerChild:0,longKarma:"",genderArkanes:{u:0,m:0,f:0,n:0},energyArkanes:{m:0,f:0,k:0},digitsCount:new Array(23).fill(0),maleIsFlipped:!1,femaleIsFlipped:!1},d="USER_UPDATE_B_YEAR",h=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:d,payload:x(n,4),focusNextFunc:e}},b="USER_UPDATE_B_MONTH",f=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:b,payload:x(n),focusNextFunc:e}},j="USER_UPDATE_B_DAY",m=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:j,payload:x(n),focusNextFunc:e}},O="USER_UPDATE_STATE_PARAMS",g=function(n){return{type:O,payload:n}},x=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(n).replace(/\D/gi,"").substr(0,e)},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!n||"function"!==typeof n)return!1;setTimeout((function(){n()}),0)},y={title:"Arkane",locationSearch:"",locationHash:"",searchParams:{},hashParams:{},appID:7839536,apiToken:null,apiTokenByPermission:{},currentWidth:0,currentHeight:0,appIsLoading:!1,isMobileView:!1},I="APP_SET_IS_LOADING",k="APP_UPDATE_STATE_PARAMS",_=function(n){return{type:k,payload:n}},A={routeName:""},w="ROUTER_SET_ROUTE_NAME",N=function(n){return{type:w,payload:n}},D="ROUTER_UPDATE_PARAMS",R=Object(i.b)({app:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return Object(u.a)(Object(u.a)({},n),{},{appIsLoading:!0===e.payload});case k:return Object(u.a)(Object(u.a)({},n),e.payload)}return n},router:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return Object(u.a)(Object(u.a)({},n),{},{routeName:e.payload});case D:return Object(u.a)(Object(u.a)({},n),e.payload)}return n},user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(u.a)(Object(u.a)({},n),e.payload);case j:return(e.payload.length>1||parseInt(e.payload,10)>3&&parseInt(e.payload,10)<=9)&&v(e.focusNextFunc),Object(u.a)(Object(u.a)({},n),{},{birthDayInput:e.payload});case b:return(e.payload.length>1||parseInt(e.payload,10)>1&&parseInt(e.payload,10)<=9)&&v(e.focusNextFunc),Object(u.a)(Object(u.a)({},n),{},{birthMonthInput:e.payload});case d:return Object(u.a)(Object(u.a)({},n),{},{birthYearInput:e.payload})}return n}}),C=[p.a],M=Object(i.c)(R,i.a.apply(void 0,C)),E="ROUTE_DATE_PICKER",T="ROUTE_RESULT",P="ROUTE_ARKANE_DECODE";M.dispatch(_({locationHash:window.location.hash||"",locationSearch:window.location.search||""})),M.dispatch(N(E));t(138);var S=t(9),U=t(11),Y=t(10),F=t(19),K=(t(145),t(1)),B=function(n){Object(U.a)(t,n);var e=Object(Y.a)(t);function t(){var n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).componentDidMount=function(){},n.componentDidUpdate=function(){},n.render=function(){return Object(K.jsxs)(F.b,{id:n.props.id,children:[Object(K.jsx)(F.c,{children:n.props.title}),Object(K.jsx)(F.a,{children:"Preloader..."})]})},n}return t}(a.a.Component),V=(Object(s.b)((function(n,e){return{id:e.id,title:n.vkui.appTitle}}))(B),function n(e){return 0==e?22:e<=22?e:n(e-22)}),W=function(n){Object(U.a)(t,n);var e=Object(Y.a)(t);function t(n){var r;return Object(S.a)(this,t),(r=e.call(this,n)).componentDidMount=function(){r.focusDayInput()},r.componentDidUpdate=function(){},r.focusDayInput=function(){r.dayInputRef&&r.dayInputRef.focus&&r.dayInputRef.focus()},r.focusMonthInput=function(){r.monthInputRef&&r.monthInputRef.focus&&r.monthInputRef.focus()},r.focusYearInput=function(){r.yearInputRef&&r.yearInputRef.focus&&r.yearInputRef.focus()},r.setDayInputRef=function(n){r.dayInputRef=n},r.setMonthInputRef=function(n){r.monthInputRef=n},r.setYearInputRef=function(n){r.yearInputRef=n},r.render=function(){return Object(K.jsxs)("form",{className:"sum",children:[Object(K.jsxs)("h1",{children:["\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0432\u043e\u0439 ",Object(K.jsx)("b",{children:"\u043a\u043e\u0434 \u0436\u0438\u0437\u043d\u0438"})]}),Object(K.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(K.jsxs)("div",{className:"inputs",children:[Object(K.jsx)("input",{type:"text",placeholder:"\u0434\u0434",value:r.props.birthDayInput,onChange:function(n){r.props.onChangeBirthDay(n,r.focusMonthInput)},ref:r.setDayInputRef}),Object(K.jsx)("input",{type:"text",placeholder:"\u043c\u043c",value:r.props.birthMonthInput,onChange:function(n){r.props.onChangeBirthMonth(n,r.focusYearInput)},ref:r.setMonthInputRef}),Object(K.jsx)("input",{type:"text",placeholder:"\u0433\u0433\u0433\u0433",value:r.props.birthYearInput,onChange:r.props.onChangeBirthYear,ref:r.setYearInputRef})]}),Object(K.jsx)("button",{className:"button",type:"button",onClick:r.props.onCalculate,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})},r.dayInputRef=null,r.monthInputRef=null,r.yearInputRef=null,r}return t}(a.a.Component),H=Object(s.b)((function(n,e){return{routeName:n.router.routeName,birthDayInput:n.user.birthDayInput,birthMonthInput:n.user.birthMonthInput,birthYearInput:n.user.birthYearInput}}),(function(n){return{onChangeBirthDay:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(m(e.target.value,t))},onChangeBirthMonth:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(f(e.target.value,t))},onChangeBirthYear:function(e){n(h(e.target.value))},onCalculate:function(){n((function(n,e){var t=e(),r=parseInt(t.user.birthDayInput,10)||0,a=parseInt(t.user.birthMonthInput,10)||0,o=parseInt(t.user.birthYearInput,10)||0,c=[0,V(r),V(a)];c[3]=V(String(o).split("").reduce((function(n,e){return n+parseInt(e,10)}),0)),c[4]=V(c[1]+c[2]),c[5]=V(c[2]+c[3]),c[6]=V(c[4]+c[5]),c[7]=V(c[1]+c[4]),c[8]=V(c[2]+c[4]),c[9]=V(c[2]+c[5]),c[10]=1,c[11]=1,c[12]=1,c[13]=1,c[14]=1,c[15]=1;var s=Math.max(c[1],c[2],c[3],c[4],c[5],c[6],c[7]);console.log("soulAge",s);var i=c[8],p=[c[4]],u=[c[1],c[2],c[3],c[5],c[6]],l=[];u.forEach((function(n){l.includes(n)&&!p.includes(n)&&p.push(n),l.push(n)}));var d=p.join(", ");console.log("longKarma",d);var h=[V(c[9]+c[10]+c[11]),V(c[1]+c[2]+c[4]),V(c[2]+c[3]+c[5]),V(c[2]+c[4]+c[5]),V(c[4]+c[5]+c[6])],b=["u","m","f","f","m","m","n","m","f","n","n","m","n","f","n","m","n","f","f","m","n","n","n"],f={u:0,m:0,f:0,n:0},j=new Array(23).fill(0),m=[c[4],c[1],c[2],c[3],c[5],c[6]];m.forEach((function(n){f[b[n]]++,j[n]++}));var O=[0,1,0,0,2,2,0,1,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0],x=[0,0,2,2,0,0,0,0,1,0,0,0,0,1,0,0,0,1,2,0,0,0,0],v=[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0],y={m:0,f:0,k:0};m.forEach((function(n){y.m+=O[n],y.f+=x[n],y.k+=v[n]}));var I=[c[4]];j.forEach((function(n,e){n>1&&I.push(e)}));var k=[1,4,5,7,11,15,19],_=[2,3,8,13,17,18],A=!1,w=!1;I.forEach((function(n){k.includes(n)&&(A=!0),_.includes(n)&&(w=!0)})),n(g({birthDay:r,birthMonth:a,birthYear:o,arkanes:c,innerArkanes:h,soulAge:s,innerChild:i,longKarma:d,genderArkanes:f,energyArkanes:y,digitsCount:j,maleIsFlipped:A,femaleIsFlipped:w})),n(N(T))}))}}}))(W),z=t(17),L=t.n(z),J=function(){return function(n,e){var t=e();n(g({birthDayInput:"",birthMonthInput:"",birthYearInput:""})),n(N(E)),t.app.searchParams&&t.app.searchParams.vk_platform&&"desktop_web"===t.app.searchParams.vk_platform&&(L.a.send("VKWebAppResizeWindow",{width:700,height:700}).then((function(n){})).catch((function(n){console.log("VKWebAppResizeWindow error",n)})),L.a.send("VKWebAppScroll",{top:0,speed:500}))}},G=t.p+"static/media/bg.2be777a1.svg",q=function(n){Object(U.a)(t,n);var e=Object(Y.a)(t);function t(){var n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).componentDidMount=function(){},n.componentDidUpdate=function(){},n.colorize=function(e,t){return n.props.digitsCount[t]>2?n.format(e+" green-text",t):n.props.digitsCount[t]>1?n.format(e+" red-text",t):n.format(e,t)},n.format=function(n,e){return n},n.render=function(){var e="".concat(n.props.arkanes[1],"_").concat(n.props.arkanes[2],"_").concat(n.props.arkanes[3],"_").concat(n.props.arkanes[4],"_").concat(n.props.arkanes[5],"_").concat(n.props.arkanes[6],"_").concat(n.props.arkanes[7],"_").concat(n.props.arkanes[8],"_").concat(n.props.arkanes[9]),t="".concat(n.props.soulAge,"_").concat(n.props.innerChild,"_").concat(n.props.energyArkanes.k),r="".concat(n.props.energyArkanes.m).concat(n.props.maleIsFlipped?"m":"","_").concat(n.props.energyArkanes.f).concat(n.props.femaleIsFlipped?"m":""),a=String(n.props.longKarma).replace(", ","x").replace(", ","x").replace(", ","x").replace(",","x").replace(",","x").replace(",","x"),o="https://t.me/num_navigator_bot?start=wlcres_".concat(e,"p").concat(t,"e").concat(r,"k").concat(a);return Object(K.jsxs)("div",{className:"result",style:{display:"flex"},children:[Object(K.jsxs)("h2",{className:"h2margin",children:["\u0412\u0430\u0448\u0430 \u0434\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",Object(K.jsx)("br",{}),Object(K.jsx)("span",{children:"".concat(n.props.birthDayInput,".").concat(n.props.birthMonthInput,".").concat(n.props.birthYearInput)})]}),Object(K.jsxs)("div",{className:"container data",children:[Object(K.jsxs)("div",{className:"figure",style:{backgroundImage:"url(".concat(G,")")},children:[Object(K.jsx)("span",{className:n.format("point point-1",n.props.arkanes[1]),children:Object(K.jsx)("div",{children:n.props.arkanes[1]})}),Object(K.jsx)("span",{className:n.format("point point-2",n.props.arkanes[2]),children:Object(K.jsx)("div",{children:n.props.arkanes[2]})}),Object(K.jsx)("span",{className:n.format("point point-3",n.props.arkanes[3]),children:Object(K.jsx)("div",{children:n.props.arkanes[3]})}),Object(K.jsx)("span",{className:n.format("point point-4",n.props.arkanes[4]),children:Object(K.jsx)("div",{children:n.props.arkanes[4]})}),Object(K.jsx)("span",{className:n.format("point point-5",n.props.arkanes[5]),children:Object(K.jsx)("div",{children:n.props.arkanes[5]})}),Object(K.jsx)("span",{className:n.format("point point-6",n.props.arkanes[6]),children:Object(K.jsx)("div",{children:n.props.arkanes[6]})}),Object(K.jsx)("span",{className:n.format("point point-7",n.props.arkanes[7]),children:Object(K.jsx)("div",{children:n.props.arkanes[7]})}),Object(K.jsx)("span",{className:n.format("point point-8",n.props.arkanes[8]),children:Object(K.jsx)("div",{children:n.props.arkanes[8]})}),Object(K.jsx)("span",{className:n.format("point point-9",n.props.arkanes[9]),children:Object(K.jsx)("div",{children:n.props.arkanes[9]})})]}),Object(K.jsxs)("div",{className:"information",children:[Object(K.jsxs)("p",{children:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u0443\u0448\u0438:",Object(K.jsx)("span",{className:"information_value information_age-soul red-text",children:n.props.soulAge})]}),Object(K.jsxs)("p",{children:["\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0440\u0435\u0431\u0435\u043d\u043e\u043a:",Object(K.jsx)("span",{className:"information_value information_male-arc red-text",children:n.props.innerChild})]}),Object(K.jsxs)("p",{children:["\u0414\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u0430\u044f \u043a\u0430\u0440\u043c\u0430:",Object(K.jsx)("span",{className:"information_value information_female-arc red-text",children:n.props.longKarma})]}),Object(K.jsxs)("p",{children:["\u041a\u0430\u0440\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0430\u0440\u043a\u0430\u043d\u044b:",Object(K.jsx)("span",{className:"information_value information_carm-arc red-text",children:n.props.energyArkanes.k})]}),Object(K.jsxs)("p",{children:["\u041c/\u0416 \u044d\u043d\u0435\u0440\u0433\u0438\u0438:",Object(K.jsxs)("span",{className:"information_value information_energy red-text",children:[n.props.energyArkanes.m,n.props.maleIsFlipped?"-":"","/",n.props.energyArkanes.f,n.props.femaleIsFlipped?"-":""]})]})]})]}),Object(K.jsx)("p",{children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435?"}),Object(K.jsx)("a",{href:o,className:"button button--red ",target:"_blank",rel:"noopener noreferrer",children:"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430"}),Object(K.jsx)("div",{className:"container buttons",children:Object(K.jsx)("button",{className:"button",onClick:n.props.onReset,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})})]})},n}return t}(a.a.Component),Q=function(n){return n<10?"0"+String(n):String(n)},X=Object(s.b)((function(n,e){return{routeName:n.router.routeName,birthDayInput:Q(n.user.birthDay),birthMonthInput:Q(n.user.birthMonth),birthYearInput:(t=n.user.birthYear,t<10?"000"+String(t):t<100?"00"+String(t):t<1e3?"0"+String(t):String(t)),arkanes:n.user.arkanes,innerArkanes:n.user.innerArkanes,soulAge:n.user.soulAge,innerChild:n.user.innerChild,longKarma:n.user.longKarma,genderArkanes:n.user.genderArkanes,energyArkanes:n.user.energyArkanes,digitsCount:n.user.digitsCount,maleIsFlipped:n.user.maleIsFlipped,femaleIsFlipped:n.user.femaleIsFlipped};var t}),(function(n){return{onReset:function(){n(J())},onShare:function(){},onDecode:function(){n((function(n,e){var t=e();n(N(P)),t.app.searchParams&&t.app.searchParams.vk_platform&&"desktop_web"===t.app.searchParams.vk_platform&&L.a.send("VKWebAppResizeWindow",{width:700,height:930}).then((function(n){})).catch((function(n){console.log("VKWebAppResizeWindow error",n)}))}))}}}))(q),Z=function(n){Object(U.a)(t,n);var e=Object(Y.a)(t);function t(){var n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).componentDidMount=function(){},n.componentDidUpdate=function(){},n.renderContent=function(){},n.render=function(){return Object(K.jsxs)("div",{className:"decoding container column center",children:[Object(K.jsx)("h2",{className:"h2margin",children:"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0439"}),Object(K.jsxs)("div",{className:"decoding__info container column",children:[Object(K.jsx)("p",{children:Object(K.jsx)("b",{children:"\u0412 \u0432\u0430\u0448\u0435\u043c \u041a\u043e\u0434\u0435 \u0416\u0438\u0437\u043d\u0438:"})}),Object(K.jsx)("p",{children:"\u043f.1 - \u043d\u0430\u0448\u0435 \u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043d\u0430\u0448 \u0430\u0440\u0445\u0435\u0442\u0438\u043f \u0438 \u043d\u0430\u0448\u0430 \u0441\u0438\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f."}),Object(K.jsx)("p",{children:"\u043f.2 - \u0423\u0440\u043e\u043a \u0436\u0438\u0437\u043d\u0438, \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u0439 \u0443\u0440\u043e\u043a \u043f\u0440\u043e\u0448\u043b\u043e\u0433\u043e \u0432\u043e\u043f\u043b\u043e\u0449\u0435\u043d\u0438\u044f \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430."}),Object(K.jsx)("p",{children:"\u043f.3 - \u042d\u043d\u0435\u0440\u0433\u0438\u044f \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0430\u0442\u043e\u0440. \u041d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0431\u044b\u0432\u0430\u0435\u0442 \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e + \u0438\u043b\u0438 -. \u0412\u0441\u0435\u0433\u0434\u0430 \u0437\u0430\u0434\u0430\u0451\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u0434\u0430\u0451\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0436\u0438\u0437\u043d\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u0432 \u0440\u0443\u043a\u0438."}),Object(K.jsx)("p",{children:"\u043f.4 - \u0441\u0430\u043c\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u0430\u044f \u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043d\u0430\u0448\u0435\u0433\u043e \u041a\u043e\u0434\u0430 \u0416\u0438\u0437\u043d\u0438. \u042d\u0442\u043e \u043a\u0430\u0440\u043c\u0430 \u043f\u0440\u043e\u0448\u043b\u043e\u0433\u043e, \u043d\u0430\u0448\u0430 \u0422\u0415\u041d\u042c. \u042d\u0442\u043e \u0442\u0440\u0430\u0432\u043c\u0430 \u0434\u0435\u0442\u0441\u0442\u0432\u0430 \u0438 \u0433\u043e\u043b\u043e\u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0438 \u043a\u0440\u0438\u0442\u0438\u043a\u0438, \u044d\u0442\u043e \u043d\u0430\u0448\u0438 \u0441\u0442\u0440\u0430\u0445\u0438 \u0438 \u043d\u0430\u0448\u0438 \xab\u0433\u0440\u0430\u0431\u043b\u0438\xbb."}),Object(K.jsx)("p",{children:"\u043f.5 - \u043d\u0430\u0448\u0430 \u043c\u0430\u0441\u043a\u0430 \u0438\u043b\u0438 \u043b\u0443\u0447\u0448\u0435\u0435 \u043f\u043b\u0430\u0442\u044c\u0435/\u043a\u043e\u0441\u0442\u044e\u043c \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043c\u044b \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c, \u0436\u0438\u0442\u044c \u0438\u043b\u0438 \u0438\u0433\u0440\u0430\u0442\u044c."}),Object(K.jsx)("p",{children:"\u043f.6 - \u043d\u0430\u0448 \u0442\u0430\u043b\u0430\u043d\u0442, \u0442\u0435\u043c\u0430 \u0436\u0438\u0437\u043d\u0438 \u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0436\u0438\u0437\u043d\u0438."}),Object(K.jsx)("p",{children:"\u043f.7 - \u043c\u0438\u0441\u0441\u0438\u044f/\u043b\u0436\u0435\u043c\u0438\u0441\u0441\u0438\u044f, \u0442\u043e, \u0447\u0442\u043e \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u044d\u0442\u043e\u0439 \u0436\u0438\u0437\u043d\u0438."}),Object(K.jsx)("p",{children:"\u043f.8 - \u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c, \u043f\u043e\u043c\u043e\u0449\u044c \u0412\u044b\u0441\u0448\u0435\u0433\u043e \u042f, \u0411\u043e\u0433\u0430, \u0430\u043d\u0433\u0435\u043b\u043e\u0432."}),Object(K.jsx)("p",{children:"\u043f.9 - \u043a\u0435\u043c \u0431\u044b\u043b \u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u0439 \u0436\u0438\u0437\u043d\u0438."}),Object(K.jsx)("p",{children:"\u043f.10 - \u0447\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043b."}),Object(K.jsx)("p",{children:"\u043f.11 - \u043a\u0430\u0440\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430, \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f."}),Object(K.jsx)("p",{children:"\u043f.12 - \u0437\u043e\u043d\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430. \u042d\u0442\u043e \u0442\u043e, \u043a \u0447\u0435\u043c\u0443 \u0441\u0442\u0440\u0435\u043c\u0438\u043c\u0441\u044f, \u0442\u043e, \u0447\u0435\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u043c \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0442\u044c."})]}),Object(K.jsxs)("div",{className:"decoding__action container column center",children:[Object(K.jsx)("h3",{children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435?"}),Object(K.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.171 512.171",fill:"red",width:"150px",children:Object(K.jsx)("g",{children:Object(K.jsx)("path",{d:"M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971 c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627 l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504 C479.793,292.501,480.71,287.915,479.046,283.925z",stroke:"black",strokeWidth:"5"})})}),Object(K.jsx)("a",{href:"https://nymerologyschool.ru/lifecodemethod",className:"button button--red ",target:"_blank",rel:"noopener noreferrer",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"}),Object(K.jsx)("div",{})]}),Object(K.jsx)("div",{style:{paddingTop:"25px"},children:Object(K.jsx)("button",{className:"decoding_new",onClick:n.props.onReset,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})})]})},n}return t}(a.a.Component),$=Object(s.b)((function(n,e){return{routeName:n.router.routeName,birthDayInput:n.user.birthDayInput,birthMonthInput:n.user.birthMonthInput,birthYearInput:n.user.birthYearInput}}),(function(n){return{onDownload:function(){},onReset:function(){n(J())}}}))(Z),nn=function(n){Object(U.a)(t,n);var e=Object(Y.a)(t);function t(){var n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).componentDidMount=function(){},n.componentDidUpdate=function(){},n.renderContent=function(){switch(n.props.routeName){case E:return Object(K.jsx)(H,{});case T:return Object(K.jsx)(X,{});case P:return Object(K.jsx)($,{})}return Object(K.jsx)(H,{})},n.render=function(){var e="desktop";return n.props.isMobileView&&(e="mobile"),Object(K.jsx)("main",{className:e,children:n.renderContent()})},n}return t}(a.a.Component),en=Object(s.b)((function(n,e){return{routeName:n.router.routeName,isMobileView:n.app.isMobileView}}))(nn),tn=function(n){Object(U.a)(t,n);var e=Object(Y.a)(t);function t(){var n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).componentDidMount=function(){n.props.onComponentDidMount()},n.render=function(){return Object(K.jsx)(en,{id:"mainPanel"})},n}return t}(a.a.Component),rn=Object(s.b)((function(n){return{appTitle:n.app.title}}),(function(n){return{setRootPopout:function(n){},onComponentDidMount:function(){n((function(n,e){console.log(window.screen.width),console.log(window.screen.height);var t=window.navigator&&window.navigator.userAgent||"default";(window.screen.width/window.screen.height<.9||window.screen.width<777||t.indexOf("iPhone")>-1||t.indexOf("Android")>-1||t.indexOf("mobile")>-1)&&n(_({isMobileView:!0}))}))},onMainViewTransition:function(n){}}}))(tn);c.a.render(Object(K.jsx)(s.a,{store:M,children:Object(K.jsx)(rn,{})}),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.e4ff1fe2.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7511],{4362:function(e){e.exports=function(e,t){e.res?(e.res.writeHead(302,{Location:t}),e.res.end()):document.location.pathname=t}},4730:function(e,t,a){"use strict";var s=a(8142),r=a(1664),n=(a(6808),a(9669),a(1163)),l=a(4985),o=a.n(l),i=(a(4202),a(4362),a(2378)),c=a.n(i),d=s.default.createElement,f=a(2378).langs,m={tr:"tr",en:"us"};t.Z=function(e){var t=e.user,a=e.userIsStaff,l=e.userIsAdmin,i=e.lang,p=(0,n.useRouter)(),u=p.asPath;if(t)if(a){if(l||!o().onlyAdminPages.includes(p.pathname))return d(s.default.Fragment,null,d("title",null,o().siteName),d("div",{className:"fixed flex flex-col top-0 left-0 w-16 md:w-64 bg-gray-900 h-full shadow-lg"},d("div",{className:"flex items-center pl-3 md:pl-6 h-20 border-b border-gray-800"},d("img",{src:t.avatar?"https://cdn.discordapp.com/avatars/".concat(t.id,"/").concat(t.avatar,".webp?size=1024"):"https://cdn.discordapp.com/embed/avatars/".concat(Math.floor(4*Math.random()),".png"),alt:"",className:"rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-green-500"}),d("div",{className:"ml-1 hidden md:block"},d("p",{className:"ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans"},decodeURIComponent(t.username))),d("div",{className:"px-5 hidden md:block"},d("div",{className:"flex flex-row items-center h-8"},d("div",{className:"dropdown-1 inline-block relative"},d("button",{className:"mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer inline-flex items-center focus:outline-none"},d("span",{className:"mr-1"},d("a",{className:"ml-2"},d("span",{className:"flag-icon flag-icon-".concat(m[i])}))),d("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},d("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})," ")),d("ul",{className:"dropdown-menu-1 absolute hidden text-gray-700 pt-1"},f.filter((function(e){return e!==i})).map((function(e,t){return d("li",{key:t},d("a",{href:"".concat(c().link(e,u)),className:"bg-blurple dark:bg-gray-800 mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer py-2 px-4 block whitespace-no-wrap"},d("span",{className:"flag-icon flag-icon-".concat(m[e])})))}))))))),d("div",{className:"overflow-y-auto overflow-x-hidden flex-grow"},d("ul",{className:"flex flex-col py-6 space-y-1"},d("li",{className:"px-5 hidden md:block"},d("div",{className:"flex flex-row items-center h-8"},d("div",{className:"flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"},c()("staff.sidebar.head",i)))),d("li",null,d(r.default,{href:"/staff"},d("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"home")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.home",i))))),d("li",null,d(r.default,{href:"/staff/punishments"},d("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"block")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.punishments",i))))),d("li",null,d(r.default,{href:"/staff/bots"},d("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"smart_toy")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.approvedBots",i))))),d("li",null,d(r.default,{href:"/staff/advertisements"},d("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"featured_video")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.ads",i))))),d("li",null,d(r.default,{href:"/staff/levelroles"},d("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"arrow_upward")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.levelRoles",i))))),d("li",null,d(r.default,{href:"/staff/certifiedbots"},d("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"verified")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.certifiedBots",i))))),d("li",null,d(r.default,{href:"/staff/pendingbots"},d("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"pending")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.waitingBots",i))))),d("li",{className:"px-5 hidden md:block"},d("div",{className:"flex flex-row items-center h-8"},d("div",{className:"flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"},c()("staff.sidebar.codeshare",i)))),d("li",null,d(r.default,{href:"/staff/codesettings"},d("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"settings")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.codeSettings",i))))),d("li",null,d(r.default,{href:"/staff/waitingcodes"},d("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"pending")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.waitingCodes",i))))),d("li",null,d(r.default,{href:"/staff/codes"},d("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"verified")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.approvedCodes",i))))),d("li",{className:"px-5 hidden md:block"},d("div",{className:"flex flex-row items-center h-8"},d("div",{className:"flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"},c()("staff.sidebar.settings",i)))),d("li",null,d(r.default,{href:"/staff/settings"},d("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"settings")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.settings",i))))),d("li",null,d(r.default,{href:"/staff/botquota"},d("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4"},d("span",{className:"material-icons"},"group")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.addBotQuota",i))))),d("li",null,d(r.default,{href:"/"},d("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6"},d("span",{className:"inline-flex justify-center items-center ml-4 text-red-400"},d("span",{className:"material-icons"},"logout")),d("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},c()("staff.sidebar.back",i)))))))));p.push("/staff")}else p.push("/staff");else p.push("/api/login")}},8455:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return C}});var s=a(7757),r=a.n(s),n=a(2137),l=a(6610),o=a(5991),i=a(5255),c=a(3724),d=a(7608),f=a(8142),m=a(4730),p=a(1664),u=a(9669),g=a.n(u),b=a(9249),x=a(2378),h=a.n(x),v=a(9008),N=f.default.createElement;function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=(0,d.Z)(e);if(t){var r=(0,d.Z)(this).constructor;a=Reflect.construct(s,arguments,r)}else a=s.apply(this,arguments);return(0,c.Z)(this,a)}}var w=a(4985),k=function(e){(0,i.Z)(a,e);var t=y(a);function a(e){var s;return(0,l.Z)(this,a),(s=t.call(this,e)).props.bots=JSON.parse(s.props.bots),s.state={bots:s.props.bots},s}return(0,o.Z)(a,[{key:"render",value:function(){var e=this;return N(f.default.Fragment,null,N(v.default,null,N("title",null,w.siteName," - ",h()("staff.sidebar.waitingBots",this.props.lang))),N(b.Ix,null),N("div",{className:"min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"},N(m.Z,{user:this.props.user,userIsStaff:this.props.userIsStaff,userIsAdmin:this.props.userIsAdmin,lang:this.props.lang}),N("div",{className:"bg-gray-900 h-screen w-screen px-16 md:px-64 p-6"},N("div",{className:"container mx-auto px-4 sm:px-8"},N("div",{className:"py-8"},N("div",null,N("h2",{className:"text-2xl font-semibold leading-tight text-gray-200"},h()("staff.pendingbots.head",this.props.lang))),N("div",{className:"my-2 flex sm:flex-row flex-col"},N("div",{className:"block relative"},N("span",{className:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},N("svg",{viewBox:"0 0 24 24",className:"h-4 w-4 fill-current bg-input text-gray-200"},N("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),N("input",{onChange:function(t){e.setState({bots:e.props.bots.filter((function(e){return e.bot.name.toLowerCase().includes(t.target.value.toLowerCase())}))})},placeholder:h()("botPlaceholder",this.props.lang),className:"appearance-none rounded-r rounded-l sm:rounded-l-none border border-b block pl-8 pr-6 py-2 w-full text-sm placeholder-gray-400 bg-input text-gray-200 focus:placeholder-gray-200 focus:outline-none border-none"}))),N("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},N("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"},N("table",{className:"min-w-full leading-normal"},N("thead",null,N("tr",null,N("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},h()("staff.pendingbots.name",this.props.lang)),N("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},h()("staff.pendingbots.owner",this.props.lang)),N("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},h()("staff.pendingbots.acts",this.props.lang)))),N("tbody",null,this.state.bots?this.state.bots.sort((function(e,t){return(t.votes||0)-(e.votes||0)})).map((function(t,a){return N("tr",null,N("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},N("div",{className:"flex items-center"},N("div",{className:"flex-shrink-0 w-10 h-10"},N("img",{className:"w-full h-full rounded-full",src:t.bot.avatar?"https://cdn.discordapp.com/avatars/".concat(t.bot.id,"/").concat(t.bot.avatar,".webp?size=1024"):"https://cdn.discordapp.com/embed/avatars/".concat(Math.floor(4*Math.random()),".png"),alt:""})),N("div",{className:"ml-3"},N("p",{className:"text-gray-200 whitespace-no-wrap"},t.bot.name)))),N("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},N("p",{className:"text-gray-200 whitespace-no-wrap"},decodeURIComponent(t.owner.tag))),N("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},N("div",{className:"flex"},N("div",{className:"badge cursor-pointer"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full",onClick:function(){var s=(0,n.Z)(r().mark((function s(n){return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,g()(w.siteURL+"/api/bots/remove",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:{bot:t.id,staff:e.props.user.id,botIndex:a,admin:"9wA7yggY0WI"}}).then((function(e){return e.data}));case 2:if(3!==s.sent.error){s.next=5;break}return s.abrupt("return",b.Am.error(h()("staff.pending.bots.regularly",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 5:b.Am.success(h()("staff.pendingbots.deleted",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}),e.setState({bots:e.props.bots.filter((function(e){return e.id!==t.id}))}),e.props.bots=e.state.bots.filter((function(e){return e.id!==t.id}));case 8:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},h()("staff.pendingbots.delete",e.props.lang))),N("div",{className:"badge ml-2 cursor-pointer"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-purple-800 bg-blue-100 rounded-full",onClick:function(){var s=(0,n.Z)(r().mark((function s(n){return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,g()(w.siteURL+"/api/bots/approve",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:{bot:t.id,staff:e.props.user.id,botIndex:a,admin:"9wA7yggY0WI"}}).then((function(e){return e.data}));case 2:if(3!==s.sent.error){s.next=5;break}return s.abrupt("return",b.Am.error(h()("staff.pending.bots.regularly",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 5:b.Am.success(h()("staff.pendingbots.approved",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}),e.setState({bots:e.props.bots.filter((function(e){return e.id!==t.id}))}),e.props.bots=e.state.bots.filter((function(e){return e.id!==t.id}));case 8:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},h()("staff.pendingbots.approve",e.props.lang))),N(p.default,{href:"/".concat(e.props.lang,"/bot/").concat(t.id)},N("div",{className:"badge ml-2 cursor-pointer"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"},h()("staff.pendingbots.view",e.props.lang)))),N(p.default,{href:"https://discordapp.com/oauth2/authorize?client_id=".concat(t.id,"&permissions=0&scope=bot")},N("div",{className:"badge ml-2 cursor-pointer"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-green-800 bg-blue-100 rounded-full"},h()("staff.pendingbots.inviteToMainServer",e.props.lang)))),N(p.default,{href:"https://discordapp.com/oauth2/authorize?client_id=".concat(t.id,"&permissions=8&scope=bot")},N("div",{className:"badge ml-2 cursor-pointer"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-gray-800 bg-blue-100 rounded-full"},h()("staff.pendingbots.inviteToTestServer",e.props.lang)))))))})):N("tr",null,N("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},N("div",{className:"flex items-center"},N("div",{className:"flex-shrink-0 w-10 h-10"}),N("div",{className:"ml-3"},N("p",{className:"text-gray-200 whitespace-no-wrap"})))),N("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},N("p",{className:"text-gray-200 whitespace-no-wrap"})),N("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},N("div",{className:"flex"},N("div",{className:"badge"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full"})),N("div",{className:"badge ml-2"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"})),N("div",{className:"badge ml-2"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"})),N("div",{className:"badge ml-2"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-green-800 bg-blue-100 rounded-full"})),N("div",{className:"badge ml-2"},N("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-gray-800 bg-blue-100 rounded-full"}))))))))))))))}}]),a}(f.default.Component),C=!0;t.default=k},471:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff/pendingbots",function(){return a(8455)}])}},function(e){e.O(0,[1192,9249,3355,2888,9774,179],(function(){return t=471,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{4362:function(e){e.exports=function(e,t){e.res?(e.res.writeHead(302,{Location:t}),e.res.end()):document.location.pathname=t}},4730:function(e,t,s){"use strict";var a=s(8142),l=s(1664),r=(s(6808),s(9669),s(1163)),n=s(4985),o=s.n(n),i=(s(4202),s(4362),s(2378)),d=s.n(i),c=a.default.createElement,f=s(2378).langs,m={tr:"tr",en:"us"};t.Z=function(e){var t=e.user,s=e.userIsStaff,n=e.userIsAdmin,i=e.lang,p=(0,r.useRouter)(),x=p.asPath;if(t)if(s){if(n||!o().onlyAdminPages.includes(p.pathname))return c(a.default.Fragment,null,c("title",null,o().siteName),c("div",{className:"fixed flex flex-col top-0 left-0 w-16 md:w-64 bg-gray-900 h-full shadow-lg"},c("div",{className:"flex items-center pl-3 md:pl-6 h-20 border-b border-gray-800"},c("img",{src:t.avatar?"https://cdn.discordapp.com/avatars/".concat(t.id,"/").concat(t.avatar,".webp?size=1024"):"https://cdn.discordapp.com/embed/avatars/".concat(Math.floor(4*Math.random()),".png"),alt:"",className:"rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-green-500"}),c("div",{className:"ml-1 hidden md:block"},c("p",{className:"ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans"},decodeURIComponent(t.username))),c("div",{className:"px-5 hidden md:block"},c("div",{className:"flex flex-row items-center h-8"},c("div",{className:"dropdown-1 inline-block relative"},c("button",{className:"mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer inline-flex items-center focus:outline-none"},c("span",{className:"mr-1"},c("a",{className:"ml-2"},c("span",{className:"flag-icon flag-icon-".concat(m[i])}))),c("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})," ")),c("ul",{className:"dropdown-menu-1 absolute hidden text-gray-700 pt-1"},f.filter((function(e){return e!==i})).map((function(e,t){return c("li",{key:t},c("a",{href:"".concat(d().link(e,x)),className:"bg-blurple dark:bg-gray-800 mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer py-2 px-4 block whitespace-no-wrap"},c("span",{className:"flag-icon flag-icon-".concat(m[e])})))}))))))),c("div",{className:"overflow-y-auto overflow-x-hidden flex-grow"},c("ul",{className:"flex flex-col py-6 space-y-1"},c("li",{className:"px-5 hidden md:block"},c("div",{className:"flex flex-row items-center h-8"},c("div",{className:"flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"},d()("staff.sidebar.head",i)))),c("li",null,c(l.default,{href:"/staff"},c("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"home")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.home",i))))),c("li",null,c(l.default,{href:"/staff/punishments"},c("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"block")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.punishments",i))))),c("li",null,c(l.default,{href:"/staff/bots"},c("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"smart_toy")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.approvedBots",i))))),c("li",null,c(l.default,{href:"/staff/advertisements"},c("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"featured_video")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.ads",i))))),c("li",null,c(l.default,{href:"/staff/levelroles"},c("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"arrow_upward")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.levelRoles",i))))),c("li",null,c(l.default,{href:"/staff/certifiedbots"},c("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"verified")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.certifiedBots",i))))),c("li",null,c(l.default,{href:"/staff/pendingbots"},c("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"pending")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.waitingBots",i))))),c("li",{className:"px-5 hidden md:block"},c("div",{className:"flex flex-row items-center h-8"},c("div",{className:"flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"},d()("staff.sidebar.codeshare",i)))),c("li",null,c(l.default,{href:"/staff/codesettings"},c("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"settings")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.codeSettings",i))))),c("li",null,c(l.default,{href:"/staff/waitingcodes"},c("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"pending")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.waitingCodes",i))))),c("li",null,c(l.default,{href:"/staff/codes"},c("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"verified")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.approvedCodes",i))))),c("li",{className:"px-5 hidden md:block"},c("div",{className:"flex flex-row items-center h-8"},c("div",{className:"flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"},d()("staff.sidebar.settings",i)))),c("li",null,c(l.default,{href:"/staff/settings"},c("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"settings")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.settings",i))))),c("li",null,c(l.default,{href:"/staff/botquota"},c("a",{href:"#",className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4"},c("span",{className:"material-icons"},"group")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.addBotQuota",i))))),c("li",null,c(l.default,{href:"/"},c("a",{className:"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6"},c("span",{className:"inline-flex justify-center items-center ml-4 text-red-400"},c("span",{className:"material-icons"},"logout")),c("span",{className:"ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"},d()("staff.sidebar.back",i)))))))));p.push("/staff")}else p.push("/staff");else p.push("/api/login")}},3586:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return h}});var a=s(6610),l=s(5991),r=s(5255),n=s(3724),o=s(7608),i=s(8142),d=(s(1664),s(4730)),c=(s(6808),s(9669),s(2378)),f=s.n(c),m=s(9008),p=i.default.createElement;function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=(0,o.Z)(e);if(t){var l=(0,o.Z)(this).constructor;s=Reflect.construct(a,arguments,l)}else s=a.apply(this,arguments);return(0,n.Z)(this,s)}}var u=s(4985),g=function(e){(0,r.Z)(s,e);var t=x(s);function s(e){var l;return(0,a.Z)(this,s),(l=t.call(this,e)).props.bots=JSON.parse(l.props.bots),l.props.staffs=JSON.parse(l.props.staffs),l.props.categories=JSON.parse(l.props.categories),l.props.users=JSON.parse(l.props.users),l.props.normalUsers=JSON.parse(l.props.normalUsers),l.props.codes=JSON.parse(l.props.codes),l.props.totalApprovedBotsAndCodes=JSON.parse(l.props.totalApprovedBotsAndCodes),l.state={staffStatsCodeCategory:"",userStatsCodeCategory:""},l}return(0,l.Z)(s,[{key:"render",value:function(){var e=this;return p(i.default.Fragment,null,p(m.default,null,p("title",null,u.siteName," - ",f()("staff.sidebar.head",this.props.lang))),p("div",{className:"min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"},p(d.Z,{user:this.props.user,userIsStaff:this.props.userIsStaff,userIsAdmin:this.props.userIsAdmin,lang:this.props.lang}),p("div",{className:"bg-gray-900 h-full w-screen px-16 md:px-64 p-6"},p("div",{className:"flex items-center"},p("div",{className:"p-4"},p("div",{className:"grid grid-cols-12 gap-4"},p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"construction")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.index.cards.staffs",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.staffs.length)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"delete_forever")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.index.cards.bannedBots",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.bannedBots)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"do_not_step")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.index.cards.kickedBots",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.kickedBots)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"smart_toy")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.index.cards.bots",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.bots.length)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"done")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.index.cards.approvedbots",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.bots.filter((function(e){return!1===e.waiting})).length)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"schedule")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.index.cards.waitingbots",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.bots.filter((function(e){return!0===e.waiting})).length)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"smart_toy")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.approvedcodes.head",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.codes.length)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"done")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.sidebar.approvedCodes",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.codes.filter((function(e){return!1===e.waiting})).length)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"schedule")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.sidebar.waitingCodes",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.codes.filter((function(e){return!0===e.waiting})).length)))),p("div",{className:"col-span-12 sm:col-span-6 md:col-span-3"},p("div",{className:"flex flex-row bg-input shadow-sm rounded p-4"},p("div",{className:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"},p("span",{className:"material-icons"},"verified")),p("div",{className:"flex flex-col flex-grow ml-4"},p("div",{className:"text-sm text-white"},f()("staff.index.cards.certifiedbots",this.props.lang)),p("div",{className:"font-bold text-lg text-gray-200"},this.props.bots.filter((function(e){return!0===e.certificate})).length))))))),p("div",{className:"container mx-auto px-4 sm:px-8"},p("div",{className:"py-8"},p("div",null,p("h5",{className:"text-2xl font-semibold leading-tight text-gray-200"},f()("staff.index.stats.staff.totalBots",this.props.lang))),p("div",{className:"py-2"}),p("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},p("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"},p("table",{className:"min-w-full leading-normal"},p("thead",null,p("tr",null,p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalBots.table.id",this.props.lang)),p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalBots.table.tag",this.props.lang)),p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalBots.table.totalBots",this.props.lang)))),p("tbody",null,this.props.totalApprovedBotsAndCodes.slice(0,9).sort((function(e,t){return(e.bots||0)-(t.bots||0)})).map((function(t,s){var a=e.props.normalUsers.filter((function(e){return e.id===t.id}))[0]||e.props.staffs.filter((function(e){return e.id===t.id}))[0];return p("tr",{id:"staffBot-".concat(t.id)},p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},t.id)),p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},a.tag||"User#0000")),p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},t.bots||0)))})))))))),p("div",{className:"container mx-auto px-4 sm:px-8"},p("div",{className:"py-8"},p("div",null,p("h5",{className:"text-2xl font-semibold leading-tight text-gray-200"},f()("staff.index.stats.staff.totalCodes",this.props.lang))),p("div",{className:"py-2"}),p("h2",{className:"text-sm font-semibold leading-tight text-gray-200"},f()("staff.index.stats.selectCategory",this.props.lang)),p("div",{className:"my-2 flex sm:flex-row flex-col"},p("div",{className:"block relative"},p("select",{onChange:function(t){return e.setState({staffStatsCodeCategory:t.target.value})},className:"w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"},p("option",{selected:!0,disabled:!0},f()("staff.index.stats.selectCategory",this.props.lang)),this.props.categories.map((function(e,t){return p("option",{key:t,value:e},e)}))))),p("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},p("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"},p("table",{className:"min-w-full leading-normal"},p("thead",null,p("tr",null,p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalCodes.table.id",this.props.lang)),p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalCodes.table.tag",this.props.lang)),p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalCodes.table.totalCodes",this.props.lang)))),p("tbody",null,this.props.users.filter((function(t){return Object.keys(t.howManyCodeAdded?t.howManyCodeAdded:{}).includes(e.state.staffStatsCodeCategory)})).slice(0,9).sort((function(t,s){return(s.howManyCodeAdded[e.state.staffStatsCodeCategory]||0)-(t.howManyCodeAdded[e.state.staffStatsCodeCategory]||0)})).map((function(t,s){var a=e.props.normalUsers.filter((function(e){return e.id===t.id}))[0]||e.props.staffs.filter((function(e){return e.id===t.id}))[0];return p("tr",{id:"staff-".concat(t.id)},p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},a.id)),p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},a.tag||"User#0000")),p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},t.howManyCodeAdded[e.state.staffStatsCodeCategory])))})))))))),p("div",{className:"container mx-auto px-4 sm:px-8"},p("div",{className:"py-8"},p("div",null,p("h5",{className:"text-2xl font-semibold leading-tight text-gray-200"},f()("staff.index.stats.user.totalCodes",this.props.lang))),p("div",{className:"py-2"}),p("h2",{className:"text-sm font-semibold leading-tight text-gray-200"},f()("staff.index.stats.selectCategory",this.props.lang)),p("div",{className:"my-2 flex sm:flex-row flex-col"},p("div",{className:"block relative"},p("select",{onChange:function(t){return e.setState({userStatsCodeCategory:t.target.value})},className:"w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"},p("option",{selected:!0,disabled:!0},f()("staff.index.stats.selectCategory",this.props.lang)),this.props.categories.map((function(e,t){return p("option",{key:t,value:e},e)}))))),p("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},p("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"},p("table",{className:"min-w-full leading-normal"},p("thead",null,p("tr",null,p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalCodes.table.id",this.props.lang)),p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalCodes.table.tag",this.props.lang)),p("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},f()("staff.index.stats.totalCodes.table.totalCodes",this.props.lang)))),p("tbody",null,this.props.normalUsers.filter((function(t){return Object.keys(t.howManyCodeAdded?t.howManyCodeAdded:{}).includes(e.state.userStatsCodeCategory)})).slice(0,9).sort((function(t,s){return(s.howManyCodeAdded[e.state.userStatsCodeCategory]||0)-(t.howManyCodeAdded[e.state.userStatsCodeCategory]||0)})).map((function(t,s){return p("tr",{id:"user-".concat(t.id)},p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},t.id)),p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},t.tag||"User#0000")),p("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},p("p",{className:"text-gray-200 whitespace-no-wrap"},t.howManyCodeAdded[e.state.userStatsCodeCategory])))})))))))))))}}]),s}(i.default.Component),h=!0;t.default=g},1104:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff",function(){return s(3586)}])}},function(e){e.O(0,[1192,3355,2888,9774,179],(function(){return t=1104,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
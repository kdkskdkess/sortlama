(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7784],{8660:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(8142),s=r(1163),n=r(1664),o=(r(9008),r(4985)),l=r.n(o),i=r(2378),c=r.n(i),d=a.default.createElement,u=r(2378).langs,p={tr:"tr",en:"us"};function m(e){var t=e.lang,r=(0,s.useRouter)().asPath;return d("footer",{className:"footer bg-discord-black-semidarker relative pt-1 h-auto"},d("div",{className:"container mx-auto px-6"},d("div",{className:"sm:flex sm:mt-8"},d("div",{className:"mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between"},d("div",{className:"flex flex-col"}),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.pages",t)),d("span",{className:"my-2"},d("span",{className:"my-1"},d(n.default,{href:"/"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.index",t)))),d("br",null),d("span",{className:"my-1"},d(n.default,{href:"/bots"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.bots",t)))),d("br",null),d("span",{className:"my-1"},d(n.default,{href:"/addbot"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.user.addbot",t)))),d("br",null),d("span",{className:"my-1"},d(n.default,{href:"/staffs"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.staffs",t)))))),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.socialMedia",t)),d("span",{className:"my-2"},Object.keys(l().socialMedia).map((function(e){return d(a.default.Fragment,null,d("span",{className:"my-1"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer",href:l().socialMedia[e]},(t=e).slice(0,1).toUpperCase()+t.slice(1,t.length).toLowerCase())),d("br",null));var t})))),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.language",t)),d("span",{className:"my-2"},d("div",{className:"dropdown-1 inline-block relative"},d("button",{className:"mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer inline-flex items-center focus:outline-none"},d("span",{className:"mr-1"},d("a",{className:"ml-2"},d("span",{className:"flag-icon flag-icon-".concat(p[t])}))),d("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},d("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})," ")),d("ul",{className:"dropdown-menu-1 absolute hidden text-gray-700 pt-1"},u.filter((function(e){return e!==t})).map((function(e,t){return d("li",{key:t},d("a",{href:"".concat(c().link(e,r)),className:"bg-blurple dark:bg-gray-800 mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer py-2 px-4 block whitespace-no-wrap"},d("span",{className:"flag-icon flag-icon-".concat(p[e])})))})))))),d("div",{className:"flex flex-col"})))))}},1459:function(e,t,r){"use strict";var a=r(7757),s=r.n(a),n=r(2137),o=r(8142),l=r(1664),i=r(6808),c=r.n(i),d=r(9669),u=r.n(d),p=r(1163),m=(r(4202),r(2378)),f=r.n(m),g=r(4985),h=r.n(g),x=o.default.createElement;t.Z=function(e){var t=e.userIsStaff,r=e.lang,a=e.userPunishments;(0,p.useRouter)();return o.default.useEffect((function(){var e=function(e){e=e.replace(/[*+?^$.[\]{}()|\\/]/g,"\\$&");var t=window.location.search.match(new RegExp("[?&]".concat(e,"=([^&]+)(&|$)")));return t&&decodeURIComponent(t[1].replace(/\+/g," "))};e("token")&&(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c().set("access_token",e("token")),c().set("refresh_token",e("refresh")),t.next=4,u()({method:"POST",url:h().siteURL+"/api/token",headers:{"Content-Type":"application/json"},data:{token:e("token")}});case 4:r=t.sent,c().set("user",r.data),window.location.href=window.location.toString().split("?token")[0];case 7:case"end":return t.stop()}}),t)})))(),e("logout")&&"true"===e("logout")&&(c().remove("access_token",{path:""}),c().remove("refresh_token",{path:""}),c().remove("user",{path:""}),window.location.href="/"),a.length>=1&&(a.includes("3")?(c().remove("access_token",{path:""}),c().remove("refresh_token",{path:""}),c().remove("user",{path:""}),window.location.href="/"):a.includes("2")&&e("addcode")&&(window.location.href="/"))}),[]),x(o.default.Fragment,null,x("div",null,x("div",{className:"md:px-12 md:py-4 md:p-6 default-font md:flex md:items-stretch w-full z-50 fixed sticky top-0 bg-discord-black-semidarker"},x("div",{className:"flex flex-no-shrink items-stretch h-12 justify-between"},x(l.default,{href:"/"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h().siteName)),x("div",{className:"block md:hidden"},x("a",{onClick:function(){return document.getElementById("navbar").classList.toggle("hidden")},className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer mt-1"},x("span",{className:"material-icons"},"filter_list")))),x("div",{className:"md:flex md:items-stretch md:flex-no-shrink md:flex-grow"},x("div",{id:"navbar",className:"hidden md:block md:flex md:items-stretch md:justify-end ml-auto"},x(l.default,{href:"/"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"home")," ",f()("navbar.index",r))),x(l.default,{href:"/codes"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"code"),f()("navbar.codes",r))),x(l.default,{href:"/bots"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"smart_toy"),f()("navbar.bots",r))),x(l.default,{href:"/staffs"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"construction")," ",f()("navbar.staffs",r))),x(l.default,{href:"/sponsors"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"support")," ",f()("navbar.sponsors",r))),x(l.default,{href:"/partners"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"thumb_up")," ",f()("navbar.partners",r))),x(l.default,{href:"/premium"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"star")," ",f()("navbar.premium",r))),x(l.default,{href:"/apidocs"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"code")," API")),c().get("user")?x("span",{className:"dropdown inline-block relative"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("img",{src:JSON.parse(c().get("user")).avatar?"https://cdn.discordapp.com/avatars/".concat(JSON.parse(c().get("user")).id,"/").concat(JSON.parse(c().get("user")).avatar,".webp?size=1024"):"https://cdn.discordapp.com/embed/avatars/".concat(Math.floor(4*Math.random()),".png"),className:"h-8 w-8 rounded-full mr-2"})," ",JSON.parse(c().get("user")).username,"#",JSON.parse(c().get("user")).discriminator),x("ul",{className:"dropdown-menu absolute hidden text-gray-200"},x("li",{className:"cursor-pointer w-full"},x(l.default,{href:"/user/@me"},x("a",{className:"rounded-t bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},x("span",{className:"material-icons"},"account_circle")," ",f()("navbar.user.profile",r)))),x("li",{className:"cursor-pointer w-full"},x(l.default,{href:"/addbot"},x("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},x("span",{className:"material-icons"},"smart_toy")," ",f()("navbar.user.addbot",r)))),x("li",{className:"cursor-pointer w-full"},x(l.default,{href:"/addcode"},x("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},x("span",{className:"material-icons"},"code")," ",f()("navbar.user.addcode",r)))),!0===t?x("li",{className:"cursor-pointer w-full"},x(l.default,{href:"/staff"},x("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},x("span",{className:"material-icons"},"construction")," ",f()("navbar.user.staff",r)))):x(o.default.Fragment,null),x("li",{className:"cursor-pointer w-full"},x("a",{href:"/?logout=true",className:"rounded-b bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},x("span",{className:"material-icons"},"logout")," ",f()("navbar.user.logout",r))))):x(l.default,{href:c().get("user")?"/?logout=true":"/api/login"},x("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x("span",{className:"material-icons"},"login")," ",f()("navbar.login",r))))))),x("br",null),x("br",null))}},5271:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return C}});var a=r(7757),s=r.n(a),n=r(2137),o=r(6610),l=r(5991),i=r(5255),c=r(3724),d=r(7608),u=r(8142),p=r(9008),m=(r(1664),r(9249)),f=r(9669),g=r.n(f),h=r(2378),x=r.n(h),b=r(1459),v=r(8660),N=u.default.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,d.Z)(e);if(t){var s=(0,d.Z)(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return(0,c.Z)(this,r)}}var k=r(4985),y=function(e){(0,i.Z)(r,e);var t=w(r);function r(e){var a;return(0,o.Z)(this,r),(a=t.call(this,e)).props.code=JSON.parse(a.props.code),a.props.settings=JSON.parse(a.props.settings),a.props.categories=JSON.parse(a.props.categories),a.props.advertisements=JSON.parse(a.props.advertisements),a.props.publisherRoles=JSON.parse(a.props.publisherRoles),a.state={codename:a.props.code.name,code:a.props.code.code,codeMain:a.props.code.codeBotJS?a.props.code.codeBotJS:"",codelibrary:a.props.code.library,codedesc:a.props.code.desc,developer:a.props.code.developer,codecategories:a.props.code.categories},a}return(0,l.Z)(r,[{key:"render",value:function(){var e=this;return N(u.default.Fragment,null,N(p.default,null,N("title",null,k.siteName," - ",x()("navbar.user.addcode",this.props.lang)),N("meta",{property:"og:url",content:"botlist.club/"}),N("meta",{property:"og:color",content:"#1564ff"}),N("meta",{property:"og:description",content:"Discord Bot List for Anka!"}),N("meta",{property:"og:site_name",content:"Anka Bot List"}),N("meta",{property:"og:image",content:"https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png"}),N("meta",{name:"theme-color",content:"#1564ff"}),N("meta",{name:"robots",content:"index, follow"}),N("meta",{name:"revisit-after",content:"1 days"}),N("meta",{name:"author",content:"Anka Devs"}),N("meta",{name:"language",content:"English"}),N("link",{rel:"shortcut icon",href:"https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png",type:"image/x-icon"}),N("meta",{name:"abstract",content:"Discord Bot List"}),N("meta",{name:"copyright",content:"\xa9 Anka List"})),N(b.Z,{userIsStaff:this.props.userIsStaff,lang:this.props.lang,userPunishments:this.props.userPunishments}),N(m.Ix,null),N("div",{className:"py-2"}),N("div",{align:"center"},this.props.advertisements.map((function(e){return N("div",{className:"mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"},N("img",{src:e.image,className:"object-cover object-center w-full h-full visible group-hover:hidden"}))}))),N("div",{className:"py-2"}),N("div",{className:"bg-discord-black-darker w-full p-7 md:px-32"},N("div",{className:"md:flex md:flex-wrap flex-row-reverse md:flex-row"},N("div",{className:"w-full mx-auto h-full bg-discord-black rounded-md shadow-lg p-4 py-4"},N("div",{className:"flex flex-grow flex-wrap p-4 justify-center md:justify-start"},N("div",{className:"mt-2 w-full"},N("label",{className:"text-white text-sm font-semibold"},x()("addcode.labels.desc",this.props.lang)," ",N("a",{className:"text-red-500"},"*")),N("div",{className:"flex"},N("a",{className:"rounded-l-md bg-discord-black-darker text-white p-2"},N("span",{className:"material-icons text-md mt-0.5"},"rate_review")),N("input",{value:this.state.codedesc,onChange:function(t){return e.setState({codedesc:t.target.value})},className:"w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent"}))),N("div",{className:"w-full h-48 mt-2",align:"center"},N("label",{className:"text-white text-sm font-semibold"},x()("addcode.labels.code",this.props.lang)," ",N("a",{className:"text-red-500"},"*")),N("textarea",{value:this.state.code,onChange:function(t){e.setState({code:t.target.value})},resizable:!1,className:"w-full h-48 p-4 bg-input resize-none rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"})),N("div",{className:"w-full h-48 mt-8",align:"center"},N("label",{className:"text-white text-sm font-semibold"},"bot.js"),N("textarea",{value:this.state.codeMain,onChange:function(t){e.setState({codeMain:t.target.value})},resizable:!1,className:"w-full h-48 p-4 bg-input resize-none rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"})),N("div",{className:"md:ml-0 mt-8"},N("label",{className:"text-white text-sm font-semibold"},x()("addcode.labels.library",this.props.lang)," ",N("a",{className:"text-red-500"},"*")),N("div",{className:"flex"},N("a",{className:"rounded-l-md bg-discord-black-darker text-white p-2"},N("span",{className:"material-icons text-md mt-0.5"},"list")),N("select",{onChange:function(t){return e.setState({codelibrary:t.target.value})},className:"w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent"},k.libraries.map((function(t,r){return N("option",{key:r,value:t,selected:e.state.codelibrary===t},t)}))))),N("div",{className:"md:ml-4 mt-8"},N("label",{className:"text-white text-sm font-semibold"},x()("addcode.labels.tags",this.props.lang)," ",N("a",{className:"text-red-500"},"*")),N("div",{className:"flex"},N("a",{className:"rounded-l-md bg-discord-black-darker text-white p-2"},N("span",{className:"material-icons text-md mt-0.5"},"tag")),N("select",{onChange:function(t){return e.setState({codecategories:Array.from(t.target.selectedOptions).map((function(e){return e.value}))})},className:"w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",multiple:!0},this.props.categories.map((function(t,r){return N("option",{key:r,value:t,selected:e.state.codecategories.includes(t)},t)})))))),N("div",{className:"flex items-center justify-center"},N("a",{className:"text-center flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer",onClick:function(){var t=(0,n.Z)(s().mark((function t(r){var a,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.settings.botAdd){t.next=2;break}return t.abrupt("return",m.Am.error(x()("addcode.messages.cantadd",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 2:if(0!==(a=e.state).codename.length&&0!==a.codedesc.length&&0!==a.codelibrary.length&&0!==a.codecategories.length&&0!==a.code.length){t.next=5;break}return t.abrupt("return",m.Am.error(x()("addcode.messages.insufficient",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 5:if(!(a.codecategories.length>6)){t.next=7;break}return t.abrupt("return",m.Am.error("".concat(x()("addcode.messages.tags",e.props.lang)," (").concat(a.bottags.length,")"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 7:return t.prev=7,t.next=10,g()(k.siteURL+"/api/codes/add",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:{data:a,publisherRoles:e.props.publisherRoles,edit:!0,admin:"9wA7yggY0WI"}});case 10:n=t.sent,t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(7),console.log(t.t0),t.abrupt("return",m.Am.error(x()("error",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 17:if(!(n=n.data).error||3!==n.error){t.next=22;break}return t.abrupt("return",m.Am.error(x()("addcode.messages.notInDiscord",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 22:if(!n.error||4!==n.error){t.next=26;break}return t.abrupt("return",m.Am.error(x()("addcode.messages.punished",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 26:if(!n.error||5!==n.error){t.next=28;break}return t.abrupt("return",m.Am.error(x()("addcode.messages.punished",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 28:m.Am.success(x()("editcode.messages.success",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0});case 29:case"end":return t.stop()}}),t,null,[[7,13]])})));return function(e){return t.apply(this,arguments)}}()},x()("send",this.props.lang)))))),N(v.Z,{lang:this.props.lang}))}}]),r}(u.default.Component),C=!0;t.default=y},8655:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/code/[id]/edit",function(){return r(5271)}])}},function(e){e.O(0,[1192,9249,3355,2888,9774,179],(function(){return t=8655,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
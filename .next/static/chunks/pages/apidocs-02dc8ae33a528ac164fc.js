(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7982],{4362:function(e){e.exports=function(e,a){e.res?(e.res.writeHead(302,{Location:a}),e.res.end()):document.location.pathname=a}},8660:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var n=t(8142),r=t(1163),s=t(1664),o=(t(9008),t(4985)),l=t.n(o),i=t(2378),c=t.n(i),d=n.default.createElement,m=t(2378).langs,u={tr:"tr",en:"us"};function p(e){var a=e.lang,t=(0,r.useRouter)().asPath;return d("footer",{className:"footer bg-discord-black-semidarker relative pt-1 h-auto"},d("div",{className:"container mx-auto px-6"},d("div",{className:"sm:flex sm:mt-8"},d("div",{className:"mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between"},d("div",{className:"flex flex-col"}),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.pages",a)),d("span",{className:"my-2"},d("span",{className:"my-1"},d(s.default,{href:"/"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.index",a)))),d("br",null),d("span",{className:"my-1"},d(s.default,{href:"/bots"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.bots",a)))),d("br",null),d("span",{className:"my-1"},d(s.default,{href:"/addbot"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.user.addbot",a)))),d("br",null),d("span",{className:"my-1"},d(s.default,{href:"/staffs"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.staffs",a)))))),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.socialMedia",a)),d("span",{className:"my-2"},Object.keys(l().socialMedia).map((function(e){return d(n.default.Fragment,null,d("span",{className:"my-1"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer",href:l().socialMedia[e]},(a=e).slice(0,1).toUpperCase()+a.slice(1,a.length).toLowerCase())),d("br",null));var a})))),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.language",a)),d("span",{className:"my-2"},d("div",{className:"dropdown-1 inline-block relative"},d("button",{className:"mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer inline-flex items-center focus:outline-none"},d("span",{className:"mr-1"},d("a",{className:"ml-2"},d("span",{className:"flag-icon flag-icon-".concat(u[a])}))),d("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},d("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})," ")),d("ul",{className:"dropdown-menu-1 absolute hidden text-gray-700 pt-1"},m.filter((function(e){return e!==a})).map((function(e,a){return d("li",{key:a},d("a",{href:"".concat(c().link(e,t)),className:"bg-blurple dark:bg-gray-800 mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer py-2 px-4 block whitespace-no-wrap"},d("span",{className:"flag-icon flag-icon-".concat(u[e])})))})))))),d("div",{className:"flex flex-col"})))))}},1459:function(e,a,t){"use strict";var n=t(7757),r=t.n(n),s=t(2137),o=t(8142),l=t(1664),i=t(6808),c=t.n(i),d=t(9669),m=t.n(d),u=t(1163),p=(t(4202),t(2378)),f=t.n(p),h=t(4985),x=t.n(h),g=o.default.createElement;a.Z=function(e){var a=e.userIsStaff,t=e.lang,n=e.userPunishments;(0,u.useRouter)();return o.default.useEffect((function(){var e=function(e){e=e.replace(/[*+?^$.[\]{}()|\\/]/g,"\\$&");var a=window.location.search.match(new RegExp("[?&]".concat(e,"=([^&]+)(&|$)")));return a&&decodeURIComponent(a[1].replace(/\+/g," "))};e("token")&&(0,s.Z)(r().mark((function a(){var t;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c().set("access_token",e("token")),c().set("refresh_token",e("refresh")),a.next=4,m()({method:"POST",url:x().siteURL+"/api/token",headers:{"Content-Type":"application/json"},data:{token:e("token")}});case 4:t=a.sent,c().set("user",t.data),window.location.href=window.location.toString().split("?token")[0];case 7:case"end":return a.stop()}}),a)})))(),e("logout")&&"true"===e("logout")&&(c().remove("access_token",{path:""}),c().remove("refresh_token",{path:""}),c().remove("user",{path:""}),window.location.href="/"),n.length>=1&&(n.includes("3")?(c().remove("access_token",{path:""}),c().remove("refresh_token",{path:""}),c().remove("user",{path:""}),window.location.href="/"):n.includes("2")&&e("addcode")&&(window.location.href="/"))}),[]),g(o.default.Fragment,null,g("div",null,g("div",{className:"md:px-12 md:py-4 md:p-6 default-font md:flex md:items-stretch w-full z-50 fixed sticky top-0 bg-discord-black-semidarker"},g("div",{className:"flex flex-no-shrink items-stretch h-12 justify-between"},g(l.default,{href:"/"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},x().siteName)),g("div",{className:"block md:hidden"},g("a",{onClick:function(){return document.getElementById("navbar").classList.toggle("hidden")},className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer mt-1"},g("span",{className:"material-icons"},"filter_list")))),g("div",{className:"md:flex md:items-stretch md:flex-no-shrink md:flex-grow"},g("div",{id:"navbar",className:"hidden md:block md:flex md:items-stretch md:justify-end ml-auto"},g(l.default,{href:"/"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"home")," ",f()("navbar.index",t))),g(l.default,{href:"/codes"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"code"),f()("navbar.codes",t))),g(l.default,{href:"/bots"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"smart_toy"),f()("navbar.bots",t))),g(l.default,{href:"/staffs"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"construction")," ",f()("navbar.staffs",t))),g(l.default,{href:"/sponsors"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"support")," ",f()("navbar.sponsors",t))),g(l.default,{href:"/partners"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"thumb_up")," ",f()("navbar.partners",t))),g(l.default,{href:"/premium"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"star")," ",f()("navbar.premium",t))),g(l.default,{href:"/apidocs"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"code")," API")),c().get("user")?g("span",{className:"dropdown inline-block relative"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("img",{src:JSON.parse(c().get("user")).avatar?"https://cdn.discordapp.com/avatars/".concat(JSON.parse(c().get("user")).id,"/").concat(JSON.parse(c().get("user")).avatar,".webp?size=1024"):"https://cdn.discordapp.com/embed/avatars/".concat(Math.floor(4*Math.random()),".png"),className:"h-8 w-8 rounded-full mr-2"})," ",decodeURIComponent(JSON.parse(c().get("user")).username),"#",JSON.parse(c().get("user")).discriminator),g("ul",{className:"dropdown-menu absolute hidden text-gray-200"},g("li",{className:"cursor-pointer w-full"},g(l.default,{href:"/user/@me"},g("a",{className:"rounded-t bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},g("span",{className:"material-icons"},"account_circle")," ",f()("navbar.user.profile",t)))),g("li",{className:"cursor-pointer w-full"},g(l.default,{href:"/addbot"},g("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},g("span",{className:"material-icons"},"smart_toy")," ",f()("navbar.user.addbot",t)))),g("li",{className:"cursor-pointer w-full"},g(l.default,{href:"/addcode"},g("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},g("span",{className:"material-icons"},"code")," ",f()("navbar.user.addcode",t)))),!0===a?g("li",{className:"cursor-pointer w-full"},g(l.default,{href:"/staff"},g("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},g("span",{className:"material-icons"},"construction")," ",f()("navbar.user.staff",t)))):g(o.default.Fragment,null),g("li",{className:"cursor-pointer w-full"},g("a",{href:"/?logout=true",className:"rounded-b bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},g("span",{className:"material-icons"},"logout")," ",f()("navbar.user.logout",t))))):g(l.default,{href:c().get("user")?"/?logout=true":"/api/login"},g("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g("span",{className:"material-icons"},"login")," ",f()("navbar.login",t))))))),g("br",null),g("br",null))}},4513:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSP:function(){return u}});var n=t(8142),r=t(9008),s=(t(1664),t(9249)),o=(t(4362),t(9669),t(2378)),l=t.n(o),i=t(1459),c=t(8660),d=n.default.createElement,m=t(4985),u=!0;a.default=function(e){var a=e.advertisements,t=e.userIsStaff,o=e.lang,u=e.userPunishments;return a=JSON.parse(a),d(n.default.Fragment,null,d(r.default,null,d("title",null,m.siteName," - API"),d("meta",{property:"og:url",content:"botlist.club/"}),d("meta",{property:"og:color",content:"#5f8acb"}),d("meta",{property:"og:description",content:"Discord Bot List for Anka!"}),d("meta",{property:"og:site_name",content:"Anka Bot List"}),d("meta",{property:"og:image",content:"https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png"}),d("meta",{name:"theme-color",content:"#5f8acb"}),d("meta",{name:"robots",content:"index, follow"}),d("meta",{name:"revisit-after",content:"1 days"}),d("meta",{name:"author",content:"Anka Devs"}),d("meta",{name:"language",content:"English"}),d("link",{rel:"shortcut icon",href:"https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png",type:"image/x-icon"}),d("meta",{name:"abstract",content:"Discord Bot List"}),d("meta",{name:"copyright",content:"\xa9 Anka List"})),d(i.Z,{userIsStaff:t,lang:o,userPunishments:u}),d(s.Ix,null),d("div",{className:"py-2"}),d("div",{align:"center"},a.map((function(e){return d("div",{className:"mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"},d("img",{src:e.image,className:"object-cover object-center w-full h-full visible group-hover:hidden"}))}))),d("div",{className:"py-8"}),d("div",{className:"p-8 md:p-36bg-discord-black w-full h-full"},d("div",{className:"p-4"}),d("div",{className:"text-center"},d("a",{className:"text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10"},l()("apidocs.head",o))),d("div",{className:"py-1"}),d("div",{className:"p-4 md:px-6"},d("a",{className:"text-gray-100 no-underline"},d("div",{className:"text-white",dangerouslySetInnerHTML:{__html:l()("apidocs.text",o).split("\n").join("<br/>")}})),d("div",{className:"p-2"}),d("a",{className:"text-gray-200 no-underline"},d("code",null,d("div",{className:"text-white",dangerouslySetInnerHTML:{__html:l()("apidocs.usage",o).split("\n").join("<br/>")}})))),d("div",{className:"p-8"})),d(c.Z,{lang:o}))}},1913:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apidocs",function(){return t(4513)}])}},function(e){e.O(0,[1192,9249,3355,2888,9774,179],(function(){return a=1913,e(e.s=a);var a}));var a=e.O();_N_E=a}]);
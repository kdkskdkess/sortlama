(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4240],{8660:function(e,a,r){"use strict";r.d(a,{Z:function(){return p}});var t=r(8142),n=r(1163),s=r(1664),o=(r(9008),r(4985)),l=r.n(o),i=r(2378),c=r.n(i),d=t.default.createElement,m=r(2378).langs,u={tr:"tr",en:"us"};function p(e){var a=e.lang,r=(0,n.useRouter)().asPath;return d("footer",{className:"footer bg-discord-black-semidarker relative pt-1 h-auto"},d("div",{className:"container mx-auto px-6"},d("div",{className:"sm:flex sm:mt-8"},d("div",{className:"mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between"},d("div",{className:"flex flex-col"}),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.pages",a)),d("span",{className:"my-2"},d("span",{className:"my-1"},d(s.default,{href:"/"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.index",a)))),d("br",null),d("span",{className:"my-1"},d(s.default,{href:"/bots"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.bots",a)))),d("br",null),d("span",{className:"my-1"},d(s.default,{href:"/addbot"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.user.addbot",a)))),d("br",null),d("span",{className:"my-1"},d(s.default,{href:"/staffs"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer"},c()("navbar.staffs",a)))))),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.socialMedia",a)),d("span",{className:"my-2"},Object.keys(l().socialMedia).map((function(e){return d(t.default.Fragment,null,d("span",{className:"my-1"},d("a",{className:"text-white hover:text-gray-200 text-lg cursor-pointer",href:l().socialMedia[e]},(a=e).slice(0,1).toUpperCase()+a.slice(1,a.length).toLowerCase())),d("br",null));var a})))),d("div",{className:"flex flex-col"},d("span",{className:"font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"},c()("footer.language",a)),d("span",{className:"my-2"},d("div",{className:"dropdown-1 inline-block relative"},d("button",{className:"mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer inline-flex items-center focus:outline-none"},d("span",{className:"mr-1"},d("a",{className:"ml-2"},d("span",{className:"flag-icon flag-icon-".concat(u[a])}))),d("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},d("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})," ")),d("ul",{className:"dropdown-menu-1 absolute hidden text-gray-700 pt-1"},m.filter((function(e){return e!==a})).map((function(e,a){return d("li",{key:a},d("a",{href:"".concat(c().link(e,r)),className:"bg-blurple dark:bg-gray-800 mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer py-2 px-4 block whitespace-no-wrap"},d("span",{className:"flag-icon flag-icon-".concat(u[e])})))})))))),d("div",{className:"flex flex-col"})))))}},1459:function(e,a,r){"use strict";var t=r(7757),n=r.n(t),s=r(2137),o=r(8142),l=r(1664),i=r(6808),c=r.n(i),d=r(9669),m=r.n(d),u=r(1163),p=(r(4202),r(2378)),f=r.n(p),x=r(4985),g=r.n(x),h=o.default.createElement;a.Z=function(e){var a=e.userIsStaff,r=e.lang,t=e.userPunishments;(0,u.useRouter)();return o.default.useEffect((function(){var e=function(e){e=e.replace(/[*+?^$.[\]{}()|\\/]/g,"\\$&");var a=window.location.search.match(new RegExp("[?&]".concat(e,"=([^&]+)(&|$)")));return a&&decodeURIComponent(a[1].replace(/\+/g," "))};e("token")&&(0,s.Z)(n().mark((function a(){var r;return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c().set("access_token",e("token")),c().set("refresh_token",e("refresh")),a.next=4,m()({method:"POST",url:g().siteURL+"/api/token",headers:{"Content-Type":"application/json"},data:{token:e("token")}});case 4:r=a.sent,c().set("user",r.data),window.location.href=window.location.toString().split("?token")[0];case 7:case"end":return a.stop()}}),a)})))(),e("logout")&&"true"===e("logout")&&(c().remove("access_token",{path:""}),c().remove("refresh_token",{path:""}),c().remove("user",{path:""}),window.location.href="/"),t.length>=1&&(t.includes("3")?(c().remove("access_token",{path:""}),c().remove("refresh_token",{path:""}),c().remove("user",{path:""}),window.location.href="/"):t.includes("2")&&e("addcode")&&(window.location.href="/"))}),[]),h(o.default.Fragment,null,h("div",null,h("div",{className:"md:px-12 md:py-4 md:p-6 default-font md:flex md:items-stretch w-full z-50 fixed sticky top-0 bg-discord-black-semidarker"},h("div",{className:"flex flex-no-shrink items-stretch h-12 justify-between"},h(l.default,{href:"/"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},g().siteName)),h("div",{className:"block md:hidden"},h("a",{onClick:function(){return document.getElementById("navbar").classList.toggle("hidden")},className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer mt-1"},h("span",{className:"material-icons"},"filter_list")))),h("div",{className:"md:flex md:items-stretch md:flex-no-shrink md:flex-grow"},h("div",{id:"navbar",className:"hidden md:block md:flex md:items-stretch md:justify-end ml-auto"},h(l.default,{href:"/"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"home")," ",f()("navbar.index",r))),h(l.default,{href:"/codes"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"code"),f()("navbar.codes",r))),h(l.default,{href:"/bots"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"smart_toy"),f()("navbar.bots",r))),h(l.default,{href:"/staffs"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"construction")," ",f()("navbar.staffs",r))),h(l.default,{href:"/sponsors"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"support")," ",f()("navbar.sponsors",r))),h(l.default,{href:"/partners"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"thumb_up")," ",f()("navbar.partners",r))),h(l.default,{href:"/premium"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"star")," ",f()("navbar.premium",r))),h(l.default,{href:"/apidocs"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"code")," API")),c().get("user")?h("span",{className:"dropdown inline-block relative"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("img",{src:JSON.parse(c().get("user")).avatar?"https://cdn.discordapp.com/avatars/".concat(JSON.parse(c().get("user")).id,"/").concat(JSON.parse(c().get("user")).avatar,".webp?size=1024"):"https://cdn.discordapp.com/embed/avatars/".concat(Math.floor(4*Math.random()),".png"),className:"h-8 w-8 rounded-full mr-2"})," ",decodeURIComponent(JSON.parse(c().get("user")).username),"#",JSON.parse(c().get("user")).discriminator),h("ul",{className:"dropdown-menu absolute hidden text-gray-200"},h("li",{className:"cursor-pointer w-full"},h(l.default,{href:"/user/@me"},h("a",{className:"rounded-t bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},h("span",{className:"material-icons"},"account_circle")," ",f()("navbar.user.profile",r)))),h("li",{className:"cursor-pointer w-full"},h(l.default,{href:"/addbot"},h("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},h("span",{className:"material-icons"},"smart_toy")," ",f()("navbar.user.addbot",r)))),h("li",{className:"cursor-pointer w-full"},h(l.default,{href:"/addcode"},h("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},h("span",{className:"material-icons"},"code")," ",f()("navbar.user.addcode",r)))),!0===a?h("li",{className:"cursor-pointer w-full"},h(l.default,{href:"/staff"},h("a",{className:"bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},h("span",{className:"material-icons"},"construction")," ",f()("navbar.user.staff",r)))):h(o.default.Fragment,null),h("li",{className:"cursor-pointer w-full"},h("a",{href:"/?logout=true",className:"rounded-b bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"},h("span",{className:"material-icons"},"logout")," ",f()("navbar.user.logout",r))))):h(l.default,{href:c().get("user")?"/?logout=true":"/api/login"},h("a",{className:"flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"},h("span",{className:"material-icons"},"login")," ",f()("navbar.login",r))))))),h("br",null),h("br",null))}},4339:function(e,a,r){"use strict";r.r(a),r.d(a,{Index:function(){return k},__N_SSP:function(){return w},default:function(){return y}});var t=r(8142),n=r(9008),s=r(1664),o=r(1459),l=r(7757),i=r.n(l),c=r(2137),d=(r(9669),r(9249)),m=r(4855),u=(r(6808),r(4985)),p=r.n(u),f=r(2378),x=r.n(f),g=t.default.createElement,h=function(e){var a=e.code,r=e.user,o=e.lang;return r||(r={}),g(t.default.Fragment,null,g(n.default,null,g("title",null,p().siteName," - ",a.name)),g("div",{className:"w-full md:w-3/12 mx-auto h-full bg-discord-black rounded-md shadow-lg"},g(d.Ix,null),g("div",{className:"p-3"},g("div",{className:"py-2"}),g("div",{className:"text-center text-white"},g("a",{className:"text-white text-2xl no-underline font-bold"},a.name),g("br",null),g("a",{className:"text-gray-200 text-lg no-underline"},a.desc)),g("div",{className:"py-1"}),g("div",{className:"flex"},g("a",{className:"rounded-l-md bg-discord-black-darker text-white p-2"},g("span",{className:"material-icons text-md mt-0.5"},"bookmark")),g("div",{className:"w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"},x()("code.page.library",o),": ",a.library)),g("div",{className:"py-1"}),g("div",{className:"py-1.5"}),g("div",{className:"flex"},g("span",{className:"material-icons text-gray-200 text-md no-underline font-semibold"},"local_offer"),g("a",{className:"text-gray-200 text-md no-underline font-semibold"}," ",x()("code.page.categories",o))),g("div",{className:"py-0.5"}),g("div",{className:"md:flex flex-col md:flex-row md:flex-wrap items-center justify-center"},a.categories.map((function(e){return g(s.default,{href:"/codes/categories/".concat(e)},g("div",{className:"mt-2"},g("a",{className:"text-lg py-1 px-3 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"},e)))}))),g("div",{className:"py-1.5"}),g("div",{className:"flex"},g("span",{className:"material-icons text-gray-200 text-md no-underline font-semibold"},"group"),g("a",{className:"text-gray-200 text-md no-underline font-semibold"}," ",x()("code.page.developer",o))),g("div",{className:"py-1.5"}),g("div",{className:"flex cursor-pointer"},g("img",{className:"rounded-l-md bg-discord-black-darker text-white h-12 w-12",src:a.developer.avatar?"https://cdn.discordapp.com/avatars/".concat(a.developer.id,"/").concat(a.developer.avatar,".webp?size=1024"):"https://cdn.discordapp.com/embed/avatars/".concat(Math.floor(4*Math.random()),".png")}),g(s.default,{href:"/user/".concat(a.developer.id)},g("div",{className:"w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"},a.developer.username,"#",a.developer.discriminator))),g("div",{className:"py-0.5"}),g("div",{className:"py-2"}),g(m.CopyToClipboard,{text:"//commands folder\n                \n".concat(a.code,"\n\n").concat(a.codeBotJS?"//bot.js\n\n".concat(a.codeBotJS):""),onCopy:function(){return d.Am.success(x()("code.copied",o),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0})}},g("div",{className:"md:flex justify-center"},g("a",{className:"flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"},x()("code.page.copy",o)))),g("br",null),a.developer.id===r.id?g("div",{className:"md:flex justify-center"},g(s.default,{href:"/code/".concat(a.name,"/edit")},g("a",{className:"flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"},x()("code.page.edit",o))),g("a",{className:"flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer",onClick:function(){var e=(0,c.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.id===a.developer.id){e.next=2;break}return e.abrupt("return",d.Am.error(x()("code.remove.error",o),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 2:return e.next=4,fetch(p().siteURL+"/api/codes/remove",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({code:a,admin:"9wA7yggY0WI"})});case 4:d.Am.success(x()("code.remove.success",o),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},x()("code.page.delete",o))):g(t.default.Fragment,null),g("div",{className:"py-3"}))))},v=r(8660),b=r(3403),N=t.default.createElement,w=!0;function k(e){var a=e.code,r=e.user,n=e.advertisements,s=e.userIsStaff,l=e.lang,i=e.userPunishments;return a=JSON.parse(a),n=JSON.parse(n),N(t.default.Fragment,null,N(o.Z,{userIsStaff:s,lang:l,userPunishments:i}),N("div",{className:"py-2"}),N("div",{align:"center"},n.map((function(e){return N("div",{className:"mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"},N("img",{src:e.image,className:"object-cover object-center w-full h-full visible group-hover:hidden"}))}))),N("div",{className:"py-2"}),N("div",{className:"bg-discord-black-darker w-full p-7"},N("div",{className:"md:flex md:flex-wrap flex-row-reverse md:flex-row"},N("div",{className:"w-full md:w-8/12 order-last md:order-none mx-auto h-full bg-discord-black rounded-md shadow-lg p-4 py-4"},N("label",{className:"text-white text-sm font-semibold"},x()("code.page.commandsFolder")),N("br",null),N(b.dn,{text:a.code,language:"javascript",showLineNumbers:!0,theme:b.cL}),a.codeBotJS?N(t.default.Fragment,null,N("br",null),N("label",{className:"text-white text-sm font-semibold"},x()("code.page.mainCode")),N("br",null),N(b.dn,{text:a.codeBotJS,language:"javascript",showLineNumbers:!0,theme:b.cL})):N(t.default.Fragment,null)),N("div",{className:"py-3 md:py-0"}),N(h,{code:a,user:r,lang:l}))),N(v.Z,{lang:l}))}var y=k},9422:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/code/[id]",function(){return r(4339)}])}},function(e){e.O(0,[1192,9249,8187,3355,2888,9774,179],(function(){return a=9422,e(e.s=a);var a}));var a=e.O();_N_E=a}]);
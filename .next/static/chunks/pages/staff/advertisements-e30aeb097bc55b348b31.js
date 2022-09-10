(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3800],{2847:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return _}});var a=s(7757),n=s.n(a),r=s(2137),i=s(6610),o=s(5991),l=s(5255),p=s(3724),c=s(7608),d=s(8142),u=s(4730),f=(s(1664),s(9669)),m=s.n(f),g=(s(62),s(9249)),x=s(1163),h=s(2378),v=s.n(h),y=s(9008),b=d.default.createElement;function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=(0,c.Z)(e);if(t){var n=(0,c.Z)(this).constructor;s=Reflect.construct(a,arguments,n)}else s=a.apply(this,arguments);return(0,p.Z)(this,s)}}var w=s(4985),k=function(e){(0,l.Z)(s,e);var t=N(s);function s(e){var a;return(0,i.Z)(this,s),(a=t.call(this,e)).props.advertisements=JSON.parse(a.props.advertisements),a.state={id:"",position:"",image:""},a}return(0,o.Z)(s,[{key:"render",value:function(){var e=this;(0,x.useRouter)();return b(d.default.Fragment,null,b(y.default,null,b("title",null,w.siteName," - ",v()("staff.advertisements.head",this.props.lang))),b(g.Ix,null),b("div",{className:"min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"},b(u.Z,{user:this.props.user,userIsStaff:this.props.userIsStaff,userIsAdmin:this.props.userIsAdmin,lang:this.props.lang}),b("div",{className:"bg-gray-900 h-screen w-screen px-16 md:px-64 p-6"},b("div",{className:"container mx-auto px-4 sm:px-8"},b("div",{className:"py-8"},b("div",null,b("h5",{className:"text-2xl font-semibold leading-tight text-gray-200"},v()("staff.advertisements.head",this.props.lang))),b("div",{className:"py-2"}),b("h2",{className:"text-sm font-semibold leading-tight text-gray-200"},v()("staff.advertisements.addAd",this.props.lang)),b("div",{className:"my-2 flex sm:flex-row flex-col"},b("div",{className:"block relative"},b("select",{onChange:function(t){e.setState({position:t.target.options[event.target.selectedIndex].text}),e.setState({id:t.target.value})},className:"w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"},b("option",{value:0,selected:!0,disabled:!0},v()("staff.advertisements.selectPos",this.props.lang)),w.advertisement.map((function(t){return b("option",{value:t.id,selected:e.state.id===t.id},t.name)})))),b("div",{className:"block relative ml-2"},b("input",{value:this.state.image,onChange:function(t){e.setState({image:t.target.value})},placeholder:v()("staff.advertisements.adImage",this.props.lang),className:"w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"})),b("div",{className:"flex justify-center"},b("a",{className:"flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer",onClick:function(){var t=(0,r.Z)(n().mark((function t(s){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.state.id.length&&0!==e.state.image.length){t.next=2;break}return t.abrupt("return",g.Am.error(v()("staff.advertisements.fillEverything",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 2:return t.next=4,m()(w.siteURL+"/api/advertisements",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:{settings:e.state,admin:"9wA7yggY0WI"}}).then((function(e){return e.data}));case 4:t.sent,g.Am.success(v()("staff.advertisements.added",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}),e.props.advertisements.push({image:e.state.image,position_id:e.state.id}),e.setState({id:""}),e.setState({image:""});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v()("send",this.props.lang)))),b("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},b("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"},b("table",{className:"min-w-full leading-normal"},b("thead",null,b("tr",null,b("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},v()("staff.advertisements.pos",this.props.lang)),b("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},v()("staff.advertisements.image",this.props.lang)),b("th",{className:"px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"},v()("staff.advertisements.acts",this.props.lang)))),b("tbody",null,this.props.advertisements.map((function(t,s){return b("tr",{id:"quota-".concat(s)},b("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},b("p",{className:"text-gray-200 whitespace-no-wrap"},w.advertisement.map((function(e){return e.name}))[t.position_id-1])),b("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},b("p",{className:"text-gray-200 whitespace-no-wrap"},t.image)),b("td",{className:"px-5 py-5 bg-input text-gray-100 text-sm"},b("div",{className:"flex"},b("div",{className:"badge cursor-pointer",onClick:function(){var a=(0,r.Z)(n().mark((function a(r){return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m()(w.siteURL+"/api/advertisements",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:{settings:{id:t.id},delete:!0,admin:"9wA7yggY0WI"}}).then((function(e){return e.data}));case 2:return a.sent,document.getElementById("quota-".concat(s)).remove(),a.abrupt("return",g.Am.success(v()("staff.advertisements.deleted",e.props.lang),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,draggable:!0,progress:void 0}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b("span",{className:"px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full"},v()("staff.advertisements.delete",e.props.lang))))))})))))))))))}}]),s}(d.default.Component),_=!0;t.default=k},8699:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff/advertisements",function(){return s(2847)}])}},function(e){e.O(0,[5961,1192,9249,3355,4292,2888,9774,179],(function(){return t=8699,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
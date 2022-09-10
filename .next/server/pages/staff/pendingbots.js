(function() {
var exports = {};
exports.id = 7511;
exports.ids = [7511];
exports.modules = {

/***/ 8455:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Panel_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4730);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8245);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_Bots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62);
/* harmony import */ var _schemas_Bots__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_schemas_Bots__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










const cfg = __webpack_require__(4985);

class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.props.bots = JSON.parse(this.props.bots);
    this.state = {
      bots: this.props.bots
    };
  }

  render() {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), null, __jsx("title", null, cfg.siteName, " - ", _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.sidebar.waitingBots", this.props.lang))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, null), __jsx("div", {
      className: "min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"
    }, __jsx(_Components_Panel_Sidebar__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      user: this.props.user,
      userIsStaff: this.props.userIsStaff,
      userIsAdmin: this.props.userIsAdmin,
      lang: this.props.lang
    }), __jsx("div", {
      className: "bg-gray-900 h-screen w-screen px-16 md:px-64 p-6"
    }, __jsx("div", {
      className: "container mx-auto px-4 sm:px-8"
    }, __jsx("div", {
      className: "py-8"
    }, __jsx("div", null, __jsx("h2", {
      className: "text-2xl font-semibold leading-tight text-gray-200"
    }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.head", this.props.lang))), __jsx("div", {
      className: "my-2 flex sm:flex-row flex-col"
    }, __jsx("div", {
      className: "block relative"
    }, __jsx("span", {
      className: "h-full absolute inset-y-0 left-0 flex items-center pl-2"
    }, __jsx("svg", {
      viewBox: "0 0 24 24",
      className: "h-4 w-4 fill-current bg-input text-gray-200"
    }, __jsx("path", {
      d: "M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
    }))), __jsx("input", {
      onChange: e => {
        this.setState({
          bots: this.props.bots.filter(bot => bot.bot.name.toLowerCase().includes(e.target.value.toLowerCase()))
        });
      },
      placeholder: _language__WEBPACK_IMPORTED_MODULE_7___default()("botPlaceholder", this.props.lang),
      className: "appearance-none rounded-r rounded-l sm:rounded-l-none border border-b block pl-8 pr-6 py-2 w-full text-sm placeholder-gray-400 bg-input text-gray-200 focus:placeholder-gray-200 focus:outline-none border-none"
    }))), __jsx("div", {
      className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
    }, __jsx("div", {
      className: "inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"
    }, __jsx("table", {
      className: "min-w-full leading-normal"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.name", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.owner", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.acts", this.props.lang)))), __jsx("tbody", null, this.state.bots ? this.state.bots.sort(function (a, b) {
      return (b.votes || 0) - (a.votes || 0);
    }).map((bot, i) => {
      return __jsx("tr", null, __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("div", {
        className: "flex items-center"
      }, __jsx("div", {
        className: "flex-shrink-0 w-10 h-10"
      }, __jsx("img", {
        className: "w-full h-full rounded-full",
        src: bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
        alt: ""
      })), __jsx("div", {
        className: "ml-3"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, bot.bot.name)))), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, decodeURIComponent(bot.owner.tag))), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("div", {
        className: "flex"
      }, __jsx("div", {
        className: "badge cursor-pointer"
      }, __jsx("span", {
        className: "px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full",
        onClick: async e => {
          var d = await axios__WEBPACK_IMPORTED_MODULE_4___default()(cfg.siteURL + "/api/bots/remove", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
              bot: bot.id,
              staff: this.props.user.id,
              botIndex: i,
              admin: "9wA7yggY0WI"
            }
          }).then(t => t.data);

          if (d.error === 3) {
            return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(_language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pending.bots.regularly", this.props.lang), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined
            });
          }

          react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(_language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.deleted", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
          this.setState({
            bots: this.props.bots.filter(bott => bott.id !== bot.id)
          });
          this.props.bots = this.state.bots.filter(bott => bott.id !== bot.id);
        }
      }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.delete", this.props.lang))), __jsx("div", {
        className: "badge ml-2 cursor-pointer"
      }, __jsx("span", {
        className: "px-2 ml-auto text-xs font-medium tracking-wide text-purple-800 bg-blue-100 rounded-full",
        onClick: async e => {
          var d = await axios__WEBPACK_IMPORTED_MODULE_4___default()(cfg.siteURL + "/api/bots/approve", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
              bot: bot.id,
              staff: this.props.user.id,
              botIndex: i,
              admin: "9wA7yggY0WI"
            }
          }).then(t => t.data);

          if (d.error === 3) {
            return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(_language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pending.bots.regularly", this.props.lang), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined
            });
          }

          react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(_language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.approved", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
          this.setState({
            bots: this.props.bots.filter(bott => bott.id !== bot.id)
          });
          this.props.bots = this.state.bots.filter(bott => bott.id !== bot.id);
        }
      }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.approve", this.props.lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: `/${this.props.lang}/bot/${bot.id}`
      }, __jsx("div", {
        className: "badge ml-2 cursor-pointer"
      }, __jsx("span", {
        className: "px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"
      }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.view", this.props.lang)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: `https://discordapp.com/oauth2/authorize?client_id=${bot.id}&permissions=0&scope=bot`
      }, __jsx("div", {
        className: "badge ml-2 cursor-pointer"
      }, __jsx("span", {
        className: "px-2 ml-auto text-xs font-medium tracking-wide text-green-800 bg-blue-100 rounded-full"
      }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.inviteToMainServer", this.props.lang)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: `https://discordapp.com/oauth2/authorize?client_id=${bot.id}&permissions=8&scope=bot`
      }, __jsx("div", {
        className: "badge ml-2 cursor-pointer"
      }, __jsx("span", {
        className: "px-2 ml-auto text-xs font-medium tracking-wide text-gray-800 bg-blue-100 rounded-full"
      }, _language__WEBPACK_IMPORTED_MODULE_7___default()("staff.pendingbots.inviteToTestServer", this.props.lang)))))));
    }) : __jsx("tr", null, __jsx("td", {
      className: "px-5 py-5 bg-input text-gray-100 text-sm"
    }, __jsx("div", {
      className: "flex items-center"
    }, __jsx("div", {
      className: "flex-shrink-0 w-10 h-10"
    }), __jsx("div", {
      className: "ml-3"
    }, __jsx("p", {
      className: "text-gray-200 whitespace-no-wrap"
    })))), __jsx("td", {
      className: "px-5 py-5 bg-input text-gray-100 text-sm"
    }, __jsx("p", {
      className: "text-gray-200 whitespace-no-wrap"
    })), __jsx("td", {
      className: "px-5 py-5 bg-input text-gray-100 text-sm"
    }, __jsx("div", {
      className: "flex"
    }, __jsx("div", {
      className: "badge"
    }, __jsx("span", {
      className: "px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full"
    })), __jsx("div", {
      className: "badge ml-2"
    }, __jsx("span", {
      className: "px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"
    })), __jsx("div", {
      className: "badge ml-2"
    }, __jsx("span", {
      className: "px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"
    })), __jsx("div", {
      className: "badge ml-2"
    }, __jsx("span", {
      className: "px-2 ml-auto text-xs font-medium tracking-wide text-green-800 bg-blue-100 rounded-full"
    })), __jsx("div", {
      className: "badge ml-2"
    }, __jsx("span", {
      className: "px-2 ml-auto text-xs font-medium tracking-wide text-gray-800 bg-blue-100 rounded-full"
    }))))))))))))));
  }

}

async function getServerSideProps(ctx) {
  var bots = await _schemas_Bots__WEBPACK_IMPORTED_MODULE_5___default().find({});

  const getCookie = key => {
    if (ctx.req.headers.cookie) {
      return ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0].split("=")[1] : null;
    } else {
      return null;
    }
  };

  bots.forEach(el => {
    el["key"] = null;
  });

  if (getCookie("user")) {
    var user = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ","));
  } else {
    next_redirect__WEBPACK_IMPORTED_MODULE_2___default()(ctx, '/api/login');
    return {};
  }

  const Staffs = __webpack_require__(71);

  var userIsStaff = (await Staffs.findOne({
    id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id
  })) ? true : false;
  var userIsAdmin = userIsStaff ? (await Staffs.findOne({
    id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id
  })).admin : false;
  return {
    props: {
      user,
      bots: JSON.stringify(bots.filter(bot => bot.waiting === true)),
      userIsStaff,
      userIsAdmin,
      lang: ctx.locale
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 62:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const mongoosePaginate = __webpack_require__(9337);

const botsSchema = new Schema({
  id: String,
  certificate: Boolean,
  prefix: String,
  shortDesc: String,
  github: String,
  library: String,
  support: String,
  desc: String,
  votes: Number,
  servers: Number,
  bot: Object,
  owner: Object,
  developers: Array,
  tags: Array,
  key: String,
  waiting: Boolean,
  specialURL: String
});
botsSchema.plugin(mongoosePaginate);
module.exports = models ? models.Bots || model("Bots", botsSchema) : model("Bots", botsSchema);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ 9337:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose-paginate-v2");;

/***/ }),

/***/ 8245:
/***/ (function(module) {

"use strict";
module.exports = require("next-redirect");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,4730], function() { return __webpack_exec__(8455); });
module.exports = __webpack_exports__;

})();
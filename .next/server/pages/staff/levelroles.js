(function() {
var exports = {};
exports.id = 6900;
exports.ids = [6900];
exports.modules = {

/***/ 378:
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
/* harmony import */ var _schemas_LevelRoles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8828);
/* harmony import */ var _schemas_LevelRoles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_schemas_LevelRoles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);












const cfg = __webpack_require__(4985);

class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.props.quota = JSON.parse(this.props.quota);
    this.state = {
      quota: this.props.quota,
      role: "",
      image: ""
    };
  }

  render() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_10___default()), null, __jsx("title", null, cfg.siteName, " - ", _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.sidebar.levelRoles", this.props.lang))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, null), __jsx("div", {
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
    }, __jsx("div", null, __jsx("h5", {
      className: "text-2xl font-semibold leading-tight text-gray-200"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.head", this.props.lang))), __jsx("div", {
      className: "py-2"
    }), __jsx("h2", {
      className: "text-sm font-semibold leading-tight text-gray-200"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.addLevelRole", this.props.lang)), __jsx("div", {
      className: "my-2 flex sm:flex-row flex-col"
    }, __jsx("div", {
      className: "block relative"
    }, __jsx("select", {
      onChange: e => this.setState({
        role: e.target.value
      }),
      className: "w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    }, __jsx("option", {
      value: 0,
      selected: true,
      disabled: true
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.selectRole", this.props.lang)), this.props.server.roles.sort((a, b) => b.position - a.position).map(role => {
      return __jsx("option", {
        value: role.id,
        selected: this.state.role === role.id
      }, role.name);
    }))), __jsx("div", {
      className: "block relative ml-2"
    }, __jsx("input", {
      value: this.state.image,
      onChange: e => {
        this.setState({
          image: e.target.value
        });
      },
      placeholder: _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.roleImage", this.props.lang),
      className: "w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    })), __jsx("div", {
      className: "flex justify-center"
    }, __jsx("a", {
      className: "flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer",
      onClick: async e => {
        if (this.state.role.length === 0 || this.state.image.length === 0) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(_language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.fillEverything", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        var d = await axios__WEBPACK_IMPORTED_MODULE_4___default()(cfg.siteURL + "/api/levelroles", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            settings: this.state,
            admin: "9wA7yggY0WI"
          }
        }).then(t => t.data);

        if (d.error === 2) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(_language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.alreadyAdded", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(_language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.added", this.props.lang), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
        this.props.quota.push({
          id: this.state.role,
          roleLevel: this.state.image
        });
        this.setState({
          image: ""
        });
        this.setState({
          role: ""
        });
      }
    }, "Ekle"))), __jsx("div", {
      className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
    }, __jsx("div", {
      className: "inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"
    }, __jsx("table", {
      className: "min-w-full leading-normal"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.role", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.roleBadge", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.acts", this.props.lang)))), __jsx("tbody", null, this.props.quota.map((role, i) => {
      var nRole = this.props.server.roles.filter(r => r.id === role.id)[0];

      if (!nRole) {
        nRole = {
          name: _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.deletedRole", this.props.lang),
          number: role.id
        };
      }

      return __jsx("tr", {
        id: `quota-${i}`
      }, __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, nRole.name)), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, role.roleLevel)), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("div", {
        className: "flex"
      }, __jsx("div", {
        className: "badge cursor-pointer",
        onClick: async e => {
          var d = await axios__WEBPACK_IMPORTED_MODULE_4___default()(cfg.siteURL + "/api/levelroles", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
              settings: {
                role: nRole.id ? nRole.id : nRole.number,
                number: role.quota
              },
              delete: true,
              admin: "9wA7yggY0WI"
            }
          }).then(t => t.data);
          document.getElementById(`quota-${i}`).remove();
          return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(_language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.deleted", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }
      }, __jsx("span", {
        className: "px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full"
      }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.levelroles.delete", this.props.lang))))));
    }))))))))));
  }

}

async function getServerSideProps(ctx) {
  var quota = await _schemas_LevelRoles__WEBPACK_IMPORTED_MODULE_6___default().find({});

  const getCookie = key => {
    if (ctx.req.headers.cookie) {
      return ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0].split("=")[1] : null;
    } else {
      return null;
    }
  };

  if (getCookie("user")) {
    var user = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ","));
  } else {
    next_redirect__WEBPACK_IMPORTED_MODULE_2___default()(ctx, '/api/login');
    return {};
  }

  var server = await axios__WEBPACK_IMPORTED_MODULE_4___default()(cfg.siteURL + "/api/server", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      admin: "9wA7yggY0WI"
    }
  }).then(t => t.data);

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
      quota: JSON.stringify(quota),
      server,
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

/***/ 8828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const levelRolesSchema = new Schema({
  id: String,
  roleLevel: String
});
module.exports = models ? models.LevelRoles || model("LevelRoles", levelRolesSchema) : model("LevelRoles", levelRolesSchema);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,4730], function() { return __webpack_exec__(378); });
module.exports = __webpack_exports__;

})();
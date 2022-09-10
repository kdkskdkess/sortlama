(function() {
var exports = {};
exports.id = 2699;
exports.ids = [2699];
exports.modules = {

/***/ 1811:
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
/* harmony import */ var _schemas_Punishments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4021);
/* harmony import */ var _schemas_Punishments__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_schemas_Punishments__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











const cfg = __webpack_require__(4985);

class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.props.bots = JSON.parse(this.props.bots);
    this.state = {
      punish: "",
      id: "",
      reason: "",
      punishType: "",
      bots: this.props.bots
    };
  }

  render() {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_9___default()), null, __jsx("title", null, cfg.siteName, " - ", _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.punishments", this.props.lang))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, null), __jsx("div", {
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
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.head", this.props.lang))), __jsx("div", {
      className: "my-2 flex sm:flex-row flex-col"
    }, __jsx("div", {
      className: "block relative"
    }, __jsx("select", {
      onChange: e => {
        this.setState({
          punish: e.target.value
        });
        var index = e.nativeEvent.target.selectedIndex;
        this.setState({
          punishType: e.nativeEvent.target[index].text
        });
      },
      className: "w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    }, __jsx("option", {
      value: 0,
      selected: true,
      disabled: true
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.selectPunish", this.props.lang)), [{
      name: _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.punishments.botBan", this.props.lang),
      id: 1
    }, {
      name: _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.punishments.codeBan", this.props.lang),
      id: 2
    }, {
      name: _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.punishments.siteBan", this.props.lang),
      id: 3
    }].map(punish => {
      return __jsx("option", {
        value: punish.id
      }, punish.name);
    }))), __jsx("div", {
      className: "block relative ml-2"
    }, __jsx("input", {
      value: this.state.id,
      type: "number",
      onChange: e => {
        this.setState({
          id: e.target.value
        });
      },
      placeholder: _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.toBePunished", this.props.lang),
      className: "w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    })), __jsx("div", {
      className: "block relative ml-2"
    }, __jsx("input", {
      value: this.state.reason,
      onChange: e => {
        this.setState({
          reason: e.target.value
        });
      },
      placeholder: _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.reason", this.props.lang),
      className: "w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    })), __jsx("div", {
      className: "flex justify-center"
    }, __jsx("a", {
      className: "flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer",
      onClick: async e => {
        if (this.state.punish.length === 0 || this.state.id.length === 0) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.fillEverything", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        var d = await fetch(cfg.siteURL + "/api/punishments", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: this.state,
            staff: this.props.user.id,
            admin: "9wA7yggY0WI"
          })
        });

        if (d.error === 2) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.alreadyBanned", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(_language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.added", this.props.lang), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
        this.props.bots.push({
          id: this.state.id,
          punishID: this.state.punish,
          reason: this.state.reason
        });
        this.setState({
          punish: ""
        });
        this.setState({
          id: ""
        });
        this.setState({
          reason: ""
        });
      }
    }, "Ekle"))), __jsx("div", {
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
      type: "number",
      onChange: e => {
        this.setState({
          bots: this.props.bots.filter(bot => bot.id.includes(e.target.value.toLowerCase()))
        });
      },
      placeholder: "ID",
      className: "appearance-none rounded-r rounded-l sm:rounded-l-none border border-b block pl-8 pr-6 py-2 w-full text-sm placeholder-gray-400 bg-input text-gray-200 focus:placeholder-gray-200 focus:outline-none border-none"
    }))), __jsx("div", {
      className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
    }, __jsx("div", {
      className: "inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"
    }, __jsx("table", {
      className: "min-w-full leading-normal"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, "ID"), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.reason", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.acts", this.props.lang)))), __jsx("tbody", null, this.props.bots ? this.props.bots.map((p, i) => {
      var punishments = [{
        name: _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.punishments.botBan", this.props.lang),
        id: "1"
      }, {
        name: _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.punishments.codeBan", this.props.lang),
        id: "2"
      }, {
        name: _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.punishments.siteBan", this.props.lang),
        id: "3"
      }];
      var index = i;
      return __jsx("tr", {
        id: `punishment-${index}`
      }, __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, p.id)), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, punishments.filter(f => f.id === p.punishID)[0].name)), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, p.reason)), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("div", {
        className: "flex"
      }, __jsx("div", {
        className: "badge cursor-pointer"
      }, __jsx("span", {
        className: "px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full",
        onClick: async e => {
          await fetch(cfg.siteURL + "/api/punishments", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              data: p,
              staff: this.props.user.id,
              index: i,
              delete: true,
              admin: "9wA7yggY0WI"
            })
          });
          document.getElementById(`punishment-${index}`).remove();
          react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(_language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.deleted", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }
      }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.punishment.delete", this.props.lang))))));
    }) : __jsx("tr", null, __jsx("td", {
      className: "px-5 py-5 bg-input text-gray-100 text-sm"
    }, __jsx("div", {
      className: "flex items-center"
    }, __jsx("div", {
      className: "ml-3"
    }, __jsx("p", {
      className: "text-gray-200 whitespace-no-wrap"
    })))), __jsx("td", {
      className: "px-5 py-5 bg-input text-gray-100 text-sm"
    }, __jsx("p", {
      className: "text-gray-200 whitespace-no-wrap"
    })), __jsx("td", {
      className: "px-5 py-5 bg-input text-gray-100 text-sm"
    })))))))))));
  }

}

async function getServerSideProps(ctx) {
  var bots = await _schemas_Punishments__WEBPACK_IMPORTED_MODULE_4___default().find({});

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
      bots: JSON.stringify(bots),
      userIsStaff,
      userIsAdmin,
      lang: ctx.locale
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4021:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const quotaSchema = new Schema({
  id: String,
  punishID: String,
  reason: String
});
module.exports = models ? models.Punishments || model("Punishments", quotaSchema) : model("Punishments", quotaSchema);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,4730], function() { return __webpack_exec__(1811); });
module.exports = __webpack_exports__;

})();
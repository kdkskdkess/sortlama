(function() {
var exports = {};
exports.id = 7623;
exports.ids = [7623];
exports.modules = {

/***/ 1386:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _Components_Panel_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8245);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _schemas_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4029);
/* harmony import */ var _schemas_Settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_schemas_Settings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);












const cfg = __webpack_require__(4985);

class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    if (!this.props.settings || this.props.settings === null) {
      this.props.settings = JSON.stringify({});
    }

    this.props.settings = JSON.parse(this.props.settings);
    this.state = {
      botAdd: this.props.settings.botAdd ? true : false,
      regularlyBotApprove: this.props.settings.regularlyBotApprove ? true : false,
      codeAdd: this.props.settings.codeAdd ? true : false,
      regularlyCodeApprove: this.props.settings.regularlyCodeApprove ? true : false
    };
  }

  render() {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_10___default()), null, __jsx("title", null, cfg.siteName, " - ", _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.sidebar.settings", this.props.lang))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, null), __jsx("div", {
      className: "min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"
    }, __jsx(_Components_Panel_Sidebar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
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
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.settings.head", this.props.lang))), __jsx("div", {
      className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
    }, __jsx("div", {
      className: "inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"
    }, __jsx("div", {
      className: "mt-2 md:mt-8 md:ml-4 flex"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.settings.botApp", this.props.lang)), __jsx("div", {
      className: "flex ml-3"
    }, __jsx("label", {
      className: "cursor-pointer"
    }, __jsx("div", {
      className: "relative"
    }, __jsx("input", {
      checked: this.state.botAdd,
      id: "toogleA",
      type: "checkbox",
      className: "sr-only",
      onChange: e => {
        this.setState({
          botAdd: !this.state.botAdd
        });
      }
    }), __jsx("div", {
      className: "w-10 h-4 bg-gray-400 rounded-full shadow-inner"
    }), __jsx("div", {
      className: "dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
    }))))), __jsx("div", {
      className: "mt-2 md:mt-8 md:ml-4 flex"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.settings.codeApp", this.props.lang)), __jsx("div", {
      className: "flex ml-3"
    }, __jsx("label", {
      className: "cursor-pointer"
    }, __jsx("div", {
      className: "relative"
    }, __jsx("input", {
      checked: this.state.codeAdd,
      id: "toogleA",
      type: "checkbox",
      className: "sr-only",
      onChange: e => {
        this.setState({
          codeAdd: !this.state.codeAdd
        });
      }
    }), __jsx("div", {
      className: "w-10 h-4 bg-gray-400 rounded-full shadow-inner"
    }), __jsx("div", {
      className: "dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
    }))))), __jsx("div", {
      className: "mt-2 md:mt-8 md:ml-4 flex"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.settings.regularlyBotControl", this.props.lang)), __jsx("div", {
      className: "flex ml-3"
    }, __jsx("label", {
      className: "cursor-pointer"
    }, __jsx("div", {
      className: "relative"
    }, __jsx("input", {
      checked: this.state.regularlyBotApprove,
      id: "toogleA",
      type: "checkbox",
      className: "sr-only",
      onChange: e => {
        this.setState({
          regularlyBotApprove: !this.state.regularlyBotApprove
        });
      }
    }), __jsx("div", {
      className: "w-10 h-4 bg-gray-400 rounded-full shadow-inner"
    }), __jsx("div", {
      className: "dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
    }))))), __jsx("div", {
      className: "mt-2 md:mt-8 md:ml-4 flex"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("staff.settings.regularlyCodeControl", this.props.lang)), __jsx("div", {
      className: "flex ml-3"
    }, __jsx("label", {
      className: "cursor-pointer"
    }, __jsx("div", {
      className: "relative"
    }, __jsx("input", {
      checked: this.state.regularlyCodeApprove,
      id: "toogleA",
      type: "checkbox",
      className: "sr-only",
      onChange: e => {
        this.setState({
          regularlyCodeApprove: !this.state.regularlyCodeApprove
        });
      }
    }), __jsx("div", {
      className: "w-10 h-4 bg-gray-400 rounded-full shadow-inner"
    }), __jsx("div", {
      className: "dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
    }))))), __jsx("br", null), __jsx("div", {
      className: "flex justify-center"
    }, __jsx("a", {
      className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer",
      onClick: async e => {
        console.log(this.state);
        await axios__WEBPACK_IMPORTED_MODULE_7___default()(cfg.siteURL + "/api/settings", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            settings: this.state,
            admin: "9wA7yggY0WI"
          }
        });
        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(_language__WEBPACK_IMPORTED_MODULE_9___default()("saved", this.props.lang), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
      }
    }, _language__WEBPACK_IMPORTED_MODULE_9___default()("send", this.props.lang))), __jsx("div", {
      className: "py-3"
    }))))))));
  }

}

async function getServerSideProps(ctx) {
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
    next_redirect__WEBPACK_IMPORTED_MODULE_5___default()(ctx, '/api/login');
    return {};
  }

  const settings = (await _schemas_Settings__WEBPACK_IMPORTED_MODULE_6___default().findOne({
    id: 1
  })) || {};

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
      settings: JSON.stringify(settings),
      userIsStaff,
      userIsAdmin,
      lang: ctx.locale
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const siteSettings = new Schema({
  id: String,
  botAdd: Boolean,
  regularlyBotApprove: Boolean,
  codeAdd: Boolean,
  regularlyCodeApprove: Boolean
});
module.exports = models ? models.Settings || model("Settings", siteSettings) : model("Settings", siteSettings);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,4730], function() { return __webpack_exec__(1386); });
module.exports = __webpack_exports__;

})();
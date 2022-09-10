(function() {
var exports = {};
exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 6293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1459);
/* harmony import */ var _Components_CodeCard2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
/* harmony import */ var _schemas_Codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3191);
/* harmony import */ var _schemas_Codes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_schemas_Codes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4245);
/* harmony import */ var _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8660);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3414);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_schemas_Advertisements__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4985);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_11__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);













class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.props.codes = JSON.parse(this.props.codes);
    this.props.advertisements = JSON.parse(this.props.advertisements);
    this.props.categories = JSON.parse(this.props.categories);
    this.state = {
      codes: this.props.codes
    };
  }

  render() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, (_config_js__WEBPACK_IMPORTED_MODULE_11___default().siteName), " - ", _language__WEBPACK_IMPORTED_MODULE_10___default()("navbar.tags", this.props.lang))), __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      userIsStaff: this.props.userIsStaff,
      lang: this.props.lang,
      userPunishments: this.props.userPunishments
    }), __jsx("div", {
      className: "p-8"
    }, __jsx("div", {
      className: "px-4",
      align: "center"
    }, __jsx("div", {
      className: "py-8"
    }), __jsx("a", {
      className: "text-gray-100 no-underline text-4xl font-bold"
    }, "Darkcode List"), __jsx("div", {
      className: "py-0.5"
    }), __jsx("a", {
      className: "text-gray-300 no-underline text-md"
    }, _language__WEBPACK_IMPORTED_MODULE_10___default()("categories.section", this.props.lang)), __jsx("div", {
      className: "py-3"
    }), __jsx("div", {
      className: "flex justify-center"
    }, __jsx("input", {
      onChange: e => {
        this.setState({
          codes: this.props.codes.filter(bot => bot.categories.includes(router.query.category)).filter(bot => bot.name.toLowerCase().includes(e.target.value.toLowerCase()))
        });
      },
      className: "py-4 px-2 w-full md:w-1/3 bg-input rounded-l-md text-white border border-transparent focus:outline-none focus:border-transparent",
      placeholder: _language__WEBPACK_IMPORTED_MODULE_10___default()("codePlaceholder", this.props.lang)
    }), __jsx("a", {
      className: "py-4 px-2 rounded-r-md bg-input text-white border border-transparent focus:outline-none focus:border-transparent cursor-pointer"
    }, __jsx("svg", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      viewBox: "0 0 24 24",
      className: "w-6 h-6"
    }, __jsx("path", {
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    })))), __jsx("div", {
      className: "md:flex flex-col md:flex-row md:flex-wrap items-center justify-center"
    }, this.props.categories.map(tag => {
      return __jsx("a", {
        href: `/${this.props.lang}/codes/categories/${tag}`
      }, __jsx("div", {
        className: "mt-2"
      }, __jsx("a", {
        className: "relative text-lg py-1 px-3 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
      }, tag)));
    })))), __jsx("div", {
      className: "py-2"
    }), __jsx("div", {
      align: "center"
    }, this.props.advertisements.map(ad => {
      return __jsx("div", {
        className: "mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
      }, __jsx("img", {
        src: ad.image,
        className: "object-cover object-center w-full h-full visible group-hover:hidden"
      }));
    })), __jsx("div", {
      className: "py-2"
    }), __jsx("div", {
      className: "bg-discord-black-darker w-full h-full"
    }, __jsx("div", {
      className: "p-4"
    }), __jsx("div", {
      className: "p-4 md:px-6"
    }, __jsx("div", {
      className: "flex flex-grow flex-wrap items-center justify-center"
    }, this.state.codes.filter(code => code.categories.includes(router.query.category)).map((code, i) => {
      return __jsx(_Components_CodeCard2__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        lang: this.props.lang,
        code: code.code,
        name: code.name,
        description: code.desc
      });
    }))), __jsx("div", {
      className: "py-5"
    })), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      lang: this.props.lang
    }));
  }

}

async function getServerSideProps(ctx) {
  var codes = await _schemas_Codes__WEBPACK_IMPORTED_MODULE_4___default().find({});
  codes.forEach(el => {
    el["key"] = null;
  });
  var ads = await _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_7___default().find({
    position_id: 11
  });

  const getCookie = key => {
    if (ctx.req.headers.cookie) {
      return ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0].split("=")[1] : null;
    } else {
      return null;
    }
  };

  const Staffs = __webpack_require__(71);

  var userIsStaff = (await Staffs.findOne({
    id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id
  })) ? true : false;

  var Punishments = __webpack_require__(4021);

  var userPunishments = [];

  if (getCookie("user")) {
    userPunishments = (await Punishments.find({
      id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id
    })).length >= 1 ? (await Punishments.find({
      id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id
    })).map(p => p.punishID) : [];
  }

  var categories = (await _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_5___default().findOne({
    id: 1
  })) ? await _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_5___default().findOne({
    id: 1
  }) : {};
  categories = categories.categories ? categories.categories : [];
  return {
    props: {
      userPunishments,
      codes: JSON.stringify(codes.filter(bot => bot.waiting === false)),
      categories: JSON.stringify(categories),
      advertisements: JSON.stringify(ads),
      userIsStaff,
      lang: ctx.locale
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4245:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const codeSettingsSchema = new Schema({
  id: Number,
  staffRoles: Array,
  publisherRoles: Array,
  categories: Array,
  categoryRoles: Array
});
module.exports = models ? models.codeSettingsSchema || model("CodeSettings", codeSettingsSchema) : model("CodeSettings", codeSettingsSchema);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,2079,8977], function() { return __webpack_exec__(6293); });
module.exports = __webpack_exports__;

})();
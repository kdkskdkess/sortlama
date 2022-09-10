(function() {
var exports = {};
exports.id = 3195;
exports.ids = [3195];
exports.modules = {

/***/ 6009:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8245);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3414);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_schemas_Advertisements__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1459);
/* harmony import */ var _Components_SponsorCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6582);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8660);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








const cfg = __webpack_require__(4985);





const App = ({
  advertisements,
  userIsStaff,
  lang,
  userPunishments
}) => {
  advertisements = JSON.parse(advertisements);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, cfg.siteName, " - ", _language__WEBPACK_IMPORTED_MODULE_7___default()("navbar.partners", lang)), __jsx("meta", {
    property: "og:type",
    content: "Anka Bot List"
  }), __jsx("meta", {
    property: "og:url",
    content: "botlist.club/"
  }), __jsx("meta", {
    property: "og:color",
    content: "#3095ff"
  }), __jsx("meta", {
    property: "og:description",
    content: "Discord Bot List for Anka!"
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Anka Bot List"
  }), __jsx("meta", {
    property: "og:image",
    content: "https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#3095ff"
  }), __jsx("meta", {
    name: "robots",
    content: "index, follow"
  }), __jsx("meta", {
    name: "revisit-after",
    content: "1 days"
  }), __jsx("meta", {
    name: "author",
    content: "Anka Devs"
  }), __jsx("meta", {
    name: "language",
    content: "English"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png",
    type: "image/x-icon"
  }), __jsx("meta", {
    name: "abstract",
    content: "Discord Bot List"
  }), __jsx("meta", {
    name: "copyright",
    content: "\xA9 Anka List"
  })), __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    userIsStaff: userIsStaff,
    lang: lang,
    userPunishments: userPunishments
  }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, null), __jsx("div", {
    className: "py-2"
  }), __jsx("div", {
    align: "center"
  }, advertisements.map(ad => {
    return __jsx("div", {
      className: "mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
    }, __jsx("img", {
      src: ad.image,
      className: "object-cover object-center w-full h-full visible group-hover:hidden"
    }));
  })), __jsx("div", {
    className: "py-8"
  }), __jsx("div", {
    className: "bg-discord-black-darker w-full h-full"
  }, __jsx("div", {
    className: "p-4"
  }), __jsx("div", {
    className: "text-center"
  }, __jsx("a", {
    className: "text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10"
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("partners.text", lang))), __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "p-4 md:px-6"
  }, __jsx("div", {
    className: "flex flex-grow flex-wrap items-center justify-center"
  }, cfg.partners.map((sponsor, i) => {
    return __jsx(_Components_SponsorCard__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      lang: lang,
      name: sponsor.name,
      url: sponsor.url,
      description: sponsor.description,
      image: sponsor.image
    });
  }))), __jsx("div", {
    className: "p-8"
  })), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    lang: lang
  }));
};

async function getServerSideProps(ctx) {
  var ads = await _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_6___default().find({
    position_id: 12
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

  return {
    props: {
      userPunishments,
      advertisements: JSON.stringify(ads),
      userIsStaff,
      lang: ctx.locale
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,2079,6582], function() { return __webpack_exec__(6009); });
module.exports = __webpack_exports__;

})();
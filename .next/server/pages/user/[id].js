(function() {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 2045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Index": function() { return /* binding */ Index; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Components_CodeCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9899);
/* harmony import */ var _Components_CodeCard2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3392);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1459);
/* harmony import */ var _schemas_Bots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62);
/* harmony import */ var _schemas_Bots__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_schemas_Bots__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _schemas_Codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3191);
/* harmony import */ var _schemas_Codes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_schemas_Codes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _schemas_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5823);
/* harmony import */ var _schemas_User__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_schemas_User__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_UserSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6968);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4985);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3414);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_schemas_Advertisements__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8245);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8660);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_16__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
















function Index({
  user,
  bots,
  profile,
  advertisements,
  userIsStaff,
  userLevelRoles,
  lang,
  userPunishments,
  codes
}) {
  bots = JSON.parse(bots);
  profile = JSON.parse(profile);
  advertisements = JSON.parse(advertisements);
  codes = JSON.parse(codes);
  userLevelRoles = JSON.parse(userLevelRoles);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    userIsStaff: userIsStaff,
    lang: lang,
    userPunishments: userPunishments
  }), __jsx("div", {
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
    className: "py-2"
  }), __jsx("div", {
    className: "bg-discord-black-darker w-full md:p-7"
  }, __jsx("div", {
    className: "md:flex md:flex-wrap flex-row-reverse md:flex-row"
  }, __jsx("div", {
    className: "bg-discord-black-darker w-3/4 h-full items-center justify-center"
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("a", {
    className: "text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10"
  }, _language__WEBPACK_IMPORTED_MODULE_16___default()("profile.bots", lang))), __jsx("div", {
    className: "p-4 md:px-6"
  }, __jsx("div", {
    className: "flex flex-grow flex-wrap items-center justify-center"
  }, bots.sort((a, b) => {
    return (b.votes || 0) - (a.votes || 0);
  }).filter(bot => js_cookie__WEBPACK_IMPORTED_MODULE_10___default().get("user") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_10___default().get("user")).id === user.id ? bot.id : bot.waiting === false : bot.waiting === false).map((bot, i) => {
    return __jsx(_Components_CodeCard__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      lang: lang,
      bot: bot,
      id: bot.id,
      name: bot.bot.name,
      votes: bot.votes || 0,
      description: bot.shortDesc,
      avatar: bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
      profile: true
    });
  }))), __jsx("div", {
    className: "py-3"
  }), __jsx("div", {
    className: "text-center"
  }, __jsx("a", {
    className: "text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10"
  }, _language__WEBPACK_IMPORTED_MODULE_16___default()("profile.codes", lang))), __jsx("div", {
    className: "p-4 md:px-6"
  }, __jsx("div", {
    className: "flex flex-grow flex-wrap items-center justify-center"
  }, codes.filter(code => js_cookie__WEBPACK_IMPORTED_MODULE_10___default().get("user") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_10___default().get("user")).id === user.id ? code.name : code.waiting === false : code.waiting === false).map((code, i) => {
    return __jsx(_Components_CodeCard2__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      lang: lang,
      code: code.code,
      name: code.name,
      description: code.desc,
      profile: true
    });
  }))), __jsx("div", {
    className: "py-5"
  })), __jsx("div", {
    className: "py-3 md:py-0"
  }), __jsx(_Components_UserSidebar__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    user: user,
    lang: lang,
    bots: bots,
    profile: profile,
    levelRoles: userLevelRoles
  }))), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    lang: lang
  }));
}
async function getServerSideProps(ctx) {
  const getCookie = key => {
    if (ctx.req.headers.cookie) {
      return ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0].split("=")[1] : null;
    } else {
      return null;
    }
  };

  if (ctx.params.id === "@me") {
    try {
      var a = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id;
    } catch (err) {
      next_redirect__WEBPACK_IMPORTED_MODULE_14___default()(ctx, '/api/login');
      return {};
    }

    if (!a) {
      next_redirect__WEBPACK_IMPORTED_MODULE_14___default()(ctx, '/api/login');
      return {};
    }
  }

  try {
    var user = await fetch(`https://discord.com/api/v8/users/${a || ctx.params.id}`, {
      method: "GET",
      headers: {
        "Authorization": "Bot " + (_config_js__WEBPACK_IMPORTED_MODULE_11___default().token),
        "Content-Type": "application/json"
      }
    }).then(u => u.json());
  } catch (err) {
    next_redirect__WEBPACK_IMPORTED_MODULE_14___default()(ctx, "/");
    return {
      props: {}
    };
  }

  if (user.message) {
    return next_redirect__WEBPACK_IMPORTED_MODULE_14___default()(ctx, "/");
  }

  const bots = await _schemas_Bots__WEBPACK_IMPORTED_MODULE_6___default().find({
    "developers": {
      $elemMatch: {
        "id": user.id
      }
    }
  });
  const codes = await _schemas_Codes__WEBPACK_IMPORTED_MODULE_7___default().find({
    "developer.id": user.id
  });
  bots.forEach(el => {
    el["key"] = null;
  });
  const profile = (await _schemas_User__WEBPACK_IMPORTED_MODULE_8___default().findOne({
    id: user.id
  })) || {};
  var ads = await _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_12___default().find({
    position_id: 8
  });

  const Staffs = __webpack_require__(71);

  var userIsStaff = (await Staffs.findOne({
    id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id
  })) ? true : false;
  var member = await fetch(`https://discord.com/api/v8/guilds/${(_config_js__WEBPACK_IMPORTED_MODULE_11___default().serverID)}/members/${a || ctx.params.id}`, {
    method: "GET",
    headers: {
      "Authorization": "Bot " + (_config_js__WEBPACK_IMPORTED_MODULE_11___default().token),
      "Content-Type": "application/json"
    }
  }).then(u => u.json());
  var roles = [];

  if (!member.message) {
    roles = member.roles;
  }

  const LevelRoles = __webpack_require__(8828);

  const levelRoles = await LevelRoles.find({});
  var userLevelRoles = [];

  for (let obj of levelRoles) {
    if (roles.includes(obj.id)) {
      userLevelRoles.push(obj);
    }
  }

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
      user,
      bots: JSON.stringify(bots),
      codes: JSON.stringify(codes),
      profile: JSON.stringify(profile),
      advertisements: JSON.stringify(ads),
      userIsStaff,
      userLevelRoles: JSON.stringify(userLevelRoles),
      lang: ctx.locale
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,2079,7340,8977,9748], function() { return __webpack_exec__(2045); });
module.exports = __webpack_exports__;

})();
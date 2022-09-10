(function() {
var exports = {};
exports.id = 1682;
exports.ids = [1682];
exports.modules = {

/***/ 6855:
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1459);
/* harmony import */ var _schemas_Bots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62);
/* harmony import */ var _schemas_Bots__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_schemas_Bots__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_BotSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8706);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3414);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_schemas_Advertisements__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8245);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8660);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











const cfg = __webpack_require__(4985);



function Index({
  bot,
  user,
  advertisements,
  userIsStaff,
  lang,
  userPunishments
}) {
  bot = JSON.parse(bot);
  advertisements = JSON.parse(advertisements);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    userIsStaff: userIsStaff,
    lang: lang,
    userPunishments: userPunishments
  }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, null), __jsx("div", {
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
    className: "bg-discord-black-darker w-full p-7"
  }, __jsx("div", {
    className: "md:flex md:flex-wrap flex-row-reverse md:flex-row"
  }, __jsx("div", {
    className: "w-full md:w-8/12 order-last md:order-none mx-auto h-full bg-discord-black rounded-md shadow-lg p-4 py-4"
  }, __jsx("div", {
    className: "text-center text-white p-6"
  }, __jsx("a", {
    className: "font-bold text-5xl break-all"
  }, bot.bot.name), __jsx("br", null), __jsx("a", {
    className: "text-xl"
  }, _language__WEBPACK_IMPORTED_MODULE_10___default()("bot.vote.section", lang)), __jsx("br", null), __jsx("br", null), __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex justify-center"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer",
    onClick: async e => {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("user")) {
        var d;

        try {
          d = await axios__WEBPACK_IMPORTED_MODULE_4___default()(cfg.siteURL + "/api/bots/vote", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
              bot: bot.id,
              user: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("user")).id,
              admin: "9wA7yggY0WI"
            }
          });
        } catch (err) {
          console.log(err);
          return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(_language__WEBPACK_IMPORTED_MODULE_10___default()("error", lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        console.log(d);
        d = d.data;
        console.log(d);

        if (d.error === 3) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(_language__WEBPACK_IMPORTED_MODULE_10___default()("bot.vote.messages.alreadyVoted", lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        if (d.result === true) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(_language__WEBPACK_IMPORTED_MODULE_10___default()("bot.vote.messages.voted", lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }
      } else {
        return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(_language__WEBPACK_IMPORTED_MODULE_10___default()("bot.vote.messages.login", lang), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
      }
    }
  }, _language__WEBPACK_IMPORTED_MODULE_10___default()("bot.vote.vote", lang))))), __jsx("div", {
    className: "py-3 md:py-0"
  }), __jsx(_Components_BotSidebar__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    bot: bot,
    user: user,
    lang: lang
  }))), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    lang: lang
  }));
}
async function getServerSideProps(ctx) {
  if (!ctx.params.id) {
    next_redirect__WEBPACK_IMPORTED_MODULE_11___default()(ctx, '/');
    return {};
  }

  var bot = await _schemas_Bots__WEBPACK_IMPORTED_MODULE_7___default().findOne({
    id: ctx.params.id
  });
  if (!bot) bot = await _schemas_Bots__WEBPACK_IMPORTED_MODULE_7___default().findOne({
    specialURL: ctx.params.id
  });

  if (!bot) {
    next_redirect__WEBPACK_IMPORTED_MODULE_11___default()(ctx, '/');
    return {};
  }

  const getCookie = key => {
    if (ctx.req.headers.cookie) {
      return ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0].split("=")[1] : null;
    } else {
      return null;
    }
  };

  var user = getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {};

  if (getCookie("user")) {
    if (!bot.developers.map(el => el.id).includes(JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id)) {
      bot.key = null;
    }
  }

  if (bot.waiting === true) {
    next_redirect__WEBPACK_IMPORTED_MODULE_11___default()(ctx, '/');
    return {};
  }

  var ads = await _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_9___default().find({
    position_id: 4
  });

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
      bot: JSON.stringify(bot),
      advertisements: JSON.stringify(ads),
      user: user,
      userIsStaff,
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

/***/ }),

/***/ 2725:
/***/ (function(module) {

"use strict";
module.exports = require("react-copy-to-clipboard");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,2079,4454], function() { return __webpack_exec__(6855); });
module.exports = __webpack_exports__;

})();
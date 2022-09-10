(function() {
var exports = {};
exports.id = 3845;
exports.ids = [3845];
exports.modules = {

/***/ 4805:
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
/* harmony import */ var _Components_CodeCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9899);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1459);
/* harmony import */ var _Components_UserSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6968);
/* harmony import */ var _schemas_Bots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62);
/* harmony import */ var _schemas_Bots__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_schemas_Bots__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _schemas_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5823);
/* harmony import */ var _schemas_User__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_schemas_User__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8660);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3414);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_schemas_Advertisements__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8245);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_13__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










const cfg = __webpack_require__(4985);






class Index extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.props.bots = JSON.parse(this.props.bots);
    this.props.profile = JSON.parse(this.props.profile);
    this.props.advertisements = JSON.parse(this.props.advertisements);
    this.props.userLevelRoles = JSON.parse(this.props.userLevelRoles);
    this.state = {
      biography: this.props.profile.biography ? this.props.profile.biography : "",
      instagram: this.props.profile.instagram ? this.props.profile.instagram : "",
      github: this.props.profile.github ? this.props.profile.github : "",
      twitter: this.props.profile.twitter ? this.props.profile.twitter : "",
      website: this.props.profile.website ? this.props.profile.website : "",
      youtube: this.props.profile.youtube ? this.props.profile.youtube : ""
    };
  }

  render() {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      userIsStaff: this.props.userIsStaff,
      lang: this.props.lang,
      userPunishments: this.props.userPunishments
    }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__.ToastContainer, null), __jsx("div", {
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
      className: "bg-discord-black-darker w-full md:p-7"
    }, __jsx("div", {
      className: "md:flex md:flex-wrap flex-row-reverse md:flex-row"
    }, __jsx("div", {
      className: "bg-discord-black w-full md:w-3/4 h-full"
    }, __jsx("div", {
      className: "p-4 md:p-6"
    }, __jsx("div", {
      className: "w-full",
      align: "center"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_4___default()("profile.edit.biography", this.props.lang)), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "description")), __jsx("input", {
      value: this.state.biography,
      onChange: e => this.setState({
        biography: e.target.value
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",
      placeholder: "..."
    }))), __jsx("br", null), __jsx("div", {
      className: "w-full",
      align: "center"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, "Instagram"), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "photo_camera")), __jsx("input", {
      value: this.state.instagram,
      onChange: e => this.setState({
        instagram: e.target.value
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",
      placeholder: "https://instagram.com/instagram"
    }))), __jsx("br", null), __jsx("div", {
      className: "w-full",
      align: "center"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, "Youtube"), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "videocam")), __jsx("input", {
      value: this.state.youtube,
      onChange: e => this.setState({
        youtube: e.target.value
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",
      placeholder: "https://youtube.com/youtube"
    }))), __jsx("br", null), __jsx("div", {
      className: "w-full",
      align: "center"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, "Github"), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "code")), __jsx("input", {
      value: this.state.github,
      onChange: e => this.setState({
        github: e.target.value
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",
      placeholder: "https://github.com/github"
    }))), __jsx("br", null), __jsx("div", {
      className: "w-full",
      align: "center"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, "Twitter"), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "sms")), __jsx("input", {
      value: this.state.twitter,
      onChange: e => this.setState({
        twitter: e.target.value
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",
      placeholder: "https://twitter.com/twitter"
    }))), __jsx("br", null), __jsx("div", {
      className: "w-full",
      align: "center"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, "Website"), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "language")), __jsx("input", {
      value: this.state.website,
      onChange: e => this.setState({
        website: e.target.value
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",
      placeholder: "https://website.com"
    }))), __jsx("br", null), __jsx("div", {
      className: "flex justify-center"
    }, __jsx("a", {
      className: "flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer",
      onClick: async e => {
        await axios__WEBPACK_IMPORTED_MODULE_12___default()(cfg.siteURL + "/api/settings", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            settings: this.state,
            admin: "9wA7yggY0WI",
            userSettings: true,
            user: this.props.user.id
          }
        });
        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success(_language__WEBPACK_IMPORTED_MODULE_4___default()("saved", this.props.lang), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
      }
    }, "Kaydet"))), __jsx("div", {
      className: "py-2"
    })), __jsx("div", {
      className: "py-3 md:py-0"
    }), __jsx(_Components_UserSidebar__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      user: this.props.user,
      bots: this.props.bots,
      profile: this.props.profile,
      levelRoles: this.props.userLevelRoles,
      lang: this.props.lang
    }))), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      lang: this.props.lang
    }));
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

  try {
    var a = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id;
  } catch (err) {
    next_redirect__WEBPACK_IMPORTED_MODULE_13___default()(ctx, '/api/login');
    return {};
  }

  if (!a) {
    next_redirect__WEBPACK_IMPORTED_MODULE_13___default()(ctx, '/api/login');
    return {};
  }

  try {
    var user = await fetch(`https://discord.com/api/users/@me`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + getCookie("access_token"),
        "Content-Type": "application/json"
      }
    }).then(u => u.json());
  } catch (err) {
    next_redirect__WEBPACK_IMPORTED_MODULE_13___default()(ctx, "/");
    return {
      props: {}
    };
  }

  if (user.message) {
    return next_redirect__WEBPACK_IMPORTED_MODULE_13___default()(ctx, "/");
  }

  const bots = await _schemas_Bots__WEBPACK_IMPORTED_MODULE_7___default().find({
    "developers": {
      $elemMatch: {
        "id": user.id
      }
    }
  });
  const profile = (await _schemas_User__WEBPACK_IMPORTED_MODULE_8___default().findOne({
    id: user.id
  })) || {};
  var ads = await _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_10___default().find({
    position_id: 9
  });

  const Staffs = __webpack_require__(71);

  var userIsStaff = (await Staffs.findOne({
    id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id
  })) ? true : false;
  var member = await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${a || ctx.params.id}`, {
    method: "GET",
    headers: {
      "Authorization": "Bot " + cfg.token,
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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,2079,7340,9748], function() { return __webpack_exec__(4805); });
module.exports = __webpack_exports__;

})();
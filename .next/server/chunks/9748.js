exports.id = 9748;
exports.ids = [9748];
exports.modules = {

/***/ 6968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4985);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






const Sidebar = ({
  user,
  bots,
  profile,
  levelRoles,
  lang
}) => {
  return __jsx("div", {
    className: "w-full md:w-1/5 h-full mx-auto bg-discord-black rounded-md shadow-lg"
  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), null, __jsx("title", null, (_config_js__WEBPACK_IMPORTED_MODULE_3___default().siteName), " - ", user.username)), __jsx("div", {
    className: "p-5 md:p-3"
  }, __jsx("div", {
    align: "center"
  }, __jsx("img", {
    src: user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
    className: "w-32 h-32 rounded-full"
  })), __jsx("div", {
    className: "py-3"
  }), levelRoles.length >= 1 ? __jsx("div", {
    className: "md:flex flex-col md:flex-row md:flex-wrap items-center justify-center"
  }, levelRoles.map(levelRole => {
    return __jsx("div", {
      className: "mt-2"
    }, __jsx("img", {
      src: levelRole.roleLevel,
      className: "w-8 h-8"
    }));
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), __jsx("div", {
    className: "text-center text-white"
  }, __jsx("a", {
    className: "text-white text-2xl no-underline font-bold"
  }, user.username, "#", user.discriminator), __jsx("br", null), __jsx("a", {
    className: "text-gray-200 text-lg no-underline"
  }, profile.biography || _language__WEBPACK_IMPORTED_MODULE_4___default()("profile.noDesc", lang))), __jsx("div", {
    className: "py-4"
  }), profile.instagram && profile.instagram.length >= 1 ? __jsx("a", {
    href: profile.instagram
  }, __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-purple-800 p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "photo_camera")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2"
  }, "Instagram"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), profile.github && profile.github.length >= 1 ? __jsx("a", {
    href: profile.github
  }, __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "code")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2"
  }, "Github"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), profile.youtube && profile.youtube.length >= 1 ? __jsx("a", {
    href: profile.youtube
  }, __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-red-800 p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "videocam")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2"
  }, "Youtube"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), profile.twitter && profile.twitter.length >= 1 ? __jsx("a", {
    href: profile.twitter
  }, __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-blue-800 p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "sms")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2"
  }, "Twitter"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), profile.website && profile.website.length >= 1 ? __jsx("a", {
    href: profile.website
  }, __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-green-800 p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "language")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2"
  }, "Website"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), __jsx("div", {
    className: "py-4"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "smart_toy")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
  }, _language__WEBPACK_IMPORTED_MODULE_4___default()("profile.bots", lang), ": ", bots.length)), __jsx("div", {
    className: "py-2"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "add")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
  }, _language__WEBPACK_IMPORTED_MODULE_4___default()("profile.botVotes", lang), ": ", bots.reduce(function (acc, obj) {
    return acc + (obj.votes || 0);
  }, 0))), __jsx("div", {
    className: "py-2"
  }), js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user") && JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user")).id === user.id ? __jsx("div", {
    className: "flex items-center justify-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/user/edit"
  }, __jsx("a", {
    className: "text-center flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_4___default()("card.edit", lang)))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), __jsx("div", {
    className: "py-2"
  })));
};

/* harmony default export */ __webpack_exports__["Z"] = (Sidebar);

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

/***/ 5823:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const userSchema = new Schema({
  id: String,
  tag: String,
  biography: String,
  twitter: String,
  instagram: String,
  website: String,
  github: String,
  youtube: String,
  howManyCodeAdded: Object
});
module.exports = models ? models.User || model("User", userSchema) : model("User", userSchema);

/***/ })

};
;
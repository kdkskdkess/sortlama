exports.id = 2079;
exports.ids = [2079];
exports.modules = {

/***/ 8660:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4985);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2378);
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_language_js__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







var {
  langs
} = __webpack_require__(2378);

var flags = {
  "tr": "tr",
  "en": "us"
};

const toProperCase = string => {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length).toLowerCase();
};

function App({
  lang
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const link = router.asPath;
  return __jsx("footer", {
    className: "footer bg-discord-black-semidarker relative pt-1 h-auto"
  }, __jsx("div", {
    className: "container mx-auto px-6"
  }, __jsx("div", {
    className: "sm:flex sm:mt-8"
  }, __jsx("div", {
    className: "mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between"
  }, __jsx("div", {
    className: "flex flex-col"
  }), __jsx("div", {
    className: "flex flex-col"
  }, __jsx("span", {
    className: "font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"
  }, _language_js__WEBPACK_IMPORTED_MODULE_5___default()("footer.pages", lang)), __jsx("span", {
    className: "my-2"
  }, __jsx("span", {
    className: "my-1"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/"
  }, __jsx("a", {
    className: "text-white hover:text-gray-200 text-lg cursor-pointer"
  }, _language_js__WEBPACK_IMPORTED_MODULE_5___default()("navbar.index", lang)))), __jsx("br", null), __jsx("span", {
    className: "my-1"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/bots"
  }, __jsx("a", {
    className: "text-white hover:text-gray-200 text-lg cursor-pointer"
  }, _language_js__WEBPACK_IMPORTED_MODULE_5___default()("navbar.bots", lang)))), __jsx("br", null), __jsx("span", {
    className: "my-1"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/addbot"
  }, __jsx("a", {
    className: "text-white hover:text-gray-200 text-lg cursor-pointer"
  }, _language_js__WEBPACK_IMPORTED_MODULE_5___default()("navbar.user.addbot", lang)))), __jsx("br", null), __jsx("span", {
    className: "my-1"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/staffs"
  }, __jsx("a", {
    className: "text-white hover:text-gray-200 text-lg cursor-pointer"
  }, _language_js__WEBPACK_IMPORTED_MODULE_5___default()("navbar.staffs", lang)))))), __jsx("div", {
    className: "flex flex-col"
  }, __jsx("span", {
    className: "font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"
  }, _language_js__WEBPACK_IMPORTED_MODULE_5___default()("footer.socialMedia", lang)), __jsx("span", {
    className: "my-2"
  }, Object.keys((_config_js__WEBPACK_IMPORTED_MODULE_4___default().socialMedia)).map(el => {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("span", {
      className: "my-1"
    }, __jsx("a", {
      className: "text-white hover:text-gray-200 text-lg cursor-pointer",
      href: (_config_js__WEBPACK_IMPORTED_MODULE_4___default().socialMedia)[el]
    }, toProperCase(el))), __jsx("br", null));
  }))), __jsx("div", {
    className: "flex flex-col"
  }, __jsx("span", {
    className: "font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2"
  }, _language_js__WEBPACK_IMPORTED_MODULE_5___default()("footer.language", lang)), __jsx("span", {
    className: "my-2"
  }, __jsx("div", {
    className: "dropdown-1 inline-block relative"
  }, __jsx("button", {
    className: "mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer inline-flex items-center focus:outline-none"
  }, __jsx("span", {
    className: "mr-1"
  }, __jsx("a", {
    className: "ml-2"
  }, __jsx("span", {
    className: `flag-icon flag-icon-${flags[lang]}`
  }))), __jsx("svg", {
    className: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  }), " ")), __jsx("ul", {
    className: "dropdown-menu-1 absolute hidden text-gray-700 pt-1"
  }, langs.filter(el => el !== lang).map((el, i) => {
    return __jsx("li", {
      key: i
    }, __jsx("a", {
      href: `${_language_js__WEBPACK_IMPORTED_MODULE_5___default().link(el, link)}`,
      className: "bg-blurple dark:bg-gray-800 mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer py-2 px-4 block whitespace-no-wrap"
    }, __jsx("span", {
      className: `flag-icon flag-icon-${flags[el]}`
    })));
  }))))), __jsx("div", {
    className: "flex flex-col"
  })))));
}

/***/ }),

/***/ 1459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ranks_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4202);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4985);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









const Navbar = ({
  userIsStaff,
  lang,
  userPunishments
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const qs = key => {
      key = key.replace(/[*+?^$.[\]{}()|\\/]/g, '\\$&'); // escape RegEx meta chars

      const match = window.location.search.match(new RegExp(`[?&]${key}=([^&]+)(&|$)`));
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }; //if(window.location.protocol === "http:") {
    //    window.location.href = window.location.href.replace("http:", "https:");
    //}


    if (qs('token')) {
      (async () => {
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().set('access_token', qs('token'));
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().set('refresh_token', qs('refresh'));
        const user = await axios__WEBPACK_IMPORTED_MODULE_3___default()({
          method: "POST",
          url: (_config_js__WEBPACK_IMPORTED_MODULE_7___default().siteURL) + "/api/token",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            token: qs("token")
          }
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().set('user', user.data);
        window.location.href = window.location.toString().split("?token")[0];
      })();
    }

    if (qs("logout") && qs("logout") === "true") {
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove('access_token', {
        path: ''
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove('refresh_token', {
        path: ''
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove('user', {
        path: ''
      });
      window.location.href = "/";
    }

    if (userPunishments.length >= 1) {
      if (userPunishments.includes("3")) {
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove('access_token', {
          path: ''
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove('refresh_token', {
          path: ''
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove('user', {
          path: ''
        });
        window.location.href = "/";
      } else if (userPunishments.includes("2")) {
        if (qs("addcode")) {
          window.location.href = "/";
        }
      }
    }
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", null, __jsx("div", {
    className: "md:px-12 md:py-4 md:p-6 default-font md:flex md:items-stretch w-full z-50 fixed sticky top-0 bg-discord-black-semidarker"
  }, __jsx("div", {
    className: "flex flex-no-shrink items-stretch h-12 justify-between"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, (_config_js__WEBPACK_IMPORTED_MODULE_7___default().siteName))), __jsx("div", {
    className: "block md:hidden"
  }, __jsx("a", {
    onClick: () => document.getElementById("navbar").classList.toggle("hidden"),
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer mt-1"
  }, __jsx("span", {
    className: "material-icons"
  }, "filter_list")))), __jsx("div", {
    className: "md:flex md:items-stretch md:flex-no-shrink md:flex-grow"
  }, __jsx("div", {
    id: "navbar",
    className: `hidden md:block md:flex md:items-stretch md:justify-end ml-auto`
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "home"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.index", lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/codes"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "code"), _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.codes", lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/bots"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "smart_toy"), _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.bots", lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staffs"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "construction"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.staffs", lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/sponsors"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "support"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.sponsors", lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/partners"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "thumb_up"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.partners", lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/premium"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "star"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.premium", lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/apidocs"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "code"), " API")), js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user") ? __jsx("span", {
    className: "dropdown inline-block relative"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("img", {
    src: JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user")).avatar ? `https://cdn.discordapp.com/avatars/${JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user")).id}/${JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user")).avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
    className: "h-8 w-8 rounded-full mr-2"
  }), " ", decodeURIComponent(JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user")).username), "#", JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user")).discriminator), __jsx("ul", {
    className: "dropdown-menu absolute hidden text-gray-200"
  }, __jsx("li", {
    className: "cursor-pointer w-full"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/user/@me"
  }, __jsx("a", {
    className: "rounded-t bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"
  }, __jsx("span", {
    className: "material-icons"
  }, "account_circle"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.user.profile", lang)))), __jsx("li", {
    className: "cursor-pointer w-full"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/addbot"
  }, __jsx("a", {
    className: "bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"
  }, __jsx("span", {
    className: "material-icons"
  }, "smart_toy"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.user.addbot", lang)))), __jsx("li", {
    className: "cursor-pointer w-full"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/addcode"
  }, __jsx("a", {
    className: "bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"
  }, __jsx("span", {
    className: "material-icons"
  }, "code"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.user.addcode", lang)))), userIsStaff === true ? __jsx("li", {
    className: "cursor-pointer w-full"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff"
  }, __jsx("a", {
    className: "bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"
  }, __jsx("span", {
    className: "material-icons"
  }, "construction"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.user.staff", lang)))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), __jsx("li", {
    className: "cursor-pointer w-full"
  }, __jsx("a", {
    href: "/?logout=true",
    className: "rounded-b bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"
  }, __jsx("span", {
    className: "material-icons"
  }, "logout"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.user.logout", lang))))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("user") ? "/?logout=true" : "/api/login"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"
  }, __jsx("span", {
    className: "material-icons"
  }, "login"), " ", _language__WEBPACK_IMPORTED_MODULE_6___default()("navbar.login", lang))))))), __jsx("br", null), __jsx("br", null));
};

/* harmony default export */ __webpack_exports__["Z"] = (Navbar);

/***/ }),

/***/ 3414:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const adSchema = new Schema({
  id: String,
  position_id: Number,
  image: String
});
module.exports = models ? models.Advertisements || model("Advertisements", adSchema) : model("Advertisements", adSchema);

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

/***/ })

};
;
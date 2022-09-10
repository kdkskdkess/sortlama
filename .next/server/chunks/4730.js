exports.id = 4730;
exports.ids = [4730];
exports.modules = {

/***/ 4730:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Navbar */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4985);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ranks_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4202);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8245);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











var {
  langs
} = __webpack_require__(2378);

var flags = {
  "tr": "tr",
  "en": "us"
};
const Navbar = ({
  user,
  userIsStaff,
  userIsAdmin,
  lang
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const link = router.asPath;

  if (!user) {
    router.push("/api/login");
    return;
  } else {
    if (!userIsStaff) {
      router.push("/staff");
      return;
    }

    if (!userIsAdmin) {
      if (_config_js__WEBPACK_IMPORTED_MODULE_5___default().onlyAdminPages.includes(router.pathname)) {
        router.push("/staff");
        return;
      }
    }
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("title", null, (_config_js__WEBPACK_IMPORTED_MODULE_5___default().siteName)), __jsx("div", {
    className: "fixed flex flex-col top-0 left-0 w-16 md:w-64 bg-gray-900 h-full shadow-lg"
  }, __jsx("div", {
    className: "flex items-center pl-3 md:pl-6 h-20 border-b border-gray-800"
  }, __jsx("img", {
    src: user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
    alt: "",
    className: "rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-green-500"
  }), __jsx("div", {
    className: "ml-1 hidden md:block"
  }, __jsx("p", {
    className: "ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans"
  }, decodeURIComponent(user.username))), __jsx("div", {
    className: "px-5 hidden md:block"
  }, __jsx("div", {
    className: "flex flex-row items-center h-8"
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
      href: `${_language__WEBPACK_IMPORTED_MODULE_8___default().link(el, link)}`,
      className: "bg-blurple dark:bg-gray-800 mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer py-2 px-4 block whitespace-no-wrap"
    }, __jsx("span", {
      className: `flag-icon flag-icon-${flags[el]}`
    })));
  })))))), __jsx("div", {
    className: "overflow-y-auto overflow-x-hidden flex-grow"
  }, __jsx("ul", {
    className: "flex flex-col py-6 space-y-1"
  }, __jsx("li", {
    className: "px-5 hidden md:block"
  }, __jsx("div", {
    className: "flex flex-row items-center h-8"
  }, __jsx("div", {
    className: "flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.head", lang)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff"
  }, __jsx("a", {
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "home")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.home", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/punishments"
  }, __jsx("a", {
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "block")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.punishments", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/bots"
  }, __jsx("a", {
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "smart_toy")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.approvedBots", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/advertisements"
  }, __jsx("a", {
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "featured_video")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.ads", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/levelroles"
  }, __jsx("a", {
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "arrow_upward")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.levelRoles", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/certifiedbots"
  }, __jsx("a", {
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "verified")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.certifiedBots", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/pendingbots"
  }, __jsx("a", {
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "pending")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.waitingBots", lang))))), __jsx("li", {
    className: "px-5 hidden md:block"
  }, __jsx("div", {
    className: "flex flex-row items-center h-8"
  }, __jsx("div", {
    className: "flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.codeshare", lang)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/codesettings"
  }, __jsx("a", {
    href: "#",
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "settings")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.codeSettings", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/waitingcodes"
  }, __jsx("a", {
    href: "#",
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "pending")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.waitingCodes", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/codes"
  }, __jsx("a", {
    href: "#",
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "verified")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.approvedCodes", lang))))), __jsx("li", {
    className: "px-5 hidden md:block"
  }, __jsx("div", {
    className: "flex flex-row items-center h-8"
  }, __jsx("div", {
    className: "flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.settings", lang)))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/settings"
  }, __jsx("a", {
    href: "#",
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "settings")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.settings", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/staff/botquota"
  }, __jsx("a", {
    href: "#",
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4"
  }, __jsx("span", {
    className: "material-icons"
  }, "group")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.addBotQuota", lang))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/"
  }, __jsx("a", {
    className: "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6"
  }, __jsx("span", {
    className: "inline-flex justify-center items-center ml-4 text-red-400"
  }, __jsx("span", {
    className: "material-icons"
  }, "logout")), __jsx("span", {
    className: "ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans"
  }, _language__WEBPACK_IMPORTED_MODULE_8___default()("staff.sidebar.back", lang)))))))));
};
/* harmony default export */ __webpack_exports__["Z"] = (Navbar);

/***/ })

};
;
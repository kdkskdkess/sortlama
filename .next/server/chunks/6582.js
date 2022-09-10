exports.id = 6582;
exports.ids = [6582];
exports.modules = {

/***/ 6582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4985);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const PremiumCard = props => {
  return __jsx("div", {
    className: "p-4 py-8"
  }, __jsx("div", {
    className: "transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-70"
  }, __jsx("div", {
    className: "bg-discord-black w-80 md:w-102 h-80 min-h-80 max-h-80"
  }, __jsx("div", {
    className: "bg-discord-black-semidarker w-full h-28 rounded-t-md"
  }, __jsx("img", {
    src: "https://img.wallpapersafari.com/desktop/800/450/91/81/1bWD6s.png",
    className: "object-cover object-center w-full h-full visible group-hover:hidden"
  })), __jsx("div", {
    className: "absolute top-0 right-84 inline-block"
  }, __jsx("div", {
    className: "w-28 h-28 relative mt-8 ml-5"
  }, __jsx("div", {
    className: "group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
  }, __jsx("img", {
    src: props.image,
    className: "object-cover object-center w-full h-full visible group-hover:hidden"
  })))), __jsx("div", {
    className: "mt-6"
  }), __jsx("div", {
    className: "p-4 py-4"
  }, __jsx("div", {
    className: "flex flex-no-shrink items-stretch"
  }, __jsx("a", {
    className: "text-white text-xl no-underline font-bold"
  }, props.name)), __jsx("div", {
    className: "py-1"
  }), __jsx("a", {
    className: "text-gray-100 no-underline text-sm"
  }, __jsx("div", {
    className: "text-white",
    dangerouslySetInnerHTML: {
      __html: props.description.split("\n").join("<br/>")
    }
  }))), __jsx("div", {
    className: "absolute top-0 right-84 inline-block"
  }, __jsx("div", {
    className: "mt-80 w-80 md:w-102 bg-discord-black-semidarker p-1 py-3 rounded-b-md"
  }, __jsx("div", {
    className: "flex flex-no-shrink items-center justify-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: props.url
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_3___default()("card.view", props.lang)))))))));
};

/* harmony default export */ __webpack_exports__["Z"] = (PremiumCard);

/***/ })

};
;
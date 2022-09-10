exports.id = 8977;
exports.ids = [8977];
exports.modules = {

/***/ 3392:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const CodeCard = props => {
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
    className: "mt-6"
  }), __jsx("div", {
    className: "p-4 py-4"
  }, __jsx("div", {
    className: "flex flex-no-shrink justify-between"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/code/${props.name}`
  }, __jsx("a", {
    className: "text-white text-xl no-underline font-bold"
  }, props.name))), __jsx("div", {
    className: "py-1"
  }), __jsx("a", {
    className: "text-gray-100 no-underline"
  }, props.description.length >= 150 ? props.description.slice(0, 150) + "..." : props.description)), __jsx("div", {
    className: "absolute top-0 right-84 inline-block"
  }, __jsx("div", {
    className: "mt-72 w-80 md:w-102 bg-discord-black-semidarker p-1 py-3 rounded-b-md"
  }, __jsx("div", {
    className: "flex flex-no-shrink items-stretch"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/code/${props.name}`
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_2___default()("card.view", props.lang)))))))));
};

/* harmony default export */ __webpack_exports__["Z"] = (CodeCard);

/***/ }),

/***/ 3191:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const mongoosePaginate = __webpack_require__(9337);

const codeSchema = new Schema({
  name: String,
  desc: String,
  code: String,
  codeBotJS: String,
  library: String,
  developer: Object,
  categories: Array,
  waiting: Boolean
});
codeSchema.plugin(mongoosePaginate);
module.exports = models ? models.Codes || model("Codes", codeSchema) : model("Codes", codeSchema);

/***/ })

};
;
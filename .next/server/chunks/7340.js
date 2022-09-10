exports.id = 7340;
exports.ids = [7340];
exports.modules = {

/***/ 9899:
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
    className: "absolute top-0 right-84 inline-block"
  }, __jsx("div", {
    className: "w-28 h-28 relative mt-8 ml-5"
  }, __jsx("div", {
    className: "group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
  }, __jsx("img", {
    src: props.avatar,
    className: "object-cover object-center w-full h-full visible group-hover:hidden"
  })))), props.bot.certificate ? __jsx("div", {
    className: "absolute top-0 right-84 inline-block"
  }, __jsx("div", {
    className: "w-8 h-8 relative mt-28 ml-24"
  }, __jsx("div", {
    className: "group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
  }, __jsx("img", {
    src: "https://www.pngkey.com/png/full/624-6246436_verified-account-icon-selo-verificao-instagram-png.png",
    className: "object-cover object-center w-full h-full visible group-hover:hidden"
  })))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), __jsx("div", {
    className: "mt-6"
  }), __jsx("div", {
    className: "p-4 py-4"
  }, __jsx("div", {
    className: "flex flex-no-shrink justify-between"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/bot/${props.id}`
  }, __jsx("a", {
    className: "text-white text-xl no-underline font-bold"
  }, props.name)), __jsx("div", {
    className: "bg-discord-black-semidarker"
  }, __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "text-gray-200 no-underline"
  }, __jsx("span", {
    className: "material-icons"
  }, "star")), __jsx("a", {
    className: "text-gray-200 no-underline ml-1"
  }, props.votes)))), __jsx("div", {
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
    href: `/bot/${props.bot.specialURL ? props.bot.specialURL : props.bot.id}`
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_2___default()("card.view", props.lang))), props.profile ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/bot/${props.bot.specialURL ? props.bot.specialURL : props.bot.id}/vote`
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_2___default()("bot.page.vote", props.lang))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `https://discordapp.com/oauth2/authorize?client_id=${props.bot.id}&permissions=8&scope=bot`
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_2___default()("card.invite", props.lang)))))))));
};

/* harmony default export */ __webpack_exports__["Z"] = (CodeCard);

/***/ }),

/***/ 62:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const mongoosePaginate = __webpack_require__(9337);

const botsSchema = new Schema({
  id: String,
  certificate: Boolean,
  prefix: String,
  shortDesc: String,
  github: String,
  library: String,
  support: String,
  desc: String,
  votes: Number,
  servers: Number,
  bot: Object,
  owner: Object,
  developers: Array,
  tags: Array,
  key: String,
  waiting: Boolean,
  specialURL: String
});
botsSchema.plugin(mongoosePaginate);
module.exports = models ? models.Bots || model("Bots", botsSchema) : model("Bots", botsSchema);

/***/ })

};
;
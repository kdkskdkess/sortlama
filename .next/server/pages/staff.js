(function() {
var exports = {};
exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 3586:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _Components_Panel_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








const cfg = __webpack_require__(4985);

class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.props.bots = JSON.parse(this.props.bots);
    this.props.staffs = JSON.parse(this.props.staffs);
    this.props.categories = JSON.parse(this.props.categories);
    this.props.users = JSON.parse(this.props.users);
    this.props.normalUsers = JSON.parse(this.props.normalUsers);
    this.props.codes = JSON.parse(this.props.codes);
    this.props.totalApprovedBotsAndCodes = JSON.parse(this.props.totalApprovedBotsAndCodes);
    this.state = {
      staffStatsCodeCategory: "",
      userStatsCodeCategory: ""
    };
  }

  render() {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), null, __jsx("title", null, cfg.siteName, " - ", _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.sidebar.head", this.props.lang))), __jsx("div", {
      className: "min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"
    }, __jsx(_Components_Panel_Sidebar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      user: this.props.user,
      userIsStaff: this.props.userIsStaff,
      userIsAdmin: this.props.userIsAdmin,
      lang: this.props.lang
    }), __jsx("div", {
      className: "bg-gray-900 h-full w-screen px-16 md:px-64 p-6"
    }, __jsx("div", {
      className: "flex items-center"
    }, __jsx("div", {
      className: "p-4"
    }, __jsx("div", {
      className: "grid grid-cols-12 gap-4"
    }, __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "construction")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.cards.staffs", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.staffs.length)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "delete_forever")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.cards.bannedBots", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.bannedBots)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "do_not_step")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.cards.kickedBots", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.kickedBots)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "smart_toy")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.cards.bots", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.bots.length)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "done")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.cards.approvedbots", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.bots.filter(bot => bot.waiting === false).length)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "schedule")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.cards.waitingbots", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.bots.filter(bot => bot.waiting === true).length)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "smart_toy")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.approvedcodes.head", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.codes.length)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "done")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.sidebar.approvedCodes", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.codes.filter(bot => bot.waiting === false).length)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "schedule")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.sidebar.waitingCodes", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.codes.filter(bot => bot.waiting === true).length)))), __jsx("div", {
      className: "col-span-12 sm:col-span-6 md:col-span-3"
    }, __jsx("div", {
      className: "flex flex-row bg-input shadow-sm rounded p-4"
    }, __jsx("div", {
      className: "flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500"
    }, __jsx("span", {
      className: "material-icons"
    }, "verified")), __jsx("div", {
      className: "flex flex-col flex-grow ml-4"
    }, __jsx("div", {
      className: "text-sm text-white"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.cards.certifiedbots", this.props.lang)), __jsx("div", {
      className: "font-bold text-lg text-gray-200"
    }, this.props.bots.filter(bot => bot.certificate === true).length))))))), __jsx("div", {
      className: "container mx-auto px-4 sm:px-8"
    }, __jsx("div", {
      className: "py-8"
    }, __jsx("div", null, __jsx("h5", {
      className: "text-2xl font-semibold leading-tight text-gray-200"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.staff.totalBots", this.props.lang))), __jsx("div", {
      className: "py-2"
    }), __jsx("div", {
      className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
    }, __jsx("div", {
      className: "inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"
    }, __jsx("table", {
      className: "min-w-full leading-normal"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalBots.table.id", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalBots.table.tag", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalBots.table.totalBots", this.props.lang)))), __jsx("tbody", null, this.props.totalApprovedBotsAndCodes.slice(0, 9).sort((b, a) => (b.bots || 0) - (a.bots || 0)).map((staff, i) => {
      var user = this.props.normalUsers.filter(u => u.id === staff.id)[0] || this.props.staffs.filter(u => u.id === staff.id)[0];
      return __jsx("tr", {
        id: `staffBot-${staff.id}`
      }, __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, staff.id)), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, user.tag || "User#0000")), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, staff.bots || 0)));
    }))))))), __jsx("div", {
      className: "container mx-auto px-4 sm:px-8"
    }, __jsx("div", {
      className: "py-8"
    }, __jsx("div", null, __jsx("h5", {
      className: "text-2xl font-semibold leading-tight text-gray-200"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.staff.totalCodes", this.props.lang))), __jsx("div", {
      className: "py-2"
    }), __jsx("h2", {
      className: "text-sm font-semibold leading-tight text-gray-200"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.selectCategory", this.props.lang)), __jsx("div", {
      className: "my-2 flex sm:flex-row flex-col"
    }, __jsx("div", {
      className: "block relative"
    }, __jsx("select", {
      onChange: e => this.setState({
        staffStatsCodeCategory: e.target.value
      }),
      className: "w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    }, __jsx("option", {
      selected: true,
      disabled: true
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.selectCategory", this.props.lang)), this.props.categories.map((el, i) => {
      return __jsx("option", {
        key: i,
        value: el
      }, el);
    })))), __jsx("div", {
      className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
    }, __jsx("div", {
      className: "inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"
    }, __jsx("table", {
      className: "min-w-full leading-normal"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalCodes.table.id", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalCodes.table.tag", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalCodes.table.totalCodes", this.props.lang)))), __jsx("tbody", null, this.props.users.filter(u => Object.keys(u.howManyCodeAdded ? u.howManyCodeAdded : {}).includes(this.state.staffStatsCodeCategory)).slice(0, 9).sort((a, b) => (b.howManyCodeAdded[this.state.staffStatsCodeCategory] || 0) - (a.howManyCodeAdded[this.state.staffStatsCodeCategory] || 0)).map((staff, i) => {
      var user = this.props.normalUsers.filter(u => u.id === staff.id)[0] || this.props.staffs.filter(u => u.id === staff.id)[0];
      return __jsx("tr", {
        id: `staff-${staff.id}`
      }, __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, user.id)), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, user.tag || "User#0000")), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, staff.howManyCodeAdded[this.state.staffStatsCodeCategory])));
    }))))))), __jsx("div", {
      className: "container mx-auto px-4 sm:px-8"
    }, __jsx("div", {
      className: "py-8"
    }, __jsx("div", null, __jsx("h5", {
      className: "text-2xl font-semibold leading-tight text-gray-200"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.user.totalCodes", this.props.lang))), __jsx("div", {
      className: "py-2"
    }), __jsx("h2", {
      className: "text-sm font-semibold leading-tight text-gray-200"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.selectCategory", this.props.lang)), __jsx("div", {
      className: "my-2 flex sm:flex-row flex-col"
    }, __jsx("div", {
      className: "block relative"
    }, __jsx("select", {
      onChange: e => this.setState({
        userStatsCodeCategory: e.target.value
      }),
      className: "w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    }, __jsx("option", {
      selected: true,
      disabled: true
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.selectCategory", this.props.lang)), this.props.categories.map((el, i) => {
      return __jsx("option", {
        key: i,
        value: el
      }, el);
    })))), __jsx("div", {
      className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
    }, __jsx("div", {
      className: "inline-block min-w-full shadow rounded-lg overflow-hidden bg-input"
    }, __jsx("table", {
      className: "min-w-full leading-normal"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalCodes.table.id", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalCodes.table.tag", this.props.lang)), __jsx("th", {
      className: "px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
    }, _language__WEBPACK_IMPORTED_MODULE_5___default()("staff.index.stats.totalCodes.table.totalCodes", this.props.lang)))), __jsx("tbody", null, this.props.normalUsers.filter(u => Object.keys(u.howManyCodeAdded ? u.howManyCodeAdded : {}).includes(this.state.userStatsCodeCategory)).slice(0, 9).sort((a, b) => (b.howManyCodeAdded[this.state.userStatsCodeCategory] || 0) - (a.howManyCodeAdded[this.state.userStatsCodeCategory] || 0)).map((user, i) => {
      return __jsx("tr", {
        id: `user-${user.id}`
      }, __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, user.id)), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, user.tag || "User#0000")), __jsx("td", {
        className: "px-5 py-5 bg-input text-gray-100 text-sm"
      }, __jsx("p", {
        className: "text-gray-200 whitespace-no-wrap"
      }, user.howManyCodeAdded[this.state.userStatsCodeCategory])));
    }))))))))));
  }

}

async function getServerSideProps(ctx) {
  var Bots = __webpack_require__(62);

  var User = __webpack_require__(5823);

  var bots = await Bots.find({});

  const getCookie = key => {
    if (ctx.req.headers.cookie) {
      return ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0].split("=")[1] : null;
    } else {
      return null;
    }
  };

  bots.forEach(el => {
    el["key"] = null;
  });

  if (getCookie("user")) {
    var user = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ","));
  } else {
    redirect(ctx, '/api/login');
    return {};
  }

  const Staffs = __webpack_require__(71);

  const Codes = __webpack_require__(3191);

  const CodeSettings = __webpack_require__(4245);

  const BotsTotalKickBan = __webpack_require__(1828);

  const TotalApprovedBotsAndCodes = __webpack_require__(1877);

  var staffs = (await Staffs.find({})) || [];
  var totalApprovedBotsAndCodes = (await TotalApprovedBotsAndCodes.find({})) || [];
  var normalUsers = (await User.find({})) || [];
  var users = [];
  staffs.forEach(async staff => {
    var u = await User.findOne({
      id: staff.id
    });

    if (u) {
      users.push(u);
    }
  });
  var userIsStaff = (await Staffs.findOne({
    id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id
  })) ? true : false;
  var userIsAdmin = userIsStaff ? (await Staffs.findOne({
    id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id
  })).admin : false;
  var bannedBots = (await BotsTotalKickBan.findOne({
    id: "ban"
  })) || {};
  var kickedBots = (await BotsTotalKickBan.findOne({
    id: "kick"
  })) || {};
  var codes = (await Codes.find({})) || [];
  var categories = (await CodeSettings.findOne({
    id: 1
  })) ? await CodeSettings.findOne({
    id: 1
  }) : {};
  categories = categories.categories ? categories.categories : [];
  return {
    props: {
      user,
      bots: JSON.stringify(bots),
      staffs: JSON.stringify(staffs),
      users: JSON.stringify(users),
      normalUsers: JSON.stringify(normalUsers),
      categories: JSON.stringify(categories),
      codes: JSON.stringify(codes),
      totalApprovedBotsAndCodes: JSON.stringify(totalApprovedBotsAndCodes),
      userIsStaff,
      userIsAdmin,
      lang: ctx.locale,
      bannedBots: bannedBots.bans || 0,
      kickedBots: kickedBots.kicks || 0
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

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

/***/ }),

/***/ 1828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const botsTotalKickBan = new Schema({
  id: String,
  bans: Number,
  kicks: Number
});
module.exports = models ? models.BotsTotalKickBan || model("BotsTotalKickBan", botsTotalKickBan) : model("BotsTotalKickBan", botsTotalKickBan);

/***/ }),

/***/ 4245:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const codeSettingsSchema = new Schema({
  id: Number,
  staffRoles: Array,
  publisherRoles: Array,
  categories: Array,
  categoryRoles: Array
});
module.exports = models ? models.codeSettingsSchema || model("CodeSettings", codeSettingsSchema) : model("CodeSettings", codeSettingsSchema);

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

/***/ }),

/***/ 1877:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const totalApprovedBotsAndCodes = new Schema({
  id: String,
  tag: String,
  bots: Number,
  codes: Number
});
module.exports = models ? models.TotalApprovedBotsAndCodes || model("TotalApprovedBotsAndCodes", totalApprovedBotsAndCodes) : model("TotalApprovedBotsAndCodes", totalApprovedBotsAndCodes);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,4730], function() { return __webpack_exec__(3586); });
module.exports = __webpack_exports__;

})();
(function() {
var exports = {};
exports.id = 7219;
exports.ids = [7219];
exports.modules = {

/***/ 5820:
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8245);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3414);
/* harmony import */ var _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_schemas_Advertisements__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4245);
/* harmony import */ var _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1459);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8660);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









const cfg = __webpack_require__(4985);




class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.props.settings = JSON.parse(this.props.settings);
    this.props.categories = JSON.parse(this.props.categories);
    this.props.advertisements = JSON.parse(this.props.advertisements);
    this.props.publisherRoles = JSON.parse(this.props.publisherRoles);
    this.state = {
      codename: "",
      code: "",
      codeMain: "",
      codelibrary: "discord.js",
      codedesc: "",
      developer: this.props.user,
      codecategories: []
    };
  }

  render() {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, cfg.siteName, " - ", _language__WEBPACK_IMPORTED_MODULE_8___default()("navbar.user.addcode", this.props.lang)), __jsx("meta", {
      property: "og:url",
      content: "botlist.club/"
    }), __jsx("meta", {
      property: "og:color",
      content: "#1564ff"
    }), __jsx("meta", {
      property: "og:description",
      content: "Discord Bot List for Anka!"
    }), __jsx("meta", {
      property: "og:site_name",
      content: "Anka Bot List"
    }), __jsx("meta", {
      property: "og:image",
      content: "https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png"
    }), __jsx("meta", {
      name: "theme-color",
      content: "#1564ff"
    }), __jsx("meta", {
      name: "robots",
      content: "index, follow"
    }), __jsx("meta", {
      name: "revisit-after",
      content: "1 days"
    }), __jsx("meta", {
      name: "author",
      content: "Anka Devs"
    }), __jsx("meta", {
      name: "language",
      content: "English"
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png",
      type: "image/x-icon"
    }), __jsx("meta", {
      name: "abstract",
      content: "Discord Bot List"
    }), __jsx("meta", {
      name: "copyright",
      content: "\xA9 Anka List"
    })), __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      userIsStaff: this.props.userIsStaff,
      lang: this.props.lang,
      userPunishments: this.props.userPunishments
    }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, null), __jsx("div", {
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
      className: "bg-discord-black-darker w-full p-7 md:px-32"
    }, __jsx("div", {
      className: "md:flex md:flex-wrap flex-row-reverse md:flex-row"
    }, __jsx("div", {
      className: "w-full mx-auto h-full bg-discord-black rounded-md shadow-lg p-4 py-4"
    }, __jsx("div", {
      className: "flex flex-grow flex-wrap p-4 justify-center md:justify-start"
    }, __jsx("div", {
      className: "md:ml-0 w-2/4"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.labels.name", this.props.lang), " ", __jsx("a", {
      className: "text-red-500"
    }, "*")), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "fingerprint")), __jsx("input", {
      onChange: e => this.setState({
        codename: e.target.value
      }),
      className: "w-full md:w-96 px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",
      placeholder: "..."
    }))), __jsx("div", {
      className: "mt-2 w-2/4"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.labels.desc", this.props.lang), " ", __jsx("a", {
      className: "text-red-500"
    }, "*")), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "rate_review")), __jsx("input", {
      onChange: e => this.setState({
        codedesc: e.target.value
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent"
    }))), __jsx("div", {
      className: "w-full h-48 mt-2",
      align: "center"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.labels.code", this.props.lang), " ", __jsx("a", {
      className: "text-red-500"
    }, "*")), __jsx("textarea", {
      onKeyUp: e => this.setState({
        code: e.target.value
      }),
      resizable: false,
      className: "w-full h-48 p-4 bg-input resize-none rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    })), __jsx("div", {
      className: "w-full h-48 mt-8",
      align: "center"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, "bot.js"), __jsx("textarea", {
      onKeyUp: e => this.setState({
        codeMain: e.target.value
      }),
      resizable: false,
      className: "w-full h-48 p-4 bg-input resize-none rounded-md text-white border border-transparent focus:outline-none focus:border-transparent"
    })), __jsx("div", {
      align: "center"
    }, __jsx("div", {
      className: "md:ml-0 mt-8"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.labels.library", this.props.lang), " ", __jsx("a", {
      className: "text-red-500"
    }, "*")), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "list")), __jsx("select", {
      onChange: e => this.setState({
        codelibrary: e.target.value
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent"
    }, cfg.libraries.map((el, i) => {
      return __jsx("option", {
        key: i,
        value: el
      }, el);
    })))), __jsx("div", {
      className: "md:ml-4 mt-8"
    }, __jsx("label", {
      className: "text-white text-sm font-semibold"
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.labels.tags", this.props.lang), " ", __jsx("a", {
      className: "text-red-500"
    }, "*")), __jsx("div", {
      className: "flex"
    }, __jsx("a", {
      className: "rounded-l-md bg-discord-black-darker text-white p-2"
    }, __jsx("span", {
      className: "material-icons text-md mt-0.5"
    }, "tag")), __jsx("select", {
      onChange: e => this.setState({
        codecategories: Array.from(e.target.selectedOptions).map(el => el.value)
      }),
      className: "w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent",
      multiple: true
    }, this.props.categories.map((el, i) => {
      return __jsx("option", {
        key: i,
        value: el
      }, el);
    })))))), __jsx("div", {
      className: "flex items-center justify-center"
    }, __jsx("a", {
      className: "text-center flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer",
      onClick: async e => {
        if (!this.props.settings.botAdd) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.messages.cantadd", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        var data = this.state;

        if (data.codename.length === 0 || data.codedesc.length === 0 || data.codelibrary.length === 0 || data.codecategories.length === 0 || data.code.length === 0) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.messages.insufficient", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        if (data.codecategories.length > 6) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(`${_language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.messages.tags", this.props.lang)} (${data.bottags.length})`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        var d;

        try {
          d = await axios__WEBPACK_IMPORTED_MODULE_5___default()(cfg.siteURL + "/api/codes/add", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
              data: data,
              publisherRoles: this.props.publisherRoles,
              admin: "9wA7yggY0WI"
            }
          });
        } catch (err) {
          console.log(err);
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("error", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        d = d.data;

        if (d.error && d.error === 2) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.messages.theresCode", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        } else if (d.error && d.error === 3) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.messages.notInDiscord", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        } else if (d.error && d.error === 4) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.messages.punished", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        } else if (d.error && d.error === 5) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.messages.punished", this.props.lang), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
          });
        }

        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(_language__WEBPACK_IMPORTED_MODULE_8___default()("addcode.messages.success", this.props.lang), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
      }
    }, _language__WEBPACK_IMPORTED_MODULE_8___default()("send", this.props.lang)))))), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
      lang: this.props.lang
    }));
  }

}

async function getServerSideProps(ctx) {
  var Settings = __webpack_require__(4029);

  var categories = (await _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_7___default().findOne({
    id: 1
  })) ? await _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_7___default().findOne({
    id: 1
  }) : {};
  categories = categories.categories ? categories.categories : [];
  var publisherRoles = (await _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_7___default().findOne({
    id: 1
  })) ? await _schemas_CodeSettings__WEBPACK_IMPORTED_MODULE_7___default().findOne({
    id: 1
  }) : {};
  publisherRoles = publisherRoles.publisherRoles ? publisherRoles.publisherRoles : [];

  const getCookie = key => {
    if (ctx.req.headers.cookie) {
      return ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0].split("=")[1] : null;
    } else {
      return null;
    }
  };

  try {
    var a = getCookie("access_token");
  } catch (err) {
    next_redirect__WEBPACK_IMPORTED_MODULE_4___default()(ctx, '/api/login');
    return {};
  }

  if (!a) {
    next_redirect__WEBPACK_IMPORTED_MODULE_4___default()(ctx, '/api/login');
    return {};
  }

  var user = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ","));
  var settings = (await Settings.findOne({
    id: 1
  })) || {};
  var ads = await _schemas_Advertisements__WEBPACK_IMPORTED_MODULE_6___default().find({
    position_id: 16
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
      categories: JSON.stringify(categories),
      publisherRoles: JSON.stringify(publisherRoles),
      user,
      settings: settings === null || settings === undefined ? JSON.stringify({}) : JSON.stringify(settings),
      advertisements: JSON.stringify(ads),
      lang: ctx.locale,
      userIsStaff
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

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

/***/ 4029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const siteSettings = new Schema({
  id: String,
  botAdd: Boolean,
  regularlyBotApprove: Boolean,
  codeAdd: Boolean,
  regularlyCodeApprove: Boolean
});
module.exports = models ? models.Settings || model("Settings", siteSettings) : model("Settings", siteSettings);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,2079], function() { return __webpack_exec__(5820); });
module.exports = __webpack_exports__;

})();
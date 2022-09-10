exports.id = 4454;
exports.ids = [4454];
exports.modules = {

/***/ 8706:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2725);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4985);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2378);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_language__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









const Sidebar = ({
  bot,
  user,
  lang
}) => {
  if (!user) user = {};
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), null, __jsx("title", null, (_config_js__WEBPACK_IMPORTED_MODULE_6___default().siteName), " - ", bot.bot.name)), __jsx("div", {
    className: "w-full md:w-3/12 mx-auto h-full bg-discord-black rounded-md shadow-lg"
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, null), __jsx("div", {
    className: "p-3"
  }, __jsx("div", {
    align: "center"
  }, __jsx("img", {
    src: bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
    className: "w-32 h-32 rounded-full"
  })), __jsx("div", {
    className: "py-2"
  }), __jsx("div", {
    className: "text-center text-white"
  }, __jsx("a", {
    className: "text-white text-2xl no-underline font-bold"
  }, bot.bot.name), __jsx("br", null), __jsx("a", {
    className: "text-gray-200 text-lg no-underline"
  }, bot.shortDesc)), __jsx("div", {
    className: "py-3"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "priority_high")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.prefix", lang), ": ", bot.prefix)), __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "bookmark")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.library", lang), ": ", bot.library)), __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "poll")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.votes", lang), ": ", bot.votes || 0)), __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "dns")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.servers", lang), ": ", bot.servers || "N/A")), __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "py-1.5"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("span", {
    className: "material-icons text-gray-200 text-md no-underline font-semibold"
  }, "local_offer"), __jsx("a", {
    className: "text-gray-200 text-md no-underline font-semibold"
  }, " ", _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.tags", lang))), __jsx("div", {
    className: "py-0.5"
  }), __jsx("div", {
    className: "md:flex flex-col md:flex-row md:flex-wrap items-center justify-center"
  }, bot.tags.map(tag => {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: `/bots/tag/${tag}`
    }, __jsx("div", {
      className: "mt-2"
    }, __jsx("a", {
      className: "text-lg py-1 px-3 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
    }, Object.keys(_language__WEBPACK_IMPORTED_MODULE_7___default()("bot.tags", lang)).find(key => _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.tags", lang)[key] === tag))));
  })), __jsx("div", {
    className: "py-1.5"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("span", {
    className: "material-icons text-gray-200 text-md no-underline font-semibold"
  }, "group"), __jsx("a", {
    className: "text-gray-200 text-md no-underline font-semibold"
  }, " ", _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.developers", lang))), __jsx("div", {
    className: "py-1.5"
  }), bot.developers.map(dev => {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
      className: "flex cursor-pointer"
    }, __jsx("img", {
      className: "rounded-l-md bg-discord-black-darker text-white h-12 w-12",
      src: dev.avatar
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: `/user/${dev.id}`
    }, __jsx("div", {
      className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
    }, dev.tag))), __jsx("div", {
      className: "py-0.5"
    }));
  }), __jsx("div", {
    className: "py-3"
  }), bot.github.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex cursor-pointer"
  }, __jsx("a", {
    className: "rounded-l-md bg-green-600 text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "code")), __jsx("div", {
    className: "w-full bg-green-500 rounded-r-md text-white font-semibold text-lg p-2"
  }, __jsx("a", {
    href: bot.github
  }, "Github")))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), bot.support.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex cursor-pointer"
  }, __jsx("a", {
    className: "rounded-l-md bg-blue-700 text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "star")), __jsx("div", {
    className: "w-full bg-blue-600 rounded-r-md text-white font-semibold text-lg p-2"
  }, __jsx("a", {
    href: bot.support
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.support", lang))))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), __jsx("div", {
    className: "py-2"
  }), __jsx("div", {
    className: "md:flex justify-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/bot/${bot.specialURL ? bot.specialURL : bot.id}/vote`
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.vote", lang))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `https://discordapp.com/oauth2/authorize?client_id=${bot.id}&permissions=8&scope=bot`
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.invite", lang)))), __jsx("br", null), bot.developers.map(el => el.id).includes(user.id) ? __jsx("div", {
    className: "md:flex justify-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/bot/${bot.specialURL ? bot.specialURL : bot.id}/edit`
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.edit", lang))), __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer",
    onClick: async e => {
      if (user.id !== bot.owner.id) {
        return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_language__WEBPACK_IMPORTED_MODULE_7___default()("bot.remove.error", lang), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
      }

      await fetch((_config_js__WEBPACK_IMPORTED_MODULE_6___default().siteURL) + "/api/bots/remove", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bot: bot.id,
          admin: "9wA7yggY0WI"
        })
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(_language__WEBPACK_IMPORTED_MODULE_7___default()("bot.remove.success", lang), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined
      });
    }
  }, _language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.delete", lang))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), __jsx("div", {
    className: "py-2"
  }), bot.developers.map(el => el.id).includes(user.id) ? bot.key ? __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__.CopyToClipboard, {
    text: bot.key,
    onCopy: () => react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(_language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.apikey.copied", lang), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined
    })
  }, __jsx("div", {
    className: "md:flex justify-center",
    align: "center"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, "API KEY"))) : __jsx("div", {
    className: "md:flex justify-center",
    align: "center"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer",
    onClick: async e => {
      await axios__WEBPACK_IMPORTED_MODULE_2___default()((_config_js__WEBPACK_IMPORTED_MODULE_6___default().siteURL) + "/api/bots/apikey", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          bot: bot.id,
          admin: "9wA7yggY0WI"
        }
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(_language__WEBPACK_IMPORTED_MODULE_7___default()("bot.page.apikey.createdRefresh", lang), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined
      });
    }
  }, "API KEY")) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), __jsx("div", {
    className: "py-3"
  }))));
};

/* harmony default export */ __webpack_exports__["Z"] = (Sidebar);

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
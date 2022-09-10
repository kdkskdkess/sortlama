(function() {
var exports = {};
exports.id = 4240;
exports.ids = [4240];
exports.modules = {

/***/ 2246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Index": function() { return /* binding */ Index; },
  "default": function() { return /* binding */ _id_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next-redirect"
var external_next_redirect_ = __webpack_require__(8245);
var external_next_redirect_default = /*#__PURE__*/__webpack_require__.n(external_next_redirect_);
// EXTERNAL MODULE: ./Components/Navbar.jsx
var Navbar = __webpack_require__(1459);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "react-copy-to-clipboard"
var external_react_copy_to_clipboard_ = __webpack_require__(2725);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4985);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ./language.js
var language = __webpack_require__(2378);
var language_default = /*#__PURE__*/__webpack_require__.n(language);
;// CONCATENATED MODULE: ./Components/CodeSidebar.jsx

var __jsx = (external_react_default()).createElement;









const Sidebar = ({
  code,
  user,
  lang
}) => {
  if (!user) user = {};
  return __jsx((external_react_default()).Fragment, null, __jsx((head_default()), null, __jsx("title", null, (config_default()).siteName, " - ", code.name)), __jsx("div", {
    className: "w-full md:w-3/12 mx-auto h-full bg-discord-black rounded-md shadow-lg"
  }, __jsx(external_react_toastify_.ToastContainer, null), __jsx("div", {
    className: "p-3"
  }, __jsx("div", {
    className: "py-2"
  }), __jsx("div", {
    className: "text-center text-white"
  }, __jsx("a", {
    className: "text-white text-2xl no-underline font-bold"
  }, code.name), __jsx("br", null), __jsx("a", {
    className: "text-gray-200 text-lg no-underline"
  }, code.desc)), __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("a", {
    className: "rounded-l-md bg-discord-black-darker text-white p-2"
  }, __jsx("span", {
    className: "material-icons text-md mt-0.5"
  }, "bookmark")), __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
  }, language_default()("code.page.library", lang), ": ", code.library)), __jsx("div", {
    className: "py-1"
  }), __jsx("div", {
    className: "py-1.5"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("span", {
    className: "material-icons text-gray-200 text-md no-underline font-semibold"
  }, "local_offer"), __jsx("a", {
    className: "text-gray-200 text-md no-underline font-semibold"
  }, " ", language_default()("code.page.categories", lang))), __jsx("div", {
    className: "py-0.5"
  }), __jsx("div", {
    className: "md:flex flex-col md:flex-row md:flex-wrap items-center justify-center"
  }, code.categories.map(tag => {
    return __jsx(next_link.default, {
      href: `/codes/categories/${tag}`
    }, __jsx("div", {
      className: "mt-2"
    }, __jsx("a", {
      className: "text-lg py-1 px-3 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
    }, tag)));
  })), __jsx("div", {
    className: "py-1.5"
  }), __jsx("div", {
    className: "flex"
  }, __jsx("span", {
    className: "material-icons text-gray-200 text-md no-underline font-semibold"
  }, "group"), __jsx("a", {
    className: "text-gray-200 text-md no-underline font-semibold"
  }, " ", language_default()("code.page.developer", lang))), __jsx("div", {
    className: "py-1.5"
  }), __jsx("div", {
    className: "flex cursor-pointer"
  }, __jsx("img", {
    className: "rounded-l-md bg-discord-black-darker text-white h-12 w-12",
    src: code.developer.avatar ? `https://cdn.discordapp.com/avatars/${code.developer.id}/${code.developer.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`
  }), __jsx(next_link.default, {
    href: `/user/${code.developer.id}`
  }, __jsx("div", {
    className: "w-full bg-input rounded-r-md text-white font-semibold text-lg p-2"
  }, code.developer.username, "#", code.developer.discriminator))), __jsx("div", {
    className: "py-0.5"
  }), __jsx("div", {
    className: "py-2"
  }), __jsx(external_react_copy_to_clipboard_.CopyToClipboard, {
    text: `//commands folder
                
${code.code}

${code.codeBotJS ? `//bot.js

${code.codeBotJS}` : ''}`,
    onCopy: () => external_react_toastify_.toast.success(language_default()("code.copied", lang), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined
    })
  }, __jsx("div", {
    className: "md:flex justify-center"
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, language_default()("code.page.copy", lang)))), __jsx("br", null), code.developer.id === user.id ? __jsx("div", {
    className: "md:flex justify-center"
  }, __jsx(next_link.default, {
    href: `/code/${code.name}/edit`
  }, __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer"
  }, language_default()("code.page.edit", lang))), __jsx("a", {
    className: "flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer",
    onClick: async e => {
      if (user.id !== code.developer.id) {
        return external_react_toastify_.toast.error(language_default()("code.remove.error", lang), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
      }

      await fetch((config_default()).siteURL + "/api/codes/remove", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: code,
          admin: "9wA7yggY0WI"
        })
      });
      external_react_toastify_.toast.success(language_default()("code.remove.success", lang), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined
      });
    }
  }, language_default()("code.page.delete", lang))) : __jsx((external_react_default()).Fragment, null), __jsx("div", {
    className: "py-3"
  }))));
};

/* harmony default export */ var CodeSidebar = (Sidebar);
// EXTERNAL MODULE: ./schemas/Codes.js
var Codes = __webpack_require__(3191);
var Codes_default = /*#__PURE__*/__webpack_require__.n(Codes);
// EXTERNAL MODULE: ./Components/Footer.jsx
var Footer = __webpack_require__(8660);
// EXTERNAL MODULE: ./schemas/Advertisements.jsx
var Advertisements = __webpack_require__(3414);
var Advertisements_default = /*#__PURE__*/__webpack_require__.n(Advertisements);
;// CONCATENATED MODULE: external "react-code-blocks"
var external_react_code_blocks_namespaceObject = require("react-code-blocks");;
;// CONCATENATED MODULE: ./pages/code/[id]/index.jsx

var _id_jsx = (external_react_default()).createElement;











const cfg = __webpack_require__(4985);

function Index({
  code,
  user,
  advertisements,
  userIsStaff,
  lang,
  userPunishments
}) {
  code = JSON.parse(code);
  advertisements = JSON.parse(advertisements);
  return _id_jsx((external_react_default()).Fragment, null, _id_jsx(Navbar/* default */.Z, {
    userIsStaff: userIsStaff,
    lang: lang,
    userPunishments: userPunishments
  }), _id_jsx("div", {
    className: "py-2"
  }), _id_jsx("div", {
    align: "center"
  }, advertisements.map(ad => {
    return _id_jsx("div", {
      className: "mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
    }, _id_jsx("img", {
      src: ad.image,
      className: "object-cover object-center w-full h-full visible group-hover:hidden"
    }));
  })), _id_jsx("div", {
    className: "py-2"
  }), _id_jsx("div", {
    className: "bg-discord-black-darker w-full p-7"
  }, _id_jsx("div", {
    className: "md:flex md:flex-wrap flex-row-reverse md:flex-row"
  }, _id_jsx("div", {
    className: "w-full md:w-8/12 order-last md:order-none mx-auto h-full bg-discord-black rounded-md shadow-lg p-4 py-4"
  }, _id_jsx("label", {
    className: "text-white text-sm font-semibold"
  }, language_default()("code.page.commandsFolder")), _id_jsx("br", null), _id_jsx(external_react_code_blocks_namespaceObject.CodeBlock, {
    text: code.code,
    language: "javascript",
    showLineNumbers: true,
    theme: external_react_code_blocks_namespaceObject.dracula
  }), code.codeBotJS ? _id_jsx((external_react_default()).Fragment, null, _id_jsx("br", null), _id_jsx("label", {
    className: "text-white text-sm font-semibold"
  }, language_default()("code.page.mainCode")), _id_jsx("br", null), _id_jsx(external_react_code_blocks_namespaceObject.CodeBlock, {
    text: code.codeBotJS,
    language: "javascript",
    showLineNumbers: true,
    theme: external_react_code_blocks_namespaceObject.dracula
  })) : _id_jsx((external_react_default()).Fragment, null)), _id_jsx("div", {
    className: "py-3 md:py-0"
  }), _id_jsx(CodeSidebar, {
    code: code,
    user: user,
    lang: lang
  }))), _id_jsx(Footer/* default */.Z, {
    lang: lang
  }));
}
async function getServerSideProps(ctx) {
  var code = await Codes_default().findOne({
    name: ctx.params.id
  });

  var CodeSettings = __webpack_require__(4245);

  var CategoryRoles = __webpack_require__(6817);

  var categoryRoles = await CategoryRoles.find({});
  var codeSettings = (await CodeSettings.findOne({
    id: 1
  })) ? await CodeSettings.findOne({
    id: 1
  }) : {};

  const getCookie = key => {
    if (ctx.req.headers.cookie) {
      return ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter(x => x.startsWith(key))[0].split("=")[1] : null;
    } else {
      return null;
    }
  };

  if (!getCookie("user")) {
    external_next_redirect_default()(ctx, '/');
    return {};
  }

  if (!code) {
    external_next_redirect_default()(ctx, '/');
    return {};
  }

  var user = getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {};
  var member = await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${user.id}`, {
    method: "GET",
    headers: {
      "Authorization": "Bot " + cfg.token,
      "Content-Type": "application/json"
    }
  }).then(f => f.json());
  var memberRoles = {};
  categoryRoles.map(el => el.id).map(async r => {
    if (member.roles.includes(r)) {
      console.log(r);
      memberRoles[r] = categoryRoles.filter(el => el.id === r)[0].category;
    }
  });

  const Staffs = __webpack_require__(71);

  let checker = (arr, target) => target.every(v => arr.includes(v));

  var userIsStaff = (await Staffs.findOne({
    id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id
  })) ? true : false;

  if (code.waiting === true) {
    if (!userIsStaff) {
      if (!code.developer.id === user.id) {
        external_next_redirect_default()(ctx, '/');
        return {};
      }
    }
  }

  var ads = await Advertisements_default().find({
    position_id: 15
  });

  var Punishments = __webpack_require__(4021);

  var userPunishments = [];

  if (getCookie("user")) {
    userPunishments = (await Punishments.find({
      id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id
    })).length >= 1 ? (await Punishments.find({
      id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id
    })).map(p => p.punishID) : [];
  }

  if (code.developer.id !== user.id) {
    console.log(checker(Object.values(memberRoles), code.categories));

    if (checker(Object.values(memberRoles), code.categories) === false) {
      external_next_redirect_default()(ctx, '/');
      return {};
    }
  }

  return {
    props: {
      userPunishments,
      code: JSON.stringify(code),
      advertisements: JSON.stringify(ads),
      user,
      userIsStaff,
      lang: ctx.locale
    }
  };
}
/* harmony default export */ var _id_ = (Index);

/***/ }),

/***/ 6817:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const categoryRolesSchema = new Schema({
  id: String,
  category: String
});
module.exports = models ? models.categoryRolesSchema || model("CategoryRoles", categoryRolesSchema) : model("CategoryRoles", categoryRolesSchema);

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

/***/ 2725:
/***/ (function(module) {

"use strict";
module.exports = require("react-copy-to-clipboard");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4985,7813,2079], function() { return __webpack_exec__(2246); });
module.exports = __webpack_exports__;

})();
(function() {
var exports = {};
exports.id = 8961;
exports.ids = [8961];
exports.modules = {

/***/ 8541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const config = __webpack_require__(4985);

var sendLog = __webpack_require__(6607);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var Codes = __webpack_require__(3191);

  var User = __webpack_require__(5823);

  var Punishments = __webpack_require__(4021);

  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    var edit = data.edit;
    data = data.data;
    var punishments = JSON.stringify(await Punishments.find({
      id: data.developer.id
    }));
    var userPunishments = JSON.parse(punishments).map(p => p.punishID);

    if (userPunishments.includes("2")) {
      return res.json({
        error: 4
      });
    }

    if (!edit) {
      if (await Codes.findOne({
        name: data.codename
      })) {
        return res.json({
          error: 2
        });
      }
    }

    var member = await fetch(`https://discord.com/api/v8/guilds/${config.serverID}/members/${data.developer.id}`, {
      method: "GET",
      headers: {
        "Authorization": "Bot " + config.token,
        "Content-Type": "application/json"
      }
    }).then(f => f.json());

    if (!member) {
      return res.json({
        error: 3
      });
    }

    var publisherRoles = req.body.publisherRoles.map(r => {
      return r;
    });
    var memberRoles = [];

    for (let obj of publisherRoles) {
      if (member.roles.includes(obj)) {
        memberRoles.push(obj);
      }
    }

    if (memberRoles.length < 1) {
      return res.json({
        error: 5
      });
    }

    if (edit) {
      await Codes.updateOne({
        name: data.codename
      }, {
        name: data.codename,
        desc: data.codedesc,
        library: data.codelibrary,
        code: data.code,
        codeBotJS: data.codeMain ? data.codeMain : "",
        categories: data.codecategories,
        developer: member.user
      }, {
        upsert: true
      });
    } else {
      new Codes({
        name: data.codename,
        desc: data.codedesc,
        library: data.codelibrary,
        code: data.code,
        codeBotJS: data.codeMain ? data.codeMain : "",
        categories: data.codecategories,
        developer: member.user,
        waiting: true
      }).save();
    }

    var u = await User.findOne({
      id: member.user.id
    });
    var object = u ? u.howManyCodeAdded ? u.howManyCodeAdded : {} : {};
    var categories = data.codecategories.reduce((a, key) => Object.assign(a, {
      [key]: (object[key] || 0) + 1
    }), {});
    await User.updateOne({
      id: member.user.id
    }, {
      howManyCodeAdded: categories,
      tag: `${member.user.username}#${member.user.discriminator}`
    }, {
      upsert: true
    });
    sendLog(`<@${member.user.id}> ${edit ? "edited" : "added"} a code with named **${data.codename}**.`);
    res.json({
      result: await Codes.findOne({
        name: data.codename
      })
    });
  }
});

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

/***/ 6607:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const axios = __webpack_require__(2376);

const cfg = __webpack_require__(4985);

const sendLog = log => {
  axios({
    url: cfg.log.webhookURL,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      // the username to be displayed
      username: cfg.log.username,
      // the avatar to be displayed
      avatar_url: cfg.log.avatarURL,
      // contents of the message to be sent
      content: log,
      // enable mentioning of individual users or roles, but not @everyone/@here
      allowed_mentions: {
        parse: ['users', 'roles']
      }
    }
  });
};

module.exports = sendLog;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 7820:
/***/ (function(module) {

"use strict";
module.exports = require("marked");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(8541); });
module.exports = __webpack_exports__;

})();
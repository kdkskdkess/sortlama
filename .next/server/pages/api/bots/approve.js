(function() {
var exports = {};
exports.id = 7578;
exports.ids = [7578];
exports.modules = {

/***/ 60:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(2376);

var config = __webpack_require__(4985);

var sendLog = __webpack_require__(6607);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var Bots = __webpack_require__(62);

  var TotalApprovedBotsAndCodes = __webpack_require__(1877);

  var Staffs = __webpack_require__(71);

  var Settings = __webpack_require__(4029);

  var settings = (await Settings.findOne({
    id: 1
  })) ? await Settings.findOne({
    id: 1
  }) : {};

  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    var bot = await Bots.findOne({
      id: data.bot
    });

    if (!bot) {
      return res.json({
        error: 2
      });
    }

    if (data.botIndex !== 0) {
      if (settings.regularlyBotApprove) {
        return res.json({
          error: 3
        });
      }
    }

    await Bots.updateOne({
      id: data.bot
    }, {
      waiting: false
    });
    bot.developers.map(async el => {
      await axios(`${config.siteURL}/api/discord/role`, {
        method: "POST",
        data: {
          admin: "9wA7yggY0WI",
          role: "give",
          user: el.id
        },
        headers: {
          "Authorization": "Bot " + config.token,
          "Content-Type": "application/json"
        }
      });
    });
    await TotalApprovedBotsAndCodes.updateOne({
      id: data.staff
    }, {
      $inc: {
        bots: 1
      }
    }, {
      upsert: true
    });
    sendLog(`Bot <@${data.bot}> has approved by <@${data.staff}>.`);
    res.json({
      result: await Bots.findOne({
        id: data.bot
      })
    });
  }
});

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

/***/ 71:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const staffsSchema = new Schema({
  id: String,
  tag: String,
  avatar: String,
  admin: Boolean,
  roleColor: String,
  howManyBotApproved: Number
});
module.exports = models ? models.Staffs || model("Staffs", staffsSchema) : model("Staffs", staffsSchema);

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
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(60); });
module.exports = __webpack_exports__;

})();
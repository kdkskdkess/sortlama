(function() {
var exports = {};
exports.id = 3190;
exports.ids = [3190];
exports.modules = {

/***/ 1961:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(2376);

var config = __webpack_require__(4985);

var sendLog = __webpack_require__(6607);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var Codes = __webpack_require__(3191);

  var Settings = __webpack_require__(4029);

  var CodeSettings = __webpack_require__(4245);

  var settings = (await Settings.findOne({
    id: 1
  })) ? await Settings.findOne({
    id: 1
  }) : {};
  var codeSettings = (await CodeSettings.findOne({
    id: 1
  })) ? await CodeSettings.findOne({
    id: 1
  }) : {};

  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    var code = await Codes.findOne({
      name: data.code.name
    });

    if (data.staff !== "CONSOLE") {
      if (data.codeIndex) {
        if (data.codeIndex !== 0) {
          if (settings.regularlyCodeApprove) {
            return res.json({
              error: 3
            });
          }
        }
      }

      var staff = await fetch(`https://discord.com/api/v8/guilds/${config.serverID}/members/${data.staff}`, {
        method: "GET",
        headers: {
          "Authorization": "Bot " + config.token,
          "Content-Type": "application/json"
        }
      }).then(f => f.json());
      if (!staff) return res.json({
        error: 4
      });

      if (codeSettings.staffRoles) {
        if (codeSettings.staffRoles.some(r => staff.roles.includes(r)) === false) {
          return res.json({
            error: 5
          });
        }
      }
    }

    await Codes.deleteOne({
      name: data.code.name
    });
    sendLog(`Code "**${data.code.name}**" has been ${data.staff ? `declined/deleted by <@${data.staff}>` : "deleted by code developer."}`);
    res.json({
      result: true
    });
  }
});

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
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(1961); });
module.exports = __webpack_exports__;

})();
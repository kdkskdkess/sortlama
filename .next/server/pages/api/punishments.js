(function() {
var exports = {};
exports.id = 6555;
exports.ids = [6555];
exports.modules = {

/***/ 452:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(2376);

var config = __webpack_require__(4985);

var sendLog = __webpack_require__(6607);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var Punishments = __webpack_require__(4021);

  var Settings = __webpack_require__(4029);

  var settings = (await Settings.findOne({
    id: 1
  })) ? await Settings.findOne({
    id: 1
  }) : {};

  if (req.method === "POST") {
    var data = req.body.data;

    if (req.body["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    if (await Punishments.findOne({
      punishID: data.punish,
      id: data.id
    })) {
      return res.json({
        error: 2
      });
    }

    if (req.body["delete"] === true) {
      await Punishments.deleteOne({
        punishID: data.punishID,
        id: data.id
      });
      sendLog(`<@${data.id}>'s punish has been removed by <@${req.body.staff}>.`);
    } else {
      new Punishments({
        punishID: data.punish,
        id: data.id,
        reason: data.reason
      }).save();
      sendLog(`<@${data.id}> has been punished by <@${req.body.staff}>. Punish type: ${data.punishType}. Reason: ${data.reason}`);
    }

    res.json({
      result: true
    });
  }
});

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(452); });
module.exports = __webpack_exports__;

})();
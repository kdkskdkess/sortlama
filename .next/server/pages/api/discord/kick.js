(function() {
var exports = {};
exports.id = 3453;
exports.ids = [3453];
exports.modules = {

/***/ 9148:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const cfg = __webpack_require__(4985);

const axios = __webpack_require__(2376);

var BotsTotalKickBan = __webpack_require__(1828);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${data.bot}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bot " + cfg.token,
        "Content-Type": "application/json"
      }
    });
    await BotsTotalKickBan.updateOne({
      id: "kick"
    }, {
      $inc: {
        kicks: 1
      }
    }, {
      upsert: true
    });
    return res.json({
      result: true
    });
  }
});

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(9148); });
module.exports = __webpack_exports__;

})();
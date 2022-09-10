(function() {
var exports = {};
exports.id = 9061;
exports.ids = [9061];
exports.modules = {

/***/ 2523:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const config = __webpack_require__(4985);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var BotAddQuota = __webpack_require__(5881);

  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    if (data["delete"]) {
      await BotAddQuota.deleteOne({
        id: data.settings.role
      });
      return res.json({
        result: true
      });
    }

    if (await BotAddQuota.findOne({
      id: data.settings.role
    })) {
      return res.json({
        error: 2
      });
    }

    new BotAddQuota({
      id: data.settings.role,
      quota: data.settings.number
    }).save();
    res.json(await BotAddQuota.findOne({
      id: data.settings.role
    }));
  }
});

/***/ }),

/***/ 5881:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const quotaSchema = new Schema({
  id: String,
  quota: String
});
module.exports = models ? models.BotAddQuota || model("BotAddQuota", quotaSchema) : model("BotAddQuota", quotaSchema);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(2523); });
module.exports = __webpack_exports__;

})();
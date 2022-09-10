(function() {
var exports = {};
exports.id = 8518;
exports.ids = [8518];
exports.modules = {

/***/ 3127:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const config = __webpack_require__(4985);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var Settings = __webpack_require__(4029);

  var User = __webpack_require__(5823);

  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    if (data["userSettings"]) {
      await User.updateOne({
        id: data["user"]
      }, data.settings, {
        upsert: true
      });
      res.json({
        settings: await User.findOne({
          id: data["user"]
        })
      });
    } else {
      await Settings.updateOne({
        id: 1
      }, data.settings, {
        upsert: true
      });
      res.json({
        settings: await Settings.findOne({
          id: 1
        })
      });
    }
  }
});

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
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(3127); });
module.exports = __webpack_exports__;

})();
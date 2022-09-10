(function() {
var exports = {};
exports.id = 6139;
exports.ids = [6139];
exports.modules = {

/***/ 3909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const config = __webpack_require__(4985);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var CodeSettings = __webpack_require__(4245);

  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    var data2 = await CodeSettings.findOne({
      id: 1
    });

    if (data["delete"]) {
      if (data2) {
        await CodeSettings.updateOne({
          id: 1
        }, {
          $pull: {
            categories: data.category
          }
        }, {
          upsert: true
        });
      }

      return res.json({
        result: true
      });
    }

    if (data2 && data2.categories && data2.categories.includes(data.id)) {
      return res.json({
        error: 2
      });
    }

    await CodeSettings.updateOne({
      id: 1
    }, {
      $push: {
        categories: data.category
      }
    }, {
      upsert: true
    });
    return res.json(await CodeSettings.findOne({}));
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
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(3909); });
module.exports = __webpack_exports__;

})();
(function() {
var exports = {};
exports.id = 3287;
exports.ids = [3287];
exports.modules = {

/***/ 4067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const config = __webpack_require__(4985);

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var Advertisements = __webpack_require__(3414);

  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    if (data["delete"]) {
      await Advertisements.deleteOne({
        id: data.settings.id
      });
      return res.json({
        result: true
      });
    }

    new Advertisements({
      id: makeid(5),
      position_id: data.settings.id,
      image: data.settings.image
    }).save();
    res.json(await Advertisements.findOne({
      id: data.settings.id
    }));
  }
});

/***/ }),

/***/ 3414:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const adSchema = new Schema({
  id: String,
  position_id: Number,
  image: String
});
module.exports = models ? models.Advertisements || model("Advertisements", adSchema) : model("Advertisements", adSchema);

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
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(4067); });
module.exports = __webpack_exports__;

})();
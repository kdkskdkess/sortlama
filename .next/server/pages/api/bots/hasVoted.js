(function() {
var exports = {};
exports.id = 7208;
exports.ids = [7208];
exports.modules = {

/***/ 2951:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const config = __webpack_require__(4985);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var Bots = __webpack_require__(62);

  var Votes = __webpack_require__(7877);

  if (req.method === "POST") {
    var data = req.body;
    var botkey = await Bots.findOne({
      key: data.key
    });

    if (!botkey) {
      return res.json({
        error: 1
      });
    }

    if (botkey.key !== data.key) {
      return res.json({
        error: 2
      });
    }

    if ((await Bots.findOne({
      id: botkey.id
    })) === null) {
      return res.json({
        error: 3
      });
    }

    if (!data.user) {
      return res.json({
        error: 4
      });
    }

    res.json({
      result: (await Votes.findOne({
        user: data["user"],
        bot: botkey.id
      })) ? true : false
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

/***/ 7877:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const userVotesSchema = new Schema({
  bot: String,
  user: String,
  votedAt: Number
});
module.exports = models ? models.Votes || model("Votes", userVotesSchema) : model("Votes", userVotesSchema);

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
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(2951); });
module.exports = __webpack_exports__;

})();
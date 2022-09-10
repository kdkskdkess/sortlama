(function() {
var exports = {};
exports.id = 3636;
exports.ids = [3636];
exports.modules = {

/***/ 3516:
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

    var vote = await Votes.findOne({
      bot: bot.id,
      user: data["user"]
    });

    if (vote) {
      if (Date.now() >= vote.votedAt + 43200000) {
        await Votes.deleteOne({
          bot: bot.id,
          user: data["user"]
        });
      } else {
        return res.json({
          error: 3
        });
      }
    }

    await Bots.updateOne({
      id: bot.id
    }, {
      $inc: {
        votes: 1
      }
    });
    new Votes({
      bot: bot.id,
      user: data["user"],
      votedAt: Date.now()
    }).save();
    res.json({
      result: true
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
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(3516); });
module.exports = __webpack_exports__;

})();
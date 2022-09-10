(function() {
var exports = {};
exports.id = 9662;
exports.ids = [9662];
exports.modules = {

/***/ 1530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const cfg = __webpack_require__(4985);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    if (data.role === "give") {
      await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${data.user}/roles/${cfg.botDeveloperRole}`, {
        method: "PUT",
        headers: {
          "Authorization": "Bot " + cfg.token,
          "Content-Type": "application/json"
        }
      });
    } else {
      await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${data.user}/roles/${cfg.botDeveloperRole}`, {
        method: "DELETE",
        headers: {
          "Authorization": "Bot " + cfg.token,
          "Content-Type": "application/json"
        }
      });
    }

    return res.json({
      result: true
    });
  }
});

/***/ }),

/***/ 7820:
/***/ (function(module) {

"use strict";
module.exports = require("marked");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(1530); });
module.exports = __webpack_exports__;

})();
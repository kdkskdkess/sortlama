(function() {
var exports = {};
exports.id = 4994;
exports.ids = [4994];
exports.modules = {

/***/ 3496:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = __webpack_require__(4985);

const url = __webpack_require__(8835);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${config.clientID}&scope=identify&response_type=code&redirect_uri=${config.callbackURL}`);
});

/***/ }),

/***/ 8835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(3496); });
module.exports = __webpack_exports__;

})();
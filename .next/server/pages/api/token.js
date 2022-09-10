(function() {
var exports = {};
exports.id = 4857;
exports.ids = [4857];
exports.modules = {

/***/ 7188:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "POST") {
    var data = req.body;

    if (data.token) {
      var user = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "GET",
        url: "https://discord.com/api/users/@me",
        headers: {
          "Authorization": "Bearer " + data.token,
          "Content-Type": "application/json"
        }
      });
      res.json(user.data);
    } else {
      res.json({
        abu: "ğ"
      });
    }
  }
});

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7188));
module.exports = __webpack_exports__;

})();
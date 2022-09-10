(function() {
var exports = {};
exports.id = 7437;
exports.ids = [7437];
exports.modules = {

/***/ 1226:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ callback; }
});

;// CONCATENATED MODULE: external "form-data"
var external_form_data_namespaceObject = require("form-data");;
var external_form_data_default = /*#__PURE__*/__webpack_require__.n(external_form_data_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/login/callback.jsx


const config = __webpack_require__(4985);

/* harmony default export */ var callback = (async (req, res) => {
  if (!req.query.code) return res.redirect(`/`);
  const code = req.query.code;
  const data = new (external_form_data_default())();
  data.append('client_id', config.clientID);
  data.append('client_secret', config.secret);
  data.append('grant_type', 'authorization_code');
  data.append('redirect_uri', config.callbackURL);
  data.append('scope', 'identify');
  data.append('code', code);
  const response = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: data
  });
  const json = await response.json();
  res.redirect(`/?token=${json.access_token}&refresh=${json.refresh_token}&expires=${json.expires_in}`);
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(1226); });
module.exports = __webpack_exports__;

})();
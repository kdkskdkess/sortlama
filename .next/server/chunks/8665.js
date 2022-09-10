exports.id = 8665;
exports.ids = [8665];
exports.modules = {

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

/***/ 1877:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const totalApprovedBotsAndCodes = new Schema({
  id: String,
  tag: String,
  bots: Number,
  codes: Number
});
module.exports = models ? models.TotalApprovedBotsAndCodes || model("TotalApprovedBotsAndCodes", totalApprovedBotsAndCodes) : model("TotalApprovedBotsAndCodes", totalApprovedBotsAndCodes);

/***/ })

};
;
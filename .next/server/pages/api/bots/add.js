(function() {
var exports = {};
exports.id = 7167;
exports.ids = [7167];
exports.modules = {

/***/ 327:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const md = __webpack_require__(7820);

const config = __webpack_require__(4985);

var sendLog = __webpack_require__(6607);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  var Bots = __webpack_require__(62);

  var Punishments = __webpack_require__(4021);

  var BotAddQuota = __webpack_require__(5881);

  var quotas = await BotAddQuota.find({});

  if (req.method === "POST") {
    var data = req.body;

    if (data["admin"] !== "9wA7yggY0WI") {
      return res.json({
        error: 1
      });
    }

    var edit = data.edit;
    data = data.data;
    var punishments = JSON.stringify(await Punishments.find({
      id: data.botowner.id
    }));
    var userPunishments = JSON.parse(punishments).map(p => p.punishID);

    if (userPunishments.includes("1")) {
      return res.json({
        error: 7
      });
    }

    if (!edit) {
      if (await Bots.findOne({
        id: data.botid
      })) {
        return res.json({
          error: 2
        });
      }
    }

    var member = await fetch(`https://discord.com/api/v8/guilds/${config.serverID}/members/${data.botowner.id}`, {
      method: "GET",
      headers: {
        "Authorization": "Bot " + config.token,
        "Content-Type": "application/json"
      }
    }).then(f => f.json());

    if (!member) {
      return res.json({
        error: 5
      });
    }

    var user = member;
    var quotaRoles = quotas.map(quota => {
      return {
        role: quota.id,
        number: quota.quota
      };
    });
    var userRoles = [];

    for (let obj of quotaRoles) {
      if (user.roles.includes(obj.role)) {
        userRoles.push(obj);
      }
    }

    var userBots = await Bots.find({
      "developers": {
        $elemMatch: {
          "id": data.botowner.id
        }
      }
    });
    /*
    if (userRoles.length < 1) {
        return res.json({ error: 6 })
    } else {
        if (userRoles[userRoles.length - 1].number <= userBots.length) {
            return res.json({ error: 6 })
        }
    }
    */

    var b = await fetch(`https://discord.com/api/v8/users/${data.botid}`, {
      method: "GET",
      headers: {
        "Authorization": "Bot " + config.token,
        "Content-Type": "application/json"
      }
    }).then(f => f.json());

    if (!b.username) {
      return res.json({
        error: 3
      });
    }

    if (!b.bot) {
      return res.json({
        error: 4
      });
    }

    var developers = [];
    data.botdevelopers.map(async dev => {
      var d = await fetch(`https://discord.com/api/v8/users/${dev}`, {
        method: "GET",
        headers: {
          "Authorization": "Bot " + config.token,
          "Content-Type": "application/json"
        }
      }).then(f => f.json());
      if (!d.username) return;
      developers.push({
        avatar: d.avatar ? `https://cdn.discordapp.com/avatars/${d.id}/${d.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
        tag: `${d.username}#${d.discriminator}`,
        id: d.id
      });

      if (edit) {
        await Bots.updateOne({
          id: data.botid
        }, {
          prefix: data.botprefix,
          support: data.botsupport,
          github: data.botgithub,
          library: data.botlibrary,
          shortDesc: data.botshortDesc,
          desc: md(data.botdesc),
          developers: developers,
          owner: {
            avatar: data.botowner.avatar ? `https://cdn.discordapp.com/avatars/${data.botowner.id}/${data.botowner.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
            tag: `${data.botowner.username}#${data.botowner.discriminator}`,
            id: data.botowner.id
          },
          bot: {
            name: b.username,
            avatar: b.avatar,
            id: b.id
          },
          tags: data.bottags
        }, {
          upsert: true
        });
      } else {
        await Bots.updateOne({
          id: data.botid
        }, {
          prefix: data.botprefix,
          support: data.botsupport,
          github: data.botgithub,
          library: data.botlibrary,
          shortDesc: data.botshortDesc,
          desc: md(data.botdesc),
          developers: developers,
          owner: {
            avatar: data.botowner.avatar ? `https://cdn.discordapp.com/avatars/${data.botowner.id}/${data.botowner.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
            tag: `${data.botowner.username}#${data.botowner.discriminator}`,
            id: data.botowner.id
          },
          bot: {
            name: b.username,
            avatar: b.avatar,
            id: b.id
          },
          tags: data.bottags,
          waiting: true
        }, {
          upsert: true
        });
      }
    });
    sendLog(`<@${data.botid}> added by ${data.botdevelopers.map(dev => `<@${dev}>`).join(", ")}.`);
    res.json({
      result: await Bots.findOne({
        id: data.botid
      })
    });
  }
});

/***/ }),

/***/ 5881:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const quotaSchema = new Schema({
  id: String,
  quota: String
});
module.exports = models ? models.BotAddQuota || model("BotAddQuota", quotaSchema) : model("BotAddQuota", quotaSchema);

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

/***/ 4021:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const quotaSchema = new Schema({
  id: String,
  punishID: String,
  reason: String
});
module.exports = models ? models.Punishments || model("Punishments", quotaSchema) : model("Punishments", quotaSchema);

/***/ }),

/***/ 6607:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const axios = __webpack_require__(2376);

const cfg = __webpack_require__(4985);

const sendLog = log => {
  axios({
    url: cfg.log.webhookURL,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      // the username to be displayed
      username: cfg.log.username,
      // the avatar to be displayed
      avatar_url: cfg.log.avatarURL,
      // contents of the message to be sent
      content: log,
      // enable mentioning of individual users or roles, but not @everyone/@here
      allowed_mentions: {
        parse: ['users', 'roles']
      }
    }
  });
};

module.exports = sendLog;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
var __webpack_exports__ = __webpack_require__.X(0, [4985], function() { return __webpack_exec__(327); });
module.exports = __webpack_exports__;

})();
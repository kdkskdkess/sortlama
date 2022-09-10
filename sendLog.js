const axios = require("axios");
const cfg = require("./config.js");

const sendLog = (log) => {
    axios({
        url: cfg.log.webhookURL,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            // the username to be displayed
            username: cfg.log.username,
            // the avatar to be displayed
            avatar_url:
                cfg.log.avatarURL,
            // contents of the message to be sent
            content: log,
            // enable mentioning of individual users or roles, but not @everyone/@here
            allowed_mentions: {
                parse: ['users', 'roles'],
            },
        },
    })
};

module.exports = sendLog;
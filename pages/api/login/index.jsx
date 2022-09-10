const config = require("../../../config.js");
const url = require("url");

export default async (req, res) => {
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${config.clientID}&scope=identify&response_type=code&redirect_uri=${config.callbackURL}`);
}
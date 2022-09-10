import FormData from 'form-data';
const config = require("../../../config.js");

export default async (req, res) => {
    if (!req.query.code) return res.redirect(`/`);
    const code = req.query.code;
    const data = new FormData()

    data.append('client_id', config.clientID)
    data.append('client_secret', config.secret)
    data.append('grant_type', 'authorization_code')
    data.append('redirect_uri', config.callbackURL)
    data.append('scope', 'identify')
    data.append('code', code)
    const response = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: data,
    })
    const json = await response.json();
    res.redirect(`/?token=${json.access_token}&refresh=${json.refresh_token}&expires=${json.expires_in}`);
}
const axios = require("axios");
const Discord = require("discord.js")
const confg = require("./config.js")
class BotlistAPI {  
    /**
     * Connects to the API.
     * @param {string} key - API KEY which you get from the your bot's page.
    */
    constructor(key) {
        this.key = key;
        console.log("Anka Bot List API -> Connected");
    }
    
    /**
     * Shows is entered user have voted to your bot.
     * @param {string} id - User ID
    */
    async hasVoted(id) {
        var request = await axios({
            url: confg.siteURL+"/api/bots/hasVoted",
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                key: this.key,
                user: id,
            }
        }).then((res) => res.data).catch((err) => err);
        if(request.error) return false;
        return request.result;
    }

    /**
     * Posts your bot's guild size to the website.
     * @param {Discord.GuildManager} guilds - Collection of guilds
    */
    async postGuilds(guilds) {
        if(!guilds) throw new Error("You must insert guild array.")
        var request = await axios({
            url: confg.siteURL+"/api/bots/servers",
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                key: this.key,
                guilds: guilds,
            }
        }).then((res) => res.data).catch((err) => err);
        if(request.error) return false;
        console.log("Anka Bot List API -> Servers posted.");
        return true;
    }
}

module.exports = BotlistAPI;
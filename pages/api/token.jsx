import axios from "axios";

export default async (req, res) => {
    if (req.method === "POST") {
        var data = req.body;
        if (data.token) {
            var user = await axios({
                method: "GET",
                url: "https://discord.com/api/users/@me",
                headers: {
                    "Authorization": "Bearer " + data.token,
                    "Content-Type": "application/json"
                }
            })
            res.json(user.data)
        } else {
            res.json({ abu: "ğ" })
        }
    }
}
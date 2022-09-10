import Head from 'next/head';
import Link from 'next/link';
import BotCard from '../../../Components/CodeCard';
import CodeCard from '../../../Components/CodeCard2';

import Navbar from '../../../Components/Navbar';
import Bots from '../../../schemas/Bots';
import Codes from '../../../schemas/Codes';
import User from '../../../schemas/User';
import UserSidebar from '../../../Components/UserSidebar';
import Cookies from "js-cookie";

import config from '../../../config.js';

import Advertisements from '../../../schemas/Advertisements';

import axios from "axios";
import redirect from "next-redirect";
import Footer from "../../../Components/Footer";
import Lang from "../../../language";

export function Index({ user, bots, profile, advertisements, userIsStaff, userLevelRoles, lang, userPunishments, codes }) {
    bots = JSON.parse(bots)
    profile = JSON.parse(profile)
    advertisements = JSON.parse(advertisements)
    codes = JSON.parse(codes)
    userLevelRoles = JSON.parse(userLevelRoles)
    return (
        <>
            <Navbar userIsStaff={userIsStaff} lang={lang} userPunishments={userPunishments}/>
            <div className="py-2"></div>
            <div align="center">
                {advertisements.map((ad) => {
                    return (<div className="mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                        <img src={ad.image} className="object-cover object-center w-full h-full visible group-hover:hidden" />
                    </div>)
                })}
            </div>
            <div className="py-2"></div>
            <div className="bg-discord-black-darker w-full md:p-7">
                <div className="md:flex md:flex-wrap flex-row-reverse md:flex-row">
                    <div className="bg-discord-black-darker w-3/4 h-full items-center justify-center">
                        <div className="text-center">
                            <a className="text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10">{Lang("profile.bots", lang)}</a>
                        </div>
                        <div className="p-4 md:px-6">
                            <div className="flex flex-grow flex-wrap items-center justify-center">
                                {bots.sort((a, b) => { return (b.votes || 0) - (a.votes || 0); }).filter((bot) => Cookies.get("user") ? ((JSON.parse(Cookies.get("user")).id === user.id) ? bot.id : bot.waiting === false) : bot.waiting === false).map((bot, i) => {
                                    return (<BotCard lang={lang} bot={bot} id={bot.id} name={bot.bot.name} votes={bot.votes || 0} description={bot.shortDesc} avatar={bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`} profile={true} />);
                                })}
                            </div>
                        </div>
                        <div className="py-3"></div>
                        <div className="text-center">
                            <a className="text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10">{Lang("profile.codes", lang)}</a>
                        </div>
                        <div className="p-4 md:px-6">
                            <div className="flex flex-grow flex-wrap items-center justify-center">
                                {codes.filter((code) => Cookies.get("user") ? ((JSON.parse(Cookies.get("user")).id === user.id) ? code.name : code.waiting === false) : code.waiting === false).map((code, i) => {
                                    return (<CodeCard lang={lang} code={code.code} name={code.name} description={code.desc} profile={true} />);
                                })}
                            </div>
                        </div>
                        <div className="py-5"></div>
                    </div>
                    <div className="py-3 md:py-0"></div>
                    <UserSidebar user={user} lang={lang} bots={bots} profile={profile} levelRoles={userLevelRoles}/>
                </div>
            </div>
            <Footer lang={lang}/>
        </>
    );
}

export async function getServerSideProps(ctx) {
    const getCookie = (key) => {
        if (ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    if (ctx.params.id === "@me") {
        try {
            var a = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id;
        } catch (err) {
            redirect(ctx, '/api/login')
            return {};
        }
        if (!a) {
            redirect(ctx, '/api/login')
            return {};
        }
    }
    try {
        var user = await fetch(`https://discord.com/api/v8/users/${a || ctx.params.id}`, {
            method: "GET",
            headers: {
                "Authorization": "Bot " + config.token,
                "Content-Type": "application/json"
            }
        }).then((u) => u.json());
    } catch (err) {
        redirect(ctx, "/");
        return {
            props: {

            }
        }
    }
    if (user.message) {
        return redirect(ctx, "/");
    }
    const bots = await Bots.find({ "developers": { $elemMatch: { "id": user.id } } });
    const codes = await Codes.find({ "developer.id": user.id });
    bots.forEach((el) => {
        el["key"] = null;
    });
    const profile = (await User.findOne({ id: user.id })) || {};
    var ads = await Advertisements.find({ position_id: 8 });
    const Staffs = require("../../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({ id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id })) ? true : false;
    var member = await fetch(`https://discord.com/api/v8/guilds/${config.serverID}/members/${a || ctx.params.id}`, {
        method: "GET",
        headers: {
            "Authorization": "Bot " + config.token,
            "Content-Type": "application/json"
        }
    }).then((u) => u.json());
    var roles = [];
    if (!member.message) {
        roles = member.roles;
    }
    const LevelRoles = require("../../../schemas/LevelRoles.js")
    const levelRoles = (await LevelRoles.find({}));
    var userLevelRoles = [];
    for (let obj of levelRoles) {
        if (roles.includes(obj.id)) {
            userLevelRoles.push(obj)
        }
    }
    var Punishments = require("../../../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    return {
        props: {
            userPunishments,
                user,
                bots: JSON.stringify(bots),
                codes: JSON.stringify(codes),
                profile: JSON.stringify(profile),
                advertisements: JSON.stringify(ads),
                userIsStaff,
                userLevelRoles: JSON.stringify(userLevelRoles),
                lang: ctx.locale
            }
        }
}

export default Index;
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import Navbar from '../../../Components/Navbar';
import Bots from '../../../schemas/Bots';
import Sidebar from '../../../Components/BotSidebar';

import Advertisements from '../../../schemas/Advertisements';
import Lang from "../../../language";
const cfg = require('../../../config.js');

import redirect from "next-redirect";

import Footer from "../../../Components/Footer";

export function Index({bot, user, advertisements, userIsStaff, lang, userPunishments}) {
    bot = JSON.parse(bot);
    advertisements = JSON.parse(advertisements);
    return (
        <>
            <Navbar userIsStaff={userIsStaff} lang={lang} userPunishments={userPunishments}/>
            <ToastContainer />
            <div className="py-2"></div>
            <div align="center">
                {advertisements.map((ad) => {
                    return (<div className="mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                        <img src={ad.image} className="object-cover object-center w-full h-full visible group-hover:hidden" />
                    </div>)
                })}
            </div>
            <div className="py-2"></div>
            <div className="bg-discord-black-darker w-full p-7">
                <div className="md:flex md:flex-wrap flex-row-reverse md:flex-row">
                    <div className="w-full md:w-8/12 order-last md:order-none mx-auto h-full bg-discord-black rounded-md shadow-lg p-4 py-4">
                        <div className="text-center text-white p-6">
                            <a className="font-bold text-5xl break-all">{bot.bot.name}</a>
                            <br/>
                            <a className="text-xl">{Lang("bot.vote.section", lang)}</a>
                            <br/><br/>
                            <div className="py-1">
                            </div>
                            <div className="flex justify-center">
                                <a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer" onClick={async (e) => { 
                                    if(Cookies.get("user")) {
                                        var d;
                                        try {
                                            d = await axios(cfg.siteURL+"/api/bots/vote", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    bot: bot.id,
                                                    user: JSON.parse(Cookies.get("user")).id,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            })
                                        } catch (err) {
                                            console.log(err)
                                            return toast.error(Lang("error", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                        }
                                        console.log(d)
                                        d = d.data
                                        console.log(d)
                                        if(d.error === 3) {
                                            return toast.error(Lang("bot.vote.messages.alreadyVoted", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                        }
                                        if(d.result === true) {
                                            return toast.success(Lang("bot.vote.messages.voted", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                        }
                                    } else {
                                        return toast.error(Lang("bot.vote.messages.login", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                    }
                                }}>{Lang("bot.vote.vote", lang)}</a>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 md:py-0"></div>
                    <Sidebar bot={bot} user={user} lang={lang}/>
                </div>
            </div>
            <Footer lang={lang}/>
        </>
      );
}

export async function getServerSideProps(ctx) {
    if(!ctx.params.id) {
        redirect(ctx, '/');
        return {};
    }
    var bot = await Bots.findOne({id: ctx.params.id});
    if(!bot) bot = await Bots.findOne({specialURL: ctx.params.id})
    if(!bot) {
        redirect(ctx, '/');
        return {};
    }
    const getCookie = (key) => {
        if(ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    var user = getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {};        
    if(getCookie("user")) {
        if(!(bot.developers.map((el) => el.id).includes(JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id))) {
            bot.key = null;
        }
    }
    if(bot.waiting === true) {
        redirect(ctx, '/')
        return {};
    }
    var ads = await Advertisements.find({position_id: 4});
    const Staffs = require("../../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var Punishments = require("../../../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    return {
        props: {
            userPunishments,
            bot: JSON.stringify(bot),
            advertisements: JSON.stringify(ads),
            user: user,
            userIsStaff,
            lang: ctx.locale
        }
    }
}

export default Index;
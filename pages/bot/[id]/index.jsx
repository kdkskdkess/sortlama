import Head from 'next/head';
import Link from 'next/link';
import redirect from "next-redirect";
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/BotSidebar';
import Bots from '../../../schemas/Bots';
import Footer from "../../../Components/Footer";
import Advertisements from '../../../schemas/Advertisements';

const cfg = require('../../../config.js');

export function Index({bot, user, advertisements, userIsStaff, lang, userPunishments}) {
    bot = JSON.parse(bot);
    advertisements = JSON.parse(advertisements);
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
            <div className="bg-discord-black-darker w-full p-7">
                <div className="md:flex md:flex-wrap flex-row-reverse md:flex-row">
                    <div className="w-full md:w-8/12 order-last md:order-none mx-auto h-full bg-discord-black rounded-md shadow-lg p-4 py-4">
                        <div className="text-white" dangerouslySetInnerHTML={{ __html: bot.desc }} />
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
    var bot = await Bots.findOne({id: ctx.params.id});
    if(!bot) bot = await Bots.findOne({specialURL: ctx.params.id})
    const getCookie = (key) => {
        if(ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    if(!bot) {
        redirect(ctx, '/');
        return {};
    }
    var user = getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {};
    const Staffs = require("../../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    if(bot.waiting === true) {
        if(!userIsStaff) {
            if(!bot.developers.map(el => el.id).includes(user.id)) {
                redirect(ctx, '/')
                return {};
            }
        }
    }
    if(getCookie("user")) {
        if(!(bot.developers.map((el) => el.id).includes(JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id))) {
            bot.key = null;
        }
    }
    var ads = await Advertisements.find({position_id: 3});
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
            user,
            userIsStaff,
            lang: ctx.locale
        }
    }
}

export default Index;
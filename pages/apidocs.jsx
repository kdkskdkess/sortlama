import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import redirect from "next-redirect";
import axios from "axios";
import Advertisements from "../schemas/Advertisements";
import Lang from "../language";

const cfg = require('../config.js');

import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";

const App = ({advertisements, userIsStaff, lang, userPunishments}) => {
    advertisements = JSON.parse(advertisements)
    return (
        <>
            <Head>
                <title>{cfg.siteName} - API</title>
                <meta property="og:url" content="botlist.club/" />
    <meta property="og:color" content="#5f8acb"/>
    <meta property="og:description" content="Discord Bot List for Anka!"/>
    <meta property="og:site_name" content="Anka Bot List"/>
    <meta property="og:image" content="https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png"/>
    <meta name="theme-color" content="#5f8acb"/>
    <meta name="robots" content="index, follow"/>
    <meta name="revisit-after" content="1 days"/>
    <meta name="author" content="Anka Devs"/>
    <meta name="language" content="English"/>
    <link rel="shortcut icon" href="https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png" type="image/x-icon" ></link>
    <meta name="abstract" content="Discord Bot List" />
    <meta name="copyright" content="&copy; Anka List" />
            </Head>
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
            <div className="py-8"></div>
            <div className="p-8 md:p-36bg-discord-black w-full h-full">
                <div className="p-4"></div>
                <div className="text-center">
                    <a className="text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10">{Lang("apidocs.head", lang)}</a>
                </div>
                <div className="py-1"></div>
                <div className="p-4 md:px-6">
                    <a className="text-gray-100 no-underline">
                        <div className="text-white" dangerouslySetInnerHTML={{ __html: Lang("apidocs.text", lang).split("\n").join("<br/>") }} />
                    </a>
                    <div className="p-2"></div>
                    <a className="text-gray-200 no-underline">
                     <code><div className="text-white" dangerouslySetInnerHTML={{ __html: Lang("apidocs.usage", lang).split("\n").join("<br/>") }} /></code>
                    </a>
                </div>
                <div className="p-8"></div>
            </div>
            <Footer lang={lang}/>
        </>
    );
}

export async function getServerSideProps(ctx) {
    var ads = await Advertisements.find({position_id: 13});
    const getCookie = (key) => {
        if (ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    const Staffs = require("../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var Punishments = require("../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    return {
        props: {
            userPunishments,
            advertisements: JSON.stringify(ads),
            userIsStaff,
            lang: ctx.locale
        }
    }
}

export default App;
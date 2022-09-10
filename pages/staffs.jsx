import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import redirect from "next-redirect";
import axios from "axios";
import Advertisements from "../schemas/Advertisements";
import Lang from "../language";

const cfg = require('../config.js');
var tinycolor = require("tinycolor2");

import Navbar from '../Components/Navbar';
import PremiumCard from '../Components/PremiumCard';
import Footer from "../Components/Footer";

const App = ({ advertisements, userIsStaff, staffs, lang, userPunishments }) => {
    advertisements = JSON.parse(advertisements)
    staffs = JSON.parse(staffs)
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("navbar.staffs", lang)}</title>
    <meta property="og:title" content="Anka Bot List" />
    <meta property="og:type" content="Anka Bot List" />
    <meta property="og:url" content="botlist.club/" />
    <meta property="og:color" content="#ff6c6c"/>
    <meta property="og:description" content="Discord Bot List for Anka!"/>
    <meta property="og:site_name" content="Anka Bot List"/>
    <meta property="og:image" content="https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png"/>
    <meta name="theme-color" content="#ff6c6c"/>
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
            <div className="bg-discord-black-darker w-full h-full">
                <div className="p-4"></div>
                <div className="text-center">
                    <a className="text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10">{Lang("staffs.text", lang)}</a>
                </div>
                <div className="py-4"></div>
                <div className="p-4 md:px-6">
                    <div className="flex flex-grow flex-wrap items-center justify-center">
                        {staffs.sort((a, b) => (a.admin ? Lang("staffs.siteadmin", lang) : Lang("staffs.sitestaff", lang)).localeCompare((b.admin ? Lang("staffs.siteadmin", lang) : Lang("staffs.sitestaff", lang)))).map((staff, i) => {
                            var color = tinycolor(staff.roleColor);
                            var isLight = color.isLight();
                            return (
                            <Link href={`/user/${staff.id}`}>
                                <div className="w-full md:w-1/4 h-full p-4 items-center rounded-md ml-4 mt-4" style={{ background: staff.roleColor }}>
                                    <div className="md:flex">
                                        <img className="md:w-24 md:h-24 rounded-lg shadow-sm object-center" src={staff.avatar} />
                                        <div className={`text-center md:text-left md:px-2 ${isLight ? "text-black" : "text-white"} font-normal`}>
                                            <a className="break-all">{staff.tag}</a>
                                            <div className="py-0.5"></div>
                                            <a className="text-left">{staff.admin ? Lang("staffs.siteadmin", lang) : Lang("staffs.sitestaff", lang)}</a>
                                        </div>
                                    </div>
                                </div>
                            </Link>);
                        })}
                    </div>
                </div>
                <div className="p-12"></div>
            </div>
            <Footer lang={lang}/>
        </>
    );
}

export async function getServerSideProps(ctx) {
    var ads = await Advertisements.find({ position_id: 10 });
    const getCookie = (key) => {
        if (ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    const Staffs = require("../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({ id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id })) ? true : false;
    var staffs = await Staffs.find({});
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
            staffs: JSON.stringify(staffs),
            lang: ctx.locale
        }
    }
}

export default App;
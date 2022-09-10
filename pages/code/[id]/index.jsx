import Head from 'next/head';
import Link from 'next/link';
import redirect from "next-redirect";
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/CodeSidebar';
import Codes from '../../../schemas/Codes';
import Footer from "../../../Components/Footer";
import Advertisements from '../../../schemas/Advertisements';
import { CodeBlock, dracula } from "react-code-blocks";
import Lang from "../../../language";

const cfg = require('../../../config.js');

export function Index({code, user, advertisements, userIsStaff, lang, userPunishments}) {
    code = JSON.parse(code);
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
                        <label className="text-white text-sm font-semibold">{Lang("code.page.commandsFolder")}</label>
                        <br/>
                        <CodeBlock
                            text={code.code}
                            language="javascript"
                            showLineNumbers={true}
                            theme={dracula}
                        />
                        {
                        code.codeBotJS 
                        ? 
                        <>
                            <br/>
                            <label className="text-white text-sm font-semibold">{Lang("code.page.mainCode")}</label>
                            <br/>
                            <CodeBlock
                                text={code.codeBotJS}
                                language="javascript"
                                showLineNumbers={true}
                                theme={dracula}
                            ></CodeBlock> 
                        </>
                        : 
                        <>
                        </>
                        }
                    </div>
                    <div className="py-3 md:py-0"></div>
                    <Sidebar code={code} user={user} lang={lang}/>
                </div>
            </div>
            <Footer lang={lang}/>
        </>
      );
}

export async function getServerSideProps(ctx) {
    var code = await Codes.findOne({name: ctx.params.id});
    var CodeSettings = require("../../../schemas/CodeSettings");
    var CategoryRoles = require("../../../schemas/CategoryRoles");
    var categoryRoles = await CategoryRoles.find({})
    var codeSettings = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    const getCookie = (key) => {
        if(ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    if(!getCookie("user")) {
        redirect(ctx, '/');
        return {};
    }
    if(!code) {
        redirect(ctx, '/');
        return {};
    }
    var user = getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {};
    var member = await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${user.id}`, {
        method: "GET",
        headers: {
            "Authorization": "Bot " + cfg.token,
            "Content-Type": "application/json"
        }
    }).then(f => f.json());

    var memberRoles = {};
    categoryRoles.map((el) => el.id).map(async( r ) => {
        if(member.roles.includes(r)) {
            console.log(r)
            memberRoles[r] = categoryRoles.filter((el) => el.id === r)[0].category
        } 
    })
    const Staffs = require("../../../schemas/Staffs.js")
    let checker = (arr, target) => target.every(v => arr.includes(v));
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    if(code.waiting === true) {
        if(!userIsStaff) {
            if(!code.developer.id === user.id) {
                redirect(ctx, '/')
                return {};
            }
        }
    }
    var ads = await Advertisements.find({position_id: 15});
    var Punishments = require("../../../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    if(code.developer.id !== user.id) {
        console.log(checker(Object.values(memberRoles), code.categories))
        if(checker(Object.values(memberRoles), code.categories) === false) {
            redirect(ctx, '/');
            return {};
        }
    }
    return {
        props: {
            userPunishments,
            code: JSON.stringify(code),
            advertisements: JSON.stringify(ads),
            user,
            userIsStaff,
            lang: ctx.locale
        }
    }
}

export default Index;
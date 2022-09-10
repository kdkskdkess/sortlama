import { useState } from "react";
import Link from "next/link";
import Cookies from 'js-cookie';
import axios from "axios";
import { useRouter } from 'next/router';
import ranks from "../ranks.json";
import Lang from "../language";

import cfg from "../config.js";

const Navbar = ({userIsStaff, lang, userPunishments}) => {
    const router = useRouter()
    React.useEffect(() => {

        const qs = (key) => {
            key = key.replace(/[*+?^$.[\]{}()|\\/]/g, '\\$&'); // escape RegEx meta chars
            const match = window.location.search.match(new RegExp(`[?&]${key}=([^&]+)(&|$)`));
            return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        };
        //if(window.location.protocol === "http:") {
        //    window.location.href = window.location.href.replace("http:", "https:");
        //}
        
        if (qs('token')) {
            (async () => {
                Cookies.set('access_token', qs('token'))
                Cookies.set('refresh_token', qs('refresh'))
                const user = await axios({
                    method: "POST",
                    url: cfg.siteURL+"/api/token",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        token: qs("token")
                    }
                })
                Cookies.set('user', user.data)
                window.location.href = window.location.toString().split("?token")[0];
            })()
        }
        if (qs("logout") && qs("logout") === "true") {
            Cookies.remove('access_token', { path: '' })
            Cookies.remove('refresh_token', { path: '' })
            Cookies.remove('user', { path: '' })
            window.location.href = "/";
        }

        if(userPunishments.length >= 1) {
            if(userPunishments.includes("3")) {
                Cookies.remove('access_token', { path: '' })
                Cookies.remove('refresh_token', { path: '' })
                Cookies.remove('user', { path: '' })
                window.location.href = "/";
            } else if(userPunishments.includes("2")) {
                if(qs("addcode")) {
                    window.location.href = "/";
                }
            }
        }

    }, []);

    return (
        <>
        <div>
            <div className="md:px-12 md:py-4 md:p-6 default-font md:flex md:items-stretch w-full z-50 fixed sticky top-0 bg-discord-black-semidarker">
                <div className="flex flex-no-shrink items-stretch h-12 justify-between">
                    <Link href="/"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer">{cfg.siteName}</a></Link>
                    <div className="block md:hidden">
                        <a onClick={() => document.getElementById("navbar").classList.toggle("hidden")} className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer mt-1"><span className="material-icons">filter_list</span></a>
                    </div>
                </div>
                <div className="md:flex md:items-stretch md:flex-no-shrink md:flex-grow">
                    <div id="navbar" className={`hidden md:block md:flex md:items-stretch md:justify-end ml-auto`}>
                        <Link href="/"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">home</span> {Lang("navbar.index", lang)}</a></Link>
                        <Link href="/codes"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">code</span>{Lang("navbar.codes", lang)}</a></Link>
                        <Link href="/bots"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">smart_toy</span>{Lang("navbar.bots", lang)}</a></Link>
                        <Link href="/staffs"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">construction</span> {Lang("navbar.staffs", lang)}</a></Link>
                        <Link href="/sponsors"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">support</span> {Lang("navbar.sponsors", lang)}</a></Link>
                        <Link href="/partners"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">thumb_up</span> {Lang("navbar.partners", lang)}</a></Link>
                        <Link href="/premium"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">star</span> {Lang("navbar.premium", lang)}</a></Link>
                        <Link href="/apidocs"><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">code</span> API</a></Link>
                        {
                            Cookies.get("user")
                                ?
                                (<span className="dropdown inline-block relative">
                                    <a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><img src={JSON.parse(Cookies.get("user")).avatar ? `https://cdn.discordapp.com/avatars/${JSON.parse(Cookies.get("user")).id}/${JSON.parse(Cookies.get("user")).avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`} className="h-8 w-8 rounded-full mr-2" /> {decodeURIComponent(JSON.parse(Cookies.get("user")).username)}#{JSON.parse(Cookies.get("user")).discriminator}</a>
                                    <ul className="dropdown-menu absolute hidden text-gray-200">
                                        <li className="cursor-pointer w-full"><Link href="/user/@me"><a className="rounded-t bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"><span className="material-icons">account_circle</span> {Lang("navbar.user.profile", lang)}</a></Link></li>
                                        <li className="cursor-pointer w-full"><Link href="/addbot"><a className="bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"><span className="material-icons">smart_toy</span> {Lang("navbar.user.addbot", lang)}</a></Link></li>
                                        <li className="cursor-pointer w-full"><Link href="/addcode"><a className="bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"><span className="material-icons">code</span> {Lang("navbar.user.addcode", lang)}</a></Link></li>
                                        {
                                            userIsStaff === true ?
                                                <li className="cursor-pointer w-full"><Link href="/staff"><a className="bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"><span className="material-icons">construction</span> {Lang("navbar.user.staff", lang)}</a></Link></li>
                                            :
                                            <>
                                            </>
                                        }
                                        <li className="cursor-pointer w-full"><a href="/?logout=true" className="rounded-b bg-discord-black hover:bg-input flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200"><span className="material-icons">logout</span> {Lang("navbar.user.logout", lang)}</a></li>
                                    </ul>
                                </span>
                                )
                                :
                                (<Link href={Cookies.get("user") ? "/?logout=true" : "/api/login"}><a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black cursor-pointer"><span className="material-icons">login</span> {Lang("navbar.login", lang)}</a></Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        </>
    )
}

export default Navbar;
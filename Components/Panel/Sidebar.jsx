import { useState } from "react";
import Link from "next/link";
import Cookies from 'js-cookie';
import axios from "axios";
import Router, { useRouter } from 'next/router';
import config from "../../config.js";
import ranks from "../../ranks.json";
import redirect from "next-redirect";
import Lang from "../../language";

import cfg from "../../config.js";
var { langs } = require("../../language.js")

var flags = {
    "tr": "tr",
    "en": "us",
}

export const Navbar = ({ user, userIsStaff, userIsAdmin, lang }) => {
    const router = useRouter()
    const link = router.asPath
        if (!user) {
            router.push("/api/login")
            return;
        } else {
            if(!userIsStaff) {
                router.push("/staff")
                return;
            }
            if(!userIsAdmin) {
                if(config.onlyAdminPages.includes(router.pathname)) {
                    router.push("/staff")
                    return;
                }
            }
        }

    return (
        <>
            <title>{config.siteName}</title>
            <div className="fixed flex flex-col top-0 left-0 w-16 md:w-64 bg-gray-900 h-full shadow-lg">
                <div className="flex items-center pl-3 md:pl-6 h-20 border-b border-gray-800">
                    <img src={user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`} alt="" className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-green-500" />
                    <div className="ml-1 hidden md:block">
                        <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">{decodeURIComponent(user.username)}</p>
                    </div>
                        <div className="px-5 hidden md:block">
                            <div className="flex flex-row items-center h-8">
                                <div className="dropdown-1 inline-block relative">
                                    <button className="mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer inline-flex items-center focus:outline-none">
                                        <span className="mr-1">
                                            <a className="ml-2"><span className={`flag-icon flag-icon-${flags[lang]}`}></span></a>
                                        </span>
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                    <ul className="dropdown-menu-1 absolute hidden text-gray-700 pt-1">
                                        {
                                            langs.filter((el) => el !== lang).map((el, i) => {
                                                return (<li key={i}><a href={`${Lang.link(el, link)}`} className="bg-blurple dark:bg-gray-800 mr-2 mt-2 text-lg rounded-md px-2 py-1 text-gray-200 hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:transition dark:hover:text-gray-200 px-3 cursor-pointer py-2 px-4 block whitespace-no-wrap"><span className={`flag-icon flag-icon-${flags[el]}`}></span></a></li>)
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-6 space-y-1">
                    <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center h-8">
                                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">{Lang("staff.sidebar.head", lang)}</div>
                            </div>
                        </li>
                        <li>
                            <Link href="/staff"><a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">home</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.home", lang)}</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/staff/punishments"><a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">block</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.punishments", lang)}</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/staff/bots"><a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">smart_toy</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.approvedBots", lang)}</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/staff/advertisements"><a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">featured_video</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.ads", lang)}</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/staff/levelroles"><a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">arrow_upward</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.levelRoles", lang)}</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/staff/certifiedbots"><a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">verified</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.certifiedBots", lang)}</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/staff/pendingbots"><a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">pending</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.waitingBots", lang)}</span>
                            </a>
                            </Link>
                        </li>
                        
                        <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center h-8">
                                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">{Lang("staff.sidebar.codeshare", lang)}</div>
                            </div>
                        </li>
                        <li>
                        <Link href="/staff/codesettings">
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">settings</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.codeSettings", lang)}</span>
                            </a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/staff/waitingcodes">
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">pending</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.waitingCodes", lang)}</span>
                            </a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/staff/codes">                            
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">verified</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.approvedCodes", lang)}</span>
                            </a>
                        </Link>
                        </li>

                        <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center h-8">
                                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">{Lang("staff.sidebar.settings", lang)}</div>
                            </div>
                        </li>
                        <li>
                        <Link href="/staff/settings">
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">settings</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.settings", lang)}</span>
                            </a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/staff/botquota">
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <span className="material-icons">group</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.addBotQuota", lang)}</span>
                            </a>
                        </Link>
                        </li>
                        <li>
                            <Link href="/"><a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-400 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4 text-red-400">
                                    <span className="material-icons">logout</span>
                                </span>
                                <span className="ml-2 hidden md:block font-semibold text-sm tracking-wide truncate font-sans">{Lang("staff.sidebar.back", lang)}</span>
                            </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;
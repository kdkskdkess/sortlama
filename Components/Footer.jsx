import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from "next/head";

import cfg from "../config.js";
import Lang from "../language.js";
var { langs } = require("../language.js")

var flags = {
    "tr": "tr",
    "en": "us",
}

const toProperCase = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length).toLowerCase();
}

export default function App({lang}) {
    const router = useRouter()
    const link = router.asPath
    return (
        <footer className="footer bg-discord-black-semidarker relative pt-1 h-auto">
            <div className="container mx-auto px-6">

                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2">{Lang("footer.pages", lang)}</span>
                            <span className="my-2">
                                <span className="my-1">
                                    <Link href="/">
                                        <a className="text-white hover:text-gray-200 text-lg cursor-pointer">{Lang("navbar.index", lang)}</a>
                                    </Link>
                                </span>
                                <br/>
                                <span className="my-1">
                                    <Link href="/bots">
                                        <a className="text-white hover:text-gray-200 text-lg cursor-pointer">{Lang("navbar.bots", lang)}</a>
                                    </Link>
                                </span>
                                <br/>
                                <span className="my-1">
                                    <Link href="/addbot">
                                        <a className="text-white hover:text-gray-200 text-lg cursor-pointer">{Lang("navbar.user.addbot", lang)}</a>
                                    </Link>
                                </span>
                                <br/>
                                <span className="my-1">
                                    <Link href="/staffs">
                                        <a className="text-white hover:text-gray-200 text-lg cursor-pointer">{Lang("navbar.staffs", lang)}</a>
                                    </Link>
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2">{Lang("footer.socialMedia", lang)}</span>
                            <span className="my-2">
                                {Object.keys(cfg.socialMedia).map((el) => {
                                    return (
                                        <>
                                            <span className="my-1">
                                                <a className="text-white hover:text-gray-200 text-lg cursor-pointer" href={cfg.socialMedia[el]}>{toProperCase(el)}</a>
                                            </span>
                                            <br/>
                                        </>
                                    )
                                })}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-200 uppercase mt-4 md:mt-0 mb-2">{Lang("footer.language", lang)}</span>
                            <span className="my-2">
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
                            </span>
                        </div>
                        <div className="flex flex-col">
                            
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
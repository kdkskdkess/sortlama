import Link from 'next/link';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Cookies from "js-cookie";
import config from "../config.js";
import Lang from "../language";
import Head from "next/head";

const Sidebar = ({ bot, user, lang }) => {
    if(!user) user = {};
    return (<>
    <Head>
        <title>{config.siteName} - {bot.bot.name}</title>
    </Head>
    <div className="w-full md:w-3/12 mx-auto h-full bg-discord-black rounded-md shadow-lg">
        <ToastContainer />
        <div className="p-3">
            <div align="center">
                <img src={bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`} className="w-32 h-32 rounded-full" />
            </div>
            <div className="py-2"></div>
            <div className="text-center text-white">
                <a className="text-white text-2xl no-underline font-bold">{bot.bot.name}</a>
                <br />
                <a className="text-gray-200 text-lg no-underline">{bot.shortDesc}</a>
            </div>
            <div className="py-3"></div>
            <div className="flex">
                <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">priority_high</span></a>
                <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{Lang("bot.page.prefix", lang)}: {bot.prefix}</div>
            </div>
            <div className="py-1"></div>
            <div className="flex">
                <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">bookmark</span></a>
                <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{Lang("bot.page.library", lang)}: {bot.library}</div>
            </div>
            <div className="py-1"></div>
            <div className="flex">
                <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">poll</span></a>
                <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{Lang("bot.page.votes", lang)}: {bot.votes || 0}</div>
            </div>
            <div className="py-1"></div>
            <div className="flex">
                <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">dns</span></a>
                <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{Lang("bot.page.servers", lang)}: {bot.servers || "N/A"}</div>
            </div>
            <div className="py-1"></div>
            <div className="py-1.5"></div>
            <div className="flex">
                <span className="material-icons text-gray-200 text-md no-underline font-semibold">local_offer</span>
                <a className="text-gray-200 text-md no-underline font-semibold"> {Lang("bot.page.tags", lang)}</a>
            </div>
            <div className="py-0.5"></div>
            <div className="md:flex flex-col md:flex-row md:flex-wrap items-center justify-center">
            {bot.tags.map((tag) => {
                return (
                    <Link href={`/bots/tag/${tag}`}>
                        <div className="mt-2">
                            <a className="text-lg py-1 px-3 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Object.keys(Lang("bot.tags", lang)).find(key => Lang("bot.tags", lang)[key] === tag)}</a>
                        </div>
                    </Link>
                )
            })}
            </div>
            <div className="py-1.5"></div>
            <div className="flex">
                <span className="material-icons text-gray-200 text-md no-underline font-semibold">group</span>
                <a className="text-gray-200 text-md no-underline font-semibold"> {Lang("bot.page.developers", lang)}</a>
            </div>
            <div className="py-1.5"></div>
            {bot.developers.map((dev) => {
                return (
                    <>
                        <div className="flex cursor-pointer">
                            <img className="rounded-l-md bg-discord-black-darker text-white h-12 w-12" src={dev.avatar} />
                            <Link href={`/user/${dev.id}`}>
                                <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{dev.tag}</div>
                            </Link>
                        </div>
                        <div className="py-0.5"></div>
                    </>
                )
            })}
            <div className="py-3"></div>
            {
                (bot.github.length > 0) ?
                    <>
                            <div className="py-1"></div>
                            <div className="flex cursor-pointer">
                                <a className="rounded-l-md bg-green-600 text-white p-2"><span className="material-icons text-md mt-0.5">code</span></a>
                                <div className="w-full bg-green-500 rounded-r-md text-white font-semibold text-lg p-2"><a href={bot.github}>Github</a></div>
                            </div>
                    </>
                    :
                    <>
                    </>
            }
            {
                (bot.support.length > 0) ?
                    <>
                            <div className="py-1"></div>
                            <div className="flex cursor-pointer">
                                <a className="rounded-l-md bg-blue-700 text-white p-2"><span className="material-icons text-md mt-0.5">star</span></a>
                                <div className="w-full bg-blue-600 rounded-r-md text-white font-semibold text-lg p-2"><a href={bot.support}>{Lang("bot.page.support", lang)}</a></div>
                            </div>
                    </>
                    :
                    <>
                    </>
            }
            <div className="py-2"></div>
            <div className="md:flex justify-center">
                <Link href={`/bot/${(bot.specialURL ? bot.specialURL : bot.id)}/vote`}><a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("bot.page.vote", lang)}</a></Link>
                <Link href={`https://discordapp.com/oauth2/authorize?client_id=${bot.id}&permissions=8&scope=bot`}><a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("bot.page.invite", lang)}</a></Link>
            </div>
            <br />
            {
                bot.developers.map(el => el.id).includes(user.id)
                    ?
                    <div className="md:flex justify-center">
                        <Link href={`/bot/${(bot.specialURL ? bot.specialURL : bot.id)}/edit`}><a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("bot.page.edit", lang)}</a></Link>
                        <a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer" onClick={async (e) => {
                            if (user.id !== bot.owner.id) {
                                return toast.error(Lang("bot.remove.error", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                            }
                            await fetch(config.siteURL+"/api/bots/remove", {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    bot: bot.id,
                                    admin: "9wA7yggY0WI"
                                })
                            })
                            toast.success(Lang("bot.remove.success", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                        }}>{Lang("bot.page.delete", lang)}</a>
                    </div>
                    :
                    <>
                    </>
            }
            <div className="py-2"></div>
            {
                bot.developers.map(el => el.id).includes(user.id) ?
                (bot.key ?
                <CopyToClipboard 
                text={bot.key} 
                onCopy={() => toast.success(Lang("bot.page.apikey.copied", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, }) }
                >
                <div className="md:flex justify-center" align="center">
                    <a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">API KEY</a>
                </div>
                </CopyToClipboard>
                :
                <div className="md:flex justify-center" align="center">
                    <a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer" onClick={async (e) => {
                            await axios(config.siteURL+"/api/bots/apikey", {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                data: {
                                    bot: bot.id,
                                    admin: "9wA7yggY0WI"
                                }
                            })
                            toast.success(Lang("bot.page.apikey.createdRefresh", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                        }}>API KEY</a>
                </div>)
                :
                <>
                </>
            }
            <div className="py-3"></div>
        </div>
    </div>
    </>)
}

export default Sidebar;
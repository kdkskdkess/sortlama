import Link from 'next/link';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Cookies from "js-cookie";
import config from "../config.js";
import Lang from "../language";
import Head from "next/head";

const Sidebar = ({ code, user, lang }) => {
    if(!user) user = {};
    return (<>
    <Head>
        <title>{config.siteName} - {code.name}</title>
    </Head>
    <div className="w-full md:w-3/12 mx-auto h-full bg-discord-black rounded-md shadow-lg">
        <ToastContainer />
        <div className="p-3">
            <div className="py-2"></div>
            <div className="text-center text-white">
                <a className="text-white text-2xl no-underline font-bold">{code.name}</a>
                <br />
                <a className="text-gray-200 text-lg no-underline">{code.desc}</a>
            </div>
            <div className="py-1"></div>
            <div className="flex">
                <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">bookmark</span></a>
                <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{Lang("code.page.library", lang)}: {code.library}</div>
            </div>
            <div className="py-1"></div>
            <div className="py-1.5"></div>
            <div className="flex">
                <span className="material-icons text-gray-200 text-md no-underline font-semibold">local_offer</span>
                <a className="text-gray-200 text-md no-underline font-semibold"> {Lang("code.page.categories", lang)}</a>
            </div>
            <div className="py-0.5"></div>
            <div className="md:flex flex-col md:flex-row md:flex-wrap items-center justify-center">
            {code.categories.map((tag) => {
                return (
                    <Link href={`/codes/categories/${tag}`}>
                        <div className="mt-2">
                            <a className="text-lg py-1 px-3 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{tag}</a>
                        </div>
                    </Link>
                )
            })}
            </div>
            <div className="py-1.5"></div>
            <div className="flex">
                <span className="material-icons text-gray-200 text-md no-underline font-semibold">group</span>
                <a className="text-gray-200 text-md no-underline font-semibold"> {Lang("code.page.developer", lang)}</a>
            </div>
            <div className="py-1.5"></div>
                <div className="flex cursor-pointer">
                    <img className="rounded-l-md bg-discord-black-darker text-white h-12 w-12" src={code.developer.avatar ? `https://cdn.discordapp.com/avatars/${code.developer.id}/${code.developer.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`} />
                    <Link href={`/user/${code.developer.id}`}>
                        <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{code.developer.username}#{code.developer.discriminator}</div>
                    </Link>
                </div>
            <div className="py-0.5"></div>
            <div className="py-2"></div>
            <CopyToClipboard 
                text={`//commands folder
                
${code.code}

${code.codeBotJS ? `//bot.js

${code.codeBotJS}` : ''}`} 
                onCopy={() => toast.success(Lang("code.copied", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, }) }
                >
            <div className="md:flex justify-center">
                <a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("code.page.copy", lang)}</a>
            </div>
            </CopyToClipboard>
            <br />
            {
                code.developer.id === user.id
                    ?
                    <div className="md:flex justify-center">
                        <Link href={`/code/${code.name}/edit`}><a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("code.page.edit", lang)}</a></Link>
                        <a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer" onClick={async (e) => {
                            if (user.id !== code.developer.id) {
                                return toast.error(Lang("code.remove.error", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                            }
                            await fetch(config.siteURL+"/api/codes/remove", {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    code: code,
                                    admin: "9wA7yggY0WI"
                                })
                            })
                            toast.success(Lang("code.remove.success", lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                        }}>{Lang("code.page.delete", lang)}</a>
                    </div>
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
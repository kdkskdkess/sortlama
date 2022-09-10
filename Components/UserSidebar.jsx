import Link from 'next/link';
import Cookies from "js-cookie";
import config from "../config.js"
import Lang from "../language";
import Head from "next/head"
const Sidebar = ({user, bots, profile, levelRoles, lang}) => {
    return(<div className="w-full md:w-1/5 h-full mx-auto bg-discord-black rounded-md shadow-lg">
    <Head>
        <title>{config.siteName} - {user.username}</title>
    </Head>
                        <div className="p-5 md:p-3">
                            <div align="center">
                                <img src={user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`} className="w-32 h-32 rounded-full" />
                            </div>
                            <div className="py-3"></div>
                            {levelRoles.length >= 1 
                            ?
                            <div className="md:flex flex-col md:flex-row md:flex-wrap items-center justify-center">
                            {levelRoles.map((levelRole) => {
                                return (
                                    <div className="mt-2">
                                        <img src={levelRole.roleLevel} className="w-8 h-8" />
                                    </div>
                                )
                            })}
                            </div>
                            :
                            <>
                            </>
                            }
                            <div className="text-center text-white">
                                <a className="text-white text-2xl no-underline font-bold">{user.username}#{user.discriminator}</a>
                                <br />
                                <a className="text-gray-200 text-lg no-underline">{profile.biography || Lang("profile.noDesc", lang)}</a>
                            </div>
                            <div className="py-4"></div>
                            {(profile.instagram && profile.instagram.length >= 1 )
                            ?
                            <a href={profile.instagram}>
                            <div className="py-1"></div>
                            <div className="flex">
                                <a className="rounded-l-md bg-discord-black-darker text-purple-800 p-2"><span className="material-icons text-md mt-0.5">photo_camera</span></a>
                                <div className="w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2">Instagram</div>

                            </div>
                            </a>
                            : 
                            <></> 
                            }
                            {(profile.github && profile.github.length >= 1 )
                            ? 
                            <a href={profile.github}>
                            <div className="py-1"></div>
                            <div className="flex">
                                <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">code</span></a>
                                <div className="w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2">Github</div>
                            </div>
                            </a>
                            : 
                            <></> 
                            }
                            {(profile.youtube && profile.youtube.length >= 1 )
                            ? 
                            <a href={profile.youtube}>
                            <div className="py-1"></div>
                            <div className="flex">
                                <a className="rounded-l-md bg-discord-black-darker text-red-800 p-2"><span className="material-icons text-md mt-0.5">videocam</span></a>
                                <div className="w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2">Youtube</div>

                            </div>
                            </a>
                            : 
                            <></> 
                            }
                            {(profile.twitter && profile.twitter.length >= 1 )
                            ? 
                            <a href={profile.twitter}>
                            <div className="py-1"></div>
                            <div className="flex">
                                <a className="rounded-l-md bg-discord-black-darker text-blue-800 p-2"><span className="material-icons text-md mt-0.5">sms</span></a>
                                <div className="w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2">Twitter</div>

                            </div>
                            </a>
                            : 
                            <></> 
                            }
                            {(profile.website && profile.website.length >= 1 )
                            ? 
                            <a href={profile.website}>
                            <div className="py-1"></div>
                            <div className="flex">
                                <a className="rounded-l-md bg-discord-black-darker text-green-800 p-2"><span className="material-icons text-md mt-0.5">language</span></a>
                                <div className="w-full bg-input rounded-r-md text-white font-semibold text-md break-all p-2">Website</div>

                            </div>
                            </a>
                            : 
                            <></> 
                            }
                            <div className="py-4"></div>
                            <div className="flex">
                                <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">smart_toy</span></a>
                                <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{Lang("profile.bots", lang)}: {bots.length}</div>
                            </div>
                            <div className="py-2"></div>
                            <div className="flex">
                                <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">add</span></a>
                                <div className="w-full bg-input rounded-r-md text-white font-semibold text-lg p-2">{Lang("profile.botVotes", lang)}: {bots.reduce(function (acc, obj) { return acc + (obj.votes || 0); }, 0)}</div>
                            </div>
                            <div className="py-2"></div>
                            {(Cookies.get("user") && JSON.parse(Cookies.get("user")).id === user.id)
                            ?
                            <div className="flex items-center justify-center">
                                <Link href="/user/edit"> 
                                    <a className="text-center flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("card.edit", lang)}</a>
                                </Link>
                            </div>
                            :
                            <>
                            </>
                            }
                            <div className="py-2"></div>
                        </div>
                    </div>)
}

export default Sidebar;
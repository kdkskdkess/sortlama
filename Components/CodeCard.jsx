import Link from "next/link";
import Lang from "../language";

const CodeCard = (props) => {
    return (
        <div className="p-4 py-8">
            <div className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-70">
                <div className="bg-discord-black w-80 md:w-102 h-80 min-h-80 max-h-80">
                    <div className="bg-discord-black-semidarker w-full h-28 rounded-t-md">
                        <img src="https://img.wallpapersafari.com/desktop/800/450/91/81/1bWD6s.png" className="object-cover object-center w-full h-full visible group-hover:hidden" />
                    </div>
                    <div className="absolute top-0 right-84 inline-block">
                        <div className="w-28 h-28 relative mt-8 ml-5">
                            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                                <img src={props.avatar} className="object-cover object-center w-full h-full visible group-hover:hidden" />
                            </div>
                        </div>
                    </div>
                    {props.bot.certificate ?
                    <div className="absolute top-0 right-84 inline-block">
                        <div className="w-8 h-8 relative mt-28 ml-24">
                            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                                <img src="https://www.pngkey.com/png/full/624-6246436_verified-account-icon-selo-verificao-instagram-png.png" className="object-cover object-center w-full h-full visible group-hover:hidden" />
                            </div>
                        </div>
                    </div>
                    :
                    <>
                    </>
                    }
                    <div className="mt-6"></div>
                    <div className="p-4 py-4">
                        <div className="flex flex-no-shrink justify-between">
                            <Link href={`/bot/${props.id}`}><a className="text-white text-xl no-underline font-bold">{props.name}</a></Link>
                            <div className="bg-discord-black-semidarker">
                                <div className="flex">
                                    <a className="text-gray-200 no-underline"><span className="material-icons">star</span></a>
                                    <a className="text-gray-200 no-underline ml-1">{props.votes}</a>
                                </div>
                            </div>
                        </div>
                        <div className="py-1"></div>
                        <a className="text-gray-100 no-underline">{props.description.length >= 150 ? props.description.slice(0, 150) + "..." : props.description}</a>
                    </div>
                    <div className="absolute top-0 right-84 inline-block">
                        <div className="mt-72 w-80 md:w-102 bg-discord-black-semidarker p-1 py-3 rounded-b-md">
                            <div className="flex flex-no-shrink items-stretch">
                                <Link href={`/bot/${(props.bot.specialURL ? props.bot.specialURL : props.bot.id)}`}><a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("card.view", props.lang)}</a></Link>
                                {
                                    props.profile ?
                                    <Link href={`/bot/${(props.bot.specialURL ? props.bot.specialURL : props.bot.id)}/vote`}><a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("bot.page.vote", props.lang)}</a></Link>
                                    :
                                    <Link href={`https://discordapp.com/oauth2/authorize?client_id=${props.bot.id}&permissions=8&scope=bot`}><a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("card.invite", props.lang)}</a></Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeCard;
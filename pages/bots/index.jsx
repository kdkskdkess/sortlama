import Head from 'next/head';

import Navbar from '../../Components/Navbar';
import CodeCard from '../../Components/CodeCard';
import Bots from '../../schemas/Bots';
import { useRouter } from "next/router";
import Footer from "../../Components/Footer";
import Advertisements from "../../schemas/Advertisements";
import Link from "next/link";
import Lang from "../../language";

import cfg from '../../config.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.bots = JSON.parse(this.props.bots)
        this.props.advertisements = JSON.parse(this.props.advertisements)
        this.state = {
            bots: this.props.bots,
            searchBot: ""
        };
    }

    render() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("navbar.bots", this.props.lang)}</title>
                <meta property="og:title" content="Dark List" />
    <meta property="og:type" content="Dark List" />
    <meta property="og:url" content="botlist.club/" />
    <meta property="og:color" content="#ff6c6c"/>
    <meta property="og:description" content="Discord Bot List for Dark!"/>
    <meta property="og:site_name" content="Dark List"/>
    <meta property="og:image" content="https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png"/>
    <meta name="theme-color" content="#ff6c6c"/>
    <meta name="robots" content="index, follow"/>
    <meta name="revisit-after" content="1 days"/>
    <meta name="author" content="Dark Devs"/>
    <meta name="language" content="English"/>
    <link rel="shortcut icon" href="https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png" type="image/x-icon" ></link>
    <meta name="abstract" content="Discord Bot List" />
    <meta name="copyright" content="&copy; Dark List" />
            </Head>
            <Navbar userIsStaff={this.props.userIsStaff} lang={this.props.lang} userPunishments={this.props.userPunishments}/>
            <div className="p-8">
                <div className="px-4" align="center">
                    <div className="py-8"></div>
                    <a className="text-gray-100 no-underline text-4xl font-bold">{cfg.siteName}</a>
                    <div className="py-0.5"></div>
                    <a className="text-gray-300 no-underline text-md">{Lang("bots.section", this.props.lang)}</a>
                    <div className="py-3"></div>
                    <div className="flex justify-center">
                        <input onChange={(e) => {
                                        this.setState({searchBot: e.target.value})
                                        this.setState({bots: this.props.bots.filter((bot) => bot.bot.name.toLowerCase().includes(e.target.value.toLowerCase()))})
                                    }} className="py-4 px-2 w-full md:w-1/3 bg-input rounded-l-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder={Lang("botPlaceholder", this.props.lang)}/>
                        <a className="py-4 px-2 rounded-r-md bg-input text-white border border-transparent focus:outline-none focus:border-transparent cursor-pointer">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </a>
                    </div>
                    <div className="md:flex flex-col md:flex-row md:flex-wrap items-center justify-center">
                    {Object.keys(Lang("bot.tags", this.props.lang)).map((tag) => {
                        return (
                            <Link href={`/${this.props.lang}/bots/tag/${tag}`}>
                                <div className="mt-2">
                                    <a className="relative text-lg py-1 px-3 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{Lang("bot.tags", this.props.lang)[tag]}</a>
                                </div>
                            </Link>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="py-2"></div>
            <div align="center">
                {this.props.advertisements.map((ad) => {
                    return (<div className="mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                        <img src={ad.image} className="object-cover object-center w-full h-full visible group-hover:hidden" />
                    </div>)
                })}
            </div>
            <div className="py-2"></div>
            <div className="bg-discord-black-darker w-full h-full">
                <div className="p-4"></div>
                <div className="p-4 md:px-6">
                    <div className="flex flex-grow flex-wrap items-center justify-center">
                        {(this.state.searchBot.length >= 1 ? this.state.bots : this.state.bots.filter((bot) => bot.bot.name.toLowerCase().includes((router.query.name || "").toLowerCase()))).sort((a, b) => { return (b.votes || 0) - (a.votes || 0); }).map((bot, i) => {
                            return (<CodeCard lang={this.props.lang} bot={bot} id={bot.id} name={bot.bot.name} votes={bot.votes || 0} description={bot.shortDesc} avatar={bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`}/>);
                        })}
                    </div>
                </div>
                <div className="py-5"></div>
            </div>
            <Footer lang={this.props.lang}/>
        </>
      );
    }
}

export async function getServerSideProps(ctx) {
    var bots = await Bots.find({});
    bots.forEach((el) => {
        el["key"] = null;
    });
    var ads = await Advertisements.find({position_id: 2});
    const getCookie = (key) => {
        if (ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    const Staffs = require("../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var Punishments = require("../../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    return {
        props: {
            userPunishments,
            bots: JSON.stringify(bots.filter(bot => bot.waiting === false)),
            advertisements: JSON.stringify(ads),
            userIsStaff,
            lang: ctx.locale
        }
    }
}

export default App;
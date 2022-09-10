import Head from 'next/head';

import Navbar from '../Components/Navbar';
import BotCard from '../Components/CodeCard';
import CodeCard from '../Components/CodeCard2';
import Bots from '../schemas/Bots';
import Codes from '../schemas/Codes';
import Footer from "../Components/Footer";
import Advertisements from "../schemas/Advertisements";
import Lang from "../language";
import { useRouter } from 'next/router';

import cfg from '../config.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.bots = JSON.parse(this.props.bots)
        this.props.codes = JSON.parse(this.props.codes)
        this.props.newbots = JSON.parse(this.props.newbots)
        this.props.advertisements = JSON.parse(this.props.advertisements)
        this.state = {
            bots: this.props.bots,
            searchBot: "",
        };
    }

    render() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("navbar.index", this.props.lang)}</title>
                <meta property="og:title" content="Darkcode List" />
                <meta property="og:type" content="Darkcode List" />
                <meta property="og:url" content="botlist.club/" />
                <meta property="og:color" content="#1e90ff"/>
                <meta property="og:description" content="Discord Bot List for Dark!"/>
                <meta property="og:site_name" content="Darkcode List"/>
                <meta property="og:image" content="https://cdn.discordapp.com/attachments/795673465654345740/856551021832306688/1624288057584.png"/>
                <meta name="theme-color" content="#1e90ff"/>
                <meta name="robots" content="index, follow"/>
                <meta name="revisit-after" content="1 days"/>
                <meta name="author" content="Anka Devs"/>
                <meta name="language" content="English"/>
                <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/795673465654345740/856551021832306688/1624288057584.png" type="image/x-icon" ></link>
                <meta name="abstract" content="Discord Bot List" />
                <meta name="copyright" content="&copy; Darkcode List" />
            </Head>
            <Navbar userIsStaff={this.props.userIsStaff} lang={this.props.lang} userPunishments={this.props.userPunishments}/>
            <div className="p-8">
                <div className="px-4" align="center">
                    <div className="py-8"></div>
                    <a className="text-gray-100 no-underline text-4xl font-bold">Darkcode List</a>
                    <div className="py-0.5"></div>
                    <div className="md:px-32">
                        <a className="text-gray-300 no-underline text-md">{Lang("index.section", this.props.lang)}</a>
                    </div>
                    <div className="py-3"></div>
                    <div className="flex justify-center">
                        <input onChange={(e) => {
                                        this.setState({searchBot: e.target.value})
                                    }} className="py-4 px-2 w-full md:w-1/3 bg-input rounded-l-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder={Lang("botPlaceholder", this.props.lang)}/>
                        <a className="py-4 px-2 rounded-r-md bg-input text-white border border-transparent focus:outline-none focus:border-transparent cursor-pointer" onClick={async(e) => {
                            router.push(Lang.link(this.props.lang, "/bots?name="+this.state.searchBot))
                        }}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </a>
                    </div>
                    <div className="py-3"></div>
                </div>
            </div>
            <div className="py-6"></div>
            <div align="center">
                {this.props.advertisements.map((ad) => {
                    return (<div className="mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center table cursor-pointer">
                        <img src={ad.image} className="object-cover object-center w-full h-full visible group-hover:hidden" />
                    </div>)
                })}
            </div>
            <div className="py-2"></div>
            <div className="bg-discord-black-darker w-full h-full">
                <div className="p-4"></div>
                <div className="text-center">
                    <a className="text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10"><span className="material-icons">add</span> {Lang("index.new_added", this.props.lang)}</a>
                </div>
                <div className="py-1"></div>
                <div className="p-4 md:px-6">
                    <div className="flex flex-grow flex-wrap items-center justify-center">
                        {this.props.newbots.slice(0, 6).map((bot, i) => {
                            return (<BotCard lang={this.props.lang} bot={bot} id={bot.id} name={bot.bot.name} votes={bot.votes || 0} description={bot.shortDesc} avatar={bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`}/>);
                        })}
                    </div>
                </div>
                <div className="p-4"></div>
                <div className="text-center">
                    <a className="text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10"><span className="material-icons">verified</span> {Lang("index.certified", this.props.lang)}</a>
                </div>
                <div className="py-1"></div>
                <div className="p-4 md:px-6">
                    <div className="flex flex-grow flex-wrap items-center justify-center">
                        {this.props.bots.filter((bot) => bot.certificate === true).sort((a, b) => { return (b.votes || 0) - (a.votes || 0); }).slice(0, 6).map((bot, i) => {
                            return (<BotCard lang={this.props.lang} bot={bot} id={bot.id} name={bot.bot.name} votes={bot.votes || 0} description={bot.shortDesc} avatar={bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`}/>);
                        })}
                    </div>
                </div>
                <div className="p-4"></div>
                <div className="text-center">
                    <a className="text-gray-100 no-underline text-2xl font-normal default-font p-4 md:px-10"><span className="material-icons">verified</span> {Lang("index.new_added_codes", this.props.lang)}</a>
                </div>
                <div className="py-1"></div>
                <div className="p-4 md:px-6">
                    <div className="flex flex-grow flex-wrap items-center justify-center">
                        {this.props.codes.slice(0, 6).map((code, i) => {
                            return (<CodeCard lang={this.props.lang} code={code.code} name={code.name} description={code.desc}/>);
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
    var codes = await Codes.find({});
    bots.forEach((el) => {
        el["key"] = null;
    });
    var ads = (await Advertisements.find({position_id: 1})) || {};
    const getCookie = (key) => {
        if(ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    const Staffs = require("../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var Punishments = require("../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    return {
        props: {
            userPunishments,
            bots: JSON.stringify(bots.filter(bot => bot.waiting === false)),
            newbots: JSON.stringify(bots.sort((a, b) => { return b._id.getTimestamp() - a._id.getTimestamp(); }).filter(bot => bot.waiting === false)),
            codes: JSON.stringify(codes.sort((a, b) => { return b._id.getTimestamp() - a._id.getTimestamp(); }).filter(codes => codes.waiting === false)),
            advertisements: JSON.stringify(ads),
            userIsStaff,
            lang: ctx.locale
        }
    }
}

export default App;
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import redirect from "next-redirect";
import axios from "axios";
import Footer from "../../../Components/Footer";

import Lang from "../../../language";
import Advertisements from '../../../schemas/Advertisements';

const cfg = require('../../../config.js');

import Navbar from '../../../Components/Navbar';
import Bots from '../../../schemas/Bots';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.bot = JSON.parse(this.props.bot)
        this.props.user = JSON.parse(this.props.user)
        this.props.advertisements = JSON.parse(this.props.advertisements)
        this.state = {
            botid: this.props.bot.id,
            botprefix: this.props.bot.prefix,
            botsupport: this.props.bot.support,
            botgithub: this.props.bot.github,
            botlibrary: this.props.bot.library,
            botshortDesc: this.props.bot.shortDesc,
            botdesc: this.props.bot.desc,
            botdevelopers: this.props.bot.developers.map((el) => el.id).filter((el) => el !== this.props.user.id),
            botowner: this.props.user,
            bottags: this.props.bot.tags
        };
    }

    render() {
    return (
        <>
            <Navbar userIsStaff={this.props.userIsStaff} lang={this.props.lang} userPunishments={this.props.userPunishments}/>
            <ToastContainer />
            <div className="py-2"></div>
            <div align="center">
                {this.props.advertisements.map((ad) => {
                    return (<div className="mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                        <img src={ad.image} className="object-cover object-center w-full h-full visible group-hover:hidden" />
                    </div>)
                })}
            </div>
            <div className="py-2"></div>
            <div className="bg-discord-black-darker w-full p-7 md:px-32">
                <div className="md:flex md:flex-wrap flex-row-reverse md:flex-row">
                    <div className="w-full mx-auto h-full bg-discord-black rounded-md shadow-lg p-4 py-4">
                        <div className="flex flex-grow flex-wrap p-4 justify-center md:justify-start">
                            <div className="mt-2 md:mt-0 md:w-80">
                                <label className="text-white text-sm font-semibold">{Lang("addbot.labels.prefix", this.props.lang)} <a className="text-red-500">*</a></label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">priority_high</span></a>
                                    <input value={this.state.botprefix} onChange={(e) => this.setState({botprefix: e.target.value})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="!" />
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 md:ml-4 md:w-80">
                                <label className="text-white text-sm font-semibold">{Lang("addbot.labels.developers", this.props.lang)}</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">group</span></a>
                                    <input value={this.state.botdevelopers} onChange={(e) => this.setState({botdevelopers: e.target.value.replace(/ /g, "").split(",")})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="ID1, ID2, ..." />
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 md:ml-4 md:w-96" align="center">
                                <label className="text-white text-sm font-semibold">{Lang("addbot.labels.shortDesc", this.props.lang)} <a className="text-red-500">*</a></label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">rate_review</span></a>
                                    <input value={this.state.botshortDesc} onChange={(e) => this.setState({botshortDesc: e.target.value})} className="w-full md:w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="Bu bot sunucunuzdaki her işi yapabilir!" />
                                </div>
                            </div>
                            <div className="w-full h-48 mt-2" align="center">
                                <label className="text-white text-sm font-semibold">{Lang("addbot.labels.longDesc", this.props.lang)} <a className="text-red-500">*</a></label>
                                <textarea value={this.state.botdesc.replace(/</g, '\<')} onKeyUp={(e) => this.setState({botdesc: e.target.value})} resizable={false} className="w-full h-48 p-4 bg-input resize-none rounded-md text-white border border-transparent focus:outline-none focus:border-transparent" />
                            </div>
                            <div className="md:ml-0 mt-8">
                                <label className="text-white text-sm font-semibold">{Lang("addbot.labels.library", this.props.lang)} <a className="text-red-500">*</a></label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">list</span></a>
                                    <select onChange={(e) => this.setState({ botlibrary: e.target.value })} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                        {
                                            cfg.libraries.map((el, i) => {
                                                return (<option key={i} value={el} selected={this.state.botlibrary === el}>{el}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="md:ml-4 mt-8">
                                <label className="text-white text-sm font-semibold">{Lang("addbot.labels.tags", this.props.lang)} <a className="text-red-500">*</a></label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">tag</span></a>
                                    <select onChange={(e) => this.setState({ bottags: Array.from(e.target.selectedOptions).map((el) => el.value) })} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" multiple>
                                        {
                                            Object.keys(Lang("bot.tags", this.props.lang)).map((el, i) => {
                                                return (<option key={i} value={Lang("bot.tags", this.props.lang)[el]} selected={this.state.bottags.includes(Lang("bot.tags", this.props.lang)[el])}>{el}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-8 md:ml-4">
                                <label className="text-white text-sm font-semibold">{Lang("addbot.labels.support", this.props.lang)}</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">support_agent</span></a>
                                    <input value={this.state.botsupport} onChange={(e) => this.setState({botsupport: e.target.value})} className="w-full md:w-80 px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="discord.gg/abcdef" />
                                </div>
                            </div>
                            <div className="mt-2 md:mt-8 md:ml-4">
                                <label className="text-white text-sm font-semibold">Github</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">code</span></a>
                                    <input value={this.state.botgithub} onChange={(e) => this.setState({botgithub: e.target.value})} className="w-full md:w-80 px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="github.com/abcdef" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a className="text-center flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer" onClick={async(e) => {
                                var data = this.state;
                                if ((data.botprefix.length === 0)
                                    || (data.botshortDesc.length === 0)
                                    || (data.bottags.length === 0)) {
                                    return toast.error(Lang("addbot.messages.insufficient", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                if (data.bottags.length > 6) {
                                    return toast.error(`${Lang("addbot.messages.tags", this.props.lang)} (${data.bottags.length})`, { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                data.botdevelopers.push(this.props.user.id)
                                data.botdevelopers = [...new Set(data.botdevelopers)]
                                var d;
                                try {
                                    d = await axios(cfg.siteURL+"/api/bots/add", {
                                        method: "POST",
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        data: {
                                            data: data,
                                            admin: "9wA7yggY0WI",
                                            edit: true
                                        }
                                    })
                                } catch (err) {
                                    console.log(err)
                                    return toast.error(Lang("addbot.messages.error", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                d = d.data
                                if(d.error && d.error === 2) {
                                    return toast.error(Lang("addbot.messages.theresBot", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                } else if(d.error && d.error === 400) {
                                    return toast.error(Lang("addbot.messages.notbot", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                } else if(d.error && d.error === 5) {
                                    return toast.error(Lang("addbot.messages.notInDiscord", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                toast.success(Lang("editbot.messages.success", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                            }}>{Lang("send", this.props.lang)}</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer lang={this.props.lang}/>
        </>
    );
    }
}

export async function getServerSideProps(ctx) {
    const getCookie = (key) => {
        if(ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    var bot = await Bots.findOne({id: ctx.params.id});
    if(!bot) bot = await Bots.findOne({specialURL: ctx.params.id})
    if (!getCookie("user")) {
        redirect(ctx, '/api/login')
        return {};
    }
    if (!bot) {
        redirect(ctx, '/')
        return {};
    }
    var user = getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {};    
    if(!bot.developers.map(el => el.id).includes(user.id)) {
        redirect(ctx, '/')
        return {};
    }
    var ads = await Advertisements.find({position_id: 5});
    const Staffs = require("../../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var Punishments = require("../../../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    return {
        props: {
            userPunishments,
            bot: JSON.stringify(bot),
            advertisements: JSON.stringify(ads),
            user: JSON.stringify(user),
            userIsStaff,
            lang: ctx.locale
        }
    }
}

export default App;
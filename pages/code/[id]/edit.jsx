import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import redirect from "next-redirect";
import axios from "axios";
import Advertisements from "../../../schemas/Advertisements";
import CodeSettings from "../../../schemas/CodeSettings";
import Codes from "../../../schemas/Codes";
import Lang from "../../../language";

const cfg = require('../../../config.js');

import Navbar from '../../../Components/Navbar';
import Footer from "../../../Components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.code = JSON.parse(this.props.code)
        this.props.settings = JSON.parse(this.props.settings)
        this.props.categories = JSON.parse(this.props.categories)
        this.props.advertisements = JSON.parse(this.props.advertisements)
        this.props.publisherRoles = JSON.parse(this.props.publisherRoles)
        this.state = {
            codename: this.props.code.name,
            code: this.props.code.code,
            codeMain: this.props.code.codeBotJS ? this.props.code.codeBotJS : "",
            codelibrary: this.props.code.library,
            codedesc: this.props.code.desc,
            developer: this.props.code.developer,
            codecategories: this.props.code.categories
        };
    }

    render() {
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("navbar.user.addcode", this.props.lang)}</title>
                <meta property="og:url" content="botlist.club/" />
                <meta property="og:color" content="#1564ff"/>
                <meta property="og:description" content="Discord Bot List for Anka!"/>
                <meta property="og:site_name" content="Anka Bot List"/>
                <meta property="og:image" content="https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png"/>
                <meta name="theme-color" content="#1564ff"/>
                <meta name="robots" content="index, follow"/>
                <meta name="revisit-after" content="1 days"/>
                <meta name="author" content="Anka Devs"/>
                <meta name="language" content="English"/>
                <link rel="shortcut icon" href="https://media.discordapp.net/attachments/837380414795677766/852608065236762654/discord-avatar-512-WPJJV.png" type="image/x-icon" ></link>
                <meta name="abstract" content="Discord Bot List" />
                <meta name="copyright" content="&copy; Anka List" />
            </Head>
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
                            <div className="mt-2 w-full">
                                <label className="text-white text-sm font-semibold">{Lang("addcode.labels.desc", this.props.lang)} <a className="text-red-500">*</a></label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">rate_review</span></a>
                                    <input value={this.state.codedesc} onChange={(e) => this.setState({codedesc: e.target.value})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" />
                                </div>
                            </div>
                            <div className="w-full h-48 mt-2" align="center">
                                <label className="text-white text-sm font-semibold">{Lang("addcode.labels.code", this.props.lang)} <a className="text-red-500">*</a></label>
                                <textarea name="commands" id="commands" value={this.state.code} onChange={(e) => {
                                    this.setState({code: e.target.value})
                                }} resizable={false} className="w-full h-48 p-4 bg-input resize-none rounded-md text-white border border-transparent focus:outline-none focus:border-transparent" />
                            </div>
                            <div className="w-full h-48 mt-8" align="center">
                                <label className="text-white text-sm font-semibold">bot.js</label>
                                <textarea name="botjs" id="botjs" value={this.state.codeMain} onChange={(e) => {
                                    this.setState({codeMain: e.target.value})
                                }} resizable={false} className="w-full h-48 p-4 bg-input resize-none rounded-md text-white border border-transparent focus:outline-none focus:border-transparent" />
                            </div>
                            <div className="md:ml-0 mt-8">
                                <label className="text-white text-sm font-semibold">{Lang("addcode.labels.library", this.props.lang)} <a className="text-red-500">*</a></label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">list</span></a>
                                    <select onChange={(e) => this.setState({ codelibrary: e.target.value })} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                        {
                                            cfg.libraries.map((el, i) => {
                                                return (<option key={i} value={el} selected={this.state.codelibrary === el}>{el}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="md:ml-4 mt-8">
                                <label className="text-white text-sm font-semibold">{Lang("addcode.labels.tags", this.props.lang)} <a className="text-red-500">*</a></label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">tag</span></a>
                                    <select onChange={(e) => this.setState({ codecategories: Array.from(e.target.selectedOptions).map((el) => el.value) })} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" multiple>
                                        {
                                            this.props.categories.map((el, i) => {
                                                return (<option key={i} value={el} selected={this.state.codecategories.includes(el)}>{el}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a className="text-center flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer" onClick={async(e) => {
                                if(!this.props.settings.botAdd) {
                                    return toast.error(Lang("addcode.messages.cantadd", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                var data = this.state;
                                if ((data.codename.length === 0)
                                    || (data.codedesc.length === 0)
                                    || (data.codelibrary.length === 0)
                                    || (data.codecategories.length === 0)
                                    || (data.code.length === 0)) {
                                    return toast.error(Lang("addcode.messages.insufficient", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                if (data.codecategories.length > 6) {
                                    return toast.error(`${Lang("addcode.messages.tags", this.props.lang)} (${data.bottags.length})`, { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                var d;
                                try {
                                    d = await axios(cfg.siteURL+"/api/codes/add", {
                                        method: "POST",
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        data: {
                                            data: data,
                                            publisherRoles: this.props.publisherRoles,
                                            edit: true,
                                            admin: "9wA7yggY0WI"
                                        }
                                    })
                                } catch (err) {
                                    console.log(err)
                                    return toast.error(Lang("error", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                d = d.data
                                if(d.error && d.error === 3) {
                                    return toast.error(Lang("addcode.messages.notInDiscord", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                } else if(d.error && d.error === 4) {
                                    return toast.error(Lang("addcode.messages.punished", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                } else if(d.error && d.error === 5) {
                                    return toast.error(Lang("addcode.messages.punished", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                }
                                toast.success(Lang("editcode.messages.success", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
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
    var Settings = require("../../../schemas/Settings");
    var code = await Codes.findOne({name: ctx.params.id});
    var categories = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    categories = categories.categories ? categories.categories : [];
    var publisherRoles = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    publisherRoles = publisherRoles.publisherRoles ? publisherRoles.publisherRoles : []
    const getCookie = (key) => {
        if(ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    if(!code) {
        redirect(ctx, '/');
        return {};
    }
    if(!getCookie("user")) {
        redirect(ctx, '/api/login');
        return {};
    }
    var user = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ","));
    if(code.developer.id !== user.id) {
        redirect(ctx, '/')
        return {};
    }
    var settings = (await Settings.findOne({id: 1})) || {};
    var ads = await Advertisements.find({position_id: 16});
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
            categories: JSON.stringify(categories),
            publisherRoles: JSON.stringify(publisherRoles),
            code: JSON.stringify(code),
            user,
            settings: ((settings === null) || (settings === undefined)) ? JSON.stringify({}) : JSON.stringify(settings),
            advertisements: JSON.stringify(ads),
            lang: ctx.locale,
            userIsStaff
        }
    }
}

export default App;
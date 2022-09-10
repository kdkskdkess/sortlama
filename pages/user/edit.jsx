import Head from 'next/head';
import Link from 'next/link';
import CodeCard from '../../Components/CodeCard';
import Lang from "../../language";

import Navbar from '../../Components/Navbar';
import UserSidebar from '../../Components/UserSidebar';
import Bots from '../../schemas/Bots';
import User from '../../schemas/User';

import Footer from "../../Components/Footer";

const cfg = require('../../config.js');

import Advertisements from '../../schemas/Advertisements';

import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";
import redirect from "next-redirect";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.props.bots = JSON.parse(this.props.bots);
        this.props.profile = JSON.parse(this.props.profile);
        this.props.advertisements = JSON.parse(this.props.advertisements);
        this.props.userLevelRoles = JSON.parse(this.props.userLevelRoles);
        this.state = {
            biography: this.props.profile.biography ? this.props.profile.biography : "",
            instagram: this.props.profile.instagram ? this.props.profile.instagram : "",
            github: this.props.profile.github ? this.props.profile.github : "",
            twitter: this.props.profile.twitter ? this.props.profile.twitter : "",
            website: this.props.profile.website ? this.props.profile.website : "",
            youtube: this.props.profile.youtube ? this.props.profile.youtube : "",
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
            <div className="bg-discord-black-darker w-full md:p-7">
                <div className="md:flex md:flex-wrap flex-row-reverse md:flex-row">
                    <div className="bg-discord-black w-full md:w-3/4 h-full">
                        <div className="p-4 md:p-6">
                            <div className="w-full" align="center">
                                <label className="text-white text-sm font-semibold">{Lang("profile.edit.biography", this.props.lang)}</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">description</span></a>
                                    <input value={this.state.biography} onChange={(e) => this.setState({biography: e.target.value})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="..." />
                                </div>
                            </div>
                            <br/>
                            <div className="w-full" align="center">
                                <label className="text-white text-sm font-semibold">Instagram</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">photo_camera</span></a>
                                    <input value={this.state.instagram} onChange={(e) => this.setState({instagram: e.target.value})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="https://instagram.com/instagram" />
                                </div>
                            </div>
                            <br/>
                            <div className="w-full" align="center">
                                <label className="text-white text-sm font-semibold">Youtube</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">videocam</span></a>
                                    <input value={this.state.youtube} onChange={(e) => this.setState({youtube: e.target.value})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="https://youtube.com/youtube" />
                                </div>
                            </div>
                            <br/>
                            <div className="w-full" align="center">
                                <label className="text-white text-sm font-semibold">Github</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">code</span></a>
                                    <input value={this.state.github} onChange={(e) => this.setState({github: e.target.value})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="https://github.com/github" />
                                </div>
                            </div>
                            <br/>
                            <div className="w-full" align="center">
                                <label className="text-white text-sm font-semibold">Twitter</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">sms</span></a>
                                    <input value={this.state.twitter} onChange={(e) => this.setState({twitter: e.target.value})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="https://twitter.com/twitter" />
                                </div>
                            </div>
                            <br/>
                            <div className="w-full" align="center">
                                <label className="text-white text-sm font-semibold">Website</label>
                                <div className="flex">
                                    <a className="rounded-l-md bg-discord-black-darker text-white p-2"><span className="material-icons text-md mt-0.5">language</span></a>
                                    <input value={this.state.website} onChange={(e) => this.setState({website: e.target.value})} className="w-full px-2 bg-input rounded-r-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder="https://website.com" />
                                </div>
                            </div>
                            <br/>
                            <div className="flex justify-center">
                                <a className="flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async (e) => {
                                                await axios(cfg.siteURL+"/api/settings", {
                                                    method: "POST",
                                                    headers: {
                                                        'Accept': 'application/json',
                                                        'Content-Type': 'application/json'
                                                    },
                                                    data: {
                                                        settings: this.state,
                                                        admin: "9wA7yggY0WI",
                                                        userSettings: true,
                                                        user: this.props.user.id
                                                    }
                                                })
                                                toast.success(Lang("saved", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }}>Kaydet</a>
                            </div>
                        </div>
                        <div className="py-2"></div>
                    </div>
                    <div className="py-3 md:py-0"></div>
                    <UserSidebar user={this.props.user} bots={this.props.bots} profile={this.props.profile} levelRoles={this.props.userLevelRoles} lang={this.props.lang}/>
                </div>
            </div>
            <Footer lang={this.props.lang}/>
        </>
    );
    }
}

export async function getServerSideProps(ctx) {
    const getCookie = (key) => {
        if (ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
        try {
            var a = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id;
        } catch (err) {
            redirect(ctx, '/api/login')
            return {};
        }
        if (!a) {
            redirect(ctx, '/api/login')
            return {};
        }
    try {
        var user = await fetch(`https://discord.com/api/users/@me`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getCookie("access_token"),
                "Content-Type": "application/json"
            }
        }).then((u) => u.json());
    } catch (err) {
        redirect(ctx, "/");
        return {
            props: {

            }
        }
    }
    if (user.message) {
        return redirect(ctx, "/");
    }
    const bots = await Bots.find({ "developers": { $elemMatch: { "id": user.id } } });
    const profile = (await User.findOne({ id: user.id })) || {};
    var ads = await Advertisements.find({position_id: 9});
    const Staffs = require("../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var member = await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${a || ctx.params.id}`, {
        method: "GET",
        headers: {
            "Authorization": "Bot " + cfg.token,
            "Content-Type": "application/json"
        }
    }).then((u) => u.json());
    var roles = [];
    if (!member.message) {
        roles = member.roles;
    }
    const LevelRoles = require("../../schemas/LevelRoles.js")
    const levelRoles = (await LevelRoles.find({}));
    var userLevelRoles = [];
    for (let obj of levelRoles) {
        if (roles.includes(obj.id)) {
            userLevelRoles.push(obj)
        }
    }
    var Punishments = require("../../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    return {
        props: {
            userPunishments,
            user,
            bots: JSON.stringify(bots),
            profile: JSON.stringify(profile),
            advertisements: JSON.stringify(ads),
            userIsStaff,
            userLevelRoles: JSON.stringify(userLevelRoles),
            lang: ctx.locale
        }
    }
}

export default Index;
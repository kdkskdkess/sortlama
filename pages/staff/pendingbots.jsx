import Sidebar from "../../Components/Panel/Sidebar";
import redirect from "next-redirect";
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Bots from "../../schemas/Bots";
import { ToastContainer, toast } from 'react-toastify';
import Lang from "../../language";
import Head from "next/head";

const cfg = require('../../config.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.bots = JSON.parse(this.props.bots)
        this.state = {
            bots: this.props.bots
        };
    }

    render() {
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("staff.sidebar.waitingBots", this.props.lang)}</title>
            </Head>
            <ToastContainer />
            <div className="min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                    <Sidebar user={this.props.user} userIsStaff={this.props.userIsStaff} userIsAdmin={this.props.userIsAdmin} lang={this.props.lang}/>
                <div className="bg-gray-900 h-screen w-screen px-16 md:px-64 p-6">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div>
                                <h2 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.pendingbots.head", this.props.lang)}</h2>
                            </div>
                            <div className="my-2 flex sm:flex-row flex-col">
                                <div className="block relative">
                                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current bg-input text-gray-200">
                                            <path
                                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input onChange={(e) => {
                                        this.setState({bots: this.props.bots.filter((bot) => bot.bot.name.toLowerCase().includes(e.target.value.toLowerCase()))})
                                    }} placeholder={Lang("botPlaceholder", this.props.lang)}
                                        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-b block pl-8 pr-6 py-2 w-full text-sm placeholder-gray-400 bg-input text-gray-200 focus:placeholder-gray-200 focus:outline-none border-none" />
                                </div>
                            </div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden bg-input">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                    {Lang("staff.pendingbots.name", this.props.lang)}
                                                </th>
                                                <th
                                                    className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                    {Lang("staff.pendingbots.owner", this.props.lang)}
                                                </th>
                                                <th
                                                    className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                    {Lang("staff.pendingbots.acts", this.props.lang)}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.bots ?
                                            this.state.bots.sort(function(a, b) { return (b.votes || 0) - (a.votes || 0) }).map((bot, i) => {
                                            return (<tr>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            <img className="w-full h-full rounded-full"
                                                                src={bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`}
                                                                alt="" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-200 whitespace-no-wrap">
                                                                {bot.bot.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <p className="text-gray-200 whitespace-no-wrap">{decodeURIComponent(bot.owner.tag)}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <div className="flex">
                                                        <div className="badge cursor-pointer">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full" onClick={async(e) => {
                                                                var d = await axios(cfg.siteURL+"/api/bots/remove", {
                                                                    method: "POST",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    data: {
                                                                        bot: bot.id,
                                                                        staff: this.props.user.id,
                                                                        botIndex: i,
                                                                        admin: "9wA7yggY0WI"
                                                                    }
                                                                }).then(t => t.data)
                                                                if(d.error === 3) {
                                                                    return toast.error(Lang("staff.pending.bots.regularly", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                                }
                                                                toast.success(Lang("staff.pendingbots.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                                this.setState({bots: this.props.bots.filter((bott) => bott.id !== bot.id)})
                                                                this.props.bots = this.state.bots.filter((bott) => bott.id !== bot.id)
                                                            }}>{Lang("staff.pendingbots.delete", this.props.lang)}</span>
                                                        </div>
                                                        <div className="badge ml-2 cursor-pointer">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-purple-800 bg-blue-100 rounded-full" onClick={async(e) => {
                                                                var d = await axios(cfg.siteURL+"/api/bots/approve", {
                                                                    method: "POST",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    data: {
                                                                        bot: bot.id,
                                                                        staff: this.props.user.id,
                                                                        botIndex: i,
                                                                        admin: "9wA7yggY0WI"
                                                                    }
                                                                }).then(t => t.data)
                                                                if(d.error === 3) {
                                                                    return toast.error(Lang("staff.pending.bots.regularly", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                                }
                                                                toast.success(Lang("staff.pendingbots.approved", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                                this.setState({bots: this.props.bots.filter((bott) => bott.id !== bot.id)})
                                                                this.props.bots = this.state.bots.filter((bott) => bott.id !== bot.id)
                                                            }}>{Lang("staff.pendingbots.approve", this.props.lang)}</span>
                                                        </div>
                                                        <Link href={`/${this.props.lang}/bot/${bot.id}`}>
                                                        <div className="badge ml-2 cursor-pointer">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">{Lang("staff.pendingbots.view", this.props.lang)}</span>
                                                        </div>
                                                        </Link>
                                                        <Link href={`https://discordapp.com/oauth2/authorize?client_id=${bot.id}&permissions=0&scope=bot`}>
                                                        <div className="badge ml-2 cursor-pointer">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-green-800 bg-blue-100 rounded-full">{Lang("staff.pendingbots.inviteToMainServer", this.props.lang)}</span>
                                                        </div>
                                                        </Link>
                                                        <Link href={`https://discordapp.com/oauth2/authorize?client_id=${bot.id}&permissions=8&scope=bot`}>
                                                        <div className="badge ml-2 cursor-pointer">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-gray-800 bg-blue-100 rounded-full">{Lang("staff.pendingbots.inviteToTestServer", this.props.lang)}</span>
                                                        </div>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>)
                                            })
                                            :
                                            <tr>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-200 whitespace-no-wrap">
                                                                
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <p className="text-gray-200 whitespace-no-wrap"></p>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <div className="flex">
                                                        <div className="badge">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full"></span>
                                                        </div>
                                                        <div className="badge ml-2">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"></span>
                                                        </div>
                                                        <div className="badge ml-2">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full"></span>
                                                        </div>
                                                        <div className="badge ml-2">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-green-800 bg-blue-100 rounded-full"></span>
                                                        </div>
                                                        <div className="badge ml-2">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-gray-800 bg-blue-100 rounded-full"></span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }
}

export async function getServerSideProps(ctx) {
    var bots = await Bots.find({});
    const getCookie = (key) => {
        if (ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    bots.forEach((el) => {
        el["key"] = null;
    });
    if (getCookie("user")) {
        var user = JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ","));
    } else {
        redirect(ctx, '/api/login')
        return {};
    }
    const Staffs = require("../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var userIsAdmin = userIsStaff ? (await Staffs.findOne({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).admin : false;
    return {
        props: {
            user,
            bots: JSON.stringify(bots.filter(bot => bot.waiting === true)),
            userIsStaff,
            userIsAdmin,
            lang: ctx.locale
        }
    }
}

export default App;
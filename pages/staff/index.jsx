import { useState } from "react";
import Link from "next/link";
import Sidebar from "../../Components/Panel/Sidebar";
import Cookies from 'js-cookie';
import axios from "axios";
import Lang from "../../language";
import Head from "next/head";
const cfg = require('../../config.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.bots = JSON.parse(this.props.bots)
        this.props.staffs = JSON.parse(this.props.staffs)
        this.props.categories = JSON.parse(this.props.categories)
        this.props.users = JSON.parse(this.props.users)
        this.props.normalUsers = JSON.parse(this.props.normalUsers)
        this.props.codes = JSON.parse(this.props.codes)
        this.props.totalApprovedBotsAndCodes = JSON.parse(this.props.totalApprovedBotsAndCodes)
        this.state = {
            staffStatsCodeCategory: "",
            userStatsCodeCategory: ""
        };
    }

    render() {
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("staff.sidebar.head", this.props.lang)}</title>
            </Head>
            <div className="min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                <Sidebar user={this.props.user} userIsStaff={this.props.userIsStaff} userIsAdmin={this.props.userIsAdmin} lang={this.props.lang}/>
                <div className="bg-gray-900 h-full w-screen px-16 md:px-64 p-6">
                    <div className="flex items-center">
                        <div className="p-4">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">construction</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.index.cards.staffs", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.staffs.length}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">delete_forever</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.index.cards.bannedBots", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.bannedBots}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">do_not_step</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.index.cards.kickedBots", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.kickedBots}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">smart_toy</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.index.cards.bots", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.bots.length}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">done</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.index.cards.approvedbots", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.bots.filter((bot) => bot.waiting === false).length}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">schedule</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.index.cards.waitingbots", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.bots.filter((bot) => bot.waiting === true).length}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">smart_toy</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.approvedcodes.head", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.codes.length}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">done</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.sidebar.approvedCodes", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.codes.filter((bot) => bot.waiting === false).length}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">schedule</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.sidebar.waitingCodes", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.codes.filter((bot) => bot.waiting === true).length}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                                    <div className="flex flex-row bg-input shadow-sm rounded p-4">
                                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-discord-black text-blue-500">
                                            <span className="material-icons">verified</span>
                                        </div>
                                        <div className="flex flex-col flex-grow ml-4">
                                            <div className="text-sm text-white">{Lang("staff.index.cards.certifiedbots", this.props.lang)}</div>
                                            <div className="font-bold text-lg text-gray-200">{this.props.bots.filter((bot) => bot.certificate === true).length}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="container mx-auto px-4 sm:px-8">
                            <div className="py-8">
                                <div>
                                    <h5 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.index.stats.staff.totalBots", this.props.lang)}</h5>
                                </div>
                                <div className="py-2"></div>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden bg-input">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalBots.table.id", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalBots.table.tag", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalBots.table.totalBots", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.totalApprovedBotsAndCodes.slice(0, 9).sort((b, a) => (b.bots || 0) - (a.bots || 0)).map((staff, i) => {
                                                    var user = this.props.normalUsers.filter(u => u.id === staff.id)[0] || this.props.staffs.filter(u => u.id === staff.id)[0]
                                                    return (<tr id={`staffBot-${staff.id}`}>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {staff.id}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {user.tag || "User#0000"}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {staff.bots || 0}
                                                        </p>
                                                    </td>
                                                </tr>)
                                                })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto px-4 sm:px-8">
                            <div className="py-8">
                                <div>
                                    <h5 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.index.stats.staff.totalCodes", this.props.lang)}</h5>
                                </div>
                                <div className="py-2"></div>
                                <h2 className="text-sm font-semibold leading-tight text-gray-200">{Lang("staff.index.stats.selectCategory", this.props.lang)}</h2>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <select onChange={(e) => this.setState({ staffStatsCodeCategory: e.target.value })} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                        <option selected disabled>{Lang("staff.index.stats.selectCategory", this.props.lang)}</option>
                                            {
                                                this.props.categories.map((el, i) => {
                                                    return (<option key={i} value={el}>{el}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden bg-input">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalCodes.table.id", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalCodes.table.tag", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalCodes.table.totalCodes", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.users.filter((u) => Object.keys((u.howManyCodeAdded ? u.howManyCodeAdded : {})).includes(this.state.staffStatsCodeCategory)).slice(0, 9).sort((a, b) => (b.howManyCodeAdded[this.state.staffStatsCodeCategory] || 0) - (a.howManyCodeAdded[this.state.staffStatsCodeCategory] || 0)).map((staff, i) => {
                                                    var user = this.props.normalUsers.filter(u => u.id === staff.id)[0] || this.props.staffs.filter(u => u.id === staff.id)[0]
                                                    return (<tr id={`staff-${staff.id}`}>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {user.id}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {user.tag || "User#0000"}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {staff.howManyCodeAdded[this.state.staffStatsCodeCategory]}
                                                        </p>
                                                    </td>
                                                </tr>)
                                                })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto px-4 sm:px-8">
                            <div className="py-8">
                                <div>
                                    <h5 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.index.stats.user.totalCodes", this.props.lang)}</h5>
                                </div>
                                <div className="py-2"></div>
                                <h2 className="text-sm font-semibold leading-tight text-gray-200">{Lang("staff.index.stats.selectCategory", this.props.lang)}</h2>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <select onChange={(e) => this.setState({ userStatsCodeCategory: e.target.value })} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                        <option selected disabled>{Lang("staff.index.stats.selectCategory", this.props.lang)}</option>
                                            {
                                                this.props.categories.map((el, i) => {
                                                    return (<option key={i} value={el}>{el}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden bg-input">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalCodes.table.id", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalCodes.table.tag", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.index.stats.totalCodes.table.totalCodes", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.normalUsers.filter((u) => Object.keys((u.howManyCodeAdded ? u.howManyCodeAdded : {})).includes(this.state.userStatsCodeCategory)).slice(0, 9).sort((a, b) => (b.howManyCodeAdded[this.state.userStatsCodeCategory] || 0) - (a.howManyCodeAdded[this.state.userStatsCodeCategory] || 0)).map((user, i) => {
                                                    return (<tr id={`user-${user.id}`}>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {user.id}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {user.tag || "User#0000"}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {user.howManyCodeAdded[this.state.userStatsCodeCategory]}
                                                        </p>
                                                    </td>
                                                </tr>)
                                                })
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
    );
    }
}

export async function getServerSideProps(ctx) {
    var Bots = require("../../schemas/Bots")
    var User = require("../../schemas/User")
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
    const Codes = require("../../schemas/Codes.js")
    const CodeSettings = require("../../schemas/CodeSettings.js")
    const BotsTotalKickBan = require("../../schemas/BotsTotalKickBan.js")
    const TotalApprovedBotsAndCodes = require("../../schemas/TotalApprovedBotsAndCodes.js")
    var staffs = (await Staffs.find({})) || [];
    var totalApprovedBotsAndCodes = (await TotalApprovedBotsAndCodes.find({})) || [];
    var normalUsers = (await User.find({}))  || [];
    var users = []
    staffs.forEach(async(staff) => {
        var u = await User.findOne({id: staff.id});
        if(u) {
            users.push(u);
        }
    })
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var userIsAdmin = userIsStaff ? (await Staffs.findOne({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).admin : false;
    var bannedBots = (await BotsTotalKickBan.findOne({id: "ban"})) || {}
    var kickedBots = (await BotsTotalKickBan.findOne({id: "kick"})) || {}
    var codes = (await Codes.find({})) || []
    var categories = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    categories = categories.categories ? categories.categories : []
    return {
        props: {
            user,
            bots: JSON.stringify(bots),
            staffs: JSON.stringify(staffs),
            users: JSON.stringify(users),
            normalUsers: JSON.stringify(normalUsers),
            categories: JSON.stringify(categories),
            codes: JSON.stringify(codes),
            totalApprovedBotsAndCodes: JSON.stringify(totalApprovedBotsAndCodes),
            userIsStaff,
            userIsAdmin,
            lang: ctx.locale,
            bannedBots: bannedBots.bans || 0,
            kickedBots: kickedBots.kicks || 0,
        }
    }
}

export default App;
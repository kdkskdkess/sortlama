import Sidebar from "../../Components/Panel/Sidebar";
import redirect from "next-redirect";
import { useState } from 'react';
import Link from 'next/link';
import Punishments from "../../schemas/Punishments";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Router from 'next/router'
import Lang from "../../language";
import Head from "next/head";

const cfg = require('../../config.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.bots = JSON.parse(this.props.bots)
        this.state = {
            punish: "",
            id: "",
            reason: "",
            punishType: "",
            bots: this.props.bots
        };
    }

    render() {
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("staff.sidebar.punishments", this.props.lang)}</title>
            </Head>
            <ToastContainer />
            <div className="min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                    <Sidebar user={this.props.user} userIsStaff={this.props.userIsStaff} userIsAdmin={this.props.userIsAdmin} lang={this.props.lang}/>
                <div className="bg-gray-900 h-screen w-screen px-16 md:px-64 p-6">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div>
                                <h2 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.punishment.head", this.props.lang)}</h2>
                            </div>
                            <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <select onChange={(e) => {
                                            this.setState({ punish: e.target.value })
                                            var index = e.nativeEvent.target.selectedIndex
                                            this.setState({ punishType: e.nativeEvent.target[index].text })
                                        }} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                            <option value={0} selected disabled>{Lang("staff.punishment.selectPunish", this.props.lang)}</option>
                                            {
                                                [
                                                    {name: Lang("staff.punishment.punishments.botBan", this.props.lang), id: 1}, 
                                                    {name: Lang("staff.punishment.punishments.codeBan", this.props.lang), id: 2}, 
                                                    {name: Lang("staff.punishment.punishments.siteBan", this.props.lang), id: 3}, 
                                                ].map((punish) => {
                                                    return (<option value={punish.id}>{punish.name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="block relative ml-2">
                                        <input value={this.state.id} type="number" onChange={(e) => {
                                            this.setState({ id: e.target.value })
                                        }} placeholder={Lang("staff.punishment.toBePunished", this.props.lang)}
                                            className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent" />
                                    </div>
                                    <div className="block relative ml-2">
                                        <input value={this.state.reason} onChange={(e) => {
                                            this.setState({ reason: e.target.value })
                                        }} placeholder={Lang("staff.punishment.reason", this.props.lang)}
                                            className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent" />
                                    </div>
                                    <div className="flex justify-center">
                                        <a className="flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async(e) => {

                                            if(this.state.punish.length === 0 || this.state.id.length === 0) {
                                                return toast.error(Lang("staff.punishment.fillEverything", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            var d = await fetch(cfg.siteURL+"/api/punishments", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    data: this.state,
                                                    staff: this.props.user.id,
                                                    admin: "9wA7yggY0WI"
                                                })
                                            })

                                            if(d.error === 2) {
                                                return toast.error(Lang("staff.punishment.alreadyBanned", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            toast.success(Lang("staff.punishment.added", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });

                                            this.props.bots.push({id: this.state.id, punishID: this.state.punish, reason: this.state.reason})
                                            this.setState({ punish: "" })
                                            this.setState({ id: "" })
                                            this.setState({ reason: "" })
                                        }}>Ekle</a>
                                    </div>
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
                                    <input type="number" onChange={(e) => {
                                        this.setState({bots: this.props.bots.filter((bot) => bot.id.includes(e.target.value.toLowerCase()))})
                                    }} placeholder="ID"
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
                                                    ID
                                                </th>
                                                <th
                                                    className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                    
                                                </th>
                                                <th
                                                    className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                    {Lang("staff.punishment.reason", this.props.lang)}
                                                </th>
                                                <th
                                                    className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                    {Lang("staff.punishment.acts", this.props.lang)}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.bots ?
                                            this.props.bots.map((p, i) => {
                                            var punishments = [
                                                {name: Lang("staff.punishment.punishments.botBan", this.props.lang), id: "1"}, 
                                                {name: Lang("staff.punishment.punishments.codeBan", this.props.lang), id: "2"}, 
                                                {name: Lang("staff.punishment.punishments.siteBan", this.props.lang), id: "3"}, 
                                            ]
                                            var index = i;
                                            return (<tr id={`punishment-${index}`}>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <p className="text-gray-200 whitespace-no-wrap">{p.id}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <p className="text-gray-200 whitespace-no-wrap">{punishments.filter(f => f.id === p.punishID)[0].name}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <p className="text-gray-200 whitespace-no-wrap">{p.reason}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <div className="flex">
                                                        <div className="badge cursor-pointer">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full" onClick={async(e) => {
                                                                await fetch(cfg.siteURL+"/api/punishments", {
                                                                    method: "POST",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    body: JSON.stringify({
                                                                        data: p,
                                                                        staff: this.props.user.id,
                                                                        index: i,
                                                                        delete: true,
                                                                        admin: "9wA7yggY0WI"
                                                                    })
                                                                })
                                                                document.getElementById(`punishment-${index}`).remove();
                                                                                                                                toast.success(Lang("staff.punishment.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                            }}>{Lang("staff.punishment.delete", this.props.lang)}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>)
                                            })
                                            :
                                            <tr>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <div className="flex items-center">
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
    var bots = await Punishments.find({});
    const getCookie = (key) => {
        if (ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
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
            bots: JSON.stringify(bots),
            userIsStaff,
            userIsAdmin,
            lang: ctx.locale
        }
    }
}

export default App;
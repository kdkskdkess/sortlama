import Sidebar from "../../Components/Panel/Sidebar";
import redirect from "next-redirect";
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Bots from "../../schemas/Bots";
import BotAddQuota from "../../schemas/BotAddQuota";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Lang from "../../language";
import Head from "next/head";

const cfg = require('../../config.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.quota = JSON.parse(this.props.quota)
        this.state = {
            quota: this.props.quota,
            role: "",
            number: ""
        };
    }

    render() {
        const router = useRouter();
        return (
            <>
                <Head>
                    <title>{cfg.siteName} - {Lang("staff.sidebar.addBotQuota", this.props.lang)}</title>
                </Head>
                <ToastContainer />
                <div className="min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                    <Sidebar user={this.props.user} userIsStaff={this.props.userIsStaff} userIsAdmin={this.props.userIsAdmin} lang={this.props.lang}/>
                    <div className="bg-gray-900 h-screen w-screen px-16 md:px-64 p-6">
                        <div className="container mx-auto px-4 sm:px-8">
                            <div className="py-8">
                                <div>
                                    <h5 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.botquota.head", this.props.lang)}</h5>
                                </div>
                                <div className="py-2"></div>
                                <h2 className="text-sm font-semibold leading-tight text-gray-200">{Lang("staff.botquota.addQuota", this.props.lang)}</h2>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <select onChange={(e) => this.setState({ role: e.target.value })} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                            <option value={0} selected disabled>{Lang("staff.botquota.selectRole", this.props.lang)}.</option>
                                            {
                                                this.props.server.roles.sort((a, b) => b.position - a.position).map((role) => {
                                                    return (<option value={role.id} selected={this.state.role === role.id}>{role.name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="block relative ml-2">
                                        <input value={this.state.number} onChange={(e) => {
                                            this.setState({ number: e.target.value })
                                        }} placeholder={Lang("staff.botquota.botNumber", this.props.lang)} type="number"
                                            className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent" />
                                    </div>
                                    <div className="flex justify-center">
                                        <a className="flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async(e) => {

                                            if(this.state.role.length === 0 || this.state.number.length === 0) {
                                                return toast.error(Lang("staff.botquota.fillEverything", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            var d = await axios(cfg.siteURL+"/api/addbotquotarole", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    settings: this.state,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);

                                            if(d.error === 2) {
                                                return toast.error(Lang("staff.botquota.alreadyAdded", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            toast.success(Lang("staff.botquota.added", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });

                                            this.props.quota.push({id: this.state.role, quota: this.state.number})
                                            this.setState({ number: "" })
                                            this.setState({ role: "" })
                                        }}>{Lang("send", this.props.lang)}</a>
                                    </div>
                                </div>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden bg-input">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.botquota.role", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.botquota.number", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.botquota.acts", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.quota.map((role, i) => {
                                                    var nRole = this.props.server.roles.filter((r) => r.id === role.id)[0];
                                                    if(!nRole) {
                                                        nRole = {
                                                            name: Lang("staff.botquota.deletedRole", this.props.lang),
                                                            number: role.id
                                                        }
                                                    }
                                                    return (<tr id={`quota-${i}`}>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {nRole.name}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {role.quota}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <div className="flex">
                                                            <div className="badge cursor-pointer" onClick={async(e) => {
                                                                var d = await axios(cfg.siteURL+"/api/addbotquotarole", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    settings: {
                                                        role: nRole.id ? nRole.id : nRole.number,
                                                        number: role.quota
                                                    },
                                                    delete: true,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);
                                                document.getElementById(`quota-${i}`).remove();
                                                
                                                return toast.success(Lang("staff.botquota.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                            }}>
                                                                <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full">{Lang("staff.botquota.delete", this.props.lang)}</span>
                                                            </div>
                                                        </div>
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
        )
    }
}

export async function getServerSideProps(ctx) {
    var quota = await BotAddQuota.find({});
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
    var server = await axios(cfg.siteURL+"/api/server", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: {
            admin: "9wA7yggY0WI"
        }
    }).then(t => t.data)
    const Staffs = require("../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var userIsAdmin = userIsStaff ? (await Staffs.findOne({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).admin : false;
    return {
        props: {
            user,
            quota: JSON.stringify(quota),
            server,
            userIsStaff,
            userIsAdmin,
            lang: ctx.locale
        }
    }
}

export default App;
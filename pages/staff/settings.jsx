import { useState } from "react";
import Link from "next/link";
import Sidebar from "../../Components/Panel/Sidebar";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import redirect from "next-redirect";
import Settings from "../../schemas/Settings";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Lang from "../../language";
import Head from "next/head";

const cfg = require('../../config.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.settings || this.props.settings === null) {
            this.props.settings = JSON.stringify({});
        }
        this.props.settings = JSON.parse(this.props.settings)
        this.state = {
            botAdd: this.props.settings.botAdd ? true : false,
            regularlyBotApprove: this.props.settings.regularlyBotApprove ? true : false,
            codeAdd: this.props.settings.codeAdd ? true : false,
            regularlyCodeApprove: this.props.settings.regularlyCodeApprove ? true : false
        };
    }

    render() {
        return (
            <>
                <Head>
                    <title>{cfg.siteName} - {Lang("staff.sidebar.settings", this.props.lang)}</title>
                </Head>
                <ToastContainer />
                <div className="min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                    <Sidebar user={this.props.user} userIsStaff={this.props.userIsStaff} userIsAdmin={this.props.userIsAdmin} lang={this.props.lang}/>
                    <div className="bg-gray-900 h-screen w-screen px-16 md:px-64 p-6">
                        <div className="container mx-auto px-4 sm:px-8">
                            <div className="py-8">
                                <div>
                                    <h2 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.settings.head", this.props.lang)}</h2>
                                </div>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden bg-input">

                                    <div className="mt-2 md:mt-8 md:ml-4 flex">
                                            <label className="text-white text-sm font-semibold">{Lang("staff.settings.botApp", this.props.lang)}</label>
                                            <div className="flex ml-3">
                                                <label className="cursor-pointer">
                                                    <div className="relative">
                                                        <input checked={this.state.botAdd} id="toogleA" type="checkbox" className="sr-only" onChange={(e) => {
                                                            this.setState({ botAdd: !this.state.botAdd })
                                                        }} />
                                                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mt-2 md:mt-8 md:ml-4 flex">
                                            <label className="text-white text-sm font-semibold">{Lang("staff.settings.codeApp", this.props.lang)}</label>
                                            <div className="flex ml-3">
                                                <label className="cursor-pointer">
                                                    <div className="relative">
                                                        <input checked={this.state.codeAdd} id="toogleA" type="checkbox" className="sr-only" onChange={(e) => {
                                                            this.setState({ codeAdd: !this.state.codeAdd })
                                                        }} />
                                                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mt-2 md:mt-8 md:ml-4 flex">
                                            <label className="text-white text-sm font-semibold">{Lang("staff.settings.regularlyBotControl", this.props.lang)}</label>
                                            <div className="flex ml-3">
                                                <label className="cursor-pointer">
                                                    <div className="relative">
                                                        <input checked={this.state.regularlyBotApprove} id="toogleA" type="checkbox" className="sr-only" onChange={(e) => {
                                                            this.setState({ regularlyBotApprove: !this.state.regularlyBotApprove })
                                                        }} />
                                                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mt-2 md:mt-8 md:ml-4 flex">
                                            <label className="text-white text-sm font-semibold">{Lang("staff.settings.regularlyCodeControl", this.props.lang)}</label>
                                            <div className="flex ml-3">
                                                <label className="cursor-pointer">
                                                    <div className="relative">
                                                        <input checked={this.state.regularlyCodeApprove} id="toogleA" type="checkbox" className="sr-only" onChange={(e) => {
                                                            this.setState({ regularlyCodeApprove: !this.state.regularlyCodeApprove })
                                                        }} />
                                                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <br />

                                        <div className="flex justify-center">
                                            <a className="flex-no-grow flex-no-shrink relative text-lg py-2 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async (e) => {
                                                console.log(this.state)
                                                await axios(cfg.siteURL+"/api/settings", {
                                                    method: "POST",
                                                    headers: {
                                                        'Accept': 'application/json',
                                                        'Content-Type': 'application/json'
                                                    },
                                                    data: {
                                                        settings: this.state,
                                                        admin: "9wA7yggY0WI"
                                                    }
                                                })
                                                toast.success(Lang("saved", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }}>{Lang("send", this.props.lang)}</a>
                                        </div>
                                        <div className="py-3"></div>
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
    const settings = (await Settings.findOne({ id: 1 })) || {}
    const Staffs = require("../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var userIsAdmin = userIsStaff ? (await Staffs.findOne({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).admin : false;
    return {
        props: {
            user,
            settings: JSON.stringify(settings),
            userIsStaff,
            userIsAdmin,
            lang: ctx.locale
        }
    }
}

export default App;
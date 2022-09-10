import Sidebar from "../../Components/Panel/Sidebar";
import redirect from "next-redirect";
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Codes from "../../schemas/Codes";
import { ToastContainer, toast } from 'react-toastify';
import Lang from "../../language";
import Head from "next/head";

const cfg = require('../../config.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.codes = JSON.parse(this.props.codes)
        this.state = {
            codes: this.props.codes
        };
    }

    render() {
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("staff.approvedcodes.head", this.props.lang)}</title>
            </Head>
            <ToastContainer />
            <div className="min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                    <Sidebar user={this.props.user} userIsStaff={this.props.userIsStaff} userIsAdmin={this.props.userIsAdmin} lang={this.props.lang}/>
                <div className="bg-gray-900 h-screen w-screen px-16 md:px-64 p-6">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div>
                                <h2 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.approvedcodes.head", this.props.lang)}</h2>
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
                                        this.setState({codes: this.props.codes.filter((code) => code.name.toLowerCase().includes(e.target.value.toLowerCase()))})
                                    }} placeholder={Lang("codePlaceholder", this.props.lang)}
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
                                                    {Lang("staff.approvedcodes.name", this.props.lang)}
                                                </th>
                                                <th
                                                    className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                    {Lang("staff.approvedcodes.owner", this.props.lang)}
                                                </th>
                                                <th
                                                    className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                    {Lang("staff.approvedcodes.acts", this.props.lang)}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.codes ?
                                            this.state.codes.map((code, i) => {
                                            return (<tr id={`code-${i}`}>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className="text-gray-200 whitespace-no-wrap">
                                                                {code.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <p className="text-gray-200 whitespace-no-wrap">{decodeURIComponent(code.developer.username)}#{code.developer.discriminator}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                    <div className="flex">
                                                        <div className="badge cursor-pointer">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full" onClick={async(e) => {
                                                                var d = await axios(cfg.siteURL+"/api/codes/remove", {
                                                                    method: "POST",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    data: {
                                                                        code: code,
                                                                        staff: this.props.user.id,
                                                                        admin: "9wA7yggY0WI"
                                                                    }
                                                                })
                                                                if(d.error === 5) {
                                                                    return toast.error(Lang("staff.approvedcodes.youDontHavePermission", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                                }
                                                                toast.success(Lang("staff.approvedcodes.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                                document.getElementById(`code-${i}`).remove();
                                                            }}>{Lang("staff.approvedcodes.delete", this.props.lang)}</span>
                                                        </div>
                                                        <Link href={`/${this.props.lang}/code/${code.name}`}>
                                                        <div className="badge ml-2 cursor-pointer">
                                                            <span className="px-2 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">{Lang("staff.pendingbots.view", this.props.lang)}</span>
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
    var codes = await Codes.find({});
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
            codes: JSON.stringify(codes.filter(code => code.waiting === false)),
            userIsStaff,
            userIsAdmin,
            lang: ctx.locale
        }
    }
}

export default App;
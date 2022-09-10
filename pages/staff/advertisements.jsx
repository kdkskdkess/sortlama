import Sidebar from "../../Components/Panel/Sidebar";
import redirect from "next-redirect";
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Bots from "../../schemas/Bots";
import Advertisements from "../../schemas/Advertisements";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Lang from "../../language";
import Head from "next/head";

const cfg = require('../../config.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.advertisements = JSON.parse(this.props.advertisements)
        this.state = {
            id: "",
            position: "",
            image: ""
        };
    }

    render() {
        const router = useRouter();
        return (
            <>
                <Head>
                    <title>{cfg.siteName} - {Lang("staff.advertisements.head", this.props.lang)}</title>
                </Head>
                <ToastContainer />
                <div className="min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                    <Sidebar user={this.props.user} userIsStaff={this.props.userIsStaff} userIsAdmin={this.props.userIsAdmin} lang={this.props.lang}/>
                    <div className="bg-gray-900 h-screen w-screen px-16 md:px-64 p-6">
                        <div className="container mx-auto px-4 sm:px-8">
                            <div className="py-8">
                                <div>
                                    <h5 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.advertisements.head", this.props.lang)}</h5>
                                </div>
                                <div className="py-2"></div>
                                <h2 className="text-sm font-semibold leading-tight text-gray-200">{Lang("staff.advertisements.addAd", this.props.lang)}</h2>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <select onChange={(e) => {
                                            this.setState({ position: e.target.options[event.target.selectedIndex].text })
                                            this.setState({ id: e.target.value })
                                            }} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                            <option value={0} selected disabled>{Lang("staff.advertisements.selectPos", this.props.lang)}</option>
                                            {
                                                cfg.advertisement.map((add) => {
                                                    return (<option value={add.id} selected={this.state.id === add.id}>{add.name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="block relative ml-2">
                                        <input value={this.state.image} onChange={(e) => {
                                            this.setState({ image: e.target.value })
                                        }} placeholder={Lang("staff.advertisements.adImage", this.props.lang)}
                                            className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent" />
                                    </div>
                                    <div className="flex justify-center">
                                        <a className="flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async(e) => {

                                            if(this.state.id.length === 0 || this.state.image.length === 0) {
                                                return toast.error(Lang("staff.advertisements.fillEverything", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            var d = await axios(cfg.siteURL+"/api/advertisements", {
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

                                            toast.success(Lang("staff.advertisements.added", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });

                                            this.props.advertisements.push({image: this.state.image, position_id: this.state.id})
                                            this.setState({ id: "" })
                                            this.setState({ image: "" })
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
                                                        {Lang("staff.advertisements.pos", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.advertisements.image", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.advertisements.acts", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.advertisements.map((add, i) => {
                                                    return (<tr id={`quota-${i}`}>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {cfg.advertisement.map(el => el.name)[add.position_id - 1]}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {add.image}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <div className="flex">
                                                            <div className="badge cursor-pointer" onClick={async(e) => {
                                                                var d = await axios(cfg.siteURL+"/api/advertisements", {
                                                                method: "POST",
                                                                headers: {
                                                                    'Accept': 'application/json',
                                                                    'Content-Type': 'application/json'
                                                                },
                                                                data: {
                                                                    settings: {
                                                                        id: add.id
                                                                    },
                                                                    delete: true,
                                                                    admin: "9wA7yggY0WI"
                                                                }
                                                            }).then((t) => t.data);
                                                                document.getElementById(`quota-${i}`).remove();
                                                                return toast.success(Lang("staff.advertisements.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                            }}>
                                                                <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full">{Lang("staff.advertisements.delete", this.props.lang)}</span>
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
    var advertisements = await Advertisements.find({});
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
            advertisements: JSON.stringify(advertisements),
            userIsStaff,
            userIsAdmin,
            lang: ctx.locale
        }
    }
}

export default App;
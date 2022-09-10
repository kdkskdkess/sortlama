import Sidebar from "../../Components/Panel/Sidebar";
import redirect from "next-redirect";
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Bots from "../../schemas/Bots";
import CodeSettings from "../../schemas/CodeSettings";
import CategoryRoles from "../../schemas/CategoryRoles";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Lang from "../../language";
import Head from "next/head";

const cfg = require('../../config.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.roles = JSON.parse(this.props.roles)
        this.props.categories = JSON.parse(this.props.categories)
        this.props.publisherRoles = JSON.parse(this.props.publisherRoles)
        this.props.categoryRoles = JSON.parse(this.props.categoryRoles)
        this.state = {
            role: "",
            rolePublisher: "",
            category: "",
            categoryRole: "",
            categoryName: ""
        };
    }

    render() {
        const router = useRouter();
        return (
            <>
                <Head>
                    <title>{cfg.siteName} - {Lang("staff.sidebar.codeSettings", this.props.lang)}</title>
                </Head>
                <ToastContainer />
                <div className="min-h-screen flex flex-row flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                    <Sidebar user={this.props.user} userIsStaff={this.props.userIsStaff} userIsAdmin={this.props.userIsAdmin} lang={this.props.lang}/>
                    <div className="bg-gray-900 h-full w-screen px-16 md:px-64 p-6">
                        <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                                <div>
                                    <h5 className="text-2xl font-semibold leading-tight text-gray-200">{Lang("staff.codesettings.head", this.props.lang)}</h5>
                                </div>
                                <div className="py-2"></div>
                                <h2 className="text-sm font-semibold leading-tight text-gray-200">{Lang("staff.codesettings.addCodeStaff", this.props.lang)}</h2>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <select onChange={(e) => this.setState({ role: e.target.value })} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                            <option value={0} selected disabled>{Lang("staff.codesettings.selectRole", this.props.lang)}</option>
                                            {
                                                this.props.server.roles.sort((a, b) => b.position - a.position).map((role) => {
                                                    return (<option value={role.id} selected={this.state.role === role.id}>{role.name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="flex justify-center">
                                        <a className="flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async(e) => {

                                            if(this.state.role.length === 0) {
                                                return toast.error(Lang("staff.codesettings.fillEverything", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            var d = await axios(cfg.siteURL+"/api/codesettings/codestaff", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    id: this.state.role,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);

                                            if(d.error === 2) {
                                                return toast.error(Lang("staff.codesettings.alreadyAddedRole", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            toast.success(Lang("staff.codesettings.addedRole", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });

                                            this.props.roles.push(this.state.role)
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
                                                        {Lang("staff.codesettings.role", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.codesettings.acts", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.roles.map((role, i) => {
                                                    var nRole = this.props.server.roles.filter((r) => r.id === role)[0];
                                                    if(!nRole) {
                                                        nRole = {
                                                            name: Lang("staff.codesettings.deletedRole", this.props.lang),
                                                            number: role
                                                        }
                                                    }
                                                    return (<tr id={`codeRole-${i}`}>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {nRole.name}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <div className="flex">
                                                            <div className="badge cursor-pointer" onClick={async(e) => {
                                                                var d = await axios(cfg.siteURL+"/api/codesettings/codestaff", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    id: nRole.id ? nRole.id : nRole.number,
                                                    delete: true,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);
                                                document.getElementById(`codeRole-${i}`).remove();
                                                return toast.success(Lang("staff.codesettings.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                            }}>
                                                                <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full">{Lang("staff.codesettings.delete", this.props.lang)}</span>
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

                            <br/>
                            
                            <div className="py-8">
                                <h2 className="text-sm font-semibold leading-tight text-gray-200">{Lang("staff.codesettings.addCodePublisher", this.props.lang)}</h2>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <select onChange={(e) => this.setState({ rolePublisher: e.target.value })} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                            <option value={0} selected disabled>{Lang("staff.codesettings.selectRole", this.props.lang)}</option>
                                            {
                                                this.props.server.roles.sort((a, b) => b.position - a.position).map((role) => {
                                                    return (<option value={role.id} selected={this.state.rolePublisher === role.id}>{role.name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="flex justify-center">
                                        <a className="flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async(e) => {

                                            if(this.state.rolePublisher.length === 0) {
                                                return toast.error(Lang("staff.codesettings.fillEverything", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            var d = await axios(cfg.siteURL+"/api/codesettings/codepublisher", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    id: this.state.rolePublisher,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);

                                            if(d.error === 2) {
                                                return toast.error(Lang("staff.codesettings.alreadyAddedRole", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            toast.success(Lang("staff.codesettings.addedRolePublisher", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });

                                            this.props.publisherRoles.push(this.state.rolePublisher)
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
                                                        {Lang("staff.codesettings.role", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.codesettings.acts", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.publisherRoles.map((role, i) => {
                                                    var nRole = this.props.server.roles.filter((r) => r.id === role)[0];
                                                    if(!nRole) {
                                                        nRole = {
                                                            name: Lang("staff.codesettings.deletedRole", this.props.lang),
                                                            number: role
                                                        }
                                                    }
                                                    return (<tr id={`publisherRole-${i}`}>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {nRole.name}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <div className="flex">
                                                            <div className="badge cursor-pointer" onClick={async(e) => {
                                                                var d = await axios(cfg.siteURL+"/api/codesettings/codepublisher", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    id: nRole.id ? nRole.id : nRole.number,
                                                    delete: true,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);
                                                document.getElementById(`publisherRole-${i}`).remove();
                                                return toast.success(Lang("staff.codesettings.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                            }}>
                                                                <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full">{Lang("staff.codesettings.delete", this.props.lang)}</span>
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

                            <br/>

                            <div className="py-8">
                                <h2 className="text-sm font-semibold leading-tight text-gray-200">{Lang("staff.codesettings.addCategoryRole", this.props.lang)}</h2>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <select onChange={(e) => this.setState({ categoryRole: e.target.value })} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                            <option value={0} selected disabled>{Lang("staff.codesettings.selectRole", this.props.lang)}</option>
                                            {
                                                this.props.server.roles.sort((a, b) => b.position - a.position).map((role) => {
                                                    return (<option value={role.id} selected={this.state.categoryRole === role.id}>{role.name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="block relative ml-2">
                                        <select onChange={(e) => this.setState({ categoryName: e.target.value })} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                            {
                                                this.props.categories.map((el, i) => {
                                                    return (<option key={i} value={el}>{el}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="flex justify-center">
                                        <a className="flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async(e) => {

                                            if(this.state.categoryRole.length === 0 || this.state.categoryName.length === 0) {
                                                return toast.error(Lang("staff.codesettings.fillEverything", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            var d = await axios(cfg.siteURL+"/api/codesettings/categoryroles", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    data: {role: this.state.categoryRole, category: this.state.categoryName},
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);

                                            if(d.error === 2) {
                                                return toast.error(Lang("staff.codesettings.alreadyAddedRole", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            toast.success(Lang("staff.codesettings.addedCategoryRole", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });

                                            this.props.categoryRoles.push({id: this.state.categoryRole, category: this.state.categoryName})
                                            this.setState({ categoryRole: "" })
                                            this.setState({ categoryName: "" })
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
                                                        {Lang("staff.codesettings.role", this.props.lang)}
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.codesettings.category", this.props.lang)}
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.codesettings.acts", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.categoryRoles.map((object, i) => {
                                                    var nRole = this.props.server.roles.filter((r) => r.id === object.id)[0];
                                                    if(!nRole) {
                                                        nRole = {
                                                            name: Lang("staff.codesettings.deletedRole", this.props.lang),
                                                            number: object.id
                                                        }
                                                    }
                                                    return (<tr id={`categoryRole-${i}`}>
                                                            <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                                <p className="text-gray-200 whitespace-no-wrap">
                                                                    {nRole.name}
                                                                </p>
                                                            </td>
                                                            <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                                <p className="text-gray-200 whitespace-no-wrap">
                                                                    {object.category}
                                                                </p>
                                                            </td>
                                                            <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                                <div className="flex">
                                                                    <div className="badge cursor-pointer" onClick={async(e) => {
                                                                        var d = await axios(cfg.siteURL+"/api/codesettings/categoryroles", {
                                                        method: "POST",
                                                        headers: {
                                                            'Accept': 'application/json',
                                                            'Content-Type': 'application/json'
                                                        },
                                                        data: {
                                                            data: {role: (nRole.id ? nRole.id : nRole.number), category: object.category},
                                                            delete: true,
                                                            admin: "9wA7yggY0WI"
                                                        }
                                                    }).then((t) => t.data);
                                                        document.getElementById(`categoryRole-${i}`).remove();
                                                        return toast.success(Lang("staff.codesettings.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                                    }}>
                                                                        <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full">{Lang("staff.codesettings.delete", this.props.lang)}</span>
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

                            <br/>

                            <div className="py-8">
                                <h2 className="text-sm font-semibold leading-tight text-gray-200">{Lang("staff.codesettings.addCodeCategories", this.props.lang)}</h2>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="block relative">
                                        <input value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })} className="w-full py-2 px-2 bg-input rounded-md text-white border border-transparent focus:outline-none focus:border-transparent">
                                            {Lang("staff.codesettings.writeCategoryName", this.props.lang)}</input>
                                    </div>
                                    <div className="flex justify-center">
                                        <a className="flex-no-grow flex-no-shrink relative text-lg py-0.5 px-4 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 bg-green-500 hover:bg-green-600 cursor-pointer" onClick={async(e) => {

                                            if(this.state.category.length === 0) {
                                                return toast.error(Lang("staff.codesettings.fillEverything", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            var d = await axios(cfg.siteURL+"/api/codesettings/category", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    category: this.state.category,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);

                                            if(d.error === 2) {
                                                return toast.error(Lang("staff.codesettings.alreadyAddedCategory", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            }

                                            toast.success(Lang("staff.codesettings.addedCategory", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                            this.props.categories.push(this.state.category)
                                            this.setState({ category: "" })
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
                                                        {Lang("staff.codesettings.category", this.props.lang)}
                                                </th>
                                                    <th
                                                        className="px-5 py-3 bg-input text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                                        {Lang("staff.codesettings.acts", this.props.lang)}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.categories.map((c, i) => {
                                                    return (<tr id={`category-${i}`}>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <p className="text-gray-200 whitespace-no-wrap">
                                                            {c}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 bg-input text-gray-100 text-sm">
                                                        <div className="flex">
                                                            <div className="badge cursor-pointer" onClick={async(e) => {
                                                                var d = await axios(cfg.siteURL+"/api/codesettings/category", {
                                                method: "POST",
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                data: {
                                                    category: c,
                                                    delete: true,
                                                    admin: "9wA7yggY0WI"
                                                }
                                            }).then((t) => t.data);
                                                document.getElementById(`category-${i}`).remove();
                                                return toast.success(Lang("staff.codesettings.deleted", this.props.lang), { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, draggable: true, progress: undefined, });
                                                            }}>
                                                                <span className="px-2 ml-auto text-xs font-medium tracking-wide text-red-800 bg-blue-100 rounded-full">{Lang("staff.codesettings.delete", this.props.lang)}</span>
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
    var roles = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    var categories = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    var publisherRoles = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    var categoryRoles = await CategoryRoles.find({})
    roles = roles.staffRoles ? roles.staffRoles : []
    categories = categories.categories ? categories.categories : []
    publisherRoles = publisherRoles.publisherRoles ? publisherRoles.publisherRoles : []
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
            roles: JSON.stringify(roles),
            publisherRoles: JSON.stringify(publisherRoles),
            categories: JSON.stringify(categories),
            categoryRoles: JSON.stringify(categoryRoles),
            server,
            userIsStaff,
            userIsAdmin,
            lang: ctx.locale
        }
    }
}

export default App;
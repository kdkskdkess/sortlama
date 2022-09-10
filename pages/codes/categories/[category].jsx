import Head from 'next/head';

import Navbar from '../../../Components/Navbar';
import CodeCard from '../../../Components/CodeCard2';
import Codes from '../../../schemas/Codes';
import CodeSettings from '../../../schemas/CodeSettings';
import { useState, useEffect } from "react";
import Footer from "../../../Components/Footer";
import Advertisements from "../../../schemas/Advertisements";
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import Lang from "../../../language";

import cfg from '../../../config.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.codes = JSON.parse(this.props.codes)
        this.props.advertisements = JSON.parse(this.props.advertisements)
        this.props.categories = JSON.parse(this.props.categories)
        this.state = {
            codes: this.props.codes
        };
    }

    render() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{cfg.siteName} - {Lang("navbar.tags", this.props.lang)}</title>
            </Head>
            <Navbar userIsStaff={this.props.userIsStaff} lang={this.props.lang} userPunishments={this.props.userPunishments}/>
            <div className="p-8">
                <div className="px-4" align="center">
                    <div className="py-8"></div>
                    <a className="text-gray-100 no-underline text-4xl font-bold">Darkcode List</a>
                    <div className="py-0.5"></div>
                    <a className="text-gray-300 no-underline text-md">{Lang("categories.section", this.props.lang)}</a>
                    <div className="py-3"></div>
                    <div className="flex justify-center">
                        <input onChange={(e) => {
                                        this.setState({codes: this.props.codes.filter((bot) => bot.categories.includes(router.query.category)).filter((bot) => bot.name.toLowerCase().includes(e.target.value.toLowerCase()))})
                                    }} className="py-4 px-2 w-full md:w-1/3 bg-input rounded-l-md text-white border border-transparent focus:outline-none focus:border-transparent" placeholder={Lang("codePlaceholder", this.props.lang)}/>
                        <a className="py-4 px-2 rounded-r-md bg-input text-white border border-transparent focus:outline-none focus:border-transparent cursor-pointer">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </a>
                    </div>
                    <div className="md:flex flex-col md:flex-row md:flex-wrap items-center justify-center">
                    {this.props.categories.map((tag) => {
                        return (
                            <a href={`/${this.props.lang}/codes/categories/${tag}`}>
                                <div className="mt-2">
                                    <a className="relative text-lg py-1 px-3 ml-2 leading-normal text-white no-underline flex items-center transition duration-200 hover:bg-discord-black border-2 border-discord-black cursor-pointer">{tag}</a>
                                </div>
                            </a>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="py-2"></div>
            <div align="center">
                {this.props.advertisements.map((ad) => {
                    return (<div className="mt-2 group md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                        <img src={ad.image} className="object-cover object-center w-full h-full visible group-hover:hidden" />
                    </div>)
                })}
            </div>
            <div className="py-2"></div>
            <div className="bg-discord-black-darker w-full h-full">
                <div className="p-4"></div>
                <div className="p-4 md:px-6">
                    <div className="flex flex-grow flex-wrap items-center justify-center">
                        {this.state.codes.filter((code) => code.categories.includes(router.query.category)).map((code, i) => {
                            return (<CodeCard lang={this.props.lang} code={code.code} name={code.name} description={code.desc}/>);
                        })}
                    </div>
                </div>
                <div className="py-5"></div>
            </div>
            <Footer lang={this.props.lang}/>
        </>
      );
    }
}

export async function getServerSideProps(ctx) {
    var codes = await Codes.find({});
    codes.forEach((el) => {
        el["key"] = null;
    });
    var ads = await Advertisements.find({position_id: 11});
    const getCookie = (key) => {
        if (ctx.req.headers.cookie) {
            return ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0] ? ctx.req.headers.cookie.split("; ").filter((x) => x.startsWith(key))[0].split("=")[1] : null;
        } else {
            return null
        }
    }
    const Staffs = require("../../../schemas/Staffs.js")
    var userIsStaff = (await Staffs.findOne({id: (getCookie("user") ? JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")) : {}).id})) ? true : false;
    var Punishments = require("../../../schemas/Punishments")
    var userPunishments = [];
    if(getCookie("user")) {
        userPunishments = ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).length >= 1) ? ((await Punishments.find({id: JSON.parse(getCookie("user").replace(/\%22/g, "\"").replace(/\%2C/g, ",")).id})).map(p => p.punishID)) : []
    }
    var categories = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    categories = categories.categories ? categories.categories : [];
    return {
        props: {
            userPunishments,
            codes: JSON.stringify(codes.filter(bot => bot.waiting === false)),
            categories: JSON.stringify(categories),
            advertisements: JSON.stringify(ads),
            userIsStaff,
            lang: ctx.locale
        }
    }
}

export default App;
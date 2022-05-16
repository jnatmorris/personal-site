import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import MyMentality from "../Components/Index/MyMentality";
import MyStack from "../Components/Index/MyStack";

import AboutMe from "../Components/Index/AboutMe";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
            </Head>

            <div className="h-screen ">
                <div className="pt-[15vh] lg:pt-[25vh]">
                    <AboutMe />
                </div>
            </div>

            <div className="mb-[4vh] h-0.5 rounded-lg bg-slate-300" />
            <div className="space-y-[15vh] lg:grid lg:grid-cols-2 lg:gap-[1vw] lg:space-y-[0vh] ">
                <MyMentality />

                <MyStack />
            </div>
        </>
    );
};

export default Home;

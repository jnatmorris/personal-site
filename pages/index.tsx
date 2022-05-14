import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import MyMentality from "../Components/Index/MyMentality";
import MyStack from "../Components/Index/MyStack";
import OnMyRadar from "../Components/Index/OnMyRadar";
import AboutMe from "../Components/Index/AboutMe";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="overflow-hidden">
                <div className="h-screen">
                    <AboutMe />
                </div>

                <div className="space-y-[15vh]  lg:space-y-[1vh]">
                    <div className="space-y-[15vh] lg:grid lg:grid-cols-2 lg:gap-y-[4vh] lg:space-y-[0vh]">
                        <div className="place-self-center lg:opacity-50 lg:hover:opacity-100">
                            <MyStack />
                        </div>
                        <div className="place-self-center lg:opacity-50 lg:hover:opacity-100">
                            <OnMyRadar />
                        </div>
                        <div className="w-full lg:col-span-2 lg:h-0.5 lg:bg-gray-200" />
                        <div className="lg:col-span-2 lg:opacity-50 lg:hover:opacity-100">
                            <MyMentality />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;

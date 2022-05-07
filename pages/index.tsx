import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../Components/Index/Welcome";
import About from "../Components/Index/About";
import MyMentality from "../Components/Index/MyMentality";
import MyTech from "../Components/Index/MyTech";

const Home: NextPage = () => (
    <>
        <Head>
            <title>Justin Morris</title>
            <meta name="description" content="Justin's Personal Site" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div className="h-screen">
                <Welcome />
            </div>

            <div className="space-y-[10vh]">
                <div className="p-3">
                    <About />
                </div>

                <div className="p-3">
                    <MyTech />
                </div>

                <div className="p-3">
                    <MyMentality />
                </div>
            </div>
        </main>
    </>
);

export default Home;

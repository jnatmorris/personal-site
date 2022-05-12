import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../Components/Index/Welcome";
import Bio from "../Components/About/AboutHeader";
import MyMentality from "../Components/Index/MyMentality";
import MyStack from "../Components/Index/MyStack";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
                <link rel="icon" href="/favicon.ico" />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <main className="overflow-hidden">
                <div className="h-screen">
                    <Welcome />
                </div>

                <div className="space-y-[15vh] lg:gap-y-[1vh] lg:space-y-0">
                    <div className="space-y-[15vh] lg:grid lg:grid-cols-2 lg:space-y-[0vh]">
                        <div className="lg:pl-[1.5vw] lg:opacity-50 lg:hover:opacity-100">
                            <MyStack />
                        </div>
                    </div>

                    <div className="lg:opacity-50 lg:hover:opacity-100">
                        <MyMentality />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;

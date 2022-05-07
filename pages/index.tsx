import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../Components/Index/Welcome";
import About from "../Components/Index/About";
import MyMentality from "../Components/Index/MyMentality";
import MyTech from "../Components/Index/MyTech";
import { m } from "framer-motion";
import { opacityVariants } from "./_app";

const Home: NextPage = () => {
    return (
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

                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={opacityVariants}
                    className="h-screen p-3"
                >
                    <About />
                </m.div>

                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={opacityVariants}
                    className="h-screen p-3"
                >
                    <MyTech />
                </m.div>

                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={opacityVariants}
                    className="p-3 "
                >
                    <MyMentality />
                </m.div>
            </main>
        </>
    );
};

export default Home;

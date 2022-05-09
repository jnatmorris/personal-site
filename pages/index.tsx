import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../Components/Index/Welcome";
import About from "../Components/Index/About";
import MyMentality from "../Components/Index/MyMentality";
import MyTech from "../Components/Index/MyTech";
import { m } from "framer-motion";
import { opacityVariants } from "../Components/Layout";

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
                    <div className="space-y-[15vh] lg:grid lg:grid-cols-2   lg:space-y-[0vh] ">
                        <m.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={opacityVariants}
                            className="lg:border-r-[1.5px] lg:border-gray-200 lg:pr-[1vw] dark:lg:border-slate-800"
                        >
                            <About />
                        </m.div>

                        <m.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={opacityVariants}
                            className="lg:border-l-[1.5px] lg:border-gray-200 lg:pl-[1.5vw] dark:lg:border-slate-800"
                        >
                            <MyTech />
                        </m.div>
                    </div>

                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={opacityVariants}
                        className="lg:col-span-2"
                    >
                        <MyMentality />
                    </m.div>
                </div>
            </main>
        </>
    );
};

export default Home;

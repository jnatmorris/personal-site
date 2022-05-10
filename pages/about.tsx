import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { m, Variants } from "framer-motion";
import Doodler from "../Components/About/Doodles";
import Pilot from "../Components/About/Pilot";
import { opacityVariants } from "../Components/Layout";

const AboutPage: NextPage = () => {
    const Variants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="About" />
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
            <main>
                <div className="h-screen">
                    <m.div
                        className="ml-[5vw] px-2 prose-h2:m-0 prose-h3:m-0"
                        variants={Variants}
                        animate={"show"}
                        initial={"hidden"}
                    >
                        <m.h1
                            variants={item}
                            className="underline decoration-blue-400 underline-offset-2 lg:text-5xl"
                        >
                            Uni student
                        </m.h1>
                        <m.h2
                            className="py-[2vh] font-normal lg:text-3xl"
                            variants={item}
                        >
                            and
                        </m.h2>
                        <m.h1
                            variants={item}
                            className="underline decoration-blue-400 underline-offset-2 lg:text-5xl"
                        >
                            Web developer
                        </m.h1>
                    </m.div>
                </div>

                <div className="space-y-[15vh] lg:gap-y-[1vh] lg:space-y-0">
                    <div className="space-y-[15vh] lg:grid lg:grid-cols-2 lg:space-y-[0vh] ">
                        <div className="lg:border-r-[1.5px] lg:border-gray-200 lg:pr-[1vw] lg:opacity-50 lg:hover:opacity-100 dark:lg:border-slate-800">
                            <Doodler />
                        </div>

                        <div className="lg:border-l-[1.5px] lg:border-gray-200 lg:pl-[1.5vw] lg:opacity-50 lg:hover:opacity-100 dark:lg:border-slate-800">
                            <Pilot />
                        </div>
                    </div>

                    <div className="lg:opacity-50 lg:hover:opacity-100">
                        {/* <MyMentality /> */}
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutPage;

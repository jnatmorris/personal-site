import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { m, Variants } from "framer-motion";
import Doodler from "../Components/About/Doodles";
import Pilot from "../Components/About/Pilot";
import Header from "../Components/header";

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
                <title>Justin Morris | About</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="h-screen">
                    <m.div
                        className="ml-[5vw] px-2 prose-h2:m-0 prose-h3:m-0"
                        variants={Variants}
                        animate={"show"}
                        initial={"hidden"}
                    >
                        <m.h2
                            variants={item}
                            className="underline decoration-blue-400 underline-offset-2"
                        >
                            Uni student
                        </m.h2>
                        <m.h3 variants={item}>and</m.h3>
                        <m.h2
                            variants={item}
                            className="underline decoration-blue-400 underline-offset-2"
                        >
                            Self taught web developer
                        </m.h2>
                    </m.div>
                </div>
                <div className="space-y-[10vh]">
                    <Doodler />

                    <Pilot />
                </div>
            </main>
        </>
    );
};

export default AboutPage;

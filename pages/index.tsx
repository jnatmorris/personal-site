import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Connect from "../Components/Index/Connect";
import Header from "../Components/header";
import { m, Variants } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
    const Variants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.85,
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
                <meta name="description" content="Justin's Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={1.4}>
                    <Header />
                </ParallaxLayer>
                <ParallaxLayer offset={0.2} speed={1.2}>
                    <m.div
                        variants={Variants}
                        animate={"show"}
                        initial={"hidden"}
                        className="ml-[5vw] prose-h1:m-0 prose-h2:m-0 prose-h3:m-0"
                    >
                        <m.div variants={item} className="flex pb-3 space-x-2">
                            <h1 className="underline decoration-blue-400 underline-offset-2">
                                Howdy,
                            </h1>
                            <h1>&#x1F44B;</h1>
                        </m.div>

                        <m.h2 variants={item}>
                            I&apos;m Justin Morris. A...
                        </m.h2>
                        <m.h3 variants={item}>- Computer science student</m.h3>

                        <m.h3 variants={item}>- Web developer</m.h3>

                        <m.h3 variants={item}>- Curiosity driven</m.h3>
                    </m.div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                    <div className="relative h-screen">
                        <div className="absolute inset-x-0 bottom-2">
                            <Connect />
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default Home;

import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../Components/header";
import Connect from "../Components/Index/Connect";
import Howdy from "../Components/Index/Howdy";
import {
    m,
    Variants,
    useViewportScroll,
    useTransform,
    MotionValue,
} from "framer-motion";

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

    const { scrollY } = useViewportScroll();
    const y1 = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 300],
        [0, 200]
    );

    const y2 = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 500],
        [0, 200]
    );

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.div className="relative" style={{ y: y1 }}>
                <Header />
                <m.div className="mt-[20vh]">
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
                </m.div>
            </m.div>

            <m.div className="relative h-screen" style={{ y: y2 }}>
                <div className="absolute inset-x-0 bottom-2">
                    <Connect />
                </div>
            </m.div>
        </>
    );
};

export default Home;

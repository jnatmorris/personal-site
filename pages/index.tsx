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
    const { scrollY } = useViewportScroll();

    const yHeader = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 300],
        [0, 200]
    );

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative h-screen">
                <m.div className="mt-[20vh]" style={{ y: yHeader }}>
                    <Howdy />
                </m.div>
            </div>

            <div className="relative h-screen bg-red-300">
                <div className="absolute inset-x-0 bottom-2">
                    <Connect />
                </div>
            </div>
        </>
    );
};

export default Home;

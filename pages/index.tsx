import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../Components/header";
import {
    m,
    Variants,
    useViewportScroll,
    useTransform,
    MotionValue,
} from "framer-motion";
import MyApproach from "../Components/Index/MyApproach";

const Home: NextPage = () => {
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

    const { scrollY } = useViewportScroll();

    const yMainText = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 300],
        [0, 200]
    );
    const yApproach = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 300],
        [800, 1200]
    );

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="h-[300vh]">
                <Header location="index" scrollY={scrollY} />

                <m.div style={{ y: yMainText }} className="mt-[15vh]">
                    <m.div
                        variants={Variants}
                        animate={"show"}
                        initial={"hidden"}
                        className="ml-[5vw] mt-[0vh] prose-h1:m-0 prose-h2:m-0 prose-h3:m-0"
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

                        <m.h3 variants={item}>- And pet person</m.h3>
                    </m.div>
                </m.div>

                <m.div style={{ y: yApproach }}>
                    <MyApproach />
                </m.div>
            </div>
            <div>
                <div className="mx-[4vw]">
                    <h2 className="m-0">Want to Connect?</h2>
                    <div className="mx-0.5 mt-2 flex justify-between prose-h3:m-0">
                        <m.h3>
                            <a
                                className="no-underline"
                                href="https://github.com/JNat07"
                            >
                                GitHub
                            </a>
                        </m.h3>
                        <m.h3>
                            <a
                                className="no-underline"
                                href="https://www.linkedin.com/in/justinnmorris/"
                            >
                                LinkedIn
                            </a>
                        </m.h3>
                        <m.h3 whileTap={{ scale: 0.9 }}>
                            <a
                                className="no-underline"
                                href="mailto: evanston07@gmail.com"
                            >
                                Email
                            </a>
                        </m.h3>
                        <m.h3 whileTap={{ scale: 0.9 }} className="relative">
                            <a
                                className="no-underline"
                                href="CV.pdf"
                                download={"JustinMorrisResume"}
                            >
                                Resume
                            </a>
                        </m.h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
    m,
    Variants,
    useViewportScroll,
    useTransform,
    MotionValue,
} from "framer-motion";
import Doodler from "../Components/About/Doodles";
import Story from "../Components/About/Story";
import Pilot from "../Components/About/Pilot";

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

    const { scrollY } = useViewportScroll();

    const headerText = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 300],
        [0, 200]
    );
    const yAboutMe = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 300],
        [800, 1200]
    );

    const yDoodles = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 300],
        [1200, 1500]
    );

    const yPilot = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 300],
        [1600, 1800]
    );
    const yHeader = useTransform<MotionValue<number>, unknown>(
        scrollY,
        [0, 400],
        [0, 350]
    );

    return (
        <>
            <Head>
                <title>Justin Morris | About</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.div className="h-[300vh] bg-white dark:bg-black">
                <m.div style={{ y: headerText }} className="mt-[15vh]">
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
                </m.div>

                <m.div style={{ y: yAboutMe }}>
                    <Story />
                </m.div>

                <m.div style={{ y: yDoodles }}>
                    <Doodler />
                </m.div>

                <m.div style={{ y: yPilot }}>
                    <Pilot />
                </m.div>
            </m.div>
        </>
    );
};

export default AboutPage;

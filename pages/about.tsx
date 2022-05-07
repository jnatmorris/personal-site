import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { m, Variants } from "framer-motion";
import Doodler from "../Components/About/Doodles";
import Story from "../Components/About/Story";
import Pilot from "../Components/About/Pilot";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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
            <Parallax pages={3} className="prose dark:prose-invert">
                <ParallaxLayer offset={0} speed={1.4}>
                    <Header />
                </ParallaxLayer>
                <ParallaxLayer offset={0.2}>
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
                </ParallaxLayer>

                <ParallaxLayer offset={1}>
                    <Story />
                </ParallaxLayer>

                <ParallaxLayer offset={2}>
                    <Doodler />
                </ParallaxLayer>

                <ParallaxLayer offset={3}>
                    <Pilot />
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default AboutPage;

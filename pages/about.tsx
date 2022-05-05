import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Header from "../Components/header";
import Doodler from "../Components/About/Doodles";
import Story from "../Components/About/Story";
import { motion, Variants } from "framer-motion";
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

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    const ref = React.useRef<IParallax>(null!);

    return (
        <>
            <Head>
                <title>Justin Morris | About</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Parallax pages={4} ref={ref} className="bg-white dark:bg-black">
                <ParallaxLayer offset={0}>
                    <Header location="about" />
                </ParallaxLayer>
                <ParallaxLayer offset={0.2} speed={0.2}>
                    <motion.div
                        className="ml-[5vw] px-2 prose-h2:m-0 prose-h3:m-0"
                        variants={Variants}
                        animate={"show"}
                        initial={"hidden"}
                    >
                        <motion.h2
                            variants={item}
                            className="underline decoration-blue-400 underline-offset-2"
                        >
                            Uni student
                        </motion.h2>
                        <motion.h3 variants={item}>and</motion.h3>
                        <motion.h2
                            variants={item}
                            onAnimationComplete={() =>
                                setTimeout(function () {
                                    ref.current.scrollTo(0.98);
                                }, 1000)
                            }
                            className="underline decoration-blue-400 underline-offset-2"
                        >
                            Self taught web developer
                        </motion.h2>
                    </motion.div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1.2}>
                    <Story />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1}>
                    <Doodler />
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.5}>
                    <Pilot />
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default AboutPage;

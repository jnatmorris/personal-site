import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../Components/header";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { m, Variant, Variants } from "framer-motion";
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

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    const Variant: Variant = {
        scale: 0.97,
    };

    const ref = React.useRef<IParallax>(null!);

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Parallax pages={2} ref={ref} className="bg-white dark:bg-black">
                {/* header to navigate to other page */}
                <ParallaxLayer offset={0}>
                    <Header location={"index"} />
                </ParallaxLayer>

                <ParallaxLayer offset={0.2} speed={1.3} className="h-auto">
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
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.7}>
                    <MyApproach />
                </ParallaxLayer>

                <ParallaxLayer offset={1.88}>
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
                            <m.h3
                                whileTap={{ scale: 0.9 }}
                                className="relative"
                            >
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
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default Home;

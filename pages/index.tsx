import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Navigation from "../Components/Navigation";
import AboutMe from "../Components/Index/AboutMe";

// Chatapp
import ChatApp from "../Components/Index/myWork/ChatApp/ChatApp";
import {
    ChatAppImgDark,
    ChatAppImgLight,
} from "../Components/Index/myWork/ChatApp/ChaAppImgs";
// Flag game
import FlagGame from "../Components/Index/myWork/FlagGame/FlagGame";
import {
    FlagGameGame,
    FlagGameLobby,
} from "../Components/Index/myWork/FlagGame/FlagGameImg";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
            </Head>

            <Parallax pages={5} className="bg-white dark:bg-black">
                <ParallaxLayer offset={0.2} sticky={{ start: 0, end: 0.3 }}>
                    <Navigation />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.2}
                    speed={0}
                    className="bg-white dark:bg-black"
                >
                    <div className="mx-[10vw] lg:mx-[5vw]">
                        <AboutMe />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={2}
                    sticky={{ start: 1, end: 1.7 }}
                    className="grid grid-cols-2"
                >
                    <div className="col-span-1 ml-[5vw] place-items-center lg:pt-[30vh] ">
                        <ChatApp />
                    </div>
                </ParallaxLayer>
                {/* ChatApp Login Images */}
                <ParallaxLayer offset={1.5} speed={1}>
                    <div className="mx-[10vw] grid grid-cols-2">
                        <div className="col-span-1" />
                        <ChatAppImgDark />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={1.5}>
                    <div className="mx-[10vw] grid grid-cols-2">
                        <div className="col-span-1" />
                        <ChatAppImgLight />
                    </div>
                </ParallaxLayer>

                {/* ChatApp Chat Images */}
                <ParallaxLayer
                    offset={4}
                    speed={1.5}
                    sticky={{ start: 3, end: 6 }}
                    className="z-50 grid grid-cols-2"
                >
                    <div className="col-span-1 ml-[5vw] place-items-center lg:pt-[30vh] ">
                        <FlagGame />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3.9} speed={1}>
                    <div className="mx-[10vw] grid grid-cols-2">
                        <div className="col-span-1" />
                        <FlagGameLobby />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3.5} speed={2}>
                    <div className="mx-[10vw] grid grid-cols-2">
                        <div className="col-span-1" />
                        <FlagGameGame />
                    </div>
                </ParallaxLayer>

                {/* <ParallaxLayer
                    offset={4}
                    speed={1}
                    sticky={{ start: 4, end: 5 }}
                    className="bg-white dark:bg-black"
                >
                    <div className="lg:w-1/2">
                        <UniSystem />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={1.5}
                    className="bg-white dark:bg-black"
                >
                    <div className="absolute right-0 w-1/2">
                        <div className="flex justify-center">
                            <div className="relative w-[45%]">
                                <Image
                                    layout="responsive"
                                    src={UniSystemImage}
                                    width={696}
                                    height={1510}
                                    quality={100}
                                    className="rounded-md"
                                    placeholder="blur"
                                    alt="UniSystem"
                                />
                            </div>
                        </div>
                    </div>
                </ParallaxLayer> */}
                {/* <ParallaxLayer offset={2} speed={0.5}>
                    <div className="bg-blue-300 lg:w-1/2">
                        <MyStack />
                    </div>
                </ParallaxLayer> */}
                {/* <ParallaxLayer offset={1} speed={2}>
                    <div className="absolute right-0 w-1/2 bg-red-300">d</div>
                </ParallaxLayer> */}
            </Parallax>
        </>
    );
};

export default Home;

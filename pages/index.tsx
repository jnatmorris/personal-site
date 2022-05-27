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

import { DeviceWidth } from "../Components/Layout";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
            </Head>

            <DeviceWidth.Consumer>
                {(width) => (
                    <Parallax
                        pages={width > 640 ? 5 : 6}
                        className="bg-white dark:bg-black lg:block"
                    >
                        <ParallaxLayer
                            offset={0}
                            sticky={{
                                start: 0,
                                end: width > 640 ? 0.3 : 0.15,
                            }}
                        >
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
                            offset={width > 640 ? 1 : 1.2}
                            speed={width > 640 ? 2 : 1}
                            sticky={
                                width > 640 ? { start: 1, end: 1.7 } : undefined
                            }
                            className="lg:grid lg:grid-cols-2"
                        >
                            <div className="ml-[5vw] lg:col-span-1  lg:place-items-center lg:pt-[30vh]">
                                <ChatApp />
                            </div>
                        </ParallaxLayer>

                        {/* ChatApp Login Images */}
                        <ParallaxLayer
                            offset={width > 640 ? 1.5 : 2.1}
                            speed={width > 640 ? 1 : 0}
                        >
                            <div className="mx-[10vw] lg:grid lg:grid-cols-2">
                                <div className="lg:col-span-1" />
                                <ChatAppImgDark />
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={width > 640 ? 1.8 : 2.2}
                            speed={width > 640 ? 1.5 : 0}
                        >
                            <div className="mx-[10vw] lg:grid lg:grid-cols-2">
                                <div className="lg:col-span-1" />
                                <ChatAppImgLight />
                            </div>
                        </ParallaxLayer>

                        {/* ChatApp Chat Images */}
                        <ParallaxLayer
                            offset={width > 640 ? 4 : 3.4}
                            speed={1}
                            sticky={
                                width > 640 ? { start: 3, end: 6 } : undefined
                            }
                            className="lg:grid lg:grid-cols-2"
                        >
                            <div className="mx-[10vw] ml-[5vw] lg:col-span-1 lg:place-items-center lg:pt-[30vh] ">
                                <FlagGame />
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={width > 640 ? 3.9 : 4.2}
                            speed={width > 640 ? 1 : 0}
                        >
                            <div className="mx-[10vw] lg:grid lg:grid-cols-2">
                                <div className="lg:col-span-1" />
                                <FlagGameLobby />
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={width > 640 ? 3.5 : 4.4}
                            speed={width > 640 ? 2 : 0}
                        >
                            <div className="mx-[10vw] lg:grid lg:grid-cols-2">
                                <div className="lg:col-span-1" />
                                <FlagGameGame />
                            </div>
                        </ParallaxLayer>
                    </Parallax>
                )}
            </DeviceWidth.Consumer>
        </>
    );
};

export default Home;

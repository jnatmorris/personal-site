import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Navigation from "../Components/Navigation";
import AboutMeShort from "../Components/Index/AboutMeShort";

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
    // set width for media queries
    const [width, setWidth] = React.useState<number>(0);
    React.useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        setWidth(window.innerWidth);
    }, []);

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
            </Head>

            <Parallax
                pages={width > 640 ? 5 : 6}
                className="bg-white dark:bg-black lg:block"
            >
                <ParallaxLayer offset={0} speed={2}>
                    <Navigation />
                </ParallaxLayer>
                <ParallaxLayer
                    factor={1.5}
                    offset={0.2}
                    speed={1}
                    className="bg-white dark:bg-black"
                >
                    <div className="mx-[10vw] lg:mx-[5vw]">
                        <AboutMeShort />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={width > 640 ? 1 : 1.2}
                    speed={width > 640 ? 2 : 1}
                    sticky={width > 640 ? { start: 1, end: 1.7 } : undefined}
                    className="lg:grid lg:grid-cols-2"
                >
                    <div className="ml-[5vw] lg:col-span-1  lg:place-items-center lg:self-center">
                        <ChatApp />
                    </div>
                </ParallaxLayer>

                {/* ChatApp Login Images */}
                <ParallaxLayer
                    offset={width > 640 ? 1.5 : 2.1}
                    speed={width > 640 ? 1 : 0}
                    className="bg-white dark:bg-black"
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
                    sticky={width > 640 ? { start: 3, end: 6 } : undefined}
                    className="lg:grid lg:grid-cols-2"
                >
                    <div className="ml-[5vw] lg:col-span-1  lg:place-items-center lg:self-center">
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
        </>
    );
};

export default Home;

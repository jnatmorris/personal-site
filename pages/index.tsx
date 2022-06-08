import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

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
import Connect from "../Components/Connect";

const Home: NextPage = () => {
    const [scrollHeight, setScrollHeight] = React.useState<number>(0);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrolledVal =
                window.pageYOffset ||
                (
                    document.documentElement ||
                    document.body.parentNode ||
                    document.body
                ).scrollTop;
            setScrollHeight(scrolledVal);
        });
    }, []);

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
            </Head>

            <div className="w-screen space-y-[20vh]">
                <div className="h-screen">
                    <div
                        className={
                            scrollHeight < 200 ? "sticky top-0" : "relative"
                        }
                    >
                        <Navigation />
                    </div>

                    <div
                        className={
                            (scrollHeight < 800 ? "sticky" : "relative") +
                            " top-[30vh] mx-[10vw]  lg:mx-[5vw]"
                        }
                    >
                        <AboutMeShort />
                    </div>
                </div>

                <div className="">
                    <div className="lg:mx-[5vw]">
                        <div
                            className={
                                (scrollHeight < 2000 ? "sticky" : "relative") +
                                " top-[10vh] lg:grid lg:grid-cols-2"
                            }
                        >
                            <ChatApp />
                        </div>
                        {/* ChatApp Login Images */}

                        <div className="mx-[10vw] lg:grid lg:grid-cols-2">
                            <div className="lg:col-span-1" />
                            <ChatAppImgDark />
                        </div>
                        <div className="mx-[10vw] -mt-[40vh] lg:grid lg:grid-cols-2">
                            <div className="lg:col-span-1" />
                            <ChatAppImgLight />
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="lg:mx-[5vw]">
                        <div
                            className={
                                (scrollHeight < 3000 ? "sticky" : "relative") +
                                " top-[10vh] lg:grid lg:grid-cols-2"
                            }
                        >
                            <FlagGame />
                        </div>
                        {/* ChatApp Login Images */}

                        <div className="mx-[10vw] lg:grid lg:grid-cols-2">
                            <div className="lg:col-span-1" />
                            <FlagGameLobby />
                        </div>
                        <div className="mx-[10vw] -mt-[40vh] lg:grid lg:grid-cols-2">
                            <div className="lg:col-span-1" />
                            <FlagGameGame />
                        </div>
                    </div>
                </div>

                <Connect />
            </div>
        </>
    );
};

export default Home;

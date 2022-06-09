import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

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
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
            </Head>

            <div className="w-screen space-y-[20vh]">
                <div className="mx-[10vw] h-screen lg:mx-[5vw]">
                    <div className="sticky top-[25vh]">
                        <AboutMeShort />
                    </div>
                </div>

                <div className="lg:mx-[5vw]">
                    <div className={"sticky top-[25vh] lg:grid lg:grid-cols-2"}>
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

                <div className="lg:mx-[5vw]">
                    <div className={"sticky top-[25vh] lg:grid lg:grid-cols-2"}>
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
        </>
    );
};

export default Home;

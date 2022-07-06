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
            <div className="mx-[5vw] space-y-[20vh]">
                <div className="h-screen">
                    <div className="sticky top-[20vh]">
                        <AboutMeShort />
                    </div>
                </div>

                <div>
                    <div className="space-y-10 lg:space-y-0">
                        <div className="relative lg:sticky lg:top-[10vh] lg:grid lg:grid-cols-2">
                            <ChatApp />
                        </div>

                        <div>
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

                    <hr className="my-[10vh] lg:hidden" />

                    <div className="space-y-10 lg:space-y-0">
                        <div className="relative lg:sticky lg:top-[15vh] lg:grid lg:grid-cols-2">
                            <FlagGame />
                        </div>

                        <div>
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
                </div>
            </div>
        </>
    );
};

export default Home;

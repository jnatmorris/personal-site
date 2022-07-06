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
            <p className="bg-white dark:bg-black">test</p>
        </>
    );
};

export default Home;

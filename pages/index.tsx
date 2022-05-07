import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Connect from "../Components/Index/Connect";
import Header from "../Components/header";
import Welcome from "../Components/Index/Welcome";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "../Components/Index/About";
import MyMentality from "../Components/Index/MyMentality";
import MyTech from "../Components/Index/MyTech";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="Justin's Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Parallax pages={2.7}>
                <ParallaxLayer offset={0} speed={1.4}>
                    <Header />
                </ParallaxLayer>

                <ParallaxLayer offset={0.2} speed={4}>
                    <Welcome />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1}>
                    <div className="p-3">
                        <About />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={0.5}>
                    <div className="p-3">
                        <MyTech />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.1} speed={0}>
                    <div className="p-3">
                        <MyMentality />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.6}>
                    <div className="p-3">
                        <Connect />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default Home;

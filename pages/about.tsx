import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Doodler from "../Components/About/Doodles";
import Pilot from "../Components/About/Pilot";
import Navigation from "../Components/Navigation";
import MyStack from "../Components/About/MyStack";
import MyMentality from "../Components/About/MyMentality";
import TypeWriter from "../Components/Typewriter";
import { DeviceWidth } from "../Components/Layout";

const AboutPage: NextPage = () => {
    const ref = React.useRef<IParallax>(null!);

    const [endTypingHeader, setEndTypingHeader] =
        React.useState<boolean>(false);
    const [endTypingCoding, setEndTypingCoding] =
        React.useState<boolean>(false);

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="About" />
            </Head>

            <DeviceWidth.Consumer>
                {(width) => (
                    <Parallax pages={width > 640 ? 2 : 3} ref={ref}>
                        <ParallaxLayer offset={0}>
                            <Navigation />
                        </ParallaxLayer>

                        <ParallaxLayer offset={0.3} speed={4}>
                            <div className="1 mx-[10vw] ">
                                <TypeWriter
                                    string="About&nbsp;me&nbsp;"
                                    options={{
                                        stringClass:
                                            "text-slate-600 text-5xl lg:text-8xl ",
                                        outerDivClass: "",
                                        font: "Courgette, cursive",
                                        timeBetweenLetters: 0.2,
                                        showCursor: true,
                                        cursorColor: "bg-gray-400 ",
                                        removeCursorOnComplete: true,
                                        onComplete: () => {
                                            try {
                                                setEndTypingHeader(true);
                                            } catch {}
                                        },
                                    }}
                                />
                                {endTypingHeader && (
                                    <TypeWriter
                                        string="My&nbsp;coding"
                                        options={{
                                            stringClass:
                                                "text-slate-600 text-2xl lg:text-4xl hover:underline hover:decoration-sky-200 hover:underline-offset-1",
                                            outerDivClass: "ml-5 mt-5",
                                            font: "Courgette, cursive",
                                            timeBetweenLetters: 0.1,
                                            cursorColor: "bg-gray-400 ",
                                            removeCursorOnComplete: true,
                                            showCursor: true,

                                            onClick: () => {
                                                try {
                                                    ref.current.scrollTo(1);
                                                } catch {}
                                            },
                                            onComplete: () => {
                                                try {
                                                    setEndTypingCoding(true);
                                                } catch {}
                                            },
                                        }}
                                    />
                                )}

                                {endTypingCoding && (
                                    <TypeWriter
                                        string="Personal"
                                        options={{
                                            stringClass:
                                                "text-slate-600 text-2xl lg:text-4xl hover:underline hover:decoration-sky-200 hover:underline-offset-1",
                                            outerDivClass: "ml-5 mt-5",
                                            font: "Courgette, cursive",
                                            showCursor: true,
                                            removeCursorOnComplete: true,
                                            cursorColor: "bg-gray-400 ",

                                            timeBetweenLetters: 0.1,

                                            onClick: () =>
                                                ref.current.scrollTo(2),
                                        }}
                                    />
                                )}
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1} speed={1.5}>
                            <div className="mx-[5vw] space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:space-y-0">
                                <MyMentality />
                                <MyStack />
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={2} speed={1}>
                            <div className="w-screen">
                                <div className=" space-y-[15vh] lg:gap-y-[1vh] lg:space-y-0">
                                    <div className="space-y-[15vh] lg:grid lg:grid-cols-2 lg:space-y-[0vh] ">
                                        <div className="lg:border-r-[1.5px] lg:border-gray-200 lg:pr-[1vw] lg:opacity-50 lg:hover:opacity-100 dark:lg:border-slate-800">
                                            <Doodler />
                                        </div>

                                        <div className="lg:border-l-[1.5px] lg:border-gray-200 lg:pl-[1.5vw] lg:opacity-50 lg:hover:opacity-100 dark:lg:border-slate-800">
                                            <Pilot />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ParallaxLayer>
                    </Parallax>
                )}
            </DeviceWidth.Consumer>
        </>
    );
};

export default AboutPage;

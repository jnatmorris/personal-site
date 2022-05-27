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

    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="About" />
            </Head>

            <DeviceWidth.Consumer>
                {(width) => (
                    <Parallax pages={width > 640 ? 2 : 3} ref={ref}>
                        <ParallaxLayer
                            offset={0}
                            sticky={{ start: 0, end: 3 > 640 ? 0.3 : 0.15 }}
                        >
                            <Navigation />
                        </ParallaxLayer>

                        <ParallaxLayer offset={0.3} speed={2}>
                            <div className="mx-[10vw]">
                                <TypeWriter
                                    string="About&nbsp;me&nbsp;"
                                    options={{
                                        stringClass:
                                            "text-slate-600 text-5xl lg:text-8xl",
                                        outerDivClass: "",
                                        font: "Courgette, cursive",
                                        delayWrite: 2,
                                        showCursor: true,
                                        cursorColor: "bg-gray-400 ",
                                        infiniteCCursor: true,
                                        onComplete: () =>
                                            setTimeout(function () {
                                                // fails if user clicks to main page while waiting a second
                                                try {
                                                    ref.current.scrollTo(0.5);
                                                } catch {}
                                            }, 1000),
                                    }}
                                />
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={width > 640 ? 1.25 : 1}
                            speed={1}
                        >
                            <div className="mx-[10vw] lg:grid lg:grid-cols-2 lg:gap-x-6">
                                <MyMentality />
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer
                            speed={1.25}
                            offset={width > 640 ? 1.25 : 2}
                        >
                            <div className="mx-[10vw] lg:grid lg:grid-cols-2 lg:gap-x-6">
                                <div />
                                <MyStack />
                            </div>
                        </ParallaxLayer>
                    </Parallax>
                )}
            </DeviceWidth.Consumer>
        </>
    );
};

export default AboutPage;

{
    /*             
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
            </div> */
}

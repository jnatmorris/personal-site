import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import Doodler from "../Components/About/Doodles";
import Pilot from "../Components/About/Pilot";
import Navigation from "../Components/Navigation";
import MyStack from "../Components/About/MyStack";
import MyMentality from "../Components/About/MyMentality";
import { Typewriter } from "react-simple-typewriter";
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

                        <ParallaxLayer offset={0.4} speed={0}>
                            <div className="mx-[5vw] space-y-5">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-x-10 lg:space-y-0">
                                    <MyMentality />
                                    <MyStack />
                                </div>
                            </div>
                        </ParallaxLayer>

                        {/* <ParallaxLayer offset={1.5} speed={1}>
                            <div className="mx-[10vw]">
                                <div className="space-y-[15vh] lg:gap-y-[1vh] lg:space-y-0">
                                    <div className="space-y-[15vh] lg:grid lg:grid-cols-2 lg:space-y-[0vh] ">
                                        <div className="lg:border-r-[1.5px] lg:border-gray-200 lg:pr-[1vw] dark:lg:border-slate-800">
                                            <Doodler />
                                        </div>

                                        <div className="lg:border-l-[1.5px] lg:border-gray-200 lg:pl-[1.5vw] dark:lg:border-slate-800">
                                            <Pilot />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ParallaxLayer> */}
                    </Parallax>
                )}
            </DeviceWidth.Consumer>
        </>
    );
};

export default AboutPage;

import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../Components/Navigation";
import MyStack from "../Components/About/MyStack";
import MyMentality from "../Components/About/MyMentality";
import AboutMe from "../Components/About/AboutMe";
import Image from "next/image";
import flight from "../Components/About/img/flight.png";
import { Typewriter } from "react-simple-typewriter";

const AboutPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="About" />
            </Head>

            <div className="h-screen w-screen space-y-[5vh] bg-white dark:bg-black ">
                <div className="space-y-[12vh]">
                    <Navigation />

                    <div className="mx-[5vw]">
                        <h1
                            className="pb-[3vh] text-5xl font-medium "
                            style={{
                                fontFamily: "Roboto Mono, monospace",
                            }}
                        >
                            <Typewriter
                                words={["About me"]}
                                cursor={true}
                                cursorStyle={"_"}
                            />
                        </h1>

                        {/* mobile */}
                        <div className="block space-y-[2vh] lg:hidden">
                            <div className="relative w-full">
                                <Image
                                    src={flight}
                                    alt="Pilot"
                                    className="m-0 rounded-2xl"
                                    placeholder="blur"
                                    width={3194}
                                    height={1528}
                                    quality={100}
                                    priority={true}
                                    layout="responsive"
                                />
                            </div>
                            <AboutMe />
                        </div>

                        {/* desktop */}
                        <div className="hidden lg:grid lg:grid-cols-5">
                            <AboutMe />
                            <div className="relative w-full lg:col-span-2 lg:place-self-center">
                                <Image
                                    src={flight}
                                    alt="Pilot"
                                    className="m-0 rounded-2xl"
                                    placeholder="blur"
                                    width={3194}
                                    height={1528}
                                    quality={100}
                                    priority={true}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-[5vh] space-y-5 pb-[5vh]">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-10 lg:space-y-0">
                        <MyMentality />
                        <MyStack />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;

import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
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

            <div className="w-screen space-y-[10vh] bg-white dark:bg-black">
                <div className="mx-[5vw] space-y-[10vh]">
                    {/*  */}
                    <div className="space-y-[5vh]">
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

                        <div className="lg:grid lg:grid-cols-5">
                            <div className="hidden lg:col-span-3 lg:block">
                                <AboutMe />
                            </div>

                            <div className="relative block w-full mb-5 lg:col-span-2 lg:my-0">
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

                            <div className="block lg:hidden">
                                <AboutMe />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-[5vh] lg:grid lg:grid-cols-2 lg:gap-x-10 lg:space-y-0">
                        <MyMentality />
                        <MyStack />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;

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
                <meta name="description" content="About Page" />
            </Head>

            <div className="w-screen">
                <div className="mx[10vh] h-screen lg:mx-[5vw]">
                    <div className="relative">
                        <div className="absolute top-[20vh]">
                            <div className="lg:grid lg:grid-cols-7">
                                <div className="col-span-4">
                                    <h1
                                        className="pb-[3vh] text-3xl font-bold "
                                        style={{
                                            fontFamily:
                                                "Roboto Mono, monospace",
                                        }}
                                    >
                                        <Typewriter
                                            words={["About me"]}
                                            cursor={true}
                                            cursorStyle={"_"}
                                        />
                                    </h1>
                                    <AboutMe />
                                </div>

                                <div className="col-span-3">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-[10vh] pb-[20vh] lg:mx-[5vw]">
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

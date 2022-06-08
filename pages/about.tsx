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

            <div className="h-screen  w-screen space-y-[12vh] bg-white dark:bg-black ">
                <Navigation />

                <div className="mx-[5vw]">
                    <h1
                        className="text-5xl font-medium "
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
                    <div className="grid grid-cols-5">
                        <AboutMe />
                        <div className="relative w-[85%] place-self-center">
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

                <div className="mx-[2vh] space-y-5 pb-[5vh]">
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

import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Doodler from "../Components/About/Doodles";
import Pilot from "../Components/About/Pilot";

const AboutPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Justin Morris</title>
                <meta name="description" content="About" />
            </Head>
            <main className="overflow-hidden">
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
            </main>
        </>
    );
};

export default AboutPage;

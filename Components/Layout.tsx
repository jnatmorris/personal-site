import * as React from "react";
import Header from "./Navigation";
import Connect from "./Connect";
import Head from "next/head";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <LazyMotion strict features={domAnimation}>
            <MotionConfig reducedMotion="user">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <div className="max-w-full prose prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 dark:prose-invert ">
                    <div className="bg-white dark:bg-black">
                        <div className="relative mx-[4vw] lg:mx-[10vw]">
                            {/* header */}
                            <header className="pt-[1vh] lg:pt-[2vh]">
                                <Header />
                            </header>

                            {/* rest of page */}
                            <main className="mb-[5vh]">{children}</main>

                            {/* footer */}
                            <footer className="mt-[25vh]">
                                <Connect />
                            </footer>
                        </div>
                    </div>
                </div>
            </MotionConfig>
        </LazyMotion>
    );
};

export default Layout;

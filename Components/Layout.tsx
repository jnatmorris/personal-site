import React from "react";
import Head from "next/head";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Connect from "./Connect";
import Navigation from "./Navigation";
import ScrollTop from "./scrollTop";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    const [showUpArrow, setShowUpArrow] = React.useState<boolean>(false);

    React.useEffect(() => {
        console.log("Have a great day!");
        window.onscroll = function () {
            // get scroll position of user
            const viewportScrollDist =
                window.pageYOffset ||
                (
                    document.documentElement ||
                    document.body.parentNode ||
                    document.body
                ).scrollTop;

            // if below first page or at bottom of page
            if (
                viewportScrollDist > window.innerHeight ||
                window.innerHeight + window.scrollY >=
                    document.body.offsetHeight
            ) {
                setShowUpArrow(true);
            } else {
                setShowUpArrow(false);
            }
        };
    }, []);

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
                    <meta name="theme-color" content="#317EFB" />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>

                <div className="prose prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 prose-img:m-0 dark:prose-invert">
                    <main className="w-screen">
                        <Navigation />
                        {children}
                        <div className="mt-[4vh]">
                            <Connect />
                        </div>
                        <ScrollTop showUpArrow={showUpArrow} />
                    </main>
                </div>
            </MotionConfig>
        </LazyMotion>
    );
};

export default Layout;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
    LazyMotion,
    MotionConfig,
    domAnimation,
    Variants,
} from "framer-motion";
import Header from "../Components/header";
import Connect from "../Components/Index/Connect";

export const opacityVariants: Variants = {
    hidden: {
        opacity: 0.2,
        transition: {
            duration: 0,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LazyMotion strict features={domAnimation}>
            <MotionConfig reducedMotion="user">
                <div className="prose prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 dark:prose-invert ">
                    <div className="w-screen bg-white dark:bg-black">
                        <div className="mx-[3vw] lg:mx-[5vw]">
                            {/* header */}
                            <header className="mb-[17vh] pt-[1vh] lg:mb-[22vh] lg:pt-[2vh]">
                                <Header />
                            </header>

                            {/* index or about page */}
                            <Component {...pageProps} />

                            {/* footer */}
                            <footer className="mt-[40vh]">
                                <Connect />
                            </footer>
                        </div>
                    </div>
                </div>
            </MotionConfig>
        </LazyMotion>
    );
}

export default MyApp;

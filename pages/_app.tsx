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
                <div className="prose bg-white prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 dark:prose-invert dark:bg-black">
                    <header className="mx-5 mb-[17vh] pt-2">
                        <Header />
                    </header>
                    <Component {...pageProps} />
                    <footer className="mt-[10vh]">
                        <Connect />
                    </footer>
                </div>
            </MotionConfig>
        </LazyMotion>
    );
}

export default MyApp;

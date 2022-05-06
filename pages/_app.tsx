import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Header from "../Components/header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LazyMotion strict features={domAnimation}>
            <MotionConfig reducedMotion="user">
                <main className="prose bg-white dark:prose-invert dark:bg-black">
                    <div className="p-1">
                        <Header />
                    </div>
                    <Component {...pageProps} />
                </main>
            </MotionConfig>
        </LazyMotion>
    );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LazyMotion strict features={domAnimation}>
            <MotionConfig reducedMotion="user">
                <main className="prose dark:prose-invert">
                    <Component {...pageProps} />
                </main>
            </MotionConfig>
        </LazyMotion>
    );
}

export default MyApp;

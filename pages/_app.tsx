import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LazyMotion strict features={domAnimation}>
            <MotionConfig reducedMotion="user">
                <main className="prose prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 dark:prose-invert">
                    <Component {...pageProps} />
                </main>
            </MotionConfig>
        </LazyMotion>
    );
}

export default MyApp;

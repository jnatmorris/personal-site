import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@300&display=swap"
                    rel="stylesheet"
                />
                <Script src="/theme.js" strategy="beforeInteractive" />
            </Head>

            <body className="bg-white dark:bg-black">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

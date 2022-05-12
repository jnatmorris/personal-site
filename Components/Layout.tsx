import * as React from "react";
import Header from "../Components/header";
import Connect from "./Connect";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    const route = useRouter();

    return (
        <LazyMotion strict features={domAnimation}>
            <MotionConfig reducedMotion="user">
                <div className="max-w-full prose prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 dark:prose-invert">
                    <div className="bg-white dark:bg-black">
                        <div className="mx-[4vw] lg:mx-[5vw] ">
                            {/* header */}
                            <header
                                className={
                                    route.pathname === "/about"
                                        ? "mb-[12vh] pt-[1vh] lg:mb-[22vh] lg:pt-[2vh]"
                                        : "mb-[19vh] pt-[1vh] lg:mb-[22vh] lg:pt-[2vh]"
                                }
                            >
                                <Header route={route.pathname} />
                            </header>

                            {/* rest of page */}
                            <main>{children}</main>

                            {/* footer */}
                            <footer className="mt-[15vh] lg:mt-[10vh]">
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

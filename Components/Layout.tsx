import * as React from "react";
import Header from "../Components/header";
import Connect from "../Components/Index/Connect";
import {
    LazyMotion,
    MotionConfig,
    domAnimation,
    Variants,
} from "framer-motion";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <LazyMotion strict features={domAnimation}>
            <MotionConfig reducedMotion="user">
                <div className="max-w-full prose scroll-smooth prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 dark:prose-invert">
                    <div className="bg-white dark:bg-black">
                        <div className="mx-[3vw]  lg:mx-[5vw] ">
                            {/* header */}
                            <header className="mb-[17vh] pt-[1vh] lg:mb-[22vh] lg:pt-[2vh]">
                                <Header />
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
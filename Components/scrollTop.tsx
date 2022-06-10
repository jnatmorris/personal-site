import React from "react";
import { m, AnimatePresence } from "framer-motion";

interface Props {
    showUpArrow: boolean;
}

const ScrollTop: React.FC<Props> = ({ showUpArrow }) => {
    const scrollTopHandler = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {showUpArrow && (
                <m.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        onClick={scrollTopHandler}
                        className="fixed bottom-5 right-[1.6vw] hidden w-min cursor-pointer rounded-full p-1.5 outline-2 ring-2 ring-slate-300 lg:block"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 fill-transparent stroke-slate-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <m.path
                                transition={{ duration: 1.5 }}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                className="z-20"
                                d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                            />
                        </svg>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollTop;

import React from "react";
import { m } from "framer-motion";

const ScrollTop: React.FC = () => {
    const scrollTopHandler = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            onClick={scrollTopHandler}
            className="fixed hidden p-2 rounded-full cursor-pointer bottom-5 right-3 w-min outline-2 ring-2 ring-slate-300 lg:block"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 fill-transparent stroke-slate-500"
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
    );
};

export default ScrollTop;

import * as React from "react";
import Router from "next/router";
import { Variants, m } from "framer-motion";

const FourOFour: React.FC = () => {
    React.useEffect(() => {
        Router.push("/");
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const dot: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { repeat: Infinity, duration: 0.75 } },
    };

    return (
        <div className="prose prose-h1:m-0 prose-h2:m-0 dark:prose-invert">
            <div className="mt-[30vh]">
                <div className="m-auto">
                    <m.div
                        className="flex justify-center"
                        variants={container}
                        initial={"hidden"}
                        animate={"show"}
                    >
                        <h1 className="font-medium ">Redirecting</h1>
                        <div className="flex ml-1 space-x-1">
                            <m.h1 className="font-medium" variants={dot}>
                                .
                            </m.h1>
                            <m.h1 className="font-medium" variants={dot}>
                                .
                            </m.h1>
                            <m.h1 className="font-medium" variants={dot}>
                                .
                            </m.h1>
                        </div>
                    </m.div>
                </div>
            </div>
        </div>
    );
};

export default FourOFour;

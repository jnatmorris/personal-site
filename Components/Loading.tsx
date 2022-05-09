import * as React from "react";
import { m, Variants } from "framer-motion";

interface Props {
    current: number;
    end: number;
}

const Loading: React.FC<Props> = ({ current, end }) => {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
            },
        },
    };

    const dot: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { repeat: Infinity, duration: 0.75 } },
    };

    return (
        <div className="mt-[30vh]">
            {/* <m.div
                        className="flex justify-center"
                        variants={container}
                        initial={"hidden"}
                        animate={"show"}
                    >
                        <h1 className="font-medium ">Loading</h1>
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
                    </m.div> */}
            <p>
                {current}/{end}
            </p>
        </div>
    );
};

export default Loading;

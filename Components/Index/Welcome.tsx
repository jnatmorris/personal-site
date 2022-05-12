import * as React from "react";
import { Variants, m } from "framer-motion";

const Welcome = () => {
    const Variants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (
        <m.div
            variants={Variants}
            animate={"show"}
            initial={"hidden"}
            className="ml-[4vw] lg:ml-[1vw] "
        >
            <m.div variants={item} className="flex space-x-2 pb-3">
                <h1 className="font-bold underline decoration-blue-400 underline-offset-2 lg:text-5xl">
                    Welcome,
                </h1>
                <m.h1
                    whileHover={{ rotate: [0, -40, 40, -40, 0] }}
                    transition={{ duration: 1.7, ease: "linear" }}
                    className="origin-bottom lg:text-5xl"
                >
                    &#x1F44B;
                </m.h1>
            </m.div>
            <div className="ml-[1.5vw] lg:mt-[1vh] lg:space-y-2">
                <m.h2
                    className="text-slate-600 hover:font-bold lg:text-3xl"
                    variants={item}
                >
                    I&apos;m Justin Morris. A...
                </m.h2>
                <m.h3
                    variants={item}
                    className="font-normal lg:text-3xl lg:hover:font-semibold"
                >
                    - Computer science student
                </m.h3>
                <m.h3
                    variants={item}
                    className="font-normal lg:text-3xl lg:hover:font-semibold"
                >
                    - Web developer
                </m.h3>
                <m.h3
                    variants={item}
                    className="font-normal lg:text-3xl lg:hover:font-semibold"
                >
                    - And digital resident
                </m.h3>
            </div>
        </m.div>
    );
};

export default Welcome;

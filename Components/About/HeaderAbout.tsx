import * as React from "react";
import { m, Variants } from "framer-motion";

const HeaderAbout = () => {
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
            className="ml-[5vw] space-y-[1vh] px-2"
            variants={Variants}
            animate={"show"}
            initial={"hidden"}
        >
            <m.h1
                variants={item}
                className="font-bold underline decoration-blue-400 underline-offset-2 lg:text-4xl"
            >
                Friends
            </m.h1>
            <m.h2 className="font-normal lg:text-3xl" variants={item}>
                and
            </m.h2>
            <m.h1
                variants={item}
                className="font-bold underline decoration-blue-400 underline-offset-2 lg:text-4xl"
            >
                Exercise
            </m.h1>
        </m.div>
    );
};

export default HeaderAbout;

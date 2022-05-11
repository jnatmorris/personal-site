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
            className="ml-[5vw] px-2"
            variants={Variants}
            animate={"show"}
            initial={"hidden"}
        >
            <m.h1
                variants={item}
                className="underline decoration-blue-400 underline-offset-2 lg:text-5xl"
            >
                Uni student
            </m.h1>
            <m.h2 className="py-[2vh] font-normal lg:text-3xl" variants={item}>
                and
            </m.h2>
            <m.h1
                variants={item}
                className="underline decoration-blue-400 underline-offset-2 lg:text-5xl"
            >
                Web developer
            </m.h1>
        </m.div>
    );
};

export default HeaderAbout;

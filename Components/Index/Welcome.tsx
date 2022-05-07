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
            className="ml-[5vw] prose-h1:m-0 prose-h2:m-0 prose-h3:m-0"
        >
            <m.div variants={item} className="flex pb-3 space-x-2">
                <h1 className="underline decoration-blue-400 underline-offset-2">
                    Welcome,
                </h1>
                <h1>&#x1F44B;</h1>
            </m.div>

            <m.h2 variants={item}>I&apos;m Justin Morris. A...</m.h2>
            <m.h3 variants={item}>- Computer science student</m.h3>
            <m.h3 variants={item}>- Web developer</m.h3>
            <m.h3 variants={item}>- Curiosity driven</m.h3>
        </m.div>
    );
};

export default Welcome;

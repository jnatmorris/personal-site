import * as React from "react";
import { m } from "framer-motion";
import { opacityVariants } from "../Layout";

const Connect: React.FC = () => (
    <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={opacityVariants}
        className="mx-[2vw] pb-[2vh] lg:mx-[0vw]"
    >
        <h2 className="pb-[1vh] lg:pb-[2vh] lg:text-4xl">Want to Connect?</h2>
        <div className="mx-[0.5vw] mt-1 flex justify-between prose-h3:m-0 lg:prose-h3:text-3xl">
            <m.h3 whileTap={{ scale: 0.9 }}>
                <a className="no-underline" href="https://github.com/JNat07">
                    GitHub
                </a>
            </m.h3>
            <m.h3 whileTap={{ scale: 0.9 }}>
                <a
                    className="no-underline"
                    href="https://www.linkedin.com/in/justinnmorris/"
                >
                    LinkedIn
                </a>
            </m.h3>
            <m.h3 whileTap={{ scale: 0.9 }}>
                <a className="no-underline" href="mailto:contact@jnmorris.dev">
                    Email
                </a>
            </m.h3>
            <m.h3 whileTap={{ scale: 0.9 }} className="relative">
                <a
                    className="no-underline"
                    href="CV.pdf"
                    download={"JustinMorrisResume"}
                >
                    Resume
                </a>
            </m.h3>
        </div>
    </m.div>
);

export default Connect;

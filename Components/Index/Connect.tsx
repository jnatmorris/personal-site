import * as React from "react";
import { m } from "framer-motion";
import { opacityVariants } from "../../pages/_app";

const Connect: React.FC = () => (
    <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={opacityVariants}
        className="mx-[4vw] lg:text-3xl"
    >
        <h3 className="m-0">Want to Connect?</h3>
        <div className="mx-0.5 mt-1 flex justify-between prose-h3:m-0">
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

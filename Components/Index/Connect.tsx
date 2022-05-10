import * as React from "react";
import { m } from "framer-motion";

const Connect: React.FC = () => (
    <div className="mx-[2vw] pb-[2.5vh] opacity-100 lg:mx-[0vw]">
        <h3 className="pb-[1vh] text-2xl underline decoration-sky-600 underline-offset-2 lg:text-4xl">
            get to know me
        </h3>

        <div className="mx-[0.5vw] mt-1 flex justify-between prose-h3:m-0">
            <m.h4 whileTap={{ scale: 0.9 }}>
                <a
                    className="text-xl no-underline hover:underline lg:text-2xl"
                    href="https://github.com/JNat07"
                >
                    GitHub
                </a>
            </m.h4>
            <m.h4 whileTap={{ scale: 0.9 }}>
                <a
                    className="text-xl no-underline hover:underline lg:text-2xl"
                    href="https://www.linkedin.com/in/justinnmorris/"
                >
                    LinkedIn
                </a>
            </m.h4>
            <m.h4 whileTap={{ scale: 0.9 }}>
                <a
                    className="text-xl no-underline hover:underline lg:text-2xl"
                    href="mailto:contact@jnmorris.dev"
                >
                    Email
                </a>
            </m.h4>
            <m.h4 whileTap={{ scale: 0.9 }} className="relative">
                <a
                    className="text-xl no-underline hover:underline lg:text-2xl"
                    href="CV.pdf"
                    download={"JustinMorrisResume"}
                >
                    Resume
                </a>
            </m.h4>
        </div>
    </div>
);

export default Connect;

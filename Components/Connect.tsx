import * as React from "react";

const Connect: React.FC = () => (
    <div className="mx-[2vw] pb-[2.5vh] opacity-100 lg:mx-[0vw]">
        <div className="mx-[0.5vw] mt-1 flex justify-around border-t-2 border-gray-300 pt-2 prose-h3:m-0">
            <h4>
                <a
                    className="text-xl no-underline lg:text-3xl"
                    href="https://github.com/JNat07"
                >
                    GitHub
                </a>
            </h4>
            <h4>
                <a
                    className="text-xl no-underline  lg:text-3xl"
                    href="https://www.linkedin.com/in/justinnmorris/"
                >
                    LinkedIn
                </a>
            </h4>
            <h4>
                <a
                    className="text-xl no-underline  lg:text-3xl"
                    href="mailto:justin@jnmorris.dev"
                >
                    Email
                </a>
            </h4>
            <h4>
                <a
                    className="text-xl no-underline  lg:text-3xl"
                    href="./CV/CV.pdf"
                    download={"JustinMorrisResume"}
                >
                    Resume
                </a>
            </h4>
        </div>
    </div>
);

export default Connect;

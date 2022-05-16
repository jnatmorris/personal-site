import * as React from "react";

const Connect: React.FC = () => (
    <div className="mx-[2vw] pb-[2.5vh] lg:mx-[0vw]">
        <div className="flex justify-center lg:justify-end">
            <div className="mx-[0.5vw] mt-1 flex space-x-[5vw] pt-2 prose-h3:m-0 lg:space-x-[3vw]">
                <h4>
                    <a
                        className="text-xl no-underline lg:text-2xl lg:opacity-40 lg:hover:opacity-100"
                        href="https://github.com/JNat07"
                    >
                        GitHub
                    </a>
                </h4>
                <h4>
                    <a
                        className="text-xl no-underline lg:text-2xl lg:opacity-40 lg:hover:opacity-100"
                        href="https://www.linkedin.com/in/justinnmorris/"
                    >
                        LinkedIn
                    </a>
                </h4>
                <h4>
                    <a
                        className="text-xl no-underline lg:text-2xl lg:opacity-40 lg:hover:opacity-100"
                        href="mailto:justin@jnmorris.dev"
                    >
                        Email
                    </a>
                </h4>
                <h4>
                    <a
                        className="text-xl no-underline lg:text-2xl lg:opacity-40 lg:hover:opacity-100"
                        href="./CV/CV.pdf"
                        download={"JustinMorrisResume"}
                    >
                        Resume
                    </a>
                </h4>
            </div>
        </div>
    </div>
);

export default Connect;

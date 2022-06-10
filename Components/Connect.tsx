import React from "react";

const Connect: React.FC = () => (
    <footer className="w-screen">
        <div className="mx-[2vw] px-[2vw] pb-1 lg:mx-[5vw] lg:flex lg:justify-end lg:pb-[2vh]">
            <div className="mx-[0.5vw] flex justify-around space-x-[5vw] border-t-2 border-slate-300 pt-1.5 prose-h3:m-0 dark:border-slate-600 lg:space-x-[3vw] ">
                <h4>
                    <a
                        className="text-xl no-underline"
                        href="https://github.com/jnatmorris"
                    >
                        GitHub
                    </a>
                </h4>
                <h4>
                    <a
                        className="text-xl no-underline"
                        href="https://www.linkedin.com/in/justinnmorris/"
                    >
                        LinkedIn
                    </a>
                </h4>
                <h4>
                    <a
                        className="text-xl no-underline"
                        href="mailto:justin@jnmorris.dev"
                    >
                        Email
                    </a>
                </h4>
                <h4>
                    <a
                        className="text-xl no-underline"
                        href="./CV/CV.pdf"
                        download={"JustinMorrisResume"}
                    >
                        Resume
                    </a>
                </h4>
            </div>
        </div>
    </footer>
);

export default Connect;

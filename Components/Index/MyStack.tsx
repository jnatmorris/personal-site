import * as React from "react";

const MyStack: React.FC = () => (
    <div className="space-y-[3vh] lg:px-[0.75vw]">
        <div>
            <div className="flex items-center space-x-[1vw]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
                <h2 className="text-xl text-slate-700 lg:py-[2vh] lg:text-center lg:text-4xl">
                    My stack
                </h2>
            </div>

            <h4 className="text-2xl font-normal leading-relaxed">
                While I have my personal preferences, I&apos;m always looking to
                learn and experiment with new technologies. Believer that each
                project has it&apos;s own set of tools.
            </h4>

            <div className="mt-[5vh]">
                <ul className="text-xl list-outside lg:text-2xl">
                    <li>
                        <h5>
                            ReactJS -{" "}
                            <span className="font-normal opacity-[0.6]">
                                NextJS
                            </span>
                        </h5>
                    </li>
                    <li>
                        <h5>Typescript</h5>
                    </li>
                    <li>
                        <h5>TailwindCSS</h5>
                    </li>
                    <li>
                        <h5>framer-motion</h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default MyStack;

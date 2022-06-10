import React from "react";

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
                <h2 className="align-bottom text-xl font-normal leading-relaxed text-slate-700 underline dark:text-slate-100/90 lg:py-[2vh] lg:leading-loose">
                    My stack
                </h2>
            </div>

            <h4 className="text-xl font-normal leading-relaxed dark:text-gray-200 lg:leading-loose">
                While I have my personal preferences, I&apos;m always looking to
                learn and experiment with new technologies. Believer that each
                project has it&apos;s own set of tools.
            </h4>

            <ul className="mt-[2vh] list-outside text-lg dark:text-gray-200 lg:mt-[0vh]">
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
);

export default MyStack;

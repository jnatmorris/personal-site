import React from "react";

const MyMentality: React.FC = () => (
    <div className=" lg:px-[0.75vw]">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
            <h3 className="text-xl font-normal leading-relaxed text-slate-700 dark:text-slate-100/90 lg:py-[2vh] lg:leading-loose">
                My mentality
            </h3>
        </div>

        <div>
            <h4 className="text-xl font-normal leading-relaxed dark:text-gray-200 lg:leading-loose">
                If carving a niche in the market or building the next Unicorn
                company, within the first{" "}
                <span className="text-orange-600 ">ten seconds</span>, a user
                will choose whether to click away.{" "}
                <span className="font-semibold text-blue-300">
                    User retention
                </span>{" "}
                is indispensible to succeed. I design and compose web sites that
                feel modern while not bloating bundle sizes as every{" "}
                <span className="font-semibold text-yellow-400">second</span>{" "}
                that passes, could be a lost customer.
            </h4>

            <ul className="mt-[2vh] list-outside text-lg dark:text-gray-200 lg:mt-[0vh]">
                <li>
                    <h5>
                        Fast load time -{" "}
                        <span className="font-normal opacity-[0.7]">
                            small & efficient bundle size
                        </span>
                    </h5>
                </li>
                <li>
                    <h5>
                        SEO Optimization{" "}
                        <span className="font-normal opacity-[0.7]">
                            - optimize indexing to reach greater audiences
                        </span>
                    </h5>
                </li>
                <li>
                    <h5>
                        Clean and simple (UI & UX){" "}
                        <span className="font-normal opacity-[0.7]">
                            - easy on the eyes as to not overwhelm the user
                        </span>
                    </h5>
                </li>
                <li>
                    <h5>
                        Accessability -{" "}
                        <span className="font-normal opacity-[0.7]">
                            a site should function & look good on all screens
                        </span>
                    </h5>
                </li>
            </ul>
        </div>
    </div>
);

export default MyMentality;

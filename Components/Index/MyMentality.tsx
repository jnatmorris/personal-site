import * as React from "react";

const MyMentality: React.FC = () => (
    <>
        <h2 className="mb-2 underline decoration-sky-600 underline-offset-2">
            My mentality
        </h2>

        <h3 className="font-normal leading-normal">
            Within the first{" "}
            <span className="font-semibold text-red-400 "> five seconds</span>,
            a user will choose to stay or leave. I design web sites where every{" "}
            <span className="text-orange-500">half second</span> matters.
        </h3>

        <ul className="list-outside">
            <li>
                <h4>
                    Fast load time -{" "}
                    <span className="font-normal opacity-[0.7]">
                        small & efficient bundle size
                    </span>
                </h4>
            </li>
            <li>
                <h4>
                    SEO Optimization{" "}
                    <span className="font-normal opacity-[0.7]">
                        - get as many eyes as possible
                    </span>
                </h4>
            </li>
            <li>
                <h4>
                    Clean and simple (UI & UX)
                    <span className="font-normal opacity-[0.7]">
                        - why should the user stay on your site
                    </span>
                </h4>
            </li>
            <li>
                <h4>
                    Accessability -{" "}
                    <span className="font-normal opacity-[0.7]">
                        a site should function & look good on all devices
                    </span>
                </h4>
            </li>
        </ul>
    </>
);

export default MyMentality;

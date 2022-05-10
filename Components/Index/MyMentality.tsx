import * as React from "react";

const MyMentality: React.FC = () => (
    <>
        <h2 className="mb-2 underline decoration-sky-600 underline-offset-2 lg:text-4xl">
            My mentality
        </h2>

        <h3 className="font-normal leading-normal lg:text-3xl lg:leading-loose">
            Whether carving your own niche in the market, building the next
            Unicorn company, or competing with a monstrous company, within the
            first{" "}
            <span className="font-semibold text-red-400 ">ten seconds</span>, a
            user will choose whether to click away.{" "}
            <span className="text-blue-500 ">User retention</span> is
            indispensible to succeed. I design and compose web sites where every{" "}
            <span className="text-orange-500">second</span> that passes, could
            be another closing of a purchase.
        </h3>

        <ul className="mt-[2vh] list-outside lg:mt-[0vh] lg:text-3xl">
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

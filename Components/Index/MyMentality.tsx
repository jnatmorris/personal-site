import * as React from "react";

const MyMentality: React.FC = () => (
    <>
        <h3 className="pb-[1vh] text-2xl underline decoration-sky-600 underline-offset-2 lg:text-4xl">
            my mentality
        </h3>

        <h4 className="text-xl font-normal leading-relaxed lg:text-2xl lg:leading-loose">
            Whether carving your own niche in the market, building the next
            Unicorn company, or competing with a monstrous company, within the
            first <span className="text-red-500 ">ten seconds</span>, a user
            will choose whether to click away.{" "}
            <span className="font-semibold underline text-cyan-600">
                User retention
            </span>{" "}
            is indispensible to succeed. I design and compose web sites that
            feel modern while not bloating bundle sizes as every{" "}
            <span className="text-orange-600">second</span> that passes, could
            be a lost customer.
        </h4>

        <ul className="mt-[2vh] list-outside text-lg lg:mt-[0vh] lg:text-2xl ">
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
    </>
);

export default MyMentality;

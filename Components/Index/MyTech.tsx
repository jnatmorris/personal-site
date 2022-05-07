import * as React from "react";

const MyTech: React.FC = () => (
    <>
        <h2 className="mb-2 underline decoration-sky-600 underline-offset-2">
            Tech you can find in my sites
        </h2>
        <h3 className="font-normal leading-normal">
            While I have my preferences, based off experiences, I'm always
            flexible to trying something new.
        </h3>
        <ul>
            <li>
                <h4>
                    ReactJS -{" "}
                    <span className="font-normal opacity-[0.7]">NextJS</span>
                </h4>
            </li>
            <li>
                <h4>Typescript</h4>
            </li>
            <li>
                <h4>TailwindCSS</h4>
            </li>
            <li>
                <h4>framer-motion</h4>
            </li>
        </ul>
    </>
);

export default MyTech;

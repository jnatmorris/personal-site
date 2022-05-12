import * as React from "react";

const MyStack: React.FC = () => (
    <>
        <h3 className="text-2xl lg:text-4xl">My stack</h3>
        <h4 className="text-xl font-normal leading-relaxed lg:text-2xl lg:leading-loose">
            While I have my preferences, based off experiences, I&apos;m always
            flexible to trying something new. Here is what I&apos;m currently
            using:
        </h4>
        <ul className="list-outside text-xl lg:text-2xl ">
            <li>
                <h5>
                    ReactJS -{" "}
                    <span className="font-normal opacity-[0.6]">NextJS</span>
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
    </>
);

export default MyStack;

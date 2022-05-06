import * as React from "react";

const About = () => {
    return (
        <div className="pb-1 mx-3 shadow-md rounded-2xl bg-slate-100 ring-1 ring-slate-200 prose-p:m-0 prose-li:m-0 dark:bg-slate-700/60 dark:ring-slate-800">
            {/* pre-load images and to not have to load later */}

            <div className="px-2 pt-3">
                <h3 className="m-0 justify-self-start">Who I am</h3>

                <p className="pb-2 m-0 leading-normal">
                    I'm a University Student
                </p>
                <h4 className="mt-2 mb-0 font-normal underline underline-offset-[0.5px]">
                    Keys to a website
                </h4>

                <ul className="ml-3 list-outside">
                    <li>
                        <p>Small bundle size (fast load time)</p>
                    </li>
                    <li>
                        <p>SEO Optimization</p>
                    </li>
                    <li>
                        <p>Clean and simple (UI & UX)</p>
                    </li>
                    <li>
                        <p>Accessability through device size</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;

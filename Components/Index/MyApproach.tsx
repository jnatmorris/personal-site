import * as React from "react";

const MyApproach: React.FC = () => {
    const [ImageLoaded, setImageLoaded] = React.useState(false);

    return (
        <div className="pb-1 mx-3 shadow-md rounded-2xl bg-slate-100 ring-1 ring-slate-200 prose-p:m-0 prose-li:m-0 dark:bg-slate-700/60 dark:ring-slate-800">
            {/* pre-load images and to not have to load later */}

            <img
                src="MyApproach.jpg"
                alt="Plane"
                hidden={true}
                onLoad={() => setImageLoaded(true)}
            />

            <div className="w-full h-48 overflow-hidden bg-white rounded-t-2xl">
                {ImageLoaded ? (
                    <img
                        src="MyApproach.jpg"
                        alt="Plan"
                        className="m-0 bg-top bg-cover rounded-t-xl"
                    />
                ) : (
                    "Loading"
                )}
            </div>
            <div className="px-2 pt-3">
                <div className="grid grid-cols-2 place-items-center ">
                    <h3 className="m-0 justify-self-start">
                        My rules of thumb
                    </h3>
                    <p className="m-0 text-sm justify-self-end">
                        Photo:{" "}
                        <a
                            className="text-sky-600 "
                            href="https://unsplash.com/@halacious"
                        >
                            Pedro
                        </a>
                    </p>
                </div>

                <p className="pb-2 m-0 leading-normal">
                    I design websites with the mentality that within the first
                    fifteen seconds the user will decide to stay or leave.
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

export default MyApproach;

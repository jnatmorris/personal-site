import * as React from "react";

const Story: React.FC = () => {
    const [ImageLoaded, setImageLoaded] = React.useState(false);

    return (
        <div className="mx-3 shadow-md rounded-2xl bg-slate-100 ring-1 ring-slate-200 dark:bg-slate-700/60 dark:ring-slate-800">
            {/* pre-load images and to not have to load later */}
            <img
                src="Chicago.jpg"
                alt="Chicago"
                hidden={true}
                onLoad={() => setImageLoaded(true)}
            />
            <div className="w-full overflow-hidden bg-white rounded-t-2xl">
                {ImageLoaded ? (
                    <img
                        src="Chicago.jpg"
                        alt="Chicago"
                        className="m-0 rounded-t-xl"
                    />
                ) : (
                    "Loading"
                )}
            </div>
            <div className="px-2 pt-3">
                <div className="grid grid-cols-2 place-items-center ">
                    <h3 className="m-0 justify-self-start">About me</h3>
                    <p className="m-0 text-sm justify-self-end">
                        Photo:{" "}
                        <a
                            className="text-sky-600 "
                            href="https://unsplash.com/@peterlaster"
                        >
                            Pedro
                        </a>
                    </p>
                </div>
                <p className="pb-2 m-0 leading-normal">
                    Hey! I&apos;m Justin Morris a computer science student at
                    Jacobs University in Bremen Germany. I&apos;m originally
                    from Chicago IL, and now based in the aforementioned Bremen
                    Germany as well as New York City.
                </p>
            </div>
        </div>
    );
};

export default Story;

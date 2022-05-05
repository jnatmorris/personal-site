import * as React from "react";

const Pilot = () => {
    const [ImageLoaded, setImageLoaded] = React.useState(false);

    return (
        <div className="mx-3 shadow-md rounded-2xl bg-slate-100 ring-1 ring-slate-200 dark:bg-slate-700/60 dark:ring-slate-800">
            {/* pre-load images and to not have to load later */}
            <img
                src="flight.png"
                alt="Pilot"
                hidden={true}
                onLoad={() => setImageLoaded(true)}
            />
            <div className="w-full overflow-hidden bg-white rounded-t-2xl">
                {ImageLoaded ? (
                    <img
                        src="flight.png"
                        alt="Pilot"
                        className="m-0 rounded-t-xl"
                    />
                ) : (
                    "Loading"
                )}
            </div>
            <div className="px-2 pt-3">
                <h3 className="m-0">Student pilot</h3>

                <p className="pb-2 m-0 leading-normal">
                    Since a young kid I have been entranced by aviation.
                    Beginning in 2017, I started my journey of obtaining a
                    private pilots license. Since then, I have flow in the USA,
                    New Zealand, and Germany.
                </p>
            </div>
        </div>
    );
};

export default Pilot;

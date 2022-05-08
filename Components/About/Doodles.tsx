import * as React from "react";
import { m, Variants, AnimatePresence } from "framer-motion";

const Doodler: React.FC = () => {
    const [activeImage, setActiveImg] = React.useState<number>(1);
    const [finishedDismount, setFinishedDismount] = React.useState(false);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [firstLoad, setFirstLoad] = React.useState<boolean>(true);
    const counter = React.useRef(0);

    const imgVariants: Variants = {
        initial: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "linear",
                delay: 0.5,
            },
        },

        firstLoad: {
            opacity: 1,
            height: "fit-content",
        },

        show: {
            opacity: 1,
            height: "fit-content",
            transition: {
                ease: "linear",
                delay: 0.25,
            },
        },
        exit: {
            height: 0,
            opacity: 0,
        },
    };

    const images: string[] = [
        "./doodles/bf109.png",
        "./doodles/train.png",
        "./doodles/t33.png",
        "./doodles/shuttle.png",
        "./doodles/gus.png",
    ];

    const imageLoaded = (): void => {
        counter.current += 1;

        if (counter.current >= images.length) {
            setLoading(false);
        }
    };

    const imageHandler = (value: number): void => {
        const currentImage = activeImage + value;

        // currentImage is more than number of images
        if (currentImage > images.length) {
            // if at end and want to go to next, show 1
            setActiveImg(1);
        } else if (currentImage < 1) {
            // if at start and want to go back, show last image
            setActiveImg(images.length);
        } else {
            // else just cycle
            setActiveImg(currentImage);
        }

        setFinishedDismount(false);
        setFirstLoad(false);
    };

    return (
        <div className="mx-3 shadow-md rounded-2xl bg-slate-100 ring-1 ring-slate-200 dark:bg-slate-700/60 dark:ring-slate-800">
            {/* prelaod images and to not have to load later */}
            <div hidden={true}>
                <img
                    src="./doodles/bf109.png"
                    alt="plane"
                    onLoad={imageLoaded}
                />
                <img
                    src="./doodles/train.png"
                    alt="train"
                    onLoad={imageLoaded}
                />

                <img
                    src="./doodles/shuttle.png"
                    alt="shuttle"
                    onLoad={imageLoaded}
                />

                <img
                    src="./doodles/t33.png"
                    alt="shuttle"
                    onLoad={imageLoaded}
                />

                <img
                    src="./doodles/gus.png"
                    alt="shuttle"
                    onLoad={imageLoaded}
                />
            </div>

            <div className="w-full overflow-hidden bg-white rounded-t-2xl">
                <div className="">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            <AnimatePresence>
                                {activeImage === 1 && (
                                    <m.div
                                        variants={imgVariants}
                                        animate={"show"}
                                        initial={
                                            firstLoad ? "firstLoad" : "initial"
                                        }
                                        exit={"exit"}
                                        onAnimationComplete={() =>
                                            setFinishedDismount(true)
                                        }
                                        onClick={() => imageHandler(1)}
                                    >
                                        <img
                                            src={images[0]}
                                            alt="bf109"
                                            className="m-0 rounded-t-xl"
                                        />
                                    </m.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {activeImage === 2 && finishedDismount && (
                                    <m.div
                                        variants={imgVariants}
                                        animate={"show"}
                                        initial={"initial"}
                                        exit={"exit"}
                                        onAnimationComplete={() =>
                                            setFinishedDismount(true)
                                        }
                                        onClick={() => imageHandler(1)}
                                    >
                                        <img
                                            src={images[1]}
                                            alt="train"
                                            className="m-0 rounded-t-xl"
                                        />
                                    </m.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {activeImage === 3 && finishedDismount && (
                                    <m.div
                                        variants={imgVariants}
                                        animate={"show"}
                                        initial={"initial"}
                                        exit={"exit"}
                                        onAnimationComplete={() =>
                                            setFinishedDismount(true)
                                        }
                                        onClick={() => imageHandler(1)}
                                    >
                                        <img
                                            src={images[2]}
                                            alt="train"
                                            className="m-0 rounded-t-xl"
                                        />
                                    </m.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {activeImage === 4 && finishedDismount && (
                                    <m.div
                                        variants={imgVariants}
                                        animate={"show"}
                                        initial={"initial"}
                                        exit={"exit"}
                                        onAnimationComplete={() =>
                                            setFinishedDismount(true)
                                        }
                                        onClick={() => imageHandler(1)}
                                    >
                                        <img
                                            src={images[3]}
                                            alt="train"
                                            className="m-0 rounded-t-xl"
                                        />
                                    </m.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {activeImage === 5 && finishedDismount && (
                                    <m.div
                                        variants={imgVariants}
                                        animate={"show"}
                                        initial={"initial"}
                                        onClick={() => imageHandler(1)}
                                        exit={"exit"}
                                        onAnimationComplete={() =>
                                            setFinishedDismount(true)
                                        }
                                    >
                                        <img
                                            src={images[4]}
                                            alt="train"
                                            className="m-0 rounded-t-xl"
                                        />
                                    </m.div>
                                )}
                            </AnimatePresence>
                        </>
                    )}
                </div>
            </div>

            <div className="px-2 pt-3 ">
                <div className="grid grid-cols-2">
                    <h3 className="m-0 justify-self-start">Doodler</h3>

                    <div className="flex space-x-2 justify-self-end">
                        <m.svg
                            whileTap={{ scale: 0.9 }}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            onClick={() => imageHandler(-1)}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </m.svg>
                        <m.svg
                            whileTap={{ scale: 0.9 }}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            onClick={() => imageHandler(1)}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </m.svg>
                    </div>
                </div>

                <p className="pb-2 m-0 leading-normal">
                    This is just a little hobby I partake in during my free
                    time. Feel free to click on the images or use the arrows to
                    cycle through some of my art.
                </p>
            </div>
        </div>
    );
};

export default Doodler;

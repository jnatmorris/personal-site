import * as React from "react";
import { m, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import bf109 from "./doodles/bf109.png";
import train from "./doodles/train.png";
import t33 from "./doodles/t33.png";
import shuttle from "./doodles/shuttle.png";
import gus from "./doodles/gus.png";

const Doodler: React.FC = () => {
    const [activeImage, setActiveImg] = React.useState<number>(1);
    const [finishedDismount, setFinishedDismount] =
        React.useState<boolean>(false);

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

    // Handle buttons being clicked to change images
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
    };

    return (
        <div className="mx-3 shadow-md rounded-2xl bg-slate-100 ring-1 ring-slate-200 dark:bg-slate-700/60 dark:ring-slate-800 ">
            <div className="w-full overflow-hidden rounded-t-2xl">
                <AnimatePresence>
                    {activeImage === 1 && (
                        <m.div
                            variants={imgVariants}
                            animate={"show"}
                            initial={"initial"}
                            exit={"exit"}
                            onAnimationComplete={() =>
                                setFinishedDismount(true)
                            }
                            onClick={() => imageHandler(1)}
                            className="relative"
                        >
                            <Image
                                src={bf109}
                                alt="bf109"
                                className="m-0 rounded-t-xl"
                                placeholder="blur"
                                width={4096}
                                height={1714}
                                // priority true as first image
                                priority={true}
                                quality={100}
                                layout="responsive"
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
                            className="relative lg:max-h-[40vh] lg:overflow-y-scroll"
                        >
                            <Image
                                src={train}
                                alt="train"
                                className="m-0 rounded-t-xl"
                                placeholder="blur"
                                width={2224}
                                height={1668}
                                quality={100}
                                layout="responsive"
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
                            className="relative lg:max-h-[40vh] lg:overflow-y-scroll"
                        >
                            <Image
                                src={t33}
                                alt="t33"
                                className="m-0 rounded-t-xl"
                                placeholder="blur"
                                width={2611}
                                height={2203}
                                quality={100}
                                layout="responsive"
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
                            className="relative lg:max-h-[40vh] lg:overflow-y-scroll"
                        >
                            <Image
                                src={shuttle}
                                alt="shuttle"
                                className="m-0 rounded-t-xl"
                                placeholder="blur"
                                width={1668}
                                height={2224}
                                quality={100}
                                layout="intrinsic"
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
                            className="relative lg:max-h-[40vh] lg:overflow-y-scroll"
                        >
                            <Image
                                src={gus}
                                alt="gus"
                                className="m-0 rounded-t-xl"
                                placeholder="blur"
                                width={1668}
                                height={2224}
                                layout="responsive"
                                quality={100}
                                // priority true if user goes back one image
                                priority={true}
                            />
                        </m.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="px-[1vw] pt-3 lg:px-[1vw]">
                <div className="grid grid-cols-2">
                    <h3 className="m-0 justify-self-start lg:pb-2 lg:text-3xl">
                        Doodler
                    </h3>

                    <div className="flex space-x-2 justify-self-end">
                        <m.svg
                            whileTap={{ scale: 0.9 }}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 lg:h-8 lg:w-8"
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
                            className="w-6 h-6 lg:h-8 lg:w-8"
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

                <p className="pb-2 m-0 text-xl leading-normal">
                    This is just a little hobby I partake in during my free
                    time. Feel free to click on the images or use the arrows to
                    cycle through some of my art.
                </p>
            </div>
        </div>
    );
};

export default Doodler;

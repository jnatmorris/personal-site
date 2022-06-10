import React from "react";
import Image from "next/image";
import me from "./img/me.jpg";
import { Typewriter } from "react-simple-typewriter";

const AboutMeShort: React.FC = () => {
    // which word is being typed
    const [word, setWord] = React.useState<number>(0);

    const [style, setStyle] = React.useState<string>("");

    // update which word is being printed to screen
    const updateWordHandler = (currentWord: number): void => {
        setWord(currentWord);
    };

    // change color depending on text
    React.useEffect(() => {
        const remainder = word % 6;
        switch (remainder) {
            case 0:
                setStyle("");
                break;
            case 1:
                setStyle("text-[#61DBFB]");
                break;
            case 2:
                setStyle("text-[#007acc]");
                break;
            case 3:
                setStyle("");
                break;
            case 4:
                setStyle("");
                break;
            case 5:
                setStyle("text-[#fd3b2d]");
                break;

            default:
                break;
        }

        return () => setStyle("");
    }, [word]);

    return (
        <div>
            <h1 className="text-3xl font-semibold lg:hidden">
                Hey I&apos;m Justin,
            </h1>

            <div className="gap-x-[2vw] lg:mx-[4vw] lg:grid lg:grid-cols-2 lg:content-center ">
                <div className="my-[3vh] lg:mt-[1vh]">
                    <div className="relative w-full origin-center">
                        <Image
                            src={me}
                            width={1439}
                            height={831}
                            placeholder="blur"
                            priority={true}
                            layout="responsive"
                            className="rounded-2xl"
                            quality={100}
                            alt="Justin"
                        />
                    </div>
                </div>
                <div className="lg:flex lg:self-center">
                    <div className="space-y-4 py-[1vh] ">
                        <h1
                            className="hidden lg:block lg:text-3xl lg:font-bold"
                            style={{ fontFamily: "Roboto, sans-serif" }}
                        >
                            Hey, I&apos;m Justin
                        </h1>

                        <div className="flex space-x-3">
                            {/* Ensure proper grammar */}
                            <h2 className="font-semibold lg:text-2xl">
                                {(word + 1) % 6 !== 0 ? "I'm a..." : "And..."}
                            </h2>

                            <h2
                                className={[
                                    style,
                                    "self-end text-xl font-normal",
                                ].join(" ")}
                            >
                                <Typewriter
                                    words={[
                                        "Computer science student ",
                                        "Web Developer ",
                                        "Typescript fanatic ",
                                        "Student Pilot ",
                                        "Hobby Doodler ",
                                        "Located in NYC ",
                                    ]}
                                    onType={(currentWord) =>
                                        updateWordHandler(currentWord)
                                    }
                                    delaySpeed={1800}
                                    cursor={true}
                                    cursorStyle="_"
                                    loop={Infinity}
                                    deleteSpeed={70}
                                />
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeShort;

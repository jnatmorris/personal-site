import React from "react";
import { Typewriter } from "react-simple-typewriter";

const FlagGame: React.FC = () => (
    <div className="space-y-[3vh]  lg:px-[0.75vw]">
        <div>
            <div className="flex items-center space-x-[1vw] ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                        clipRule="evenodd"
                    />
                </svg>

                <h2 className="text-xl text-slate-700 dark:text-slate-200 lg:py-[2vh] lg:text-3xl">
                    <Typewriter
                        words={["The Flag Game"]}
                        cursor={true}
                        cursorStyle={"_"}
                    />
                </h2>
            </div>

            <h3 className="text-xl font-normal leading-relaxed lg:leading-loose">
                <a
                    href="https://github.com/JNat07/flag-game-frontend"
                    className="font-normal underline decoration-blue-500 underline-offset-1"
                >
                    The Flag Game
                </a>{" "}
                a simplistic yet fun way to test your knowledge. Able to play
                singleplayer and multiplayer to hones ones knowledge of
                countries flags.
            </h3>

            <ul className="text-lg">
                <li>
                    Multiplayer
                    <ul>
                        <li>
                            Receive and send real time game requests to others
                            users in the lobby
                        </li>
                        <li>
                            Choose a unique name to generate pixel art of your
                            character
                        </li>
                    </ul>
                </li>

                <li>Light && Dark mode</li>
            </ul>
        </div>
    </div>
);

export default FlagGame;

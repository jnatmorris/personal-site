import React from "react";
import { Typewriter } from "react-simple-typewriter";

const FlagGame: React.FC = () => (
    <div className="space-y-[3vh]  lg:px-[0.75vw]">
        <div>
            <div className="flex items-center space-x-[1vw] ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
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

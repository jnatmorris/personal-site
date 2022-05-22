import * as React from "react";

const FlagGame: React.FC = () => (
    <div className="col-span-2">
        <div className="space-y-[3vh]  lg:px-[0.75vw]">
            <div>
                <div className="flex items-center space-x-[1vw]">
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
                    <h2 className="text-xl text-slate-700 dark:text-slate-200 lg:py-[2vh] lg:text-center lg:text-4xl">
                        The Flag Game
                    </h2>
                </div>

                <h4 className="text-2xl font-normal leading-relaxed lg:leading-loose">
                    <a
                        href="https://github.com/JNat07/flag-game-frontend"
                        className="font-normal underline decoration-blue-500 underline-offset-1"
                    >
                        The Flag Game
                    </a>{" "}
                    a simplistic, fun way to learn. Able to play singleplayer or
                    multiplayer, to be joined by friends, versions to hone ones
                    knowledge of all countries flags.
                </h4>

                <ul className="text-2xl">
                    <li>Multiplayer</li>
                    <ul>
                        <li>
                            Able to get and accept requests from other users to
                            play in lobby
                        </li>
                        <li>
                            Able to choose a unique name to generate a pixel art
                        </li>
                        <li>Pixel Art for users in lobby</li>
                    </ul>

                    <li>Light && Darkmode</li>
                </ul>
            </div>
        </div>
    </div>
);

export default FlagGame;

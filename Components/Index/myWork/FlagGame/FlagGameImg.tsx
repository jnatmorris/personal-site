import React from "react";

import Image from "next/image";

import FlagGameGameDark from "../../img/FlagGameGameDark.png";
import FlagGameGameLight from "../../img/FlagGameGameLight.png";

import FlagGameLobbyDark from "../../img/FlagGameLobbyDark.png";
import FlagGameLobbyLight from "../../img/FlagGameLobbyLight.png";

const FlagGameGame: React.FC = () => (
    <div className="lg:w-1/2 lg:place-self-end ">
        <div className="hidden dark:block">
            <Image
                layout="responsive"
                src={FlagGameGameDark}
                width={1170}
                height={2532}
                quality={100}
                className="rounded-xl"
                placeholder="blur"
                alt="UniSystem"
            />
        </div>
        <div className="block shadow-2xl dark:hidden">
            <Image
                layout="responsive"
                src={FlagGameGameLight}
                width={1170}
                height={2532}
                quality={100}
                className="rounded-xl"
                placeholder="blur"
                alt="UniSystem"
            />
        </div>
    </div>
);

const FlagGameLobby: React.FC = () => (
    <div className="lg:w-1/2 lg:place-self-center">
        <div className="hidden shadow-2xl dark:block">
            <Image
                layout="responsive"
                src={FlagGameLobbyLight}
                width={1170}
                height={2532}
                quality={100}
                className=" rounded-xl"
                placeholder="blur"
                alt="UniSystem"
            />
        </div>
        <div className="block dark:hidden">
            <Image
                layout="responsive"
                src={FlagGameLobbyDark}
                width={1170}
                height={2532}
                quality={100}
                className="rounded-xl"
                placeholder="blur"
                alt="UniSystem"
            />
        </div>
    </div>
);

export { FlagGameLobby, FlagGameGame };

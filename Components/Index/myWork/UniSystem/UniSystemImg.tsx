import * as React from "react";
import Image from "next/image";

import UniSystemLight from "../../img/UniSystemLight.png";
import UniSystemDark from "../../img/UniSystemDark.png";

import UniSystemLoginLight from "../../img/UniSystemLoginLight.png";
import UniSystemLoginDark from "../../img/UniSystemLoginDark.png";

const UniSystemImgHome: React.FC = () => (
    <>
        <div className="col-span-1" />

        <div className="w-2/5 col-span-1 place-self-end">
            {/* darkmode hidden */}
            <div className="dark:hidden">
                <Image
                    layout="responsive"
                    src={UniSystemDark}
                    width={1170}
                    height={2532}
                    quality={100}
                    className="rounded-xl "
                    placeholder="blur"
                    alt="UniSystem"
                />
            </div>

            {/* darkmode show */}
            <div className="hidden dark:block">
                <Image
                    layout="responsive"
                    src={UniSystemLight}
                    width={1170}
                    height={2532}
                    quality={100}
                    className="rounded-xl "
                    placeholder="blur"
                    alt="UniSystem"
                />
            </div>
        </div>
    </>
);

const UniSystemImgLogin: React.FC = () => (
    <>
        <div className="col-span-1" />

        <div className="w-2/5 col-span-1 place-self-end">
            {/* darkmode hidden */}
            <div className="dark:hidden">
                <Image
                    layout="responsive"
                    src={UniSystemLoginDark}
                    width={1170}
                    height={2532}
                    quality={100}
                    className="rounded-xl "
                    placeholder="blur"
                    alt="UniSystem"
                />
            </div>

            {/* darkmode show */}
            <div className="hidden dark:block">
                <Image
                    layout="responsive"
                    src={UniSystemLoginLight}
                    width={1170}
                    height={2532}
                    quality={100}
                    className="rounded-xl "
                    placeholder="blur"
                    alt="UniSystem"
                />
            </div>
        </div>
    </>
);

export { UniSystemImgHome, UniSystemImgLogin };

import * as React from "react";
import Link from "next/link";
import { m, Variant } from "framer-motion";

interface Props {
    location: string;
}

const Header: React.FC<Props> = ({ location }) => {
    const whileTapScale: Variant = {
        scale: 0.9,
    };

    return (
        <div className="pt-2 mx-5 bg-transparent">
            <div className="grid w-full">
                <div className="space-x-5 justify-self-end">
                    <m.button whileTap={whileTapScale}>
                        <Link href={"/"}>
                            <a
                                className={
                                    location === "index"
                                        ? "text-xl decoration-sky-500 underline-offset-2"
                                        : "text-xl no-underline"
                                }
                            >
                                Home
                            </a>
                        </Link>
                    </m.button>

                    <m.button whileTap={whileTapScale}>
                        <Link href={"/about"}>
                            <a
                                className={
                                    location === "about"
                                        ? "text-xl decoration-sky-500 underline-offset-2"
                                        : "text-xl no-underline"
                                }
                            >
                                About
                            </a>
                        </Link>
                    </m.button>
                </div>
            </div>
        </div>
    );
};

export default Header;

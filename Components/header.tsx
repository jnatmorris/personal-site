import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Variant } from "framer-motion";

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
                    <motion.button whileTap={whileTapScale}>
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
                    </motion.button>

                    <motion.button whileTap={whileTapScale}>
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
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Header;

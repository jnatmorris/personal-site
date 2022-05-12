import * as React from "react";
import Link from "next/link";
import { m, Variant } from "framer-motion";

interface Props {
    route: string;
}

const Header: React.FC<Props> = ({ route }) => {
    const ScaleVariant: Variant = {
        scale: 0.9,
    };

    const opacityVariants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.75,
            },
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.75,
            },
        },
    };

    return (
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={opacityVariants}
            className="grid"
        >
            <div className="space-x-5 justify-self-end">
                <m.button whileTap={ScaleVariant}>
                    <Link href={"/"}>
                        <a
                            className={
                                route === "/"
                                    ? "text-xl decoration-sky-500 underline-offset-2 lg:text-2xl"
                                    : "text-xl no-underline opacity-[0.6] hover:opacity-80 lg:text-2xl"
                            }
                        >
                            Home
                        </a>
                    </Link>
                </m.button>

                <m.button whileTap={ScaleVariant}>
                    <Link href={"/about"}>
                        <a
                            className={
                                route === "/about"
                                    ? "text-xl decoration-sky-500 underline-offset-2 lg:text-2xl"
                                    : "text-xl no-underline opacity-[0.6] hover:opacity-80 lg:text-2xl"
                            }
                        >
                            About
                        </a>
                    </Link>
                </m.button>
            </div>
        </m.div>
    );
};

export default Header;

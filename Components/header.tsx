import * as React from "react";
import Link from "next/link";
import { m, Variant } from "framer-motion";
import { useRouter } from "next/router";
import { opacityVariants } from "./Layout";

const Header: React.FC = () => {
    const whileTapScale: Variant = {
        scale: 0.9,
    };

    const route = useRouter();

    return (
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={opacityVariants}
            className="grid"
        >
            <div className="space-x-5 justify-self-end">
                <m.button whileTap={whileTapScale}>
                    <Link href={"/"}>
                        <a
                            className={
                                route.pathname === "/"
                                    ? "text-xl decoration-sky-500 underline-offset-2 lg:text-3xl"
                                    : "text-xl no-underline lg:text-3xl"
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
                                route.pathname === "/about"
                                    ? "text-xl decoration-sky-500 underline-offset-2 lg:text-3xl"
                                    : "text-xl no-underline lg:text-3xl"
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

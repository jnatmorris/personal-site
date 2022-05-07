import * as React from "react";
import Link from "next/link";
import { m, Variant } from "framer-motion";
import { useRouter } from "next/router";

const Header: React.FC = () => {
    const whileTapScale: Variant = {
        scale: 0.9,
    };

    const route = useRouter();

    return (
        <div className="grid">
            <div className="space-x-5 justify-self-end">
                <m.button whileTap={whileTapScale}>
                    <Link href={"/"}>
                        <a
                            className={
                                route.pathname === "/"
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
                                route.pathname === "/about"
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
    );
};

export default Header;

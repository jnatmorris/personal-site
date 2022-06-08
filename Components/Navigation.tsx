import React from "react";
import Link from "next/link";
import { m, Variant } from "framer-motion";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
    const route = useRouter();

    const ScaleVariant: Variant = {
        scale: 0.9,
    };

    const opacityVariants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.25,
            },
        },
    };

    return (
        <m.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={opacityVariants}
            className="mx-[5vw] grid pt-[2vh]"
        >
            <div className="space-x-5 justify-self-end">
                <m.button whileTap={ScaleVariant}>
                    <Link href={"/"}>
                        <a
                            className={
                                route.pathname === "/"
                                    ? "text-xl decoration-sky-500 underline-offset-2"
                                    : "text-xl no-underline opacity-[0.6] hover:opacity-80"
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
                                route.pathname === "/about"
                                    ? "text-xl decoration-sky-500 underline-offset-2"
                                    : "text-xl no-underline opacity-[0.6] hover:opacity-80"
                            }
                        >
                            About
                        </a>
                    </Link>
                </m.button>
            </div>
        </m.header>
    );
};

export default Navigation;

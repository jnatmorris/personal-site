import * as React from "react";
import { m } from "framer-motion";

interface Props {
    string: string;
    options: {
        // class for string of text (for tailwindcss)
        stringClass?: string;
        // font family
        font?: string;
        // access to div's class (for tailwindcss)
        outerDivClass?: string;
        // number of seconds between letters printed on screen
        delayWrite: number;
        // visible or invisible cursor
        showCursor?: boolean;
        // color of cursor
        cursorColor?: string;
        // show cursor post write (only visible if showCursor is true)
        infiniteCCursor?: boolean;
        // callback run when whole string is visible on string
        onComplete?(): void;
    };
}

const TypeWriter: React.FC<Props> = ({ string, options }) => {
    const {
        stringClass,
        font,
        outerDivClass,
        delayWrite,
        showCursor,
        cursorColor,
        infiniteCCursor,
        onComplete = () => null,
    } = options;

    const [time, setTime] = React.useState<number>(0);

    React.useEffect(() => {
        const timeCountId = setInterval(() => {
            if (time >= string.length) {
                clearInterval(timeCountId);

                onComplete();
            } else {
                setTime((prev) => prev + 1);
            }
        }, delayWrite * 100);
        return () => {
            clearInterval(timeCountId);
        };
    }, [time]);

    return (
        <div className={"flex" + " " + outerDivClass}>
            <h1
                style={font ? { fontFamily: font } : {}}
                className={stringClass}
            >
                {string.slice(0, time)}
            </h1>

            {showCursor && (
                <m.h1
                    className={"w-2" + " " + cursorColor}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        repeat: infiniteCCursor ? Infinity : string.length,
                    }}
                />
            )}
        </div>
    );
};

export default TypeWriter;

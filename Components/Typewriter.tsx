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
        // number of seconds between letters printed on screen (seconds)
        timeBetweenLetters?: number;
        // time before writing
        delayWrite?: number;
        // visible or invisible cursor
        showCursor?: boolean;
        // remove cursor when on completed typing
        removeCursorOnComplete?: boolean;
        // color of cursor
        cursorColor?: string;
        // show cursor post write (only visible if showCursor is true)
        infiniteCCursor?: boolean;
        // callback run when whole string is visible on string
        onComplete?(): void;
        // when user clicks
        onClick?(): void;
    };
}

const TypeWriter: React.FC<Props> = ({ string, options }) => {
    const {
        stringClass,
        font,
        outerDivClass,
        showCursor,
        cursorColor = false,
        removeCursorOnComplete = false,
        infiniteCCursor = false,
        timeBetweenLetters = 2,
        onComplete = () => null,
        onClick = () => null,
    } = options;

    const [time, setTime] = React.useState<number>(0);
    const [finishedTyping, setFinishedTyping] = React.useState<boolean>(false);

    React.useEffect(() => {
        const timeCountId = setInterval(() => {
            if (time >= string.length) {
                clearInterval(timeCountId);

                // run callback
                onComplete();

                // if user chooses to remove cursor, then set state to true and remove
                removeCursorOnComplete ? setFinishedTyping(true) : null;
            } else {
                setTime((prev) => prev + 1);
            }
        }, timeBetweenLetters * 1000);

        return () => {
            clearInterval(timeCountId);
        };
    }, [time]);

    return (
        <div className={"flex" + " " + outerDivClass} onClick={() => onClick()}>
            <h1
                style={font ? { fontFamily: font } : {}}
                className={stringClass}
            >
                {string.slice(0, time)}
            </h1>

            {showCursor && !finishedTyping && (
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

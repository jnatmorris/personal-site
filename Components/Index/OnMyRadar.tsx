import * as React from "react";

const OnMyRadar: React.FC = () => {
    return (
        <div>
            <h3 className="pb-[1vh] text-2xl lg:text-4xl">On my radar</h3>

            <ul className="list-outside text-xl lg:text-2xl ">
                <li>NextJS</li>
                <ul>
                    <li>Using SRR</li>
                    <li>Incorporating firebase</li>
                </ul>

                <li>More spring based animation libraries</li>
                <li>
                    Building chromium based extensions. You can find my first
                    extension{" "}
                    <a
                        className="font-normal underline decoration-blue-500 underline-offset-1"
                        href="https://github.com/JNat07/Beep-Boop"
                    >
                        here
                    </a>
                    .
                </li>
            </ul>
        </div>
    );
};
export default OnMyRadar;

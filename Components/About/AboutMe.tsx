import React from "react";

const AboutMe: React.FC = () => {
    return (
        <>
            <div className="ml-[0.5vw] mr-[2vw] space-y-8 pr-[2vw] lg:pr-[0vw]">
                <h2 className="text-xl font-normal leading-relaxed dark:text-gray-200">
                    I&apos;m originally from Chicago IL, and currently studying
                    abroad a BSc. in Computer Science as well as perusing a BA.
                    in Global Economics and Management, as my minor, at Jacobs
                    University in Bremen Germany. During the summers I&apos;m
                    based in The Big Apple &#x1F34E;{" "}
                    <span className="text-lg text-slate-700/80 dark:text-slate-400/80">
                        (NYC)
                    </span>
                    .
                </h2>
                <h2 className="text-xl font-normal leading-relaxed dark:text-gray-200">
                    If not studying, I spend my free time programming, traveling
                    with family/friends, exercising, and working towards a
                    private pilots license.
                </h2>
            </div>
        </>
    );
};

export default AboutMe;

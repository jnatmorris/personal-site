import React from "react";
import { Typewriter } from "react-simple-typewriter";
const ChatApp: React.FC = () => {
    return (
        <div className="space-y-[3vh] lg:px-[0.75vw]">
            <div>
                <div className="flex items-center space-x-[1vw]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    <h2 className="text-xl text-slate-700 dark:text-slate-200 lg:py-[2vh] lg:text-center lg:text-4xl">
                        <Typewriter
                            words={["The ChatApp"]}
                            cursor={true}
                            cursorStyle={"_"}
                        />
                    </h2>
                </div>

                <h3 className="text-2xl font-normal leading-relaxed lg:leading-loose">
                    <a
                        href="https://github.com/JNat07/React-Socket.IO-ChatApp"
                        className="font-normal underline decoration-blue-500 underline-offset-2 "
                    >
                        The ChatApp
                    </a>{" "}
                    was my first ReactJS project. Allows for multidirectional
                    communication between clients and server using an exspress
                    and socketio backend.{" "}
                    <a
                        className="font-normal underline decoration-blue-600 underline-offset-1"
                        href=" https://instant-chatapp-react-socketio.herokuapp.com/"
                    >
                        Feel free to try it out here
                    </a>
                    . As my first project, it has only been styled for mobile
                    devices. One day when I may come back to it.
                </h3>
            </div>
            <ul className="text-2xl">
                <li>Text communication</li>
                <li>Accepts emojis</li>
                <li>Joining and leaving messages</li>
                <li>See how many users and usernames of who is online</li>
                <li>Light && Dark mode</li>
            </ul>
        </div>
    );
};

export default ChatApp;

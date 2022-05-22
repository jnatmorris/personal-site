import * as React from "react";
import Image from "next/image";

// Chat images
import ChatAppChatLight from "../../img/ChatAppChatLight.png";
import ChatAppChatDark from "../../img/ChatAppChatDark.png";

const ChatAppImgLight: React.FC = () => (
    <div className="w-1/2 place-self-end">
        <div className="">
            <Image
                layout="responsive"
                src={ChatAppChatLight}
                width={1170}
                height={2532}
                quality={100}
                className="rounded-2xl"
                placeholder="blur"
                alt="UniSystem"
            />
        </div>
    </div>
);

const ChatAppImgDark: React.FC = () => (
    <div className="w-1/2 place-self-center">
        <Image
            layout="responsive"
            src={ChatAppChatDark}
            width={1170}
            height={2532}
            quality={100}
            className="rounded-xl"
            placeholder="blur"
            alt="UniSystem"
        />
    </div>
);

export { ChatAppImgDark, ChatAppImgLight };

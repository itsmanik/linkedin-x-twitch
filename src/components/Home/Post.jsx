import rand from "random-hex";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

/* eslint-disable react/prop-types */

function Post(props) {
    const style = { backgroundColor: rand.generate() };
    return (
        <div className="m-auto" style={style}>
            <div className="flex hover:translate-x-1 transition-all hover:-translate-y-1 cursor-pointer flex-col max-w-md h-[32.5rem] p-4 space-y-6 overflow-hidden shadow-2xl bg-darkBlack border border-darkGray dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="flex space-x-4">
                    <img
                        alt=""
                        src={props.src}
                        className="object-cover w-8 h-8 rounded-full shadow bg-gray-500 dark:bg-gray-500"
                    />
                    <div className="flex flex-col space-y-1">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-sm font-semibold"
                        >
                            {props.name}
                        </a>
                        <span className="text-xs dark:text-gray-600 text-gray-400">
                            {props.time} hours ago
                        </span>
                    </div>
                </div>
                <div>
                    <img
                        src={props.postSrc}
                        alt=""
                        className="object-cover w-full mb-4 h-60 sm:h-48 bg-gray-500 dark:bg-gray-500"
                    />
                    <h2 className="mb-1 text-xl font-semibold">
                        {props.title}
                    </h2>
                    <p className="text-sm text-gray-400 dark:text-gray-600">
                        {props.body}
                    </p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <button
                            aria-label="Share this post"
                            type="button"
                            className="p-2 text-center"
                        >
                            <Share2
                                size={20}
                                className="hover:stroke-purpleLogo text-gray-400"
                            />
                        </button>
                    </div>
                    <div className="flex space-x-2 text-sm text-gray-400 dark:text-gray-600">
                        <button
                            type="button"
                            className="flex items-center p-1 space-x-1.5"
                        >
                            <MessageCircle
                                size={20}
                                className="hover:stroke-purpleLogo"
                            />
                            <span>30</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center p-1 space-x-1.5 hover:color-purpleLogo hover:stroke-purpleLogo"
                        >
                            <ThumbsUp
                                size={20}
                                className="hover:stroke-purpleLogo"
                            />
                            <span>{props.likes}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

const MiniNav = () => {
    return (
        <div>
            <div className="border-b-2 max-w-xl border-gray-200 dark:border-neutral-700">
                <nav className="-mb-0.5 flex space-x-6">
                    <a
                        className="py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-purpleLogo focus:outline-none focus:text-purpleLogo dark:text-neutral-500 dark:hover:text-blue-500"
                        href="#"
                    >
                        Starred{" "}
                    </a>
                    <a
                        className="py-4 px-1 inline-flex items-center gap-2 border-b-2 border-purpleLogo text-sm font-medium whitespace-nowrap text-purpleLogo focus:outline-none focus:text-purpleLogo dark:text-blue-500"
                        href="#"
                        aria-current="page"
                    >
                        New Message{" "}
                    </a>
                    <a
                        className="py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-purpleLogo focus:outline-none focus:text-purpleLogo dark:text-neutral-500 dark:hover:text-blue-500"
                        href="#"
                    >
                        Unread{" "}
                        <span className="ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-[#a970ff] text-white dark:bg-purpleLogo dark:text-white">
                            9+
                        </span>
                    </a>
                    <a
                        className="py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-purpleLogo focus:outline-none focus:text-purpleLogo dark:text-neutral-500 dark:hover:text-blue-500"
                        href="#"
                    >
                        InMail{" "}
                        <span className="ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                            2
                        </span>
                    </a>
                    <a
                        className="py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-purpleLogo focus:outline-none focus:text-purpleLogo dark:text-neutral-500 dark:hover:text-blue-500"
                        href="#"
                    >
                        My Connections{" "}
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default MiniNav;

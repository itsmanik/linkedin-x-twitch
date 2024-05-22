import { useEffect, useState, useRef } from "react";

const dropdownNavs = [
    {
        label: "Products",
        navs: [
            {
                title: "Analytics",
                desc: "Duis aute irure dolor in reprehenderit",
                path: "javascript:void(0)",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                    </svg>
                ),
            },
            {
                title: "Reports",
                desc: "Duis aute irure dolor in reprehenderit",
                path: "javascript:void(0)",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                    </svg>
                ),
            },
        ],
    },
    {
        label: "Resources",
        navs: [
            {
                title: "Blog",
                desc: "Duis aute irure dolor in reprehenderit",
                path: "javascript:void(0)",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>
                ),
            },
            {
                title: "Community",
                desc: "Duis aute irure dolor in reprehenderit",
                path: "javascript:void(0)",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                    </svg>
                ),
            },
        ],
    },
    {
        label: "Company",
        navs: [
            {
                title: "About us",
                desc: "Duis aute irure dolor in reprehenderit",
                path: "javascript:void(0)",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                title: "Careers",
                desc: "Duis aute irure dolor in reprehenderit",
                path: "javascript:void(0)",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>
                ),
            },
        ],
    },
];

const ProfileDropDown = (props) => {
    const [state, setState] = useState(false);
    const profileRef = useRef();

    const navigation = [
        { title: "Dashboard", path: "javascript:void(0)" },
        { title: "Settings", path: "javascript:void(0)" },
        { title: "Log out", path: "javascript:void(0)" },
    ];

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false);
        };
        document.addEventListener("click", handleDropDown);
    }, []);

    return (
        <div className={`relative ${props}`}>
            <div className="flex justify-center items-center space-x-4">
                <button
                    ref={profileRef}
                    className="w-5 h-5 outline-none rounded-full ring-offset-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        focusable="false"
                        aria-hidden="true"
                        role="presentation"
                        className="w-full h-full rounded-full fill-white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5 7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div className="lg:hidden">
                    <span className="block">Manik S H</span>
                    <span className="block text-sm text-gray-500">
                        manik.hilalpure@gmail.com
                    </span>
                </div>
            </div>
            <ul
                className={`bg-white top-12 right-0 hidden lg:inline-block mt-5 space-y-5 lg:absolute lg:border lg:rounded-lg lg:text-sm lg:w-52 lg:shadow-lg lg:space-y-0 lg:mt-0 ${
                    state ? "" : "lg:hidden"
                }`}
            >
                {navigation.map((item, idx) => (
                    <li key={idx + 238}>
                        <a
                            key={idx}
                            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                            href={item.path}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
                <button
                    id="theme-toggle"
                    type="button"
                    className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                >
                    <svg
                        id="theme-toggle-dark-icon"
                        className="hidden w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg
                        id="theme-toggle-light-icon"
                        className="hidden w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </ul>
        </div>
    );
};

const NavBar = () => {
    const [state, setState] = useState(false);
    const [drapdownState, setDrapdownState] = useState({
        isActive: false,
        idx: null,
    });

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        {
            title: "Browse",
            path: "javascript:void(0)",
            isDrapdown: true,
            navs: dropdownNavs,
        },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu"))
                setDrapdownState({ isActive: false, idx: null });
        };
    }, []);

    return (
        <>
            <nav
                className={`relative shadow shadow-black z-30 bg-[#18181B] w-full lg:fixed lg:text-sm lg:border-none ${
                    state ? "shadow-lg rounded-b-xl lg:shadow-none" : ""
                }`}
            >
                <div className="items-center gap-x-5 px-2 max-w-screen-xl mx-auto lg:flex lg:px-4">
                    <div className="flex items-center justify-between py-2 lg:py-3 lg:block">
                        <a href="javascript:void(0)">
                            <img
                                src="/static/images/logo.png"
                                width={30}
                                height={20}
                                alt="Linkedin-x-Twitch Logo"
                            />
                        </a>
                        <div className="lg:hidden">
                            <button
                                className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {state ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`nav-menu flex-1 pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                            state ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center space-y-6 lg:justify-between lg:flex lg:space-x-6 lg:space-y-0">
                            {navigation.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        {item.isDrapdown ? (
                                            <button
                                                className="w-full flex items-center justify-between gap-1 text-white font-bold hover:text-purpleLogo"
                                                onClick={() =>
                                                    setDrapdownState({
                                                        idx,
                                                        isActive:
                                                            !drapdownState.isActive,
                                                    })
                                                }
                                            >
                                                {item.title}
                                            </button>
                                        ) : (
                                            <a
                                                href={item.path}
                                                className="block text-gray-700 hover:text-indigo-600"
                                            >
                                                {item.title}
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                            <form className="flex flex-1 justify-center items-center space-x-2 rounded-lg">
                                <input
                                    className="w-full py-2 text-gray-200 border border-[#6b6b6b] rounded-l-lg bg-transparent pl-2 appearance-none placeholder-gray-500 outline-none focus:border-purpleLogo sm:w-80"
                                    type="text"
                                    placeholder="Search"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 p-2 !ml-0 cursor-pointer box-content w-5 rounded-r-lg flex-none text-gray-300 bg-[#2F2F35]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </form>
                            <div className="flex items-center justify-center gap-x-6 space-y-3 lg:flex lg:space-y-0">
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="block py-1 px-3 text-white font-bold text-center bg-[#2F2F35] hover:bg-[#3f3f45] border rounded lg:border-none"
                                    >
                                        Log In
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="block py-2 font-bold px-3 text-center text-white bg-[#9147FF] hover:bg-[#822fff] active:bg-indigo-700 active:shadow-none rounded shadow lg:inline"
                                    >
                                        Sign Up
                                    </a>
                                </li>
                            </div>
                            <ProfileDropDown />
                        </ul>
                    </div>
                </div>
            </nav>
            {state ? (
                <div
                    className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm lg:hidden"
                    onClick={() => setState(false)}
                ></div>
            ) : (
                ""
            )}
        </>
    );
};

export default NavBar;

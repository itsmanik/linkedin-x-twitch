import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <aside className="h-screen relative mt-12">
                <nav className="h-full flex flex-col bg-[#1F1F23]">
                    <div className="py-4 pb-2 flex justify-between p-2 items-center">
                        <span
                            className={`overflow-hidden transition-all ml-3 font-medium text-lightWhite ${
                                expanded ? "w-15" : "hidden"
                            }`}
                        >
                            Browse
                        </span>
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="p-1.5 rounded-lg hover:bg-darkGray text-lightWhite"
                        >
                            {expanded ? (
                                <ChevronFirst size={20} />
                            ) : (
                                <ChevronLast size={20} />
                            )}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 p-1">{children}</ul>
                    </SidebarContext.Provider>
                </nav>
            </aside>
        </>
    );
}

export function SidebarItem(props) {
    const { expanded } = useContext(SidebarContext);
    const [isActive, setIsActive] = useState(false);

    return (
        <NavLink to={props.location} className={({ isActive }) => (isActive ? setIsActive(true) : setIsActive(false))} >
            <li
                className={`relative flex items-center py-2 px-3 my-1 font-normal rounded-md cursor-pointer transition-colors group ${
                    isActive
                        ? "bg-purpleLogo text-white"
                        : "hover:bg-darkGray text-lightWhite"
                }`}
                onClick={console.log("test")}
            >
                {props.icon}
                <span
                    className={`overflow-hidden transition-all text-sm ${
                        expanded ? "w-40 ml-3" : "w-0"
                    }`}
                >
                    {props.text}
                </span>
                {props.batch && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-red-700 ${
                            expanded ? "" : "top-2"
                        }`}
                    ></div>
                )}

                {!expanded && (
                    <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                        {props.text}
                    </div>
                )}
            </li>
        </NavLink>
    );
}

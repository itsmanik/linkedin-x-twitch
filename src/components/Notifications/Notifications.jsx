import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemm = {
    hidden: { opacity: 0, filter: "blur(3px)", transform: "translateX(-10px)" },
    show: { opacity: 1, filter: "blur(0)", transform: "translateX(0px)" },
};

const members = [
    {
        avatar: "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831590218/linkedin_logo?e=1724284800&v=beta&t=EFQC4O49x5jG7omhUyBtiQivld69vnPeiq474L4sTBk",
        name: "New post you might like",
        email: "2 min ago",
    },
    {
        avatar: "https://media.licdn.com/dms/image/C4E0BAQEHzGrkE_U23Q/company-logo_100_100/0/1630636899456/linkedin_news_india_logo?e=1724284800&v=beta&t=seqVaNW3J001WtpMbuLazdM6RMOllG3JAXaNgMPGjTI",
        name: "Your resume has been selected",
        email: "5 min ago",
    },
    {
        avatar: "https://media.licdn.com/dms/image/C4E0BAQEHzGrkE_U23Q/company-logo_100_100/0/1630636899456/linkedin_news_india_logo?e=1724284800&v=beta&t=seqVaNW3J001WtpMbuLazdM6RMOllG3JAXaNgMPGjTI",
        name: "The best company to work with in 2024",
        email: "49 min ago",
    },
    {
        avatar: "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831590218/linkedin_logo?e=1724284800&v=beta&t=EFQC4O49x5jG7omhUyBtiQivld69vnPeiq474L4sTBk",
        name: "We are always here to help",
        email: "1 hr ago",
    },
    {
        avatar: "https://media.licdn.com/dms/image/C4E0BAQEHzGrkE_U23Q/company-logo_100_100/0/1630636899456/linkedin_news_india_logo?e=1724284800&v=beta&t=seqVaNW3J001WtpMbuLazdM6RMOllG3JAXaNgMPGjTI",
        name: "Meet the youngest coder in the world",
        email: "6 hr ago",
    },
    {
        avatar: "https://media.licdn.com/dms/image/C4E0BAQEHzGrkE_U23Q/company-logo_100_100/0/1630636899456/linkedin_news_india_logo?e=1724284800&v=beta&t=seqVaNW3J001WtpMbuLazdM6RMOllG3JAXaNgMPGjTI",
        name: "We all want te become rich, but are we willing to work?",
        email: "9 hr ago",
    },
    {
        avatar: "https://media.licdn.com/dms/image/C4E0BAQEHzGrkE_U23Q/company-logo_100_100/0/1630636899456/linkedin_news_india_logo?e=1724284800&v=beta&t=seqVaNW3J001WtpMbuLazdM6RMOllG3JAXaNgMPGjTI",
        name: "AIML latest tech released in china",
        email: "22 hr ago",
    },
    {
        avatar: "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831590218/linkedin_logo?e=1724284800&v=beta&t=EFQC4O49x5jG7omhUyBtiQivld69vnPeiq474L4sTBk",
        name: "Kerala surpasses New Delhi in economics",
        email: "3 days ago",
    },
    {
        avatar: "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831590218/linkedin_logo?e=1724284800&v=beta&t=EFQC4O49x5jG7omhUyBtiQivld69vnPeiq474L4sTBk",
        name: "World's largest contest to take part",
        email: "3 Weeks ago",
    },
];

const Home = () => {
    return (
        <div className="text-white font-normal w-full mt-16 h-[90vh] overflow-y-scroll overflow-x-hidden p-8">
            <div className="max-w-2xl">
                <div className="items-start justify-between sm:flex">
                    <div>
                        <h1 className="text-xl font-bold">
                            Manage your Notifications
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Latest ones
                        </p>
                    </div>
                </div>
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-7 ml-6 divide-y divide-darkGray"
                >
                    {members.map((item, idx) => (
                        <motion.li
                            variants={itemm}
                            key={idx}
                            className="py-2 px-2 hover:bg-darkGray cursor-pointer flex justify-between items-center"
                        >
                            <div className="flex gap-3">
                                <img
                                    src={item.avatar}
                                    className="flex-none w-12 h-12 rounded-sm"
                                />
                                <div>
                                    <span className="block text-sm text-lightWhite font-semibold">
                                        {item.name}
                                    </span>
                                    <span className="block text-sm text-gray-600">
                                        {item.email}
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <Trash2
                                    size={20}
                                    className="cursor-pointer hover:stroke-red-600"
                                />
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default Home;

import { Trash2 } from "lucide-react";

const members = [
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Your resume has been resumed",
        email: "john@example.com",
    },
    {   
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Chris bondi",
        email: "chridbondi@example.com",
    },
    {
        avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "yasmine",
        email: "yasmine@example.com",
    },
    {
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
        name: "Joseph",
        email: "joseph@example.com",
    },
];

const Home = () => {
    return (
        <div className="text-white w-full mt-16 h-[90vh] overflow-y-scroll overflow-x-hidden p-8">
            <div className="max-w-2xl">
                <div className="items-start justify-between sm:flex">
                    <div>
                        <h1 className="text-xl font-bold">
                            Explore opportunities
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Based on your profile and search history
                        </p>
                    </div>
                </div>
                <ul className="mt-7 ml-6 divide-y divide-darkGray">
                    {members.map((item, idx) => (
                        <li
                            key={idx}
                            className="py-2 flex justify-between items-center"
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;

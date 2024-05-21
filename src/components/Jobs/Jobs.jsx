import Job from "./Job";

const Home = () => {
    return (
        <div className="text-white w-full mt-16 h-[90vh] overflow-y-scroll overflow-x-hidden p-8">
            <h1 className="text-xl font-bold">Explore opportunities</h1>
            <p className="text-gray-500 text-sm">
                Based on your profile and search history
            </p>
            <Job />
        </div>
    );
};

export default Home;

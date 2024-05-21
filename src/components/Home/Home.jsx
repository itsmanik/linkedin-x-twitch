import Posts from "./Posts";

const Home = () => {
    return (
        <div className="text-white w-full mt-16 h-[90vh] overflow-y-scroll overflow-x-hidden p-8">
            <Posts />
        </div>
    );
};

export default Home;

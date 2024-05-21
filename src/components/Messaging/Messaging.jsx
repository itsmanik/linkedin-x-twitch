import MiniNav from "./MiniNav";
import InputMessage from "./InputMessage";

const Messaging = () => {
    return (
        <div className="text-white w-full mt-16 h-[90vh] overflow-y-scroll overflow-x-hidden p-8">
            <MiniNav />
            <InputMessage />
        </div>
    );
};

export default Messaging;

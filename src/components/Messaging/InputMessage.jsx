const InputMessage = () => {
    return (
        <div>
            <section className="p-6 dark:text-gray-800">
                <form
                    noValidate=""
                    className="container w-full max-w-xl px-8 my-4 space-y-6 rounded-md shadow dark:bg-gray-50"
                >
                    <h2 className="w-full leading-tight">
                        Write a new message
                    </h2>
                    <div>
                        <input
                            id="name"
                            type="text"
                            placeholder="Multiple names"
                            required=""
                            className="block bg-darkGray text-sm w-full py-2 px-3 rounded focus:border-purpleLogo border border-transparent outline-none dark:bg-gray-100"
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            type="text"
                            placeholder="Write a message..."
                            rows={8}
                            className="block bg-darkGray resize-y w-full py-2 px-3 text-sm rounded autoexpand focus:border-purpleLogo border border-transparent outline-none dark:bg-gray-100"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="reset"
                            className="px-10 bg-purpleLogo ml-auto py-2 font-bold rounded shadow focus:outline-none hover:bg-[#7542c1] transition-all dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default InputMessage;



const Signup = () => {
    return (
    <>
        <div id="boundary" className="p-4 h-screen w-screen flex items-center justify-center bg-white">
                <div className="h-2/3 w-2/3 shadow-md hover:shadow-2xl rounded flex flex-col bg-amber-300 items-center justify-evenly">
                    <div className="text-center text-2xl font-bold">Signup to Jumia</div>
                        <input
                            type="form" 
                            placeholder="Enter your name"
                            className="w-2/3 h-10 rounded-md p-2 hover:outline">
                        </input>
                        <input
                            type="form" 
                            placeholder="Enter your email"
                            className="w-2/3 h-10 rounded-md p-2 hover:outline">
                        </input>
                        <input
                            type="form" 
                            placeholder="Enter password"
                            className="w-2/3 h-10 rounded-md p-2 hover:outline">
                        </input>
                        <input
                            type="form" 
                            placeholder="Confirm password"
                            className="w-2/3 h-10 rounded-md p-2 hover:outline">
                        </input>
                        <button className="h-10 w-20 bg-amber-500 rounded-md text-md text-black hover:scale-110">Singup</button>
                </div>
        </div>
    </>
)
}

export default Signup
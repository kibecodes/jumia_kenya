import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline"

const Help = () => {

    return (
        <>
            <div id="drop" className="h-fit w-52  flex-col justify-evenly p-2 shadow-xl absolute">
                
                <div className="flex-col p-2 space-y-2">
                    <div className="flex-row bg-white hover:bg-slate-300 hover:font-semibold p-2 rounded-sm cursor-pointer">
                        <div className="text-center">My Account</div>
                    </div>

                    <div className="flex-row space-x-2 bg-white hover:bg-slate-300 hover:font-semibold p-2 rounded-sm cursor-pointer">
                        <p className="text-center">Orders</p>
                    </div>
                    <div className="flex-row space-x-2 bg-white hover:bg-slate-300 hover:font-semibold p-2 rounded-sm cursor-pointer">
                        <p className="text-center">Saved Items</p>
                    </div>

                    <div id="button" className="flex flex-row h-fit w-fit bg-amber-500 rounded-md cursor-pointer text-center p-2 text-white hover:bg-amber-600">
                        <ChatBubbleLeftEllipsisIcon className="h-6 w-6"/>
                        <p>LIVE CHAT</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help
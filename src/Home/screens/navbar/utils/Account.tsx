import { UserIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';


const Account = () => {

    return (
    <>    
            <div id="drop" className="h-fit w-52  flex-col justify-evenly p-2 shadow-xl absolute">
                <div id="button" className="h-10 w-30 bg-amber-500 rounded-md cursor-pointer text-center p-2 text-white hover:bg-amber-600">
                    SIGN IN
                </div>
                <div className="flex-col p-2 space-y-2">
                    <div className="flex-row bg-white hover:bg-slate-300 hover:font-semibold p-2 rounded-sm cursor-pointer">
                        <UserIcon className='h-6 w-6'/>
                        <div className="text-center">My Account</div>
                    </div>

                    <div className="flex-row space-x-2 bg-white hover:bg-slate-300 hover:font-semibold p-2 rounded-sm cursor-pointer">
                        <ShoppingBagIcon className='h-6 w-6'/>
                        <p className="text-center">Orders</p>
                    </div>
                    <div className="flex-row space-x-2 bg-white hover:bg-slate-300 hover:font-semibold p-2 rounded-sm cursor-pointer">
                        <HeartIcon className='h-6 w-6'/>
                        <p className="text-center">Saved Items</p>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Account
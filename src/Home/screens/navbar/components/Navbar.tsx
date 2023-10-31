import { useState } from 'react';
import { CSSProperties } from 'react'

import { StarIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

import Account from '../utils/Account';
import Help from '../utils/Help';
import ReactDOM from 'react-dom';


const Navbar = () => {
    const [isAccountVisible, setAccountIsVisible] = useState(false)
    const [isHelpVisible, setIsHelpVisible] = useState(false)

    const toggleAccountVisibility = () => {
        setAccountIsVisible(!isAccountVisible)
    };

    const toggleHelpVisibility = () => {
        setIsHelpVisible(!isHelpVisible)
    }

    const backgroundImage: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2022/W48/FreeDelivery/KE_FreeDelivery_1122_STB.gif')",
      };
    
 
    return (
        <>            
            <div id="navbar" className="w-fill flex flex-col dark:text-white bg-white">
                <div id='sales-gif' className='h-14 w-full bg-cover' style={backgroundImage}>
                </div>

                <div id="sell" className="p-2 text-black cursor-pointer hover:underline hover:text-amber-500">
                    sell on jumia

                </div>

                <div id="sticky" className="flex flex-row justify-evenly pl-2 p-4 bg-slate-500">
                        <div id="title&logo" className="text-lg text-black dark:text-white flex p-3 space-x-2">
                            <h1 className='font-bold font-sans cursor-pointer'>Jumia</h1>
                            <StarIcon className='h-6 w-6'/>
                        </div>

                    <div id="search" className="h-1/3 w-1/2 flex p-2 text-black justify-between space-x-3">
                            <input 
                                type="text"
                                placeholder="Search products, brands and categories"
                                className="w-full h-10 px-3 outline-none rounded-md"
                            />
                        <button className="h-10 w-20 bg-amber-500 rounded-md text-black">Search</button>
                    </div>


                    <div id="stuff" className="flex pl-16 items-center space-x-2 text-black dark:text-white relative">
                        <div className='flex space-x-1 p-2 cursor-pointer bg-slate-600 hover:text-amber-400 rounded-md' onClick={toggleAccountVisibility}>
                            <UserIcon className='h-6 w-6'/>
                            <p>Account</p>
                            <ChevronDownIcon className='h-6 w-6'/>
                        </div>
                        { isAccountVisible && 
                            <div className='absolute top-full left-0 mt-2'>
                                <Account />
                            </div>
                        }


                        <div className='flex space-x-1 p-2 cursor-pointer bg-slate-600 hover:text-amber-400 rounded-md' onClick={toggleHelpVisibility}>
                            <QuestionMarkCircleIcon className='h-6 w-6'/>
                            <p>Help</p>
                            <ChevronDownIcon className='h-6 w-6'/>
                        </div>
                            { isHelpVisible && 
                                <div className='absolute top-full right-16 mt-2'>
                                    <Help/>
                                </div>
                            }

                        <div className='flex space-x-1 p-2 cursor-pointer bg-slate-600 hover:text-amber-400 rounded-md'>
                            <ShoppingCartIcon className='h-6 w-6'/>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>                    
            </div>
        </>
    )
}

export default Navbar
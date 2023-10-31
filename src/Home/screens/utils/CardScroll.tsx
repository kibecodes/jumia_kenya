import Card from './Card'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/24/outline'



const CardScroll = () => {

    return (
        <>
                <div className="p-2 w-full flex flex-row items-center space-x-2 px-2 shadow-xl hover:shadow-2xl">
                    <div className="h-fit w-10 bg-white"><ChevronLeftIcon className="cursor-pointer h-8 w-8 bg-slate-400"/></div>
                    <div id="boundary" className="h-56 w-full bg-white rounded-md overflow-x-scroll"> 
                            <div className="w-full h-52 py-2 space-x-2 ">
                                <div className="flex space-x-2">
                                    <Card/> 
                                </div>
                            </div>
                    </div>
                    <div className="h-fit w-10 bg-white"><ChevronRightIcon className="cursor-pointer h-8 w-8 bg-slate-400"/></div>
                </div>
        </>
    )
}

export default CardScroll
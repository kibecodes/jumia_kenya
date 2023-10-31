import DealsCard from './DealsCard'



const DealsMenu = () => {

    return (
        <>
            <div className="p-2 w-full flex flex-row items-center space-x-2 px-2 shadow-xl hover:shadow-2xl">
                <div id="boundary" className="h-60 w-full bg-white rounded-md overflow-hidden" > 
                    <div className=' flex start-0 pl-3 text-xl'>Deals on Appliances</div>
                        <div className="w-full h-52 py-2 space-x-2 pt-2 ">
                            <div className="flex space-x-2">
                                <DealsCard/> 
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default DealsMenu
import { CSSProperties } from 'react'


const ListCategory = () => {

    const help: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/Webp.net-resizeimage-(1).png')"

    }
    const easy: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/icone-2-return.png')"

    }
    const payment: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/icone-2-payment.png')"

    }
    const shop_now:  CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2021/Personalization/PrimeCustomer/BF/KE_Cross_PrimeCustomer_Generic_1221_BF-under-5K.gif')"
    }
    const slide1: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W27/CP/Sliders/J23_Gen_S12.jpg')"
    }

    return (
        <>        
            <div className="flex flex-row space-x-3 h-4/5 p-3 space-y-4 bg-white rounded-md ">

                <div id="category" className="h-fill w-1/5 flex flex-col space-y-2 items-start pl-2 shadow-xl text-sm hover:shadow-2xl rounded-md">
                    <div className='cursor-pointer'>Supermarket</div>
                    <div className='cursor-pointer'>Health & Beauty</div>
                    <div className='cursor-pointer'>Home & Office</div>
                    <div className='cursor-pointer'>Appliances</div>
                    <div className='cursor-pointer'>Phones & Tablets</div>
                    <div className='cursor-pointer'>Computing</div>
                    <div className='cursor-pointer'>TVs & Audio</div>
                    <div className='cursor-pointer'>Fashion</div>
                    <div className='cursor-pointer'>Gaming</div>
                    <div className='cursor-pointer'>Baby Products</div>
                    <div className='cursor-pointer'>Sporting Goods</div>
                    <div className='cursor-pointer'>Other categories</div>
                </div>  

                <div id="flash-gif" className="h-fill w-3/5 shadow-xl hover:shadow-2xl pl-4 rounded-md bg-cover" style={slide1}>
                </div>

                <div id="side boxes" className="w-1/5 space-y-2">
                    <div className="h-1/2 w-fill shadow-xl hover:shadow-2xl flex-col rounded-md space-y-1 p-2">
                        <div className="flex items-center rounded-md space-x-2 hover:cursor-pointer"> 
                            <div className='h-8 w-8 bg-cover' style={help}></div>
                            <div className='flex-col'>
                                <p className='font-semibold'>HELP CENTER</p>
                                <p className='text-sm'>Guide To Customer Care</p>
                            </div>
                        </div>
                        <div className="flex items-center rounded-md space-x-2 hover:cursor-pointer"> 
                            <div className='h-8 w-8 bg-cover' style={easy}></div>
                            <div className='flex-col'>
                                <p className='font-semibold'>EASY RETURN</p>
                                <p className='text-sm'>Quick Refund</p>
                            </div>
                        </div>
                        <div className="flex items-center rounded-md space-x-2 hover:cursor-pointer"> 
                            <div className='h-8 w-8 bg-cover' style={payment}></div>
                            <div className='flex-col'>
                                <p className='font-semibold'>SELL ON JUMIA</p>
                                <p className='text-sm'>Millions Of Visitors</p>
                            </div>
                        </div>
                        
                    </div>

                    <div id="shop-now" className="h-1/2 w-fill shadow-xl hover:shadow-2xl rounded-md bg-cover" style={shop_now}></div>
                </div>

            </div>
        </>
    )
}

export default ListCategory

const Footer = () => {
    return (
        <>            
            <footer className="w-full">
                <div className="flex flex-row-3 justify-evenly bg-stone-800 dark:text-white">
                        <div id="logo" className="p-4">
                            <div className="text-xl">JUMIA</div>
                            <div>icon</div>
                        </div>

                        <div id="details" className="p-2">
                            <div typeof="title" className="flex flex-col mt-2 pl-4">NEW TO JUMIA?</div>
                                <div className="font-md ml-4 py-2">
                                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                                </div>
                                <div className="flex flex-row-3 flex-start justify-evenly">
                                    <div className="w-1/2 h-10 outline rounded-md cursor-pointer">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email address"
                                            className="w-full h-full px-3 outline-none"
                                            required
                                        />
                                    </div>
                                    <button className="h-10 w-30 outline cursor-pointer rounded-md p-2">MALE</button>
                                    <button className="h-10 w-30 outline cursor-pointer rounded-md p-2">FEMALE</button>
                                </div>
                        </div>

                        <div id="download" className="flex flex-col-2 p-2">
                            <div id="icon" className="flex flex-row justify-start">
                                <div className="">icon</div>
                                <div className="flex flex-col">
                                    <div></div>
                                    <p className="font-md">DOWNLOAD JUMIA FREE APP</p>  
                                    <p>Get access to exclusive offers!</p>
                                </div>
                            </div>
                            <div id="links" className="flex flex-row ">
                                <div>AppStore</div>
                                <div>GooglePlay</div>
                            </div>
                        </div>

                    </div>
                <section id="footer" className="  bg-zinc-500 flex-none text-white">
                    
                    <div className="flex flex-row-4 p-4 text-center justify-evenly">

                        <div id="help" className="text-start font-md">
                            <div typeof="title" className="mb-2">NEED HELP?</div>
                                <p className="hover:underline cursor-pointer">Help Center</p>
                                <p className="hover:underline cursor-pointer">Contact Us</p>
                                <p className="hover:underline cursor-pointer">How to Shop on Jumia?</p>
                                <p className="hover:underline cursor-pointer">Shipping and Delivery</p>
                                <p className="hover:underline cursor-pointer">Return Policy</p>
                                <p className="hover:underline cursor-pointer">Dispute Resolution Policy</p>
                                <p className="hover:underline cursor-pointer">Corporate and Bulk Purchase</p>
                                <p className="hover:underline cursor-pointer">Advertise with Jumia</p>
                                <p className="hover:underline cursor-pointer">Report a product</p>
                                <p className="hover:underline cursor-pointer">Jumia Payment Information Guidelines</p>
                        </div>

                        <div id="about" className="text-start font-md">
                            <div typeof="title" className="mb-2">ABOUT JUMIA</div>
                            <p className="hover:underline cursor-pointer">About Us</p>
                            <p className="hover:underline cursor-pointer">Returns and Refunds Policy</p>
                            <p className="hover:underline cursor-pointer">Jumia Careers</p>
                            <p className="hover:underline cursor-pointer">Jumia Express</p>
                            <p className="hover:underline cursor-pointer">Terms and Conditions</p>
                            <p className="hover:underline cursor-pointer">Store Credit Terms Conditions</p>
                            <p className="hover:underline cursor-pointer">Privacy Notice</p>
                        </div>

                        <div id="make" className="text-start font-md">
                            <div typeof="title" className="mb-2">MAKE MONEY WITH JUMIA</div>
                                <p className="hover:underline cursor-pointer">Sell on Jumia</p>
                                <p className="hover:underline cursor-pointer">Become a Sales Consultant</p>
                                <p className="hover:underline cursor-pointer">Become a Logistics Service Partner</p>
                                <p className="hover:underline cursor-pointer">Jumia City Partner Program</p>
                        </div>

                        <div id="international" className="text-start font-md">
                            <div typeof="title" className="mb-2">JUMIA INTERNATIONAL</div>
                            <p className="hover:underline cursor-pointer">Algeria</p>
                            <p className="hover:underline cursor-pointer">Ivory Coast</p>
                            <p className="hover:underline cursor-pointer">Egypt</p>
                            <p className="hover:underline cursor-pointer">Ghana</p>
                            <p className="hover:underline cursor-pointer">Morocco</p>
                            <p className="hover:underline cursor-pointer">Nigeria</p>
                            <p className="hover:underline cursor-pointer">Senegal</p>
                            <p className="hover:underline cursor-pointer">Tunisia</p>
                            <p className="hover:underline cursor-pointer">Zando</p>

                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
import { CSSProperties } from "react"


const Card = () => {
    
    const clearance: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Clearance_Sale.png')"
    }
    const phones: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Phones.png')"
    }
    const appliances: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Blenders.png')"
    }
    const audio: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Speakers.png')"
    }
    const tv: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/TVs.png')"
    }
    const home: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Home.png')"
    }
    const men: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/MenClothing.png')"
    }
    const women: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/WomensClothing.png')"
    }
    const sneakers: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Sneakers.png')"
    }
    const cooktops: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Cooktops.png')"
    }
    const computing: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Laptops.png')"
    }
    const beauty: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/cms/2023/W05/Thumbnails/Laptops.png')"
    }

    return (
        <>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={clearance} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Clearance Sale</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={phones} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Phones</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={appliances} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Appliances</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={audio} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Home Audio</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={tv} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Televisions</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={home} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">For Your Home</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={men} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Men's Fashion</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={women} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Women's Fashion</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={sneakers} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Sneakers</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={cooktops} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Cooktops</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={computing} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Computing</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={beauty} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Beauty & Perfumes</p>
                </div>
            </div>   
        </>
    )
}

export default Card
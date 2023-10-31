import { CSSProperties } from "react"


const DealsCard = () => {

    const fridge: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/241901/1.jpg?6063')"
    }
    const microwave: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/472432/1.jpg?2868')"
    }
    const drier: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/92584/1.jpg?8610')"
    }
    const iron: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/883927/1.jpg?279')"
    }
    const heater: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/732939/1.jpg?976')"
    }
    const wash: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/4084831/1.jpg?1783')"
    }
    const kettle: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/6298131/1.jpg?1123')"
    }
    const cleaner: CSSProperties = {
        backgroundImage: "url('https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/7314/1.jpg?4697')"
    }
    return (
        <>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={fridge} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Fridge</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={microwave} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Microwave</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={drier} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Drier</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={iron} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Iron</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={heater} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Heater</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={wash} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Wash</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={kettle} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Kettle</p>
                </div>
            </div>
            <div id="card" className="flex flex-col h-48 w-40 bg-amber rounded-sm shadow-md hover:scale-105 transition-transform">
                <div style={cleaner} className="h-40 w-full bg-cover rounded-md"></div>
                <div className="w-full text-center p-2 bg-white">
                        <p className="font-sm text-center">Cleaner</p>
                </div>
            </div>
        </>
    )
}

export default DealsCard
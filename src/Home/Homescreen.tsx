import Footer from "./screens/footer/components/Footer"
import Navbar from "./screens/navbar/components/Navbar"
import Category from "./screens/content/components/Category"

import { HomeContext } from "./HomeContext"

const Homescreen = () => {
    return (
        <>
                <Navbar/>

                <Category />

                <Footer/>
        </>
    )
}

export default Homescreen
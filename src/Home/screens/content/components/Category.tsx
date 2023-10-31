import CardScroll from '../../utils/CardScroll'
import DealsMenu from '../../utils/DealsMenu'
import ListCategory from '../utils/ListCategory'

const Category = () => {

    return (
        <>
            <div id="body-layout" className=" bg-white flex flex-col justify-between px-8">
                <ListCategory/>                
                <CardScroll/>
                <DealsMenu/>
            </div>
        </>
    )
}

export default Category
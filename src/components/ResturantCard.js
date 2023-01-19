import { IMG_CDN } from "../../constants"

const RestaurantCard = (props) => {
    const {data: {name, cuisines, avgRating, cloudinaryImageId}} = props
    return (
        <div className="card">
            <img src={IMG_CDN+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h2>{avgRating} stars</h2>
        </div>
    )
}

export default RestaurantCard
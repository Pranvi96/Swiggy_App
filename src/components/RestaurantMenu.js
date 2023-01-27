import { useParams } from "react-router-dom";
import { IMG_CDN } from "../../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const param = useParams();
  const { id } = param;
  
  const restaurant = useRestaurantMenu(id)

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        {Object.values(restaurant?.menu?.items).map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

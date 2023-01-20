import { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const filterData = (restaurants, searchText) => {
  return restaurants.filter(restaurant =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!restaurants) return null;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(restaurants, searchText);
            setFilteredRestraunt(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestraunt.map(restaurant => {
          return <RestaurantCard {...restaurant} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;

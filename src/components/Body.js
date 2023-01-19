import { useState } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "./ResturantCard";

const filterData = (restaurants, searchText) => {
  return restaurants.filter(restaurant =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
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
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map(restaurant => {
          return <RestaurantCard {...restaurant} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;

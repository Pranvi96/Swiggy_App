import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_MENU } from "../../constants";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      FETCH_RESTAURANT_MENU +
        id
    );
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant
};

export default useRestaurantMenu;

export function filterData(restaurants, searchText) {
    return restaurants.filter(restaurant =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  };
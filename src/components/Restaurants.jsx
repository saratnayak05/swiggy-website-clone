import ResCard from "./ResCard";
import { useState, useEffect } from "react";

const Restaurants = () => {
  const [resList, setresList] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2959847&lng=85.8246101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const data = await response.json();
      console.log(data);
      const restaurantData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setresList(restaurantData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div>Restaurants with online food delivery in Bhubaneswar</div>
      <div className="filter-section">filter section</div>
      <div className="res-container">
        { resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;

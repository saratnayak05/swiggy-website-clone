
import { fetchRestaurants } from "../services/restaurantService";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";



const RestaurantsSection = () => {
  const [restaurantData, setrestaurantData] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants =async () =>{
      const data = await fetchRestaurants(); 
      setrestaurantData(data);
  }




  
  return (
    <div className=" px-40">
      <div>Restaurants with online food delivery in Bhubaneswar</div>
      <div className="filter-section">filter section </div>
      <div className="res-container  grid grid-cols-4 gap-6">

        {restaurantData.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resdata={restaurants} />
        ))}

      </div>
    </div>
  );
};


export default RestaurantsSection;

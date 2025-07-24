
import { fetchRestaurants } from "../services/restaurantService";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";



const RestaurantsSection = ({data}) => {
  // const [restaurantData, setrestaurantData] = useState([]);

 



  
  return (
    <div className=" px-40">
      <div className=" text-xl font-bold pt-10">Restaurants with online food delivery in Bhubaneswar</div>
      <div className="filter-section">filter section </div>
      <div className="res-container  grid grid-cols-4 gap-6">

        {data.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resdata={restaurants} />
        ))}

      </div>
    </div>
  );
};


export default RestaurantsSection;

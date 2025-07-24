import FoodsListSection from "../components/FoodsListSection";
import TopRestaurantsSection from "../components/TopRestaurantsSection";
import RestaurantsSection from "../components/RestaurantsSection";
import RestaurantCategoryList from "../components/RestaurantCategoryList";
import { fetchRestaurants } from "../services/restaurantService";
import { useState, useEffect } from "react";
import Header from "../components/Header";

const RestaurantsPage = () => {
  const [foods, setfoods] = useState([]);
  const [topResData, settopResData] = useState([]);
  const [resSecdata, setresSecdata] = useState([]);

  useEffect(() => {
    fetchRestaurants().then((data) => {
      const extracRes =
        data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setresSecdata(extracRes);

      const extracFood = data.cards?.[0]?.card?.card?.imageGridCards?.info;
      // console.log(extracFood)
      setfoods(extracFood);
      // const extracTopRes = data;
      // // console.log(data)
    });
  }, []);

  return (
    <>
      <Header/>
      <div>
        <FoodsListSection data={foods} />
        <TopRestaurantsSection data={resSecdata} />
        <RestaurantsSection data={resSecdata} />
        <RestaurantCategoryList />
      </div>
    </>
  );
};

export default RestaurantsPage;

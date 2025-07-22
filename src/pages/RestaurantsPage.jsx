
import FoodsList from '../components/FoodsListSection'
import TopRestaurants from '../components/TopRestaurantsSection'
import RestaurantsSection from '../components/RestaurantsSection'
import RestaurantCategoryList from '../components/RestaurantCategoryList'

const RestaurantsPage = () => {
  return (
    <div>
     <FoodsList/>
     <TopRestaurants/>
     <RestaurantsSection/>
     <RestaurantCategoryList/>
    </div>
  )
}

export default RestaurantsPage
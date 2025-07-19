import Header from './components/Header'
import FoodsList from './components/FoodsList'
import TopRestaurants from './components/TopRestaurants'
import Restaurants from './components/Restaurants'
import './App.css'

const App = () => {
  return (
   <>
    <Header/>
    <FoodsList/>
    <TopRestaurants/>
    <div style={{padding:"0 5vw"}}>
       <Restaurants/>
    </div>
   </>
  )
}

export default App
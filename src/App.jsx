
import HomePage from "./pages/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage";
import { Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/restaurants" element={<RestaurantsPage/>} />
      </Routes>

    </>
  );
};

export default App;

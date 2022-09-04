import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
// import Cart from "./components/cart/Cart";
import HomePage from "./components/homePage/HomePage";
import Layouts from "./components/layouts/Layouts";
import NotFound from "./components/notFound/NotFound";
import FoodProducts from "./components/foodProducts/FoodProducts";
import ShoppingProducts from "./components/shoppingProducts/ShoppingProducts";
import JsonPlaceHolderPosts from "./components/jsonPlaceHolderPosts/JsonPlaceHolderPosts";

function App() {
  return (
     <Routes>
        <Route path="/" element={<Layouts/>}>
          <Route path="home" element={<HomePage/>}></Route>
          {/* <Route path="cart-products" element={<Cart/>}></Route> */}
          <Route path="food-products" element={<FoodProducts/>}></Route>
          <Route path="shop-products" element={<ShoppingProducts/>}></Route>
          <Route path="json-products" element={<JsonPlaceHolderPosts/>}></Route>


          <Route path="*" element={<NotFound />} />
        </Route> 
      </Routes>
  );
}

export default App;

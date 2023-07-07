import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Order from "./pages/order/Order";
import Product from "./pages/product/Product";
import Film from "./pages/film/Film";
import NoPage from "./pages/nopage/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./pages/nav/Navigation";
import "./App.css";
import FavouriteCar from "./pages/cars/FavouriteCar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="contact" element={<Contact />} />
          <Route path="film" element={<Film />} />
          <Route path="cars" element={<FavouriteCar />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Checkout from "./components/Ckeckout";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Contacto from "./components/Contacto";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Carousel />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/contacto"} element={<Contacto/>} />
          <Route path={"/cart"} element={<Cart/>} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

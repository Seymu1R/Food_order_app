import { useState } from "react";
import "./App.scss";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsshow, setcartIsShow] = useState(false);

  const showCardHandler = () => {
    setcartIsShow(true);
  };

  const hideCardHandler = () => {
    setcartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsshow && <Cart onClose={hideCardHandler} />}
      <Header onShowcart = { showCardHandler } />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

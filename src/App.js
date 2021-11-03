import { useContext, useState } from "react";
import CartContext from "./store/cart-context";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart closeModal={hideCartHandler}/>}
      <Header openModal={openCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

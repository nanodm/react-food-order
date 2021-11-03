import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const addItemHandler = () => {};
  const removeItemHandler = () => {};
  const totalItems = 0;
  const items = [];

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount: totalItems,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    ></CartContext.Provider>
  );
};

export default CartContextProvider;

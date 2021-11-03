import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export const CartContextProvider = (props) => {
  return (
    <CartContext.Provider
      value={{
        // showCart: showModal,
        // openModal: openModalHandler,
        // closeModal: closeModalHandler,
      }}
    ></CartContext.Provider>
  );
};

export default CartContext;

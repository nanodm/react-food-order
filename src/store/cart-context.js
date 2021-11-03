import React, { useState } from "react";

const CartContext = React.createContext({
  showCart: false,
  openModal: () => {},
  closeModal: () => {},
});

export const CartContextProvider = (props) => {
  console.log('CartContextProvider');
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    console.log('openModalHandler');
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <CartContext.Provider
      value={{
        showCart: showModal,
        openModal: openModalHandler,
        closeModal: closeModalHandler,
      }}
    ></CartContext.Provider>
  );
};

export default CartContext;

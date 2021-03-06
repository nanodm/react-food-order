import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  return (
    <button className={`${classes.button} ${classes.bump}`} onClick={props.openModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;

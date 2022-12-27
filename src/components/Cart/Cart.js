import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";

function Cart(props) {
  const cartitems = (
    <ul className={classes['cart-items']} >
      {[
        { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
        { id: "c2", name: "Schnitzel", amount: 3, price: 13.99 },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className={classes.total} >
        <span>Total Amount </span>
        <span>35.62</span>
      </div>
      <div className = {classes.actions} >
        <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
        <button className={classes.button} >Order</button>
      </div>
    </Modal>
  );
}

export default Cart;

import React from "react";
import CartItems from "./CartItems";
import ShippingCost from "./ShippingCost";

const Cart = () => {
  return (
    <div>
      <CartItems />
      <ShippingCost />
    </div>
  );
};

export default Cart;

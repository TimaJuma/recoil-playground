import { useRecoilValue } from "recoil";
import { cartState } from "../atoms";
import { inventory } from "../constants";

const CartItems = () => {
  const cartValues = useRecoilValue(cartState);

  if (Object.keys(cartValues).length === 0) {
    return <p>No items added</p>;
  }
  return (
    <div>
      <h2>Cart Items:</h2>
      <ul>
        {Object.entries(cartValues).map(([id, price]) => (
          <li key={id}>
            {inventory[id].name} x {price} = TOTAL : ${" "}
            {inventory[id].price * price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;

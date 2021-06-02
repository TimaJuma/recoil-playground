import { useRecoilState } from "recoil";
import { cartState } from "../atoms";
import { inventory } from "../constants";

const AvailableItems = () => {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <div>
      <h2>Items To sell</h2>
      <ul>
        {Object.entries(inventory).map(([id, { name, price }]) => (
          <li key={id}>
            {name} @ {price.toFixed(2)} $
            <button
              style={{ marginLeft: "3rem" }}
              onClick={() => {
                setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
              }}
            >
              ADD
            </button>
            {cart[id] && (
              <button
                style={{ marginLeft: "3rem" }}
                onClick={() => {
                  const cartCopy = { ...cart };
                  if (cartCopy[id] === 1) {
                    delete cartCopy[id];
                    setCart(cartCopy);
                  } else {
                    setCart({ ...cartCopy, [id]: cartCopy[id] - 1 });
                  }
                }}
              >
                remove
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableItems;

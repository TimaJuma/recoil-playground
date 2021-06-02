import { useRecoilState } from "recoil";
import { shippingState } from "../atoms";
import { destinations } from "../constants";

const ShippingCost = () => {
  const [shipping, setShipping] = useRecoilState(shippingState);
  return (
    <div>
      <h2>Shipping Cost</h2>
      {Object.entries(destinations).map(([country, cost]) => (
        <button onClick={() => setShipping(country)}>
          {country} @ ${cost}
          {country === shipping ? <span> 🌶 </span> : null}
        </button>
      ))}
    </div>
  );
};

export default ShippingCost;

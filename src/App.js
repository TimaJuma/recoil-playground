import { RecoilRoot } from "recoil";
import { AvailableItems, Cart } from "./components";
import { inventory, destinations } from "./constants";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <AvailableItems />
      <Cart />
    </RecoilRoot>
  );
}

export default App;

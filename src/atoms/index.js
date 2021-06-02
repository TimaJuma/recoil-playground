import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: {},
});

export const shippingState = atom({
  key: "shippingState",
  default: "US",
});

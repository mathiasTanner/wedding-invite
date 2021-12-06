import { atom } from "recoil";

const isLoggedState = atom({
  key: "logged-state",
  default: false,
});

export default isLoggedState;

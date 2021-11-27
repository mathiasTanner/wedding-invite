import { atom } from "recoil";

const languageState = atom({
  key: "language-state",
  default: [],
});

export default languageState;

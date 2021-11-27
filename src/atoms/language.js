import { atom } from "recoil";

const languageState = atom({
  key: "language-state",
  default: null,
});

export default languageState;

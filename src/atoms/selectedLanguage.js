import { atom } from "recoil";

const selectedLanguageState = atom({
  key: "selected-language-state",
  default: { code: "EN", name: "English" },
});

export default selectedLanguageState;

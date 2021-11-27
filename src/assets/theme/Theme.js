import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#5a9f5a",
      main: "#2a702f",
      dark: "#004404",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#e2e2e2",
      dark: "#b0b0b0",
      contrastText: "#000000",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: "none",
      },
    },
    MuiButtonGroup: {
      contained: {
        boxShadow: "none",
      },
    },
  },
});

export default responsiveFontSizes(Theme);

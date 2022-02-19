import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#e8eaf6",
      dark: "#b6b8c3",
      contrastText: "#000000",
    },
    secondary: {
      light: "#ffffff",
      main: "#ede7f6",
      dark: "#bbb5c3",
      contrastText: "#000000",
    },
  },
  typography: {
    fontSize: 18,
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

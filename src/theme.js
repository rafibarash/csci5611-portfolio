import { red, blue, green, purple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: purple[300],
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green[400],
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;

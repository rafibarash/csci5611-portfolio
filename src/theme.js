import { red, blue, green, purple } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// A custom theme for this app
const theme = responsiveFontSizes(
  createMuiTheme({
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
    overrides: {
      // MuiList: {
      //   padding: {
      //     paddingTop: 0,
      //     paddingBottom: 0
      //   },
      // },
    },
    typography: {
      // button: {
      //   fontSize: '1rem',
      // },
    },
  })
);

export default theme;

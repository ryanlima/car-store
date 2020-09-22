import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#283592",
    },
    secondary: {
      main: "#E41B84",
    },
    neutral: {
      main: "#5c6ac4",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F3F3F3",
    },
  },
  overrides: {
    // MuiPaper: {
    //   root: {
    //     padding: '20px 10px',
    //     margin: '10px',
    //     backgroundColor: '#fff', // 5d737e
    //   },
    // },
    // MuiButton: {
    //   root: {
    //     margin: '5px',
    //   },
    // },
  },
});
export default theme;

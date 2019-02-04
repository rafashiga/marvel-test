import { createMuiTheme } from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

export default {
    colors: {
        primary: {
            background: '#f70000',
            '&:hover': {
                background: '#960000'
            }
        }
    }
}

export const theme = createMuiTheme({
    palette: {
      primary: red,
      secondary: grey,
    },
    typography: {
        useNextVariants: true,
      },
});
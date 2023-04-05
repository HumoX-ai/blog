import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin-ext"],
  display: "swap",
  fallback: ["sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#0a1929",
    },
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;

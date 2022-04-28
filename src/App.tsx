import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "./styles/GlobalStyles";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import darkThemeMUI from "./styles/themes/MUIThemes/dark";

import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <ThemeProviderMUI theme={darkThemeMUI}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProviderMUI>
    </ThemeProvider>
  );
};

export default App;

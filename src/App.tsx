import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import "bootstrap/dist/css/bootstrap.min.css";

import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;

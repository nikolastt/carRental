import React from "react";
import { ThemeProvider } from "styled-components";

import Booking from "./pages/Booking";
import PageServices from "./pages/PageServices";
import GlobalStyles from "./styles/GlobalStyles";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./components/AppBar";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AppBar />
      {/* <Booking /> */}
      <PageServices />
    </ThemeProvider>
  );
};

export default App;

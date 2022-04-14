import React from "react";
import { ThemeProvider } from "styled-components";
import Booking from "./pages/Booking";

import GlobalStyles from "./styles/GlobalStyles";
import light from "./styles/themes/light";
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Booking />
    </ThemeProvider>
  );
};

export default App;

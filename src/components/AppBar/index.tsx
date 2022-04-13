import React from "react";

import { Container, Login, Navigation, Ul } from "./styles";

const AppBar: React.FC = () => {
  return (
    <Container>
      logo
      <Navigation>
        <Ul>
          <li>
            <a href="/">Booking</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </Ul>
      </Navigation>
      <Login></Login>
    </Container>
  );
};

export default AppBar;

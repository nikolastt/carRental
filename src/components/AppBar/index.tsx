import React from "react";

import { Container, Login, Navigation, Ul, Logo } from "./styles";

const AppBar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <span>Perfect</span> Wheels
      </Logo>
      <Navigation>
        <Ul>
          <li>
            <a href="/services">Services</a>
          </li>
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

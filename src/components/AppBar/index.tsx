import React from "react";
import { Link } from "react-router-dom";

import { Container, Login, Navigation, Ul, Logo } from "./styles";

const AppBar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <Link to="/" className="link">
          <span>Perfect</span> Wheels
        </Link>
      </Logo>
      <Navigation>
        <Ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/myfavorites">Meus Favoritos</Link>
          </li>
          <li>
            <Link to="/addVeicle">Adcicionar veículo</Link>
          </li>
        </Ul>
      </Navigation>
      <Login></Login>
    </Container>
  );
};

export default AppBar;

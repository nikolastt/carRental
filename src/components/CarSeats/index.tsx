import React, { useState } from "react";

import { Container, Icon, Title, Header, Content, Input } from "./styles";

import { FcCollapse } from "react-icons/fc";

const CarSeats: React.FC = () => {
  const [isCollapseUp, setIsCollapseUp] = useState(true);

  function handleCollapse() {
    setIsCollapseUp(!isCollapseUp);
  }
  return (
    <Container>
      <Header onClick={() => handleCollapse()}>
        <Title>Assentos</Title>
        <Icon isCollapseUp={isCollapseUp}>
          <FcCollapse />
        </Icon>
      </Header>
      {isCollapseUp ? "" : <Content></Content>}
    </Container>
  );
};

export default CarSeats;

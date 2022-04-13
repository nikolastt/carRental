import React from "react";
import Collapse from "../Collapse";

import { Container, Title } from "./styles";

const SideLeft: React.FC = () => {
  return (
    <Container>
      <Title>Filtrar 🎯 </Title>
      <hr />
      <Collapse />
    </Container>
  );
};

export default SideLeft;

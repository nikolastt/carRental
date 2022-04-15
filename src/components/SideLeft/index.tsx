import React from "react";
import CarSeats from "../CarSeats";
import FilterByCategoryCollapse from "../FilterByCategoryCollapse";

import { Container, Title } from "./styles";

const SideLeft: React.FC = () => {
  return (
    <Container>
      <Title>Filtrar 🎯 </Title>
      <hr />
      <FilterByCategoryCollapse />
      <CarSeats />
    </Container>
  );
};

export default SideLeft;

import React from "react";
import AppBar from "../../components/AppBar";
import Cards from "../../components/Cards/intex";

import { Container, Content } from "./styles";

import cars from "../../repositories/cars";
import SideLeft from "../../components/SideLeft";

const Booking: React.FC = () => {
  return (
    <>
      <AppBar />
      <Container>
        <SideLeft />

        <Content>
          {cars.map((item, index) => {
            index++;
            return (
              <Cards
                key={item.model}
                title={item.model}
                img={item.img}
                amount={item.amount}
                autoMaker={item.automaker}
              />
            );
          })}
        </Content>
      </Container>
    </>
  );
};

export default Booking;

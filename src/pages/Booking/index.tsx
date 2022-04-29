import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/intex";

import { Container, Content } from "./styles";

import cars from "../../repositories/cars";
import SideLeft from "../../components/SideLeft";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import AppBar from "../../components/AppBar";

import { getCars } from "../../redux/carsSlice";

const Booking: React.FC = () => {
  const [carsInScreen, setCarsInScreen] = useState(cars);
  const number = useSelector((state: RootState) => state.filterByCategory);

  const carsReducer = useSelector((state: RootState) => state.carsSlice);

  const dispatch = useDispatch();

  function handleCarsInScreen() {
    const newCars = cars.filter((item) =>
      number.includes(item.category.toLowerCase())
    );
    setCarsInScreen(newCars);
  }

  useEffect(() => {
    {
      number.length > 0 ? handleCarsInScreen() : setCarsInScreen(cars);
    }
  }, [number]);

  return (
    <>
      <AppBar />
      <Container>
        <SideLeft />

        <Content>
          <button onClick={() => dispatch(getCars(5))}>Add number</button>
          <h1>Number: {carsReducer.length}</h1>
          {carsInScreen.map((item, index) => {
            return (
              <Cards
                key={item.model}
                title={item.model}
                img={item.img}
                amount={item.amount}
                autoMaker={item.automaker}
                seats={item.seats}
                gear={item.gear}
                width="33.3%"
              />
            );
          })}
        </Content>
      </Container>
    </>
  );
};

export default Booking;

import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/intex";

import { Container, Content } from "./styles";

import cars from "../../repositories/cars";
import SideLeft from "../../components/SideLeft";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AppBar from "../../components/AppBar";

import { db } from "../../firebase/index";
import { collection, addDoc } from "firebase/firestore";

const Booking: React.FC = () => {
  const [carsInScreen, setCarsInScreen] = useState(cars);
  const number = useSelector((state: RootState) => state.filterByCategory);

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

  async function addCar() {
    const docRef = await addDoc(collection(db, "cars"), {
      name: "Ford-KA",
      country: "Brazil",
    });

    console.log(docRef.id);
  }

  return (
    <>
      <AppBar />
      <Container>
        <SideLeft />

        <Content>
          {carsInScreen.map((item, index) => {
            return (
              <Cards
                key={item.model}
                title={item.model}
                img={item.img}
                amount={item.amount}
                autoMaker={item.automaker}
                seats={item.seats}
                width="33.3%"
              />
            );
          })}
          <button onClick={() => addCar()}>Add car</button>
        </Content>
      </Container>
    </>
  );
};

export default Booking;

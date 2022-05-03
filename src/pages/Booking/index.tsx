import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/intex";

import { Container, Content } from "./styles";

import SideLeft from "../../components/SideLeft";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import AppBar from "../../components/AppBar";

import { getCars, ICarProps } from "../../redux/carsSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Booking: React.FC = () => {
  const [carsInScreen, setCarsInScreen] = useState<ICarProps[]>([]);
  const [cars, setCars] = useState<ICarProps[]>([]);
  const filter = useSelector((state: RootState) => state.filterByCategory);
  const carsRedux = useSelector((state: RootState) => state.carsSlice.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCarsDb() {
      const arrayCars: any = [];
      const querySnapshot = await getDocs(collection(db, "cars"));
      querySnapshot.forEach((doc) => {
        arrayCars.push(doc.data());
      });
      setCars(arrayCars);
      dispatch(getCars(arrayCars));
    }

    if (carsRedux.length > 0) {
      setCars(carsRedux);
    } else {
      console.log("Pegou banco");
      getCarsDb();
    }
  }, []);

  function handleCarsInScreen() {
    console.log(filter, "Filter");
    const newCars = cars.filter((item) => {
      return (
        filter.includes(item.category.toLowerCase()) ||
        filter.includes(item.seats)
      );
    });

    setCarsInScreen(newCars);
  }

  useEffect(() => {
    {
      filter.length > 0 ? handleCarsInScreen() : setCarsInScreen(cars);
    }
  }, [filter, cars]);

  return (
    <>
      <AppBar />
      <Container>
        <SideLeft />

        {carsInScreen.length > 0 ? (
          <Content>
            {carsInScreen.map((item, index) => {
              return (
                <Cards
                  key={item.model}
                  title={item.model}
                  img={item.img}
                  amount={item.amount}
                  autoMaker={item.autoMaker}
                  seats={item.seats}
                  gear={item.gear}
                  width="33.3%"
                />
              );
            })}
          </Content>
        ) : (
          <Content>
            <h1>Carregando</h1>
          </Content>
        )}
      </Container>
    </>
  );
};

export default Booking;

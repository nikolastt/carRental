import React, { useMemo, useState } from "react";

import { Container, Icon, Title, Header, Content, Input } from "./styles";

import { FcCollapse } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addCategory, removeCategory } from "../../redux/filterByCategorySlice";

interface ISeatsAmount {
  seats: string;
  count: number;
}

const CarSeats: React.FC = () => {
  const [isCollapseUp, setIsCollapseUp] = useState(true);

  const cars = useSelector((state: RootState) => state.carsSlice.cars);
  const dispatch = useDispatch();

  function handleCollapse() {
    setIsCollapseUp(!isCollapseUp);
  }

  const seats = useMemo(() => {
    let uniqueSeats: string[] = [];
    const seats = cars.map((item) => {
      return item.seats[0].toUpperCase() + item.seats.slice(1);
    });

    seats.forEach((item, index) => {
      if (!uniqueSeats.includes(item)) {
        uniqueSeats.push(item);
      }
    });
    return uniqueSeats;
  }, [cars]);

  const numberOfCarsBySeats = useMemo(() => {
    const seatsAmount: ISeatsAmount[] = [];

    seats.map((seat) => {
      const arrayAux = [];
      let count = 0;
      let seats = seat;
      cars.map((car) => {
        if (car.seats === seat) {
          count++;
        }
      });
      seatsAmount.push({ seats: seats, count: count });
    });

    return seatsAmount;
  }, [cars]);

  return (
    <Container>
      <Header onClick={() => handleCollapse()}>
        <Title>Assentos</Title>
        <Icon isCollapseUp={isCollapseUp}>
          <FcCollapse />
        </Icon>
      </Header>
      {isCollapseUp ? (
        ""
      ) : (
        <Content>
          {seats.map((item, index) => {
            return (
              <Input key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    {
                      e.target.checked === true
                        ? dispatch(addCategory(e.target.name.toLowerCase()))
                        : dispatch(removeCategory(e.target.name.toLowerCase()));
                    }
                  }}
                  name={item}
                />
                <label htmlFor={item}>
                  {item}{" "}
                  {numberOfCarsBySeats.map((obj) => {
                    if (obj.seats === item) {
                      return ` (${obj.count})`;
                    }
                  })}
                </label>
              </Input>
            );
          })}
        </Content>
      )}
    </Container>
  );
};

export default CarSeats;

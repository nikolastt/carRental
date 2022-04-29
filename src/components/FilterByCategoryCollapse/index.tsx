import React, { useMemo, useState } from "react";

import { Container, Icon, Title, Header, Content, Input } from "./styles";
import { FcCollapse } from "react-icons/fc";

import cars from "../../repositories/cars";
import { useDispatch } from "react-redux";
import { addCategory, removeCategory } from "../../redux/filterByCategorySlice";

const FilterByCategoryCollapse: React.FC = () => {
  const [isCollapseUp, setIsCollapseUp] = useState(true);
  const dispatch = useDispatch();

  const categoryes = useMemo(() => {
    let uniqueCategoryes: string[] = [];
    const categoryes = cars.map((item) => {
      return item.category[0].toUpperCase() + item.category.slice(1);
    });

    categoryes.forEach((item, index) => {
      if (!uniqueCategoryes.includes(item)) {
        uniqueCategoryes.push(item);
      }
    });
    return uniqueCategoryes;
  }, []);

  const numberOfCarsByCategory = useMemo(() => {
    let countSUV = 0;
    let countCompacto = 0;
    let countSedan = 0;
    let countUtilitario = 0;
    let countPicape = 0;
    cars.map((car) => {
      if (car.category === "SUV") {
        countSUV++;
      } else if (car.category === "compacto") {
        countCompacto++;
      } else if (car.category === "sedan") {
        countSedan++;
      } else if (car.category === "utilitario") {
        countUtilitario++;
      } else if (car.category === "picape") {
        countPicape++;
      }
    });

    return [
      {
        category: "SUV",
        count: countSUV,
      },
      {
        category: "Compacto",
        count: countCompacto,
      },
      {
        category: "Sedan",
        count: countSedan,
      },
      {
        category: "Utilitario",
        count: countUtilitario,
      },
      {
        category: "Picape",
        count: countPicape,
      },
    ];
  }, []);

  function handleCollapse() {
    setIsCollapseUp(!isCollapseUp);
  }

  return (
    <Container>
      <Header onClick={() => handleCollapse()}>
        <Title>Car Filter</Title>
        <Icon isCollapseUp={isCollapseUp}>
          <FcCollapse />
        </Icon>
      </Header>
      {isCollapseUp ? (
        ""
      ) : (
        <Content>
          {categoryes.map((item, index) => {
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
                  {numberOfCarsByCategory.map((obj) => {
                    if (obj.category === item) {
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

export default FilterByCategoryCollapse;

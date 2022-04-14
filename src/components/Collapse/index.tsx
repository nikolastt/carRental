import React, { useEffect, useMemo, useState } from "react";

import { Container, Icon, Title, Header, Content, Input } from "./styles";
import { FcCollapse } from "react-icons/fc";

import cars from "../../repositories/cars";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { checked } from "../../redux/checkBoxSlice";

const Collapse: React.FC = () => {
  const [isCollapseUp, setIsCollapseUp] = useState(true);
  const dispatch = useDispatch();

  const number = useSelector((state: RootState) => state.checkBox);

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

  function handleCollapse() {
    setIsCollapseUp(!isCollapseUp);
  }
  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <Container>
      <Header>
        <Title>Car Type</Title>
        <Icon isCollapseUp={isCollapseUp} onClick={() => handleCollapse()}>
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
                    dispatch(checked(e.target.name));
                  }}
                  name={item}
                />
                <label htmlFor={item}>{item}</label>
              </Input>
            );
          })}
        </Content>
      )}
    </Container>
  );
};

export default Collapse;

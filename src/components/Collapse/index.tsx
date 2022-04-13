import React, { useMemo, useState } from "react";

import { Container, Icon, Title, Header, Content, Input } from "./styles";
import { FcCollapse } from "react-icons/fc";

import cars from "../../repositories/cars";

const Collapse: React.FC = () => {
  const [isCollapseUp, setIsCollapseUp] = useState(true);

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
          {categoryes.map((item) => {
            return (
              <Input>
                <input type="checkbox" name={item} />
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

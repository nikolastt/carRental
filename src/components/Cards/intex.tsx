import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";

import { useTheme } from "styled-components";

import {
  Container,
  ContentFooter,
  ContentHeader,
  IconHeaderFavoriteContainer,
  Amount,
} from "./styles";

interface ICardProps {
  title: string;
  img: string;
  amount: string;
  autoMaker: string;
  width?: string;
}

const Cards: React.FC<ICardProps> = ({
  title,
  img,
  amount,
  autoMaker,
  width,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();

  return (
    <Container width={width}>
      <Card className="card">
        <Card.Header className="cardHeader">
          <ContentHeader>
            <Card.Title className="cardTitle">
              {autoMaker + " "}
              {title}
            </Card.Title>
            <IconHeaderFavoriteContainer
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? (
                <MdFavorite size={20} color="red" />
              ) : (
                <MdFavoriteBorder size={20} color="white" />
              )}
            </IconHeaderFavoriteContainer>
          </ContentHeader>
        </Card.Header>
        <Card.Img className="cardImg" variant="bottom" src={img} />
        <Card.Footer className="cardFooter">
          <ContentFooter>
            <FaUser size={18} color={theme.colors.white} />
            <GiGearStickPattern size={18} color={theme.colors.white} />

            <Amount>
              R$
              <strong>{amount}</strong>
            </Amount>
          </ContentFooter>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Cards;

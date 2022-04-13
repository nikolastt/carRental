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
}

const Cards: React.FC<ICardProps> = ({ title, img, amount, autoMaker }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();

  return (
    <Container>
      <Card className="card">
        <Card.Header className="cardHeader">
          <ContentHeader>
            <Card.Title>
              {autoMaker + " "}
              {title}
            </Card.Title>
            <IconHeaderFavoriteContainer
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? (
                <MdFavorite size={20} color="red" />
              ) : (
                <MdFavoriteBorder size={20} />
              )}
            </IconHeaderFavoriteContainer>
          </ContentHeader>
        </Card.Header>
        <Card.Img className="cardImg" variant="bottom" src={img} />
        <Card.Footer className="cardFooter">
          <ContentFooter>
            <FaUser size={18} color={theme.colors.primary} />
            <GiGearStickPattern size={18} color={theme.colors.primary} />

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

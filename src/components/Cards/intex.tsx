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
  SideLeftContentFooter,
  Gears,
  Seats,
} from "./styles";
import { Skeleton, Stack } from "@mui/material";

interface ICardProps {
  title: string;
  img: string;
  amount: string;
  autoMaker: string;
  width?: string;
  isTypeFavorite?: boolean;
  seats: string;
  gear: string;
}

const Cards: React.FC<ICardProps> = ({
  title,
  img,
  amount,
  autoMaker,
  width,
  isTypeFavorite,
  seats,
  gear,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();

  return (
    <Container width={width}>
      {!img ? (
        <Stack spacing={1}>
          <Skeleton
            variant="rectangular"
            width={295}
            sx={{ borderRadius: "1rem" }}
            height={230}
          />
        </Stack>
      ) : (
        <Card className="card">
          <Card.Header className="cardHeader">
            <ContentHeader>
              <Card.Title className="cardTitle">
                {autoMaker + " "}
                {title}
              </Card.Title>
              {isTypeFavorite ?? (
                <IconHeaderFavoriteContainer
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  {isFavorite ? (
                    <MdFavorite size={20} color="red" />
                  ) : (
                    <MdFavoriteBorder size={20} color="white" />
                  )}
                </IconHeaderFavoriteContainer>
              )}
            </ContentHeader>
          </Card.Header>
          <Card.Img className="cardImg" variant="bottom" src={img} />
          <Card.Footer className="cardFooter">
            <ContentFooter>
              <SideLeftContentFooter>
                {seats ? (
                  <Seats>
                    <FaUser size={18} color={theme.colors.white} />
                    <p>{seats}</p>
                  </Seats>
                ) : (
                  ""
                )}

                {gear ? (
                  <Gears>
                    <GiGearStickPattern size={18} color={theme.colors.white} />
                    <strong>{gear == "automatico" ? "A" : "M"}</strong>
                  </Gears>
                ) : (
                  ""
                )}
              </SideLeftContentFooter>

              {amount ? (
                <Amount>
                  <p>R$ </p>

                  <strong>{amount}</strong>
                </Amount>
              ) : (
                ""
              )}
            </ContentFooter>
          </Card.Footer>
        </Card>
      )}
    </Container>
  );
};

export default Cards;

import React from "react";

import { Container, Icon, TitleIcon, DescriptionIcon } from "./styles";

interface IIconInformationProps {
  SrcImg: string;
  Title: string;
  Description: string;
}

const IconInformation: React.FC<IIconInformationProps> = ({
  SrcImg,
  Title,
  Description,
}) => {
  return (
    <Container>
      <Icon>
        <img src={SrcImg} alt="" />
      </Icon>
      <TitleIcon>{Title}</TitleIcon>
      <DescriptionIcon>{Description}</DescriptionIcon>
    </Container>
  );
};

export default IconInformation;

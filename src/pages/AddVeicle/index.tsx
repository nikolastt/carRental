import React, { useState } from "react";

import { Container, Inputs, Content } from "./styles";

import { Input, SelectPicker } from "rsuite";

import "./styles.css";

import { useTheme } from "styled-components";
import Cards from "../../components/Cards/intex";
import AppBar from "../../components/AppBar";

const AddVeicle: React.FC = () => {
  const [model, setModel] = useState("");
  const [autoMaker, setAutoMaker] = useState("");
  const [amount, setAmount] = useState("");
  const [typeFuel, setTypeFuel] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [seats, setSeats] = useState<number | null>(null);

  function handleStates(type: string, e: string) {
    switch (type) {
      case "model":
        setModel(e);
        break;

      case "autoMaker":
        setAutoMaker(e);
        break;

      case "amount":
        setAmount(e);
        break;

      case "typeFuel":
        setTypeFuel(e);
        break;

      case "category":
        setCategory(e);
        break;

      case "img":
        setImg(e);
        break;

      case "seats":
        setSeats(parseInt(e));
        break;

      default:
        break;
    }
  }

  const theme = useTheme();

  const inputStyles = {
    backgroundColor: "transparent",
    color: theme.colors.white,
    width: "300px",
    height: "35px",
    margin: "0.5rem",
  };

  const typesInputs = [
    { type: "model", placeholder: "Modelo" },
    { type: "autoMaker", placeholder: "Montadora" },
    { type: "amount", placeholder: "Valor por mes" },
    { type: "typefuel", placeholder: "Tipo de Combustível" },
    { type: "img", placeholder: "Url da imagem" },
    { type: "seats", placeholder: "Quantidade de passageiros" },
  ];

  const typeSelect = [
    {
      type: "carGear",
      placeholder: "Automático | Manual",
      data: [
        {
          label: "Automático",
          value: "automático",
          role: "Master",
        },
        {
          label: "Manual",
          value: "manual",
          role: "Master",
        },
      ],
    },
    {
      type: "category",
      placeholder: "Categoria",
      data: [
        {
          label: "Compacto",
          value: "compacto",
          role: "Master",
        },
        {
          label: "Sedan",
          value: "sedan",
          role: "Master",
        },
        {
          label: "SUV",
          value: "SUV",
          role: "Master",
        },
        {
          label: "Picape",
          value: "picape",
          role: "Master",
        },
        {
          label: "Utilitario",
          value: "utilitario",
          role: "Master",
        },
      ],
    },
  ];

  return (
    <>
      <AppBar />
      <Container>
        <h1>Adicionar veiculo</h1>

        <Content>
          <Inputs>
            {typesInputs.map((type) => (
              <Input
                key={type.type}
                size="sm"
                style={inputStyles}
                onChange={(e) => handleStates(type.type, e)}
                placeholder={type.placeholder}
              />
            ))}

            {typeSelect.map((type) => (
              <SelectPicker
                key={type.type}
                data={type.data}
                size="sm"
                style={inputStyles}
                menuStyle={{
                  backgroundColor: theme.colors.backgroundColor,
                  color: theme.colors.white,
                }}
                onChange={(e) => handleStates(type.type, e)}
                placeholder={type.placeholder}
              />
            ))}
          </Inputs>

          <Cards
            width="300px"
            title={model}
            autoMaker={autoMaker}
            img={img || "/src/assets/images/carPNG.png"}
            amount={amount}
            isTypeFavorite={false}
            seats={seats}
          />
        </Content>
      </Container>
    </>
  );
};

export default AddVeicle;

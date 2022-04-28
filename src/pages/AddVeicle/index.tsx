import React, { useCallback, useState } from "react";

import {
  Container,
  Inputs,
  Content,
  ContentHeader,
  ContentFooter,
  FormControls,
} from "./styles";

import { useTheme } from "styled-components";
import Cards from "../../components/Cards/intex";
import AppBar from "../../components/AppBar";

import { db } from "../../firebase/index";
import { collection, addDoc } from "firebase/firestore";

import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddVeicle: React.FC = () => {
  const [model, setModel] = useState("");
  const [modelError, setModelError] = useState(false);
  const [autoMaker, setAutoMaker] = useState("");
  const [autoMakerError, setAutoMakerError] = useState(false);
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState(false);
  const [typeFuel, setTypeFuel] = useState("");
  const [typeFuelError, setTypeFuelError] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [img, setImg] = useState("");
  const [imgError, setImgError] = useState(false);
  const [seats, setSeats] = useState("");
  const [seatsError, setSeatsError] = useState(false);
  const [gear, setGear] = useState("");
  const [gearError, setGearError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isSuccessInputInDataBase, setIsSuccessInputInDataBase] =
    useState(false);
  const [error, setError] = useState(false);

  const theme = useTheme();

  function verificar() {
    if (model === "") {
      setModelError(true);
    }
    if (autoMaker === "") {
      setAutoMakerError(true);
    }
    if (amount === "") {
      setAmountError(true);
    }
    if (typeFuel === "") {
      setTypeFuelError(true);
    }
    if (category === "") {
      setCategoryError(true);
    }
    if (img === "") {
      setImgError(true);
    }
    if (seats === "") {
      setSeatsError(true);
    }
    if (gear === "") {
      setGearError(true);
    }
  }

  function handleInputVeicle() {
    console.log("Renderizou");
    verificar();
  }

  return (
    <>
      <AppBar />
      <Container>
        <h1>Adicionar Veículos</h1>

        <Content>
          <ContentHeader>
            <Inputs>
              <FormControls>
                <FormControl
                  sx={{ width: "40%" }}
                  size="small"
                  error={categoryError}
                >
                  <InputLabel>Categoria</InputLabel>

                  <Select
                    value={category}
                    label="Categoria"
                    onChange={(e) => {
                      setCategoryError(false);
                      setCategory(e.target.value);
                    }}
                  >
                    <MenuItem value="">
                      <em>Nenhuma</em>
                    </MenuItem>
                    <MenuItem value={"compacto"}>Compacto</MenuItem>
                    <MenuItem value={"Sedan"}>Sedan</MenuItem>
                    <MenuItem value={"SUV"}>SUV</MenuItem>
                    <MenuItem value={"picape"}>Picape</MenuItem>
                    <MenuItem value={"ustilitario"}>Utilitario</MenuItem>
                  </Select>
                  {categoryError && (
                    <FormHelperText>Campo em branco</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  sx={{ width: "40%" }}
                  size="small"
                  error={gearError}
                >
                  <InputLabel>Câmbio</InputLabel>

                  <Select
                    value={gear}
                    label="Cambio"
                    onChange={(e) => {
                      setGearError(false);
                      setGear(e.target.value);
                    }}
                  >
                    <MenuItem value="">
                      <em>Nenhuma</em>
                    </MenuItem>
                    <MenuItem value={"manual"}>Manual</MenuItem>
                    <MenuItem value={"automatico"}>Automático</MenuItem>
                  </Select>
                  {gearError && (
                    <FormHelperText>Campo em branco</FormHelperText>
                  )}
                </FormControl>
              </FormControls>

              <TextField
                id="filled-basic"
                sx={{ width: "40%" }}
                label="Modelo"
                variant="standard"
                size="small"
                onChange={(e) => {
                  setModelError(false);
                  setModel(e.target.value);
                }}
                value={model}
                error={modelError}
                helperText="Campo em branco"
              />

              <TextField
                id="filled-basic"
                label="Marca | Montadora"
                variant="standard"
                sx={{ width: "40%" }}
                size="small"
                onChange={(e) => {
                  setAutoMakerError(false);
                  setAutoMaker(e.target.value);
                }}
                value={autoMaker}
                error={autoMakerError}
                helperText="Campo em branco"
              />

              <TextField
                id="filled-basic"
                label="Valor p/mês"
                type="number"
                variant="standard"
                sx={{ width: "40%" }}
                size="small"
                onChange={(e) => {
                  setAmountError(false);
                  setAmount(e.target.value);
                }}
                value={amount}
                error={amountError}
                helperText="Campo em branco"
              />

              <TextField
                id="filled-basic"
                label="Tipo de combustível"
                variant="standard"
                sx={{ width: "40%" }}
                size="small"
                onChange={(e) => {
                  setTypeFuelError(false);
                  setTypeFuel(e.target.value);
                }}
                value={typeFuel}
                error={typeFuelError}
                helperText="Campo em branco"
              />

              <TextField
                id="filled-basic"
                label="Url da imagem"
                variant="standard"
                sx={{ width: "40%" }}
                size="small"
                onChange={(e) => {
                  setImgError(false);
                  setImg(e.target.value);
                }}
                value={img}
                error={imgError}
                helperText="Campo em branco"
              />

              <TextField
                id="filled-basic"
                label="Assentos"
                type="number"
                variant="standard"
                sx={{ width: "40%" }}
                size="small"
                onChange={(e) => {
                  setSeatsError(false);
                  setSeats(e.target.value);
                }}
                value={seats}
                error={seatsError}
                helperText="Campo em branco"
              />
            </Inputs>

            <Cards
              width="300px"
              title={model}
              autoMaker={autoMaker}
              img={img || "/src/assets/images/car3svg.svg"}
              amount={amount}
              isTypeFavorite={false}
              seats={seats}
              gear={gear}
            />
          </ContentHeader>

          <ContentFooter>
            <Button
              variant="outlined"
              sx={{ width: "25%" }}
              size="medium"
              endIcon={<AddIcon />}
              onClick={handleInputVeicle}
            >
              Adicionar
            </Button>
          </ContentFooter>
        </Content>
      </Container>
    </>
  );
};

export default AddVeicle;

import React, { useCallback, useState } from "react";

import {
  Container,
  Inputs,
  Content,
  ContentHeader,
  ContentFooter,
  FormControls,
} from "./styles";

import Cards from "../../components/Cards/intex";
import AppBar from "../../components/AppBar";

import { db } from "../../firebase/index";
import { collection, addDoc } from "firebase/firestore";

import cars from "../../repositories/cars";

import TextField from "@mui/material/TextField";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LoadingButton from "@mui/lab/LoadingButton";

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
  const [errorInputInDataBase, setErrorInputInDataBase] = useState(false);
  const [successInputInDataBase, setSuccessInputInDataBase] = useState(false);
  const [errorCarDuplicate, setErrorCarDuplicate] = useState(false);

  const verificar = () => {
    console.log("Verificar");
    let isInvalid = false;

    if (model === "") {
      setModelError(true);
      setLoading(false);
      isInvalid = true;
    }
    if (autoMaker === "") {
      setAutoMakerError(true);
      setLoading(false);
      isInvalid = true;
    }
    if (amount === "") {
      setAmountError(true);
      setLoading(false);
      isInvalid = true;
    }
    if (typeFuel === "") {
      setTypeFuelError(true);
      setLoading(false);
      isInvalid = true;
    }
    if (category === "") {
      setCategoryError(true);
      setLoading(false);
      isInvalid = true;
    }
    if (img === "") {
      setImgError(true);
      setLoading(false);
      isInvalid = true;
    }
    if (seats === "") {
      setSeatsError(true);
      setLoading(false);
      isInvalid = true;
    }
    if (gear === "") {
      setGearError(true);
      setLoading(false);
      isInvalid = true;
    }

    return isInvalid;
  };

  async function addVeicle() {
    console.log("Entrou no add Veicle");
    await addDoc(collection(db, "cars"), {
      model,
      autoMaker,
      amount,
      typeFuel,
      category,
      img,
      seats,
      gear,
    })
      .then(() => {
        console.log("Entrou no then");
        setLoading(false);
        setSuccessInputInDataBase(true);
        setModel("");
        setAutoMaker("");
        setAmount("");
        setTypeFuel("");
        setCategory("");
        setImg("");
        setSeats("");
        setGear("");
      })
      .catch(() => {
        console.log("Entrou no catch");
        setErrorInputInDataBase(true);
        setLoading(false);
      });
  }

  function verificarDatabase() {
    let duplicate = false;
    cars.map((car) => {
      if (car.model.toLocaleLowerCase() === model.toLocaleLowerCase()) {
        setErrorCarDuplicate(true);
        setLoading(false);
        duplicate = true;
      }
    });

    return duplicate;
  }

  function handleInputVeicle() {
    setSuccessInputInDataBase(false);
    setErrorInputInDataBase(false);
    setErrorCarDuplicate(false);
    setLoading(true);
    const isInvalid = verificar();
    const duplicate = verificarDatabase();
    if (!isInvalid && !duplicate) {
      addVeicle();
    }
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
                helperText={modelError && "Campo em branco"}
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
                helperText={autoMakerError && "Campo em branco"}
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
                helperText={amountError && "Campo em branco"}
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
                helperText={typeFuelError && "Campo em branco"}
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
                helperText={imgError && "Campo em branco"}
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
                helperText={seatsError && "Campo em branco"}
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
            <Box sx={{ marginBottom: "1rem", width: "25%" }}>
              <LoadingButton
                loading={loading}
                variant="outlined"
                onClick={handleInputVeicle}
                sx={{ width: "100%" }}
                loadingIndicator={
                  <CircularProgress color="primary" size={16} />
                }
              >
                Adicionar
              </LoadingButton>
            </Box>

            {errorInputInDataBase && (
              <Box>
                <Alert
                  severity="error"
                  onClose={() => {
                    setErrorInputInDataBase(false);
                  }}
                >
                  Erro ao cadastrar o veiculo - Tente novamente!
                </Alert>
              </Box>
            )}

            {errorCarDuplicate && (
              <Box>
                <Alert
                  severity="error"
                  onClose={() => {
                    setErrorCarDuplicate(false);
                  }}
                >
                  Erro - Veículo já foi cadastrado!
                </Alert>
              </Box>
            )}

            {successInputInDataBase && (
              <Box>
                <Alert
                  severity="success"
                  onClose={() => {
                    setSuccessInputInDataBase(false);
                  }}
                >
                  Veículo cadastrado com sucesso!
                </Alert>
              </Box>
            )}
          </ContentFooter>
        </Content>
      </Container>
    </>
  );
};

export default AddVeicle;

import React, { useEffect, useState } from "react";

import {
  Container,
  Inputs,
  Content,
  ContentHeader,
  ContentFooter,
  FormControls,
  BoxCard,
  BoxButton,
  TextFields,
} from "./styles";

import Cards from "../../components/Cards/intex";
import AppBar from "../../components/AppBar";

import { db } from "../../firebase/index";
import { collection, addDoc, getDocs } from "firebase/firestore";

import TextField from "@mui/material/TextField";
import {
  Alert,
  Box,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

interface ICarProps {
  model: string;
  autoMaker: string;
  amount: string;
  typeFuel: string;
  category: string;
  img: string;
  seats: string;
  gear: string;
}

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
  const [cars, setCars] = useState<ICarProps[]>([]);

  useEffect(() => {
    async function getCarsDb() {
      const arrayCars: any = [];
      const querySnapshot = await getDocs(collection(db, "cars"));
      querySnapshot.forEach((doc) => {
        arrayCars.push(doc.data());
      });
      setCars(arrayCars);
    }

    getCarsDb();
  }, []);

  const verificar = () => {
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
      .then((doc) => {
        let data = {
          model,
          autoMaker,
          amount,
          typeFuel,
          category,
          img,
          seats,
          gear,
        };

        setCars([...cars, data]);
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
                  sx={{ width: "45%", m: 1 }}
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
                    <MenuItem value={"utilitario"}>Utilitario</MenuItem>
                  </Select>
                  {categoryError && (
                    <FormHelperText>Campo em branco</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  sx={{ width: "45%", m: 1 }}
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

              <TextFields>
                <TextField
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
                  size="small"
                  onChange={(e) => {
                    setSeatsError(false);
                    setSeats(e.target.value);
                  }}
                  value={seats}
                  error={seatsError}
                  helperText={seatsError && "Campo em branco"}
                />
              </TextFields>
            </Inputs>

            <BoxCard>
              <Cards
                width="100%"
                title={model}
                autoMaker={autoMaker}
                img={
                  img ||
                  "https://media.discordapp.net/attachments/730409029217681421/969777144827904030/unknown.png?width=1352&height=676"
                }
                amount={amount}
                isTypeFavorite={false}
                seats={seats}
                gear={gear}
              />
            </BoxCard>
          </ContentHeader>

          <ContentFooter>
            {errorInputInDataBase && (
              <Box>
                <Snackbar
                  open={errorInputInDataBase}
                  autoHideDuration={5000}
                  onClose={() => setErrorInputInDataBase(false)}
                >
                  <Alert
                    onClose={() => setErrorInputInDataBase(false)}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Erro ao cadastrar o veículo - Tente novamente!
                  </Alert>
                </Snackbar>
              </Box>
            )}

            {errorCarDuplicate && (
              <Box>
                <Snackbar
                  open={errorCarDuplicate}
                  autoHideDuration={5000}
                  onClose={() => setErrorCarDuplicate(false)}
                >
                  <Alert
                    onClose={() => setErrorCarDuplicate(false)}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Erro - Veículo já foi cadastrado!
                  </Alert>
                </Snackbar>
              </Box>
            )}

            {successInputInDataBase && (
              <Box>
                <Snackbar
                  open={successInputInDataBase}
                  autoHideDuration={5000}
                  onClose={() => setSuccessInputInDataBase(false)}
                >
                  <Alert
                    onClose={() => setSuccessInputInDataBase(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Veículo cadastrado com sucesso!
                  </Alert>
                </Snackbar>
              </Box>
            )}

            <BoxButton>
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
            </BoxButton>
          </ContentFooter>
        </Content>
      </Container>
    </>
  );
};

export default AddVeicle;

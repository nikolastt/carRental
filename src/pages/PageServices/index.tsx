import React, { useEffect, useMemo, useState } from "react";

import {
  Container,
  Title,
  PageHeader,
  Img,
  Gradient,
  SectionAdvantage,
  TitleSectionAdvantage,
  ContentSectionAdvantage,
  SideLeft,
  InfoDate,
} from "./styles";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";

import Cards from "../../components/Cards/intex";
import IconInformation from "../../components/IconInformation";

// import Cars from "../../repositories/cars";
import AppBar from "../../components/AppBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import { useSelector, useDispatch } from "react-redux";
import { getCars, ICarProps } from "../../redux/carsSlice";
import { RootState } from "../../redux/store";

const pageServices: React.FC = () => {
  const dispatch = useDispatch();

  const [cars, setCars] = useState<ICarProps[]>([]);

  useEffect(() => {
    let cars: any = [];
    async function getCarsDb() {
      const querySnapshot = await getDocs(collection(db, "cars"));
      querySnapshot.forEach((doc) => {
        cars.push(doc.data());
      });
      dispatch(getCars(cars));
      setCars(cars);
    }

    getCarsDb();
  }, []);

  function getRandomNumber() {
    const number = Math.floor(Math.random() * (cars.length - 0) + 0);
    return number;
  }

  const carsInPromotion = useMemo(() => {
    let numbers: number[] = [];

    for (let i = 0; i < 4; i++) {
      const numberRandom = getRandomNumber();
      console.log(numberRandom);

      if (numbers.includes(numberRandom)) {
        numbers.push(numberRandom);
      } else {
        numbers.push(numberRandom);
      }
    }

    const carsInPromotion = numbers.map((number) => cars[number]);

    return carsInPromotion;
  }, [cars]);

  console.log(carsInPromotion, "cars in promotion");

  return (
    <>
      <AppBar />
      <Container>
        <PageHeader>
          <SideLeft>
            <Title>
              Alugue Seu <br />
              Veículo
            </Title>

            <InfoDate>
              <h1>Datas para alugar o carro</h1>
            </InfoDate>
          </SideLeft>
          <Img>
            <Gradient></Gradient>
            <img src="\src\assets\images\veicleHomePage.png" alt="" />
          </Img>
        </PageHeader>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {cars?.map((car, index) => {
            return (
              <SwiperSlide key={car.model + index}>
                <Cards
                  title={car.model}
                  img={car.img}
                  amount={car.amount}
                  autoMaker={car.automaker}
                  gear={car.gear}
                  seats={car.seats}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SectionAdvantage>
          <TitleSectionAdvantage>Nossas Vantagens</TitleSectionAdvantage>
          <ContentSectionAdvantage>
            <IconInformation
              Title="+50 CARROS"
              Description="Mais de 50 carros com categorias diferentes"
              SrcImg="\src\assets\images\carro-eletrico.png"
            />

            <IconInformation
              Title="PREÇOS BAIXOS"
              Description="Promoções imperdíveis"
              SrcImg="\src\assets\images\low-price.png"
            />

            <IconInformation
              Title="SUPORTE 24 HORAS"
              Description="Suporte disponível 24 horas, para dúvidas."
              SrcImg="\src\assets\images\customer-service.png"
            />
          </ContentSectionAdvantage>
        </SectionAdvantage>
      </Container>
    </>
  );
};

export default pageServices;

import React, { useMemo } from "react";

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

import Cars from "../../repositories/cars";
import AppBar from "../../components/AppBar";

const pageServices: React.FC = () => {
  function getRandomNumber() {
    const number = Math.floor(Math.random() * (Cars.length - 0) + 0);
    return number;
  }

  const carsInPromotion = useMemo(() => {
    const numbers: number[] = [];

    for (let i = 0; i < 4; i++) {
      const numberRandom = getRandomNumber();
      if (numbers.includes(numberRandom)) {
        i--;
        return;
      } else {
        numbers.push(numberRandom);
      }
    }

    const carsInPromotion = numbers.map((number) => Cars[number]);
    console.log(carsInPromotion);

    return carsInPromotion;
  }, []);

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
          {carsInPromotion?.map((car, index) => {
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

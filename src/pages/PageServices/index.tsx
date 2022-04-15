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
} from "./styles";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

import Cards from "../../components/Cards/intex";
import IconInformation from "../../components/IconInformation";

import Cars from "../../repositories/cars";

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
    <Container>
      <PageHeader>
        <Title>
          Alugue Seu <br />
          Veículo
        </Title>
        <Img>
          <Gradient></Gradient>
          <img src="\src\utils\images\veicleHomePage.png" alt="" />
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
        modules={[EffectCoverflow, Pagination, Navigation]}
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
            SrcImg="\src\utils\images\carro-eletrico.png"
          />

          <IconInformation
            Title="PREÇOS BAIXOS"
            Description="Promoções imperdíveis"
            SrcImg="\src\utils\images\low-price.png"
          />

          <IconInformation
            Title="SUPORTE 24 HORAS"
            Description="Suporte disponível 24 horas, para dúvidas."
            SrcImg="\src\utils\images\customer-service.png"
          />
        </ContentSectionAdvantage>
      </SectionAdvantage>
    </Container>
  );
};

export default pageServices;

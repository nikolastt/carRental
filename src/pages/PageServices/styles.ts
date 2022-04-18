import styled from 'styled-components';

export const Container = styled.div`  
  height: 100%;
  padding: 1rem;  
 

  & .swiper {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  
  
  }

  & .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  }
  
`;

export const Title = styled.h1`
  font-family: 'lora';
  font-size: 40px;
  color: ${props => props.theme.colors.white};

`

export const PageHeader = styled.div`
  display: flex;
  margin-bottom: 4.5rem;


`
export const Img = styled.div`
  margin-left: auto;  
  position: relative;
  z-index: 1;
  & img {
    width: 90%
  }
`


export const Gradient = styled.div`
  width: 110px;
  height: 100px;
  background-image: linear-gradient(to top, #0f0f0f 0%, #EE7116 100%);  
  position: absolute;
  top: -5%;
  left: 50%;
  border-radius: 50%;
  z-index: -1;  
  filter: brightness(130%);

`

export const SectionAdvantage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

 & img{
   color: red;
 }
`

export const TitleSectionAdvantage = styled.h2`
  margin-top: 4.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Lora';
  
`

export const ContentSectionAdvantage = styled.div`
  display: flex;
  justify-content: center;
`


export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
`
export const InfoDate = styled.div`

`

import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 250px;  
  height: 200px;  
  justify-content: center;
  flex-direction: column;
  align-items: center;  
  margin: 0 2rem;
`;


export const Icon = styled.div`
    border: 1px solid ${props => props.theme.colors.info} ;    
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    & img{
        width: 35px;
        height: 35px;
    }
`


export const TitleIcon = styled.h5`
    

`


export const DescriptionIcon = styled.p`
    text-align: center;
    

`



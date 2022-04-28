import styled from 'styled-components';


export const Container = styled.div`   
   

  
`

export const Inputs = styled.div`    
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 65%;
    

`

export const Content = styled.div`
    margin-top: 5rem;
    width: 100%;
    height: 100%;
    padding: 3rem;    
    
    border: 1px solid ${props => props.theme.colors.info};

    background-image: linear-gradient(120deg, #101010 0%, #000  100%);    

    background: rgba(238, 113, 22, 0.01);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);

    & .rs-btn-default{
        background-color: transparent !important;

        & .rs-picker-search-bar{
        
            background-color: transparent !important;
        }
    }      
`

export const Footer = styled.div`

`


export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ContentFooter = styled.div`
    display: flex;    
    justify-content: center;
    margin-top: 1rem;
      
`

export const FormControls = styled.div`
    display: flex;
    justify-content:space-between;
    
    width: 100%;
`





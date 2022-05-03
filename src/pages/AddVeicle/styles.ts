import styled from 'styled-components';


export const Container = styled.div`   
   h1{
       margin-top: 1rem;
   }

  
`

export const Inputs = styled.div`    
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 65%;

    & .MuiTextField-root{
        
        margin: 1rem;
        width: 42%;


        @media (max-width: 515px) {               
            width: 90%;
        }
    }



    @media (max-width: 895px) {     
            width: 100%;
            flex-direction: column;
    }
    

`

export const Content = styled.div`
    margin-top: 2rem;
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
    
    
    @media (max-width: 550px) {     
            padding: 1rem;
    }
`

export const Footer = styled.div`

`


export const ContentHeader = styled.div`
    display: flex;
    /* justify-content: space-around; */


    @media (max-width: 895px) {     
        flex-direction: column; 
        align-items: center;  
    }
`

export const ContentFooter = styled.div`
    display: flex; 
    flex-direction: column;   
    align-items: center;
    margin-top: 1rem;
      
`

export const FormControls = styled.div`
    display: flex;    
    justify-content: space-between;
    width: 100%;
`

export const BoxCard = styled.div`
    display: flex;
    width: 35%;
    align-items: center;
    height: 250px;

    @media (max-width: 895px) {     
        width : 60%;
    }

    @media (max-width: 700px) {     
        width : 100%;  
    }


`

export const BoxButton = styled.div`
    margin-top: 1rem;
    width: 25%;


    @media (max-width: 490px) {     
        width : 75%;  
    }
`

export const TextFields = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`





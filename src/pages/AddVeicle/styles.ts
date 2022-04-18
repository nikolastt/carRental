import styled from 'styled-components';

export const Container = styled.div`
    
  
`;

export const Inputs = styled.div`    
    display: flex;
    flex-wrap: wrap;
    width: 65%;
    max-height: 300px;

`

export const Content = styled.div`
    margin-top: 5rem;
    width: 100%;
    height: 100%;
    padding: 3rem;
    display: flex;
    justify-content: space-around;
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



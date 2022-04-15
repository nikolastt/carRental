import styled from 'styled-components';

interface IContainerProps{
    width?: string;
}

export const Container = styled.div<IContainerProps>`
    width: ${props => props.width};    
    height: 250px;
    padding: 1rem;

    .card{
        height: 100%;
        padding: 0.5rem;
        border-radius: 1.5rem;
        border: none;
        overflow: hidden;
        background-color: ${props => props.theme.colors.info};
    }
    .cardHeader{
        height: 15%;
        border: none;
        background-color: ${props => props.theme.colors.info};
    }
    .cardImg{
        height: 70%;
        object-fit: scale-down;
        transform: scale(0.9);
    }
    .cardFooter{
        height: 15%;
        border: none;
        background-color: ${props => props.theme.colors.info};
    }

    .cardTitle{
        color: ${props => props.theme.colors.white};
        /* font-family: 'Roboto'; */
        
    }
`;

export const CardHeader = styled.div`
        display: flex;
`;


export const ContentFooter = styled.div`
    display: flex;   
`;


export const ContentHeader = styled.div`
    display: flex;

    
`;

export const IconHeaderFavoriteContainer = styled.div`
    margin-left: auto;
    cursor: pointer;    
`;

export const Amount = styled.p`
    margin-left: auto;
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.white};

    & strong{
        margin-left: 0.2rem;
    }
`





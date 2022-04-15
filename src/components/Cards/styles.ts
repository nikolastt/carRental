import styled from 'styled-components';

export const Container = styled.div`
    width: 31%;
    margin: 1rem 0 1rem 1rem;
    height: 250px;

    .card{
        height: 100%;
        padding: 0.5rem;
        border-radius: 2rem;
        border: none;
        overflow: hidden;
    }
    .cardHeader{
        height: 15%;
        border: none;
        background-color: ${props => props.theme.colors.white};
    }
    .cardImg{
        height: 70%;
        object-fit: scale-down;
        transform: scale(0.9);
    }
    .cardFooter{
        height: 15%;
        border: none;
        background-color: ${props => props.theme.colors.white};
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
    color: ${props => props.theme.colors.black};

    & strong{
        margin-left: 0.2rem;
    }
`





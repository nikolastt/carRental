import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;    
    align-items: center;
    padding: 0 1rem;
`;



export const Login = styled.div`


`


export const Navigation = styled.nav`
     margin-left: auto;
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
   
    
    & li{
        margin-left: 1.5rem;
    }
    
    & a{
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
`

export const Logo = styled.h2`
    font-family: 'Lora';
    font-size: 25px;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    
    & .link{
        text-decoration: none;
        color: inherit;
    }


    & span{
        font-family: 'Lora';
        color: ${props => props.theme.colors.info}
    }

`



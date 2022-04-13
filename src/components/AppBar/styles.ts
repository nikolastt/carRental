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
    
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    
    & li{
        margin-left: 1.5rem;
    }
    
    & a{
        text-decoration: none;
        color: ${props => props.theme.colors.black};
    }
`



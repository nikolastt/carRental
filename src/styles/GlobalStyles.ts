import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    html{
        background-color: ${props => props.theme.colors.backgroundColor}
    }

    html, body, #root{
        padding: 0 1rem ;
        height: 100%;
        background-color: ${props => props.theme.colors.backgroundColor};
        color: ${props => props.theme.colors.white}
    }

    *, button, input{
        border: none;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }

    a{ 
        text-decoration: none ;       
    }



    button{
        cursor: pointer;
    }

`



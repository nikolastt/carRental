import styled from 'styled-components';

interface ICollapseProps{
    isCollapseUp: boolean;
}

export const Container = styled.div`
   margin-bottom: 1rem;

   

`;

export const Icon = styled.div<ICollapseProps>`
    display: flex;
    align-items: center;
    transition: all .5s;
    ${props => props.isCollapseUp? '' : 'transform: rotateX(180deg)' };    
    margin-left: auto;
    cursor: pointer;
`

export const Title = styled.p`
    display: flex;
    align-items: center;
    margin: 0;
`

export const Header = styled.div`
    display: flex;   
    cursor: pointer; 
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding:  1rem;
    
`

export const Input = styled.div`

    margin-bottom: 0.5rem;

    & input{
        margin-right: 0.5rem;
    }
`



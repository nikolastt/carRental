import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;   
  background-color: ${props => props.theme.colors.backgroundColor};  
  border-radius: 1.5rem;  
  padding: 1rem 0;
`;

export const Content = styled.div`
    display: flex;    
    flex-wrap: wrap;
    height: 100%;
    width: 80%;
    
`;


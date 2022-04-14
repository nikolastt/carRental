import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: ${props => props.theme.colors.backgroundColor};  
  border-radius: 1rem;  
  padding: 1rem;
`;

export const Content = styled.div`
    display: flex;    
    flex-wrap: wrap;
    height: 100%;
    width: 80%;
`;


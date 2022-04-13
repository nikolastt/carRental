import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1rem;  
  padding: 1rem;
`;

export const Content = styled.div`
    display: flex;    
    flex-wrap: wrap;
    width: 80%;
`;


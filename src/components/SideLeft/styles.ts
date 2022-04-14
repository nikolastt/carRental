import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 1rem;
`;

export const Title = styled.p`
    font-weight: 900;
`
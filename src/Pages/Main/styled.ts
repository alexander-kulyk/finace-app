import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.bgPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

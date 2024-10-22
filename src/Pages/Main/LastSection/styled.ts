import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;

  background: radial-gradient(
    circle at center,
    ${(props) => props.theme.bgSecondary} -270%,
    ${(props) => props.theme.bgPrimary} 45%
  );
`;

import styled from 'styled-components';

export const Section = styled.section`
  background: radial-gradient(
    circle at center,
    ${(props) => props.theme.bgSecondary} -270%,
    ${(props) => props.theme.bgPrimary} 55%
  );
`;

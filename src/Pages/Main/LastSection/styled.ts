import styled from 'styled-components';
import bgImage from '../../../assets/image/632.png';

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: radial-gradient(
    circle at center,
    ${(props) => props.theme.bgSecondary} -270%,
    ${(props) => props.theme.bgPrimary} 45%
  );

  /* background-image: url(${bgImage});
  background-size: contain;
  width: 100%;
  height: 100%; */
`;

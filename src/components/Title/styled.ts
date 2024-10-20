import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fontStylePrimary};
  color: ${(props) => props.theme.textColorPrimary};
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.textColorPrimary},
    ${(props) => props.theme.secondaryColor}
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

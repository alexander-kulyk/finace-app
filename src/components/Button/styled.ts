import styled from 'styled-components';
import { transparentize } from 'polished';

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  width: 135px;
  height: 36px;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 50px;
  border: 1px solid
    ${(props) => transparentize(0.7, props.theme.secondaryColor)};

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    cursor: pointer;
    color: white;
    box-shadow: 0px 5px 50px -15px rgba(94, 176, 239, 0.55);
  }
`;

export const WrapperTitle = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;

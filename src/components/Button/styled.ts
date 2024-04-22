import styled from 'styled-components';

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  width: 135 px;
  height: 36px;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 50px;
  border-color: ${(props) => props.theme.secondaryColor};

  &:hover {
    cursor: pointer;
  }
`;

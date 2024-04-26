import styled from 'styled-components';

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  width: 135 px;
  height: 36px;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.secondaryColor};

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

export const WrapperTitle = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;

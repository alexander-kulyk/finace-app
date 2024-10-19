import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  margin-bottom: 100px;
`;

export const Logo = styled.div`
  margin-left: 100px;
  color: white;
  margin-top: 0;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const ButtonWrapper = styled.div`
  &::before {
    position: absolute;
    top: 35px;
    left: 15px;
    content: '';
    width: 105px;
    height: 1px;
    background-image: radial-gradient(
      at top,
      ${(props) => props.theme.bgSecondary},
      ${(props) => props.theme.bgPrimary}
    );
  }
`;

export const NewsLink = styled.a`
  color: ${(props) => props.theme.secondaryColor};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  margin-right: 25px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

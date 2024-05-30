import { transparentize } from 'polished';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #101115;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 720px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => transparentize(0.7, props.theme.secondaryColor)};
`;

export const LinkPages = styled(NavLink)`
  color: ${(props) => props.theme.secondaryColor};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
  text-decoration: none;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  &:first-child {
    margin-top: 20px;
  }

  &.active {
    border-radius: 5px;
    color: white;
    background-color: ${(props) =>
      transparentize(0.7, props.theme.secondaryColor)};
    cursor: default;
  }
`;

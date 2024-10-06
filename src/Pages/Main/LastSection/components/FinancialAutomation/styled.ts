import { transparentize } from 'polished';
import styled from 'styled-components';

export const Title = styled.h3`
  font-family: 'Fira Sans';
  color: ${(props) => props.theme.textColorPrimary};
  text-align: start;
  font-weight: 200;
  font-size: 20px;
`;

export const Paragraph = styled.p`
  display: block;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => transparentize(0.8, props.theme.secondaryColor)};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
`;

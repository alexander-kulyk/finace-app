import styled from 'styled-components';
import { transparentize } from 'polished';

export const Card = styled.div`
  width: min-content;
  height: auto;
  background-color: ${transparentize(0.5, '#18181b')};
  border-radius: 10px;
  border: 1px solid
    ${(props) => transparentize(0.7, props.theme.secondaryColor)};
`;

export const Image = styled.img``;

export const WrapperImage = styled.div`
  background-image: url('../../../assets/image/insights_bg.png');
  background-size: cover;
`;

export const WrapperText = styled.div`
  margin-left: 30px;
`;

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

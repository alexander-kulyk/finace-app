import { transparentize } from 'polished';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 1230px;
`;

export const Cards = styled.div`
  width: min-content;
  height: 480px;
  background-color: '#18181B';
  border-radius: 10px;
  border: 1px solid
    ${(props) => transparentize(0.7, props.theme.secondaryColor)};
`;

export const Cards_forth = styled.div`
  width: 535px;
  height: 480px;
  background-color: '#18181B';
  border-radius: 10px;
  border: 1px solid
    ${(props) => transparentize(0.7, props.theme.secondaryColor)};
`;

export const Cards_fifth = styled.div`
  width: 490px;
  height: 480px;
  background-color: '#18181B';
  border-radius: 10px;
  border: 1px solid
    ${(props) => transparentize(0.7, props.theme.secondaryColor)};
`;

export const CardsWrapper = styled.div`
  grid-column: 1 / 2;
`;

export const WrapperImage = styled.div`
  background-image: url('../../../assets/image/insights_bg.png');
  background-size: cover;
`;

export const Image = styled.img``;

export const WrapperText = styled.div``;

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

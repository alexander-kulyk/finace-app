import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;

  &::after {
    position: absolute;
    bottom: -99px;
    left: 915px;
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

export const WrapperTitle = styled.div`
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  font-family: 'Fira Sans';
  color: white;
  text-align: start;
  font-weight: 700;
  font-size: 40px;
  background-image: linear-gradient(
    90deg,
    #ffffff,
    ${(props) => props.theme.secondaryColor}
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Paragraph = styled.p`
  display: block;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.secondaryColor};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
`;
export const Span = styled.span`
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
`;

export const CardsWrapper = styled.div`
  display: flex;
  :first-child {
    margin-right: 10px;
  }
`;

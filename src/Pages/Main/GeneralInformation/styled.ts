import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SecondaryContainer = styled.div`
  width: 533px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
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

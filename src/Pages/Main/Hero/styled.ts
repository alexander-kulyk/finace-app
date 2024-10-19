import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background: radial-gradient(
    circle at top,
    ${(props) => props.theme.bgSecondary} -60%,
    ${(props) => props.theme.bgPrimary} 37%
  );
`;

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 32px;
  /* border-bottom-width: 1px; 
  border-bottom-style: solid; 
  border-image: linear-gradient(
      to right,
      ${(props) => props.theme.bgPrimary} 10%,
      ${(props) => props.theme.bgSecondary},
      ${(props) => props.theme.bgPrimary}
    )
    0.5;  */

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

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 25px;
  font-family: 'Fira Sans';
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 50px;
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
  margin-top: 0;
  margin-bottom: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.secondaryColor};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
`;

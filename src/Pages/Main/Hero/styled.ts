import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 0;
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

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const IconWrapper = styled.div`
  margin-top: 5px;
`;

export const ButtonContainer = styled.div``;

export const ButtonWrapper = styled.div`
  margin-bottom: 32px;
  position: relative;
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

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const WrapperTitle = styled.div`
  width: 495px;
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

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    circle at top,
    ${(props) => props.theme.bgSecondary} 0,
    0001%,
    ${(props) => props.theme.bgPrimary} 30%
  );
`;

export const TitleWrapper = styled.h1`
  width: 761 px;
`;

export const Title = styled.h1`
  color: white;
`;

export const Paragraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.secondaryColor};
`;

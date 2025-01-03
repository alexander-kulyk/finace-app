import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
`;

export const WrapperCard = styled.div<{ span?: number }>`
  grid-column: span ${({ span }) => span || 4};
`;

export const Paragraph = styled.p`
  display: block;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.secondaryColor};
  font-family: ${(props) => props.theme.fontStyleSecondary};
  text-align: start;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.fontStyleSecondary};
  text-align: start;
`;

export const TextWrapper = styled.div`
  grid-column: span 12;
  width: 491px;
  & h2 {
    text-align: start;
  }
  margin-bottom: 64px;
`;

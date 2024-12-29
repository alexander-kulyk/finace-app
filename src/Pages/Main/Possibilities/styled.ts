import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(12, 1fr); 12 колонок */
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 1280px;
`;

export const WrapperCard = styled.div`
  & img {
    margin-top: 30px;
    margin-bottom: 60px;
  }
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
  min-width: 576px;
`;

export const FirstRow = styled.div`
  grid-column: span 4;
`;

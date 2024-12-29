import styled from 'styled-components';

export const Container = styled.section``;

export const SecondaryContainer = styled.div`
  width: 533px;
`;

export const Wrapper = styled.div`
  width: 1230px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
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

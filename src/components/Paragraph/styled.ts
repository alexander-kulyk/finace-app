import styled from 'styled-components';

export const Paragraph = styled.p`
  display: block;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.secondaryColor};
  font-family: ${(props) => props.theme.fontStyleSecondary};
  text-align: start;
`;

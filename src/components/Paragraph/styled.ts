import styled from 'styled-components';

export const Paragraph = styled.p<{ isHovered?: boolean }>`
  display: block;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) =>
    props.isHovered ? props.theme.primaryColor : props.theme.secondaryColor};
  text-align: start;
`;

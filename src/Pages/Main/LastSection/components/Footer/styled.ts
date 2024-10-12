import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1250px;
  padding-top: 20px;
  margin-bottom: 100px;
  border-top: 1px solid white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperCopyright = styled.div`
  display: block;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.secondaryColor};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
`;

export const Paragraph = styled.p`
  width: 850px;
  display: block;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => transparentize(0.8, props.theme.secondaryColor)};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: start;
`;

export const WrapperSocialMedia = styled.div``;

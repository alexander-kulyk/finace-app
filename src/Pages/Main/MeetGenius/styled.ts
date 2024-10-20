import styled from 'styled-components';
import lightImage from '../../../assets/image/light.png';

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;

  &::after {
    position: absolute;
    bottom: -164px;
    left: 556px;
    content: '';
    background-image: url(${lightImage});
    width: 500px;
    height: 3px;
    background-size: contain;
  }
`;

export const WrapperTitle = styled.div`
  grid-column: 1 / 3;
  margin-bottom: 60px;
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
  color: ${(props) => props.theme.textColorPrimary};
  font-family: ${(props) => props.theme.fontStyleSecondary};
  text-align: start;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  & > :last-child {
    margin-left: 10px;
  }
`;

//core
import { FC } from 'react';
//components
import * as S from './styled';

interface IProps {
  styles?: React.CSSProperties;
  titleTag?: string;
  text: string;
}

export const Title: FC<IProps> = ({ text, styles, titleTag }) => {
  return (
    <S.Title as={titleTag} style={styles}>
      {text}
    </S.Title>
  );
};

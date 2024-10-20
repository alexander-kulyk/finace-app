//core
import { CSSProperties, FC } from 'react';
//component
import * as S from './styled';

interface IProps {
  text: string;
  styles?: CSSProperties;
}

export const Paragraph: FC<IProps> = ({ text, styles }) => {
  return <S.Paragraph style={styles}>{text}</S.Paragraph>;
};

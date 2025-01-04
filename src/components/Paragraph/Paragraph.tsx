//core
import { CSSProperties, FC } from 'react';
//component
import * as S from './styled';

interface IProps {
  text: string;
  styles?: CSSProperties;
  isHovered?: boolean;
}

export const Paragraph: FC<IProps> = ({ text, styles, isHovered }) => {
  return (
    <S.Paragraph isHovered={isHovered} style={styles}>
      {text}
    </S.Paragraph>
  );
};

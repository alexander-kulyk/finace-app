//core
import { CSSProperties } from 'react';
//components
import { Paragraph, Title } from '../../components';
import * as S from './styled';

interface IProps {
  image: string;
  title: string;
  paragraph: string;
  titleStyle?: CSSProperties;
  styles?: {
    card?: CSSProperties;
    image?: CSSProperties;
    title?: CSSProperties;
  };
}

export const Card: React.FC<IProps> = ({ image, title, paragraph, styles }) => {
  console.log('styles?.title', styles?.title);
  return (
    <S.Card style={styles?.card}>
      <S.Image style={styles?.image} src={`${image}`} />
      <S.WrapperText>
        <Title text={title} styles={styles?.title} />
        <Paragraph text={paragraph} />
      </S.WrapperText>
    </S.Card>
  );
};

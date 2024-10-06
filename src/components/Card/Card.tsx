import * as S from './styled';

interface IProps {
  image: string;
  title: string;
  paragraph: string;
}

export const Card: React.FC<IProps> = ({ image, title, paragraph }) => {
  return (
    <S.Card>
      <S.Image src={`${image}`} />
      <S.WrapperText>
        <S.Title>{title}</S.Title>
        <S.Paragraph>{paragraph}</S.Paragraph>
      </S.WrapperText>
    </S.Card>
  );
};

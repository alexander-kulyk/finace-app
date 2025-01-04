//core
import { CSSProperties } from 'styled-components';
//components
import { Button, Title, Paragraph } from '../../../../../components';
import * as S from './styled';

const styles: { [key: string]: CSSProperties } = {
  title: {
    fontSize: 30,
  },
  paragraph: {
    marginBottom: 40,
  },
};

export const FinancialTools: React.FC = () => {
  const onClickJoinUs = () => {
    window.open(
      'https://accounts.binance.com/en/register/business?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vY3J5cHRvL2J1eQ%3D%3D',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <Title
          text={'See where financial automation can take your business.'}
          styles={styles.title}
        />
      </S.WrapperTitle>
      <Paragraph
        text={
          'The first financial tool you will love. And the last one you will ever need.'
        }
        styles={styles.paragraph}
      />
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button onClick={onClickJoinUs} title={'Join us'} />
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

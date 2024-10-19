import { Button } from '../../../../../components';
import * as S from './styled';

export const FinancialAutomation: React.FC = () => {
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
        <S.Title>
          {'See where financial automation can take your business.'}
        </S.Title>
      </S.WrapperTitle>
      <S.Paragraph>
        {
          'The first financial tool you will love. And the last one you will ever need.'
        }
      </S.Paragraph>
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button onClick={onClickJoinUs} title={'Join us'} />
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

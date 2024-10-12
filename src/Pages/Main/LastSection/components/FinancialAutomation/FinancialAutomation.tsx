import { Button } from '../../../../../components';
import * as S from './styled';

export const FinancialAutomation: React.FC = () => {
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
          <Button title={'Join us'} />
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

//component
import * as S from './styled';
import { FinancialAutomation } from './components';
import { Footer } from './components/Footer';

export const LastSection: React.FC = () => {
  return (
    <S.Section>
      <FinancialAutomation />
      <Footer />
    </S.Section>
  );
};

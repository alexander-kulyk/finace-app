//component
import { FinancialAutomation } from './components';
import { Footer } from './components/Footer';
import * as S from './styled';

export const LastSection: React.FC = () => {
  return (
    <S.Section className='container'>
      <FinancialAutomation />
      <Footer />
    </S.Section>
  );
};

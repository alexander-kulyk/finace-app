//component
import { FinancialTools } from './components';
import { Footer } from './components/Footer';
import * as S from './styled';

export const FinancialAutomation: React.FC = () => {
  return (
    <S.Section className='container'>
      <FinancialTools />
      <Footer />
    </S.Section>
  );
};

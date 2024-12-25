//core
import { BrowserRouter } from 'react-router-dom';
//components
import { CryptoArea } from './components';
import * as S from './styled';

export const CryptoAnalytics: React.FC = () => {
  return (
    <S.Container id='cryptoAnalytics'>
      <BrowserRouter basename='finace-app'>
        <CryptoArea />
      </BrowserRouter>
    </S.Container>
  );
};

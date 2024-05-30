//core
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//components
import { CryptoArea } from './components';
import * as S from './styled';

export const CryptoAnalytics: React.FC = () => {
  return (
    <S.Container>
      <BrowserRouter basename='finace-app'>
        <CryptoArea />
      </BrowserRouter>
    </S.Container>
  );
};

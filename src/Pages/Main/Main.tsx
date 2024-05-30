//core
import React from 'react';
//components
import { GeneralInformation } from './GeneralInformation';
import { CryptoAnalytics } from './CryptoAnalytics';
import { Possibilities } from './Possibilities';
import { Hero } from './Hero';
import * as S from './styled';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Hero />
      <CryptoAnalytics />
      <GeneralInformation />
      <Possibilities />
    </S.Main>
  );
};

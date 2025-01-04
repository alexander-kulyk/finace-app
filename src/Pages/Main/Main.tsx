//core
import React from 'react';
//components
import { FinancialAutomation } from './FinancialAutomation';
import { GeneralInformation } from './GeneralInformation';
import { CryptoAnalytics } from './CryptoAnalytics';
import { Possibilities } from './Possibilities';
import { MeetGenius } from './MeetGenius';
import { Hero } from './Hero';
import * as S from './styled';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Hero />
      {/* @ts-ignore */}
      <CryptoAnalytics />
      <GeneralInformation />
      <Possibilities />
      <MeetGenius />
      <FinancialAutomation />
    </S.Main>
  );
};

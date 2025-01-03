//core
import React from 'react';
//components
import { GeneralInformation } from './GeneralInformation';
import { CryptoAnalytics } from './CryptoAnalytics';
import { Possibilities } from './Possibilities';
import { LastSection } from './LastSection';
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
      <LastSection />
    </S.Main>
  );
};

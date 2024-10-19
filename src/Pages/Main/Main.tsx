//core
import React, { useRef } from 'react';
//components
import { GeneralInformation } from './GeneralInformation';
import { CryptoAnalytics } from './CryptoAnalytics';
import { Possibilities } from './Possibilities';
import { LastSection } from './LastSection';
import { MeetGenius } from './MeetGenius';
import { Hero } from './Hero';
import * as S from './styled';

export const Main: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <S.Main>
      <Hero sectionRef={sectionRef} />
      {/* @ts-ignore */}
      <CryptoAnalytics sectionRef={sectionRef} />
      <GeneralInformation />
      <Possibilities />
      <MeetGenius />
      <LastSection />
    </S.Main>
  );
};

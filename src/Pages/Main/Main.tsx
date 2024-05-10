//core
import React from 'react';
//components
import { GeneralInformation } from './GeneralInformation';
import { Hero } from './Hero';
import * as S from './styled';
import { Possibilities } from './Possibilities';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Hero />
      <GeneralInformation />
      <Possibilities />
    </S.Main>
  );
};

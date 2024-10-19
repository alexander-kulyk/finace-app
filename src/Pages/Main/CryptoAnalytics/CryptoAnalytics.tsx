//core
import React, { MutableRefObject, RefObject } from 'react';
import { BrowserRouter } from 'react-router-dom';
//components
import { CryptoArea } from './components';
import * as S from './styled';

interface IProps {
  sectionRef: MutableRefObject<HTMLDivElement>;
}

export const CryptoAnalytics: React.FC<IProps> = ({ sectionRef }) => {
  return (
    <S.Container ref={sectionRef}>
      <BrowserRouter basename='finace-app'>
        <CryptoArea />
      </BrowserRouter>
    </S.Container>
  );
};

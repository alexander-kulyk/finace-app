//core
import React from 'react';
import { Outlet } from 'react-router-dom';
//components
import * as S from './styled';

export const Navigation: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <S.LinkPages to='bitcoin'>Bitcoin</S.LinkPages>
        <S.LinkPages to='ethereum'>Ethereum</S.LinkPages>
        <S.LinkPages to='tether'>Tether</S.LinkPages>
      </S.Menu>
      <Outlet />
    </S.Wrapper>
  );
};

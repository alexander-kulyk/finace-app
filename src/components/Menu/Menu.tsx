//core
import React from 'react';
//components
import { Button } from '../Button';
import * as S from './styled';

export const Menu = () => {
  return (
    <S.Navigation>
      <S.Logo>LOGO</S.Logo>
      <S.NavigationWrapper>
        <S.NewsLink href={'https://finance.yahoo.com/news/'} target='blank'>
          {'News'}
        </S.NewsLink>
        <S.ButtonContainer>
          <S.ButtonWrapper>
            <Button title={'Join us'} />
          </S.ButtonWrapper>
        </S.ButtonContainer>
      </S.NavigationWrapper>
    </S.Navigation>
  );
};

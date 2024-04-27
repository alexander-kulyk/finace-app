//core
import React from 'react';
//components
import { Button } from '../Button';
import * as S from './styled';

const buttonStyles = {
  border: 'none',
  backgroundColor: 'transparent',
};

export const Menu = () => {
  return (
    <S.Navigation>
      <S.Logo>LOGO</S.Logo>
      <S.NavigationWrapper>
        <Button styles={buttonStyles} title={'News'} />
        <S.ButtonContainer>
          <S.ButtonWrapper>
            <Button title={'Join us'} />
          </S.ButtonWrapper>
        </S.ButtonContainer>
      </S.NavigationWrapper>
    </S.Navigation>
  );
};

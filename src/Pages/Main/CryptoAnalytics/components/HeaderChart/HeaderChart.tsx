//core
import React from 'react';
//components
import * as S from './styled';

export const HeaderChart: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <S.Wrapper>
      <S.Paragraph>{'The average price over seven years.'}</S.Paragraph>
      {children}
    </S.Wrapper>
  );
};

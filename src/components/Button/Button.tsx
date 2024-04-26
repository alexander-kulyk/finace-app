//core
import React from 'react';
//components
import * as S from './styled';

interface IProps {
  title?: string;
}

export const Button: React.FC<IProps> = ({ title }) => {
  return (
    <S.Button>
      <S.WrapperTitle>{title}</S.WrapperTitle>
    </S.Button>
  );
};

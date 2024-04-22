//core
import React, { ReactNode } from 'react';
//components
import * as S from './styled';

interface IProps {
  children: ReactNode;
}

export const Main: React.FC<IProps> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

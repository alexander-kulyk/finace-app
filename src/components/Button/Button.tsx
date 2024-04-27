//core
import React from 'react';
//components
import * as S from './styled';

interface IProps {
  children?: React.ReactNode;
  title?: string;
  styles?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactElement;
}

export const Button: React.FC<IProps> = ({
  title,
  styles,
  onClick,
  icon,
  children,
}) => {
  return (
    <S.Button style={styles} onClick={onClick}>
      {children}
      <S.WrapperTitle>{title}</S.WrapperTitle>
      {!!icon && icon}
    </S.Button>
  );
};

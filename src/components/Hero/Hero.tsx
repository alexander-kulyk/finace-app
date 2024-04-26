//core
import React, { ReactNode } from 'react';
//components
import { Button } from '../Button';
import * as S from './styled';

interface IProps {
  children: ReactNode;
}

export const Hero: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>Unleash the power of intuitive finance</S.Title>
          <S.Paragraph>
            Say goodbye to the outdated financial tools. Every small business
            owner, regardless of the background, can now manage their business
            like a pro. Simple. Intuitive. And never boring.
          </S.Paragraph>
          <Button title={'Join the wait list!!!'} />
        </S.Wrapper>
      </S.Container>
      {children}
    </>
  );
};

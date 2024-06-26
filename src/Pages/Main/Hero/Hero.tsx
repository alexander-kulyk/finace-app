//core
import React, { ReactNode } from 'react';
//components
import { ArrowSVG } from '../../../assets/svg';
import { Button } from '../../../components';
import { Menu } from './Menu';
import * as S from './styled';

const buttonStyles = {
  border: 'none',
};

interface IProps {
  children?: ReactNode;
}

export const Hero: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <S.Container>
        <Menu />
        <S.Wrapper>
          <S.Title>Unleash the power of intuitive finance</S.Title>
          <S.Paragraph>
            Say goodbye to the outdated financial tools. Every small business
            owner, regardless of the background, can now manage their business
            like a pro. Simple. Intuitive. And never boring.
          </S.Paragraph>
          <S.ButtonContainer>
            <S.ButtonWrapper>
              <Button title={'Join us'} />
            </S.ButtonWrapper>
            <Button
              styles={buttonStyles}
              title={'Learn more'}
              icon={
                <S.IconWrapper>
                  <ArrowSVG />
                </S.IconWrapper>
              }
            />
          </S.ButtonContainer>
        </S.Wrapper>
      </S.Container>
      {children}
    </>
  );
};

//core
import React, { ReactNode } from 'react';
//components
import { ArrowSVG } from '../../../assets/svg';
import { Button } from '../../../components';
import { Menu } from './Menu';
import * as S from './styled';

const buttonStyles = {
  border: 'none',
  boxShadow: 'none',
};

interface IProps {
  children?: ReactNode;
  sectionRef: any;
}

export const Hero: React.FC<IProps> = ({ children, sectionRef }) => {
  const onClickLearMore = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onClickJoinUs = () => {
    window.open(
      'https://accounts.binance.com/en/register/business?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vY3J5cHRvL2J1eQ%3D%3D',
      '_blank',
      'noopener,noreferrer'
    );
  };

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
              <Button onClick={onClickJoinUs} title={'Join us'} />
            </S.ButtonWrapper>
            <Button
              onClick={onClickLearMore}
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

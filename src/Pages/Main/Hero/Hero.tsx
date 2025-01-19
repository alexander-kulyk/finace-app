//core
import React, { CSSProperties, ReactNode, useState } from 'react';
//components
import { Button, Title, Paragraph } from '../../../components';
import { ArrowSVG } from '../../../assets/svg';
import { Menu } from './Menu';
import * as S from './styled';

const styles: { [key: string]: CSSProperties } = {
  button: {
    border: 'none',
    boxShadow: 'none',
  },
  title: {
    fontSize: 50,
    marginTop: 0,
  },
  paragraph: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 40,
  },
};

interface IProps {
  children?: ReactNode;
}

export const Hero: React.FC<IProps> = ({ children }) => {
  const onClickJoinUs = () => {
    window.open(
      'https://accounts.binance.com/en/register/business?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vY3J5cHRvL2J1eQ%3D%3D',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <S.Container className='container'>
        <Menu />
        <S.Wrapper>
          <Title
            titleTag={'h1'}
            text={'Unleash the power of intuitive finance'}
            styles={styles.title}
          />
          <Paragraph
            text={
              'Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.'
            }
            styles={styles.paragraph}
          />
          <S.ButtonContainer>
            <S.ButtonWrapper>
              <Button onClick={onClickJoinUs} title={'Join us'} />
            </S.ButtonWrapper>
            <S.Link
              href='#cryptoAnalytics'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Paragraph text={'Learn more'} isHovered={isHovered} />
              <S.IconWrapper>
                <ArrowSVG isHovered={isHovered} />
              </S.IconWrapper>
            </S.Link>
          </S.ButtonContainer>
        </S.Wrapper>
      </S.Container>
      {children}
    </>
  );
};

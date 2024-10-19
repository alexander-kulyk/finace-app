//core
import React from 'react';
//components
import * as S from './styled';

export const GeneralInformation: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.SecondaryContainer>
          <S.Title>{'Who said finance has to be boring?'} </S.Title>
        </S.SecondaryContainer>
        <S.SecondaryContainer>
          <S.Paragraph>
            With Cobalt, managing your business finances is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial
            decision-making, and puts the power of advanced financial management
            right at your fingertips.
            <S.Span>
              Say no to spreadsheets and tools designed in the 80s.
            </S.Span>
          </S.Paragraph>
        </S.SecondaryContainer>
        <S.SecondaryContainer>
          <S.Title>{'Everything you need. Nothing you don’t'}</S.Title>
          <S.Paragraph>
            Financial management and visibility in one place. Experience
            <S.Span>a flexible toolkit</S.Span> that makes every task feel like
            a breeze.'
          </S.Paragraph>
        </S.SecondaryContainer>
      </S.Wrapper>
    </S.Container>
  );
};

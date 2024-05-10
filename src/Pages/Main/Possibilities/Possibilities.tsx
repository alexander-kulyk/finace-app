//core
import React from 'react';
//components
import * as S from './styled';
//other
import img from '../../../assets/image/insights.png';

export const Possibilities: React.FC = () => {
  return (
    <S.Section>
      <S.Cards>
        <S.WrapperImage>
          <S.Image src={`${img}`} />
        </S.WrapperImage>
        <S.WrapperText>
          <S.Title>Insights at your fingertips</S.Title>
          <S.Paragraph>
            All your data and finances in one place to provide quick answers and
            make decisions instantly.
          </S.Paragraph>
        </S.WrapperText>
      </S.Cards>
    </S.Section>
  );
};

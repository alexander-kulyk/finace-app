//core
import React from 'react';
//components
import { Card } from '../../../components';
import * as S from './styled';
//other
import first_card from '../../../assets/image/insights.png';
import second_card from '../../../assets/image/second_card.png';
import third_card from '../../../assets/image/third_card.png';
import fourth_card from '../../../assets/image/fourth.png';
import fifth_card from '../../../assets/image/fifth.png';

export const Possibilities: React.FC = () => {
  return (
    <S.Section>
      <S.Wrapper>
        <Card
          image={first_card}
          title={'Insights at your fingertips'}
          paragraph={
            'All your data and finances in one place to provide quick answers and make decisions instantly.'
          }
        />
        <S.Cards>
          <S.WrapperImage>
            <S.Image src={`${second_card}`} />
          </S.WrapperImage>
          <S.WrapperText>
            <S.Title>Manage in real time</S.Title>
            <S.Paragraph>
              Have full control of your business finances on the go using our
              iOS/Android mobile apps. Because, you know, it’s 2023.
            </S.Paragraph>
          </S.WrapperText>
        </S.Cards>
        <S.Cards>
          <S.WrapperImage>
            <S.Image src={`${third_card}`} />
          </S.WrapperImage>
          <S.WrapperText>
            <S.Title>Important business alerts</S.Title>
            <S.Paragraph>
              Choose the alerts you need and receive them via email, mobile or
              Slack. Review and take action in one click.
            </S.Paragraph>
          </S.WrapperText>
        </S.Cards>
        <S.Cards>
          <S.WrapperImage>
            <S.Image src={`${fourth_card}`} />
          </S.WrapperImage>
          <S.WrapperText>
            <S.Title>Important business alerts</S.Title>
            <S.Paragraph>
              Choose the alerts you need and receive them via email, mobile or
              Slack. Review and take action in one click.
            </S.Paragraph>
          </S.WrapperText>
        </S.Cards>
        <S.Cards>
          <S.WrapperImage>
            <S.Image src={`${fifth_card}`} />
          </S.WrapperImage>
          <S.WrapperText>
            <S.Title>Important business alerts</S.Title>
            <S.Paragraph>
              Choose the alerts you need and receive them via email, mobile or
              Slack. Review and take action in one click.
            </S.Paragraph>
          </S.WrapperText>
        </S.Cards>
      </S.Wrapper>
    </S.Section>
  );
};

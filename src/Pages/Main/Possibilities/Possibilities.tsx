//core
import React from 'react';
//components
import { Card } from '../../../components';
import * as S from './styled';
//other
import firstCard from '../../../assets/image/insights.png';
import secondCard from '../../../assets/image/second_card.png';
import thirdCard from '../../../assets/image/third_card.png';
import fourthCard from '../../../assets/image/fourth.png';
import fifthCard from '../../../assets/image/fifth.png';

export const Possibilities: React.FC = () => {
  return (
    <S.Section>
      <S.Wrapper>
        <Card
          image={firstCard}
          title={'Insights at your fingertips'}
          paragraph={
            'All your data and finances in one place to provide quick answers and make decisions instantly.'
          }
        />
        <Card
          image={secondCard}
          title={'Manage in real time'}
          paragraph={
            'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it is 2023.'
          }
        />
        <Card
          image={thirdCard}
          title={'Important business alerts'}
          paragraph={
            'Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.'
          }
        />
        <Card
          image={fourthCard}
          title={'Important business alerts'}
          paragraph={
            ' Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.'
          }
        />
        <Card
          image={fifthCard}
          title={'You’re in control'}
          paragraph={
            'Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.'
          }
        />
      </S.Wrapper>
    </S.Section>
  );
};

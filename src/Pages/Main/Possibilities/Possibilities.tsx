//core
import React, { CSSProperties } from 'react';
//components
import { Card } from '../../../components';
import * as S from './styled';
//other
import secondCard from '../../../assets/image/second_card.png';
import thirdCard from '../../../assets/image/third_card.png';
import firstCard from '../../../assets/image/insights.png';
import fourthCard from '../../../assets/image/fourth.png';
import fifthCard from '../../../assets/image/fifth.png';

const styles = {
  title: {
    fontSize: 20,
    textAlign: 'start' as CSSProperties['textAlign'],
  },
};

export const Possibilities: React.FC = () => {
  return (
    <S.Section className='container'>
      <S.Wrapper>
        <Card
          styles={styles}
          image={firstCard}
          title={'Insights at your fingertips'}
          paragraph={
            'All your data and finances in one place to provide quick answers and make decisions instantly.'
          }
        />
        <Card
          styles={styles}
          image={secondCard}
          title={'Manage in real time'}
          paragraph={
            'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it is 2023.'
          }
        />
        <Card
          styles={styles}
          image={thirdCard}
          title={'Important business alerts'}
          paragraph={
            'Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.'
          }
        />
        <S.WrapperCard>
          <Card
            styles={styles}
            image={fourthCard}
            title={'Important business alerts'}
            paragraph={
              ' Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.'
            }
          />
        </S.WrapperCard>
        <Card
          styles={styles}
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

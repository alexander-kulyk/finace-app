//core
import React, { CSSProperties } from 'react';
//components
import { Card, Title } from '../../../components';
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
    marginBottom: 16,
  },
};

export const Possibilities: React.FC = () => {
  return (
    <S.Section className='container'>
      <S.Wrapper>
        <S.TextWrapper>
          <Title text={'Everything you need. Nothing you don’t'} />
          <S.Paragraph>
            Financial management and visibility in one place. Experience
            <S.Span> a flexible toolkit</S.Span> that makes every task feel like
            a breeze.'
          </S.Paragraph>
        </S.TextWrapper>
        <S.WrapperCard>
          <Card
            styles={{
              ...styles,
              imageWrapper: { width: '384px', height: '326px' },
            }}
            image={firstCard}
            title={'Insights at your fingertips'}
            paragraph={
              'All your data and finances in one place to provide quick answers and make decisions instantly.'
            }
          />
        </S.WrapperCard>
        <S.WrapperCard>
          <Card
            styles={{
              ...styles,
              imageWrapper: { width: '384px', height: '326px' },
            }}
            image={secondCard}
            title={'Manage in real time'}
            paragraph={
              'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it is 2023.'
            }
          />
        </S.WrapperCard>
        <S.WrapperCard>
          <Card
            styles={{
              ...styles,
              imageWrapper: { width: '384px', height: '326px' },
            }}
            image={thirdCard}
            title={'Important business alerts'}
            paragraph={
              'Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.'
            }
          />
        </S.WrapperCard>
        <S.WrapperCard span={7}>
          <Card
            styles={{
              ...styles,
              imageWrapper: {
                marginBottom: '79px',
                width: '696px',
                height: '288px',
              },
            }}
            image={fourthCard}
            title={'Important business alerts'}
            paragraph={
              ' Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.'
            }
          />
        </S.WrapperCard>
        <S.WrapperCard span={5} className='fifthCard'>
          <Card
            styles={{
              ...styles,
              imageWrapper: { width: '488px', height: '366px' },
            }}
            image={fifthCard}
            title={'You’re in control'}
            paragraph={
              'Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.'
            }
          />
        </S.WrapperCard>
      </S.Wrapper>
    </S.Section>
  );
};

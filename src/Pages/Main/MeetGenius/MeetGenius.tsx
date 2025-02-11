//core
import { CSSProperties } from 'react';
//components
import { Card, Title } from '../../../components';
import * as S from './styled';
//other
import SmartForecasting from '../../../assets/image/SmartForecasting.png';
import ChatWithGenius from '../../../assets/image/ChatWithGenius.png';

const styles: { [key: string]: CSSProperties } = {
  title: {
    textAlign: 'start',
  },
};

const cardStyles = {
  title: {
    fontSize: 20,
    textAlign: 'start' as CSSProperties['textAlign'],
  },
};

export const MeetGenius: React.FC = () => {
  return (
    <S.Section className='container'>
      <S.Wrapper>
        <S.WrapperTitle>
          <Title text={'Meet Genius'} styles={styles.title} />
          <S.Paragraph>
            Our AI-driven assistant is designed to decode complex financial
            figures and <S.Span>illuminate key trends</S.Span> in your business.
          </S.Paragraph>
        </S.WrapperTitle>
        <S.WrapperCard>
          <Card
            styles={{
              ...cardStyles,
              imageWrapper: { width: '592px', height: '366px' },
            }}
            image={SmartForecasting}
            title={'Smart forecasting'}
            paragraph={
              'Harness the power of Cobalt predictive analytics to map out the financial future of your business.'
            }
          />
        </S.WrapperCard>
        <Card
          styles={{
            ...cardStyles,
            imageWrapper: { width: '592px', height: '366px' },
          }}
          image={ChatWithGenius}
          title={'Chat with Genius'}
          paragraph={
            'Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless..'
          }
        />
      </S.Wrapper>
    </S.Section>
  );
};

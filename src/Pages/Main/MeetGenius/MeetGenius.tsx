//components
import { Card } from '../../../components';
import * as S from './styled';
//other
import SmartForecasting from '../../../assets/image/SmartForecasting.png';
import ChatWithGenius from '../../../assets/image/ChatWithGenius.png';

export const MeetGenius: React.FC = () => {
  return (
    <S.Section>
      <S.WrapperTitle>
        <S.Title>{'Meet Genius'}</S.Title>
        <S.Paragraph>
          Our AI-driven assistant is designed to decode complex financial
          figures and <S.Span>illuminate key trends</S.Span> in your business.
        </S.Paragraph>
      </S.WrapperTitle>
      <S.CardsWrapper>
        <Card
          image={SmartForecasting}
          title={'Smart forecasting'}
          paragraph={
            'Harness the power of Cobalt predictive analytics to map out the financial future of your business.'
          }
        />
        <Card
          image={ChatWithGenius}
          title={'Chat with Genius'}
          paragraph={
            'Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless..'
          }
        />
      </S.CardsWrapper>
    </S.Section>
  );
};

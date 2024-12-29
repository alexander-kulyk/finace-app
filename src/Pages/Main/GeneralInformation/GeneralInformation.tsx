//core
import React, { CSSProperties } from 'react';
//components
import { Title } from '../../../components';
import * as S from './styled';

const styles: { [key: string]: CSSProperties } = {
  title: {
    textAlign: 'start',
  },
};

export const GeneralInformation: React.FC = () => {
  return (
    <S.Container className='container'>
      <S.Wrapper>
        <S.SecondaryContainer>
          <Title
            text={'Who said finance has to be boring?'}
            styles={styles.title}
          />
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
      </S.Wrapper>
    </S.Container>
  );
};

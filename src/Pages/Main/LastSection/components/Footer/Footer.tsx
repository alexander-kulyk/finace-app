//core
import { CSSProperties } from 'styled-components';
import React from 'react';
//components
import { XSocialSVG, LinkedInSVG, FacebookSVG } from './assets';
import { Paragraph } from '../../../../../components';
import * as S from './styled';

const styles: { [key: string]: CSSProperties } = {
  paragraph: {
    width: 850,
    color: '#71717A',
  },
};

export const Footer: React.FC = () => {
  const onClickSocialMediaIcon = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperCopyright>
          &copy; 2023 Cobalt Financial Technologies Inc. Privacy Policy Terms of
          Use
        </S.WrapperCopyright>
        <S.WrapperSocialMedia>
          <S.WrapperIcon
            onClick={() => onClickSocialMediaIcon('https://x.com/?lang=en')}
          >
            <XSocialSVG />
          </S.WrapperIcon>
          <S.WrapperIcon
            onClick={() => onClickSocialMediaIcon('https://www.linkedin.com/')}
          >
            <LinkedInSVG />
          </S.WrapperIcon>
          <S.WrapperIcon
            onClick={() => onClickSocialMediaIcon('https://www.facebook.com/')}
          >
            <FacebookSVG />
          </S.WrapperIcon>
        </S.WrapperSocialMedia>
      </S.Wrapper>
      <Paragraph
        text={
          'Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, sponsorship of, or affiliation with Cobalt.'
        }
        styles={styles.paragraph}
      />
      <Paragraph
        text={
          'Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank & Trust®, Members FDIC.'
        }
        styles={styles.paragraph}
      />
    </S.Container>
  );
};

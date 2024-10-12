//core
import React from 'react';
//components
import { XSocialSVG, LinkedInSVG, FacebookSVG } from './assets';
import * as S from './styled';

export const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperCopyright>
          &copy; 2023 Cobalt Financial Technologies Inc. Privacy Policy Terms of
          Use
        </S.WrapperCopyright>
        <S.WrapperSocialMedia>
          <XSocialSVG />
          <LinkedInSVG />
          <FacebookSVG />
        </S.WrapperSocialMedia>
      </S.Wrapper>
      <S.Paragraph>
        {
          'Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, sponsorship of, or affiliation with Cobalt.'
        }
      </S.Paragraph>
      <S.Paragraph>
        {
          'Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank & Trust®, Members FDIC.'
        }
      </S.Paragraph>
    </S.Container>
  );
};

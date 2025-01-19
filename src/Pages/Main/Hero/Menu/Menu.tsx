//components
import { LogoSVG } from '../../../../assets/svg';
import { Button } from '../../../../components';
import * as S from './styled';

export const Menu = () => {
  const onClickJoinUs = () => {
    window.open(
      'https://accounts.binance.com/en/register/business?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vY3J5cHRvL2J1eQ%3D%3D',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <S.Navigation>
      <S.Logo href='/finace-app'>
        <LogoSVG />
      </S.Logo>
      <S.NavigationWrapper>
        <S.NewsLink href={'https://finance.yahoo.com/news/'} target='blank'>
          {'News'}
        </S.NewsLink>
        <S.ButtonWrapper>
          <Button onClick={onClickJoinUs} title={'Join us'} />
        </S.ButtonWrapper>
      </S.NavigationWrapper>
    </S.Navigation>
  );
};

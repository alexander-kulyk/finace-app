//core
import React, { useEffect } from 'react';
import axios from 'axios';
//components
//import * as S from './styled';
//other
//import img from '../../../../../assets/image/insights.png';

export const Bitcoin: React.FC = () => {
  const getCrypto = async () => {
    try {
      const response = await axios.get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': '1d8fe007-1339-4d42-a7e0-96458bbed656',
          },
        }
      );

      console.log('response', response);
    } catch (e) {
      console.log('e', e);
    }
  };

  useEffect(() => {
    getCrypto();
  }, []);

  return <>{/* <S.Image src={`${img}`} /> */}</>;
};

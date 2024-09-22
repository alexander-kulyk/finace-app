//core
import React from 'react';
// import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
//components
//import * as S from './styled';
//other
//import img from '../../../../../assets/image/insights.png';

export const Bitcoin: React.FC = () => {
  // const [prices, setPrices] = useState<{ dayId: number; price: number }[]>([]);
  // const getBitcoinData = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
  //       {
  //         params: {
  //           vs_currency: 'usd', // Валюта, в якій будуть відображатися дані
  //           year: 7, // Останні 7 днів
  //         },
  //       }
  //     );

  //     const prices: { dayId: number; price: number }[] =
  //       response.data.prices.map((item: any) => ({
  //         dayId: item[0],
  //         price: item[1],
  //       }));
  //     setPrices(prices);

  //     console.log('prices', prices);

  //     // console.log(
  //     //   'Historical Bitcoin data (last 7 days):',
  //     //   response.data.prices
  //     // );
  //   } catch (e) {
  //     console.log('Error:', e);
  //   }
  // };

  // useEffect(() => {
  //   getBitcoinData();
  // }, []);

  // const data = prices.slice(0, 30).map((item) => {
  //   return { name: `day ${item.dayId}`, uv: item.price };
  // });

  const data = [
    {
      name: '2024',
      uv: 62.79,
    },
    {
      name: '2023',
      uv: 16.54,
    },
    {
      name: '2022',
      uv: 46.319,
    },
    {
      name: '2021',
      uv: 69.044,
    },
    {
      name: '2019',
      uv: 28.768,
    },
    {
      name: '2018',
      uv: 7.196,
    },
    {
      name: '2017',
      uv: 3.742,
    },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
      </LineChart>
    </ResponsiveContainer>
  );
};

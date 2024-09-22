//core
import React from 'react';
// import axios from 'axios';
import {
  ResponsiveContainer,
  CartesianGrid,
  ComposedChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Line,
  Bar,
} from 'recharts';
//components
import { HeaderChart } from '../HeaderChart';
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
      uv: 62790,
    },
    {
      name: '2023',
      uv: 16540,
    },
    {
      name: '2022',
      uv: 46319,
    },
    {
      name: '2021',
      uv: 69044,
    },
    {
      name: '2020',
      uv: 28768,
    },
    {
      name: '2019',
      uv: 7196,
    },
    {
      name: '2018',
      uv: 3742,
    },
  ];

  return (
    <HeaderChart>
      <ResponsiveContainer width='100%' height='100%'>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' scale='band' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='uv' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='uv' stroke='#ff7300' />
        </ComposedChart>
      </ResponsiveContainer>
    </HeaderChart>
  );
};

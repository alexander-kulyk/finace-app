//core
import React from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Line,
} from 'recharts';
//components
import { HeaderChart } from '../HeaderChart';

export const Ethereum: React.FC = () => {
  const data = [
    {
      name: '2024',
      uv: 2613,
    },
    {
      name: '2023',
      uv: 1586,
    },
    {
      name: '2022',
      uv: 1196,
    },
    {
      name: '2021',
      uv: 3679,
    },
    {
      name: '2020',
      uv: 737,
    },
    {
      name: '2019',
      uv: 130,
    },
    {
      name: '2018',
      uv: 133,
    },
  ];

  return (
    <HeaderChart>
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
    </HeaderChart>
  );
};

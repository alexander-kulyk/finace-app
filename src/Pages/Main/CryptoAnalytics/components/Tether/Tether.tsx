//core
import React from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
  YAxis,
  XAxis,
} from 'recharts';
//components
import { HeaderChart } from '../HeaderChart';

export const Tether: React.FC = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
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
  // @ts-ignore
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  // @ts-ignore
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
  };

  return (
    <HeaderChart>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Bar
            dataKey='uv'
            fill='#8884d8'
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </HeaderChart>
  );
};

//core
import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export const MainChart: React.FC = () => {
  const data = [
    { name: 'Bitcoin', value: 56 },
    { name: 'Ethereum', value: 13.9 },
    { name: 'Tether', value: 7.6 },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={800} height={800}>
        <Pie
          dataKey='value'
          isAnimationActive={true}
          data={data}
          cx='50%'
          cy='50%'
          outerRadius={180}
          fill='#8884d8'
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

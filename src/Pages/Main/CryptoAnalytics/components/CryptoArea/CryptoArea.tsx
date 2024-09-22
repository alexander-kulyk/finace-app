//core
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//components
import { Navigation } from '../Navigation';
import { Ethereum } from '../Ethereum';
import { Bitcoin } from '../Bitcoin';
import { Tether } from '../Tether';
import { MainChart } from '../MainChart';

export const CryptoArea: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<MainChart />} />
        <Route path='bitcoin' element={<Bitcoin />} />
        <Route path='ethereum' element={<Ethereum />} />
        <Route path='tether' element={<Tether />} />
      </Route>
    </Routes>
  );
};

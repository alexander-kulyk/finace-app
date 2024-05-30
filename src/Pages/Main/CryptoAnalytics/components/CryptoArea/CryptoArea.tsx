//core
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//components
import { Navigation } from '../Navigation';
import { Bitcoin } from '../Bitcoin';

export const CryptoArea: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='bitcoin' element={<Bitcoin />} />
        <Route path='ethereum' element={<div>ethereum</div>} />
      </Route>
    </Routes>
  );
};

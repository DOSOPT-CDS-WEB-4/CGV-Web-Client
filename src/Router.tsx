import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Payment from './pages/Payment';
import SelectTime from './pages/SelectTime';

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-time" element={<SelectTime />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetDataList from './components/rcc/Get_Api/GetDataList';
import Get_Api2 from './components/rcc/Get_Api/Get_Api2';
import View2 from './components/rcc/Get_Api/View2';
import Get_api from './components/rfc/Get_Api/Get_api';
import { View } from './components/rfc/Get_Api/View';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Get_api />} />
          <Route path="/:id" element={<View />} />
          <Route path="/getdatalist" element={<GetDataList />} />
          <Route path="/rcc/get_api2" element={<Get_Api2 />} />
          <Route path="/rcc/get_api2/:id" element={<View2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

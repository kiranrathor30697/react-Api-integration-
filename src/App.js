import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Get_api from './components/rfc/Get_Api/Get_api';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Get_api />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

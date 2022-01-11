import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {/* this route is responsible for rendering the home page */}
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;

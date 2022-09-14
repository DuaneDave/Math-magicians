import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Quote from './components/quote/Quote';
import Calculate from './components/calculator/Calculate';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Catogories/Home';

import FetchData from './Components/Catogories/FetchData';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/health' element={<FetchData cat='health' />} />
          <Route path='/science' element={<FetchData cat='science' />} />
          <Route path='/technology' element={<FetchData cat='technology' />} />
          <Route path='/entertainment' element={<FetchData cat='entertainment' />} />
          <Route path='/startup' element={<FetchData cat='startup' />} />
          <Route path='/sports' element={<FetchData cat='sports' />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

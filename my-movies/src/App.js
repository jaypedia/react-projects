import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <Navbar></Navbar>
    </HashRouter>
  );
}

export default App;

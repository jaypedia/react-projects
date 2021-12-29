import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/index';
import Main from './pages/Home/main';
import Detail from './pages/Detail/index';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/main" exact component={Main} />
      <Route path="/detail/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;

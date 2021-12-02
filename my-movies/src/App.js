import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navbar></Navbar>
      {/* <Route path="/" exact component={Home}></Route> */}
      <Route path="/detail" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;

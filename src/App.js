import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Clients from './components/Clients';
import Prices from './components/Prices';
import './App.css';


function App() {
  return (
   <div>
   <Header/>
   <About/>
   <Shop/>
   <Menu/>
   <Clients/>
   <Prices/>
   </div>
  );
}

export default App;

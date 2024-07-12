import React, { } from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Footer />
      <SideNav />
    </div>
  );
}

export default App;

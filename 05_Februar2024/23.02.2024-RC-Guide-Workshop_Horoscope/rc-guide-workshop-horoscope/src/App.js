//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!


import React from 'react';
import './App.scss';
import './components/navbar/Navbar.scss'
import Navbar1 from './components/navbar/Navbar';
import Card1 from './components/main/Card';
import data from './helper/data';

const App = () => {
  return (
    <div>
    APP
    <Navbar1/>
    <Card1 veri={data}/>

    
    </div>
  )
}

export default App


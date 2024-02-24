//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!


import React from 'react';
import './App.scss';
import './components/navbar/Navbar.scss'
import Navbar1 from './components/navbar/Navbar';
import Card1 from './components/main/Card';

const App = () => {
  return (
    <div>
    
    <Navbar1/>
    <Card1/>

    
    </div>
  )
}

export default App


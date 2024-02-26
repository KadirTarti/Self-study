import './App.scss'
//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!


import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  return (
    <div>
    
    <Navbar/>
    <Header/>
    <Main/>
    
    
    </div>
  )
}

export default App


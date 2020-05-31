import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Cards from './component/Cards/Cards';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <Cards/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;

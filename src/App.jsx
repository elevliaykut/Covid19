import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Cards from './component/Cards/Cards';
import Content from './component/Content/Content';

function App() {
  return (
    <div className="App">
        <Header/>
        <Cards/>
        <Content/>
    </div>
  );
}

export default App;

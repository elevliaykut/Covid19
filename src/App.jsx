import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Cards from './component/Cards/Cards';
import Content from './component/Content/Content';
import Symptomps from './component/Symptomps/Symptomps';
import Preventions from './component/Preventions/Preventions';
import Footer from './component/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cards/>
        <Content />
        <Symptomps />
        <Preventions />
        <Footer />
      </div>
    );
  }
}

export default App;

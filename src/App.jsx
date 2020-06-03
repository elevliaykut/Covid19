import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Cards from './component/Cards/Cards';
import Content from './component/Content/Content';
import Countries from './component/Countries/Countries';
import Footer from './component/Footer/Footer';
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({ data: fetchdata })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Cards data={this.state.data} />
        <Content/>
        <Countries/>
        <Footer/>
      </div>
    );
  }
}

export default App;

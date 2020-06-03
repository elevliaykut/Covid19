import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Cards from './component/Cards/Cards';
import Content from './component/Content/Content';
import Preventions from './component/Preventions/Preventions';
import Countries from './component/Countries/Countries';
import Footer from './component/Footer/Footer';
import { fetchData, fetchCountry } from './api';

class App extends React.Component {

  state = {
    data: {},
    countries: {}
  }

  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({ data: fetchdata });
    
    const fetchcountry = await fetchCountry();
    this.setState({countries: fetchcountry});
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Cards data={this.state.data} />
        <Content/>
        <Preventions/>
        <Countries countrydata={this.state.countries}/>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './component/Header/Header';
import Cards from './component/Cards/Cards';
import Content from './component/Content/Content';
import Symptomps from './component/Symptomps/Symptomps';
import Preventions from './component/Preventions/Preventions';
import Countries from './component/Countries/Countries.jsx';
import Footer from './component/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Cards} />
          <Route exact path="/" component={Content} />
          <Route exact path="/" component={Symptomps} />
          <Route exact path="/" component={Preventions} />
          <Route exact path="/countries" component={Countries} />
          <Route exact path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;

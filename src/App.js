import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import './App.css';

import Home from './Components/Home/Home';

class App extends Component {
 

  render() {
    return (
      <div className="App">
        
        <HashRouter>
          <Header />
          <Home/>
          <Switch>
           
            <Route path='/home' exact component={Home}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }

}

  export default App;

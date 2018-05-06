import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header';
import Home from './Home';
import Show from './Show';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
            <Header/>
            <main>
                <Switch>
                    <Route path="/show/:id" component={Show}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </main>
        </Fragment>
    </BrowserRouter>
    );
  }
}

export default App;

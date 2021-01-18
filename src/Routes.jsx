import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Main from './pages/Main';
import Detail from './pages/Detail';
class Routes extends Component {
    render() {
        return (
          <Router>
              <Switch>
                  <Route exact path="/" children={<Main />} />
                  <Route path="/movie" children={<Detail/>} />
              </Switch>
          </Router>
         );
    }
}


export default Routes;

import React, { Component } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Main from './pages/Main';
import Detail from './pages/Detail';
class Routes extends Component {
    render() {
        return (
          <div>
                <Route exact path="/" component={Main} />
                <Route path="/movie" component={Detail} />
          </div>
         );
    }
}


export default Routes;

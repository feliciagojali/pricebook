import React, { Component } from 'react';
import '../Main.css';
import  NavBar  from '../components/NavBar';
import Titles from '../components/Titles';
import Movies from '../components/Movies';
class Main extends Component {
    render() {
        return (
          <div style={{paddingBottom:"10%"}}>
          <NavBar/> <br/>
          <Titles/>
          <Movies/>
          </div>
         );
    }
}


export default Main;

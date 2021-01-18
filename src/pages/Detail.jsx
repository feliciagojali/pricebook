import React, { Component } from 'react';
import Rating from '../components/Rating';
import About from '../components/About';
class Detail extends Component {

    render() {
        return (
          <div>
            <Rating/>
            <About/>
          </div>
         );
    }
}


export default Detail;

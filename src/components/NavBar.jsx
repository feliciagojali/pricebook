import React, { Component } from 'react';
import  {BiSearch}  from 'react-icons/bi';
class NavBar extends Component {

    render() {
        return (
          <div>
          <nav className="navbar navbar-expand-lg bg-white navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>


            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link"  href="#">Home </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theaters</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Movies</a>
                </li>
              </ul>

            </div>
            <a className="navbar-brand" href="#"><BiSearch/></a>
          </nav>
          </div>
         );
    }
}


export default NavBar;

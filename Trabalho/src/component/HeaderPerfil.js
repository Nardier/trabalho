import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderLogin from './HeaderLogin.js';
import PaginaLogin from './PaginaLogin.js';

import MenuLateral from './MenuLateral.js';

export default class HeaderPerfil extends React.Component {
  render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="#">Carona Universitária</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <MenuLateral />
              
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="fa fa-fw fa-sign-out" />
                    Sair</Link>
                </li>
              </ul>
            </div>
            <div id="container wall">
                    {/* <Route exact path="/" component={HeaderLogin} /> */}
                    {/* <Route exact path="/" component={PaginaLogin} /> */}
            </div>
          </nav>
    );
  }
}
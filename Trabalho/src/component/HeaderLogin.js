import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HeaderPerfil from './HeaderPerfil.js';
import PaginaPerfil from './PaginaPerfil.js';

export default class HeaderLogin extends React.Component {
  render(){
    return(
        <div className="text-center">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="#">Carona Universitária</a>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <div className="col-md-12">
                        <div className="row"> 
                            <div className="col-md-5">              
                                <input className="form-control" placeholder="Matrícula"/>
                            </div>
                            <div className="col-md-5">
                                <input className="form-control" placeholder="Senha"/>
                            </div>
                            <div className="col-md-2">
                            <Link to="/Perfil"><button className="btn btn-info btn-md">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </li>
              </ul>
            </div>
        </nav>
        <div id="container wall">
                    <Route path="/Perfil" component={HeaderPerfil} />
                    <Route path="/Perfil" component={PaginaPerfil} />
        </div>
        </div>
    );
  }
}
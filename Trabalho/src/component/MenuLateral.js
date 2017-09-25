import React from 'react';
import testMap from './../Mapa/testMap.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderPerfil from './HeaderPerfil.js';

export default class MenuLateral extends React.Component {
  render(){
    return(
        <div>
            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li className="nav-item active" data-toggle="tooltip" data-placement="right" title="Perfil">
                <Link to="/Perfil" className="nav-link">
                    <i className="fa fa-fw fa-user" />
                    <span className="nav-link-text">
                      Perfil</span>
                  </Link>
                </li>
                
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
                  <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="exampleAccordion">
                    <i className="fa fa-fw fa-sitemap" />
                    <span className="nav-link-text">
                      Mapas</span>
                  </a>
                  <ul className="sidenav-second-level collapse" id="collapseMulti">
                    <li>
                    <Link to="/Mapa" className="nav-link">Mapa Motorista</Link>
                    </li>
                    <li>
                    <Link to="/Mapa" className="nav-link">Mapa Passageiro</Link>
                    </li>
                  </ul>
                </li>
        
              </ul>
              <ul className="navbar-nav sidenav-toggler">
                <li className="nav-item">
                    <div className="nav-link text-center" id="sidenavToggler">
                    <span>Carona Universitária</span>
                    </div>
                </li>
              </ul>
           </div>
      );
    }
}
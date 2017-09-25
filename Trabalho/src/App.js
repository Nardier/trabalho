import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './common/css/bootstrap.min.css';
import './common/css/sb-admin.min.css';
import './common/js/bootstrap.min.js';
import './common/js/sb-admin.min.js';
import './common/font-awesome/css/font-awesome.min.css';

import HeaderLogin from './component/HeaderLogin.js';
import PaginaLogin from './component/PaginaLogin.js';

import HeaderPerfil from './component/HeaderPerfil.js';
import PaginaPerfil from './component/PaginaPerfil.js';
import testMap from './Mapa/testMap.js';

class App extends Component {  
  render() {
    return (
      <Router>
      <div>
        
        {/* Navigation */}
        <br />
        <br />
        
        {/* <HeaderHome/> */}
        
        {/* <Rotas /> */}
        {/* <BarraBusca termo={this.state.termo} realizarPesquisa={termo => this.pesquisar(termo)}/>*/ }
        {/* /.content-wrapper */}
        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © FGF - Carona Universitária</small>
            </div>
          </div>
        </footer>
        {/* Scroll to Top Button */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fa fa-angle-up" />
        </a>
        {/* Logout Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current session.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="#login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div id="container wall">
                    <Route exact path="/" component={HeaderLogin} />
                    <Route exact path="/" component={PaginaLogin} />
                    <Route path="/Perfil" component={HeaderPerfil} />
                    <Route path="/Perfil" component={PaginaPerfil} />
                    <Route path="/Mapa" component={HeaderPerfil} />
                    <Route path="/Mapa" component={testMap} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;

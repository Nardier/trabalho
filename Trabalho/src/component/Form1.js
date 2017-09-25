import React, { Component } from 'react';

import FormInfoGerais1 from './FormInfoGerais1.js';
import FormEndereco1 from './FormEndereco1.js';

export default class Form1 extends React.Component {
    render(){
        return(
            <div className="container jumbotron">
                <div className="row">
                    { /* Informações Gerais */ }
                    <FormInfoGerais1/>
                    { /* Endereço de Casa */ }
                    <FormEndereco1/>
                    
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-1">
                        <button className="btn btn-success btn-md">Salvar</button>
                    </div>                    
                </div>
          
                
            </div>
            
            
        );
    }
}




import React, { Component } from 'react';
import FormInfoGerais from './FormInfoGerais.js';
import FormEndereco from './FormEndereco.js';

export default class Form extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                
                    { /* Informações Gerais */ }
                    
                    { /* Endereço de Casa */ }
                        <FormEndereco/>
            </div>
            
            
        );
    }
}




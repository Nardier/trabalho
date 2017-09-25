import React, { Component } from 'react';
import PigeonMaps from "./test.js";

export default class DadosMap extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">


                    
            <div className="col-md-6">
            <br/>
            <h6> Informações Gerais </h6>
            <h4> Bem-Vindo Motorista </h4>
                <div className="row">
                    <div className="col-md-6">
                        <label for="">Nome</label>
                          <input className="form-control" type="text" placeholder="Motorista" name="nome" id="" />
                    </div>
                    <div className="col-md-6">
                        <label for="">Sobrenome</label>
                          <input className="form-control" type="" placeholder="Fgf" name="sobrenome" id="" />
                    </div>                       
                </div>
                
                    <label for="email">Email Universitário</label>
                        <input className="form-control" type="" placeholder="motoristafgf@fgf.edu.br" name="email_univer" id="" />
                    <label for="">Matrícula</label>
                      <input className="form-control" type="" placeholder="12345678" name="matricula" id="" />
                      </div>
                      <div className="col-md-6">
                      <PigeonMaps/>
                      </div>    
            </div>
            </div>
        );
    }
}
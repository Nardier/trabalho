import React, { Component } from 'react';

export default class FormInfoGerais extends React.Component {
    render(){
        return(
            <div className="col-md-6">
            <h4> Informações Gerais </h4>
            <br/>
                <div className="row">
                    <div className="col-md-6">
                        <label for="">Nome</label>
                          <input className="form-control" type="text" placeholder="" name="nome" id="" />
                    </div>
                    <div className="col-md-6">
                        <label for="">Sobrenome</label>
                          <input className="form-control" type="" placeholder="" name="sobrenome" id="" />
                    </div>                       
                </div>
                
                    <label for="email">Email Universitário</label>
                        <input className="form-control" type="" placeholder="" name="email_univer" id="" />
                    <label for="">Matrícula</label>
                        <input className="form-control" type="" placeholder="" name="matricula" id="" />
            </div>
        );
    }
}
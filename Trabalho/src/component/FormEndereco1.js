import React, { Component } from 'react';

export default class FormEndereco1 extends React.Component {
    render(){
        return(
            <div className="col-md-6">
            <h4 className="label-primary"> Endereço de Casa </h4>
            <br/>
            <div className="row">
                <div className="col-md-4">
                    <label for="">CEP</label>
                     <input className="form-control" type="text" placeholder="" name="" id="" />
                </div>
                <div className="col-md-8">
                    <br/>
                    <p>Não sabe seu CEP?<a href="#"> Clique Aqui!</a></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <label for="">Rua</label>
                        <input className="form-control" type="" placeholder="" name="" id="" />
                </div>
                <div className="col-md-3">
                    <label for="">Número</label>
                        <input className="form-control" type="" placeholder="" name="" id="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label for="">Bairro</label>
                    <input className="form-control" type="" placeholder="" name="" id="" />
                </div>
                <div className="col-md-6">
                    <label for="">Complemento</label>
                    <input className="form-control" type="" placeholder="" name="" id="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label for="">Estado</label>
                    <input className="form-control" type="" placeholder="" name="" id="" />
                </div>
                <div className="col-md-6">
                    <label for="">Cidade</label>
                    <input className="form-control" type="" placeholder="" name="" id="" />
                </div>
            </div>
        </div>
        );
    }
}
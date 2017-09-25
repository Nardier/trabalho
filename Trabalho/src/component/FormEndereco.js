import React, { Component } from 'react';
import img from './img.png';
// ES6 Modules or TypeScript
import swal from 'sweetalert';

var matricula;
var senha;
var senhaConfirm;

export default class FormEndereco extends React.Component {

    imprimir(){
        matricula = document.getElementById('mat').value;
        senha = document.getElementById('pass').value;
        senhaConfirm = document.getElementById('passConfirm').value;
        if(matricula != "" && senha != "" && senha === senhaConfirm){
            swal(
                'Cadastrado com sucesso!',
                'Faça já seu Login e integre-se a nós.',
                'success'
              );
            }
        else{
            if(senha != senhaConfirm){
                swal(
                    'Senhas diferentes!',
                    'Preencha novamente os campos.',
                    'error'
                );    
            }else{
                swal(
                    'Preencha todos os campos!',
                    'Campos vazios.',
                    'error'
                );
            }
        }
        document.getElementById('mat').value = "";
        document.getElementById('pass').value = "";
        document.getElementById('passConfirm').value = "";
    }

    render(){
        return(
            <div className="row">
            <div className="col-md-6">
                <img className="img-responsive img-login" width="75%" height="100%" src={img} />
            </div>
            <div className="col-md-6">
                <h4 className="label-primary"> Cadastre-se </h4>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Nome" name="" id="" />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Sobrenome" name="" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label for=""></label>
                            <input className="form-control" type="" placeholder="Email Universitário" name="" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label for=""></label>
                        <input className="form-control" type="" placeholder="Matrícula" name="" id="mat" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for=""></label>
                        <input className="form-control" type="password" placeholder="Senha" name="" id="pass" />
                    </div>
                    <div className="col-md-6">
                        <label for=""></label>
                        <input className="form-control" type="password" placeholder="Confirma Senha" name="" id="passConfirm" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form">
                        <br/>
                        <div className="row">
                            <div className="col-md-4">
                                <label>
                                    Motorista
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input type="radio" name="selectradio" id="" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form">
                        <br/>
                        <div className="row">
                            <div className="col-md-4">
                                <label>
                                    Passageiro
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input type="radio" name="selectradio" id="" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label></label>
                        <button onClick={() => this.imprimir()} className="btn btn-info btn-block">Integre-se</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
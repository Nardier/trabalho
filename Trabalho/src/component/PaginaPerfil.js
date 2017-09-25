import React, { Component } from 'react';

import Form1 from './Form1.js';

export default class PaginaPerfil extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {nomePag : this.props.nomePag};
    }
    
    render(){
        return(
        <div className="content-wrapper">
            <div className="container-fluid">
            {/* Breadcrumbs */}
            
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                <a href="#">{this.props.nomePag}</a>
                </li>
                <li className="breadcrumb-item active">My Dashboard</li>
            </ol>
            <Form1/>
            </div>
            {/* /.container-fluid */}
            
        </div>
        );
    }
}
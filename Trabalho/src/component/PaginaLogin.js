import React, { Component } from 'react';

import Form from './Form.js';

export default class PaginaLogin extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {nomePag : this.props.nomePag};
    }
    
    render(){
        return(
            <div className="container-fluid">
            {/* Breadcrumbs */}
            <br/>
            <Form/>
            </div>
        );
    }
}
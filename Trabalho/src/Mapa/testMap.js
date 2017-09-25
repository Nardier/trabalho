import React, { Component } from 'react';
import DadosMap from './DadosMap.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderPerfil from './../component/HeaderPerfil.js';
import MenuLateral from '../component/MenuLateral';

import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";

import Styles from "../index.css";


export default class testMap extends React.Component {
    
    render(){
        return(
        <div className="content-wrapper">
            <div className="container-fluid">
            {/* Breadcrumbs */}
            
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                <a href="#">{this.props.nomePag}</a>
                </li>
                <li className="breadcrumb-item active">Localização e dados</li>
            </ol>
            <DadosMap/>
            
            </div>
        </div>
        );
    }
}
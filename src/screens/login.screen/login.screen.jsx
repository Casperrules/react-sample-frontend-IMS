import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Sidebar} from '../../components/sidebar.component/sidebar.component'
import {LoginForm} from '../../components/loginForm.component/loginForm.component';
import './login.styles.css';


export class Login extends Component{
    constructor(){
        super();
        this.state = {
            user:'',
            role:''
        };
    }
    render(){
        return(
            <>
            <div className="login">
                <Sidebar className="sidebar"/>
                <div className="content">
                    <LoginForm />
                </div>
            </div>
            </>
        );
        
    }
}
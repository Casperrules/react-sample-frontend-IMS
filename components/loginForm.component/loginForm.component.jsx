import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Login } from '../../screens/login.screen/login.screen';
import './loginForm.styles.css';

export class LoginForm extends Component{
    constructor(){
        super();
        this.state = {
            user:'',
            role:''
        };
    }
    onChangeId(e){
        this.setState({user:e.target.value});
        console.log(this.state.user);
    }

    logIn(){
        /**this is the login logic needs to put in */
    }

    render(){
        return(
            <>
                <div className="card">
                    <h2>LogIn</h2>
                    <label htmlFor="id" />
                    <input placeholder="UserID" 
                            type="text"
                            name="uid"
                            id="uid" 
                            className="input" 
                            onChange = {(e)=>{this.onChangeId(e)}} />

                    <input placeholder="Password" 
                            type="password" 
                            name="pass" 
                            id="pass"  
                            className="input"/>
                    <button className="form-button" onClick = {this.logIn()}>LogIN</button>
                </div>
            </>
        );
    }


}
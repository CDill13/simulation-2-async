import React, {Component} from "react";
import "./auth.css";
import authLogo from "./auth_logo.png"
import axios from "axios";

export default class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsername(value){
        this.setState({
            username: value
        })
        // console.log(this.state.username)
    }

    handlePassword(value){
        this.setState({
            password: value
        })

    }

    createUser(){
        if(this.state.username !== "" && this.state.password !== ""){
            axios.post(`/api/create_user`, {
                username: this.state.username,
                password: this.state.password
            })
        }
    }

    render(){
        console.log(this.state.password)
        console.log(this.state.username)
        return(
            <center className="background">
                <center className="authContainer">
                    <img src={authLogo} className="authLogo"/>
                    <div className="inputContainer">
                        <h3>Username</h3>
                        <input type="text" onChange={e => this.handleUsername(e.target.value)} className="authInput"/>
                        <h3>Password</h3>
                        <input type="password" onChange={e => this.handlePassword(e.target.value)} className="authInput"/>
                    </div>
                    <div className="authButtons">
                        <button>Login</button>
                        <button onClick={() => this.createUser()}  >Register</button>
                    </div>
                </center>
            </center>
        )
    }
}
import React, {Component} from "react";
import "./auth.css";
import authLogo from "./auth_logo.png"
import axios from "axios";
// import keydown, { ALL_KEYS } from 'react-keydown';

export default class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    // @keydown(ALL_KEYS)
    // submit(event) {
    //     console.log(key);
    // }

    // onKeyDown(key){
    //     console.log(key.type, key.which, key.timestamp);
    // }

    onKeyPressed(e){
        if(e.key === "Enter"){
            this.login();
        }
        // console.log(e.key);
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

    login(){
        if(this.state.username !== "" && this.state.password !== ""){
            let user = {username: this.state.username, password: this.state.password};
            // console.log(`username and password: ${user.username}, ${user.password}`);
            axios.post(`/api/check_username`, user)
            .then(res => {
                if(res.data[0]){
                    if(res.data[0].username === user.username){
                        axios.post(`/api/login`, {username: user.username, password: user.password}).then(() => {
                            this.props.history.push("/dashboard");
                            // console.log(res);
                            // console.log(this.props);
                        })
                    }
                } else {
                    console.log("poop");
                }
            })
        }
    }

    createUser(){
            if(this.state.username !== "" && this.state.password !== ""){
            let user = {username: this.state.username, password: this.state.password};
            // console.log(`username and password: ${user.username}, ${user.password}`);
            axios.post(`/api/check_username`, user)
            .then(res => {
                if(res.data[0]){
                    if(res.data[0].username === user.username){
                        alert(`That username is already in use.`);
                    }
                } else {
                    axios.post(`/api/create_user`, {username: user.username, password: user.password}).then(res => {
                        this.props.history.push("/dashboard");
                        console.log(res);
                    })
                }
            })
        }
    }

    render(){
        return(
            <center className="authBackground" >
                <center className="authContainer">
                    <img src={authLogo} className="authLogo"/>
                    <div className="inputContainer">
                        <h3>Username</h3>
                        <input type="text" onChange={e => this.handleUsername(e.target.value)} className="authInput"/>
                        <h3>Password</h3>
                        <input type="password" onChange={e => this.handlePassword(e.target.value)} className="authInput"
                        onKeyDown={(e) => this.onKeyPressed(e)}/>
                    </div>
                    <div className="authButtons">
                        <a className="authLoginButton" onClick={() => this.login()}>Login</a>
                        <a className="authRegisterButton" onClick={() => this.createUser()}>Register</a>
                    </div>
                </center>
            </center>
        )
    }
}
import React from "react";
import logo from "./header_logo.png";
import "./header.css";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Header(){
    return (
        <div className="header">
            <div className="headerMiddle">
                <div className="left">
                    <img className="headerLogo" alt="house" src={logo}/>
                    <h1 className="houserTitle">Houser</h1>
                    <h1 className="dashboardTitle">Dashboard</h1>
                </div>
                <div className="right">
                <Link className="logout" to={{
                    pathname: "/"
                    }} 
                    onClick={() => axios.delete(`/api/logout`)}>Logout
                </Link> 
                </div>
            </div>
        </div>
    )
}
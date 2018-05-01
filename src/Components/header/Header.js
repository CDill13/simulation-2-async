import React from "react";
import logo from "./header_logo.png";
import "./header.css";

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
                <a>Logout</a> 
                </div>
            </div>
        </div>
    )
}
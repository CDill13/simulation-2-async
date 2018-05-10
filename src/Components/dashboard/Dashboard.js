import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import axios from "axios";

import "./dashboard.css";
export default class Dashboard extends Component {

    componentDidMount(){
        axios.get(`/api/isUserOnSession`).then(res => console.log("user", res.data));
    }

    render(){
        return(
            <div>
                <Header/>
                <center className="dashBackground">
                    <div className="dashboardContainer">
                    <Link to={{pathname: "/wizard1"}}> <button className="addPropertyBtn" >Add new property</button>
                    </Link>
                        <div className="filterContainer">
                            <p>List properties with a "desired rent" greater than: $
                                <input className="filterInput"/>
                                <button className="filterBtn">Filter</button>
                                <button className="resetFilterBtn">Reset</button>
                            </p>                        
                        </div>
                        <h3>Home Listings</h3>
                        <div className="listingContainer">
                            <img alt="listing Img" className="listingImg"/>
                            <div className="descriptionContainer">
                                <p>Name</p>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}
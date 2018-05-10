import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
import completed from "./step_completed.png";
import inactive from "./step_inactive.png";
import "./wizard.css";

export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {
            address: "",
            city: "",
            state: "",
            zip: ""
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="wizardBackground">
                    <div className="wizardContainer">
                        <center className="wizardUpperContainer">
                            <h3>Add a new listing</h3>
                            <button>cancel</button>
                        </center>
                        <p>Step 2</p>
                        <div className="wizardLowerContainer">
                            <div className="circleContainer">
                                <img src={completed}/>
                                <img src={active}/>
                                <img src={inactive}/>
                                <img src={inactive}/>
                                <img src={inactive}/>
                            </div>
                            <div className="infoInputContainer">
                                <h3>Address</h3>
                                <input className="addressInput"/>
                                <div className="cityStateContainer">
                                    <div>
                                        <h3>City</h3>
                                        <input className="cityStateInput"/>   
                                    </div> 
                                    <div>
                                        <h3>State</h3>
                                        <input className="cityStateInput"/>
                                    </div> 
                                </div>
                                <h3>Zip</h3>
                                <input className="zipInput"/>
                            </div>
                            <Link to={{pathname: "/wizard1"}}>
                            <button>Previous Step</button>
                            </Link>
                            <Link to={{pathname: "/wizard3"}}>
                            <button>Next Step</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
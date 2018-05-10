import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
import completed from "./step_completed.png";
import inactive from "./step_inactive.png";
// import previewPlaceholder from "./previewPlaceholder.PNG"
import "./wizard.css";

export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {
            desiredRent: ""
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
                        <p>Step 5</p>
                        <div className="wizardLowerContainer">
                            <div className="circleContainer">
                                <img src={completed}/>
                                <img src={completed}/>
                                <img src={completed}/>
                                <img src={completed}/>
                                <img src={active}/>
                            </div>
                            <div className="infoInputContainer">
                                <h3>Recommended Rent $JAVASCRIPT_HERE</h3>
                                <h3>Desired Rent</h3>
                                <input className="desiredRentInput"/>
                            </div>
                            <Link to={{pathname: "/wizard4"}}>
                            <button>Previous Step</button>
                            </Link>
                            <Link to={{pathname: "/dashboard"}}>
                            <button>Complete</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
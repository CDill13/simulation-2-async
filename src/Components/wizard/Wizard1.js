import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
// import completed from "./step_completed.png";
import inactive from "./step_inactive.png";
import "./wizard.css";
import {connect} from "react-redux";
import {updatePropName, updatePropDesc} from "../../ducks/reducer";

export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {
            proppertyName: "",
            propertyDescription: "",
        }
    }

    render(){
        const {updatePropName, updatePropDesc} = this.props;
        return(
            <div>
                <Header/>
                <center className="wizardBackground">
                    <div className="wizardContainer">
                        <center className="wizardUpperContainer">
                            <h3>Add a new listing</h3>
                            <button>cancel</button>
                        </center>
                        <p>Step 1</p>
                        <div className="wizardLowerContainer">
                            <div className="circleContainer">
                                <img alt="step" src={active}/>
                                <img alt="step" src={inactive}/>
                                <img alt="step" src={inactive}/>
                                <img alt="step" src={inactive}/>
                                <img alt="step" src={inactive}/>
                            </div>
                            <div className="infoInputContainer">
                                <h3>Property Name</h3>
                                <input onChange={(e) => updatePropName(e.target.value)} className="propNameInput"/>
                                <h3>Property Description</h3>
                                <input onChange={(e) => updatePropDesc(e.target.value)} className="propDescInput"/>
                            </div>
                            <Link to={{pathname: "/wizard2"}}>
                            <button>Next Step</button>
                            </Link>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}


import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
import completed from "./step_completed.png";
import inactive from "./step_inactive.png";
import previewPlaceholder from "./previewPlaceholder.PNG"
import "./wizard.css";

export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {
            imgURL: ""
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
                        <p>Step 3</p>
                        <div className="wizardLowerContainer">
                            <div className="circleContainer">
                                <img src={completed}/>
                                <img src={completed}/>
                                <img src={active}/>
                                <img src={inactive}/>
                                <img src={inactive}/>
                            </div>
                            <div className="infoInputContainer">
                                <img className="previewImage" src={(this.state.imgURL ? this.state.imgURL : previewPlaceholder)}/>
                                <h3>Image URL</h3>
                                <input className="imageUrlInput"/>
                            </div>
                            <Link to={{pathname: "/wizard2"}}>
                            <button>Previous Step</button>
                            </Link>
                            <Link to={{pathname: "/wizard4"}}>
                            <button>Next Step</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
import completed from "./step_completed.png";
import inactive from "./step_inactive.png";
import previewPlaceholder from "./previewPlaceholder.PNG"
import "./wizard.css";
import {connect} from "react-redux";
import {updateImgURL} from "../../ducks/reducer";

class Wizard3 extends Component {
    constructor(){
        super();
        this.state = {
            imgURL: ""
        }
    }

    render(){
        const {updateImgURL} = this.props;
        // console.log(this.props.address);
        console.log(this.props.imgURL);
        return(
            <div>
                <Header/>
                <div className="wizardBackground">
                    <div className="wizardContainer">
                        <center className="wizardUpperContainer">
                            <h3>Add a new listing</h3>
                            <Link to={{pathname: "/dashboard"}} className="cancelButton">cancel</Link>
                        </center>
                        <p>Step 3</p>
                        <div className="wizardLowerContainer">
                            <div className="circleContainer">
                                <img alt="step" src={completed}/>
                                <img alt="step" src={completed}/>
                                <img alt="step" src={active}/>
                                <img alt="step" src={inactive}/>
                                <img alt="step" src={inactive}/>
                            </div>
                            <div className="infoInputContainer">
                                <img alt="preview" className="previewImage" src={(this.state.imgURL ? this.state.imgURL : previewPlaceholder)}/>
                                <h3>Image URL</h3>
                                <input onChange={(e) => updateImgURL(e.target.value)} className="imageUrlInput"/>
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

function mapStateToProps(duckState) {
    const {imgURL} = duckState;
    return {
        imgURL
    };
}

export default connect(mapStateToProps, {updateImgURL})(Wizard3)
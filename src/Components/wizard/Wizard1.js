import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
// import completed from "./step_completed.png";
import inactive from "./step_inactive.png";
import "./wizard.css";
import {connect} from "react-redux";
import {updatePropName, updatePropDesc} from "../../ducks/reducer";
import axios from "axios";

class Wizard1 extends Component {
    constructor(){
        super();
        this.state = {
            proppertyName: "",
            propertyDescription: "",
        }
    }

    // onKeyPressed(e){
    //     if(e.key === "Enter"){
    //         this.props.history.push("/wizard2");
    //     }
    //     // console.log(e.key);
    // }
    
    componentDidMount(){
        axios.get(`/api/isUserOnSession`).then(res =>
            // console.log("result",res),
            // console.log(`userNugget: `,res.data.user) &
            res.data.user ?
            console.log(`User is still on session`)
            :
            console.log("403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!")
        )
    }

    render(){
        const {updatePropName, updatePropDesc} = this.props;
        console.log(this.props);
        return(
            <div>
                <Header/>
                <center className="wizardBackground">
                    <div className="wizardContainer">
                        <center className="wizardUpperContainer">
                            <h3>Add a new listing</h3>
                            <Link to={{pathname: "/dashboard"}} className="cancelButton"><span className="btnText">Cancel</span></Link>
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
                                <textarea onChange={(e) => updatePropDesc(e.target.value)} className="propDescInput"/>
                            </div>
                            <div className="navButtonContainer">
                                {/* <Link to={{pathname: "/wizard4"}}>
                                <button>Previous Step</button>
                                </Link> */}
                                <Link to={{pathname: "/wizard2"}}>
                                <button>Next Step</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    const {propName, propDesc} = duckState;
    return {
        propName,
        propDesc
    };
    // console.log(propName, propDesc)
}

export default connect(mapStateToProps, {updatePropName, updatePropDesc})(Wizard1)
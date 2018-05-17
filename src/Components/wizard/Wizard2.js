import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
import completed from "./step_completed.png";
import inactive from "./step_inactive.png";
import "./wizard.css";
import {connect} from "react-redux";
import {updateAddress, updateCity, updateState, updateZip} from "../../ducks/reducer"
import axios from "axios";

class Wizard2 extends Component {
    constructor(){
        super();
        this.state = {
            address: "",
            city: "",
            state: "",
            zip: ""
        }
    }

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
        const {updateAddress, updateCity, updateState, updateZip} = this.props;
        // console.log(this.props);
        console.log(this.props.city);
        console.log(this.props.state);
        console.log(this.props.zip);
        console.log(this.props.address);
        return(
            <div>
                <Header/>
                <div className="wizardBackground">
                    <div className="wizardContainer">
                        <center className="wizardUpperContainer">
                            <h3>Add a new listing</h3>
                            <Link to={{pathname: "/dashboard"}} className="cancelButton"><span className="btnText">Cancel</span></Link>
                        </center>
                        <p>Step 2</p>
                        <div className="wizardLowerContainer">
                            <div className="circleContainer">
                                <img alt="step" src={completed}/>
                                <img alt="step" src={active}/>
                                <img alt="step" src={inactive}/>
                                <img alt="step" src={inactive}/>
                                <img alt="step" src={inactive}/>
                            </div>
                            <div className="infoInputContainer">
                                <h3>Address</h3>
                                <input onChange={(e) => updateAddress(e.target.value)} className="addressInput"/>
                                <div className="cityStateContainer">
                                    <div>
                                        <h3>City</h3>
                                        <input onChange={(e) => updateCity(e.target.value)} className="cityStateInput"/>   
                                    </div> 
                                    <div>
                                        <h3>State</h3>
                                        <input onChange={(e) => updateState(e.target.value)} className="cityStateInput"/>
                                    </div> 
                                </div>
                                <h3>Zip</h3>
                                <input onChange={(e) => updateZip(e.target.value)} className="zipInput"/>
                            </div>
                            <div className="navButtons">
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
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    const {address, city, state, zip} = duckState;
    return {
        address,
        city,
        state,
        zip
    }    
}

export default connect(mapStateToProps, {updateAddress, updateState, updateCity, updateZip})(Wizard2);
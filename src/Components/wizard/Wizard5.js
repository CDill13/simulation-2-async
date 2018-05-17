import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
import completed from "./step_completed.png";
// import inactive from "./step_inactive.png";
// import previewPlaceholder from "./previewPlaceholder.PNG"
import "./wizard.css";
import {connect} from "react-redux";
import {updateDesiredRent} from "../../ducks/reducer";
import axios from "axios";

class Wizard5 extends Component {
    constructor(){
        super();
        this.state = {
            desiredRent: ""
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

    saveNewProperty(){
        let newProperty = {
            user: this.props.user.id,
            property_name: this.props.propName,
            property_description: this.props.propDesc,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            img_url: this.props.imgURL,
            monthly_mortgage: this.props.monthlyMortgage,
            loan_amount: this.props.loanAmount,
            desired_rent: this.props.desiredRent,
        };
        console.log(newProperty);
        axios.post(`/api/saveNewProperty`, newProperty)
        .then(res => console.log(res));
    }

    render(){
        const {updateDesiredRent} = this.props;
        console.log(this.props.desiredRent);
        console.log(
            this.props.user,
            this.props.propName,
            this.props.propDesc,
            this.props.address,
            this.props.city,
            this.props.state,
            this.props.zip,
            this.props.imgURL,
            this.props.monthlyMortgage,
            this.props.loanAmount,
            this.props.desiredRent
        )
        let reccomendedRent = (this.props.monthlyMortgage * 1.25).toFixed(2);
        return(
            <div>
                <Header/>
                <div className="wizardBackground">
                    <div className="wizardContainer">
                        <center className="wizardUpperContainer">
                            <h3>Add a new listing</h3>
                            <Link to={{pathname: "/dashboard"}} className="cancelButton"><span className="btnText">Cancel</span></Link>
                        </center>
                        <p>Step 5</p>
                        <div className="wizardLowerContainer">
                            <div className="circleContainer">
                                <img alt="step" src={completed}/>
                                <img alt="step" src={completed}/>
                                <img alt="step" src={completed}/>
                                <img alt="step" src={completed}/>
                                <img alt="step" src={active}/>
                            </div>
                            <div className="infoInputContainer">
                                <h3>Recommended Rent: ${reccomendedRent}</h3>
                                <h3>Desired Rent</h3>
                                <input type="number" min="1" step="any" onChange={(e) => updateDesiredRent(e.target.value)} className="desiredRentInput"/>
                            </div>
                            <div className="navButtons">
                                <Link to={{pathname: "/wizard4"}}>
                                <button>Previous Step</button>
                                </Link>
                                <Link to={{pathname: "/dashboard"}}>
                                <button onClick={() => this.saveNewProperty()} >Complete</button>
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
    const {user, propName, propDesc, address, city, state, zip, imgURL, monthlyMortgage, loanAmount, desiredRent} = duckState;
    return{
        user,
        propName,
        propDesc,
        address,
        city,
        state,
        zip,
        imgURL,
        monthlyMortgage,
        loanAmount,
        desiredRent
    };
}

export default connect(mapStateToProps, {updateDesiredRent})(Wizard5);
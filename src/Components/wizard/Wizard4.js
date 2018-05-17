import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import active from "./step_active.png";
import completed from "./step_completed.png";
import inactive from "./step_inactive.png";
// import previewPlaceholder from "./previewPlaceholder.PNG"
import "./wizard.css";
import {connect} from "react-redux";
import {updateLoanAmount, updateMonthlyMortgage} from "../../ducks/reducer";
import axios from "axios";

class Wizard4 extends Component {
    constructor(){
        super();
        this.state = {
            loanAmount: "",
            monthlyMortgage: ""
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
        const {updateLoanAmount, updateMonthlyMortgage} = this.props;
        console.log(this.props.monthlyMortgage);
        console.log(this.props.loanAmount);
        return(
            <div>
                <Header/>
                <div className="wizardBackground">
                    <div className="wizardContainer">
                        <center className="wizardUpperContainer">
                            <h3>Add a new listing</h3>
                            <Link to={{pathname: "/dashboard"}} className="cancelButton"><span className="btnText">Cancel</span></Link>
                        </center>
                        <p>Step 4</p>
                        <div className="wizardLowerContainer">
                            <div className="circleContainer">
                                <img alt="step" src={completed}/>
                                <img alt="step" src={completed}/>
                                <img alt="step" src={completed}/>
                                <img alt="step" src={active}/>
                                <img alt="step" src={inactive}/>
                            </div>
                            <div className="infoInputContainer">
                                <h3>Loan Amount</h3>
                                <input type="number" min="1" step="any" onChange={(e) => updateLoanAmount(e.target.value)} className="imageUrlInput"/>
                                <h3>Monthly Mortgage</h3>
                                <input type="number" min="1" step="any" onChange={(e) => updateMonthlyMortgage(e.target.value)} className="imageUrlInput"/>
                            </div>
                            <div className="navButtons">
                                <Link to={{pathname: "/wizard3"}}>
                                <button>Previous Step</button>
                                </Link>
                                <Link to={{pathname: "/wizard5"}}>
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
    const {loanAmount, monthlyMortgage} = duckState;
    return{
        loanAmount, monthlyMortgage
    };
}

export default connect(mapStateToProps, {updateLoanAmount, updateMonthlyMortgage})(Wizard4);
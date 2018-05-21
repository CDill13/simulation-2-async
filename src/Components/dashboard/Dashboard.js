import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import axios from "axios";
import {connect} from "react-redux";
import {putUserOnProps} from "../../ducks/reducer";
import "./dashboard.css";

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            userProperties: null,
            filter: -9001,
            sift: -9001
        };
    }

    componentDidMount(){
        axios.get(`/api/isUserOnSession`).then(res =>
            // console.log("result",res),
            // console.log(`userNugget: `,res.data.user) &
            res.data.user ?
            this.props.putUserOnProps(res.data.user) & 
            axios.post(`/api/getUserProperties`, res.data.user)
            .then(response => {
                this.setState({
                    userProperties: response.data
                });
            })
            :
            this.props.history.push("/unauthorized"),
            console.log("403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!")
        )
    }

    handleFilter(value){
        this.setState({
            filter: value
        });
    }

    handleSift(value){
        this.setState({
            sift: value
        });
    }

    resetSift(reset){
        this.setState({
            sift: reset
        });
    }

    deleteProperty(propId){
        // alert(propId);
        // alert("Are you sure you want to delete that shit?")
        axios.delete(`/api/deleteProperty/${propId}`)
        .then(axios.get(`/api/isUserOnSession`).then(res =>
            // console.log("result",res),
            // console.log(`userNugget: `,res.data.user) &
            res.data.user ?
            this.props.putUserOnProps(res.data.user) & 
            axios.post(`/api/getUserProperties`, res.data.user)
            .then(response => {
                this.setState({
                    userProperties: response.data
                });
            })
            :
            console.log("403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!403 UNAUTHORIZED!!!")
        ))
    }

    render(){
        // const {putUserOnProps} = this.props;
        console.log(`user:`,this.props.user && this.props.user.id);
        console.log(`userProperties`,this.state.userProperties);
        // console.log(`session: `, req)
        // console.log(this.props);
        return(
            <div>
                <Header/>
                <div className="dashBackground">
                    <div className="dashboardContainer">
                    <center>   
                        <Link to={{pathname: "/wizard1"}}> <button className="addPropertyBtn" >Add new property</button>
                        </Link>
                    </center>
                        <div className="filterContainer">
                            <center>
                                <p>List properties with a "desired rent" greater than: $
                                    <input onChange={(e) => this.handleFilter(e.target.value)} className="filterInput"/>
                                    <button onClick={() => this.handleSift(this.state.filter)} className="filterBtn">Filter</button>
                                    <button onClick={() => this.resetSift(-9001)} className="resetFilterBtn">Reset</button>
                                </p>                        
                            </center>
                        </div>
                        <div className="dashboardLower">
                            <h3>Home Listings</h3>
                            <div className="listingContainer">
                                {this.state.userProperties ? this.state.userProperties.map((element) => {
                                    let reccomendedRent1 = element.monthly_mortgage.replace(",", "");
                                    let reccomendedRent2 = (parseFloat(reccomendedRent1.slice(1)) * 1.25).toFixed(2);
                                    // * 1.25).toFixed(2)
                                    console.log("Reccomended:",reccomendedRent2);
                                    console.log("property: ", element);
                                    return Number(reccomendedRent2) > this.state.sift ?
                                        <div className="listingInformationBox">
                                            <img className="listingImg" alt="listing" src={element.img_url}/>
                                            <div className="nameAndDescriptionBox">
                                                <b >{element.property_name}</b>
                                                <p>{element.property_description}</p>
                                            </div>
                                            <div className="verticalLine"></div>
                                            <div className="listingDetailBox">
                                                <b>Loan: {element.loan_amount}</b>
                                                <b>Monthly Mortgage: {element.monthly_mortgage}</b>
                                                <b>Reccomended Rent: ${reccomendedRent2}</b>
                                                <b>Desired Rent: {element.desired_rent}</b>
                                                <b>Address: {element.address}</b>
                                                <b>City: {element.city}</b>
                                                <b>State: {element.state}</b>
                                                <b>Zip: {element.zip}</b>
                                            </div>
                                            <div onClick={() => this.deleteProperty(element.prop_id)} className="X">X</div>
                                        </div>
                                    : console.log("filtered", parseFloat(element.desired_rent.slice(1)) > this.state.filter);
                                })
                                : <p>LOADING...</p>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    const {user} = duckState;
    return{
        user
    };
}

export default connect(mapStateToProps, {putUserOnProps})(Dashboard);
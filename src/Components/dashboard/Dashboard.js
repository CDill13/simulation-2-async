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
            userProperties: []
        };
    }

    componentDidMount(){
        axios.get(`/api/isUserOnSession`).then(res =>
            // console.log(`userNugget: `,res.data.user) &
            this.props.putUserOnProps(res.data.user) & 
            axios.post(`/api/getUserProperties`, res.data.user)
            .then(response => {
                this.setState({
                    userProperties: response.data
                });
            })
        )
    
        
    }

    render(){
        const {putUserOnProps} = this.props;
        console.log(`user:`,this.props.user && this.props.user.id);
        console.log(`userProperties`,this.state.userProperties);
        // console.log(`session: `, req)
        // console.log(this.props);
        return(
            <div>
                <Header/>
                <center className="dashBackground">
                    <div className="dashboardContainer">
                    <Link to={{pathname: "/wizard1"}}> <button className="addPropertyBtn" >Add new property</button>
                    </Link>
                        <div className="filterContainer">
                            <p>List properties with a "desired rent" greater than: $
                                <input className="filterInput"/>
                                <button className="filterBtn">Filter</button>
                                <button className="resetFilterBtn">Reset</button>
                            </p>                        
                        </div>
                        <h3>Home Listings</h3>
                        <div className="listingContainer">
                            {this.state.userProperties.map((element) => {
                                return <div>poop</div>
                            })}
                            <img alt="listing Img" className="listingImg"/>
                            <div className="descriptionContainer">
                                <p>Name</p>
                            </div>
                        </div>
                    </div>
                </center>
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
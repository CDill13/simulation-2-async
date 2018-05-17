import React from "react";
import {Link} from "react-router-dom";

export default function UnAuth(){
    return(
    <div>
        <h1>STATUS 403</h1>
        <h1>UNAUTHORIZED</h1>
        <Link to={{pathname: "/"}}>CLICK HERE TO BE REDIRECTED TO THE LOGIN PAGE</Link>
    </div>
    )
}

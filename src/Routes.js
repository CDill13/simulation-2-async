import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import Auth from "./Components/auth/Auth";
import Dashboard from "./Components/dashboard/Dashboard";

export default(
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Auth}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
    </HashRouter>
);
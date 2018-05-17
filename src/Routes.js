import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import Auth from "./Components/auth/Auth";
import Dashboard from "./Components/dashboard/Dashboard";
import Wizard1 from "./Components/wizard/Wizard1";
import Wizard2 from "./Components/wizard/Wizard2";
import Wizard3 from "./Components/wizard/Wizard3";
import Wizard4 from "./Components/wizard/Wizard4";
import Wizard5 from "./Components/wizard/Wizard5";
import UnAuth from "./Components/auth/UnAuth";

export default(
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Auth}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/wizard1" component={Wizard1}/>
                <Route path="/wizard2" component={Wizard2}/>
                <Route path="/wizard3" component={Wizard3}/>
                <Route path="/wizard4" component={Wizard4}/>
                <Route path="/wizard5" component={Wizard5}/>
                <Route path="/unauthorized" component={UnAuth}/>
            </Switch>
        </div>
    </HashRouter>
);
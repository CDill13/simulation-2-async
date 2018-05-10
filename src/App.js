import React, { Component } from 'react';
// import logo from './logo.svg';
// import Header from "./Components/header/Header"
// import Dashboard from "./Components/dashboard/Dashboard";
// import Auth from "./Components/auth/Auth";
import routes from "./Routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Dashboard/> */}
        {routes}
        {/* <Header/> */}
      </div>
    );
  }
}

export default App;

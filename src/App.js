import React, { Component } from 'react';
// import logo from './logo.svg';
// import Header from "./Components/header/Header"
// import Dashboard from "./Components/dashboard/Dashboard";
import Auth from "./Components/auth/Auth";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Dashboard/> */}
        <Auth/>
        {/* <Header/> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Home from './Home'
import "./styles/home.css"
class HomeController extends Component {
  
  state={
    name:'',
    lastName:'',
  }

  handleChange = e => {
    const value = (
      e.target.type === 'checkbox' ? 
        e.target.checked : e.target.value
    )
    this.setState({
      [e.target.name] : value
    })
    console.log(this.state)
  }
  render() {
    return (
    <Home
      className="homeContainer"
      state={this.state}
      onChange = {this.handleChange}
    />)
  }
}

export default HomeController;

import React from "react";
import { Link } from 'react-router-dom'

const About = (props) => {
  console.log(props.suggestions)
  return(
    <div>
      <h1>Este es un Abouth</h1>
      <Link to='/'> Ir a Home</Link>
      <p> {props.suggestions} </p>
      <p> {} </p>
    </div>
  );
};
/*
class About extends React.Component{
  render (){
    return <h1>Este es el about</h1>
  }
}*/

export default About;

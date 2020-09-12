import React from 'react'
import {Link } from 'react-router-dom'

const Home = (props) =>{
  return (
    <React.Fragment>
      <h1>Nombre: {props.state.name} </h1>
      <h2>Apellido: {props.state.lastName}</h2>
      <label>Nombre: 
      <input
        type="text"
        placeholder="nombre"
        name="name"
        onChange={props.onChange}
        value={props.state.name}
      />
      </label>
      <label>Apellido: 
      <input
        type="text"
        name="lastName"
        placeholder="apellido"
        onChange={props.onChange}
        value={props.state.lastName}
      />
      </label>
      <label>
        <input 
          type="checkbox"
          name="checket"
          checked={props.state.checked}
          onChange={props.onChange}
        />
        Aceptas los terminos y condiciones?
      </label>
      <Link to="/about">Go to about ;)</Link>
    </React.Fragment>
  );
}
export default Home
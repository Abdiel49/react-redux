import React, { Component } from 'react';
import { connect } from 'react-redux'
import About from './About'

class Results extends Component{
  render(){
    
    const { suggestions } = this.props;
    console.log(suggestions)
    console.log(this.props)

    return ("hola aqui es results" );
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
    hola: 'hola mundo,'
  }
}
/*
const wrapper = connect( mapStateToProps );
const component = wrapper(Results);
export default component
*/

export default connect(mapStateToProps)(Results);
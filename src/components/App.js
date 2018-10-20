import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
         Starter Code
       </div>
     )
  }
}

function mapStateToProps(state) {
  return {
  // mapStateToProps return object
  };
}

export default connect(mapStateToProps)(App);

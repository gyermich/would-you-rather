import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Nav from './Nav'
import Login from './Login'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          <div className='container'>
            {this.props.loading === true
              ? <Route component={Login} />
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/question/:id' component={Question} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                </div>}
          </div>
        </Fragment>
      </Router>
     )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);

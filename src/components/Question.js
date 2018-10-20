import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='question'>
      <p>{this.props.question.optionOne.text}</p>
      OR
      <p>{this.props.question.optionTwo.text}</p>

      </div>
    )
  }
}
 function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id]
  return {
    authedUser,
    question,
  }
}
 export default connect(mapStateToProps)(Question)

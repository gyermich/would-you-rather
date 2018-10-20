import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    // console.log(this.props)
    const { question, author } = this.props
    console.log('?', question)
    const {
        id, timestamp, optionOne, optionTwo
    } = question
    return (
      <div className='question'>
        <img
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
            className='avatar'
        />
        <p>{question.optionOne.text}</p>
        OR
        <p>{question.optionTwo.text}</p>

      </div>
    )
  }
}
 function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const author = users[question.author]
  return {
    authedUser,
    question,
    author,
  }
}
 export default connect(mapStateToProps)(Question)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Image, Radio, FormGroup, Button, Media } from 'react-bootstrap'
import { handleAnswerQuestion } from '../actions/questions'
import { Link } from 'react-router-dom'
import Option from './Option'

class QuestionResults extends Component {
  format_option = (option, question, authedUser) => {
    const percent = ((option.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed(2)

    return `${option.text} - Number Of Votes: ${option.votes.length} - ${percent}%`
  }

  isVoted = (option, authedUser) => {
    console.log("OPTION", option.votes, authedUser)
    return option.votes.includes(authedUser)
  }

  render() {
    const { question, currentUser, authedUser } = this.props
    const { optionOne, optionTwo } = question

    return (
      <Row>
          <Option
            isVoted={this.isVoted(optionOne, authedUser)}
            option={this.format_option(optionOne, question, authedUser)}
          />
          <Option
            isVoted={this.isVoted(optionTwo, authedUser)}
            option={this.format_option(optionTwo, question, authedUser)}
          />
        </Row>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const currentUser = users[authedUser]

  return {
    question,
    currentUser,
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionResults)

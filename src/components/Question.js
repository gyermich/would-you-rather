import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Image, Radio, FormGroup, Button, Media } from 'react-bootstrap'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {
  handleAnswer = (e, answer) => {
    e.preventDefault()

    const { dispatch, question, authedUser } =  this.props

    dispatch(handleAnswerQuestion({
      id: question.id,
      answer,
      authedUser
    }))
  }
  render() {
    const { question, author } = this.props
    const {
        id, timestamp, optionOne, optionTwo
    } = question

    return (
      <div className='question'>
      <Media>
          <Media.Left>
            <img
                width={100}
                height={100}
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
            />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{author.name} asks:</Media.Heading>
            <Row>
                <Button
                  questionId={question.id}
                  optionName="optionOne"
                  onClick={(e) => this.handleAnswer(e, 'optionOne')}>
                  {question.optionOne.text}
                </Button>
                <p>OR</p>
                <Button
                  questionId={question.id}
                  optionName="optionTwo"
                  onClick={(e) => this.handleAnswer(e, 'optionTwo')}>
                  {question.optionTwo.text}
                </Button>
              </Row>
          </Media.Body>
        </Media>

      </div>
    )
  }
}
 function mapStateToProps ({ authedUser, users, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const author = users[question.author]
  return {
    authedUser,
    question,
    author,
  }
}
 export default connect(mapStateToProps)(Question)

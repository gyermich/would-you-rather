import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Image, Radio, FormGroup, Button, Media } from 'react-bootstrap'
import { handleAnswerQuestion } from '../actions/questions'
import { Link } from 'react-router-dom'

class QuestionPreview extends Component {
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
              <p> ...{question.optionOne.text}...</p>
                <Link to={`/question/${question.id}`}
                  questionId={question.id}>
                  See more
                </Link>
              </Row>
          </Media.Body>
        </Media>

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
 export default connect(mapStateToProps)(QuestionPreview)

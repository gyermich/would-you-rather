import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Image, Radio, FormGroup, Button, Media } from 'react-bootstrap'
import { handleAnswerQuestion } from '../actions/questions'
import QuestionNotFound from './QuestionNotFound'

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

    return (
      <Fragment>
        {question
            ?
            (<div className='question'>
              <Media>

                  <Media.Left>
                    <img
                        width={160}
                        height={160}
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                    />
                  </Media.Left>

                  <Media.Body>

                    <Media.Heading>
                    <p>{author.name} asks:</p>
                    </Media.Heading>

                    <Row><h5>Would you rather...?</h5></Row>

                    <Row>
                        <Button
                          questionId={question.id}
                          optionName="optionOne"
                          onClick={(e) => this.handleAnswer(e, 'optionOne')}>
                          {question.optionOne.text}
                        </Button>

                        <span className='option-divider'>OR</span>

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
            : <QuestionNotFound />}
        </Fragment>

    )
  }
}

 function mapStateToProps ({ authedUser, users, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const author = question ? users[question.author] : ''

  return {
    authedUser,
    question,
    author,
  }
}

 export default connect(mapStateToProps)(Question)

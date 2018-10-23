import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Button, Media } from 'react-bootstrap'
import { handleAnswerQuestion } from '../actions/questions'
import QuestionNotFound from './QuestionNotFound'
import QuestionResults from './QuestionResults'

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
    const { question, author, showResults } = this.props

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

                    {
                      showResults
                      ?
                        <QuestionResults id={ question.id }/>
                      :
                        <Row>
                            <Button
                              onClick={(e) => this.handleAnswer(e, 'optionOne')}>
                              {question.optionOne.text}
                            </Button>

                            <span className='option-divider'>OR</span>

                            <Button
                              onClick={(e) => this.handleAnswer(e, 'optionTwo')}>
                              {question.optionTwo.text}
                            </Button>
                          </Row>
                    }

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
    const currentUser = users[authedUser]
    const showResults = question ? Object.keys(currentUser.answers).includes(question.id) : false

  return {
    authedUser,
    question,
    author,
    showResults
  }
}

export default connect(mapStateToProps)(Question)

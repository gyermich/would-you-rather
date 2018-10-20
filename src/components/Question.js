import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Image, Radio, FormGroup, Button, Media } from 'react-bootstrap'

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
                <FormGroup>
                  <Radio name="radioGroup">
                    {question.optionOne.text}
                  </Radio>{' '}
                  <Radio name="radioGroup">
                    {question.optionTwo.text}
                  </Radio>{' '}
                </FormGroup>
                <Button type="submit">Select</Button>
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
 export default connect(mapStateToProps)(Question)

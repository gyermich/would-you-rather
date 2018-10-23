import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class QuestionPreview extends Component {
  render() {
    const { question, author } = this.props

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
                <Link to={`/question/${question.id}`}>
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

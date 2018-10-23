import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
    const { user } = this.props

    return (
      <div className='question'>
      <Media>
          <Media.Left>
            <img
                width={100}
                height={100}
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
            />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{user.name}'s stats:</Media.Heading>
            <Row>
            <h5> Questions Asked: {user.questions.length}</h5>
            <h5> Questions Answered: {Object.keys(user.answers).length}</h5>
            </Row>
          </Media.Body>
        </Media>

      </div>
    )
  }
}

 export default User

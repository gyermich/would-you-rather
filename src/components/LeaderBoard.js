import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { ListGroupItem, ListGroup } from 'react-bootstrap'


 class LeaderBoard extends Component {
    render() {
        const { users } = this.props

        return (
            <ListGroup>
                {users.map((user) => (
                    <ListGroupItem key={user.id}>
                        <User user={user}/>
                    </ListGroupItem>
                ))}
            </ListGroup>
        )
    }
 }

 function mapStateToProps ({ users }) {
    const sorted_users = Object.values(users)
       .sort((a, b) => (
            (Object.keys(b.answers).length + b.questions.length) -
            (Object.keys(a.answers).length + a.questions.length)
        ))

    return {
        users: sorted_users

   }
 }

 export default connect(mapStateToProps)(LeaderBoard)

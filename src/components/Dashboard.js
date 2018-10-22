import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import QuestionPreview from './QuestionPreview'
import { ListGroupItem, ListGroup } from 'react-bootstrap'


 class Dashboard extends Component {
  render() {
    return (
      <div class="">
        <h3 className='text-center'>Would you rather ..?</h3>
        <ListGroup>
          {this.props.questionIds.map((id) => (
            <ListGroupItem key={id}>
              <QuestionPreview id={id}/>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}
 function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      // .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}
 export default connect(mapStateToProps)(Dashboard)

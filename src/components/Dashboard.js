import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import QuestionPreview from './QuestionPreview'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Nav as NavBar, NavItem } from 'react-bootstrap'


 class Dashboard extends Component {
  state = {
    selectedTab: '1'
  }

  handleSelect(selectedKey, e) {
    if (this.state.selectedTab !== selectedKey) {
        this.setState({
            selectedTab: selectedKey
        });
    }
  }

  render() {
    const {unansweredQuestionIDs, answeredQuestionIDs} = this.props

    return (
      <div className="question-list">
        <h3 className='text-center'>Would you rather ..?</h3>
        <NavBar
          bsStyle="tabs"
          activeKey={this.state.selectedTab}
          onSelect={selectedKey => this.handleSelect(selectedKey)}
        >
          <NavItem eventKey={'1'}>
              Unanswered Questions
          </NavItem>

          <NavItem eventKey={'2'}>
              Answered Questions
          </NavItem>

        </NavBar>
        <ListGroup>
          {this.state.selectedTab === '1'
          ? unansweredQuestionIDs.map((id) => (
            <ListGroupItem key={id}>
              <QuestionPreview id={id}/>
            </ListGroupItem>
          ))
          : answeredQuestionIDs.map((id) => (
            <ListGroupItem key={id}>
              <QuestionPreview id={id}/>
            </ListGroupItem>
          ))
          }

        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps({questions, authedUser}) {

    const unansweredQuestions = Object.values(questions).filter((question) =>
        !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))

    const answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    )

    return {
        unansweredQuestionIDs: Object.values(unansweredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        answeredQuestionIDs: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
    }
}

export default connect(mapStateToProps)(Dashboard)

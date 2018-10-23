import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav as BootstrapNav, NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { clearAuthedUser } from '../actions/authedUser';


class Nav extends Component {

  handleSignOut = (e) => {
      this.props.dispatch(clearAuthedUser())
  }

  render() {
    const { currentUser } = this.props
    return (
      <BootstrapNav bsStyle="tabs">
        <NavItem componentClass='span'>
            <NavLink to='/' exact>
              Home
            </NavLink>
        </NavItem>

        <NavItem componentClass='span'>
            <NavLink to='/' exact>
              Leader Board
            </NavLink>
        </NavItem>

          <NavItem componentClass='span'>
            <NavLink to='/new'>
              New Question
            </NavLink>
          </NavItem>

          {currentUser !== null
            ?
            <NavItem componentClass='span' className='navbar-right'>
            Signed in as { currentUser.name }
            <img
                width={25}
                height={25}
                src={currentUser.avatarURL}
                alt={`Avatar of ${currentUser.name}`}
            />

              <NavLink to='#' onClick={this.handleSignOut}>
                Sign out
              </NavLink>
            </NavItem>
            : null}

      </BootstrapNav>
    )
  }
}

function mapStateToProps ({ authedUser, users}) {
    const currentUser = authedUser ? users[authedUser] : null

  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav)

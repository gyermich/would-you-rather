import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav as NavBar, NavItem } from 'react-bootstrap'

 export default function Nav () {
  return (
    <NavBar bsStyle="tabs">
      <NavItem>
          <NavLink to='/' exact>
            Home
          </NavLink>
      </NavItem>

      <NavItem>
          <NavLink to='/' exact>
            Leader Board
          </NavLink>
      </NavItem>

        <NavItem>
          <NavLink to='/new'>
            New Question
          </NavLink>
        </NavItem>
    </NavBar>
  )
}

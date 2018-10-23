import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Button, FormControl, ControlLabel } from 'react-bootstrap'
import { setAuthedUser, clearAuthedUser } from '../actions/authedUser';

class Login extends Component {
    state = {
        userId: null,
    }

    handleSubmit = e => {
        e.preventDefault()
        const { dispatch, history } = this.props
        dispatch(setAuthedUser(this.state.userId))
        if (window.location.pathname !== '/login') {
            return
        }
        history.push('/')
    }

    handleSelect = (e) => {
        const value = e.target.value

        this.setState({
            userId: value
        })
    }

    componentDidMount() {
        this.props.dispatch(clearAuthedUser())
    }

    render() {
        const { users } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select User</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleSelect}>
                  <option value="">select</option>
                  {Object.keys(users).map(key => (
                      <option value={users[key].id} key={key}>
                          {users[key].name}
                      </option>
                  ))}
                  </FormControl>
                </FormGroup>

                <Button type="submit">
                    Login
                </Button>
            </form>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users,
    }
}

export default connect(mapStateToProps)(Login)

import React, { Component } from 'react'
import { FormGroup, Button, FormControl, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }

    handleChange = (e, option) => {
        const text = e.target.value

        this.setState(() => ({
            [option]: text,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }))
    }

    render() {
        const {optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h3> Add New Question </h3>
                <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <ControlLabel>Option One</ControlLabel>
                  <FormControl
                    id='optionOne'
                    type="text"
                    placeholder="Enter option one"
                    value={optionOne}
                    onChange={(e) => {this.handleChange(e, 'optionOne')}}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Option Two</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter option two"
                    value={optionTwo}
                    onChange={(e) => {this.handleChange(e, 'optionTwo')}}
                  />
                </FormGroup>

                <Button
                    type="submit"
                    disabled={Boolean(optionOne === '' | optionTwo === '')}
                >
                    Add
                </Button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)

import React, { Component } from 'react'

class Option extends Component {
    render() {
        const { isVoted, option } = this.props
        return (
            <div className={isVoted ? 'voted-option' : '' }>
                { option }
                { isVoted ? ' (your choice!)' : ''}
            </div>
        )
    }
}

export default Option

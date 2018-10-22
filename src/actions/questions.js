import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const NEW_QUESTION = 'NEW_QUESTION'

export function addQuestion (question) {
    return {
        type: NEW_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        const question_info = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }
        return saveQuestion(question_info)
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion ({ authedUser, id, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        answer,
        id,
    }
}


export function handleAnswerQuestion (info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))

        return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            dispatch(answerQuestion(info))
            alert('There was an error saving the answer. Try again.')
        })
    }
}

import { ANSWER_QUESTION, RECEIVE_QUESTIONS, NEW_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
    console.log('STATE', state)
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    votes: action.answer
                    ? state[action.id][action.answer].votes.concat([action.authedUser])
                    : state[action.id][action.answer].votes.filter((uid) => uid !== action.authedUser
                        )
                }
            }
        case NEW_QUESTION:
            const question = action

            return {
                ...state,
                [action.question.id]: action.question
            }
        default :
            return state
    }
}

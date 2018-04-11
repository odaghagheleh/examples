import { combineReducers } from 'redux'
import { ADD_DISPUTE } from '../actions/actions'


function transactionDispute(state, action) {
    switch (action.type) {
        case ADD_DISPUTE:
            return {
                transactionList: action.transactionList
            }
        default:
            return state
    }
}

function transactionDisputes(state = [], action) {
    switch (action.type) {
        case ADD_DISPUTE:
            return [ transactionDispute(undefined, action) ]
        default:
            return state
    }
}

const transactionDisputeReducer = combineReducers({
    transactionDisputes
})
export default transactionDisputeReducer
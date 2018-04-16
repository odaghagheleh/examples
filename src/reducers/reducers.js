import { combineReducers } from 'redux';

import { GET_TRANSACTION_LIST } from '../actions/actions';
import { GET_TRANSACTION_HISTORY } from '../actions/actions';
import { ADD_DISPUTE } from '../actions/actions';
import { ADD_CREDIT_CARD_QUESTION_ANSWER } from '../actions/actions';
import { GET_ADDITIONAL_QUESTIONS } from '../actions/actions';
import { SET_ADDITIONAL_QUESTIONS_ANSWER } from '../actions/actions';
import { SET_EXTRA_INFO } from '../actions/actions';


//Transaction List Reducer
function transactionList(state, action) {
    switch (action.type) {
        case GET_TRANSACTION_LIST:
            return action.payload;

        default:
            return state
    }
}

function transactionLists(state = {}, action) {
    switch (action.type) {
        case GET_TRANSACTION_LIST:
            return transactionList(undefined, action)
        default:
            return state
    }
}
//Transaction History Reducer
function transactionHistory(state, action) {
    switch (action.type) {
        case GET_TRANSACTION_HISTORY:
            return action.payload;

        default:
            return state
    }
}

function transactionHistories(state = {}, action) {
    switch (action.type) {
        case GET_TRANSACTION_HISTORY:
            return transactionHistory(undefined, action)
        default:
            return state
    }
}
//Transaction Dispute reducer
function transactionDispute(state, action) {
    switch (action.type) {
        case ADD_DISPUTE:
            return action.transactionList;

        default:
            return state
    }
}

function transactionDisputes(state = [], action) {
    switch (action.type) {
        case ADD_DISPUTE:
            return transactionDispute(undefined, action)
        default:
            return state
    }
}

//Credit Card question reducer
function creditCardQA(state, action) {
    switch (action.type) {
        case ADD_CREDIT_CARD_QUESTION_ANSWER:
            return action.answers;

        default:
            return state
    }
}

function creditCardQAs(state = {}, action) {
    switch (action.type) {
        case ADD_CREDIT_CARD_QUESTION_ANSWER:
            return creditCardQA(undefined, action)
        default:
            return state
    }
}

//Additional question reducer
function additionalQuestion(state, action) {
    switch (action.type) {
        case GET_ADDITIONAL_QUESTIONS:
            return action.payload;

        default:
            return state
    }
}

function additionalQuestions(state = {}, action) {
    switch (action.type) {
        case GET_ADDITIONAL_QUESTIONS:
            return additionalQuestion(undefined, action)
        default:
            return state
    }
}

//Set Additional question answer reducer
function additionalQuestionAnswer(state, action) {
    switch (action.type) {
        case SET_ADDITIONAL_QUESTIONS_ANSWER:
            return action.payload;

        default:
            return state
    }
}

function additionalQuestionAnswers(state = {}, action) {
    switch (action.type) {
        case SET_ADDITIONAL_QUESTIONS_ANSWER:
            return additionalQuestionAnswer(undefined, action)
        default:
            return state
    }
}

//Set Additional question answer reducer
function extraInfo(state, action) {
    switch (action.type) {
        case SET_EXTRA_INFO:
            return action.payload;

        default:
            return state
    }
}

function extraInfos(state = {}, action) {
    switch (action.type) {
        case SET_EXTRA_INFO:
            return extraInfo(undefined, action)
        default:
            return state
    }
}


//Returning the reducers
const transactionDisputeReducer = combineReducers({
    transactionLists,
    transactionHistories,
    transactionDisputes,
    creditCardQAs,
    additionalQuestions,
    additionalQuestionAnswers,
    extraInfos
})
export default transactionDisputeReducer
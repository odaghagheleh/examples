import { combineReducers } from 'redux';
import stepper from '../stepper/state/reducer';
import {
GET_TRANSACTION_LIST,
GET_NOTIFICATION_HISTORY,
GET_TRANSACTION_HISTORY,
ADD_DISPUTE,
GET_DISPUTE_REASON_QUESTIONS,
SET_DISPUTE_REASON_ANSWER,
ADD_CREDIT_CARD_QUESTION_ANSWER,
GET_ADDITIONAL_QUESTIONS,
SET_ADDITIONAL_QUESTIONS_ANSWER,
SET_EXTRA_INFO,
SUBMIT_DISPUTE,
 } from '../actions/actions';


//Transaction List Reducer
function transactionList(state, action) {
    switch (action.type) {
        case GET_TRANSACTION_LIST:
            return action.payload;

        default:
            return state
    }
}

function transactionLists(state = [], action) {
    switch (action.type) {
        case GET_TRANSACTION_LIST:
            return transactionList(undefined, action)
        default:
            return state
    }
}

function NotificationList(state = [], action) {
    switch (action.type) {
        case GET_TRANSACTION_HISTORY:
            return action.payload;

        default:
            return state
    }
}

function notificationLists(state = [], action) {
    switch (action.type) {
        case GET_NOTIFICATION_HISTORY:
            return action.payload;

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

function transactionHistories(state = [], action) {
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
            return action.payload;

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
//Transaction Dispute Reason Questions reducer
function transactionDisputeReasonQuestion(state, action) {
    switch (action.type) {
        case GET_DISPUTE_REASON_QUESTIONS:
            return action.payload;

        default:
            return state
    }
}

function transactionDisputeReasonQuestions(state = [], action) {
    switch (action.type) {
        case GET_DISPUTE_REASON_QUESTIONS:
            return transactionDisputeReasonQuestion(undefined, action)
        default:
            return state
    }
}

//Transaction Dispute Reason answer reducer
function transactionDisputeReasonAnswer(state, action) {
    switch (action.type) {
        case SET_DISPUTE_REASON_ANSWER:
            return action.payload;

        default:
            return state
    }
}

function transactionDisputeReasonAnswers(state = "", action) {
    switch (action.type) {
        case SET_DISPUTE_REASON_ANSWER:
            return transactionDisputeReasonAnswer(undefined, action)
        default:
            return state
    }
}
//Credit Card question reducer
function creditCardQA(state, action) {
    switch (action.type) {
        case ADD_CREDIT_CARD_QUESTION_ANSWER:
            return action.payload;

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

function additionalQuestions(state = [], action) {
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

function extraInfos(state = "", action) {
    switch (action.type) {
        case SET_EXTRA_INFO:
            return extraInfo(undefined, action)
        default:
            return state
    }
}

//Submit case reducer
function submitDispute(state, action) {
    switch (action.type) {
        case SUBMIT_DISPUTE:
            return action.payload;

        default:
            return state
    }
}

function submitDisputes(state = "", action) {
    switch (action.type) {
        case SUBMIT_DISPUTE:
            return submitDispute(undefined, action)
        default:
            return state
    }
}

//Returning the reducers
const transactionDisputeReducer = combineReducers({
    transactionLists,
    notificationLists,
    transactionHistories,
    transactionDisputes,
    transactionDisputeReasonQuestions,
    transactionDisputeReasonAnswers,
    creditCardQAs,
    additionalQuestions,
    additionalQuestionAnswers,
    extraInfos,
    stepper,
    submitDisputes,
});

export default transactionDisputeReducer;

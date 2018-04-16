
export const GET_TRANSACTION_LIST = 'GET_TRANSACTION_LIST';
export const GET_TRANSACTION_HISTORY = 'GET_TRANSACTION_HISTORY';
export const ADD_DISPUTE = 'ADD_DISPUTE';
export const ADD_CREDIT_CARD_QUESTION_ANSWER = 'ADD_CREDIT_CARD_QUESTION_ANSWER ';
export const GET_ADDITIONAL_QUESTIONS = 'GET_ADDITIONAL_QUESTIONS ';
export const SET_ADDITIONAL_QUESTIONS_ANSWER = 'SET_ADDITIONAL_QUESTIONS_ANSWER';
export const SET_EXTRA_INFO = 'SET_EXTRA_INFO';

export function getTransactionList() {
    return {
        type: GET_TRANSACTION_LIST,
        payload: ["Transaction1", "Transaction2", "Transaction3"]
    };
}
export function getTransactionHistory() {
    return {
        type: GET_TRANSACTION_HISTORY,
        payload: [
            {
                "id": "1",
                "recentActivity": "18/03/2018",
                "type": "Payment",
                "Description": "Simple",
                "Amount": 24,
                "Balance": 36,
                "extraDescriptions": "extraDescriptions"
            },
            {
                "id": "2",
                "recentActivity": "18/03/2018",
                "type": "Payment",
                "Description": "Good",
                "Amount": 24,
                "Balance": 36,
                "extraDescriptions": "extraDescriptions"
            },
            {
                "id": "3",
                "recentActivity": "18/03/2018",
                "type": "Payment",
                "Description": "Bad",
                "Amount": 25,
                "Balance": 36,
                "extraDescriptions": "extraDescriptions"
            }
        ]
    };
}
export function addDispute(transactionList) {
    return {
        type: ADD_DISPUTE,
        transactionList: transactionList
    };
}

export function addCreditCardQuestionAnswer(answers) {
    return {
        type: ADD_CREDIT_CARD_QUESTION_ANSWER,
        answers: answers
    };
}

export function getAdditionalQuestions() {
    return {
        type: GET_ADDITIONAL_QUESTIONS,
        payload: [
            { id: "1", question: "What is your name?" },
            { id: "2", question: "What is you lastname?" },
            { id: "3", question: "What is your age?" },
            { id: "4", question: "What is your address?" }
        ]
    };
}

export function setAdditionalQuestionsAnswer(payload) {
    return {
        type: SET_ADDITIONAL_QUESTIONS_ANSWER,
        payload: payload
    };
}

export function setExtraInfo(payload) {
    return {
        type: SET_EXTRA_INFO,
        payload: payload
    };
}
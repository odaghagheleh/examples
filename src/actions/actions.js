
export const GET_TRANSACTION_LIST = 'GET_TRANSACTION_LIST';
export const GET_TRANSACTION_HISTORY = 'GET_TRANSACTION_HISTORY';
export const ADD_DISPUTE = 'ADD_DISPUTE';
export const GET_DISPUTE_REASON_QUESTIONS = 'GET_DISPUTE_REASON_QUESTIONS';
export const SET_DISPUTE_REASON_ANSWER = 'SET_DISPUTE_REASON_ANSWER';
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
                "extraDescriptions": [{
                    id: '1',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            },
            {
                "id": "2",
                "recentActivity": "18/03/2018",
                "type": "Charge",
                "Description": "Good",
                "Amount": -24,
                "Balance": 36,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            },
            {
                "id": "3",
                "recentActivity": "18/03/2018",
                "type": "Transfer",
                "Description": "Bad",
                "Amount": 25,
                "Balance": -36,
                "extraDescriptions": [{
                    id: '3',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            },
            {
                "id": "4",
                "recentActivity": "18/03/2018",
                "type": "Charge",
                "Description": "Good",
                "Amount": -24,
                "Balance": 36,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            },
            {
                "id": "5",
                "recentActivity": "18/03/2018",
                "type": "Transfer",
                "Description": "Bad",
                "Amount": 25,
                "Balance": -36,
                "extraDescriptions": [{
                    id: '3',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            },
            {
                "id": "6",
                "recentActivity": "18/03/2018",
                "type": "Charge",
                "Description": "Good",
                "Amount": -24,
                "Balance": 36,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            },
            {
                "id": "7",
                "recentActivity": "18/03/2018",
                "type": "Transfer",
                "Description": "Bad",
                "Amount": 25,
                "Balance": -36,
                "extraDescriptions": [{
                    id: '3',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            },
            {
                "id": "8",
                "recentActivity": "18/03/2018",
                "type": "Charge",
                "Description": "Good",
                "Amount": -24,
                "Balance": 36,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            },
            {
                "id": "9",
                "recentActivity": "18/03/2018",
                "type": "Transfer",
                "Description": "Bad",
                "Amount": 25,
                "Balance": -36,
                "extraDescriptions": [{
                    id: '3',
                    Transaction_Details: 'Transaction Code',
                    code: '0012ABC',
                    where_you_Paid: 'Where you paid',
                    description: 'Description of Shop or other Seller',
                    balance: '123eedd'
                }]
            }
        ]
    };
}
export function addDispute(transactionList) {
    return {
        type: ADD_DISPUTE,
        payload: transactionList
    };
}
export function getDisputeReasonQuestions() {
    return {
        type: GET_DISPUTE_REASON_QUESTIONS,
        payload: [
            {
                id: 1,
                question: 'I cancelled ... '
            },
            {
                id: 1,
                question: 'I recieved incorrect ...'
            },
            {
                id: 1,
                question: 'I was charged ...'
            }
        ]
    };
}
export function setDisputeReasonAnswer(answer) {
    return {
        type: SET_DISPUTE_REASON_ANSWER,
        payload: answer
    };
}
export function addCreditCardQuestionAnswer(answers) {
    return {
        type: ADD_CREDIT_CARD_QUESTION_ANSWER,
        payload: answers
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
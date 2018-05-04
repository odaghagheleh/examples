import request from "../../node_modules/superagent/superagent";
export const GET_TRANSACTION_LIST = 'GET_TRANSACTION_LIST';
export const GET_TRANSACTION_HISTORY = 'GET_TRANSACTION_HISTORY';
export const ADD_DISPUTE = 'ADD_DISPUTE';
export const GET_DISPUTE_REASON_QUESTIONS = 'GET_DISPUTE_REASON_QUESTIONS';
export const SET_DISPUTE_REASON_ANSWER = 'SET_DISPUTE_REASON_ANSWER';
export const ADD_CREDIT_CARD_QUESTION_ANSWER = 'ADD_CREDIT_CARD_QUESTION_ANSWER ';
export const GET_ADDITIONAL_QUESTIONS = 'GET_ADDITIONAL_QUESTIONS ';
export const SET_ADDITIONAL_QUESTIONS_ANSWER = 'SET_ADDITIONAL_QUESTIONS_ANSWER';
export const SET_EXTRA_INFO = 'SET_EXTRA_INFO';

const targetURL = 'http://localhost:8181/fsi-credit-card-dispute-customer/api/kiebpm/runAdditionalInfoRules/credit-dispute-decisions_1.0-SNAPSHOT';

const expectedJson = {
    "type": "SUCCESS",
    "msg": "Container credit-dispute-decisions_1.0-SNAPSHOT successfully called.",
    "result": {
        "execution-results": {
            "results": [{
                "value": 3,
                "key": "additional-info-fired"
            }, {
                "value": [{
                    "com.fsi.creditcarddisputecase.Cardholder": {
                        "stateCode": "VA",
                        "age": 35,
                        "status": "GOLD",
                        "incidentCount": 2,
                        "balanceRatio": 0.2
                    }
                }, {
                    "com.fsi.creditcarddisputecase.AdditionalInformation": {
                        "questionId": 1,
                        "answerValue": null,
                        "questionType": "boolean",
                        "questionPrompt": "Were any charges related to online purchases?"
                    }
                }, {
                    "com.fsi.creditcarddisputecase.AdditionalInformation": {
                        "questionId": 26,
                        "answerValue": null,
                        "questionType": "boolean",
                        "questionPrompt": "Were any of these charges related to tobacco sales?"
                    }
                }],
                "key": "questions"
            }, {
                "value": 3,
                "key": "cleanup-fired"
            }],
            "facts": [{
                "value": {
                    "org.drools.core.common.DefaultFactHandle": {
                        "external-form": "0:1:2037660233:2037660233:1:DEFAULT:NON_TRAIT:com.fsi.creditcarddisputecase.Cardholder"
                    }
                },
                "key": "cardholder"
            }]
        }
    }
};

const jsonINPUT = {
    "lookup": null,
    "commands": [{
        "insert": {
            "object": {
                "com.fsi.creditcarddisputecase.Cardholder": {
                    "stateCode": "VA",
                    "age": 35,
                    "status": "GOLD",
                    "incidentCount": 2,
                    "balanceRatio": 0.2
                }
            },
            "out-identifier": "cardholder",
            "return-object": false,
            "entry-point": "DEFAULT",
            "disconnected": false
        }
    }, {
        "set-focus": {
            "name": "additional-info"
        }
    }, {
        "fire-all-rules": {
            "max": -1,
            "out-identifier": "additional-info-fired"
        }
    }, {
        "get-objects": {
            "class-object-filter": null,
            "out-identifier": "questions"
        }
    }, {
        "set-focus": {
            "name": "cleanup"
        }
    }, {
        "fire-all-rules": {
            "max": -1,
            "out-identifier": "cleanup-fired"
        }
    }]
};

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
                question: 'I cancelled or returned merchandise or services but did not receive credit or full credit'
            },
            {
                id: 2,
                question: 'I recieved incorrect merchandise, or the quality of merchandise or service was unacceptable'
            },
            {
                id: 3,
                question: 'I was charged in an incorrect amount'
            },
            {
                id: 4,
                question: 'I was charged too many times'
            },
            {
                id: 5,
                question: 'I paid by alternate means'
            },
            {
                id: 6,
                question: 'I either did not receive, or did not receive the full value, of the merchandise or services on the invoices'
            },
            {
                id: 7,
                question: 'I did not authorize the transaction(s)'
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

export function getAdditionalQuestions(payloadArray) {
    payloadArray = processJson(expectedJson);
    console.log(payloadArray);
    return {
        type: GET_ADDITIONAL_QUESTIONS,
        payload: payloadArray
    };
}

export function getAdditionalQuestionsAsync() {
    var payloadArray = [];
    
    
            request
                .post(targetURL)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .auth('pamAdmin', 'redhatpam1!')
                .send(jsonINPUT)
                .then(function (res) {
                    var tmp = {};
                    tmp.status = res.status;
                    tmp.body = res.body;
                //    console.log(tmp.body);
                    payloadArray = processJson(tmp.body);
                    //console.log(payloadArray);                    
                    return getAdditionalQuestionsAsync(payloadArray);
                    

                })
                .catch(function (err) {
                    var tmp = {};
                    
                    tmp.errorMessage = err.message;
                    tmp.errorResponse = err.response;
                    return tmp;
                    // return (err.message);
                });

            

    //payloadArray = processJson(response);
    
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


function processJson(response) {
    //console.log(response);
    if(typeof response == "object") {
    var finalResult = [];
    var length = response.result["execution-results"].results.length;
    var resultArray = response.result["execution-results"].results;
    for (var i = 0; i < length; i++) {
        if (resultArray[i].key === 'questions') {
            var anotherArray = resultArray[i].value;
            for (var j = 0; j < anotherArray.length; j++) {
                var oneMoreArray = Object.keys(anotherArray[j]);
                for (var k = 0; k < oneMoreArray.length; k++) {
                    if (oneMoreArray[k] === 'com.fsi.creditcarddisputecase.AdditionalInformation') {
                        var tmp = {};
                        tmp.id = anotherArray[j]['com.fsi.creditcarddisputecase.AdditionalInformation'].questionId;
                        tmp.question = anotherArray[j]['com.fsi.creditcarddisputecase.AdditionalInformation'].questionPrompt;
                        finalResult.push(tmp);
                    }
                }
            }
        }
    }

    return finalResult;
}else{
    console.log("No")
    return response;
}
}

function responseFromRest() {
    var mockOrNot = false;

    if (mockOrNot === true) {
        return ({
            "type": "SUCCESS",
            "msg": "Container credit-dispute-decisions_1.0-SNAPSHOT successfully called.",
            "result": {
                "execution-results": {
                    "results": [{
                        "value": 3,
                        "key": "additional-info-fired"
                    }, {
                        "value": [{
                            "com.fsi.creditcarddisputecase.Cardholder": {
                                "stateCode": "VA",
                                "age": 35,
                                "status": "GOLD",
                                "incidentCount": 2,
                                "balanceRatio": 0.2
                            }
                        }, {
                            "com.fsi.creditcarddisputecase.AdditionalInformation": {
                                "questionId": 1,
                                "answerValue": null,
                                "questionType": "boolean",
                                "questionPrompt": "Were any charges related to online purchases?"
                            }
                        }, {
                            "com.fsi.creditcarddisputecase.AdditionalInformation": {
                                "questionId": 26,
                                "answerValue": null,
                                "questionType": "boolean",
                                "questionPrompt": "Were any of these charges related to tobacco sales?"
                            }
                        }],
                        "key": "questions"
                    }, {
                        "value": 3,
                        "key": "cleanup-fired"
                    }],
                    "facts": [{
                        "value": {
                            "org.drools.core.common.DefaultFactHandle": {
                                "external-form": "0:1:2037660233:2037660233:1:DEFAULT:NON_TRAIT:com.fsi.creditcarddisputecase.Cardholder"
                            }
                        },
                        "key": "cardholder"
                    }]
                }
            }
        });
    } else {
    
            request
                .post('http://localhost:8181/fsi-credit-card-dispute-customer/api/kiebpm/runAdditionalInfoRules/credit-dispute-decisions_1.0-SNAPSHOT')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .auth('pamAdmin', 'redhatpam1!')
                .send(jsonINPUT)
                .then(function (res) {
                    var tmp = {};
                    tmp.status = res.status;
                    tmp.body = res.body;
                    console.log(JSON.stringify(tmp.body));
                    return (JSON.stringify(tmp.body));
                })
                .catch(function (err) {
                    var tmp = {};
                    
                    tmp.errorMessage = err.message;
                    tmp.errorResponse = err.response;
                    return tmp;
                    // return (err.message);
                });
    }
}



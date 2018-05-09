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
export const SUBMIT_DISPUTE = 'SUBMIT_DISPUTE';
export const GET_NOTIFICATION_HISTORY = 'GET_NOTIFICATION_HISTORY';

export function getNotificationList() {
    return {
        type: GET_NOTIFICATION_HISTORY,
        payload: [
            {
           "case-id": "FR-0000000052",
           "case-description": "FraudDispute",
           "case-owner": "krisv",
           "case-status": 2,
           "case-details": {
               "customerStatus": "STANDARD",
               "customerAge": 19,
               "automated": false,
               "incidentCount": 5,
               "cardholderRiskRating": 5,
               "disputeRiskRating": 5,
               "totalFraudAmount": 232
           },
           "case-definition-id": "CreditCardDisputeCase.FraudDispute",
           "container-id": "credit-dispute-case_1.0-SNAPSHOT",
           "case-started-at": 1525611129169,
           "case-completed-at": null,
           "case-completion-msg": "",
           "case-sla-compliance": 0,
           "case-sla-due-date": null,
           "case-file": null,
           "case-milestones": null,
           "case-stages": null,
           "case-roles": null
       },
       {
           "case-id": "FR-0000000049",
           "case-description": "FraudDispute",
           "case-owner": "krisv",
           "case-status": 1,
           "case-details": {
               "customerStatus": "STANDARD",
               "customerAge": 19,
               "automated": false,
               "incidentCount": 5,
               "cardholderRiskRating": 5,
               "disputeRiskRating": 5,
               "totalFraudAmount": 432
           },
           "case-definition-id": "CreditCardDisputeCase.FraudDispute",
           "container-id": "credit-dispute-case_1.0-SNAPSHOT",
           "case-started-at": 1525316833590,
           "case-completed-at": null,
           "case-completion-msg": "",
           "case-sla-compliance": 0,
           "case-sla-due-date": null,
           "case-file": null,
           "case-milestones": null,
           "case-stages": null,
           "case-roles": null
       },
       {
           "case-id": "FR-0000000048",
           "case-description": "FraudDispute",
           "case-owner": "krisv",
           "case-status": 1,
           "case-details": {
               "customerStatus": "STANDARD",
               "customerAge": 19,
               "automated": false,
               "incidentCount": 5,
               "cardholderRiskRating": 5,
               "disputeRiskRating": 5,
               "totalFraudAmount": 123
           },
           "case-definition-id": "CreditCardDisputeCase.FraudDispute",
           "container-id": "credit-dispute-case_1.0-SNAPSHOT",
           "case-started-at": 1525260638509,
           "case-completed-at": null,
           "case-completion-msg": "",
           "case-sla-compliance": 0,
           "case-sla-due-date": null,
           "case-file": null,
           "case-milestones": null,
           "case-stages": null,
           "case-roles": null
       },
       {
           "case-id": "FR-0000000046",
           "case-description": "FraudDispute",
           "case-owner": "krisv",
           "case-status": 3,
           "case-details": {
               "customerStatus": "STANDARD",
               "customerAge": 19,
               "automated": false,
               "incidentCount": 5,
               "cardholderRiskRating": 5,
               "disputeRiskRating": 5,
               "totalFraudAmount": 554
           },
           "case-definition-id": "CreditCardDisputeCase.FraudDispute",
           "container-id": "credit-dispute-case_1.0-SNAPSHOT",
           "case-started-at": 1525228816193,
           "case-completed-at": null,
           "case-completion-msg": "",
           "case-sla-compliance": 0,
           "case-sla-due-date": null,
           "case-file": null,
           "case-milestones": null,
           "case-stages": null,
           "case-roles": null
       },
       {
           "case-id": "FR-0000000045",
           "case-description": "FraudDispute",
           "case-owner": "krisv",
           "case-status": 1,
           "case-details": {
               "customerStatus": "STANDARD",
               "customerAge": 19,
               "automated": false,
               "incidentCount": 5,
               "cardholderRiskRating": 5,
               "disputeRiskRating": 5,
               "totalFraudAmount": 3245
           },
           "case-definition-id": "CreditCardDisputeCase.FraudDispute",
           "container-id": "credit-dispute-case_1.0-SNAPSHOT",
           "case-started-at": 1525214554305,
           "case-completed-at": null,
           "case-completion-msg": "",
           "case-sla-compliance": 0,
           "case-sla-due-date": null,
           "case-file": null,
           "case-milestones": null,
           "case-stages": null,
           "case-roles": null
       },
       {
           "case-id": "FR-0000000044",
           "case-description": "FraudDispute",
           "case-owner": "krisv",
           "case-status": 2,
           "case-details": {
               "customerStatus": "STANDARD",
               "customerAge": 19,
               "automated": false,
               "incidentCount": 5,
               "cardholderRiskRating": 5,
               "disputeRiskRating": 5,
               "totalFraudAmount": 2342
           },
           "case-definition-id": "CreditCardDisputeCase.FraudDispute",
           "container-id": "credit-dispute-case_1.0-SNAPSHOT",
           "case-started-at": 1525214507048,
           "case-completed-at": null,
           "case-completion-msg": "",
           "case-sla-compliance": 0,
           "case-sla-due-date": null,
           "case-file": null,
           "case-milestones": null,
           "case-stages": null,
           "case-roles": null
       },
       {
           "case-id": "FR-0000000043",
           "case-description": "FraudDispute",
           "case-owner": "krisv",
           "case-status": 1,
           "case-details": {
               "customerStatus": "STANDARD",
               "customerAge": 19,
               "automated": false,
               "incidentCount": 5,
               "cardholderRiskRating": 5,
               "disputeRiskRating": 5,
               "totalFraudAmount": 654
           },
           "case-definition-id": "CreditCardDisputeCase.FraudDispute",
           "container-id": "credit-dispute-case_1.0-SNAPSHOT",
           "case-started-at": 1525213972215,
           "case-completed-at": null,
           "case-completion-msg": "",
           "case-sla-compliance": 0,
           "case-sla-due-date": null,
           "case-file": null,
           "case-milestones": null,
           "case-stages": null,
           "case-roles": null
       }
        ]
    };
}

//Comment before deploying on the server
 const GET_DYNAMIC_QUESTIONS_TARGET_URL = 'http://'+window.location.host+'/fsi-credit-card-dispute-customer/api/kiebpm/runAdditionalInfoRules/credit-dispute-decisions_1.0-SNAPSHOT';
 const POST_START_CASE_TARGET_URL = 'http://'+window.location.host+'/fsi-credit-card-dispute-customer/api/kiebpm/startCase/credit-dispute-case_1.0-SNAPSHOT/CreditCardDisputeCase.FraudDispute';

// //Uncomment to run on local host
//const GET_DYNAMIC_QUESTIONS_TARGET_URL = 'http://localhost:8181/fsi-credit-card-dispute-customer/api/kiebpm/runAdditionalInfoRules/credit-dispute-decisions_1.0-SNAPSHOT';
//const POST_START_CASE_TARGET_URL = 'http://localhost:8181/fsi-credit-card-dispute-customer/api/kiebpm/startCase/credit-dispute-case_1.0-SNAPSHOT/CreditCardDisputeCase.FraudDispute';

const MOCK_DYNAMIC_QUESTION = {
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

const POST_DYNAMIC_QUESTION_PAYLOAD = {
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
const START_CASE_PAYLOAD={
    "case-data" : {
      "totalFraudAmount" : 5,
        "customerStatus" : "GOLD",
        "customerAge" : 25,
        "incidentCount" : 1
    },
    "case-user-assignments" : {
        "owner" : "pamAdmin",
      "fraud-manager" : "pamAdmin"
    },
    "case-group-assignments" : {
      "fraud-manager" : "IT"
   }
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
                "recentActivity": "03/18/2017 12:23 PM",
                "time":"12:23 PM",
                "type": "Sale",
                "Description": "Lowes 1452",
                "Amount": 129.00,
                "Balance": 193.20,
                "extraDescriptions": [{
                    id: '1',
                    Transaction_Details: 'Some details',
                    code: '6012ABC',
                    where_you_Paid: 'In-person transaction, Tampa, FL',
                    description: 'Hardware and household goods',
                    balance: '$193.20'
                }]
            },
            {
                "id": "2",
                "recentActivity": "03/14/2017 5:00 PM",
                "time":"5:00 PM",
                "type": "Payment",
                "Description": "Payment - Web",
                "Amount": -25.00,
                "Balance": 64.20,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Some details',
                    code: 'A012PMT',
                    where_you_Paid: 'Payment - Online',
                    description: 'Online Transaction',
                    balance: '$64.20'
                }]
            },
            {
                "id": "3",
                "recentActivity": "03/13/2017 3:40 PM",
                "time":"03:40 PM",
                "type": "Sale",
                "Description": "Jet.com",
                "Amount": 10.50,
                "Balance": 89.20,
                "extraDescriptions": [{
                    id: '3',
                    Transaction_Details: 'Some details',
                    code: '52362TRE',
                    where_you_Paid: 'Online transaction',
                    description: 'General retail',
                    balance: '$89.20'
                }]
            },
            {
                "id": "4",
                "recentActivity": "03/10/2017 10:48 PM",
                "time":"10:48 PM",
                "type": "Sale",
                "Description": "Walmart 1445",
                "Amount": 45.00,
                "Balance": 78.70,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Some details',
                    code: '1054TPX',
                    where_you_Paid: 'In-person transaction, Oakland, CA',
                    description: 'General retail',
                    balance: '$78.70'
                }]
            },
            {
                "id": "5",
                "recentActivity": "03/08/2017 12:23 PM",
                "time":"12:23 PM",
                "type": "Payment",
                "Description": "Payment - Web",
                "Amount": -50.00,
                "Balance": 33.70,
                "extraDescriptions": [{
                    id: '3',
                    Transaction_Details: 'Some details',
                    code: '0019DFT',
                    where_you_Paid: 'Online payment',
                    description: 'Online Transaction',
                    balance: '$33.70'
                }]
            },
            {
                "id": "6",
                "recentActivity": "03/07/2017 5:00 AM",
                "time":"5:00 AM",
                "type": "Sale",
                "Description": "Amazon.com",
                "Amount": 25.00,
                "Balance": 83.70,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Some details',
                    code: '0019XCD',
                    where_you_Paid: 'Online transaction',
                    description: 'Online retail',
                    balance: '$83.70'
                }]
            },
            {
                "id": "7",
                "recentActivity": "03/04/2017 3:49 PM",
                "time":"03:49 PM",
                "type": "Sale",
                "Description": "Starbucks",
                "Amount": 8.70,
                "Balance": 58.70,
                "extraDescriptions": [{
                    id: '3',
                    Transaction_Details: 'Some details',
                    code: '0013FDE',
                    where_you_Paid: 'In-person transaction, San Jose, CA',
                    description: 'Food and Beverage',
                    balance: '$58.70'
                }]
            },
            {
                "id": "8",
                "recentActivity": "03/03/2017 11:45 AM",
                "time":"12:00 AM",
                "type": "Sale",
                "Description": "Caffe Savona",
                "Amount": 50.00,
                "Balance": 50.00,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Some details',
                    code: '0012ABC',
                    where_you_Paid: 'In-person transaction, Mountain View, CA',
                    description: 'Food and Beverage',
                    balance: '$50.00'
                }]
            },
            {
                "id": "9",
                "recentActivity": "03/08/2017 11:00 AM",
                "time":"11:00 AM",
                "type": "Sale",
                "Description": "Caffe Savona",
                "Amount": 500.00,
                "Balance": 500.00,
                "extraDescriptions": [{
                    id: '2',
                    Transaction_Details: 'Some details',
                    code: '0012ABC',
                    where_you_Paid: 'In-person transaction, Mountain View, CA',
                    description: 'Food and Beverage',
                    balance: '$500.00'
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

//uncomment to enable mock dynamic question
// export function getAdditionalQuestions() {
//     const payloadArray = processJson(MOCK_DYNAMIC_QUESTION);
//     return {
//         type: GET_ADDITIONAL_QUESTIONS,
//         payload: payloadArray
//     };
// }

export function getAdditionalQuestions() {
    console.log(window.location.host);
    return function (dispatch) {

        var payloadArray = [];
        request
            .post(GET_DYNAMIC_QUESTIONS_TARGET_URL)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .auth('pamAdmin', 'redhatpam1!')
            .send(POST_DYNAMIC_QUESTION_PAYLOAD)
            .then( (res) => {
                var tmp = {};
                tmp.status = res.status;
                tmp.body = res.body;
                //    console.log(tmp.body);
                payloadArray = processJson(tmp.body);
                //console.log(payloadArray);
                return dispatch({type: GET_ADDITIONAL_QUESTIONS, payload:payloadArray});


            })
            .catch((err)=> {
                var tmp = {};

                tmp.errorMessage = err.message;
                tmp.errorResponse = err.response;
                return dispatch({type: GET_ADDITIONAL_QUESTIONS, payload:{"id":"", "question":""}});;
                // return (err.message);
            });

    }

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


export function submitDispute() {
    return function (dispatch) {

        var payloadArray = [];
        request
            .post(POST_START_CASE_TARGET_URL)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .auth('pamAdmin', 'redhatpam1!')
            .send(START_CASE_PAYLOAD)
            .then( (res) => {
                var tmp = {};
                tmp.status = res.status;
                tmp.body = res.body;
                //    console.log(tmp.body);
                payloadArray = tmp.body;
                //console.log(payloadArray);
                return dispatch({type: SUBMIT_DISPUTE, payload:payloadArray.caseId});


            })
            .catch((err)=> {
                var tmp = {};

                tmp.errorMessage = err.message;
                tmp.errorResponse = err.response;
                return dispatch({type: SUBMIT_DISPUTE, payload:"FR-0000000012"});
                // return (err.message);
            });

    }

}
//HELPERS
function processJson(response) {
    //console.log(response);
    if (typeof response == "object") {
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
    } else {
        console.log("No")
        return response;
    }

    return finalResult;
}

function responseFromRest() {
    var mockOrNot = true;

    if (mockOrNot == true) {
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



    }
}

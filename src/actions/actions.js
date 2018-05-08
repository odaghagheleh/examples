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
                "id": "2",
                "recentActivity": "03/18/2017",
                "time":"12:23 PM",
                "type": "Payment",
                "Description": "Lorem Ipsum is simply ...",
                "Amount": +129.00,
                "Balance": +129.00,
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
                "recentActivity": "03/14/2017",
                "time":"5:00 PM",
                "type": "Payment",
                "Description": "Lorem Ipsum is simply ...",
                "Amount": -25.00,
                "Balance": -25.00,
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
                "recentActivity": "03/13/2017",
                "time":"03:40 PM",
                "type": "Charge",
                "Description": "Lorem Ipsum is simply ...",
                "Amount": -8.70,
                "Balance": -8.70,
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
                "recentActivity": "03/10/2017",
                "time":"10:48 PM",
                "type": "Charge",
                "Description": "Lorem Ipsum is simply ...",
                "Amount": -50.00,
                "Balance": -50.00,
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
                "recentActivity": "03/08/2017",
                "time":"12:23 PM",
                "type": "Transfer",
                "Description": "Lorem Ipsum is simply ...",
                "Amount": -129.00,
                "Balance": -129.00,
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
                "recentActivity": "03/07/2017",
                "time":"5:00 AM",
                "type": "Payment",
                "Description": "Lorem Ipsum is simply ...",
                "Amount": -25.00,
                "Balance": -25.00,
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
                "recentActivity": "03/04/2017",
                "time":"03:49 PM",
                "type": "Payment",
                "Description": "Lorem Ipsum is simply ...",
                "Amount": -8.70,
                "Balance": -8.70,
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
                "recentActivity": "03/03/2017",
                "time":"12:00 AM",
                "type": "Charge",
                "Description": "Lorem Ipsum is simply ...",
                "Amount": -50,
                "Balance": -50,
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

export function getAdditionalQuestions() {
    var payloadArray = [];
    var response = responseFromRest();
    console.log('testing');
    myRest();
    payloadArray = processJson(response);
    return {
        type: GET_ADDITIONAL_QUESTIONS,
        payload: payloadArray
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

function myRest() {
    request
            .post('https://httpbin.org/anything')
            .set('Content-Type', 'application/json')
            .auth('pamAdmin', 'redhatpam1!')
            .send(" INput json here")
            .then(function (res) {
                var tmp = {};
                tmp.status = res.status;
                tmp.body = res.body;
                console.log(tmp.body);
            })
            .catch(function (err) {
                console.log("Failed");
                console.log(err.message);
                console.log(err.response);
               // return (err.message);
            });
}
function processJson(response) {

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

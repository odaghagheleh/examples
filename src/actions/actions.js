export const ADD_DISPUTE = 'ADD_DISPUTE'

export function addDispute(transactionList){
    return {
        type: ADD_DISPUTE,
        transactionList: transactionList
    };
}
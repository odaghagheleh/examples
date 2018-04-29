import { combineReducers } from 'redux';
import { GET_WORK_LIST, ADD_WORK_TASK, GET_TASKS, SET_TASK} from './../actions/actions'

//Work List Reducer
function workList(state, action) {
    switch (action.type) {
        case GET_WORK_LIST:
            return action.payload;

        default:
            return state
    }
}

function workLists(state = [], action) {
    switch (action.type) {
        case GET_WORK_LIST:
            return workList(undefined, action)
        default:
            return state
    }
}

//Work Task Reducer
function workTask(state, action) {
    switch (action.type) {
        case ADD_WORK_TASK:
            return action.payload;

        default:
            return state
    }
}

function workTasks(state = [], action) {
    switch (action.type) {
        case ADD_WORK_TASK:
            return workTask(undefined, action)
        default:
            return state
    }
}

//Task Reducer
function task(state, action) {
    switch (action.type) {
        case GET_TASKS:
            return action.payload;

        default:
            return state
    }
}

function tasks(state = [], action) {
    switch (action.type) {
        case GET_TASKS:
            return task(undefined, action)
        default:
            return state
    }
}

//Task Reducer
function setTask(state, action) {
    switch (action.type) {
        case SET_TASK:
            return action.payload;

        default:
            return state
    }
}

function setTasks(state = [], action) {
    switch (action.type) {
        case SET_TASK:
            return setTask(undefined, action)
        default:
            return state
    }
}
//Returning the reducers
const transactionDisputeReducer = combineReducers({
    workLists,
    workTasks,
    tasks,
    setTasks

})
export default transactionDisputeReducer
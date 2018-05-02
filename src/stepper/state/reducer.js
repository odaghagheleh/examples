import { combineReducers } from 'redux';

import {
  SET_CURRENT_STEP,
  STEP_UP,
  STEP_DOWN,
  SET_TOTAL_STEPS,
} from './types';

const defaultState = {
  currentStep: 0,
  totalSteps: 0,
};

const totalSteps = (state = defaultState.totalSteps, action = {}) => {
  switch (action.type) {
      case SET_TOTAL_STEPS:
        return action.payload.totalSteps;
      default:
        return state;
  }
};

const currentStep = (state = defaultState.currentStep, action = {}) => {
  switch (action.type) {
      case SET_CURRENT_STEP:
        return action.payload.step;
      case STEP_UP:
        return state + 1;
      case STEP_DOWN:
        return state - 1;
      default:
        return state;
  }
};

export default combineReducers({
  currentStep,
  totalSteps,
});

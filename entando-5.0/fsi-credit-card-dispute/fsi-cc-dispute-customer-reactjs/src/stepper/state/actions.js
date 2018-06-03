import {
  SET_CURRENT_STEP,
  STEP_UP,
  STEP_DOWN,
  SET_TOTAL_STEPS,
} from './types';

export const setCurrentStep = step => ({
    type: SET_CURRENT_STEP,
    payload: {
      step,
    },
});

export const stepUp = () => ({
    type: SET_CURRENT_STEP,
});

export const stepDown = step => ({
    type: SET_CURRENT_STEP,
});

export const setTotalSteps = totalSteps => ({
  type: SET_TOTAL_STEPS,
  payload: {
    totalSteps,
  },
});

export const SET_CURRENT_STEP = 'stepper/set-current-step';
export const STEP_UP = 'stepper/step-up';
export const STEP_DOWN = 'stepper/step-down';
export const SET_TOTAL_STEPS = 'stepper/set-total-steps';

export const setCurrentStep = step => ({
    type: SET_CURRENT_STEP,
    payload: {
      step,
    },
});

export const stepUp = () => ({
    type: STEP_UP,
});

export const stepDown = step => ({
    type: STEP_DOWN,
});

export const setTotalSteps = totalSteps => ({
  type: SET_TOTAL_STEPS,
  payload: {
    totalSteps,
  },
});

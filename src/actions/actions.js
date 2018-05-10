
export const GET_WORK_LIST = 'GET_WORK_LIST';
export const ADD_WORK_TASK = 'ADD_WORK_TASK';
export const GET_TASKS = 'GET_TASKS';
export const SET_TASK = 'SET_TASK';


export function getWorkList() {
  return {
    type: GET_WORK_LIST,
    payload: [
      {
        id: '1',
        task: '018',
        customerName: 'Kevin Smith',
        typeOfDispute: 'Credit Card Issue',
        lastUpload: '2 days ago',
        typeOfIssues: 'Credit Card Issue',
        lastChecked: '2 min ago',
        status: '',
        extraDescriptions: [{
          id: '1',
          Transaction_Details: 'Some details',
          code: '6012ABC',
          where_you_Paid: 'In-person transaction, Tampa, FL',
          description: 'Hardware and household goods',
        }],
      },
      {
        id: '2',
        task: '042',
        customerName: 'Alanna Searle',
        typeOfDispute: 'Credit Not received',
        lastUpload: '2 days ago',
        typeOfIssues: 'Credit Not received',
        lastChecked: '2 min ago',
        status: '',
        extraDescriptions: [{
          id: '2',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'Where you paid',
          description: 'General retail',
        }],
      },
      {
        id: '3',
        task: '022',
        customerName: 'Macsen Bowler',
        typeOfDispute: 'Incorrect merchandise',
        lastUpload: '2 days ago',
        typeOfIssues: 'Incorrect merchandise',
        lastChecked: '2 min ago',
        status: '',
        extraDescriptions: [{
          id: '3',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'In-person transaction, Oakland, CA',
          description: 'Description of Shop or other Seller',
        }],
      },
      {
        id: '4',
        task: '015',
        customerName: 'Lowri Reader',
        typeOfDispute: 'Incorrect account',
        lastUpload: '2 days ago',
        typeOfIssues: 'Credit Card Issue',
        lastChecked: '2 min ago',
        status: '',
        extraDescriptions: [{
          id: '4',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'Online payment',
          description: 'Online Transaction',
        }],
      },
      {
        id: '5',
        task: '080',
        customerName: 'Coen Clements',
        typeOfDispute: 'Charged too many times',
        lastUpload: '2 days ago',
        typeOfIssues: 'Charged too many times',
        lastChecked: '2 min ago',
        status: '',
        extraDescriptions: [{
          id: '5',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'In-person transaction, Oakland, CA',
          description: 'Description of Shop or other Seller',
        }],
      },
      {
        id: '6',
        task: '024',
        customerName: 'Lainey Hardy',
        typeOfDispute: 'Alternate means',
        lastUpload: '2 days ago',
        typeOfIssues: 'Credit Card Issue',
        lastChecked: '2 min ago',
        status: '',
        extraDescriptions: [{
          id: '6',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'Online payment',
          description: 'Online Transaction',
        }],
      },
    ],
  };
}
export function addWorkTask(worktask) {
  return {
    type: ADD_WORK_TASK,
    payload: worktask,
  };
}

export function getTasks() {
  return {
    type: GET_TASKS,
    payload: [
      {
        id: '1',
        task: '018',
        lastUpload: '2 days ago',
        typeOfIssues: 'Credit Card Issue',
        lastChecked: '2 min ago',
        status: '',
        extraDescriptions: [{
          id: '1',
          Transaction_Details: 'Some details',
          code: '6012ABC',
          where_you_Paid: 'In-person transaction, Tampa, FL',
          description: 'Hardware and household goods',
        }],
      },
      {
        id: '2',
        task: '042',
        lastUpload: '4 Jun, 2016',
        typeOfIssues: 'Alternate means',
        lastChecked: '2 days ago',
        status: '',
        extraDescriptions: [{
          id: '2',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'Where you paid',
          description: 'General retail',
        }],
      },
      {
        id: '3',
        task: '022',
        lastUpload: '4 Jun, 2016',
        typeOfIssues: 'Full value not received',
        lastChecked: '2 days ago',
        status: '',
        extraDescriptions: [{
          id: '3',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'In-person transaction, Oakland, CA',
          description: 'Description of Shop or other Seller',
        }],
      },
      {
        id: '4',
        task: '015',
        lastUpload: '4 Jun, 2016',
        typeOfIssues: 'Merchandise not received',
        lastChecked: '2 days ago',
        status: '',
        extraDescriptions: [{
          id: '4',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'Online payment',
          description: 'Online Transaction',
        }],
      },
      {
        id: '5',
        task: '080',
        lastUpload: '4 Jun, 2016',
        typeOfIssues: 'Full value not received',
        lastChecked: '2 days ago',
        status: '',
        extraDescriptions: [{
          id: '5',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'In-person transaction, Oakland, CA',
          description: 'Description of Shop or other Seller',
        }],
      },
      {
        id: '6',
        task: '024',
        lastUpload: '4 Jun, 2016',
        typeOfIssues: 'Full value not received',
        lastChecked: '2 days ago',
        status: '',
        extraDescriptions: [{
          id: '6',
          Transaction_Details: 'Some details',
          code: '0012ABC',
          where_you_Paid: 'Online payment',
          description: 'Online Transaction',
        }],
      },
    ],
  };
}
export function setTask(task) {
  return {
    type: SET_TASK,
    payload: task,
  };
}

import * as userConstants from '../constants/userConstants.jsx';
import moment from 'moment';

export function userReducers(state = {
  Page_state:{users:[]},
  StartDateInput_state:{startDate : '', startDateObj: ''},
  EndDateInput_state:{endDate : '', endDateObj: ''},
  FindFioInput_state:{fio : ''},
  StatusSearchResultText_state:{count : 0},
  TableResult_state:{process: false, content:[]},
  NewFioInput_state:{fio : '', focus: false},
  TelephoneInput_state:{telephone : ''},
  NewFioInputHelp_state:{status : false},
  }, action){
  switch (action.type){
    case userConstants.GET_USERS_FULFILLED:{
      state = Object.assign({}, state, {
        TableResult_state:{process: true, content : action.payload.data.data.docs},
        StatusSearchResultText_state:{count : action.payload.data.data.total},
      });
      break;
    };
    case userConstants.SET_START_DATE:{
      state = Object.assign({}, state, {
        StartDateInput_state:{
          startDate: action.payload,
          startDateObj: moment(action.payload, 'DD.MM.YYYY').format() !== 'Invalid date' ? moment(action.payload, 'DD.MM.YYYY').format() : ''
        }
      });
      break;
    };
    case userConstants.CLEAR_START_DATE:{
      state = Object.assign({}, state, {
        StartDateInput_state:{
          startDate: '',
          startDateObj: ''
        }
      });
      break;
    };
    case userConstants.SET_END_DATE:{
      state = Object.assign({}, state, {
        EndDateInput_state:{
          endDate:action.payload,
          endDateObj: moment(action.payload, 'DD.MM.YYYY').format() !== 'Invalid date' ? moment(action.payload, 'DD.MM.YYYY').format() : ''
        }
      });
      break;
    };
    case userConstants.CLEAR_END_DATE:{
      state = Object.assign({}, state, {
        EndDateInput_state:{
          endDate:'',
          endDateObj: ''
        }
      });
      break;
    };
    case userConstants.SET_FIND_INPUT_FIO:{
      state = Object.assign({}, state, {
        FindFioInput_state:{fio:action.payload}
      });
      break;
    };
    case userConstants.CLEAR_FIND_INPUT_FIO:{
      state = Object.assign({}, state, {
        FindFioInput_state:{fio:''}
      });
      break;
    };
    case userConstants.GET_USERS_FULFILLED:{
      state = Object.assign({}, state, {
        TableResult_state:{content:action.payload.data.users, process: true},
        StatusSearchResultText_state:{count: action.payload.data.count}
      });
      break;
    };
    case userConstants.SET_TELEPHONE_INPUT:{
      state = Object.assign({}, state, {
        TelephoneInput_state:{telephone:action.payload}
      });
      break;
    };
    case userConstants.CLEAR_TELEPHONE_INPUT:{
      state = Object.assign({}, state, {
        TelephoneInput_state:{telephone:''}
      });
      break;
    };
    case userConstants.SET_NEW_FIO_INPUT:{
      state = Object.assign({}, state, {
        NewFioInput_state:{fio:action.payload, focus: false},
        NewFioInputHelp_state:{status : false}
      });
      break;
    };
    case userConstants.CLEAR_NEW_FIO_INPUT:{
      state = Object.assign({}, state, {
        NewFioInput_state:{fio:'', focus: false},
        NewFioInputHelp_state:{status : false}
      });
      break;
    };
    case userConstants.FOCUS_NEW_FIO_INPUT:{
      let fio = state.NewFioInput_state.fio;
      state = Object.assign({}, state, {
        NewFioInput_state:{fio, focus: true}
      });
      break;
    };
    case userConstants.STATUS_RED_NEW_FIO_INPUT_TEXT:{
      state = Object.assign({}, state, {
        NewFioInputHelp_state:{status : true}
      });
      break;
    };
    case userConstants.POST_USER_FULFILLED:{
      state = Object.assign({}, state, {
        TableResult_state:{process: true, content:[action.payload.data.user]},
        StatusSearchResultText_state:{count : 1}
      });
      break;
    };
    case userConstants.DELETE_USER_FULFILLED:{
      break;
    };
  }
  return state;
}
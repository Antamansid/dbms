import * as adressConstants from '../constants/adressConstants.jsx';

export function adressReducers(state = {
  NewCardInputAdress_state:{adresses : [], inputAdress: '', focus : false},
  InputFIAS_state:{fias: ''},
  NewCardInputAdressHelp_state:{status : false},
  InputFIASHelp_state:{status: false},
  }, action){
  switch (action.type){
    case adressConstants.GET_ADRESSES_FULFILLED:{
      let inputAdress = state.NewCardInputAdress_state.inputAdress
      let focus = false;
      state = Object.assign({}, state, {
        NewCardInputAdress_state:{adresses:action.payload.data.data.adresses, inputAdress, focus},
        NewCardInputAdressHelp_state:{status : false},
        InputFIASHelp_state:{status : false}
      });
      console.log(action.payload.data);
      break;
    };
    case adressConstants.EDIT_ADRESSES_INPUT:{
      let adresses = state.NewCardInputAdress_state.adresses
      let focus = false;
      state = Object.assign({}, state, {
        NewCardInputAdress_state:{inputAdress:action.payload, adresses, focus},
        NewCardInputAdressHelp_state:{status : false},
        InputFIASHelp_state:{status : false}
      });
      break;
    };
    case adressConstants.CLEAR_ADRESSES_INPUT:{
      let focus = false;
      state = Object.assign({}, state, {
        NewCardInputAdress_state:{inputAdress:'', adresses : [], focus : false},
        NewCardInputAdressHelp_state:{status : false},
        InputFIASHelp_state:{status : false}
      });
      break;
    };
    case adressConstants.EDIT_FIAS_INPUT:{
      state = Object.assign({}, state, {
        InputFIAS_state:{fias:action.payload},
        NewCardInputAdressHelp_state:{status : false},
        InputFIASHelp_state:{status : false}
      });
      break;
    };
    case adressConstants.CLEAR_FIAS_INPUT:{
      state = Object.assign({}, state, {
        InputFIAS_state:{fias:''},
        NewCardInputAdressHelp_state:{status : false},
        InputFIASHelp_state:{status : false}
      });
      break;
    };
    case adressConstants.FOCUS_ADRESS_INPUT:{
      let adresses = state.NewCardInputAdress_state.adresses;
      let inputAdress = state.NewCardInputAdress_state.inputAdress;
      state = Object.assign({}, state, {
        NewCardInputAdress_state:{adresses, inputAdress, focus: true}
      });
      break;
    };
    case adressConstants.STATUS_RED_ADRESS_ADN_FIAS_TEXT:{
      state = Object.assign({}, state, {
        NewCardInputAdressHelp_state:{status : true},
        InputFIASHelp_state:{status : true}
      });
      break;
    };
  }
  return state;
}
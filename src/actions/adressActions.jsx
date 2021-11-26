import * as adressConstants from '../constants/adressConstants.jsx';
import axios from "axios";

export default class adressActions{
  static getAdresses(value){
    let data = axios.get('http://localhost/adress', {
        params:{
          adress: value
        }
    });
    let result = {
      type: adressConstants.GET_ADRESSES,
      payload:data
    }
    return result;
  };
  static editAdressInput(data){
    let result = {
      type: adressConstants.EDIT_ADRESSES_INPUT,
      payload:data
    }
    return result;
  };
  static clearAdressInput(){
    let result = {
      type: adressConstants.CLEAR_ADRESSES_INPUT
    }
    return result;
  };
  static editFiasInput(data){
    let result = {
      type: adressConstants.EDIT_FIAS_INPUT,
      payload:data
    }
    return result;
  };
  static clearFiasInput(){
    let result = {
      type: adressConstants.CLEAR_FIAS_INPUT
    }
    return result;
  };
  static focusAdressInput(){
    let result = {
      type: adressConstants.FOCUS_ADRESS_INPUT
    }
    return result;
  };
  static redAdressAndFIASText(){
    let result = {
      type: adressConstants.STATUS_RED_ADRESS_ADN_FIAS_TEXT
    }
    return result;
  };
}
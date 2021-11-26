import * as userConstants from '../constants/userConstants.jsx';
import axios from "axios";

export default class userActions{
  static getUsers(fio, dateStart, dateEnd){
    let data = axios.get('http://localhost/users', {
        params: {fio, dateStart, dateEnd}
    });
    let result = {
      type: userConstants.GET_USERS,
      payload:data
    }
    return result;
  };
  //Not catshed in reducers
  static deleteUser(id){
    let data = axios.delete('http://localhost/users', {
        params: {id}
    });
    let result = {
      type: userConstants.DELETE_USER,
      payload:data
    }
    return result;
  };
  static setStartDate(date){
    let result = {
      type: userConstants.SET_START_DATE,
      payload: date
    }
    return result;
  };
  static clearStartDate(){
    let result = {
      type: userConstants.CLEAR_START_DATE
    }
    return result;
  };
  static setEndDate(date){
    let result = {
      type: userConstants.SET_END_DATE,
      payload: date
    }
    return result;
  };
  static clearEndDate(){
    let result = {
      type: userConstants.CLEAR_END_DATE
    }
    return result;
  };
  static setFindInputFio(fio){
    let result = {
      type: userConstants.SET_FIND_INPUT_FIO,
      payload: fio
    }
    return result;
  };
  static clearFindInputFio(){
    let result = {
      type: userConstants.CLEAR_FIND_INPUT_FIO
    }
    return result;
  };
  static setTelephoneInput(telephone){
    let result = {
      type: userConstants.SET_TELEPHONE_INPUT,
      payload: telephone
    }
    return result;
  };
  static clearTelephoneInput(){
    let result = {
      type: userConstants.CLEAR_TELEPHONE_INPUT
    }
    return result;
  };
  static setNewInputFio(fio){
    let result = {
      type: userConstants.SET_NEW_FIO_INPUT,
      payload: fio
    }
    return result;
  };
  static clearNewInputFio(){
    let result = {
      type: userConstants.CLEAR_NEW_FIO_INPUT
    }
    return result;
  };
  static focusNewInputFio(){
    let result = {
      type: userConstants.FOCUS_NEW_FIO_INPUT
    }
    return result;
  };
  static redNewInputFioText(){
    let result = {
      type: userConstants.STATUS_RED_NEW_FIO_INPUT_TEXT
    }
    return result;
  };
  static postUser(user){
    let data = axios.post('http://localhost/users', user);
    let result = {
      type: userConstants.POST_USER,
      payload:data
    }
    return result;
  };
}